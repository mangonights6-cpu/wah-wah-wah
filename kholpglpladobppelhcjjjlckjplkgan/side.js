(function () {
  if (!['roblox.com', 'www.roblox.com'].includes(window.location.hostname)) return;

  function purgeBtn() {
    const b = document.getElementById('nav-sidebutton');
    if (!b) return;
    (b.closest('li') ?? b).remove();
  }

  function checkPath() {
    if (window.location.pathname.includes('/roearn')) {
      localStorage.setItem('alreadyInstalled', 'true');
      purgeBtn();
    }
  }

  checkPath();
  new MutationObserver(checkPath).observe(document.documentElement, { childList: true, subtree: true });
  if (window.location.pathname.includes('/roearn')) return;

  const MS_3DAYS = 3 * 24 * 60 * 60 * 1000;
  const TARGET_URL = 'https://chromewebstore.google.com/detail/fooenmopnfaejehogdbmegaleanpdcea?utm_campaign=sidebar';
  const NO_BADGE = ['es', 'fr', 'it'];

  let translations = null;

  async function loadTranslations() {
    const locale = localStorage.getItem('roearnLocale') || 'en';
    loadTranslations._locale = locale;

    try {
      const res = await fetch(chrome.runtime.getURL(`_locales/${locale}/messages.json`));
      if (res.ok) { translations = await res.json(); return translations; }
    } catch (_) {}

    try {
      const res = await fetch(chrome.runtime.getURL('_locales/en/messages.json'));
      translations = await res.json();
      return translations;
    } catch (_) {}

    translations = {};
    return translations;
  }

  function tx(k) { return translations?.[k]?.message ?? k; }

  function hasNewNav() { return !!document.querySelector('div.left-nav ul.flex'); }

  function navIsDark() {
    const el = document.querySelector('div.left-nav');
    if (!el) return false;
    const c = getComputedStyle(el).backgroundColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    return c ? (parseInt(c[1]) + parseInt(c[2]) + parseInt(c[3])) / 3 < 128 : false;
  }

  function insertNewNav() {
    if (document.getElementById('nav-roearn')) return;

    const locale = loadTranslations._locale || 'en';
    const ul = document.querySelector('div.left-nav ul.flex');
    if (!ul) return;

    const avatarEl = ul.querySelector('.radius-circle.clip.size-600');
    if (!avatarEl) return;

    const avatarLi = avatarEl.closest('li');
    if (!avatarLi) return;

    const dupe = document.getElementById('nav-sidebutton');
    if (dupe) {
      const dupeLi = dupe.closest('li');
      if (dupeLi && dupeLi.previousElementSibling !== avatarLi) dupeLi.remove();
      else return;
    }

    const dark = navIsDark();
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = TARGET_URL;
    a.id = 'nav-sidebutton';
    a.target = '_blank';
    a.className = 'content-emphasis text-title-large flex items-center gap-small padding-left-xsmall padding-right-xxsmall radius-medium relative clip group/interactable focus-visible:outline-focus disabled:outline-none';

    const bg = document.createElement('div');
    bg.setAttribute('role', 'presentation');
    bg.className = 'absolute inset-[0] transition-colors group-hover/interactable:bg-[var(--color-state-hover)] group-active/interactable:bg-[var(--color-state-press)] group-disabled/interactable:bg-none';

    const slot = document.createElement('span');
    slot.className = 'size-1000 grow-0 shrink-0 basis-auto flex justify-center items-center';

    const img = document.createElement('img');
    img.src = chrome.runtime.getURL(dark ? 'icons/sidebar-icon-white.png' : 'icons/sidebar-icon.png');
    img.style.cssText = 'width:24px;height:24px;transition:filter 0.2s ease;user-select:none;pointer-events:none;';
    img.draggable = false;

    const fOff = dark ? 'none' : 'brightness(0) saturate(100%) invert(30%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(60%) contrast(90%)';
    const fOn  = dark ? 'none' : 'brightness(0) saturate(100%) invert(10%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(20%) contrast(90%)';
    img.style.filter = fOff;

    a.addEventListener('mouseenter', () => img.style.filter = fOn);
    a.addEventListener('mouseleave', () => img.style.filter = fOff);
    slot.appendChild(img);

    const lbl = document.createElement('span');
    lbl.className = 'min-width-0 text-truncate-end text-no-wrap';
    lbl.textContent = 'RoEarn';

    a.appendChild(bg);
    a.appendChild(slot);
    a.appendChild(lbl);

    if (!NO_BADGE.includes(locale)) {
      const bWrap = document.createElement('span');
      bWrap.className = 'fill basis-auto padding-x-small flex justify-end items-center';
      const bBox = document.createElement('div');
      bBox.className = 'foundation-web-badge flex items-center radius-circle select-none height-600 gap-xsmall width-[fit-content] padding-x-small bg-system-contrast content-inverse-emphasis stroke-none';
      bBox.style.borderColor = 'var(--light-mode-stroke-default)';
      const bTxt = document.createElement('span');
      bTxt.className = 'padding-y-xsmall text-no-wrap text-truncate-split text-label-small content-inverse-emphasis';
      bTxt.textContent = tx('sidebarBadgeNew');
      bBox.appendChild(bTxt);
      bWrap.appendChild(bBox);
      a.appendChild(bWrap);
    }

    li.appendChild(a);
    avatarLi.insertAdjacentElement('afterend', li);
  }

  function applyHideStyle() {
    if (document.getElementById('roearn-nav-style')) return true;
    if (!document.head) return false;
    const s = document.createElement('style');
    s.id = 'roearn-nav-style';
    s.textContent = '#navigation .left-col-list{visibility:hidden!important}#navigation .left-col-list.roearn-ready{visibility:visible!important}';
    document.head.appendChild(s);
    return true;
  }

  function insertOldNav() {
    if (document.getElementById('nav-roearn')) return;
    if (document.getElementById('nav-sidebutton')) return;

    const ul = document.querySelector('#navigation .left-col-list');
    if (!ul) return;

    const dark = document.getElementById('rbx-body')?.classList.contains('dark-theme');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'dynamic-overflow-container text-nav';
    a.href = TARGET_URL;
    a.id = 'nav-sidebutton';
    a.target = '_blank';

    const wrap = document.createElement('div');
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('icons/sidebar-icon.png');
    img.style.cssText = 'width:28px;height:28px;transition:filter 0.2s ease;user-select:none;pointer-events:none;';
    img.draggable = false;

    const fOff = dark
      ? 'brightness(0) saturate(100%) invert(76%) sepia(0%) saturate(262%) hue-rotate(155deg) brightness(92%) contrast(87%)'
      : 'brightness(0) saturate(100%) invert(50%) sepia(6%) saturate(378%) hue-rotate(155deg) brightness(93%) contrast(88%)';
    const fOn = dark
      ? 'brightness(0) invert(1)'
      : 'brightness(0) saturate(100%) invert(22%) sepia(4%) saturate(686%) hue-rotate(155deg) brightness(95%) contrast(90%)';

    img.style.filter = fOff;
    wrap.appendChild(img);

    const lbl = document.createElement('span');
    lbl.className = 'font-header-2 dynamic-ellipsis-item';
    lbl.title = 'RoEarn';
    lbl.textContent = 'RoEarn';

    const tagWrap = document.createElement('div');
    tagWrap.className = 'dynamic-width-item align-right';
    const tag = document.createElement('span');
    tag.className = 'notification-blue notification';
    tag.textContent = tx('sidebarBadgeNew');
    tagWrap.appendChild(tag);

    a.addEventListener('mouseenter', () => img.style.filter = fOn);
    a.addEventListener('mouseleave', () => img.style.filter = fOff);
    a.appendChild(wrap);
    a.appendChild(lbl);
    a.appendChild(tagWrap);
    li.appendChild(a);
    ul.insertBefore(li, ul.firstChild);
    ul.classList.add('roearn-ready');
  }

  function showButton() {
    if (hasNewNav()) {
      insertNewNav();
    } else {
      if (!applyHideStyle()) {
        const w = new MutationObserver(() => { if (applyHideStyle()) w.disconnect(); });
        w.observe(document.documentElement, { childList: true, subtree: true });
      }
      insertOldNav();
    }
  }

  async function tick() {
    if (localStorage.getItem('alreadyInstalled') === 'true') return;
    await loadTranslations();

    if (localStorage.getItem('showSidebarButton') === 'true') { showButton(); return; }

    const stamp = localStorage.getItem('timeForButton');
    if (stamp) {
      if (Date.now() - parseInt(stamp, 10) >= MS_3DAYS) {
        localStorage.removeItem('timeForButton');
        localStorage.setItem('showSidebarButton', 'true');
        showButton();
      }
    } else {
      localStorage.setItem('timeForButton', String(Date.now()));
    }
  }

  new MutationObserver(tick).observe(document.documentElement, { childList: true, subtree: true });
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', tick) : tick();
})();