
function listaccounts()
{
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "listaccounts", "params": [] }';
  var success = function (res)
  {
    var info = JSON.parse(res);
    for(var key in info.result) {
      var li = document.createElement('li');
      var text = document.createTextNode(key + ":" + info.result[key]);
      document.getElementById("output").appendChild(li.appendChild(text));
    }
  }
  var failure = function (res)
  {
    console.log("failure");
  }
  send(params,success,failure);
}
