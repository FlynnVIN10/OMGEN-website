# OMGEN WATER Website

A white-labeled clone of Sentry H2O's water treatment website, rebranded for OMGEN WATER with advanced water purification solutions.

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

## Deployment

### Local Development
```bash
# Serve locally
npx serve .

# Or use Python
python3 -m http.server 5500
```

### Production Deployment

**Netlify (Recommended)**
1. Drag and drop the project folder to Netlify
2. Configure custom domain: `omgenwater.com`
3. Enable HTTPS and CDN

**Alternative Hosting**
- Vercel: `npx vercel --prod`
- GitHub Pages: Push to `gh-pages` branch
- AWS S3: Upload files to S3 bucket with static hosting

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
