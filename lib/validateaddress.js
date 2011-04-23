//Validate a bitcoin address. Return true or fals depending if validation works.
function validateAddress(addr){
	
	var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "validateaddress", "params": ["' + addr + '"] }';

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
	  function success()
	  {
	    return true;
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


