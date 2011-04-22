function handleSelection(addr, amount){
  address = addr.replace(" ", "");
  lastAddress = address;
  lastAmount = amount;
  var req = new XMLHttpRequest();
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "validateaddress", "params": ["' + address + '"] }';
  var server = localStorage["server"];
  var user = localStorage["user"];
  var pass = localStorage["pass"];
  var url = "http://" + user + ":" + pass + "@" + server;
  req.open("POST", url, true);
  req.onreadystatechange = function(aEvt){
    if (req.readyState == 4) {
      if (req.status == 200) 
        result(req.responseText);
      else 
        error(req.status);
    }
  };
  req.setRequestHeader("Content-type", "text/plain");
  req.send(params);
}

function result(data){
  var info = JSON.parse(data);
  if (info.result.isvalid) {
    chrome.tabs.executeScript(null, {
      "file": "send_bitcoins.js"
    });
  }
  else {
    invalidAddress();
  }
}

function invalidAddress(){
  alert(chrome.i18n.getMessage("InvalidBitcoinAddress"));			
}

function error(text)
{
  alert(chrome.i18n.getMessage("ErrorValidatingAddress"));
}
