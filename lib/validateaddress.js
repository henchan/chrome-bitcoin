//Validate bitcoin address only.
function validateaddress(addr){
  var req = new XMLHttpRequest();
  function result(res)
  {
    var info = JSON.parse(res);
    if (info.result.isvalid) {
      return true;
    }
    else {
      invalidAddress(res);
    }
  }
  function invalidAddress()
  {
    alert(chrome.i18n.getMessage("InvalidBitcoinAddress"));
    return false;
  }
  function failure(text)
  {
    alert(chrome.i18n.getMessage("ErrorValidatingAddress"));
    return false;
  }
  var res = send(params,success,failure);
  if (res == true)
  {
    return true;
  }
  else
  {
    return false;
  }
}


