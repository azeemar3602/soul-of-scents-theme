# soul of scents — Store Management Guide
**Your complete guide to managing and updating the store — no developer needed.**

---

## Table of Contents
1. [Editing pages in the theme editor](#1-editing-pages-in-the-theme-editor)
2. [The quiz and archetype system](#2-the-quiz-and-archetype-system)
3. [Adding and editing products](#3-adding-and-editing-products)
4. [Product metafields explained](#4-product-metafields-explained)
5. [Collections and filtering](#5-collections-and-filtering)
6. [The scent profile (HTML files)](#6-the-scent-profile-html-files)
7. [Shipping details](#7-shipping-details)
8. [Contact & legal pages](#8-contact--legal-pages)
9. [What to leave to your developer](#9-what-to-leave-to-your-developer)

---

## 1. Editing pages in the theme editor

Go to: **Online Store → Themes → Customise**

You can then navigate to any page using the top bar. Most content on the site is editable through sections and blocks — no coding needed.

### Key pages and where to find them

| Page | URL | What you can edit there |
|---|---|---|
| Homepage | `/` | Hero text, product sliders, reviews, SEO text |
| Vision | `/pages/vision` | Images, text, video |
| Quiz | `/pages/quiz` | Quiz is managed via RevenueHunt (separate app) |
| Archetype results | `/pages/the-mineralist` etc. | Heading, images, products, share buttons |
| Contact Us | `/pages/contact-us` | Uses the contact form template — edit copy in admin |
| FAQ | `/pages/faq` | Accordion questions and answers |
| Shop | `/collections/all` | Filter bar, product grid |

### How to add a "Retake quiz" button to an archetype page

1. Go to **Customise → navigate to any archetype page** (e.g. `/pages/the-mineralist`)
2. In the left sidebar, find the archetype section → click **"Add block"**
3. Choose **"Retake quiz button"**
4. It will appear as a subtle underlined link: *↺ Take the quiz again*
5. Save — repeat for all 9 archetype pages

---

## 2. The quiz and archetype system

The quiz is powered by **RevenueHunt** (a Shopify app). Here is the full flow:

```
Customer takes quiz at /pages/quiz
         ↓
Quiz result fires → theme auto-redirects to archetype page
e.g. The Mineralist → /pages/the-mineralist
         ↓
Customer sees their archetype profile + recommended products
         ↓
Share button → WhatsApp / social / downloads PDF one-pager
```

### Assigning products to an archetype

Each archetype page shows products from a collection named `RH - [Archetype Name]` (e.g. `RH - The Mineralist`). These are **smart collections** — products appear automatically if they have the correct `Archetype / Category` metafield.

**To add a product to an archetype's recommended list:**
1. Go to **Products → [product name]**
2. Scroll to **Metafields → Archetype / Category**
3. Type the archetype name exactly: `The Mineralist` (or whichever archetype)
4. Save — the product appears in the RH collection immediately

⚠️ **Do not change the Archetype / Category value if you don't want products to move between archetypes.** Each product can only be recommended for one archetype.

### Updating the quiz itself

Log in to [RevenueHunt](https://admin.revenuehunt.com) with your credentials. All quiz questions, outcomes, and scoring are managed there — outside of Shopify.

### Uploading one-pager files (PDF / image) for sharing

1. Go to **Shopify Admin → Content → Files**
2. Upload the PDF or image for an archetype (e.g. `mineralist-one-pager.pdf`)
3. Copy the CDN URL that appears after upload
4. Go to **Customise → archetype page → Share & Download block**
5. Paste the URL into **"PDF file URL"** or **"Image file URL"**
6. Repeat for each of the 9 archetypes

---

## 3. Adding and editing products

### Adding a new product

1. **Products → Add product**
2. Fill in: Title, Description, Price, Images
3. Set **Vendor** = the brand name (e.g. `Sarah Baker`) — this controls which brand filter the product appears under
4. Add the product to the right **collection** (mood category + archetype RH collection)
5. Fill in **metafields** (see Section 5 below)

### Editing the product display order on a homepage slider

1. Go to a collection (e.g. `After Dark`)
2. Change the sort order to **Manual**
3. Drag products into the order you want
4. The homepage product slider picks up the order automatically

### Product images

Upload images at the highest quality available. The theme loads them at 2× resolution for retina screens — if you upload low-resolution images they will look blurry on modern phones.

---

## 4. Product metafields explained

Metafields are extra data fields on products. Here is what each one does:

| Metafield | What it does | Example value |
|---|---|---|
| **Scent Profile HTML** | Shows the interactive scent wheel on the product page | `silver_saffron_scent_profile.html` |
| **Mood Tags** | Coloured pills shown on product cards (e.g. "After Dark") | `After Dark, Resin & Heat` |
| **Curator's Note Quote** | Short italic quote shown on the product page | `"Fun coat, cigar..."` |
| **Artisan Name** | Name of the perfumer | `Jérôme Di Marino` |
| **Artisan Bio** | Short bio text about the perfumer | `Jérôme Di Marino occupies...` |
| **Artisan Image** | Portrait photo of the perfumer | *(upload a photo)* |
| **Legal Ingredients** | Full INCI ingredient list | `Alcohol denat., aqua...` |
| **Craftsmanship Note** | Story about how the perfume is made | `Une Nuit Nomade draws...` |
| **Archetype / Category** | Which archetype this product belongs to | `The Mineralist` |
| **Product Slider Images** | Extra lifestyle/mood images shown in the scrolling collage | *(upload images)* |
| **Spotify iframe code** | Embeds a Spotify track player | `<iframe data-testid=...` |
| **Musical Vibe Spotify** | Spotify track URL for the vibe player | *(Spotify track link)* |

### How to add a scent profile HTML file

1. Create or receive the HTML scent profile file (e.g. `eccco_scent_profile.html`)
2. Go to **Settings → Files** and upload the HTML file
3. Copy the CDN URL (looks like `https://cdn.shopify.com/s/files/1/.../eccco_scent_profile.html`)
4. Go to the product → **Metafields → Scent Profile HTML**
5. Paste the URL and save
6. The scent profile will now appear on that product page

---

## 5. Collections and filtering

### Brand collections

Each brand has its own collection that automatically includes all products from that brand:

| Brand | Collection handle | How it works |
|---|---|---|
| Sarah Baker | `sarah-baker` | Smart collection: Vendor = Sarah Baker |
| Thomas de Monaco | `thomas-de-monaco` | Smart collection: Vendor = Thomas de Monaco |
| Vapor Mundum | `vapor-mundum` | Smart collection: Vendor = Vapor Mundum |
| Manuel Mathieu | `manuel-mathieu` | Smart collection: Vendor = Manuel Mathieu |
| Une Nuit Nomade | `une-nuit-nomade` | Smart collection: Vendor = Une Nuit Nomade |
| pour toi | `pour-toi` | Smart collection: Vendor = pour toi |

To add a new brand: create a new Smart collection with condition **"Product vendor is equal to [Brand Name]"**.

### Mood/category collections

Collections like `After Dark`, `Resin & Heat` etc. are used for the filter bar and for displaying products on the homepage. Add products to these collections manually or via product tags.

### The filter bar

The filter bar on the shop page has three columns:
- **Categories** — automatically shows all collections (brand collections are hidden)
- **Brand** — links directly to brand collections
- **Size** — filters by variant size using Shopify's filter system

To add a new brand to the filter bar: go to **Customise → any collection page → Collection Filter Bar section** and update the Brand link fields.

---

## 6. The scent profile (HTML files)

The scent profile is an interactive diagram shown on product pages. It is an **HTML file** uploaded to Shopify Files and displayed in an invisible frame on the page.

**To update or replace a scent profile:**
1. Create the new HTML file
2. Upload to **Settings → Files**
3. Copy the CDN URL
4. On the product → **Metafields → Scent Profile HTML** → paste new URL → Save

The profile automatically resizes to fit its content — no height adjustments needed.

---

## 7. Shipping details

Shipping rates are managed in **Settings → Shipping and delivery**. You can:
- Add or remove shipping zones (countries)
- Set flat rates or weight-based rates
- Configure free shipping thresholds

The cart shipping estimator defaults to **Germany**. If a logged-in customer has a saved address, it uses their country instead.

---

## 8. Contact & legal pages

| Page | URL | How to edit |
|---|---|---|
| Contact Us | `/pages/contact-us` | Go to **Pages → Contact Us** — the form sends to `nursena@soulofscents.de`. To change the email: contact your Shopify email routing or update in **Settings → Notifications** |
| FAQ | `/pages/faq` | Go to **Pages → FAQ → View on online store** then **Customise** — add/edit accordion blocks |
| Terms & Conditions | `/pages/terms-conditions` | Go to **Pages → Terms & Conditions** — edit the body text directly |
| Shipping & Returns | `/pages/shipping-returns` | Go to **Pages → Shipping & Returns** — edit the body text directly |
| Privacy Policy | `/policies/privacy-policy` | **Settings → Policies** |
| Cookie Policy | `/pages/cookie-policy` | Go to **Pages → Cookie Policy** |

### How to change the contact form email address

The contact form uses Shopify's built-in form — submissions go to the store's notification email. To change it:
1. Go to **Settings → Notifications**
2. Click **"Sender email"**
3. Update to the desired address

---

## 9. What to leave to your developer

These things require code changes and should not be edited without developer involvement:

- **Theme liquid files** (`.liquid` files in the theme editor's code editor)
- **GitHub repository** — do not push directly to `main` without coordinating
- **JavaScript in theme.liquid** — especially the quiz redirect logic
- **Search & Discovery filter configuration** — changing filter types can break the filter bar
- **Metafield definitions** — deleting a definition deletes all product data for that field

If something looks broken after a theme editor save, the most likely cause is that a section was accidentally deleted. Use **Ctrl+Z** in the theme editor to undo, or contact the developer.

---

*Last updated: June 2026 — soul of scents development team*
