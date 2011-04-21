
function listaccounts()
{
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "listaccounts", "params": [] }';
  var success = function (res)
  {
    var info = JSON.parse(res);
    for(var key in info.result) {
      var write = "<li> " + key + ":" + info[key].toFixed(2) + "/li"
      document.getElementById("output").innerHTML = write;
    }
  }
  var failure = function (res)
  {
    console.log("failure");
  }
  send(params,success,failure);
}
