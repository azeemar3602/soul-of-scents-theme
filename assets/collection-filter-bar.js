/* ============================================================
   Collection Filter Bar — soul of scents
   Supports multi-filter: clicking a filter adds/removes it
   from the URL params without clearing other active filters.
   ============================================================ */
(function () {
  'use strict';

  /* ── URL filter helpers ───────────────────────────────── */

  /**
   * Parse the current page's active filters from the URL.
   * Returns an object { paramName: Set<value> }
   * e.g. { 'filter.p.vendor': Set{'Sarah Baker'}, 'filter.p.option.size': Set{'50ml'} }
   */
  function getActiveFilters() {
    var params = new URLSearchParams(window.location.search);
    var active = {};
    params.forEach(function (val, key) {
      if (!key.startsWith('filter.')) return;
      if (!active[key]) active[key] = new Set();
      active[key].add(val);
    });
    return active;
  }

  /**
   * Given a filter link href, extract the filter param key + value it represents.
   * Handles both:
   *  - collection URLs:  /collections/sarah-baker
   *  - param URLs:       /collections/all?filter.p.vendor=Sarah+Baker
   * Returns null for plain collection or non-filter links.
   */
  function parseFilterLink(href) {
    try {
      var url = new URL(href, window.location.origin);
      var params = url.searchParams;
      var filterKey = null, filterVal = null;
      params.forEach(function (v, k) {
        if (k.startsWith('filter.')) { filterKey = k; filterVal = v; }
      });
      return filterKey ? { key: filterKey, val: filterVal, baseCollection: url.pathname } : null;
    } catch (_) { return null; }
  }

  /**
   * Build a new URL by toggling a specific filter key/value.
   * Stays on the same collection path if no brand filter is active.
   */
  function buildToggleUrl(filterKey, filterVal, baseCollection) {
    var currentPath = window.location.pathname;
    var params = new URLSearchParams(window.location.search);

    // Determine if the filter is currently active
    var currentVals = params.getAll(filterKey);
    var isActive = currentVals.includes(filterVal);

    if (isActive) {
      // REMOVE: delete only this specific value
      params.delete(filterKey);
      currentVals.filter(function (v) { return v !== filterVal; })
                 .forEach(function (v) { params.append(filterKey, v); });
    } else {
      // ADD: append to existing values for this key
      params.append(filterKey, filterVal);
    }

    // Always reset to page 1 when filters change
    params.delete('page');

    var query = params.toString();
    return currentPath + (query ? '?' + query : '');
  }

  /** Toggle a link's active state and expose a "click to remove" hint. */
  function setActive(a, isActive) {
    if (isActive) {
      a.classList.add('is-active');
      a.setAttribute('aria-current', 'true');
      a.setAttribute('title', 'Click to remove filter');
      a.setAttribute('aria-label', a.textContent.trim() + ' — click to remove filter');
    } else {
      a.classList.remove('is-active');
      a.removeAttribute('aria-current');
      a.removeAttribute('title');
      a.removeAttribute('aria-label');
    }
  }

  /* ── Filter Bar UI ────────────────────────────────────── */

  class CollectionFilterBar {
    constructor(el) {
      this.el      = el;
      this.trigger = el.querySelector('[data-cfb-trigger]');
      this.panel   = el.querySelector('[data-cfb-panel]');
      if (!this.trigger || !this.panel) return;
      this._markActive();
      this._bind();
    }

    /** Mark links whose filter matches a currently-active URL param,
     *  or — for plain collection links (category/brand/size) — whose
     *  path matches the current page. */
    _markActive() {
      var active = getActiveFilters();
      var currentPath = window.location.pathname.replace(/\/$/, '');
      this.panel.querySelectorAll('.cfb__link').forEach(function (a) {
        var info = parseFilterLink(a.href);
        if (info) {
          var vals = active[info.key];
          if (vals && vals.has(info.val)) {
            setActive(a, true);
          } else {
            setActive(a, false);
          }
          return;
        }
        var linkPath = new URL(a.href, window.location.origin).pathname.replace(/\/$/, '');
        setActive(a, !!linkPath && linkPath === currentPath);
      });
    }

    _bind() {
      this.trigger.addEventListener('click', () => this.toggle());

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen()) this.close();
      });

      document.addEventListener('click', (e) => {
        if (this.isOpen() && !this.el.contains(e.target)) this.close();
      });

      var allUrl = this.panel.getAttribute('data-cfb-all-url');

      /* Intercept filter link clicks → build multi-filter URL */
      this.panel.querySelectorAll('.cfb__link').forEach((a) => {
        var info = parseFilterLink(a.href);

        if (!info) {
          // Plain collection link (category/brand/size). If it's already
          // the active filter, clicking again deselects it back to "All products".
          if (!allUrl) return;
          a.addEventListener('click', (e) => {
            if (!a.classList.contains('is-active')) return; // let it navigate normally
            e.preventDefault();
            this.close();
            window.location.assign(allUrl);
          });
          return;
        }

        a.addEventListener('click', (e) => {
          e.preventDefault();
          var newUrl = buildToggleUrl(info.key, info.val, info.baseCollection);
          this.close();
          window.location.assign(newUrl);
        });
      });
    }

    isOpen()  { return this.trigger.getAttribute('aria-expanded') === 'true'; }
    open()    {
      this.trigger.setAttribute('aria-expanded', 'true');
      this.panel.setAttribute('aria-hidden', 'false');
      this.panel.classList.add('is-open');
    }
    close()   {
      this.trigger.setAttribute('aria-expanded', 'false');
      this.panel.setAttribute('aria-hidden', 'true');
      this.panel.classList.remove('is-open');
    }
    toggle()  { this.isOpen() ? this.close() : this.open(); }
  }

  function init() {
    document.querySelectorAll('[data-cfb]').forEach((el) => new CollectionFilterBar(el));
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

  document.addEventListener('shopify:section:load', init);
})();
