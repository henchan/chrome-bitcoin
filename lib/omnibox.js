function handleOmnibox() {
	
	var usageRequest = ['--help', '-h', '?', '-?', '--?'];
	
	handleInputChanged ();
	handleInputEntered ();
	handleInputCancelled ();

	function handleInputChanged() {
		chrome.omnibox.onInputChanged.addListener(
		  function(text, suggest) {
		    suggest([
		      {content: text + chrome.i18n.getMessage("omniboxMeioSample"), description:  chrome.i18n.getMessage("omniboxMeioSample")}
		    ]);
		  }
		);
	}
	
	function handleInputEntered () {
// Handler for input from Chrome's omnibox. Default keyword is 'BTC' (manifest.json)
// Type "BTC --help" for usage instructions
		chrome.omnibox.onInputEntered.addListener (function(input) {
			if (input) {
				for (i=0;i<usageRequest.length;i++) {
					if (input == usageRequest[i]) { 
						alert(chrome.i18n.getMessage("omniboxUsage")); return;
					} 
				}
				
				if (input == "accounts") {
					create_tab('accounting.html');
					listAccounts(displayAccounts);
				}
			}
			else {
				meomeio.log(WARN,'BTC keyword in omnibox expects subsequent parameter(s)');
			}
		});
	}
	
	function handleInputCancelled (){
		// TODO remove if not required
	}

}