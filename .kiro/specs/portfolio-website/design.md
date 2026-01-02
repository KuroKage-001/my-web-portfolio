# Design Document: Portfolio Website

## Overview

This design document outlines the architecture and implementation approach for a production-ready personal portfolio website built with React, Vite, Tailwind CSS, and React Router DOM. The application follows a component-based architecture with clear separation of concerns, utilizing React Context for global state management and custom hooks for reusable logic.

The portfolio will be a single-page application (SPA) with client-side routing, featuring four main pages (Home, About, Projects, Contact), dark mode support, responsive design, and comprehensive accessibility features.

## Architecture

### Technology Stack

- **Frontend Framework**: React 18+ (functional components with hooks)
- **Build Tool**: Vite 5+
- **Styling**: Tailwind CSS 3+
- **Routing**: React Router DOM 6+
- **State Management**: React Context API
- **Form Handling**: Custom hooks with controlled components
- **Development**: ESLint for code quality

### Project Structure

```
client/
├── src/
│   ├── assets/
│   │   └── images/          # Image assets
│   ├── components/          # Reusable UI components
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── ThemeToggle.jsx
│   ├── context/             # React Context providers
│   │   └── ThemeContext.jsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useForm.js
│   │   └── useFetch.js
│   ├── layouts/             # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── utils/               # Utility functions and data
│   │   └── projectsData.js
│   ├── App.jsx              # Main app component with routes
│   ├── index.css            # Global styles and Tailwind imports
│   └── main.jsx             # Application entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Project documentation
```

### Architectural Patterns

1. **Component Composition**: Small, focused components composed into larger features
2. **Container/Presentational Pattern**: Separation of logic (hooks) from presentation (components)
3. **Context for Global State**: Theme preferences managed via Context API
4. **Custom Hooks for Logic Reuse**: Form handling and data fetching abstracted into hooks
5. **Layout Components**: Consistent page structure through layout wrappers

## Components and Interfaces

### Core Components

#### 1. MainLayout Component

**Purpose**: Provides consistent page structure with header, footer, and content area.

