
// Saves options to localStorage.
function save_options() {
  var server = document.getElementById("server").value;
  localStorage["server"] = server;
  var user = document.getElementById("user").value;
  localStorage["user"] = user;
  var pass = document.getElementById("pass").value;
  localStorage["pass"] = pass;  
  
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = chrome.i18n.getMessage("OptionsSaved");
    
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores options to saved value from localStorage.
function restore_options() {
  var server = localStorage["server"];
  var user = localStorage["user"];
  var pass = localStorage["pass"];
  if (server === undefined)
      server = "127.0.0.1:8332";
  if (user === undefined)
      user = "";
  if (pass === undefined)
      pass = "";
  document.getElementById("server").value = server;
  document.getElementById("user").value = user;
  document.getElementById("pass").value = pass;
}
