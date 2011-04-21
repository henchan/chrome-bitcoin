function send(params,success,failure)
{
  var req = new XMLHttpRequest();
  var server = localStorage["server"];
  var user = localStorage["user"];
  var pass = localStorage["pass"];
  var url = "http://" + user + ":" + pass + "@" + server;
  req.open("POST", url, true);
  req.onreadystatechange = function (aEvt) {
    var result = []
    if (req.readyState == 4) {  
      if(req.status == 200)
      {
	success(req.responseText);
      }
      else
      {
	failure(req.status);
      }
    }
    console.log(result);
    return result;
  };
  req.setRequestHeader("Content-type", "text/plain");
  var stuff = req.send(params);
  console.log(stuff);
}
