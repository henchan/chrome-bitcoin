chrome-bitcoin
======================
chrome-bitcoin is an open source project that provides access to Bitcoin services using a Google Chrome extension
Installation
----------------
The extension will be available from the [Google Chrome Extensions webstore (chrome-bitcoin)](https://chrome.google.com/webstore "chrome-bitcoin") 

Follow installation guidance given there. 

Configure the extension (see Options below)

User Interfaces
----------------------
### Popup
Click the chrome-bitcoin logo for :
#### Account Balance
#### Account Details
### Options
Right Click the chrome-bitcoin logo to configure the extension to connect to a Bitcoin service. 
You will need to know details of the service (ip:port, user and password). 

If connecting to the standard Bitcoin desktop client it must have been started in server mode ` bitcoin -server -RPCALLOWIP=127.0.0.1 -RPCPORT=8332 & '

Also, a file called bitcoin.conf should exist in the top-level directory of the standard Bitcoin desktop client
### Omnibox
<blockquote><p>In the Chrome Omnibox type <btc --help> for guidance on using the omnibox interface.</p></blockquote>
### Context Sensitive
#### Bitcoin Address
##### Payment
<blockquote><p>Highlight a section of any web page, right click to Send Bitcoins. 
If a valid address was highlighted, complete the form to send some Bitcoins to it.</p></blockquote>
