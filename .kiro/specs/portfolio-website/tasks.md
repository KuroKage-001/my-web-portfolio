# Implementation Plan: Portfolio Website

## Overview

This implementation plan breaks down the portfolio website development into discrete, incremental tasks. Each task builds on previous work, starting with project setup and configuration, then implementing core infrastructure (routing, theming), followed by components and pages, and finally testing and polish.

## Tasks

- [x] 1. Project setup and configuration
  - Install dependencies: react-router-dom, tailwindcss, postcss, autoprefixer
  - Configure Tailwind CSS with dark mode enabled
  - Configure PostCSS with Tailwind and Autoprefixer
  - Set up global styles in index.css with Tailwind imports
  - Update package.json with required dependencies
  - _Requirements: 12.1, 12.2, 12.3, 12.5_

- [x] 2. Implement theme management system
  - [x] 2.1 Create ThemeContext with provider and custom hook
    - Implement theme state management (light/dark)
    - Add localStorage persistence for theme preference
    - Apply theme class to document root
    - _Requirements: 3.2, 3.3, 3.4, 3.5_

  - [ ]* 2.2 Write property test for theme persistence round trip
    - **Property 2: Theme Persistence Round Trip**
    - **Validates: Requirements 3.3, 3.4**

  - [x] 2.3 Create ThemeToggle component
    - Implement toggle button with sun/moon icons
    - Connect to ThemeContext
    - Add ARIA labels for accessibility
    - _Requirements: 3.1, 3.2, 11.5_

  - [ ]* 2.4 Write property test for theme toggle visibility
    - **Property 12: Theme Toggle Visibility**
    - **Validates: Requirements 3.1**

- [x] 3. Implement routing and layout structure
  - [x] 3.1 Set up React Router in App.jsx
    - Configure BrowserRouter and Routes
    - Define routes for Home, About, Projects, Contact
    - Add catch-all route redirecting to home
    - _Requirements: 1.1, 1.2_

  - [x] 3.2 Create MainLayout component
    - Implement layout with header, main, footer structure
    - Add skip-to-content link for accessibility
    - Include Outlet for nested routes
    - Use semantic HTML elements
    - _Requirements: 8.2, 8.1_

  - [ ]* 3.3 Write property test for skip link presence
    - **Property 9: Skip Link Presence**
    - **Validates: Requirements 8.2**

  - [x] 3.4 Create Nav component with responsive menu
    - Implement desktop navigation with NavLink components
    - Add mobile hamburger menu with toggle functionality
    - Include ThemeToggle in navigation
    - Apply active link styling
    - _Requirements: 1.1, 1.3, 1.4, 1.5_

  - [ ]* 3.5 Write property test for navigation active state
    - **Property 1: Navigation Active State**
    - **Validates: Requirements 1.3**

  - [ ]* 3.6 Write unit tests for Nav component
    - Test mobile menu toggle functionality
    - Test hamburger button visibility on mobile
    - _Requirements: 1.5_

  - [x] 3.7 Create Footer component
    - Add social links (GitHub, LinkedIn)
    - Add copyright information
    - _Requirements: 10.1, 10.2, 10.3_

  - [ ]* 3.8 Write property test for footer consistency
    - **Property 11: Footer Consistency**
    - **Validates: Requirements 10.1**

- [x] 4. Checkpoint - Ensure routing and layout work correctly
  - Verify navigation between pages
  - Test theme toggle functionality
  - Ensure mobile menu works
  - Ask the user if questions arise

- [x] 5. Create reusable UI components
  - [x] 5.1 Create Button component with variants
    - Implement primary and secondary variants
    - Support disabled state and custom className
    - Forward all button attributes
    - _Requirements: 11.1_

  - [ ]* 5.2 Write unit tests for Button component
    - Test variant styling application
    - Test disabled state
    - _Requirements: 11.1_

  - [x] 5.3 Create ProjectCard component
    - Accept props: title, description, tags, repoUrl, liveUrl, image
    - Render all props in card layout
    - Add hover effects with Tailwind
    - Open links in new tabs with security attributes
    - _Requirements: 6.2, 11.2_

  - [x] 5.3.1 Enhance ProjectCard with visual improvements
    - Add visual header area with image or gradient background
    - Implement enhanced hover effects (lift and glow)
    - Add gradient accents to tags with improved styling
    - Add icons to action buttons (arrow for repo, external link for demo)
    - Apply gradient accents consistent with hero section
    - _Requirements: 6.5, 6.7, 6.8, 6.9, 6.10_

  - [ ]* 5.4 Write property test for project card completeness
    - **Property 3: Project Card Completeness**
    - **Validates: Requirements 6.2, 11.2**

  - [ ]* 5.4.1 Write property tests for enhanced ProjectCard features
    - **Property 14: ProjectCard Visual Header Presence**
    - **Property 15: ProjectCard Enhanced Tag Styling**
    - **Property 16: ProjectCard Button Icons**
    - **Validates: Requirements 6.7, 6.8, 6.9**

  - [x] 5.5 Create Hero component
    - Accept props: name, role, tagline
    - Render large centered content
    - Include CTA buttons linking to Projects and Contact
    - _Requirements: 4.1, 4.2, 4.3_

- [x] 6. Implement custom hooks
  - [x] 6.1 Create useForm hook
    - Implement form state management (values, errors, isSubmitting, submitStatus)
    - Add handleChange, handleBlur, handleSubmit, resetForm functions
    - Integrate validation function
    - _Requirements: 7.7_

  - [x] 6.2 Create useFetch hook
    - Implement data fetching with loading and error states
    - Add refetch functionality
    - Handle cleanup on unmount
    - _Requirements: 9.2_

