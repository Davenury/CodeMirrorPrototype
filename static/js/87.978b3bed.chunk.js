(this.webpackJsonpcode_mirror_example=this.webpackJsonpcode_mirror_example||[]).push([[87],{512:function(e,t,n){!function(e){"use strict";e.defineMode("q",(function(e){var t,n=e.indentUnit,r=i(["abs","acos","aj","aj0","all","and","any","asc","asin","asof","atan","attr","avg","avgs","bin","by","ceiling","cols","cor","cos","count","cov","cross","csv","cut","delete","deltas","desc","dev","differ","distinct","div","do","each","ej","enlist","eval","except","exec","exit","exp","fby","fills","first","fkeys","flip","floor","from","get","getenv","group","gtime","hclose","hcount","hdel","hopen","hsym","iasc","idesc","if","ij","in","insert","inter","inv","key","keys","last","like","list","lj","load","log","lower","lsq","ltime","ltrim","mavg","max","maxs","mcount","md5","mdev","med","meta","min","mins","mmax","mmin","mmu","mod","msum","neg","next","not","null","or","over","parse","peach","pj","plist","prd","prds","prev","prior","rand","rank","ratios","raze","read0","read1","reciprocal","reverse","rload","rotate","rsave","rtrim","save","scan","select","set","setenv","show","signum","sin","sqrt","ss","ssr","string","sublist","sum","sums","sv","system","tables","tan","til","trim","txf","type","uj","ungroup","union","update","upper","upsert","value","var","view","views","vs","wavg","where","where","while","within","wj","wj1","wsum","xasc","xbar","xcol","xcols","xdesc","xexp","xgroup","xkey","xlog","xprev","xrank"]),o=/[|/&^!+:\\\-*%$=~#;@><,?_\'\"\[\(\]\)\s{}]/;function i(e){return new RegExp("^("+e.join("|")+")$")}function s(e,n){var i=e.sol(),a=e.next();if(t=null,i){if("/"==a)return(n.tokenize=c)(e,n);if("\\"==a)return e.eol()||/\s/.test(e.peek())?(e.skipToEnd(),/^\\\s*$/.test(e.current())?(n.tokenize=l)(e):n.tokenize=s,"comment"):(n.tokenize=s,"builtin")}if(/\s/.test(a))return"/"==e.peek()?(e.skipToEnd(),"comment"):"whitespace";if('"'==a)return(n.tokenize=u)(e,n);if("`"==a)return e.eatWhile(/[A-Za-z\d_:\/.]/),"symbol";if("."==a&&/\d/.test(e.peek())||/\d/.test(a)){var d=null;return e.backUp(1),e.match(/^\d{4}\.\d{2}(m|\.\d{2}([DT](\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)?)?)/)||e.match(/^\d+D(\d{2}(:\d{2}(:\d{2}(\.\d{1,9})?)?)?)/)||e.match(/^\d{2}:\d{2}(:\d{2}(\.\d{1,9})?)?/)||e.match(/^\d+[ptuv]{1}/)?d="temporal":(e.match(/^0[NwW]{1}/)||e.match(/^0x[\da-fA-F]*/)||e.match(/^[01]+[b]{1}/)||e.match(/^\d+[chijn]{1}/)||e.match(/-?\d*(\.\d*)?(e[+\-]?\d+)?(e|f)?/))&&(d="number"),!d||(a=e.peek())&&!o.test(a)?(e.next(),"error"):d}return/[A-Za-z]|\./.test(a)?(e.eatWhile(/[A-Za-z._\d]/),r.test(e.current())?"keyword":"variable"):/[|/&^!+:\\\-*%$=~#;@><\.,?_\']/.test(a)||/[{}\(\[\]\)]/.test(a)?null:"error"}function c(e,t){return e.skipToEnd(),/\/\s*$/.test(e.current())?(t.tokenize=a)(e,t):t.tokenize=s,"comment"}function a(e,t){var n=e.sol()&&"\\"==e.peek();return e.skipToEnd(),n&&/^\\\s*$/.test(e.current())&&(t.tokenize=s),"comment"}function l(e){return e.skipToEnd(),"comment"}function u(e,t){for(var n,r=!1,o=!1;n=e.next();){if('"'==n&&!r){o=!0;break}r=!r&&"\\"==n}return o&&(t.tokenize=s),"string"}function d(e,t,n){e.context={prev:e.context,indent:e.indent,col:n,type:t}}function m(e){e.indent=e.context.indent,e.context=e.context.prev}return{startState:function(){return{tokenize:s,context:null,indent:0,col:0}},token:function(e,n){e.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=e.indentation());var r=n.tokenize(e,n);if("comment"!=r&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==t)d(n,")",e.column());else if("["==t)d(n,"]",e.column());else if("{"==t)d(n,"}",e.column());else if(/[\]\}\)]/.test(t)){for(;n.context&&"pattern"==n.context.type;)m(n);n.context&&t==n.context.type&&m(n)}else"."==t&&n.context&&"pattern"==n.context.type?m(n):/atom|string|variable/.test(r)&&n.context&&(/[\}\]]/.test(n.context.type)?d(n,"pattern",e.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=e.column()));return r},indent:function(e,t){var r=t&&t.charAt(0),o=e.context;if(/[\]\}]/.test(r))for(;o&&"pattern"==o.type;)o=o.prev;var i=o&&r==o.type;return o?"pattern"==o.type?o.col:o.align?o.col+(i?0:1):o.indent+(i?0:n):0}}})),e.defineMIME("text/x-q","q")}(n(31))}}]);
//# sourceMappingURL=87.978b3bed.chunk.js.map