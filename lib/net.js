function send(var params)
{
  var req = new XMLHttpRequest();
  var server = localStorage["server"];
  var user = localStorage["user"];
  var pass = localStorage["pass"];
  var url = "http://" + user + ":" + pass + "@" + server;
  req.open("POST", url, true);
  req.onreadystatechange = function (aEvt) {  
    if (req.readyState == 4) {  
      if(req.status == 200)  
	result(req.responseText);
      else  
	error(req.status);  
    }  
  };
  req.setRequestHeader("Content-type", "text/plain");
  req.send(params);
  return req;
}

function error(var text)
{
  document.getElementById("output").innerHTML = "Error fetching wallet data.";
}
