var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "getinfo", "params": [] }';

var req = send(params);

function result(var req) {
  var info = JSON.parse(req.responseText);
  var writeblock = "<img src='bitcoin_19.png' style='width: 14px; height: 14px; border: 0px; vertical-align: bottom;'/><span style='font-weight: bold; font-size: 14pt;'>Balance: </span><span style='font-size: 14pt;'>" + info.result.balance.toFixed(2) + "</span><br/>";
  document.getElementById("output").innerHTML = writeblock;
}

function error(text) {
  document.getElementById("output").innerHTML = "Error fetching wallet data.";
}
