# OMGEN WATER Website

Static site clone of sentryh2o.com with OMGEN branding.

## Features

- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **SEO Optimized**: Meta tags, schema markup, and canonical URLs
- **Performance**: Lazy loading images, preloaded CSS, optimized assets
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Interactive Elements**: Smooth scroll, star ratings, form validation

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, responsive design
- **JavaScript**: ES6+ with error handling and performance optimizations
- **Images**: Optimized for web with lazy loading

## Sections

1. **Hero**: Main value proposition with CTA
2. **New Product**: Shower filter promotion
3. **Whole House**: Comprehensive treatment features
4. **Benefits**: Product showcase grid
5. **Under-Sink**: Wellness system details
6. **Testimonials**: Customer reviews with ratings
7. **Solutions**: Commercial and home solutions
8. **Community**: Certification partners (WQA, NSF, EPA, AWWA)
9. **About**: Company mission and story

## Hosting Guide

### Netlify (Free)
1. Go to netlify.com/drop.
2. Drag omgen-water-mvp.zip.
3. Site live at random-name.netlify.app – custom domain omgenwater.com via DNS.

### Vercel
1. vercel.com/new → Import GitHub repo (push current to GitHub first).
2. Deploy instant, custom domain free.

### GitHub Pages
1. GitHub repo > Settings > Pages > Source: main branch / (root).
2. Live at username.github.io/omgen-water-website.

## GA4 Integration
Edit index.html: Replace 'GA_MEASUREMENT_ID' with G-XXXXXXXXXX from analytics.google.com.

## Monitoring
Lighthouse 95+ perf/access/SEO; GA4 events for CTA clicks (add gtag('event', 'click', { 'button': 'shop' }) to buttons).

## Updates
Add products: Extend /products/omgen-wellness.html stub.

License: MIT – open source for whitelabel forks.

## Performance Targets

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Image Optimization**: All images < 100KB, WebP format preferred

## Configuration

### Google Analytics
Replace `GA_MEASUREMENT_ID` in `index.html` with your actual GA4 measurement ID.

### Custom Domain
Update canonical URL in `index.html` to match your domain.

## File Structure

```
omgen-water-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles and responsive design
│   ├── js/
│   │   └── script.js       # Interactive functionality
│   └── images/             # Optimized images and logos
└── README.md               # This file
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2024 OMGEN WATER. All rights reserved.

---

**Deploy**: npx serve . or Netlify drag-drop. Lighthouse score target 95+.
