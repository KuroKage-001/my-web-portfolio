# Implementation Plan: Hero About Tooltip

## Overview

This implementation adds an interactive "About Me" tooltip to the Hero component's profile image and removes the About Me section from the Home page. The tooltip will appear on hover (desktop), tap (mobile), or keyboard focus, providing a cleaner layout while maintaining information accessibility.

## Tasks

- [x] 1. Remove About Me section from Home page
  - Remove the About Me section JSX from Home.jsx
  - Verify Featured Projects section appears immediately after Hero component
  - _Requirements: 1.1, 1.2_

- [x] 2. Add tooltip state and handlers to Hero component
  - [x] 2.1 Add state management for tooltip visibility
    - Add `showTooltip` state using useState hook
    - Add `aboutText` prop to Hero component
    - _Requirements: 2.1, 2.2_
  
  - [x] 2.2 Implement interaction event handlers
    - Add `handleMouseEnter` to show tooltip on hover
    - Add `handleMouseLeave` to hide tooltip on hover end
    - Add `handleClick` to toggle tooltip on mobile tap
    - Add `handleKeyDown` for Escape key and Enter/Space on focus
    - _Requirements: 2.1, 2.3, 4.1, 5.1, 5.2_
  
  - [ ]* 2.3 Write property test for tooltip visibility on interaction
    - **Property 1: Tooltip visibility on interaction**
    - **Validates: Requirements 2.1, 4.1, 5.1**
  
  - [ ]* 2.4 Write property test for tooltip dismissal behavior
    - **Property 2: Tooltip dismissal behavior**
    - **Validates: Requirements 2.3, 4.2, 5.2**

- [x] 3. Implement tooltip UI component
  - [x] 3.1 Create tooltip JSX structure with conditional rendering
    - Add tooltip container with absolute positioning
    - Add tooltip content with heading and text
    - Include CSS arrow/pointer element
    - _Requirements: 2.2, 3.1_
  
  - [x] 3.2 Add accessibility attributes
    - Add `role="tooltip"` to tooltip container
    - Add `aria-live="polite"` to tooltip
    - Add unique ID to tooltip
    - Add `aria-describedby` to profile image linking to tooltip ID
    - Add `tabIndex="0"` to profile image for keyboard focus
    - _Requirements: 5.3, 5.4_
  
  - [ ]* 3.3 Write property test for content preservation
    - **Property 3: Tooltip content preservation**
    - **Validates: Requirements 3.1**
  
  - [ ]* 3.4 Write property test for accessibility attributes
    - **Property 4: Accessibility attributes presence**
    - **Validates: Requirements 5.3, 5.4**

- [x] 4. Style tooltip with Tailwind CSS
  - [x] 4.1 Add tooltip container styles
    - Position tooltip relative to profile image (bottom on mobile, right on desktop)
    - Add z-index for proper layering
    - Add responsive positioning with breakpoints
    - _Requirements: 3.2, 3.4, 4.3_
  
  - [x] 4.2 Add tooltip content styles
    - Add background color with dark mode support
    - Add padding, border-radius, and box-shadow
    - Set max-width for readability
    - Add text styling for heading and paragraph
    - _Requirements: 2.4, 3.2, 3.3_
  
  - [x] 4.3 Add animations and transitions
    - Add fade-in animation for tooltip appearance
    - Add fade-out animation for tooltip disappearance
    - Add smooth transitions for all interactive states
    - _Requirements: 3.5_
  
  - [ ]* 4.4 Write unit tests for tooltip styling
    - Test max-width is applied
    - Test animation classes are present
    - Test dark mode styles are applied

- [x] 5. Implement mobile-specific behavior
  - [x] 5.1 Add click outside handler for mobile
    - Use useEffect to add/remove document click listener
    - Detect clicks outside profile image container
    - Close tooltip when clicking outside on mobile
    - Use useRef to track container element
    - _Requirements: 4.2_
  
  - [x] 5.2 Add viewport detection for mobile behavior
    - Detect mobile viewport using window.matchMedia or screen width
    - Apply mobile-specific event handlers conditionally
    - _Requirements: 4.1, 4.2_
  
  - [ ]* 5.3 Write unit tests for mobile interactions
    - Test tap toggles tooltip on mobile
    - Test click outside closes tooltip on mobile

- [x] 6. Update Home page to pass aboutText prop to Hero
  - Add `aboutText` prop to Hero component in Home.jsx
  - Pass the About Me summary text: "I'm a passionate full-stack web developer with expertise in building modern, scalable web applications. I specialize in React, Node.js, cloud technologies, and project management."
  - _Requirements: 3.1_

- [x] 7. Checkpoint - Ensure all tests pass
  - Run all unit tests and property tests
  - Verify tooltip appears and disappears correctly
  - Test on different viewport sizes
  - Test keyboard navigation and accessibility
  - Ask the user if questions arise

- [ ]* 8. Write integration tests
  - [ ]* 8.1 Test full Hero component with tooltip interaction
    - Test complete user flow: hover/tap → tooltip appears → dismiss → tooltip closes
    - _Requirements: 2.1, 2.3, 4.1, 4.2_
  
  - [ ]* 8.2 Test Home page without About Me section
    - Verify About Me section is not rendered
    - Verify Featured Projects follows Hero component
    - _Requirements: 1.1, 1.2_
  
  - [ ]* 8.3 Test theme switching with tooltip visible
    - Test tooltip styling updates when theme changes
    - _Requirements: 2.4_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- The tooltip uses absolute positioning relative to the profile image container
- Mobile behavior uses click/tap instead of hover
- Accessibility is built-in with ARIA attributes and keyboard support
- Property tests validate universal correctness properties across many inputs
- Unit tests validate specific examples and edge cases
