function displayAccounts(data)
{
  for(var key in data) {
    var li = document.createElement('li');
    var text = document.createTextNode(key + ":" + data[key]);
    li.appendChild(text);
    document.getElementById("output").appendChild(li);
  } 
}
