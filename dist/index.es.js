import e,{useState as o,useEffect as t}from"react";!function(e,o){void 0===o&&(o={});var t=o.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===t&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('.connect-button{background:#111;border:none;border-radius:10px;color:#fff;cursor:pointer;height:50px;outline:none;position:relative;width:220px;z-index:0}.connect-button:before{animation:glowing 20s linear infinite;background:linear-gradient(45deg,red,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,red);background-size:400%;border-radius:10px;content:"";filter:blur(5px);height:calc(100% + 4px);left:-2px;opacity:0;position:absolute;top:-2px;transition:opacity .3s ease-in-out;width:calc(100% + 4px);z-index:-1}.connect-button:active{color:#000}.connect-button:active:after{background:transparent}.connect-button:hover:before{opacity:1}.connect-button:after{background:#111;border-radius:10px;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}@keyframes glowing{0%{background-position:0 0}50%{background-position:400% 0}to{background-position:0 0}}');const n=({isEVM:n})=>{const[a,c]=o(""),[i,s]=o("Connect Wallet");let l;if(0==n){const e=async()=>{try{const{solana:e}=window;if(e&&e.isPhantom){console.log("Phantom Wallet Exist");const o=await e.connect({onlyIfTrusted:!0});console.log("Connected with Public Key:",o.publicKey.toString()),c(o.publicKey.toString())}else console.log("Download Phantom"),s("Download Phantom Wallet")}catch(e){console.log(e)}},o=async()=>{try{const{solana:e}=window;if(e&&e.isPhantom){console.log("Phantom Wallet Exist");const o=await e.connect();console.log("Connected with Public Key:",o.publicKey.toString()),c(o.publicKey.toString()),s("Connected To: "+a)}else console.log("Download Phantom"),s("Download Phantom Wallet")}catch(e){console.log(e)}};t((()=>{const o=async()=>{await e()};return window.addEventListener("load",o),()=>window.removeEventListener("load",o)}),[]),l=o}else if(1==n){const e=async()=>{const{ethereum:e}=window;if(e){s("Connecting...");const o=await e.request({method:"eth_requestAccounts"});if(0!==o.length){const e=o[0];s("Connected To: "+e),console.log("Connected To: ",e)}else console.log("Please authorize an account")}else console.log("Make sure you have MetaMask"),s("Download MetaMask")},o=async()=>{const{ethereum:e}=window;if(!e)return console.log("Make sure you have MetaMask"),void s("Download MetaMask");console.log("We have the ethereumn object",e);const o=await e.request({method:"eth_accounts"});if(0!==o.length){const e=o[0];console.log("Found an authorized account: ",e)}else console.log("No authorized accoutn found");const t=await e.request({method:"eth_chainId"});console.log("Chain ID: ",t),e.on("chainChanged",handleChainChanged)};t((()=>{const e=async()=>{await o()};return window.addEventListener("load",e),()=>window.removeEventListener("load",e)}),[]),l=e}return e.createElement("button",{className:"connect-button",onClick:l},i)};export{n as Button};
