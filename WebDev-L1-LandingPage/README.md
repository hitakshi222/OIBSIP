```markdown
# Bella Vita — White OUD Luxury Perfume Landing Page

A visually polished and responsive static landing page designed for **Bella Vita White OUD**, a luxury perfume concept.

The project focuses on creating a premium fragrance-brand experience using clean layouts, elegant typography, a minimal luxury colour palette, and responsive CSS.

---

## ✨ Project Overview

The Bella Vita White OUD landing page presents a sophisticated fragrance brand through a modern, elegant website.

The design uses:

- Premium black and cream colour combinations
- Gold accent colours
- Elegant serif typography for headings
- Clean sans-serif typography for body content
- CSS-based perfume bottle illustration
- Responsive layouts for desktop, tablet, and mobile
- Smooth hover and scrolling effects

The entire project is built using **HTML5 and CSS3** without JavaScript.

---

## 🎯 Project Objective

The objective of this project is to demonstrate foundational front-end development skills by creating a complete static landing page for a product.

The project demonstrates:

- Semantic HTML5 structure
- CSS Flexbox
- CSS Grid
- Responsive web design
- Navigation design
- Hero section design
- Call-to-action buttons
- Product presentation
- Typography and colour consistency
- Footer design
- Mobile-first considerations
- CSS hover effects

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure and content |
| CSS3 | Styling, layout, responsiveness and animations |
| Google Fonts | Typography |
| Flexbox | Flexible component layouts |
| CSS Grid | Section and card layouts |
| CSS Gradients | Product and background effects |
| Media Queries | Responsive design |

### JavaScript

JavaScript is **not used** in this project.

---

## 📁 Project Structure

```text
bella-vita-white-oud/
│
├── index.html
├── style.css
└── README.md
```

### `index.html`

Contains the complete structure of the landing page, including:

- Navigation bar
- Hero section
- Product presentation
- Introduction
- Fragrance features
- About section
- Fragrance notes
- Testimonial
- Call-to-action section
- Footer

### `style.css`

Contains all styling for:

- Colours
- Typography
- Layout
- Buttons
- Navigation
- Product illustration
- Cards
- Responsive design
- Hover effects
- Mobile layouts

---

# 🖥️ Website Sections

## 1. Navigation Bar

The navigation bar is positioned using CSS `position: sticky`, allowing it to remain visible while scrolling.

Navigation links include:

- Home
- Fragrance
- About
- Contact

An additional **Explore** button is included on the right side.

---

## 2. Hero Section

The hero section introduces the product with the headline:

> The Essence of White OUD

It contains:

- Brand name
- Product headline
- Supporting description
- Primary call-to-action
- Secondary link
- CSS-created perfume bottle

The section uses a two-column CSS Grid layout on larger screens.

---

## 3. Product Visual

Instead of requiring an external product image, the perfume bottle is created using pure CSS.

The illustration uses:

- CSS gradients
- Borders
- Shadows
- Rounded corners
- Pseudo-elements
- Gold accents

This keeps the project lightweight and eliminates the need for additional image assets.

---

## 4. Signature Scent Section

This section introduces the fragrance and communicates its luxury positioning.

The section uses a dark background with white typography and gold accents to create visual contrast.

---

## 5. Fragrance Features

Three feature cards describe the product:

### Rich Oud

A deep and luxurious oud character.

### Elegant Aroma

A refined combination of warm and woody notes.

### Made to Impress

A fragrance designed to create a memorable impression.

The cards include hover effects for additional interaction.

---

## 6. About Section

The About section explains the concept behind Bella Vita White OUD.

It contains:

- Product visual
- Brand message
- Supporting description
- Call-to-action button

The section uses a split-screen layout on desktop and automatically switches to a stacked layout on smaller screens.

---

## 7. Fragrance Notes

The fragrance notes section presents the scent journey in three stages:

```text
01 — Top Notes
Fresh • Refined • Inviting

02 — Heart Notes
Warm • Woody • Elegant

