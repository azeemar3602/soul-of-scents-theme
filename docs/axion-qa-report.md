# AXION COMMUNICATIONS - Dev vs Production QA Report

**Date:** 2026-06-11
**Production:** https://www.axioncommunications.com/
**Dev:** https://dev.azbuilds.pro/

---

## GLOBAL ISSUES (Affect ALL Pages)

Before the per-page breakdown, these issues were found on **every single dev page** and should be fixed globally:

| Issue | Production | Dev | Severity |
|---|---|---|---|
| **Header logo** | Original Axion logo (`axion-logo-1-196x58-1.webp`) | 25th Anniversary logo (`Axion_25years20Logo.png`) | Medium |
| **Header background** | Transparent overlay on hero (dark nav) | White/opaque sticky (`rgba(255,255,255,0.98)`) | High |
| **Nav link color** | White `rgb(255,255,255)` | Dark gray `rgb(67,71,83)` | High |
| **Nav font size** | 15px | 16px | Low |
| **Nav dropdown chevrons** | Hidden/subtle | Visible `⌄` arrows on every menu item | Medium |
| **Body font size** | 17px | 16px | Low |
| **Body text color** | `rgb(0,0,0)` black | `rgb(28,28,28)` dark gray | Low |
| **H2 heading size** | 28px / weight 600 | 32px / weight 700 | High |
| **H2 heading color** | `rgb(0,0,0)` black | `rgb(28,28,28)` dark gray | Medium |
| **Paragraph size** | 14px | 13px | Medium |
| **Paragraph color** | `rgb(0,0,0)` | `rgba(255,255,255,0.82)` (first p in hero) | Medium |
| **Page titles** | Proper SEO titles | Appends `" – dev.azbuilds.pro"` | High |
| **Forms** | Elementor forms (no GF IDs) | Gravity Forms (gform_2, gform_3) | Expected |
| **Chat widget** | Blue chat bubble (bottom-right) | Not visible | Medium |
| **Scroll-to-top** | Blue arrow (bottom-right) | Not visible | Low |
| **Footer style** | Matches production dark design | Cyan/blue gradient footer | High |

---

## Page 1: Homepage

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** H1 line-height 63px prod vs 54px dev. Body 17px prod vs 16px dev.
* **Color differences:** Nav links white vs dark gray. H2 headings black vs #1c1c1c.
* **Section differences:** Prod has "Discover TrueEssence of Axion" and "Still Have Questions?" -- both MISSING on dev. Dev has EXTRA "Visit Our Blog" and "Subscribe To Our Newsletter" sections.
* **Spacing/layout differences:** Page height 9395px prod vs 9513px dev. Different header height (transparent overlay vs 73px white sticky).
* **Image differences:** Different logo image file.
* **Button/form differences:** Production uses Elementor forms; dev uses Gravity Forms (gform_2, gform_3) -- correct per spec.

### Mobile Differences:

* **Font differences:** Same global font mismatches apply.
* **Color differences:** Header/nav color scheme completely different (dark vs light).
* **Section differences:** Same missing/extra sections as desktop.
* **Spacing/layout differences:** Dev responsive CSS present (235 media queries, viewport meta correct).
* **Image differences:** Same logo difference.
* **Button/form differences:** Same form system difference.

### Missing Sections:
- "Discover TrueEssence of Axion"
- "Still Have Questions?"

### Extra Sections:
- "Visit Our Blog"
- "Subscribe To Our Newsletter"

### Priority Fixes:
1. Add missing "Discover TrueEssence of Axion" and "Still Have Questions?" sections
2. Fix header to use transparent dark overlay matching production
3. Fix page title from "dev.azbuilds.pro" to proper SEO title

### Cursor Fix Prompt:
> On the homepage at dev.azbuilds.pro, the header should use a transparent dark background with white nav links (not a white sticky header with gray links). Add missing sections "Discover TrueEssence of Axion" and "Still Have Questions?" which appear on production. Change the page title to "Axion's All-In-One Business Communication Solutions". Fix H2s to 28px/600 weight/black and paragraphs to 14px.

