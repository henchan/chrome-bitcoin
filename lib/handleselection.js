function handleSelection(addr, amount)
{
  address = addr.replace(" ", "");
  lastAddress = address;
  lastAmount = amount;
  if (validateAddress(address) == true)
  {
    chrome.tabs.executeScript(null, {
      "file": "send_bitcoins.js"
    });
  }
}
