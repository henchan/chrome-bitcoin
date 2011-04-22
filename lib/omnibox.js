function handleOmnibox() {
	
	var usageRequest = ['--help', '-h', '?', '-?', '--?'];
	
	handleInputChanged ();
	handleInputEntered ();
	handleInputCancelled ();


	function handleInputChanged() {
		chrome.omnibox.onInputChanged.addListener(
		  function(text, suggest) {
		    suggest([
		      {content: text + "omniboxSample", description: "omniboxSample"}
//		      {content: text + chrome.i18n.getMessage("omniboxMeioSample"), description: 'meiosis: ' + chrome.i18n.getMessage("omniboxMeioSample")}
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