03 — Base Notes
Oud • Deep Woods • Musk
```

The structured layout makes the information easy to scan.

---

## 8. Testimonial

A large typography-based testimonial section reinforces the premium branding.

Example:

> A fragrance that feels luxurious, confident and effortlessly memorable.

---

## 9. Call-to-Action

The final CTA encourages visitors to explore the fragrance.

The section includes:

- Supporting heading
- Product description
- Shop White OUD button

The dark background and gold typography maintain the luxury visual identity.

---

## 10. Footer

The footer contains placeholder information for:

### Explore

- Home
- Fragrance
- About Us

### Connect

- Instagram
- Facebook
- Pinterest

### Contact

- Email
- Phone

A copyright notice is also included.

---

# 🎨 Design System

## Colour Palette

| Colour | Hex | Usage |
|---|---|---|
| Black | `#111111` | Main backgrounds and buttons |
| Dark Black | `#191919` | Secondary dark sections |
| Cream | `#F7F5F0` | Main page background |
| Cream Dark | `#EBE7DF` | Alternate sections |
| Gold | `#C9A45C` | Brand accents |
| Gold Light | `#DFC58D` | Product highlights |
| White | `#FFFFFF` | Text and contrast |
| Grey | `#555555` | Body text |

---

# 🔤 Typography

The project uses two Google Fonts.

### Playfair Display

Used primarily for:

- Main headings
- Section headings
- Product typography
- Quotes

### DM Sans

Used for:

- Navigation
- Paragraphs
- Buttons
- Labels
- Supporting content

This combination creates a balance between **luxury editorial typography and modern readability**.

---

# 📱 Responsive Design

The website is responsive and designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile
- Small mobile devices

CSS media queries are used at multiple breakpoints.

### Desktop

The hero uses a two-column layout:

```text
Content          Product
```

### Tablet

Sections progressively switch to simpler layouts.

### Mobile

Content is stacked vertically:

```text
Content
   ↓
Product
   ↓
Features
   ↓
About
   ↓
Notes
   ↓
CTA
   ↓
Footer
```

The navigation is also simplified on smaller screens.

---

# 📐 Layout Techniques

The project uses modern CSS layout techniques.

### CSS Grid

Used for:

- Hero section
- Feature cards
- About section
- Fragrance notes
- Footer

Example:

```css
.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

### Flexbox

Used for:

- Navigation
- Buttons
- Product alignment
- Footer columns
- Feature elements

Example:

```css
.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

---

# ✨ UI Features

The landing page includes several visual enhancements:

- Sticky navigation
- Smooth scrolling
- Button hover effects
- Navigation hover underline
- Card hover elevation
- CSS gradients
- Product shadows
- Responsive typography
- Gold accent highlights
- Rounded product bottle
- Clean spacing system

---

# 🚀 How to Run the Project

No installation or build tools are required.

### Step 1

Download or clone the project.

### Step 2

Make sure the following files are in the same folder:

```text
index.html
style.css
README.md
```

### Step 3

Open:

```text
index.html
```

in any modern browser.

For example:

```text
Google Chrome
Microsoft Edge
Mozilla Firefox
Safari
```

---

# 🌐 Browser Compatibility

The website is designed for modern browsers that support HTML5 and CSS3.

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

# 📋 Task Checklist

This project satisfies the landing page requirements:

- [x] Fixed or sticky navigation bar
- [x] At least 3 navigation links
- [x] Hero section
- [x] Headline
- [x] Subheadline
- [x] Call-to-action button
- [x] At least 2 content sections
- [x] Footer
- [x] Contact links
- [x] Social links
- [x] Consistent colour palette
- [x] Responsive layout
- [x] CSS Flexbox
- [x] CSS Grid
- [x] No element overlap
- [x] Intentional padding and margins
- [x] Multiple font sizes
- [x] Clean typography
- [x] HTML5
- [x] CSS3
- [x] No JavaScript

---

# 🔮 Future Improvements

The project can be extended with additional functionality in the future.

Possible improvements include:

- Add real Bella Vita product images
- Add product pricing
- Add shopping cart functionality
- Add product detail pages
- Add an image gallery
- Add customer reviews
- Add fragrance comparison
- Add newsletter subscription
- Add JavaScript interactions
- Connect the CTA to an e-commerce platform
- Add backend functionality
- Add online payment integration

---

# 📄 License

This project is created for **educational and portfolio purposes**.

The product content and branding used in this project can be replaced with real product information and official assets when used commercially.

---

## 👩‍💻 Author

**Bella Vita White OUD Landing Page**

Built using:

**HTML5 + CSS3**

A clean, responsive and luxury-inspired front-end landing page.
```

You can place this file directly beside `index.html` and `style.css` in your project folder.