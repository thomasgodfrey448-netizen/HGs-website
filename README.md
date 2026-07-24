# HGs Business Firm - Professional Business Website

A modern, fully responsive business website for HGs Business Firm built with pure HTML, CSS, and JavaScript. No frameworks or build tools required - just open and run!

## 📁 Project Structure

```
HGs-Website-Standalone/
├── index.html          # Home page with hero carousel
├── insights.html       # Business insights and solutions
├── services.html       # Comprehensive service offerings
├── about.html          # About company, team, and location
├── css/
│   └── style.css       # Complete styling (2000+ lines)
├── js/
│   └── main.js         # Navigation and interactions
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Using VS Code Live Server
1. Open the project folder in VS Code
2. Install the "Live Server" extension by Ritwick Dey
3. Right-click on `index.html` and select "Open with Live Server"
4. The website will open in your browser automatically

### Option 2: Using Python (Built-in)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit: `http://localhost:8000`

### Option 3: Using Node.js
```bash
# Install http-server globally
npm install -g http-server

# Run from project directory
http-server
```
Then visit: `http://localhost:8080`

### Option 4: Direct File Opening
Simply double-click `index.html` to open in your default browser (note: some features may not work due to browser security)

## 📄 Pages Included

### 1. **Home (index.html)**
- Animated hero carousel with 3 rotating slides
- Company summary section
- Mission & Vision statements
- Why Choose HGs section
- Call-to-action sections
- Responsive footer

### 2. **Insights (insights.html)**
- Technology Transformation section
- Financial Services section
- Data-driven decision making insights
- Key statistics and metrics

### 3. **Services (services.html)**
- Financial Advisory & Tax Compliance
- Auditing & Assurance Services
- Risk Assessment & Management
- Data-as-a-Service (DaaS) & Business Insights
- Detailed service features and benefits

### 4. **About Us (about.html)**
- Company story and background
- Purpose & Core Values
- Team information
- Location and contact details
- Why Partner With HGs section

## 🎨 Design Features

- **Color Scheme**: Orange (#ff6b35) + Dark Navy (#1a1f2e)
- **Typography**: Poppins (headings) + Inter (body)
- **Responsive**: Mobile-first design, works on all devices
- **Animations**: Smooth transitions and hover effects
- **Modern**: Clean, professional, premium feel

## 💻 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Customization

### Change Colors
Edit `/css/style.css` and modify the CSS variables:
```css
:root {
  --primary-orange: #ff6b35;  /* Change primary color */
  --dark-navy: #1a1f2e;       /* Change background */
  --card-bg: #12161f;         /* Change card background */
  --text-light: #f8f9fa;      /* Change text color */
}
```

### Update Company Information
Edit the footer and contact sections in each HTML file:
- Email: `hgs@info.com`
- Location: `Ilala, Dar es Salaam, Tanzania`

### Add Your Logo
Replace the logo text with an image tag in the header:
```html
<img src="path/to/logo.png" alt="HGs Logo" class="logo-img">
```

### Modify Content
Simply edit the text content in each HTML file. All sections are clearly labeled with comments.

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## ⚡ Performance

- No external dependencies
- Lightweight CSS (optimized)
- Minimal JavaScript (vanilla JS only)
- Fast loading times
- SEO-friendly HTML structure

## 🔗 Navigation

All pages are linked through:
- Header navigation menu
- Mobile hamburger menu
- Footer links
- Internal page links

## 📝 File Descriptions

### index.html
Main landing page with hero carousel featuring three rotating slides with different business messages.

### insights.html
Dedicated page for business insights covering technology transformation and financial services.

### services.html
Comprehensive service catalog with four main categories and detailed feature lists.

### about.html
Company information including story, values, team details, and contact information.

### css/style.css
Complete stylesheet with:
- CSS variables for theming
- Responsive grid system
- Component styles (cards, buttons, etc.)
- Animations and transitions
- Mobile-first media queries

### js/main.js
JavaScript functionality including:
- Header scroll effects
- Mobile menu toggle
- Hero carousel auto-rotation
- Smooth scrolling
- Intersection observer for animations

## 🎯 Features

✅ Fully responsive design
✅ Hero carousel with auto-rotation
✅ Mobile navigation menu
✅ Smooth scroll animations
✅ Professional color scheme
✅ Accessible HTML structure
✅ SEO-friendly markup
✅ Fast loading performance
✅ No external dependencies
✅ Easy to customize

## 📧 Contact Information

- **Email**: hgs@info.com
- **Location**: Ilala, Dar es Salaam, Tanzania
- **Website**: Your domain here

## 📄 License

This website template is provided as-is for HGs Business Firm.

## 🤝 Support

For questions or modifications:
1. Review the HTML structure and comments
2. Check CSS variables in style.css
3. Modify JavaScript in main.js as needed
4. Test on multiple devices and browsers

## 🚀 Deployment

To deploy this website:

1. **GitHub Pages**: Push to a GitHub repository and enable Pages
2. **Netlify**: Drag and drop the folder to Netlify
3. **Vercel**: Connect your repository to Vercel
4. **Traditional Hosting**: Upload files via FTP to your hosting provider
5. **Manus**: Use the provided checkpoint link for deployment

## 📊 SEO Optimization

The website includes:
- Semantic HTML5 structure
- Meta tags for responsiveness
- Descriptive page titles
- Clear heading hierarchy
- Alt text for images
- Internal linking structure

## 🎓 Learning Resources

This project demonstrates:
- HTML5 semantic markup
- CSS3 modern techniques
- Vanilla JavaScript best practices
- Responsive design patterns
- Component-based styling
- Mobile-first approach

---

**Created**: 2026
**Version**: 1.0
**Status**: Production Ready
