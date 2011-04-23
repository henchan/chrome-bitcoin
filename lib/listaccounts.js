
function listAccounts(callback)
{
  var params = '{"jsonrpc": "1.0", "id":"chrome", "method": "listaccounts", "params": [] }';
  this.result = null;
  self.success = function (res)
  {
    var info = JSON.parse(res);
    callback(info.result);
  }
  var failure = function (res)
  {
    console.log("failure");
  }
  send(params,self.success,failure);
}
