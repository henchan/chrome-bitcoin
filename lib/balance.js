function balance()
{
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "getbalance", "params": [] }';
  var success = function(res) {
    var info = JSON.parse(res);
    var writeblock =  "<img src='images/bitcoin_19.png' style='width: 14px; height: 14px; border: 0px; vertical-align: bottom;'/><span style='font-weight: bold; font-size: 14pt;'>Balance: </span><span style='font-size: 14pt;'>" + info.result.toFixed(2) + "</span><br/>";
    document.getElementById("output").innerHTML = writeblock;
  }
  var failure = function(res)
  {
    document.getElementById("output").innerHTML = "Error fetching wallet data.";
  }
  var res = send(params,success,failure);
}
