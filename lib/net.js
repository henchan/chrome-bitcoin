function send(params)
{
  var req = new XMLHttpRequest();
  var server = localStorage["server"];
  var user = localStorage["user"];
  var pass = localStorage["pass"];
  var url = "http://" + user + ":" + pass + "@" + server;
  req.open("POST", url, true);
  var result = [];
  req.onreadystatechange = function (aEvt) {  
    if (req.readyState == 4) {  
      if(req.status == 200)
      {
	result.push(1);
	result.push(req.responseText);
      }
      else
      {
	result.push(0);
	result.push(req.status);
      }
    }  
  };
  req.setRequestHeader("Content-type", "text/plain");
  req.send(params);
  return result;
}
