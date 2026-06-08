# soul of scents — New Claude Session Starter Prompt

**Copy and paste this entire message at the start of a new Claude Code session.**

---

## PASTE THIS TO START A NEW SESSION:

---

I'm working on the **soul of scents** Shopify theme. Here is all the context you need:

**Store:** soscurates.com  
**Shopify store:** rsurch-sn.myshopify.com  
**Live theme ID:** 186552680833  
**Theme Access Token:** shptka_df176b96f3db52feb67e7d81e7e2d787  
**Local project path:** `C:\Users\AXION USER\soul-of-scents-theme`  
**GitHub repo:** https://github.com/azeemar3602/soul-of-scents-theme  

**How to push changes:**
```powershell
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
cd "C:\Users\AXION USER\soul-of-scents-theme"
git add .
git commit -m "your message"
git push origin main
```
GitHub Actions auto-deploys to Shopify on every push to main.

**IMPORTANT rules:**
- Always commit to git before or after CLI pushes — the Shopify Bot syncs back to GitHub and overwrites CLI-only changes
- Pull latest templates before editing if client has made theme editor changes: `shopify theme pull --store rsurch-sn.myshopify.com --password shptka_df176b96f3db52feb67e7d81e7e2d787 --theme 186552680833 --only templates/index.json`
- If remote has diverged: `git push --force origin main`
- The quiz redirect in theme.liquid ONLY fires on `/pages/quiz` — do not change this guard

**Full architecture:** Read `docs/ARCHITECTURE.md` in the repo for complete technical reference.  
**Client guide:** Read `docs/soul-of-scents-team-guide.md` for non-technical reference.

**What was previously done (summary):**
- Custom hero section with mobile button stacking
- Quiz → archetype auto-redirect (ARCHETYPE_MAP in theme.liquid)
- Scent profile iframe with srcdoc (Safari-safe, auto-resizes)
- Custom collection filter bar with multi-filter JS
- Product cards default to 50ml variant price
- Archetype result pages: share/download blocks, retake quiz button
- Footer: lowercase brand name, sentence case headings, mobile newsletter
- Cart: gift banner removed, Germany default country
- All page templates: contact, faqs, quiz (dedicated templates)
- Slideshow buttons stacked on mobile
- Vision page: bubbles_animated video
- SEO text block section
- Documentation: ARCHITECTURE.md + team guide

**Outstanding work:**
- Nursena portrait resize to ~50% on Vision/homepage
- One-pager PDFs/images per archetype — upload to Shopify Files, paste CDN URLs in Share block
- Rename "Ingredients Note" → "Legal Ingredients" in Settings → Custom data → Products
- Account page finalisation (see Profile-Tabs.pdf for design)
- Populate FAQ, Terms & Conditions, Shipping & Returns with real content
- Add "Retake quiz" block to all 9 archetype pages in theme editor

---

*Save this file. If Claude session is deleted, paste the above to restore full context instantly.*
