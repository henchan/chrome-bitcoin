destroyBTC();

var address = "";
var amount = "";
var sendBTC = document.createElement('div');
sendBTC.setAttribute('id','sendBTC');
var body = document.getElementsByTagName('body');
body[0].appendChild(sendBTC);

var innerHTML = chrome.i18n.getMessage("Sending") +
				" <input id='amtBTC' type='text' name='amount' size='5' style='text-align: right;' value='" + 
				amount + 
				"'/> "+chrome.i18n.getMessage("BitCoinsTo") +
				"<br/><div id='addressBTC'>" + 
				address + 
				"</div><br/><button id='doSendBTC' onclick='sendCoins()'>Send</button>";
var closeBox = "<button class='' id='killBTC' onclick='destroyBTC()'>Close</button><div id='messageBTC'></div>";
document.getElementById('sendBTC').innerHTML = innerHTML + closeBox;
document.getElementById('sendBTC').style.minHeight = "75px";
document.getElementById('sendBTC').style.minWidth = "200px";
document.getElementById('sendBTC').style.backgroundColor = "#ffffff";
document.getElementById('sendBTC').style.position = "fixed";
document.getElementById('sendBTC').style.top = "0px";
document.getElementById('sendBTC').style.right = "0px";
document.getElementById('sendBTC').style.zIndex = "100";
document.getElementById('sendBTC').style.padding = "4px";
document.getElementById('sendBTC').style.border = "2px solid black";
chrome.extension.sendRequest({"action": "getVars"}, getVars);

function getVars(data)
{
 var varData = JSON.parse(data);
 address = varData.address;
 amount = varData.amount;
 if(amount == "0") amount = "";
 if(document.getElementById('sendBTC'))
 { 
  document.getElementById('amtBTC').value = amount;
  document.getElementById('addressBTC').innerText = address;
 }
}


function destroyBTC()
{
 if(document.getElementById('sendBTC'))
 {
  body[0].removeChild(document.getElementById('sendBTC'));
 }
}

function sendCoins()
{
    document.getElementById('messageBTC').innerText = '';
    amount = document.getElementById('amtBTC').value;
	if(amount != "" && amount != "0")
	{
	 if(amount.charAt(0) == '.')
	   amount = '0' + amount;
     var reqData = JSON.parse('{"action": "sendCoins", "amount": ' + amount + ', "address": "' + address + '"}');
     chrome.extension.sendRequest(reqData, sendResult);
     document.getElementById('messageBTC').innerText = chrome.i18n.getMessage("Sending");
     document.getElementById('amtBTC').value = amount;
	} else {
     document.getElementById('messageBTC').innerText = chrome.i18n.getMessage("InvalidAmount");
	}
}


function sendResult(data) {
  var output = data;
  if(JSON.parse(output))
  {
   var info = JSON.parse(data);
   if(info.error)
   {
    output = "Error sending Bitcoins: " + info.error.message;
   } else if(info.result) {
    output = parseFloat(amount).toFixed(2) + chrome.i18n.getMessage("BitcoinsSuccessfullySent")+" <br/>" + address;
   }
  } else {
   output = "Error: " + output;
  }
  document.getElementById('sendBTC').innerHTML = output + '<br/>' + closeBox;
  document.getElementById('killBTC').addEventListener("click", destroyBTC, false);
}

 document.getElementById('killBTC').addEventListener("click", destroyBTC, false);
 document.getElementById('doSendBTC').addEventListener("click", sendCoins, false);
