# DIRECTIVE: OMGEN Website Navigation & Footer Fixes

**Repository:** https://github.com/FlynnVIN10/OMGEN-website  
**Priority:** High  
**Date:** January 19, 2026  
**Status:** Pending

---

## ISSUE 1: Navigation Inconsistency

### Problem
The header navigation is inconsistent across pages:
- Homepage (index.html): HOME, PRODUCTS, SUPPORT, WATER REPORTS
- Products page & product pages: Missing "WATER REPORTS" link entirely
- Water Reports page: Different order (WATER REPORTS before SUPPORT)

### Fix Required
Standardize ALL page headers to use the same navigation order:
```
HOME | PRODUCTS | WATER REPORTS | SUPPORT (dropdown)
```

### Files to Update
- `products.html`
- `about.html`
- `contact.html`
- `pages/installation.html`
- All 13 files in `products/` folder

---

## ISSUE 2: Incorrect Footer Anchor Link

### Problem
In the footer, "Water Restructuring Devices" links to `#filtration-systems` but should link to `#water-restructuring`

### Current (Wrong)
```html
<a href="products.html#filtration-systems">Water Restructuring Devices</a>
```

### Fix Required
```html
<a href="products.html#water-restructuring">Water Restructuring Devices</a>
```

### Files to Update
All pages with footer:
- `index.html`
- `products.html`
- `about.html`
- `contact.html`
- `pages/*.html`
- `products/*.html`

---

## ISSUE 3: Missing About Page Link

### Problem
`about.html` exists but has NO navigation link to it from any page.

### Fix Required
Add "ABOUT" link to the main navigation on all pages.

### Suggested Navigation Order
```
HOME | PRODUCTS | ABOUT | WATER REPORTS | SUPPORT
```

---

## ISSUE 4: Footer Content Inconsistency

### Problem
Footer content varies between pages:
- Contact page has "Well Water System" and "Water Reports" links
- Other pages don't have these links

### Fix Required
Standardize footer across all pages with consistent SHOP and SUPPORT links.

---

## Testing
After fixes, verify at: https://flynnvin10.github.io/OMGEN-website/

## Notes
- Shopify integration is pending - ignore any Shopify-related links for now
- All ORDER NOW buttons currently link to contact.html (correct for now)
