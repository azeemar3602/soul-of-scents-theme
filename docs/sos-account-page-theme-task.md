# Soul of Scents — Account Page Theme Task

## Goal

Build the Soul of Scents My Account page layout in the Shopify theme based on the Profile-Tabs.pdf design reference.

Claude Code will handle only the theme/GitHub file work. Shopify admin, RevenueHunt app settings, quiz configuration, and collections cleanup will be handled separately by Chrome Agent.

---

## Important Scope

Claude Code should only work inside the existing Shopify theme repo:

**https://github.com/azeemar3602/soul-of-scents-theme**

- Do not create a new project.
- Do not reconnect Shopify.
- Do not clone another repo.
- Do not create or delete Shopify collections.
- Do not change RevenueHunt app settings.
- Do not change product metafields.
- Do not change Brand/Vendor logic.
- Do not change Musical Vibe player.
- Do not change product pages, collection pages, cart, checkout, header, or footer.

---

## Design Reference

Use **Profile-Tabs.pdf** as the visual design reference for the My Account page.

The account page design includes:

- Left sidebar navigation
- Main account content area
- Overview dashboard
- My Archetype section
- My Orders section
- Buy Again section
- My Favorites section
- My Addresses section
- My Cards placeholder
- Settings section
- Support section

---

## Sidebar Tabs

Create these account sidebar tabs:

1. Overview
2. My Archetype Results
3. My orders
4. Buy again
5. My favorites
6. My addresses
7. My cards
8. Settings
9. Support

---

## Account Page Layout

### Desktop

- Left sidebar menu
- Right content area
- Clean white/powder background
- Minimal premium design
- Thin dividers
- Black buttons
- Product cards similar to the PDF

### Mobile

- Sidebar should become stacked or horizontally scrollable
- Content should stack cleanly
- No horizontal scrolling
- No overlapping sections

---

## Brand Colors

Use existing Soul of Scents colors:

```
black:     #030303
white:     #FFFFFF
powder:    #FAF9F7
beige:     #D7D4CF
chai:      #928171
chocolate: #2C2722
```

---

## Overview Section

Build an overview dashboard with these blocks:

### My Archetype

Show:

- Archetype image
- Archetype name, e.g. `The Mineralist`
- Quiz taken date, e.g. `Quiz taken on Feb 8th, 2026`
- View Archetype button
- Repeat the Quiz link

Use placeholder or safe customer metafield hooks if real data is not available.

Possible future customer metafields:

```
customer.metafields.custom.archetype_name
customer.metafields.custom.archetype_image
customer.metafields.custom.quiz_taken_date
customer.metafields.custom.archetype_result_url
```

> Do not hardcode final customer data globally.

### My Orders

Show recent order card layout:

- Delivered status
- Delivered date
- Product thumbnails
- Track parcel button
- View order button
- Buy again button
- Order number
- Shipping date
- Return deadline

Use `customer.orders` if available.

### Buy Again

Show previously purchased product cards if possible.
If order item data is not available, create layout placeholder only.

### My Favorites

Show favorite/wishlist product card layout.
If wishlist data is not available, create layout placeholder only.

### My Addresses

Use `customer.addresses` if available. Show:

- Standard Address
- Address entries
- Edit link
- Add a new address button

### My Cards

Create placeholder UI only.
Do not attempt to show real payment card details — Shopify theme Liquid does not expose full customer card data.

### Settings

Show:

- First name
- Last name
- Email
- Edit links
- Delete my account link/button

> Do not implement destructive delete behavior unless a real backend/app flow exists.

### Support

Show support links:

- FAQ
- Archetype Quiz
- Shipping
- Blog
- Returns & Exchanges
- Gift Guide
- Get in touch

---

## My Archetype Results Tab

Create a tab/section for **My Archetype Results**.

Show:

- Current archetype card
- Old archetype results placeholder (if data exists)
- View Archetype button
- Share Results button
- Get sample bundle button
- Repeat the Quiz link
- Your olfactory match — product recommendation area

> **Important:** RevenueHunt data may not be available in the theme repo.
> Create UI hooks/placeholders only.
> Chrome Agent will handle RevenueHunt app/admin setup separately.

---

## RevenueHunt Separation

Do not configure RevenueHunt app settings in theme code.

Expected future flow:

1. Customer takes RevenueHunt quiz.
2. RevenueHunt calculates archetype.
3. Result is saved to customer metafield or accessible result URL.
4. Account page reads customer metafield or app-provided data.
5. Account page displays My Archetype and matching product recommendations.

### Archetype Values

- The Seducer
- The Cosmopolitan
- The Romantic
- The Indulger
- The Luxury Hedonist
- The Nostalgic
- The Mineralist
- The Smooth-Operator
- The Maximalist

---

## Product Mood Collections

These are the only product mood/category collections that should remain in Shopify. They are used for product card chips, product page mood tags, and collection pages.

- Main Character
- Subtle Companion
- Sweet Escape
- Second Skin
- After Dark
- Grounding Greens
- Nostalgic Notion
- Resin & Heat

> Archetype names are **quiz result profiles only** — they should NOT be Shopify collections.

---

## Suggested Account URLs / Tabs

If possible, use hash-based tabs:

```
/account#overview
/account#archetype
/account#orders
/account#buy-again
/account#favorites
/account#addresses
/account#cards
/account#settings
/account#support
```

If Shopify customer account templates cannot be controlled by theme code, create a separate theme page/template such as:

- `page.account-dashboard.json`
- or `page.sos-account-dashboard.liquid`

Then document what needs to be linked from Shopify customer account menu/admin.

---

## Files to Inspect

Claude Code should inspect the current theme first. Likely files:

```
templates/customers/account.liquid
templates/customers/account.json
templates/customers/addresses.liquid
sections/main-account.liquid
sections/customer-account.liquid
sections/account-dashboard.liquid
templates/page.account-dashboard.json
snippets/account-sidebar.liquid
snippets/card-product.liquid
assets/customer.css
assets/base.css
assets/theme.css
```

Only edit files actually used by the theme.

---

## Do Not Change

- Header
- Footer
- Cart
- Checkout
- Product page
- Collection page
- Musical Vibe player
- RevenueHunt app settings
- Brand/Vendor logic
- Product metafields
- Collections

---

## Final QA Required From Claude Code

After implementation, Claude Code must confirm:

- [ ] Which customer account type the theme appears to use.
- [ ] Whether the account page can be fully controlled by theme code.
- [ ] Whether any part needs Shopify customer account extension/app configuration.
- [ ] Account sidebar exists.
- [ ] Overview tab/section exists.
- [ ] My Archetype section exists.
- [ ] My Orders section exists.
- [ ] Buy Again section exists.
- [ ] Favorites section exists.
- [ ] Addresses section exists.
- [ ] Cards placeholder does not expose real payment data.
- [ ] Settings section exists.
- [ ] Support section exists.
- [ ] Mobile layout is clean.
- [ ] No Shopify checkout/customer login flow is broken.
- [ ] Exact files changed.
- [ ] Any Shopify admin/app steps required after code changes.

---

## Main Priority

Build the account dashboard design structure first.

Do not block the design work because RevenueHunt app data is not directly available in the theme repo.

---

*This file is for documentation and task briefing only. No theme code or Shopify admin settings were changed by creating this file.*
