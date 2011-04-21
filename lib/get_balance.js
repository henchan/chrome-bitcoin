var req = new XMLHttpRequest();
var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "getinfo", "params": [] }';
var server = localStorage["server"];
var user = localStorage["user"];
var pass = localStorage["pass"];
var url = "http://" + user + ":" + pass + "@" + server;

req.open("POST", url, true);
 req.onreadystatechange = function (aEvt) {  
   if (req.readyState == 4) {  
      if(req.status == 200)  
       result();
      else  
       error(req.status);  
   }  
 };
req.setRequestHeader("Content-type", "text/plain");
req.send(params);

function result() {
  var info = JSON.parse(req.responseText);
  var writeblock = "<img src='bitcoin_19.png' style='width: 14px; height: 14px; border: 0px; vertical-align: bottom;'/><span style='font-weight: bold; font-size: 14pt;'>Balance: </span><span style='font-size: 14pt;'>" + info.result.balance.toFixed(2) + "</span><br/>";
  document.getElementById("output").innerHTML = writeblock;
}

function error(text) {
  document.getElementById("output").innerHTML = "Error fetching wallet data.";
}