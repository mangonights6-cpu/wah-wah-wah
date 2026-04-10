chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get('regionSelectorEnabled', (res) => {
    if (res.regionSelectorEnabled === undefined) {
      chrome.storage.local.set({ regionSelectorEnabled: true });
    }
  });
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "injectScript") {
      const { codeToInject } = message;

      chrome.scripting.executeScript({
        target: { tabId: sender.tab.id },
        world: "MAIN",
         func: (code) => {
                  try {
                     const script = document.createElement('script');
                     script.textContent = code;
                     document.documentElement.appendChild(script);
                     script.remove();
                 } catch(error){
                  }

              },
        args: [codeToInject],
      })
        .then(() => {
          sendResponse({ success: true });
        })
        .catch((error) => {
          sendResponse({ success: false, error: error.message });
        });

      return true;
    }
    return false;
  });
  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
      switch (message.action) {
          case 'enableServerJoinHeaders':
              chrome.declarativeNetRequest.updateEnabledRulesets({
                  enableRulesetIds: ['ruleset_2'],
              });
              break;
          case 'disableServerJoinHeaders':
              chrome.declarativeNetRequest.updateEnabledRulesets({
                  disableRulesetIds: ['ruleset_2'],
              });
              break;
          default:
              return;
      }
      return;
  });