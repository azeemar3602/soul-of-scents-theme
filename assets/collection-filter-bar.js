/* ============================================================
   Collection Filter Bar — soul of scents
   ============================================================ */
(function () {
  'use strict';

  class CollectionFilterBar {
    constructor(el) {
      this.el      = el;
      this.trigger = el.querySelector('[data-cfb-trigger]');
      this.panel   = el.querySelector('[data-cfb-panel]');
      if (!this.trigger || !this.panel) return;
      this._bind();
    }

    _bind() {
      this.trigger.addEventListener('click', () => this.toggle());

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen()) this.close();
      });

      document.addEventListener('click', (e) => {
        if (this.isOpen() && !this.el.contains(e.target)) this.close();
      });

      // Links navigate naturally — just close panel visually
      this.panel.querySelectorAll('.cfb__link').forEach((a) => {
        a.addEventListener('click', () => this.close());
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