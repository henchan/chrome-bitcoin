
function listaccounts()
{
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "listaccounts", "params": [] }';
  var success = function (res)
  {
    var info = JSON.parse(res);
    return info.result;
  }
  var failure = function (res)
  {
    console.log("failure");
  }
  return send(params,success,failure);
}
