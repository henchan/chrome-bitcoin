function handleSelection(addr, amount){
  address = addr.replace(" ", "");
  lastAddress = address;
  lastAmount = amount;
  var req = new XMLHttpRequest();
  function result(res)
  {
    var info = JSON.parse(res);
    if (info.result.isvalid) {
      chrome.tabs.executeScript(null, {
	"file": "send_bitcoins.js"
      });
    }
    else {
      invalidAddress(res);
    }
  }
  function invalidAddress()
  {
    alert(chrome.i18n.getMessage("InvalidBitcoinAddress"));			 
  }
  function error(text)
  {
    alert(chrome.i18n.getMessage("ErrorValidatingAddress"));
  }
  var res = send(params,success,failure);
}


