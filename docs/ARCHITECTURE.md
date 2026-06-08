# soul of scents — Complete Project Architecture
**Full technical reference. If you're starting fresh, read this first.**

---

## 1. Project Overview

| Item | Value |
|---|---|
| **Store** | soscurates.com |
| **Shopify store ID** | soul-of-scents-4 (rsurch-sn.myshopify.com) |
| **Live theme** | soul-of-scents-theme/main (ID: 186552680833) |
| **GitHub repo** | https://github.com/azeemar3602/soul-of-scents-theme |
| **Local clone** | `C:\Users\AXION USER\soul-of-scents-theme` |
| **Theme Access Token** | `shptka_df176b96f3db52feb67e7d81e7e2d787` |
| **GitHub PAT** | Generate a new one at github.com/settings/tokens (needs `repo` scope) |
| **Contact email** | nursena@soulofscents.de |

---

## 2. Deployment Workflow

```
Local code change
      ↓
git add + git commit + git push origin main
      ↓
GitHub Actions (.github/workflows/shopify-deploy.yml)
      ↓
shopify theme push → live store (rsurch-sn.myshopify.com)
      ↓
soscurates.com serves updated theme
```

### Push command (run from project folder):
```powershell
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
cd "C:\Users\AXION USER\soul-of-scents-theme"
git add .
git commit -m "your message"
git push origin main
```

### Emergency direct push (bypasses git, instant):
```powershell
shopify theme push --store rsurch-sn.myshopify.com --password shptka_df176b96f3db52feb67e7d81e7e2d787 --theme 186552680833 --allow-live --only sections/filename.liquid
```

### ⚠️ Critical rules:
- **Always commit to git first.** CLI-only pushes get overwritten when the Shopify Bot syncs back to GitHub.
- **Pull latest templates before pushing** if the client has made theme editor changes:
  ```powershell
  shopify theme pull --store rsurch-sn.myshopify.com --password shptka_df176b96f3db52feb67e7d81e7e2d787 --theme 186552680833 --only templates/index.json
  ```
- **If remote has diverged** (Shopify Bot pushed a commit): `git push --force origin main`

---

## 3. Custom Sections Built From Scratch

### `sections/hero-banner.liquid` + `assets/hero-banner.css`
Full-width hero with glassmorphism card. Supports image/video background, two CTA buttons, mobile button layout control (stacked/inline).

**Settings added:**
- `mobile_button_layout` — stacked or inline on mobile
- `mobile_button_gap` — spacing between buttons

### `sections/collection-filter-bar.liquid` + `assets/collection-filter-bar.css` + `assets/collection-filter-bar.js`
Custom filter bar above the collection grid. Three columns: Categories, Brand, Size.

**Architecture:**
- Brand links → `/collections/<brand-handle>` (smart collections by vendor)
- Size links → `/collections/all?filter.p.option.size=XXX`
- JS reads current URL params and toggles filters (multi-filter support)
- Active filters highlighted in bold

### `sections/scent-reveal.liquid`
Renders a scent profile HTML file inside an iframe. The HTML file is uploaded to Shopify Files and linked via the `custom.scent_profile_html` product metafield.

**Key implementation details:**
- Uses `iframe.srcdoc` (NOT Blob URL) — Safari/iOS compatibility
- JavaScript injects HTML fetched via `fetch()`, then reads `iframe.contentDocument.scrollHeight` to auto-resize
- Fires 3× (on load, +250ms, +700ms) to catch late-rendering content

### `sections/sos-archetype-result.liquid`
Archetype result page section. Block-based with these block types:
- `hero` — archetype name (large serif italic)
- `image_row` — 1/2/3 image grid
- `text` — quote or body text
- `read_more` — accordion
- `products` — recommended products from `rh-` collection
- `sample_set` — add-to-cart for sample set product
- `share` — two centred buttons (Web Share API + download)
- `retake_quiz` — "↺ Take the quiz again" link to /pages/quiz
- `spacer`

**Product source logic:** Auto-resolves from page handle → `collections['rh-' + page.handle]`

### `sections/product-dual-slider.liquid`
Horizontally scrolling image collage from `custom.product_slider_images` metafield. Two rows, opposite scroll directions. Images loaded at 2× resolution for retina.

