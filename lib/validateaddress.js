//Validate a bitcoin address. Return true or fals depending if validation works.
function validateAddress(addr,callback){
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "validateaddress", "params": ["' + addr + '"] }';
  var req = new XMLHttpRequest();
  function success(res)
  {
    var info = JSON.parse(res);
    if (info.result.isvalid) {
      callback.execute();
    }
    else {
      invalidAddress(res);
    }
  }
  function invalidAddress()
  {
    alert(chrome.i18n.getMessage("InvalidBitcoinAddress"));
  }
  function failure(res)
  {
    alert(chrome.i18n.getMessage("ErrorValidatingAddress"));
  }
  var res = send(params,success,failure);
}


