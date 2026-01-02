# Design Document

## Overview

This design implements an interactive "About Me" tooltip overlay for the Hero component's profile image. The tooltip will appear on hover (desktop) or tap (mobile), displaying a concise summary of the developer's background. The About Me section will be removed from the Home page to create a cleaner layout while maintaining information accessibility.

## Architecture

The solution follows a component-based architecture using React hooks for state management:

- **Hero Component**: Enhanced with tooltip state and event handlers
- **Tooltip Component**: A reusable, accessible tooltip overlay (optional - can be inline)
- **Home Page**: Simplified by removing the About Me section

The implementation uses CSS positioning (absolute/relative) for tooltip placement and CSS transitions for smooth animations.

## Components and Interfaces

### Enhanced Hero Component

```javascript
// Hero.jsx
export default function Hero({ name, role, tagline, aboutText })
```

**Props:**
- `name` (string): Developer's name
- `role` (string): Professional role/title
- `tagline` (string): Brief tagline
- `aboutText` (string): About Me summary text for tooltip

**State:**
- `isHovered` (boolean): Tracks profile image hover state
- `showTooltip` (boolean): Controls tooltip visibility

**Event Handlers:**
- `handleMouseEnter()`: Shows tooltip on desktop hover
- `handleMouseLeave()`: Hides tooltip when hover ends
- `handleClick()`: Toggles tooltip on mobile tap
- `handleKeyDown(event)`: Handles keyboard accessibility (Escape key)
- `handleClickOutside(event)`: Closes tooltip when clicking outside on mobile

### Tooltip Structure

The tooltip will be positioned relative to the profile image container:

```jsx
<div className="relative">
  {/* Profile Image */}
  <img ... />
  
  {/* Tooltip Overlay */}
  {showTooltip && (
    <div 
      className="absolute tooltip-container"
      role="tooltip"
      aria-live="polite"
    >
      <div className="tooltip-content">
        <h3>About Me</h3>
        <p>{aboutText}</p>
      </div>
    </div>
  )}
</div>
```

## Data Models

### Tooltip Configuration

```javascript
const tooltipConfig = {
  text: "I'm a passionate full-stack web developer with expertise in building modern, scalable web applications. I specialize in React, Node.js, cloud technologies, and project management.",
  position: "bottom-right", // relative to image
  maxWidth: "320px",
  animation: {
    enter: "fade-in 200ms ease-out",
    exit: "fade-out 150ms ease-in"
  }
}
```

### CSS Classes Structure

```css
.tooltip-container {
  /* Positioning */
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  z-index: 50;
  
  /* Responsive positioning */
  @media (lg) {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1rem;
  }
}

.tooltip-content {
  /* Styling */
  background: white;
  dark:background: gray-800;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  max-width: 320px;
  
  /* Arrow/pointer */
  &::before {
    content: '';
    position: absolute;
    /* Triangle pointing to image */
  }
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Tooltip Visibility on Interaction

*For any* valid interaction type (mouse hover, tap/click, keyboard focus), when the interaction is triggered on the profile image, the tooltip should become visible.

**Validates: Requirements 2.1, 4.1, 5.1**

### Property 2: Tooltip Dismissal Behavior

*For any* dismissal action (mouse leave, Escape key press, click outside on mobile), when the tooltip is visible and the dismissal action occurs, the tooltip should close.

**Validates: Requirements 2.3, 4.2, 5.2**

### Property 3: Tooltip Content Preservation

*For any* valid text string provided as the `aboutText` prop, the rendered tooltip content should exactly match the input text without modification or truncation.

**Validates: Requirements 3.1**

### Property 4: Accessibility Attributes Presence

*For any* rendered Hero component with tooltip functionality, the profile image should have the required ARIA attributes (aria-describedby linking to tooltip ID, and the tooltip should have role="tooltip" and aria-live="polite").

**Validates: Requirements 5.3, 5.4**

## Error Handling

### Theme Context Error
- **Issue**: Theme context may not be available
- **Solution**: Fallback to 'light' theme with console error logging (already implemented)

### Missing Props
- **Issue**: `aboutText` prop may be undefined
- **Solution**: Provide default text or hide tooltip if no content available

```javascript
const aboutText = props.aboutText || "Full-stack web developer specializing in modern web applications."
```

### Click Outside on Desktop
- **Issue**: Click outside handler may interfere with desktop hover behavior
- **Solution**: Only attach click outside listener on mobile viewports using `window.matchMedia`

### Tooltip Overflow
- **Issue**: Tooltip may extend beyond viewport on small screens
- **Solution**: Use responsive positioning and max-width constraints with viewport-aware positioning

## Testing Strategy

### Unit Tests

**Hero Component Tests:**
1. Renders with all required props
2. Displays tooltip when `showTooltip` state is true
3. Hides tooltip when `showTooltip` state is false
4. Calls event handlers on appropriate interactions
5. Renders correct ARIA attributes
6. Applies correct CSS classes based on theme

**Specific Examples:**
- Empty `aboutText` prop renders default text
- Escape key press closes tooltip
- Click outside on mobile closes tooltip
- Hover on desktop shows tooltip

### Property-Based Tests

Each property test should run a minimum of 100 iterations to ensure comprehensive coverage.

**Property Test 1: Tooltip Visibility on Interaction**
- Generate random interaction types (hover, click, focus)
- Simulate each interaction on the profile image
- Verify tooltip becomes visible after each interaction type
- **Feature: hero-about-tooltip, Property 1: Tooltip visibility on interaction**

**Property Test 2: Tooltip Dismissal Behavior**
- Generate random dismissal actions (mouse leave, Escape key, click outside)
- Start with tooltip visible, simulate dismissal action
- Verify tooltip closes for each dismissal type
- **Feature: hero-about-tooltip, Property 2: Tooltip dismissal behavior**

**Property Test 3: Content Preservation**
- Generate random valid text strings for `aboutText`
- Render component with generated text
- Verify rendered tooltip content exactly matches input
- **Feature: hero-about-tooltip, Property 3: Tooltip content preservation**

**Property Test 4: Accessibility Attributes**
- Generate random component configurations
- Verify all required ARIA attributes are present (aria-describedby, role="tooltip", aria-live="polite")
- Verify aria-describedby links to correct tooltip ID
- **Feature: hero-about-tooltip, Property 4: Accessibility attributes presence**

### Testing Framework

- **Unit Testing**: Vitest + React Testing Library
- **Property-Based Testing**: fast-check (JavaScript property testing library)
- **Minimum Iterations**: 100 per property test

### Integration Testing

1. Full Hero component render with tooltip interaction
2. Home page render without About Me section
3. Theme switching with tooltip visible
4. Responsive behavior across viewport sizes
