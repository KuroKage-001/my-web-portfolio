# Requirements Document

## Introduction

This feature adds an interactive "About Me" tooltip that appears when users hover over or interact with the profile image in the Hero component. The About Me section will be removed from the Home page and integrated into the Hero component as a floating overlay.

## Glossary

- **Hero_Component**: The main banner component displaying the profile image, name, role, and tagline
- **About_Tooltip**: A floating overlay that displays a summarized "About Me" text
- **Profile_Image**: The circular profile photo in the Hero component
- **Home_Page**: The main landing page of the portfolio website

## Requirements

### Requirement 1: Remove About Me Section from Home Page

**User Story:** As a user, I want a cleaner home page layout, so that the focus is on the hero section and featured projects.

#### Acceptance Criteria

1. WHEN the Home page renders THEN the About Me section SHALL NOT be displayed
2. WHEN the Home page renders THEN the Featured Projects section SHALL appear immediately after the Hero component

### Requirement 2: Add About Tooltip to Hero Component

**User Story:** As a user, I want to see a brief "About Me" summary when I interact with the profile image, so that I can learn about the developer without cluttering the page.

#### Acceptance Criteria

1. WHEN a user hovers over the Profile_Image THEN the About_Tooltip SHALL appear near the image
2. WHEN the About_Tooltip is displayed THEN it SHALL contain a summarized version of the About Me text
3. WHEN a user moves the cursor away from the Profile_Image THEN the About_Tooltip SHALL disappear
4. THE About_Tooltip SHALL be visually styled to match the site's design system with proper contrast in both light and dark modes

### Requirement 3: Tooltip Content and Styling

**User Story:** As a user, I want the tooltip to be readable and well-designed, so that I can easily understand the information.

#### Acceptance Criteria

1. THE About_Tooltip SHALL display the text: "I'm a passionate full-stack web developer with expertise in building modern, scalable web applications. I specialize in React, Node.js, cloud technologies, and project management."
2. THE About_Tooltip SHALL have a maximum width to ensure readability
3. THE About_Tooltip SHALL include appropriate padding, background color, and border styling
4. THE About_Tooltip SHALL be positioned to avoid overlapping with other UI elements
5. THE About_Tooltip SHALL include a subtle animation when appearing and disappearing

### Requirement 4: Responsive Behavior

**User Story:** As a mobile user, I want to access the About Me information easily, so that I can learn about the developer on any device.

#### Acceptance Criteria

1. WHEN viewing on mobile devices THEN the About_Tooltip SHALL be triggered by tapping the Profile_Image
2. WHEN the About_Tooltip is open on mobile THEN tapping outside SHALL close it
3. THE About_Tooltip SHALL be responsive and adjust its position based on screen size

### Requirement 5: Accessibility

**User Story:** As a user with accessibility needs, I want the tooltip to be keyboard accessible and screen-reader friendly, so that I can access the information regardless of my abilities.

#### Acceptance Criteria

1. WHEN a user focuses on the Profile_Image using keyboard navigation THEN the About_Tooltip SHALL appear
2. WHEN a user presses Escape while the tooltip is visible THEN the About_Tooltip SHALL close
3. THE About_Tooltip SHALL include appropriate ARIA attributes for screen readers
4. THE Profile_Image SHALL have an aria-describedby attribute linking to the tooltip content