- [x] 7. Create utility files and data
  - [x] 7.1 Create projectsData.js with sample projects
    - Define array of 6-8 sample projects
    - Include all required fields (id, title, description, tags, repoUrl, liveUrl, featured)
    - Mark 3 projects as featured
    - _Requirements: 6.6_

- [x] 8. Implement Home page
  - [x] 8.1 Create Home page component
    - Add Hero component with developer info
    - Display featured projects preview (first 3 from projectsData)
    - Add short introduction section
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ] 8.2 Add profile image to Home page
    - Save profile image to src/assets/images/
    - Add profile image to About section with responsive sizing
    - Apply circular shape with rounded-full
    - Add border and shadow styling for light mode
    - Add enhanced border and glow effect for dark mode
    - Include descriptive alt text
    - Ensure responsive sizing (200px desktop, 150px mobile)
    - _Requirements: 4.6, 4.7, 4.8, 4.9_

  - [ ]* 8.3 Write property test for profile image display
    - **Property 13: Profile Image Display**
    - **Validates: Requirements 4.6, 4.7**

  - [ ]* 8.4 Write unit tests for Home page
    - Test hero section displays correct content
    - Test featured projects are rendered
    - Test CTA buttons are present
    - Test profile image is present with correct alt text
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.9_

- [x] 9. Implement About page
  - [x] 9.1 Create About page component
    - Add detailed bio section
    - Display skills list in grid layout
    - Add experience/learning timeline
    - _Requirements: 5.1, 5.2, 5.3_

  - [ ]* 9.2 Write unit tests for About page
    - Test bio section is present
    - Test required skills are displayed
    - Test timeline is rendered
    - _Requirements: 5.1, 5.2, 5.3_

- [x] 10. Implement Projects page with filtering
  - [x] 10.1 Create Projects page component
    - Load projects from projectsData
    - Implement filter state management
    - Render filter buttons for each unique technology
    - Display filtered projects using ProjectCard components
    - Highlight active filter button
    - _Requirements: 6.1, 6.3, 6.4_

  - [ ]* 10.2 Write property test for project filtering correctness
    - **Property 4: Project Filtering Correctness**
    - **Validates: Requirements 6.4**

  - [ ]* 10.3 Write unit tests for Projects page
    - Test filter controls are present
    - Test all projects display when filter is 'all'
    - _Requirements: 6.1, 6.3_

- [x] 11. Implement Contact page and form
  - [x] 11.1 Create ContactForm component
    - Implement controlled form inputs using useForm hook
    - Add validation rules (name, email, message)
    - Display field-specific error messages
    - Handle form submission with success/error states
    - Clear form on successful submit
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.7_

  - [ ]* 11.2 Write property test for form validation completeness
    - **Property 5: Form Validation Completeness**
    - **Validates: Requirements 7.2**

  - [ ]* 11.3 Write property test for email validation
    - **Property 6: Email Validation**
    - **Validates: Requirements 7.3**

  - [ ]* 11.4 Write unit tests for ContactForm
    - Test success message displays on valid submission
    - Test error message displays on failed submission
    - _Requirements: 7.4, 7.5_

  - [x] 11.5 Create Contact page component
    - Display contact information (email, phone: 0991-123-4567)
    - Include ContactForm component
    - _Requirements: 7.1, 7.6_

  - [ ]* 11.6 Write unit tests for Contact page
    - Test contact information is displayed
    - Test form is present
    - _Requirements: 7.1, 7.6_

- [x] 12. Checkpoint - Ensure all pages work correctly
  - Test navigation to all pages
  - Verify forms work with validation
  - Test project filtering
  - Ensure theme persists across page navigation
  - Ask the user if questions arise

- [x] 13. Implement accessibility features
  - [x] 13.1 Add focus-visible styles to index.css
    - Define global focus indicator styles
    - Ensure sufficient contrast in both themes
    - _Requirements: 1.6, 8.4_

  - [ ]* 13.2 Write property test for keyboard navigation accessibility
    - **Property 7: Keyboard Navigation Accessibility**
    - **Validates: Requirements 8.3**

  - [ ]* 13.3 Write property test for focus indicator visibility
    - **Property 8: Focus Indicator Visibility**
    - **Validates: Requirements 1.6, 8.4**

  - [x] 13.4 Add lazy loading to images
    - Add loading="lazy" attribute to all img elements
    - _Requirements: 9.1_

  - [ ]* 13.5 Write property test for image lazy loading
    - **Property 10: Image Lazy Loading**
    - **Validates: Requirements 9.1**

- [x] 14. Responsive design refinement
  - [x] 14.1 Test and refine mobile layouts
    - Verify single-column layouts on mobile
    - Test mobile menu functionality
    - Ensure touch targets are adequate
    - _Requirements: 2.3, 1.4, 1.5_

  - [ ]* 14.2 Write unit tests for responsive behavior
    - Test mobile menu visibility at mobile breakpoint
    - Test single-column layout on mobile
    - _Requirements: 1.4, 2.3_

- [x] 15. Create project documentation
  - [x] 15.1 Write comprehensive README.md
    - Add project description
    - List tech stack
    - Explain folder structure
    - Provide setup instructions (npm install, npm run dev)
    - Include deployment steps for Vercel/Netlify
    - _Requirements: 12.4_

- [x] 16. Final checkpoint and polish
  - Run full test suite and ensure all tests pass
  - Test in multiple browsers
  - Verify accessibility with keyboard navigation
  - Check responsive design on various screen sizes
  - Verify dark mode works correctly
  - Ask the user if questions arise

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The implementation uses React functional components with hooks exclusively
- All styling uses Tailwind CSS utilities only
- Mobile-first responsive design approach throughout
