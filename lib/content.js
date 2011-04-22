
var addrList, reqJSON;
var reqData = '{"action": "checkAddr", "addrList": [';
var addrRegEx = new RegExp('(1[a-zA-Z1-9]{26,34})',"g");
var counter=0;
var tracker=0;

// Flip through all our tags and check their contents against our regex
var tags=document.getElementsByTagName('body')[0].getElementsByTagName('*');
var i=0,t;
	while(t=tags[i++]){
		if(t.childNodes[0]){
			var j=0, c;
			while(c=t.childNodes[j++]){
				if(c.nodeType==3){
				    if(addrRegEx.test(c.nodeValue) && c.parentNode.nodeName.toLowerCase() != "a")
					{
					 addrList = c.nodeValue.match(addrRegEx);
					 for(k=0;k<addrList.length;++k)
					 {
					  if(counter > 0) reqData = reqData + ',';
					  tracker = i - 1;
					  reqData = reqData + '{"address": "' + addrList[k] + '", "i": '+tracker+'}';
					 }
					 ++counter;
					}
				}
			}
		}
	}
 reqData = reqData + ']}';
 // Send all the addresses at once for verification so we don't get confused and alter the DOM while still searching
 if(counter > 0)
 {
  reqJSON = JSON.parse(reqData);
  chrome.extension.sendRequest(reqJSON, addrChangeBTC); 
 }


function addrChangeBTC(data)
{
 var resData = JSON.parse(data);
 var i=0;
 var addr,resI;
 var htmlObj;
 var replacement = "";
 var tag=document.getElementsByTagName('body')[0].getElementsByTagName('*');
 // Do it backwards so we don't mess up DOM references
 for(i=resData.addrList.length - 1;i>=0;--i)
 {
  addr = resData.addrList[i].address;
  resI = resData.addrList[i].i;//+i;
  //var addrRegEx = new RegExp(addr,"g");
  replacement = "<a href='bitcoin:?addr="+addr+"' id='lnk"+i+addr+"'>"+addr+"</a>";
  tag[resI].innerHTML = tag[resI].innerHTML.replace(addr, replacement);
  document.getElementById('lnk'+i+addr).addEventListener("click", function(event) {  var address = event.srcElement.innerText; hSendBTC(address); }, false);
 }
}

function hSendBTC(addr)
{
 var reqData = JSON.parse('{"action": "sendBoxBTC", "address": "' + addr + '"}');
 chrome.extension.sendRequest(reqData, callBack);
}

function callBack()
{
 // No need to do anything here.
}
