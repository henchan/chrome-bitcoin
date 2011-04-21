function act() {
  chrome.tabs.create({'url': chrome.extension.getURL('accounting.html')}, function(tab)  {
    // Tab opened.
  });
}
