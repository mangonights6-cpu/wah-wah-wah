(function () {
  if (window.location.hostname !== "roblox.com" && window.location.hostname !== "www.roblox.com") {
    return;
  }

  function checkForRealRoEarn() {
    return document.querySelector("#nav-roearn") !== null;
  }

  function runCheck() {
    if (checkForRealRoEarn()) {
      localStorage.setItem("alreadyInstalled", "true");
    } else {
      localStorage.removeItem("alreadyInstalled");
    }
  }

  runCheck();

  setTimeout(runCheck, 100);

  const observer = new MutationObserver(runCheck);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();