**Props**: None (uses React Router's Outlet)

**Structure**:
```
MainLayout
├── Skip-to-content link (accessibility)
├── Nav component
├── <main> with Outlet for page content
└── Footer component
```

**Behavior**:
- Renders on all routes as the root layout
- Provides semantic HTML structure
- Includes skip navigation link for accessibility

#### 2. Nav Component

**Purpose**: Primary navigation with responsive mobile menu.

**Props**: None (uses React Router's NavLink)

**State**:
- `isMenuOpen`: boolean - controls mobile menu visibility

**Structure**:
```
<nav>
  ├── Logo/Brand
  ├── Desktop navigation links (hidden on mobile)
  ├── Hamburger button (visible on mobile)
  ├── Mobile menu (conditional render)
  └── ThemeToggle component
</nav>
```

**Behavior**:
- Uses NavLink for automatic active state styling
- Toggles mobile menu on hamburger click
- Closes mobile menu when a link is clicked
- Responsive breakpoint at 768px (md: in Tailwind)

#### 3. ThemeToggle Component

**Purpose**: Toggles between light and dark themes.

**Props**: None (uses ThemeContext)

**Context Usage**:
- Consumes `theme` and `toggleTheme` from ThemeContext

**Structure**:
```
<button>
  ├── Sun icon (visible in dark mode)
  └── Moon icon (visible in light mode)
</button>
```

**Behavior**:
- Calls `toggleTheme()` on click
- Displays appropriate icon based on current theme
- Includes ARIA label for accessibility

#### 4. Hero Component

**Purpose**: Large introductory section on home page.

**Props**:
- `name`: string - developer's name
- `role`: string - developer's role/title
- `tagline`: string - short description

**Structure**:
```
<section>
  ├── <h1> with name
  ├── <h2> with role
  ├── <p> with tagline
  └── CTA buttons (Projects, Contact)
</section>
```

**Behavior**:
- Renders large, centered content
- CTA buttons link to /projects and /contact routes

#### 5. ProjectCard Component

**Purpose**: Displays individual project information with enhanced visual design.

**Props**:
- `title`: string - project name
- `description`: string - project description
- `tags`: string[] - technology tags
- `repoUrl`: string - GitHub repository URL
- `liveUrl`: string - live demo URL
- `image`: string (optional) - project image URL

**Structure**:
```
<article>
  ├── <div> visual header (image or gradient)
  ├── <div> content area
  │   ├── <h3> with title
  │   ├── <p> with description
  │   ├── <div> with enhanced technology tags
  │   └── <div> with prominent action buttons with icons
</article>
```

**Visual Enhancements**:
- Header area: gradient background or project image (min-height: 200px)
- Hover effects: subtle lift (translateY) and glow (shadow enhancement)
- Tag styling: gradient backgrounds, enhanced padding, subtle animations
- Button styling: prominent CTAs with arrow/external link icons
- Gradient accents: consistent with hero section (primary-purple-pink gradient)
- Card depth: layered shadows for 3D effect

**Behavior**:
- Renders all provided props
- Applies enhanced hover effects (lift + glow) via Tailwind classes
- Links open in new tabs with rel="noopener noreferrer"
- Smooth transitions on all interactive elements

#### 6. ContactForm Component

**Purpose**: Form for visitor messages with validation.

**Props**: None (self-contained)

**State** (via useForm hook):
- `values`: object - form field values (name, email, message)
- `errors`: object - validation error messages
- `isSubmitting`: boolean - submission state
- `submitStatus`: string - 'idle' | 'success' | 'error'

**Structure**:
```
<form>
  ├── Name input with error message
  ├── Email input with error message
  ├── Message textarea with error message
  ├── Submit button
  └── Status message (success/error)
</form>
```

**Validation Rules**:
- Name: required, min 2 characters
- Email: required, valid email format (regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
- Message: required, min 10 characters

**Behavior**:
- Validates on blur and submit
- Displays field-specific error messages
- Disables submit button during submission
- Shows success message on successful submit
- Shows error message on failed submit
- Clears form on successful submit

#### 7. Button Component

**Purpose**: Reusable button with variants.

**Props**:
- `children`: ReactNode - button content
- `variant`: 'primary' | 'secondary' - button style
- `onClick`: function - click handler
- `type`: 'button' | 'submit' - button type
- `disabled`: boolean - disabled state
- `className`: string - additional Tailwind classes

**Variants**:
- Primary: solid background, white text
- Secondary: outlined, transparent background

**Behavior**:
- Applies variant-specific Tailwind classes
- Merges custom className with base classes
- Forwards all standard button attributes

#### 8. Footer Component

**Purpose**: Site footer with social links and copyright.

**Props**: None

**Structure**:
```
<footer>
  ├── Social links (GitHub, LinkedIn)
  └── Copyright text
</footer>
```

**Behavior**:
- Renders on all pages via MainLayout
- Social links open in new tabs
- Copyright year can be dynamic (current year)

### Page Components

#### 1. Home Page

**Sections**:
1. Hero section (Hero component)
2. About section with profile image and introduction
3. Featured projects preview (3 ProjectCard components)

**Data**:
- Featured projects: first 3 from projectsData
- Profile image: stored in src/assets/images/

**Profile Image Styling**:
- Circular shape with rounded-full
- Border: 4px solid border in light mode, 4px border in dark mode
- Shadow: subtle shadow in light mode, glow effect in dark mode
- Size: 200px x 200px on desktop, 150px x 150px on mobile
- Position: Centered or left-aligned with text content
- Dark mode: border-gray-700 with shadow-xl for depth

#### 2. About Page

**Sections**:
1. Bio section with detailed description
2. Skills list (grid of skill badges)
3. Experience/learning timeline

**Data**:
- Skills: hardcoded array of strings
- Timeline: hardcoded array of objects with year, title, description

#### 3. Projects Page

**Sections**:
1. Filter controls (buttons for each technology)
2. Projects grid (ProjectCard components)

**State**:
- `selectedFilter`: string - currently selected technology filter ('all' or specific tech)

**Data**:
- Projects: imported from projectsData.js

**Behavior**:
- Filters projects based on selectedFilter
- Shows all projects when filter is 'all'
- Highlights active filter button

#### 4. Contact Page

**Sections**:
1. Contact information (email, phone)
2. ContactForm component
3. Optional: social links

**Data**:
- Email: "your@email.com"
- Phone: "0991-123-4567"

## Data Models

### Project Data Structure

```javascript
{
  id: string,           // Unique identifier
  title: string,        // Project name
  description: string,  // Project description
  tags: string[],       // Technology tags (e.g., ['React', 'Tailwind'])
  repoUrl: string,      // GitHub repository URL
  liveUrl: string,      // Live demo URL
  featured: boolean,    // Whether to show on home page
  image: string         // Optional: project image URL or path
}
```

### Theme Context State

```javascript
{
  theme: 'light' | 'dark',  // Current theme
  toggleTheme: () => void   // Function to toggle theme
}
```

### Form State (useForm hook)

```javascript
{
  values: {
    [fieldName: string]: string  // Field values
  },
  errors: {
    [fieldName: string]: string  // Error messages
  },
  isSubmitting: boolean,
  submitStatus: 'idle' | 'success' | 'error',
  handleChange: (e: Event) => void,
  handleBlur: (e: Event) => void,
  handleSubmit: (e: Event) => void,
  resetForm: () => void
}
```

## State Management

### ThemeContext

**Purpose**: Manage global theme state and persistence.

**Implementation**:
```javascript
// ThemeContext.jsx
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Load from localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    // Apply theme class to document root
    document.documentElement.classList.toggle('dark', theme === 'dark')
    // Persist to localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
```

### Custom Hooks

#### useForm Hook

**Purpose**: Manage form state, validation, and submission.

**Parameters**:
- `initialValues`: object - initial form field values
- `validate`: function - validation function returning errors object
- `onSubmit`: function - submission handler

**Returns**: Form state and handlers (see Data Models section)

**Implementation Approach**:
- Uses useState for values, errors, isSubmitting, submitStatus
- handleChange updates field value
- handleBlur triggers validation for that field
- handleSubmit validates all fields, calls onSubmit if valid
- resetForm clears all fields and errors

#### useFetch Hook

**Purpose**: Handle data fetching with loading and error states.

**Parameters**:
- `url`: string - API endpoint
- `options`: object - fetch options

**Returns**:
```javascript
{
  data: any,
  loading: boolean,
  error: Error | null,
  refetch: () => void
}
```

**Implementation Approach**:
- Uses useState for data, loading, error
- Uses useEffect to fetch on mount or when url changes
- Provides refetch function to manually trigger fetch

## Routing Configuration

**Routes** (defined in App.jsx):
```javascript
<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="projects" element={<Projects />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
</Routes>
```

**Navigation Behavior**:
- All routes use MainLayout as wrapper
- Index route (/) renders Home page
- 404 routes redirect to home
- NavLink automatically applies active class

## Styling Approach

### Tailwind Configuration

**tailwind.config.js**:
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          // ... color scale
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Global Styles (index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100;
  }
}

@layer utilities {
  .focus-visible {
    @apply outline-none ring-2 ring-primary-500 ring-offset-2;
  }
}
```

### Responsive Breakpoints

- Mobile: < 768px (default)
- Tablet: 768px - 1024px (md:)
- Desktop: > 1024px (lg:)

### Dark Mode Implementation

- Uses Tailwind's `dark:` variant
- Controlled by class on `<html>` element
- ThemeContext manages class application
- All components use dark: variants for colors

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navigation Active State

*For any* page route in the application, when a visitor navigates to that route, the corresponding navigation link should display active styling.

**Validates: Requirements 1.3**

### Property 2: Theme Persistence Round Trip

*For any* theme preference ('light' or 'dark'), when a visitor sets the theme, then the preference should be persisted to localStorage, and when the application reloads, the same theme preference should be restored.

**Validates: Requirements 3.3, 3.4**

### Property 3: Project Card Completeness

*For any* project object with title, description, tags, repoUrl, and liveUrl properties, when rendered as a ProjectCard, the component should display all five properties in the output.

**Validates: Requirements 6.2, 11.2**

### Property 4: Project Filtering Correctness

*For any* technology filter selection and project list, when the filter is applied, all displayed projects should contain that technology in their tags array.

**Validates: Requirements 6.4**

### Property 5: Form Validation Completeness

*For any* required form field (name, email, message), when the field is empty and the form is submitted, the form should display a validation error message for that field.

**Validates: Requirements 7.2**

### Property 6: Email Validation

*For any* string that does not match the email format pattern (contains @ and domain), when entered in the email field and validated, the form should display an email validation error.

**Validates: Requirements 7.3**

### Property 7: Keyboard Navigation Accessibility

*For any* interactive element in the application (links, buttons, form inputs), when a visitor uses Tab key navigation, the element should be reachable and receive focus.

**Validates: Requirements 8.3**

### Property 8: Focus Indicator Visibility

*For any* focusable element, when the element receives keyboard focus, a visible focus indicator should be displayed.

**Validates: Requirements 1.6, 8.4**

### Property 9: Skip Link Presence

*For any* page in the application, when the page loads, a skip-to-content link should be present as the first focusable element.

**Validates: Requirements 8.2**

### Property 10: Image Lazy Loading

*For any* image element in the application, the image should have the loading="lazy" attribute applied.

**Validates: Requirements 9.1**

### Property 11: Footer Consistency

*For any* page in the application, when the page renders, the footer component should be present in the DOM.

**Validates: Requirements 10.1**

### Property 12: Theme Toggle Visibility

*For any* page in the application, when the page renders, the theme toggle control should be visible and accessible.

**Validates: Requirements 3.1**

### Property 13: Profile Image Display

*For any* theme mode (light or dark), when the home page loads, the profile image should be displayed with appropriate styling including border and shadow effects specific to that theme.

**Validates: Requirements 4.6, 4.7**

### Property 14: ProjectCard Visual Header Presence

*For any* ProjectCard component, when rendered, the component should display a visual header area (either image or gradient background).

**Validates: Requirements 6.7**

### Property 15: ProjectCard Enhanced Tag Styling

*For any* ProjectCard with technology tags, when rendered, each tag should display with enhanced visual styling including gradient backgrounds.

**Validates: Requirements 6.8**

### Property 16: ProjectCard Button Icons

*For any* ProjectCard with action buttons (repo or live demo), when rendered, the buttons should include appropriate icons.

**Validates: Requirements 6.9**

## Error Handling

### Form Submission Errors

**Strategy**: Try-catch blocks with user-friendly error messages

**Implementation**:
- Wrap fetch calls in try-catch
- Display generic error message on network failure
- Show specific validation errors from API responses
- Maintain form state on error (don't clear inputs)

### Navigation Errors

**Strategy**: Catch-all route redirects to home

**Implementation**:
- 404 routes redirect to home page
- Invalid routes handled by wildcard route

### Theme Loading Errors

**Strategy**: Graceful fallback to default theme

**Implementation**:
- If localStorage is unavailable, default to 'light'
- Wrap localStorage access in try-catch
- Log errors to console for debugging

### Image Loading Errors

**Strategy**: Alt text provides context when images fail

**Implementation**:
- All images have descriptive alt text
- Consider placeholder images for critical content
- Lazy loading prevents blocking page render

## Testing Strategy

### Unit Testing

**Framework**: Vitest + React Testing Library

**Focus Areas**:
- Component rendering with specific props
- User interactions (clicks, form inputs)
- Conditional rendering logic
- Error states and edge cases

**Example Unit Tests**:
- Button component renders with correct variant classes
- ContactForm displays error when email is invalid
- Nav component toggles mobile menu on click
- ThemeToggle calls toggleTheme function on click

### Property-Based Testing

**Framework**: fast-check (JavaScript property-based testing library)

**Configuration**: Minimum 100 iterations per property test

**Focus Areas**:
- Universal properties that hold across all inputs
- Data transformation correctness
- State consistency across operations

**Property Test Implementation**:

Each property test must:
1. Reference its design document property number
2. Use the tag format: `Feature: portfolio-website, Property {number}: {property_text}`
3. Run minimum 100 iterations
4. Generate random valid inputs using fast-check arbitraries

**Example Property Tests**:

```javascript
// Feature: portfolio-website, Property 3: Project Card Completeness
test('ProjectCard displays all provided props', () => {
  fc.assert(
    fc.property(
      fc.record({
        title: fc.string({ minLength: 1 }),
        description: fc.string({ minLength: 1 }),
        tags: fc.array(fc.string({ minLength: 1 }), { minLength: 1 }),
        repoUrl: fc.webUrl(),
        liveUrl: fc.webUrl(),
      }),
      (project) => {
        const { container } = render(<ProjectCard {...project} />)
        const text = container.textContent
        
        return (
          text.includes(project.title) &&
          text.includes(project.description) &&
          project.tags.every(tag => text.includes(tag)) &&
          container.querySelector(`a[href="${project.repoUrl}"]`) !== null &&
          container.querySelector(`a[href="${project.liveUrl}"]`) !== null
        )
      }
    ),
    { numRuns: 100 }
  )
})
```

### Integration Testing

**Focus Areas**:
- Routing between pages
- Theme persistence across page navigation
- Form submission flow
- Filter interaction on Projects page

**Example Integration Tests**:
- Navigating from Home to Projects displays correct page
- Setting theme persists after navigating to different page
- Submitting contact form shows success message

### Accessibility Testing

**Tools**: 
- axe-core (automated accessibility testing)
- Manual keyboard navigation testing

**Focus Areas**:
- Keyboard navigation completeness
- Focus indicator visibility
- Skip link functionality
- ARIA labels and semantic HTML

### Testing Balance

- **Unit tests**: Verify specific examples, component behavior, and edge cases
- **Property tests**: Verify universal properties hold across all inputs (comprehensive input coverage)
- Both types are complementary and necessary for comprehensive coverage
- Property tests handle testing many input variations, reducing need for exhaustive unit tests
- Unit tests focus on specific scenarios, integration points, and error conditions

## Performance Considerations

### Code Splitting

- Use React.lazy() for page components
- Lazy load images with loading="lazy" attribute
- Vite automatically splits vendor code

### Asset Optimization

- Optimize images before adding to project
- Use appropriate image formats (WebP with fallbacks)
- Minimize bundle size by tree-shaking unused code

### Rendering Optimization

- Use React.memo for expensive components if needed
- Avoid unnecessary re-renders with proper state placement
- Keep component tree shallow where possible

## Deployment

### Build Process

```bash
npm run build
```

Vite generates optimized production build in `dist/` directory.

### Deployment Platforms

**Recommended**: Vercel or Netlify (zero-config deployment)

**Steps**:
1. Connect GitHub repository
2. Configure build command: `npm run build`
3. Configure output directory: `dist`
4. Deploy

### Environment Variables

For production API endpoints (if needed):
- Create `.env.production` file
- Prefix variables with `VITE_`
- Access via `import.meta.env.VITE_VARIABLE_NAME`

## Accessibility Compliance

### WCAG 2.1 Level AA Targets

- **Perceivable**: Sufficient color contrast, text alternatives for images
- **Operable**: Keyboard navigation, visible focus indicators, skip links
- **Understandable**: Clear labels, consistent navigation, error messages
- **Robust**: Semantic HTML, valid markup

### Implementation Checklist

- ✓ Semantic HTML elements (nav, main, footer, article)
- ✓ Skip-to-content link
- ✓ Keyboard navigation support
- ✓ Visible focus indicators
- ✓ Alt text for images
- ✓ Form labels and error messages
- ✓ Sufficient color contrast (4.5:1 for normal text)
- ✓ Responsive text sizing

## Browser Support

**Target Browsers**:
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

**Polyfills**: Not required (modern browsers only)

## Development Workflow

### Setup

```bash
cd client
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

### Code Quality

- ESLint for code linting
- Prettier for code formatting (optional)
- Git hooks for pre-commit checks (optional)

## Future Enhancements

Potential features for future iterations:
- Blog section with markdown support
- Project detail pages
- Animations and transitions
- Contact form backend integration
- Analytics integration
- SEO optimization with React Helmet
- Progressive Web App (PWA) features
