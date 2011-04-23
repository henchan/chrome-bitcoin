function handleSelection(addr, amount)
{
  address = addr.replace(" ", "");
  lastAddress = address;
  lastAmount = amount;
  if (validateAddress(address) == true)
  {
  	alert('validated')
    chrome.tabs.executeScript(null, {
      "file": "lib/send_bitcoins.js"
    });
  }
}
