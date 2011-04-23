function handleSelection(addr, amount)
{
  address = addr.replace(" ", "");
  lastAddress = address;
  lastAmount = amount;
  validateAddress(address,this);
  this.execute = function()
  {
    chrome.tabs.executeScript(null, {
      "file": "send_bitcoins.js"
    });
  }
}
