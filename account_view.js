
function createView()
{
  chrome.tabs.create();
}

chrome.browserAction.onClicked.addListener(function(tab) {createView() });
