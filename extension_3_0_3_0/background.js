var googleSearchUrl = 'https://spse.gq/search#gsc.tab=0&gsc.q=';

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {action: 'openChat'});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'search') {
    var query = encodeURIComponent(request.query);
    var url = googleSearchUrl + query + '&gsc.sort=';
    chrome.tabs.create({url: url, active: false}, function(tab) {
      chrome.windows.create({tabId: tab.id, type: 'popup', focused: true, width: 800, height: 600});
    });
  }
});
