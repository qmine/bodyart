(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{152:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return k}));var r=n(14),a=n(1),i=n.n(a),c=n(4),o=n(31),s=n(51),u=n(12),l=n(353),f=n(82),p=new o.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),b=new o.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),d=function(){var e=Object(c.a)(i.a.mark((function e(t,n,r){var a,o,s,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:"recent",a=l.length>4&&void 0!==l[4]&&l[4],o=!1,s={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(c.a)(i.a.mark((function e(u,l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(o||!a){e.next=7;break}return Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,s=n&&n.value[0],o||(s?s.err?(console.log("REST error for",t,s),o=!0,l(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),o=!0,u(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,y(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return s=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),o=!0,console.log("Returning status",s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:o.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:o.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o.d.TransactionInstruction({keys:i,programId:f.b,data:e.from([])})},m=function(){var e=Object(c.a)(i.a.mark((function e(t,n,r){var a,c,s,u,l,f,b;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new o.b(r,t,{preflightCommitment:"recent"}),e.next=3,o.a.fetchIdl(p,a);case 3:return c=e.sent,s=new o.a(c,p,a),e.next=7,s.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),f=u.itemsRedeemed.toNumber(),b=l-f,e.abrupt("return",{id:n,program:s,state:{itemsAvailable:l,itemsRedeemed:f,itemsRemaining:b,isSoldOut:0===b,isActive:u.data.goLiveDate&&u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:f<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var a,c,p,d,m,k,y,j,w,O,S,T,P,E,M,K,R,I;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.d.Keypair.generate(),e.next=3,Object(f.c)(a.publicKey,n);case 3:if(c=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(f.c)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return p=e.t0,d=t.id,m=[],k=[a],y=[],e.t1=o.d.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=s.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 22:if(e.t5=e.sent,e.t6=s.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=s.c.createInitMintInstruction(s.b,a.publicKey,0,n,n),e.t10=g(c,n,n,a.publicKey),e.t11=s.c.createMintToInstruction(s.b,a.publicKey,c,n,[],1),j=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=m,e.next=34,Object(f.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return m.push({pubkey:f.a,isWritable:!1,isSigner:!1}),e.t15=m,e.next=42,Object(f.d)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return w=new o.d.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(f.c)(w,n);case 49:if(O=e.sent[0],m.push({pubkey:O,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return S=o.d.Keypair.generate(),m.push({pubkey:w,isWritable:!0,isSigner:!1}),m.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),k.push(S),e.next=58,t.program.provider.connection.getAccountInfo(O);case 58:e.sent&&(j.push(s.c.createApproveInstruction(s.b,O,S.publicKey,n,[],1)),y.push(s.c.createRevokeInstruction(s.b,O,n,[])));case 60:return t.state.tokenMint&&(T=o.d.Keypair.generate(),k.push(T),m.push({pubkey:p,isWritable:!0,isSigner:!1}),m.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),j.push(s.c.createApproveInstruction(s.b,p,T.publicKey,n,[],t.state.price.toNumber())),y.push(s.c.createRevokeInstruction(s.b,p,n,[]))),e.next=63,x(a.publicKey);case 63:return P=e.sent,e.next=66,h(a.publicKey);case 66:return E=e.sent,e.next=69,v(d);case 69:return M=e.sent,K=Object(r.a)(M,2),R=K[0],I=K[1],e.t18=j,e.next=76,t.program.instruction.mintNft(I,{accounts:{candyMachine:d,candyMachineCreator:R,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:E,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:b,tokenProgram:s.b,systemProgram:u.SystemProgram.programId,rent:o.d.SYSVAR_RENT_PUBKEY,clock:o.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:o.d.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:o.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:m.length>0?m:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[j,y],[k,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(6).Buffer)},353:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(17),i=n(1),c=n.n(i),o=n(4),s=n(12),u=n(27);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(o.a)(c.a.mark((function e(t,n,i,o){var l,f,p,d,g,m,h,x,v,k,y,j,w,O,S=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,f=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",p=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},d=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},g=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.WalletNotConnectedError;case 7:if(m=[],g){e.next=12;break}return e.next=11,t.getRecentBlockhash(f);case 11:g=e.sent;case 12:h=function(e){var t=i[e],r=o[e];if(0===t.length)return"continue";var c=new s.Transaction;t.forEach((function(e){return c.add(e)})),c.recentBlockhash=g.blockhash,c.setSigners.apply(c,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&c.partialSign.apply(c,Object(a.a)(r)),m.push(c)},x=0;case 14:if(!(x<i.length)){e.next=21;break}if("continue"!==h(x)){e.next=18;break}return e.abrupt("continue",18);case 18:x++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(m);case 23:v=e.sent,k=[],y={breakEarly:!1,i:0},console.log("Signed txns length",v.length,"vs handed in length",i.length),j=c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=b({connection:t,signedTransaction:v[n]})).then((function(e){var t=e.txid;e.slot;p(t,n)})).catch((function(e){d(v[n],n),l===r.StopOnFailure&&(y.breakEarly=!0,y.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!y.breakEarly){e.next=19;break}return console.log("Died on ",y.i),e.t1=y.i,e.next=16,Promise.all(k);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:k.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),w=0;case 29:if(!(w<v.length)){e.next=37;break}return e.delegateYield(j(w),"t0",31);case 31:if("object"!==typeof(O=e.t0)){e.next=34;break}return e.abrupt("return",O.v);case 34:w++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(k);case 40:return e.t1=v.length,e.next=43,Promise.all(k);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),f=function(){return(new Date).getTime()/1e3},p=15e3;function b(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(c.a.mark((function e(t){var n,r,a,i,s,u,l,b,d,m,x,k,y;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,i=void 0===a?p:a,s=n.serialize(),u=f(),l=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return b=e.sent,console.log("Started awaiting confirmation for",b),d=!1,Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d||!(f()-u<i)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,v(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(b,i,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return x=null,e.prev=28,e.next=31,g(r,n,"single");case 31:x=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!x||!x.err){e.next=47;break}if(!x.logs){e.next=46;break}k=x.logs.length-1;case 39:if(!(k>=0)){e.next=46;break}if(!(y=x.logs[k]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+y.slice("Program log: ".length));case 43:--k,e.next=39;break;case 46:throw new Error(JSON.stringify(x.err));case 47:return e.prev=47,d=!0,e.finish(47);case 50:return console.log("Latency",b,f()-u),e.abrupt("return",{txid:b,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(c.a.mark((function e(t,n,r){var a,i,o,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),o=i.toString("base64"),s=[o,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(c.a.mark((function e(t,n,r){var a,i,s,u,l,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>3&&void 0!==f[3]?f[3]:"recent",i=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(o.a)(c.a.mark((function e(f,p){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),p({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),p(u)):(console.log("Resolved via websocket",e),f(u))}),a)}catch(b){s=!0,console.error("WS error in setup",t,b)}case 2:if(s||!i){e.next=8;break}return Object(o.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,p(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return new Promise((function(t){return setTimeout(t,e)}))}},379:function(e,t,n){},380:function(e,t,n){},381:function(e,t){},383:function(e,t){},399:function(e,t){},400:function(e,t){},495:function(e,t){},497:function(e,t){},511:function(e,t){},515:function(e,t){},517:function(e,t){},527:function(e,t){},529:function(e,t){},556:function(e,t){},558:function(e,t){},563:function(e,t){},565:function(e,t){},571:function(e,t){},573:function(e,t){},585:function(e,t){},588:function(e,t){},600:function(e,t){},601:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o=n(2),s=n.n(o),u=n(37),l=n.n(u),f=(n(379),n(380),n(13)),p=n(1),b=n.n(p),d=n(4),g=n(14),m=n(74),h=n(75),x=n(638),v=n(637),k=n(12),y=n(61),j=n(193),w=n(111),O=n(629),S=n(634),T=n(351),P=n(82),E=n(41),M=Object(h.a)(O.a)(r||(r=Object(m.a)(["\n    color: #fff;\n    background-color: #2e7d32;\n    &:hover {\n        background-color: #1b5e20;\n    }\n"]))),K=h.a.span(a||(a=Object(m.a)([""]))),R=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=Object(w.c)(),i=a.requestGatewayToken,c=a.gatewayStatus,s=Object(o.useState)(!1),u=Object(g.a)(s,2),l=u[0],f=u[1],p=Object(o.useState)(!1),m=Object(g.a)(p,2),h=m[0],x=m[1],v=Object(o.useState)(!1),k=Object(g.a)(v,2),y=k[0],j=k[1];return Object(o.useEffect)((function(){x(!1),c===w.b.COLLECTING_USER_INFORMATION&&l?x(!0):c===w.b.ACTIVE&&l&&(console.log("Verified human, now minting..."),t(),f(!1))}),[c,l,f,t]),Object(E.jsx)(M,{id:"MintButtonID",disabled:(null===n||void 0===n?void 0:n.state.isSoldOut)||r||!y||h,onClick:Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y||!(null===n||void 0===n?void 0:n.state.gatekeeper)||c===w.b.ACTIVE){e.next=7;break}return console.log("Requesting gateway token"),f(!0),e.next=5,i();case 5:e.next=10;break;case 7:return console.log("Minting..."),e.next=10,t();case 10:case"end":return e.stop()}}),e)}))),variant:"contained",children:n?(null===n||void 0===n?void 0:n.state.isSoldOut)?"SOLD OUT":y?h?"VERIFYING...":r?Object(E.jsx)(S.a,{}):"MINT":(null===n||void 0===n?void 0:n.state.goLiveDate)?Object(E.jsx)(T.a,{date:Object(P.f)(null===n||void 0===n?void 0:n.state.goLiveDate),onMount:function(e){return e.completed&&j(!0)},onComplete:function(){j(!0)},renderer:I}):"UNAVAILABLE":"CONNECTING..."})},I=function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;return Object(E.jsxs)(K,{children:[n+24*(t||0)," hours, ",r," minutes, ",a," seconds"]})},B=n(152),A=Object(h.a)(j.a)(i||(i=Object(m.a)([""]))),N=h.a.div(c||(c=Object(m.a)([""]))),C=function(e){var t,n,r=Object(o.useState)(!1),a=Object(g.a)(r,2),i=a[0],c=a[1],s=Object(o.useState)({open:!1,message:"",severity:void 0}),u=Object(g.a)(s,2),l=u[0],p=u[1],m=Object(y.c)(),h=Object(o.useState)(),j=Object(g.a)(h,2),O=j[0],S=j[1],T=e.rpcHost,P=function(){Object(d.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(m){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(B.c)(m,e.candyMachineId,e.connection);case 4:n=t.sent,S(n);case 6:case"end":return t.stop()}}),t)})))()},M=function(){var t=Object(d.a)(b.a.mark((function t(){var n,r,a,i,o;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,c(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(m&&(null===O||void 0===O?void 0:O.program)&&m.publicKey)){t.next=13;break}return t.next=6,Object(B.d)(O,m.publicKey);case 6:if(a=t.sent[0],i={err:!0},!a){t.next=12;break}return t.next=11,Object(B.b)(a,e.txTimeout,e.connection,"singleGossip",!0);case 11:i=t.sent;case 12:(null===(r=i)||void 0===r?void 0:r.err)?p({open:!0,message:"Mint failed! Please try again!",severity:"error"}):p({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),o=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?o="SOLD OUT!":312===t.t0.code&&(o="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?o="SOLD OUT!":t.t0.message.indexOf("0x135")&&(o="Insufficient funds to mint. Please fund your wallet.")):o="Transaction Timeout! Please try again.",p({open:!0,message:o,severity:"error"});case 20:return t.prev=20,c(!1),P(),t.finish(20);case 25:case"end":return t.stop()}}),t,null,[[0,15,20,25]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})))()}),[m,e.connection]),Object(o.useEffect)(P,[m,e.candyMachineId,e.connection]),Object(E.jsxs)("main",{children:[Object(E.jsx)(N,{children:m?(null===O||void 0===O?void 0:O.state.gatekeeper)&&m.publicKey&&m.signTransaction?Object(E.jsx)(w.a,{wallet:{publicKey:m.publicKey||new k.PublicKey(B.a),signTransaction:m.signTransaction},gatekeeperNetwork:null===O||void 0===O||null===(t=O.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:T,options:{autoShowModal:!1},children:Object(E.jsx)(R,{candyMachine:O,isMinting:i,onMint:M})}):Object(E.jsx)(R,{candyMachine:O,isMinting:i,onMint:M}):Object(E.jsx)(A,{id:"ConnectButtonID",children:"Connect Wallet"})}),Object(E.jsx)(x.a,{open:l.open,autoHideDuration:6e3,onClose:function(){return p(Object(f.a)(Object(f.a)({},l),{},{open:!1}))},children:Object(E.jsx)(v.a,{onClose:function(){return p(Object(f.a)(Object(f.a)({},l),{},{open:!1}))},severity:l.severity,children:l.message})})]})},L=n(31),W=n(136),D=n(366),_=n(635),U=new L.d.PublicKey("4Ufi2bLJWegLFyRoZnFk72eQMWx4vZdTZTNoYxmHFx7q"),F="devnet",Y="https://api.devnet.solana.com",V=new L.d.Connection(Y),q=Object(D.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),G=function(){var e=Object(o.useMemo)((function(){return Object(k.clusterApiUrl)(F)}),[]),t=Object(o.useMemo)((function(){return[Object(W.a)(),Object(W.b)(),Object(W.c)(),Object(W.e)({network:F}),Object(W.d)({network:F})]}),[]);return Object(E.jsx)(_.a,{theme:q,children:Object(E.jsx)(y.a,{endpoint:e,children:Object(E.jsx)(y.b,{wallets:t,autoConnect:!0,children:Object(E.jsx)(j.b,{children:Object(E.jsx)(C,{candyMachineId:U,connection:V,txTimeout:3e4,rpcHost:Y})})})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,639)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};l.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(G,{})}),document.getElementById("root")),z()},82:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return b}));var r=n(1),a=n.n(r),i=n(4),c=n(31),o=n(51),s=(n(12),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new c.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new c.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),f=function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),o.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(6).Buffer)}},[[601,1,2]]]);
//# sourceMappingURL=main.5b7648e7.chunk.js.map