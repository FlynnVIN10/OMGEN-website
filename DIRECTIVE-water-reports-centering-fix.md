# DIRECTIVE: Water Reports Page - Center Alignment Fix

## Priority: HIGH
## Date: January 16, 2026
## Status: PENDING

---

## Issue Summary
The "FILTRATION PERFORMANCE DATA" heading and "INDEPENDENTLY TESTED & VERIFIED" subtitle on the Water Reports page (`pages/water-report-summaries.html`) are left-aligned instead of center-aligned. This breaks the symmetrical design aesthetic of the page.

## Current State
- The main heading section appears pushed to the left
- The report cards below (Arsenic Water Report, Lead Water Report, etc.) are properly centered
- The issue is caused by the `.container` class having `display: flex` which overrides `text-align: center`

## Required Changes

### 1. Update `assets/css/styles.css`

Add a new CSS class for the Water Reports header section:

```css
/* Water Reports Page - Centered Header Section */
.water-reports-header {
    width: 100%;
    text-align: center;
    display: block;
    margin: 0 auto;
    padding: 0 0 2rem 0;
}

.water-reports-header h2 {
    text-align: center;
    width: 100%;
    display: block;
}

.water-reports-header p {
    text-align: center;
    width: 100%;
    display: block;
}
```

### 2. Update `pages/water-report-summaries.html`

Replace the current header div structure (around line 70) from:
```html
<div style="text-align: center; margin-bottom: 4rem;">
    <h2 style="font-size: 2.2rem; font-weight: 800; text-transform: uppercase; text-align: center;">Filtration Performance Data</h2>
    <p style="color: var(--blue-primary); font-weight: 700; letter-spacing: 1px;">INDEPENDENTLY TESTED & VERIFIED</p>
</div>
```

To:
```html
<div class="water-reports-header">
    <h2>Filtration Performance Data</h2>
    <p>INDEPENDENTLY TESTED & VERIFIED</p>
</div>
```

## Design Requirements
- All text in the header section must be horizontally centered on the page
- Maintain consistent spacing with the report cards below
- Ensure responsive behavior on mobile devices
- Match the centered styling of the report card titles

## Testing Checklist
- [ ] Verify heading is centered on desktop (1920px+)
- [ ] Verify heading is centered on tablet (768px)
- [ ] Verify heading is centered on mobile (375px)
- [ ] Confirm no visual regression on other page elements
- [ ] Test in Chrome, Firefox, and Safari

## Files to Modify
1. `assets/css/styles.css`
2. `pages/water-report-summaries.html`

---

**DELETE THIS FILE AFTER IMPLEMENTATION IS COMPLETE**
