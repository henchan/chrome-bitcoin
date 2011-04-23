
function listaccounts()
{
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "listaccounts", "params": [] }';
  this.result = null;
  var success = function (res)
  {
    var info = JSON.parse(res);
    info.result = info.result;
  }
  var failure = function (res)
  {
    console.log("failure");
  }
  send(params,success,failure);
  return info.result;
}
