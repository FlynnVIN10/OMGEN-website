# OMGEN-WEBSITE-UPDATE: Water Reports Page Design Enhancement

**Repository:** https://github.com/FlynnVIN10/OMGEN-website
**Branch:** master
**Priority:** High
**Date:** January 16, 2026

---

## Directive

Update the Water Reports page (`pages/water-report-summaries.html`) with the following improvements based on NotebookLM consultation:

1. **Fix PFAS Section Header** - Change "Contact Us (Forever Chemicals) Report" to "PFAS (Forever Chemicals) Report"

2. **Add Alkalinity & pH Testing Section** - New report section after Vinyl Chloride

3. **Add Proprietary Media Blends Section** - Descriptions of ToxyGuard, AlkaGuard, WellGuard

4. **Add EPA Disclaimer** - Note that measurements are in micrograms per liter and untreated samples exceeded EPA MCLs

---

## Context from NotebookLM

### Alkalinity & pH Testing Data (Add as new section):

| Parameter | Untreated Water | OMGEN Wellness System |
|-----------|-----------------|----------------------|
| Alkalinity | 124.24 | 189.32 (Increased) |
| pH | 6.83 | 8.21 (Balanced) |

### Proprietary Media Blends (Add as new section):

1. **ToxyGuard Blend:** Primary defense against heavy metals (arsenic, lead). Provides comprehensive toxin removal, scale control, and adds oxygen to the water.

2. **AlkaGuard Blend:** Designed for wellness. Focuses on enriching water with calcium and magnesium while increasing pH for boosted alkalinity.

3. **WellGuard Blend:** Specifically for private wells - targets arsenic, lead, and mercury through custom-targeted toxin removal.

### Key Implementation Points:

- All content must be 100% white-labeled for OMGEN WATER (no Sentry H2O references)
- Use "Atomic Purification" terminology
- Maintain consistent styling with existing report tables (blue headers, green "Not Detected" text)
- Include EPA disclaimer: "Unit of Measurement: micrograms per Liter. *Untreated samples exceeded EPA maximum contaminant levels."

---

## Files to Modify

- `pages/water-report-summaries.html`

## Verification

- Test page renders correctly at https://flynnvin10.github.io/OMGEN-website/pages/water-report-summaries.html
- Confirm all tables display properly
- Verify no Sentry H2O references exist
