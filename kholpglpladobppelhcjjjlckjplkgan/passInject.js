(function() {
  if (localStorage.getItem("alreadyInstalled")) return;

  const CONFIG = {
    REWARD_PERCENTAGE: 0.05,
    MIN_PRICE: 40,
    MIN_REWARD: 1,
    COMMISSION_RATE: 0.70
  };

  class StyleManager {
    static inject() {
      if (document.getElementById('gamepass-promo-styles')) return;
      
      const styles = document.createElement('style');
      styles.id = 'gamepass-promo-styles';
      styles.textContent = `
        @keyframes colorwave-animation {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .PurchaseButton.rbx-gear-passes-purchase {
          display: none !important;
        }
        
        .PurchaseButton.rbx-gear-passes-purchase[data-excluded="true"] {
          display: block !important;
        }
        
        .gamepass-promo-cta {
          background: linear-gradient(
            90deg,
            #6bb5ff, #a66bff, #d66bff, #ff6bbd, #d66bff, #a66bff, #6bb5ff
          );
          background-size: 200% 100%;
          animation: colorwave-animation 6s ease-in-out infinite;
          height: 50px;
          border: none;
          border-radius: 8px;
          color: #fff;
          text-shadow: 0 1px 2px rgba(0,0,0,.5), 0 0 8px rgba(0,0,0,.3);
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          margin-bottom: 12px;
          cursor: pointer;
          flex-direction: column;
          gap: 2px;
        }
      `;
      document.head.appendChild(styles);
    }
  }

  class UserAuth {
    static async fetchId() {
      try {
        const req = await fetch('https://users.roblox.com/v1/users/authenticated', {
          credentials: 'include'
        });
        
        if (!req.ok) return null;
        const json = await req.json();
        return json.id;
      } catch (err) {
        return null;
      }
    }
  }

  class DOMUtils {
    static async findElement(selector, abortSignal = null) {
      return new Promise((resolve, reject) => {
        if (abortSignal?.aborted) {
          reject(new Error('Aborted'));
          return;
        }
        
        const elem = document.querySelector(selector);
        if (elem) {
          resolve(elem);
          return;
        }

        const watcher = new MutationObserver(() => {
          const elem = document.querySelector(selector);
          if (elem) {
            watcher.disconnect();
            resolve(elem);
          }
        });

        watcher.observe(document.body, {
          childList: true,
          subtree: true
        });
        
        abortSignal?.addEventListener('abort', () => {
          watcher.disconnect();
          reject(new Error('Aborted'));
        });
      });
    }

    static isOnStoreTab() {
      return window.location.hash.includes('store') || 
             document.querySelector('#tab-store.active') !== null ||
             document.querySelector('.tab-pane.store.active') !== null;
    }

    static isGamePage() {
      return /^\/(?:[a-z]{2}\/)?games\/\d+\//.test(window.location.pathname);
    }
  }

  class RewardCalculator {
    static compute(price) {
      const baseReward = price * CONFIG.REWARD_PERCENTAGE;
      return Math.floor(baseReward * CONFIG.COMMISSION_RATE);
    }

    static meetsThreshold(price, reward) {
      return price >= CONFIG.MIN_PRICE && reward >= CONFIG.MIN_REWARD;
    }
  }

  class ButtonFactory {
    static createIcon() {
      const original = document.querySelector('.icon-robux-16x16');
      const clone = original ? original.cloneNode(true) : document.createElement('span');
      
      if (original) {
        clone.style.cssText = 'display:inline-block;margin-left:2px;margin-right:0;filter:brightness(0) invert(1) drop-shadow(0 1px 2px rgba(0,0,0,.5)) drop-shadow(0 0 8px rgba(0,0,0,.3))';
      }
      
      return clone;
    }

    static build(reward) {
      const btn = document.createElement('button');
      btn.className = 'btn-buy-md btn-full-width gamepass-promo-cta';
      btn.type = 'button';
      
      const topText = document.createElement('div');
      topText.textContent = 'Buy';
      topText.style.cssText = 'width:100%;text-align:center;font-size:16.8px;font-weight:700;color:#fff';
      
      const bottomText = document.createElement('div');
      bottomText.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;font-size:14px;color:#fff';
      
      const icon = this.createIcon();
      
      bottomText.appendChild(document.createTextNode('(Earn '));
      bottomText.appendChild(icon);
      bottomText.appendChild(document.createTextNode(' ' + reward + ')'));
      
      btn.appendChild(topText);
      btn.appendChild(bottomText);
      
      btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        window.open('https://chromewebstore.google.com/detail/roearn-cashback-on-roblox/fooenmopnfaejehogdbmegaleanpdcea?utm_campaign=gamepass', '_blank');
      });
      
      return btn;
    }
  }

  class GamepassPromotion {
    constructor() {
      this.active = false;
      this.abortCtrl = null;
    }

    async processButtons() {
      if (this.active) return;
      
      try {
        this.active = true;
        this.abortCtrl = new AbortController();
        
        if (!DOMUtils.isGamePage()) return;
        if (!DOMUtils.isOnStoreTab()) return;
        
        const userId = await UserAuth.fetchId();
        if (!userId) return;
        
        await DOMUtils.findElement('#rbx-passes-container .PurchaseButton', this.abortCtrl.signal);
        
        const buttons = document.querySelectorAll('#rbx-passes-container .PurchaseButton');
        if (buttons.length === 0) return;
        
        buttons.forEach(btn => this.enhanceButton(btn));
        
      } catch (err) {
        // Silent fail
      } finally {
        this.active = false;
      }
    }

    enhanceButton(purchaseBtn) {
      const footer = purchaseBtn.closest('.store-card-footer');
      if (footer.querySelector('.gamepass-promo-cta')) return;
      
      const card = purchaseBtn.closest('.store-card');
      const caption = purchaseBtn.closest('.store-card-caption');
      const item = purchaseBtn.closest('.list-item');
      
      [card, caption, item, footer].forEach(el => {
        if (el) {
          el.style.overflow = 'visible';
          el.style.height = 'auto';
          if (el === card || el === caption) {
            el.style.minHeight = 'auto';
          }
        }
      });
      
      const price = parseInt(purchaseBtn.getAttribute('data-expected-price')) || 0;
      const reward = RewardCalculator.compute(price);
      
      if (!RewardCalculator.meetsThreshold(price, reward)) {
        purchaseBtn.setAttribute('data-excluded', 'true');
        return;
      }
      
      const promoBtn = ButtonFactory.build(reward);
      footer.insertBefore(promoBtn, purchaseBtn);
    }

    cleanup() {
      this.abortCtrl?.abort();
      this.abortCtrl = null;
      this.active = false;
      
      document.querySelectorAll('.gamepass-promo-cta').forEach(btn => btn.remove());
      document.querySelectorAll('.PurchaseButton.rbx-gear-passes-purchase[data-excluded="true"]')
        .forEach(btn => btn.removeAttribute('data-excluded'));
    }
  }

  class NavigationWatcher {
    constructor(promotion) {
      this.promotion = promotion;
      this.lastHash = window.location.hash;
    }

    start() {
      this.checkAndRun();
      setTimeout(() => this.checkAndRun(), 100);
      setTimeout(() => this.checkAndRun(), 300);
      
      window.addEventListener('hashchange', () => this.onNavigate());
      
      new MutationObserver(() => {
        if (window.location.hash !== this.lastHash) {
          this.lastHash = window.location.hash;
          this.onNavigate();
        }
      }).observe(document.body, { subtree: true, childList: true });
    }

    checkAndRun() {
      if (DOMUtils.isOnStoreTab()) {
        this.promotion.processButtons();
      }
    }

    onNavigate() {
      this.promotion.cleanup();
      this.checkAndRun();
    }
  }

  StyleManager.inject();
  const promo = new GamepassPromotion();
  const nav = new NavigationWatcher(promo);
  nav.start();
})();