### `sections/sos-seo-text.liquid`
SEO text block. Low opacity (65%), small font (13px), fully visible to search engines. Placed above footer.

### `sections/sos-hero.liquid` + `assets/sos-hero.css`
Custom hero section (alternative to hero-banner). Has built-in mobile stacked/inline button control. Currently unused on homepage (slideshow-1 is used instead).

### `sections/musical-vibe-player.liquid`
Renders a Spotify track embed or audio player from `custom.musical_vibe_spotify` metafield.

---

## 4. Modified Existing Sections

### `sections/footer.liquid`
- Heading text-transform overridden to `none` (removes uppercase)
- Copyright uses `text-transform: lowercase` (forces "soul of scents")
- Mobile newsletter: clean stacked layout (input above button, no merged-box look)
- Payment icons: `flex-wrap: wrap` so they don't overflow on mobile
- Nav column: `align-items: flex-start` for top alignment

### `sections/slideshow-1/2/3.liquid`
Added mobile CSS to stack `.slideshow__btn-wrapper` buttons vertically on screens ≤749px. Equal width (260px each).

### `sections/cart-template.liquid`
- Cart items loop: skips items where `item.product.title contains 'complimentary'` or product type is 'gift'

### `snippets/block-cart.liquid`
- Removed "Complimentary Gift" banner (`free-shipping.liquid` is now empty)
- Removed "Add a gift pouch" expandable button

### `snippets/free-shipping.liquid`
- Emptied (only a comment remains)

### `snippets/shipping-calc.liquid`
- Default country set to Germany (was United States)

### `sections/product-slider.liquid`
- Shows 50ml variant price instead of minimum price
- Sample-set products excluded from listings

### `snippets/product-card.liquid`
- Finds 50ml variant first → shows its price instead of the minimum

### `sections/product-template-1.liquid`
- Defaults to 50ml variant on product page load (when no `?variant=ID` in URL)

### `sections/sos-archetype-result.liquid` (original modifications)
- Redesigned share block: two centred buttons (Web Share API + download)
- Supports image AND PDF download URLs separately
- `retake_quiz` block type added

---

## 5. Template Files

### `templates/page.json` — Default page template
**Stripped clean** — only `main-page` section. The inline RevenueHunt quiz block that was here was causing all "Default page" pages (T&C, Shipping) to redirect to the archetype result page. Removed.

### `templates/page.quiz.json` — Quiz page template
Dedicated template for `/pages/quiz` with the RevenueHunt inline quiz app block. Quiz page MUST use this template (not Default page).

### `templates/page.contact.json` — Contact page template
Clean contact form only. Points to `nursena@soulofscents.de`.

### `templates/page.faqs.json` — FAQ page template
FAQ accordion — two sections (Orders, Shipping) with placeholder content.

### `templates/collection.json` — Shop All / collection pages
- **Product Slider** active (custom card design)
- **Main Collection Template** disabled
- Brand filter URLs: `/collections/<brand-handle>`
- Size filter URLs: `/collections/all?filter.p.option.size=XXX`

### `templates/list-collections.json` — /collections page (Shop Categories)
- Removed old demo sections (parallax banner from 2024, product slider for "bras" collection)
- Added "Shop Categories" heading
- Added hero-banner CTA matching the shop all page

---

## 6. Quiz & Archetype System Architecture

```
Customer → /pages/quiz (RevenueHunt quiz, template: page.quiz)
                ↓
         Quiz completes
                ↓
theme.liquid listens for postMessage: 'revenuehunt:quiz-renderer' + type: 'isResult'
                ↓
ONLY fires if pathname === '/pages/quiz'  ← important guard added
                ↓
Reads quizObj.variables.highest (archetype key, e.g. 'the-mineralist')
                ↓
ARCHETYPE_MAP lookup → e.g. '/pages/the-mineralist'
                ↓
window.location.assign(archetypeUrl)
                ↓
Customer lands on archetype result page
```

