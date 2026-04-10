(function () {
  if (window.location.hostname !== "roblox.com" && window.location.hostname !== "www.roblox.com") return;

  var LOCALE_MAP = {
    'en_us':'en','id_id':'id','de_de':'de','es_es':'es',
    'fr_fr':'fr','it_it':'it','pl_pl':'pl','pt_br':'pt_BR',
    'vi_vn':'vi','tr_tr':'tr','th_th':'th','zh_cn':'zh_CN',
    'zh_tw':'zh_TW','ja_jp':'ja','ko_kr':'ko','ar_001':'ar'
  };

  fetch('https://locale.roblox.com/v1/locales/user-localization-locus-supported-locales', {
    credentials: 'include'
  })
  .then(function (r) { return r.ok ? r.json() : null; })
  .then(function (data) {
    var code = data && data.generalExperience && data.generalExperience.locale;
    if (!code) return;
    var locale = LOCALE_MAP[code];
    if (locale) localStorage.setItem('roearnLocale', locale);
  })
  .catch(function () {});
})();