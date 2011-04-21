function create_tab(name) {
  chrome.tabs.create({'url': chrome.extension.getURL(name)}, function(tab)  {
    // Tab opened.
  });
}