---

## Page 2: About Us

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** H2: 28px prod vs 25px dev. P: 14px prod vs 13px dev.
* **Color differences:** H2 "What We Do" is blue `rgb(49,126,229)` on dev vs black on prod. H2 "A Commitment to Excellence" is `#1c1c1c` vs `#000`.
* **Section differences:** Same content sections present on both.
* **Spacing/layout differences:** Page height 5771px prod vs 7133px dev (dev 24% taller -- extra padding/spacing).
* **Image differences:** Same logo difference.
* **Button/form differences:** Same form system difference.

### Mobile Differences:
* Same global header/nav differences apply.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes from 25px to 28px
2. Fix H2 "What We Do" color from blue to black
3. Reduce excess spacing/padding causing 24% height inflation

### Cursor Fix Prompt:
> On the About Us page at dev.azbuilds.pro, change all H2 headings from 25px to 28px and weight to 600. Change the "What We Do" H2 color from blue (#317ee5) to black (#000000). Reduce vertical spacing/padding to match production height (~5771px, currently ~7133px). Fix paragraph font size from 13px to 14px.

---

## Page 3: Business Communication

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** H2: 28px/600 prod vs 32px/700 dev. P: 14px prod vs 13px dev.
* **Color differences:** H2 color black vs #1c1c1c. Title is lowercase on dev.
* **Section differences:** Dev has extra "How Axion Communications Supports Business" section not on prod.
* **Spacing/layout differences:** Height 7234px prod vs 9050px dev (25% taller).
* **Image differences:** Same global.
* **Button/form differences:** Prod uses Elementor buttons; dev has no CTA buttons detected.

### Mobile Differences:
* Same global differences.

### Missing Sections:
None

### Extra Sections:
- "How Axion Communications Supports Business"

### Priority Fixes:
1. Fix H2 size/weight to 28px/600
2. Fix page title capitalization and remove dev suffix
3. Reduce excess page height

### Cursor Fix Prompt:
> On the Business Communication page at dev.azbuilds.pro, fix all H2 headings to 28px font-size, 600 font-weight, and color #000000 (currently 32px/700/#1c1c1c). Fix paragraph text to 14px (currently 13px). Fix the page title to "Advanced Business Communication Solutions at Axion's USA" with proper capitalization. Check for extra "How Axion Communications Supports Business" section that doesn't exist on production.

---

## Page 4: Meeting Solutions

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** H2: 28px/600 prod vs 32px/700 dev. Dark-bg H2: 25px prod vs 36px dev.
* **Color differences:** Same global H2 color mismatch.
* **Section differences:** Content matches.
* **Spacing/layout differences:** Heights similar (7534 vs 7490).
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes (32px to 28px, 36px to 25px)
2. Fix H2 weight from 700 to 600

### Cursor Fix Prompt:
> On the Meeting Solutions page at dev.azbuilds.pro, change H2 headings from 32px/700 to 28px/600 with color #000. The "Connect on Any Device" H2 should be 25px (currently 36px). Fix paragraph text to 14px. Fix page title to proper case.

---

## Page 5: VFAX

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** **H1 is 22px on dev vs 33px on production** -- significant size reduction. H2: 28px prod vs 32px dev. Dark-bg H2: 25px prod vs 36px dev.
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 5250px prod vs 6782px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. **CRITICAL: H1 font size is 22px instead of 33px**
2. Fix H2 sizes and weights
3. Reduce page height inflation

### Cursor Fix Prompt:
> On the VFAX page at dev.azbuilds.pro, the H1 "Smarter Business Communication Starts with Axion VFAX" is 22px -- change it to 33px to match production. Fix H2s from 32px/700 to 28px/600. The dark-background H2 should be 25px not 36px. Fix paragraphs to 14px.

---

## Page 6: Business Phone System

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** H2: 28px/600 prod vs 32px/700 dev. Dark-bg H2: uses 36px on dev.
* **Color differences:** Same global H2 color mismatch.
* **Section differences:** Dev has different third H2 text ("Calls That Go Where You Go" vs "Manage Everything from a Single Unified Platform").
* **Spacing/layout differences:** Heights close (7395 vs 7542).
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights
2. Verify section content matches production

### Cursor Fix Prompt:
> On the Business Phone System page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600 with black color. Check that section headings match production exactly -- prod has "Manage Everything from a Single Unified Platform" but dev shows "Calls That Go Where You Go" in a different position. Fix page title casing.

---

## Page 7: Team Chat

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** H2: 28px/600 prod vs 32px/700 dev (all H2s). Prod has one H2 at 25px (dark bg); dev shows all at 32px.
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 6023px prod vs 7495px dev (24% taller).
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights
2. Reduce page height inflation

### Cursor Fix Prompt:
> On the Team Chat page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600. The "All-in-One Communication" H2 should be 25px (white text on dark bg). Paragraphs should be 14px. Reduce vertical spacing to match production height (~6023px, currently ~7495px).

---

## Page 8: AI Analysis

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Same global H2/P mismatches.
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 7240px prod vs 7542px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights
2. Fix paragraph size

### Cursor Fix Prompt:
> On the AI Analysis page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600 with color #000. Fix paragraphs to 14px. Fix page title to "Axion Powered Business AI-Analysis Tools Provider in the USA".

---

## Page 9: Business SMS Solution

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Same global H2/P mismatches.
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 5977px prod vs 7495px dev (25% taller).
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights
2. Reduce excess page height

### Cursor Fix Prompt:
> On the Business SMS Solution page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600 with color #000. Fix paragraph text to 14px. Reduce vertical spacing to match production (~5977px, currently ~7495px).

---

## Page 10: File Transfer

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Production H1 is 32px/black (different from other product pages). Dev H1 is 33px/white -- hero layout differs. H2: 28px/600 prod vs 32px/700 dev. Dark-bg H2: 25px prod vs 36px dev.
* **Color differences:** H1 is black on prod but white on dev -- different hero style entirely.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 6346px prod vs 7542px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. **Hero section layout is different** -- prod uses a non-dark hero (black H1), dev uses dark hero (white H1)
2. Fix H2 sizes/weights
3. Fix dark-bg H2 from 36px to 25px

### Cursor Fix Prompt:
> On the File Transfer page at dev.azbuilds.pro, the hero section uses a dark background with white H1 text, but production uses a light/no-bg hero with black H1 at 32px. Match the production hero style. Fix H2s to 28px/600. The dark-background H2 "Ready to Take Control of Your Files?" should be 25px not 36px.

---

## Page 11: Reports

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Prod H1 is 32px/black (light hero). Dev H1 is 33px/white (dark hero) -- same mismatch as File Transfer. H2s: 28px/600 vs 32px/700.
* **Color differences:** Same hero layout color difference.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 6204px prod vs 7542px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix hero section to match production light style
2. Fix H2 sizes/weights

### Cursor Fix Prompt:
> On the Reports page at dev.azbuilds.pro, the hero uses dark bg with white text, but production has a light hero with black H1 at 32px. Match production hero. Fix H2s to 28px/600 color #000.

---

## Page 12: Pulse

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Prod H1 32px/black, dev H1 33px/white. H2s mixed sizes on both.
* **Color differences:** Same hero difference.
* **Section differences:** Production has 15 H2 sections detected; dev structure differs.
* **Spacing/layout differences:** 9226px prod vs 11391px dev (23% taller).
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
Need detailed content comparison

### Extra Sections:
Need detailed content comparison

### Priority Fixes:
1. Fix hero to match production
2. Reduce 23% height inflation
3. Verify all pricing/plan sections match

### Cursor Fix Prompt:
> On the Pulse page at dev.azbuilds.pro, the hero should match production's light style (black H1, 32px). Page is 11391px vs production 9226px -- reduce vertical spacing. Verify all pricing sections and plan details match production exactly since this is a revenue page.

---

## Page 13: Healthcare

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Same global H2/P mismatches (32px/700 vs 28px/600).
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 6690px prod vs 7403px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights
2. Fix paragraph size

### Cursor Fix Prompt:
> On the Healthcare page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600 color #000. Fix paragraphs to 14px.

---

## Page 14: Veterinarian

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Same global H2/P mismatches (32px/700 vs 28px/600).
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 6608px prod vs 7403px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights to 28px/600

### Cursor Fix Prompt:
> On the Veterinarian page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600 color #000. Fix paragraphs to 14px.

---

## Page 15: Real Estate

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Same global mismatches.
* **Color differences:** Same global.
* **Section differences:** Dev has different H2 "Communication Made for Real Estate Professionals" not on production (prod has duplicate "How Axion Gives You the Real Estate Edge").
* **Spacing/layout differences:** 6415px prod vs 7403px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights
2. Verify section headings match production

### Cursor Fix Prompt:
> On the Real Estate page at dev.azbuilds.pro, fix H2s to 28px/600 color #000. Check that "Communication Made for Real Estate Professionals" H2 matches what's on production.

---

## Page 16: Education

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Same global H2/P mismatches (32px/700 vs 28px/600).
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 6198px prod vs 7403px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights

### Cursor Fix Prompt:
> On the Education page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600 color #000. Fix paragraphs to 14px.

---

## Page 17: High Tech

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Same global H2/P mismatches (32px/700 vs 28px/600).
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 6544px prod vs 7403px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights

### Cursor Fix Prompt:
> On the High Tech page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600 color #000. Fix paragraphs to 14px.

---

## Page 18: Consumer Services

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Same global H2/P mismatches (32px/700 vs 28px/600).
* **Color differences:** Same global.
* **Section differences:** Content matches.
* **Spacing/layout differences:** 6462px prod vs 7403px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix H2 sizes/weights

### Cursor Fix Prompt:
> On the Consumer Services page at dev.azbuilds.pro, fix H2s from 32px/700 to 28px/600 color #000. Fix paragraphs to 14px.

---

## Page 19: Support

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** "Visit Our Blog" H2 is **58px/800** on dev vs 28px/600 on prod -- massively oversized. "Unleash" H2 is 37.6px/800 dev vs 40px/600 prod.
* **Color differences:** "Visit Our Blog" color is `rgb(1,74,127)` on dev vs black on prod.
* **Section differences:** Content structure matches.
* **Spacing/layout differences:** 3547px prod vs 4746px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. **CRITICAL: "Visit Our Blog" H2 at 58px is way too large -- should be 28px**
2. Fix "Unleash" pre-footer heading weight from 800 to 600
3. Fix paragraph size

### Cursor Fix Prompt:
> On the Support page at dev.azbuilds.pro, the "Visit Our Blog" H2 is 58px/800 weight/color #014a7f -- it should be 28px/600/black like production. The "Unleash Your Business Potential" H2 should be 40px/600 not 37.6px/800. Fix paragraphs to 14px.

---

## Page 20: Feature Updates

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Production H1 is black (light hero); dev H1 is white (dark hero). Some H2s on dev are 25px/blue (#317ee5) vs 28px/black.
* **Color differences:** Dev uses blue accent color on some H2s.
* **Section differences:** Prod has "What's New" and "Keep Yourself Updated With Our Features" -- dev shows "The Smarter Way to Understand Every Call" instead. Different content.
* **Spacing/layout differences:** 7864px prod vs 6294px dev (dev shorter -- missing sections).
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
- "What's New"
- "Keep Yourself Updated With Our Features"

### Extra Sections:
- "The Smarter Way to Understand Every Call"

### Priority Fixes:
1. Add missing "What's New" section
2. Fix hero to match production style
3. Fix H2 colors from blue to black

### Cursor Fix Prompt:
> On the Feature Updates page at dev.azbuilds.pro, the hero should use a light background with black H1 like production. Add missing "What's New" and "Keep Yourself Updated With Our Features" sections. Remove or replace "The Smarter Way to Understand Every Call" which doesn't appear on production. Fix blue H2s (#317ee5) to black (#000).

---

## Page 21: Axion News

**Status: FAIL**

### Desktop Differences:

* **Font differences:** Various size mismatches.
* **Color differences:** Various.
* **Section differences:** **Layout is completely broken.** Overlapping content, navigation elements bleeding into page content, duplicate header elements visible.
* **Spacing/layout differences:** **16830px dev vs 3877px prod** -- page is 4.3x taller due to broken layout rendering duplicate content.
* **Image differences:** Broken layout showing icons and elements overlapping.
* **Button/form differences:** Multiple duplicate CTA elements visible.

### Mobile Differences:
* Page is completely unusable.

### Missing Sections:
Cannot assess due to broken layout

### Extra Sections:
Duplicate/broken content throughout

### Priority Fixes:
1. **CRITICAL: Page layout is completely broken** -- needs full rebuild
2. Content is rendering with overlapping columns
3. Header/nav elements duplicating in body

### Cursor Fix Prompt:
> The Axion News page at dev.azbuilds.pro is completely broken -- the layout has overlapping columns, duplicate header/nav elements rendering in the body, and the page is 16830px tall vs production's 3877px. The entire page template needs to be rebuilt to match production's clean news/blog-style layout with article cards.

---

## Page 22: Partnership

**Status: FAIL**

### Desktop Differences:

* **Font differences:** H1 color `#1c1c1c` vs black. H2s are 30px/600 vs 28px/600.
* **Color differences:** H1 color mismatch.
* **Section differences:** Page is **16534px** on dev vs 5812px on prod -- massively broken like Axion News.
* **Spacing/layout differences:** Content appears to be duplicating/looping.
* **Image differences:** Cannot assess due to broken layout.
* **Button/form differences:** Cannot assess due to broken layout.

### Mobile Differences:
* Page is completely unusable.

### Missing Sections:
Cannot fully assess

### Extra Sections:
Massive content duplication

### Priority Fixes:
1. **CRITICAL: Page layout is broken** -- 16534px vs 5812px, content duplicating
2. Fix H2 size from 30px to 28px
3. Fix H1 color from #1c1c1c to black

### Cursor Fix Prompt:
> The Partnership page at dev.azbuilds.pro is broken -- the page is 16534px vs production's 5812px with duplicated/looping content. Rebuild to match production's clean layout. Fix H2s from 30px to 28px. Fix H1 color to black.

---

## Page 23: Integration

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Prod H1 is black/light hero; dev H1 is white/dark hero. H2s are individual brand names (Salesforce, Google, Microsoft) at 32px/700 on dev.
* **Color differences:** Hero layout difference.
* **Section differences:** Different content structure -- dev shows integration brands as H2s while prod has them differently structured.
* **Spacing/layout differences:** 6080px prod vs 8095px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
- "Request a Feature" (detected on prod, not prominently on dev)

### Extra Sections:
None

### Priority Fixes:
1. Fix hero to match production light style
2. Verify integration brand sections match production layout
3. Add "Request a Feature" section

### Cursor Fix Prompt:
> On the Integration page at dev.azbuilds.pro, the hero should use a light background with black H1 like production. The integration brands (Salesforce, Google, Microsoft) H2s should match production's layout (28px/600, not 32px/700). Add the "Request a Feature" section that appears on production.

---

## Page 24: Events

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Prod H1 32px/black; dev H1 33px/white. "IT EXPO 2026" H2: prod has color `rgb(0,70,116)` vs dev `#1c1c1c`.
* **Color differences:** Hero difference. IT EXPO heading color differs.
* **Section differences:** Dev has extra "Let's Schedule a Meet-Up" H2 section.
* **Spacing/layout differences:** 3925px prod vs 5326px dev.
* **Image differences:** Same global.
* **Button/form differences:** Same global.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
- "Let's Schedule a Meet-Up"

### Priority Fixes:
1. Fix hero to match production
2. Fix IT EXPO heading color to `rgb(0,70,116)`
3. Verify "Let's Schedule a Meet-Up" is intentional

### Cursor Fix Prompt:
> On the Events page at dev.azbuilds.pro, the hero should use light bg with black H1 at 32px. Fix "IT EXPO 2026" H2 color to rgb(0,70,116). The pre-footer "Unleash" heading should be 40px/600 not 37.6px/800. Verify "Let's Schedule a Meet-Up" section matches production.

---

## Page 25: Contact Us

**Status: Needs Tweaks**

### Desktop Differences:

* **Font differences:** Prod H1 is black; dev H1 is white (different hero). Dev has "Send Us a Message" H2 at 22px/blue, "Connect With Our Team" H2 at 32px/700.
* **Color differences:** Hero difference. Blue accent H2s on dev.
* **Section differences:** Dev has restructured contact layout with different headings.
* **Spacing/layout differences:** 1907px prod vs 4746px dev (dev 2.5x taller).
* **Image differences:** Same global.
* **Button/form differences:** **Dev correctly uses Form ID 1 (gform_1) for body contact form, plus gform_2 and gform_3** -- matches spec.

### Mobile Differences:
* Same global.

### Missing Sections:
None

### Extra Sections:
None

### Priority Fixes:
1. Fix hero style to match production
2. Fix page height -- 2.5x too tall
3. Fix H2 sizing and colors to match production

### Cursor Fix Prompt:
> On the Contact Us page at dev.azbuilds.pro, the hero should use light bg with black H1. The page is 4746px vs production's 1907px -- significantly too tall, reduce spacing. "Connect With Our Team" H2 should be 28px/600/black (not 32px/700). "Send Us a Message" should match production styling. Form IDs are correct (gform_1 body, gform_2 pre-footer, gform_3 newsletter).

---

# Overall Summary

| Metric | Count |
|---|---|
| **Total pages tested** | 25 |
| **Pages passed** | 0 |
| **Pages needing tweaks** | 23 |
| **Pages failed** | 2 (Axion News, Partnership) |

### Top 5 Repeated Issues:

1. **H2 heading size/weight mismatch** (all 25 pages) -- Dev uses 32px/700 everywhere, production uses 28px/600
2. **Header/nav style completely different** (all 25 pages) -- White sticky header with dark gray links vs transparent dark header with white links
3. **Paragraph font size 13px instead of 14px** (all 25 pages)
4. **Page title appends " – dev.azbuilds.pro"** (all 25 pages)
5. **Pages significantly taller than production** (20+ pages) -- Extra spacing/padding inflating page heights by 15-25%

### Most Urgent Page to Fix First:
**Axion News** -- Layout is completely broken with overlapping content, duplicated elements, and 4.3x height inflation. Unusable in current state.

### Pages Ready for Final Approval:
**None** -- All pages have the global header/nav/typography issues that need to be fixed first. The most efficient fix is to address the global styles (header, H2 size/weight, paragraph size, page titles) which would resolve ~80% of all issues across all 25 pages simultaneously.

### Recommended Fix Order:
1. Fix global header/nav (transparent dark overlay, white links, original logo)
2. Fix global H2 typography (28px, weight 600, color #000)
3. Fix global paragraph size (14px)
4. Fix page titles (remove " – dev.azbuilds.pro" suffix)
5. Rebuild Axion News and Partnership pages (broken layouts)
6. Fix individual page hero mismatches (File Transfer, Reports, Pulse, Events, Integration, Feature Updates use light heroes on production but dark on dev)
7. Add missing sections (Homepage, Feature Updates)
8. Fix footer to match production style
