## AI Conversation Reference

The following public ChatGPT conversation contains the AI-assisted development workflow used during the project:

https://chatgpt.com/share/6a771bef-0de4-83ee-bae5-9e5db61d61f0

This conversation includes the actual development guidance, debugging, UI/UX decisions, Git/GitHub workflow, deployment guidance, and submission preparation.


# ABTalks Redesign — AI Usage Log

This document records how AI assistance was used during the development of the ABTalks 60-Day Coding Challenge redesign.

## Project Goal

Redesign ABTalks as a mobile-first experience for Indian college students participating in a 60-day coding challenge.

Required routes:

- /
- /dashboard
- /day/12

The project was built with React, TypeScript, Vite, React Router, Lucide React, and Framer Motion.

## AI-Assisted Development

AI was used as a coding, design, debugging, and development partner throughout the project.

### 1. Project Planning

AI assistance was used to break the problem statement into the required screens:

- Landing Page
- Student Dashboard
- Challenge Day

The design direction focused on:
- Mobile-first 390px layouts
- Clear visual hierarchy
- Student motivation
- Progress and streak visibility
- Recruiter-ready presentation
- Simple and realistic mocked data

### 2. Landing Page

AI assistance was used to design and implement:

- ABTalks branding
- Hero section
- "Build Every Day. Become Recruiter Ready." messaging
- 60-day challenge explanation
- Start Challenge CTA
- Statistics section
- Feature cards
- How It Works section
- Navigation and page structure

The landing page was tested locally and refined visually.

### 3. Dashboard

AI assistance was used to create the student dashboard experience containing:

- Current streak
- Current challenge day
- Today's task
- Completion percentage
- Challenge progress
- Achievements
- Reflection/progress information

Mocked student and challenge data was stored separately so the UI could be developed without authentication or a database.

### 4. Challenge Day

AI assistance was used to build the `/day/12` experience containing:

- Challenge header
- Day information
- Task overview
- Task checklist
- Resources
- Submission form
- GitHub repository field
- GitHub commit field
- LinkedIn post field

### 5. React Routing

AI assistance was used to implement and verify navigation between:

- `/`
- `/dashboard`
- `/day/12`

The landing page CTA was connected to the dashboard and the dashboard mission CTA was connected to the challenge day.

### 6. UI Animation

Framer Motion was introduced to improve the experience with subtle entrance animations and transitions.

AI assistance was used to implement and debug animation syntax and imports.

### 7. Debugging

AI assistance was used to diagnose and fix development issues including:

- lucide-react icon import errors
- GitHub and LinkedIn icon compatibility
- TypeScript errors
- Navbar import/casing issues
- File-name casing conflicts on Windows
- React component import paths
- Routing issues
- Development server issues

The application was repeatedly tested after fixes.

### 8. Responsive Design

The project was designed mobile-first because the challenge brief specifies that students primarily use phones.

AI assistance was used to review the interface at approximately 390px width and improve:

- spacing
- typography
- button sizing
- form layout
- card sizing
- horizontal overflow
- navigation

The deployed `/day/12` page was also checked at 390px.

### 9. Documentation

AI assistance was used to create and improve the project README.

The README includes the required Route Map:

```text
/
/dashboard
/day/12