### Archetype pages
9 pages, each with dedicated template (`page.archetype-the-mineralist.json` etc.):
- The Seducer → /pages/the-seducer
- The Cosmopolitan → /pages/the-cosmopolitan
- The Romantic → /pages/the-romantic
- The Indulger → /pages/the-indulger
- The Luxury Hedonist → /pages/the-luxury-hedonist
- The Nostalgic → /pages/the-nostalgic
- The Mineralist → /pages/the-mineralist
- The Smooth-Operator → /pages/the-smooth-operator
- The Maximalist → /pages/the-maximalist

### Recommended products per archetype
Smart collections `RH - The Mineralist` etc. with condition: `Archetype / Category is equal to [Name]`

---

## 7. Product Metafields (namespace: custom)

| Key | Type | Used in |
|---|---|---|
| `scent_profile_html` | single_line_text | scent-reveal.liquid — scent wheel iframe |
| `mood_tags` | list.metaobject | product cards — coloured mood pills |
| `curator_s_note_quote` | single_line_text | product page |
| `artisan_bio` | rich_text | product page |
| `artisan_image` | file_reference | product page |
| `artisan_name` | single_line_text | product page |
| `legal_ingredients` | multi_line_text | product page (formerly "Ingredients Note") |
| `craftsmanship_note` | rich_text | product page |
| `archetype_category` | single_line_text | RH collections (quiz product assignment) |
| `product_slider_images` | list.file_reference | dual image slider collage |
| `spotify_iframe_code` | single_line_text | Spotify embed |
| `musical_vibe_spotify` | single_line_text | musical vibe player |
| `product_audio` | file_reference | audio player |

---

## 8. Brand Collections

All smart collections, condition: **Product vendor is equal to [Brand]**

| Brand | Collection handle |
|---|---|
| Sarah Baker | `sarah-baker` |
| Thomas de Monaco | `thomas-de-monaco` |
| Vapor Mundum | `vapor-mundum` |
| Manuel Mathieu | `manuel-mathieu` |
| Une Nuit Nomade | `une-nuit-nomade` |
| pour toi | `pour-toi` |

---

## 9. Shopify Search & Discovery Filters

Enabled filters (in Search & Discovery app):
- **Availability** (source: Standard Availability)
- **Price** (source: Standard Price)
- **Brand** (source: Standard Vendor) — ID: 118173598081

---

## 10. Navigation Menus

### Main menu (`main-menu`)
Shop All, Vision, Quiz, Magazine, Signature Session

### Support menu (`customer-account-main-menu`)
Contact Us → `/pages/contact-us`
FAQ → `/pages/faq`
Terms & Conditions → `/pages/terms-conditions`
Shipping & Returns → `/pages/shipping-returns`

### Footer menu (`fußzeilenmenü`)
Privacy Policy, Cookie Policy

---

## 11. Key JavaScript in theme.liquid

### Quiz redirect (lines ~230–290)
- Listens for `revenuehunt:quiz-renderer` postMessage
- Only fires redirect when `pathname === '/pages/quiz'`
- ARCHETYPE_MAP maps archetype key → page URL
- Fallback reads from localStorage `sos_archetype_data`

### Scroll restoration
- Saves `scrollY` to `sessionStorage` on `beforeunload`
- Restores on `pageshow` (persisted) and `DOMContentLoaded` (type 2 = back button)

---

## 12. Pages Created

| Page | URL | Template |
|---|---|---|
| Contact Us | /pages/contact-us | page.contact |
| FAQ | /pages/faq | page.faqs |
| Quiz | /pages/quiz | page.quiz |
| Vision | /pages/vision | page.about-us-v1 |
| All archetype pages | /pages/the-* | page.archetype-the-* |

---

## 13. Outstanding / Future Work

- [ ] Nursena portrait — reduce to ~50% size, right-align text (on Vision page or homepage)
- [ ] One-pager files — upload PDF + image per archetype to Shopify Files, paste CDN URLs in Share block
- [ ] Rename "Ingredients Note" → "Legal Ingredients" in Settings → Custom data → Products
- [ ] Account page — finalise design (Profile-Tabs.pdf reference)
- [ ] Populate FAQ page with real questions
- [ ] Populate Terms & Conditions with real legal text
- [ ] Populate Shipping & Returns with real policy
- [ ] Add "Retake quiz" block to all 9 archetype pages in theme editor

---

*Last updated: June 2026*
