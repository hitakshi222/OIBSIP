# Ahuja Hitakshi - Personal Portfolio

A responsive personal portfolio website for **Ahuja Hitakshi**, showcasing UI/UX design, web development, graphic design, AI prompt engineering, projects, certifications, and contact information.

## Project Overview

This project is a single-page portfolio website built using **HTML5, CSS3, and JavaScript**. It uses a professional brown, beige, and cream visual theme with elegant typography and responsive layouts.

The portfolio includes:
- Home / Hero section
- About Me section
- Skills section
- Projects section
- Certificates section
- Contact section
- Responsive navigation
- Scroll-based fade-in animations
- External links for resume, projects, certificates, LinkedIn, GitHub, and design portfolio

## Technologies Used

- **HTML5** - Website structure and semantic content
- **CSS3** - Styling, layouts, animations, responsive design, and color theme
- **JavaScript** - Scroll reveal animation using `IntersectionObserver`
- **Google Fonts** - Allura, Cormorant Garamond, and Inter

The source file includes the complete HTML, CSS, and JavaScript implementation in one file. The page title is `Ahuja Hitakshi | Personal Portfolio`. 

## Main Features

### 1. Sticky Navigation
The header remains visible while scrolling and provides navigation to:
- Home
- About
- Skills
- Projects
- Certificates
- Contact

### 2. Hero Section
The landing section introduces:
- Ahuja Hitakshi
- UI/UX Designer
- Web Developer
- AI Prompt Engineer
- Python and SQL certification
- Technical skills
- Resume download button

### 3. About Section
Provides a short professional introduction highlighting UI/UX design, web development, programming, AI prompt engineering, and graphic design.

### 4. Skills Section
The portfolio presents skills in separate cards:
- Web Technologies
- Programming Languages
- Programming Concepts
- Android Development
- Design
- Artificial Intelligence
- Professional Skills
- Certifications

### 5. Projects Section
Featured projects include:
- Agentic AI Case Study
- UI Case Study
- Python + SQL Project
- Canva Design Portfolio

External project links are included where available.

### 6. Certificates Section
The portfolio showcases:
- IBM Python Certificate
- IBM SQL Certificate
- Quick Heal Appreciation Letter
- UI/UX Design Certificate

### 7. Contact Section
Contact information includes:
- Name
- Email
- LinkedIn
- GitHub

### 8. Responsive Design
The website adapts to different screen sizes using CSS media queries for tablets and mobile devices.

### 9. Scroll Animation
JavaScript uses `IntersectionObserver` to add a fade-in effect when sections and cards enter the viewport.

## Design

The website uses a warm professional palette:

- Dark Brown background
- Cream / Beige cards
- Gold-beige accent
- Dark brown card text
- Elegant serif headings
- Cursive portfolio logo
- Clean sans-serif body text

The CSS defines these colors through reusable CSS variables, making the theme easy to customize.

## Project Structure

```text
portfolio/
│
├── index.html
└── README.md
```

The current website is implemented as a single `index.html` file containing:
- HTML structure
- Internal CSS
- JavaScript

## How to Run

### Method 1 - Directly in Browser

1. Download or copy the project files.
2. Open `index.html`.
3. The portfolio will run directly in a modern web browser.

### Method 2 - VS Code

1. Open the project folder in Visual Studio Code.
2. Open `index.html`.
3. Install the **Live Server** extension if required.
4. Right-click `index.html`.
5. Select **Open with Live Server**.

No backend server or database is required.

## Customization

### Change Name

Search for:

```html
Ahuja Hitakshi
```

and replace it with the required name.

### Change Profile Photo

The current profile area uses the initials `AH` as a placeholder. Replace the placeholder content with an image when a profile photo is available.

### Change Colors

Edit the CSS variables near the beginning of the `<style>` section:

```css
:root {
    --bg: #5C4033;
    --bg-dark: #422C22;
    --surface: #F7EFE3;
    --surface-light: #FFF8EE;
    --text: #FFF8EE;
    --cardtext: #3B2A21;
    --accent: #C8A97E;
    --accent-dark: #A98960;
}
```

### Add or Edit Projects

Project cards can be edited inside the `Projects` section. Update the project title, description, and external URL as required.

### Add or Edit Certificates

Certificate cards can be updated in the `Certificates` section with new certificate names, descriptions, and links.

### Update Contact Details

Change the email, LinkedIn, and GitHub links in the `Contact` section.

## External Resources

The portfolio uses Google Fonts loaded through the Google Fonts service. Project, certificate, resume, LinkedIn, GitHub, and Instagram links point to external resources configured in the HTML.

## Browser Compatibility

The website is designed for modern browsers such as:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

## Future Improvements

Possible future enhancements:
- Separate HTML, CSS, and JavaScript files
- Add project thumbnails and screenshots
- Add downloadable certificate files
- Add a dedicated project-details page
- Add a working contact form
- Add dark/light theme switching
- Add more advanced portfolio animations
- Add SEO metadata
- Deploy using GitHub Pages, Netlify, or Vercel

## Author

**Ahuja Hitakshi**

UI/UX Designer | Graphic Designer | Web Developer | AI Prompt Engineer

© 2026 Ahuja Hitakshi
