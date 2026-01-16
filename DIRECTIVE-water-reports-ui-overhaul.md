# ANTIGRAVITY DIRECTIVE: Water Reports Page UI/UX Overhaul

**Repository:** https://github.com/FlynnVIN10/OMGEN-website  
**File:** `pages/water-report-summaries.html`  
**Branch:** master  
**Priority:** HIGH  
**Date:** January 16, 2026  
**Source:** NotebookLM Design Consultation

---

## Context

The Water Reports page needs a UI/UX overhaul to transition from a raw text dump to a professional "Scientific Dashboard" aesthetic. Current issues:
- Hero section title and description are misaligned
- Measurement notes float left while report cards are positioned separately
- Layout lacks visual symmetry and professional polish

---

## 1. HERO SECTION - Center & Polish

**Current Issue:** Text is misaligned and lacks authority

**Directives:**
- Wrap hero content in container with `max-width: 900px`
- Apply `text-align: center` to parent container
- Consider changing H1 from "Water Report Summaries" to **"TECHNICAL DATA & REPORTS"**
- Style H1: Bold, uppercase sans-serif, 2.5rem+
- Style sub-header: `font-size: 1.2rem`, `color: #555`, `line-height: 1.6`
- Ensure "PROUDLY MADE IN USA" badge is visible above H1

---

## 2. REPORT CARDS - Symmetric Grid Layout

**Current Issue:** Cards and disclaimer are floating/disconnected

**Directives:**
- Implement CSS Grid: `display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;`
- Card styling:
  - Background: `#F8F9FA` or soft blue tint
  - Padding: `2rem`
  - Border: `1px solid #E0E0E0`
  - Border-radius: `8px`
  - Box-shadow: `0 4px 6px rgba(0,0,0,0.1)`

---

## 3. TABLE & DISCLAIMER POSITIONING

**Current Issue:** Measurement notes floating left, disconnected from data

**Directives:**
- Wrap each report in `<section class="report-container">`
- Tables: 100% width with dark header row (white text)
- Alternating row striping: `nth-child(even) { background-color: #f2f2f2; }`
- **NOT DETECTED** results: Bold green text (`var(--green-accent)`)
- **CRITICAL: Move disclaimer INSIDE the report container** as a footer:
  - `font-size: 0.85rem`
  - `font-style: italic`
  - `color: #666`
  - `padding: 1rem`
  - `background-color: #fafafa`

---

## 4. WHITE LABEL CLEANUP

**Global Find/Replace:**
- "Sentry Wellness System" → **"OMGEN Wellness System"**
- "Sentry Whole House System" → **"OMGEN Whole House System"**
- "Sentry H2O" → **"OMGEN WATER"**

**Button Styling:** Ensure "VIEW FULL REPORT" buttons match OMGEN's primary CTA style

---

## 5. NAVIGATION FIX

Add "WATER REPORTS" link to the navigation menu on the water-report-summaries.html page (currently missing from that page's nav)

---

## Summary HTML Structure

```html
<!-- Hero Section -->
<div class="hero-container">
  <span class="badge">PROUDLY MADE IN THE USA</span>
  <h1>TECHNICAL DATA & REPORTS</h1>
  <p class="intro">Formulated with our proprietary blend...</p>
</div>

<!-- Media Blends Grid -->
<div class="media-grid">
  <div class="blend-card">
    <h3>ToxyGuard Blend</h3>
    <p>Defends against common contaminants...</p>
    <a href="#" class="btn-link">See the Data</a>
  </div>
  <!-- Repeat for AlkaGuard, BioChemGuard, WellGuard -->
</div>

<!-- Report Sections (Stacked Vertical) -->
<section class="report-card">
  <h2>Toxins & Minerals Water Report</h2>
  <p class="report-intro">Tap Score's...</p>
  
  <!-- Table -->
  <div class="table-responsive">
    <table>...</table>
  </div>
  
  <!-- Disclaimer Footer (contained!) -->
  <div class="report-footer">
    <p class="disclaimer">*Unit of Measurement: μg/L</p>
    <p class="warning">*These untreated samples tested above...</p>
    <a href="#" class="btn-primary">VIEW FULL REPORT</a>
  </div>
</section>
```

---

## Expected Outcome

Transform the page to a professional "Scientific Dashboard" aesthetic that:
- Builds trust through clean, symmetric design
- Aligns with OMGEN's "Atomic Purification" branding
- Keeps disclaimers properly positioned with their related data
- Maintains brand consistency across all pages
