/* Soul of Scents — Layer It With (scent synergy) — Add both to cart logic.
   - Reads the currently selected main-product variant from the product form (the
     [name="id"] hidden input that the theme keeps in sync with the variant picker).
   - Reads the synergy variant ID from the button's data-synergy-variant-id.
   - POSTs both as a single /cart/add.js multi-item request.
   - Refreshes the existing cart drawer if the theme exposes a refresh hook;
     otherwise falls back to /cart. */
(function () {
  'use strict';

  function init(section) {
    var button  = section.querySelector('.sos-synergy-add-both');
    var message = section.querySelector('.sos-synergy-message');
    if (!button || button.disabled) return;

    button.dataset.originalText = button.textContent.trim();

    function getMainVariantId() {
      var productForm = document.querySelector('form[action*="/cart/add"]');
      if (!productForm) return null;
      var selected = productForm.querySelector('[name="id"]');
      return selected ? selected.value : null;
    }

    function setMessage(text, kind) {
      if (!message) return;
      message.textContent = text || '';
      message.classList.remove('is-error', 'is-success');
      if (kind === 'error')   message.classList.add('is-error');
      if (kind === 'success') message.classList.add('is-success');
    }

    function setButtonState(state) {
      button.classList.remove('is-loading', 'is-success');
      switch (state) {
        case 'loading':
          button.disabled = true;
          button.classList.add('is-loading');
          button.textContent = 'Adding…';
          break;
        case 'success':
          button.disabled = true;
          button.classList.add('is-success');
          button.textContent = 'Added ✓';
          break;
        case 'reset':
        default:
          button.disabled = false;
          button.textContent = button.dataset.originalText || 'Add both to cart';
          break;
      }
    }

    function refreshCartDrawer() {
      // Theme-specific hooks first.
      try {
        if (window.theme && window.theme.miniCart) {
          if (typeof window.theme.miniCart.updateElements === 'function') window.theme.miniCart.updateElements();
          if (typeof window.theme.miniCart.generateCart   === 'function') window.theme.miniCart.generateCart();
        }
      } catch (_) {}
      // Generic events some themes listen for.
      document.dispatchEvent(new CustomEvent('cart:refresh'));
      document.dispatchEvent(new CustomEvent('cart:build'));
      document.dispatchEvent(new CustomEvent('cart:open'));
      // Common drawer-open triggers in the SoS theme.
      var drawerTrigger = document.querySelector('.js-mini-cart, .cardraw, [data-cart-drawer]');
      if (drawerTrigger && !drawerTrigger.classList.contains('active')) {
        drawerTrigger.classList.add('active');
      }
    }

    async function addBothToCart() {
      var mainVariantId    = getMainVariantId();
      var synergyVariantId = button.dataset.synergyVariantId;

      if (!mainVariantId) {
        setMessage('Please select an available option first.', 'error');
        return;
      }
      if (!synergyVariantId) {
        setMessage('Pairing currently unavailable.', 'error');
        return;
      }

      setButtonState('loading');
      setMessage('', null);

      try {
        var res = await fetch('/cart/add.js', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({
            items: [
              { id: Number(mainVariantId),    quantity: 1 },
              { id: Number(synergyVariantId), quantity: 1 }
            ]
          })
        });

        if (!res.ok) {
          var errBody = null;
          try { errBody = await res.json(); } catch(_) {}
          var msg = (errBody && (errBody.description || errBody.message)) || 'We could not add both products. Please try again.';
          setMessage(msg, 'error');
          setButtonState('reset');
          return;
        }

        setButtonState('success');
        setMessage('Both scents have been added to your cart.', 'success');
        refreshCartDrawer();

        // Fallback to /cart if no drawer materialised after a moment.
        setTimeout(function () {
          var drawerOpen = document.querySelector('.cardraw.active, .js-mini-cart.active, [data-cart-drawer].is-open');
          if (!drawerOpen) {
            // Soft fallback: try once more to open, else redirect.
            refreshCartDrawer();
            setTimeout(function () {
              var stillClosed = !document.querySelector('.cardraw.active, .js-mini-cart.active, [data-cart-drawer].is-open');
              if (stillClosed) window.location.href = '/cart';
            }, 600);
          }
          // Reset the button shortly after success so user can repeat if they want.
          setTimeout(function () { setButtonState('reset'); setMessage('', null); }, 3500);
        }, 600);

      } catch (e) {
        setMessage('Could not add both products. Please try again.', 'error');
        setButtonState('reset');
      }
    }

    button.addEventListener('click', addBothToCart);
  }

  function bootAll() {
    document.querySelectorAll('[data-product-synergy]').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootAll);
  } else {
    bootAll();
  }
})();
