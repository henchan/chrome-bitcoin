
function listaccounts()
{
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "listaccounts", "params": [] }';
  var success = function (res)
  {
    var info = JSON.parse(res);
    for(var key in info.result) {
      var writing = "<li> " + key + ":" + info[key] + "</li>";
      document.getElementById("output").innerHTML = writing;
    }
  }
  var failure = function (res)
  {
    console.log("failure");
  }
  send(params,success,failure);
}
