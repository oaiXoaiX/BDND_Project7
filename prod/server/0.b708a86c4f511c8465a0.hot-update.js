exports.id=0,exports.modules={"./src/server/server.js":function(e,s,r){"use strict";r.r(s);var t=r("./build/contracts/FlightSuretyApp.json"),o=r("./src/server/config.json"),n=r("web3"),c=r.n(n),a=r("express"),i=r.n(a),l=o.localhost,u=new c.a(new c.a.providers.WebsocketProvider(l.url.replace("http","ws")));u.eth.defaultAccount=u.eth.accounts[0];var d=new u.eth.Contract(t.abi,l.appAddress),f=[];u.eth.getAccounts(function(e,s){for(var r=function(e){d.methods.registerOracle().send({from:s[e],value:u.utils.toWei("1","ether"),gas:6721975},function(r,t){r?console.log(r):d.methods.getMyIndexes().call({from:s[e]},function(r,t){if(r)console.log(r);else{var o={address:s[e],index:t};f.push(o),console.log("Oracle registered: "+JSON.stringify(o))}})})},t=0;t<20;t++)r(t)});var p=i()();p.get("/api",function(e,s){s.send({message:"An API for use with your Dapp!"})}),s.default=p}};