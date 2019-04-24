exports.id=0,exports.modules={"./src/server/server.js":function(e,s,o){"use strict";o.r(s);var r=o("./build/contracts/FlightSuretyApp.json"),t=o("./src/server/config.json"),n=o("web3"),l=o.n(n),c=o("express"),a=o.n(c),i=t.localhost,u=new l.a(new l.a.providers.WebsocketProvider(i.url.replace("http","ws")));u.eth.defaultAccount=u.eth.accounts[0];for(var d=new u.eth.Contract(r.abi,i.appAddress),f=u.eth.accounts,g=[],h=[0,10,20,30,40,50],p=function(e){d.methods.registerOracle().send({from:f[e],value:u.utils.toWei("1","ether")},function(s,o){s?console.log(s):d.methods.getMyIndexes().call({from:f[e]},function(s,o){if(s)console.log(s);else{var r={address:f[e],index:o};g.push(r),console.log("Oracle registered: "+JSON.stringify(r))}})})},m=0;m<20;m++)p(m);d.events.OracleRequest({fromBlock:0},function(e,s){e?console.log(e):function(){for(var e=s.returnValues.index,o=s.returnValues.airline,r=s.returnValues.flight,t=s.returnValues.timestamp,n=h[Math.floor(Math.random()*h.length)],l=function(s){g[s].index.includes(e)&&d.methods.submitOracleResponse(e,o,r,t,n).send({from:g[s].address},function(e,o){e?console.log(e):console.log("From "+JSON.stringify(g[s])+"STATUS_CODE: "+n)})},c=0;c<g.length;c++)l(c)}()});var v=a()();v.get("/api",function(e,s){s.send({message:"An API for use with your Dapp!"})}),s.default=v}};