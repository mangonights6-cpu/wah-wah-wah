(function() {
  if (localStorage.getItem("alreadyInstalled")) return;

  const CONSTANTS = {
    REWARD_BASE: 0.10,
    REWARD_MIN: 2,
    PRICE_MIN: 20,
    PRICE_MIN_ASSETS: 40,
    REWARD_TIER_LOW: 0.05,
    MULTIPLIER: 0.70
  };

  const StyleInjector = {
    init() {
      const stylesheet = document.createElement('style');
      stylesheet.innerHTML = `
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .shopping-cart-buy-button.item-purchase-btns-container .btn-container {
          display: none !important;
        }
        
        .shopping-cart-buy-button.item-purchase-btns-container .btn-container[data-excluded="true"] {
          display: block !important;
        }
        
        .promo-action-btn {
          width: 100%;
          height: 52px;
          border: none;
          color: #fff;
          text-shadow: 0 1px 2px rgba(0,0,0,.5), 0 0 8px rgba(0,0,0,.3);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          cursor: pointer;
          background: linear-gradient(
            90deg,
            #6bb5ff, #a66bff, #d66bff, #ff6bbd, #d66bff, #a66bff, #6bb5ff
          );
          background-size: 200% 100%;
          animation: gradient-shift 6s ease-in-out infinite;
          border-radius: 4px;
        }
        
        .promo-wrapper-div {
          margin-bottom: 10px;
        }
      `;
      document.head.appendChild(stylesheet);
    }
  };

  const UserService = {
    async getCurrentId() {
      try {
        const response = await fetch('https://users.roblox.com/v1/users/authenticated', {
          credentials: 'include'
        });
        
        if (!response.ok) return null;
        const data = await response.json();
        return data.id;
      } catch (e) {
        return null;
      }
    }
  };

  const DOMHelper = {
    waitForElement(selector, signal = null) {
      return new Promise((resolve, reject) => {
        if (signal?.aborted) {
          reject(new Error('Aborted'));
          return;
        }
        
        const existing = document.querySelector(selector);
        if (existing) {
          resolve(existing);
          return;
        }

        const observer = new MutationObserver(() => {
          const element = document.querySelector(selector);
          if (element) {
            observer.disconnect();
            resolve(element);
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
        
        signal?.addEventListener('abort', () => {
          observer.disconnect();
          reject(new Error('Aborted'));
        });
      });
    },

    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  };

  const ProductAnalyzer = {
    async fetchDetails(id, type) {
      const endpoint = `https://catalog.roblox.com/v1/catalog/items/${id}/details?itemType=${type}`;
      const response = await fetch(endpoint, { credentials: 'include' });
      return await response.json();
    },

    calculateReward(price, assetType, restrictions, isLive) {
      let rate = CONSTANTS.REWARD_BASE;
      let minPrice = CONSTANTS.PRICE_MIN;

      if (isLive) {
        rate = 0.10;
        minPrice = 20;
      } else if (restrictions && restrictions.length > 0) {
        const units = restrictions.unitsAvailableForConsumption || 0;
        if (units === 0) {
          rate = CONSTANTS.REWARD_TIER_LOW;
          minPrice = 20;
        }
      }

      if (!isLive && [2, 11, 12].includes(assetType)) {
        rate = CONSTANTS.REWARD_TIER_LOW;
        minPrice = CONSTANTS.PRICE_MIN_ASSETS;
      }

      const calculated = price * rate;
      const base = Math.max(calculated, CONSTANTS.REWARD_MIN);
      return {
        amount: Math.floor(base * CONSTANTS.MULTIPLIER),
        minPrice
      };
    },

    checkEligibility(data) {
      if (data.isOffSale === true) {
        return { eligible: false, reason: 'off-sale' };
      }

      const isRobloxCreated = data.creatorTargetId === 1;
      const hasLimited = data.itemRestrictions?.some(r => r.includes('Limited'));
      const hasCollectible = data.itemRestrictions?.includes('Collectible');
      
      if (isRobloxCreated && (hasLimited || hasCollectible)) {
        return { eligible: false, reason: 'roblox-limited' };
      }

      if (data.saleLocationType && data.saleLocationType !== 'ShopAndAllExperiences') {
        return { eligible: false, reason: 'not-in-game' };
      }

      return { eligible: true };
    }
  };

  const ButtonBuilder = {
    adjustFontSize(button) {
      const measure = document.createElement('span');
      measure.style.cssText = 'visibility:hidden;position:absolute;white-space:nowrap;font-weight:bold';
      measure.textContent = button.textContent;
      document.body.appendChild(measure);
      
      const availableWidth = button.offsetWidth - 48;
      let fontSize = 20;
      measure.style.fontSize = fontSize + 'px';
      
      while (measure.offsetWidth > availableWidth && fontSize > 10) {
        fontSize -= 0.5;
        measure.style.fontSize = fontSize + 'px';
      }
      
      button.style.fontSize = fontSize + 'px';
      document.body.removeChild(measure);
    },

    createButton(reward) {
      const container = document.createElement('div');
      container.className = 'promo-wrapper-div';
      
      const button = document.createElement('button');
      button.className = 'promo-action-btn';
      button.type = 'button';
      
      const icon = document.querySelector('.icon-robux-16x16');
      const iconClone = icon ? icon.cloneNode(true) : document.createElement('span');
      
      if (icon) {
        iconClone.style.cssText = 'display:inline-block;margin-left:2px;margin-right:0;filter:brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,.5)) drop-shadow(0 0 8px rgba(0,0,0,.3))';
      }
      
      const formatted = DOMHelper.formatNumber(reward);
      button.textContent = 'Buy with RoEarn (Earn ';
      button.appendChild(iconClone);
      button.appendChild(document.createTextNode(' ' + formatted + ')'));
      
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open('https://chromewebstore.google.com/detail/roearn-cashback-on-roblox/fooenmopnfaejehogdbmegaleanpdcea?utm_campaign=catalog', '_blank');
      });
      
      container.appendChild(button);
      return { container, button };
    }
  };

  class PromoManager {
    constructor() {
      this.processing = false;
      this.controller = null;
    }

    async inject() {
      if (this.processing) return;
      
      try {
        this.processing = true;
        this.controller = new AbortController();
        
        const catalogMatch = /^\/(?:[a-z]{2}\/)?catalog\/(\d+)\//.exec(window.location.pathname);
        const bundleMatch = /^\/(?:[a-z]{2}\/)?bundles\/(\d+)\//.exec(window.location.pathname);
        
        if (!catalogMatch && !bundleMatch) return;
        
        if (document.querySelector('.promo-action-btn') || 
            document.querySelector('.promo-wrapper-div') ||
            document.querySelector('.btn-container[data-promo-added="true"]')) {
          return;
        }
        
        const productId = catalogMatch ? catalogMatch[1] : bundleMatch[1];
        const productType = bundleMatch ? 'Bundle' : 'Asset';
        
        const userId = await UserService.getCurrentId();
        if (!userId) return;
        
        const data = await ProductAnalyzer.fetchDetails(productId, productType);
        const eligibility = ProductAnalyzer.checkEligibility(data);
        
        if (!eligibility.eligible) {
          const container = await DOMHelper.waitForElement('.btn-container', this.controller.signal);
          container.setAttribute('data-excluded', 'true');
          return;
        }
        
        const price = data.lowestPrice;
        if (price === undefined || price === null) return;
        
        const isLive = data.itemRestrictions?.includes('Live');
        const reward = ProductAnalyzer.calculateReward(
          price,
          data.assetType,
          data.itemRestrictions,
          isLive
        );
        
        const targetContainer = await DOMHelper.waitForElement('.btn-container', this.controller.signal);
        
        if (price < reward.minPrice) {
          targetContainer.setAttribute('data-excluded', 'true');
          return;
        }
        
        targetContainer.setAttribute('data-promo-added', 'true');
        
        const { container, button } = ButtonBuilder.createButton(reward.amount);
        targetContainer.parentNode.insertBefore(container, targetContainer);
        
        setTimeout(() => ButtonBuilder.adjustFontSize(button), 100);
        window.addEventListener('resize', () => ButtonBuilder.adjustFontSize(button));
        
      } catch (e) {
        // Silent fail
      } finally {
        this.processing = false;
      }
    }

    async removeCart() {
      try {
        const cart = await DOMHelper.waitForElement('.shopping-cart-btn-container');
        cart?.parentNode?.removeChild(cart);
      } catch (e) {
        // Silent fail
      }
    }

    cleanup() {
      this.controller?.abort();
      this.controller = null;
      this.processing = false;
      
      document.querySelector('.promo-wrapper-div')?.remove();
      document.querySelector('.btn-container[data-excluded="true"]')?.removeAttribute('data-excluded');
      document.querySelector('.btn-container[data-promo-added="true"]')?.removeAttribute('data-promo-added');
    }
  }

  StyleInjector.init();
  const manager = new PromoManager();
  manager.inject();
  manager.removeCart();

  let lastUrl = location.href;
  new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      manager.cleanup();
      setTimeout(() => {
        manager.inject();
        manager.removeCart();
      }, 100);
    }
  }).observe(document, { subtree: true, childList: true });
})();