(this.webpackJsonpcode_mirror_example=this.webpackJsonpcode_mirror_example||[]).push([[76],{501:function(e,n,t){!function(e){"use strict";e.defineMode("octave",(function(){function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n=new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"),t=new RegExp("^[\\(\\[\\{\\},:=;\\.]"),r=new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"),i=new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"),o=new RegExp("^((>>=)|(<<=))"),a=new RegExp("^[\\]\\)]"),c=new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*"),m=e(["error","eval","function","abs","acos","atan","asin","cos","cosh","exp","log","prod","sum","log10","max","min","sign","sin","sinh","sqrt","tan","reshape","break","zeros","default","margin","round","ones","rand","syn","ceil","floor","size","clear","zeros","eye","mean","std","cov","det","eig","inv","norm","rank","trace","expm","logm","sqrtm","linspace","plot","title","xlabel","ylabel","legend","text","grid","meshgrid","mesh","num2str","fft","ifft","arrayfun","cellfun","input","fliplr","flipud","ismember"]),s=e(["return","case","switch","else","elseif","end","endif","endfunction","if","otherwise","do","for","while","try","catch","classdef","properties","events","methods","global","persistent","endfor","endwhile","printf","sprintf","disp","until","continue","pkg"]);function u(e,n){return e.sol()||"'"!==e.peek()?(n.tokenize=l,l(e,n)):(e.next(),n.tokenize=l,"operator")}function f(e,n){return e.match(/^.*%}/)?(n.tokenize=l,"comment"):(e.skipToEnd(),"comment")}function l(p,d){if(p.eatSpace())return null;if(p.match("%{"))return d.tokenize=f,p.skipToEnd(),"comment";if(p.match(/^[%#]/))return p.skipToEnd(),"comment";if(p.match(/^[0-9\.+-]/,!1)){if(p.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/))return p.tokenize=l,"number";if(p.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/))return"number";if(p.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/))return"number"}if(p.match(e(["nan","NaN","inf","Inf"])))return"number";var h=p.match(/^"(?:[^"]|"")*("|$)/)||p.match(/^'(?:[^']|'')*('|$)/);return h?h[1]?"string":"string error":p.match(s)?"keyword":p.match(m)?"builtin":p.match(c)?"variable":p.match(n)||p.match(r)?"operator":p.match(t)||p.match(i)||p.match(o)?null:p.match(a)?(d.tokenize=u,null):(p.next(),"error")}return{startState:function(){return{tokenize:l}},token:function(e,n){var t=n.tokenize(e,n);return"number"!==t&&"variable"!==t||(n.tokenize=u),t},lineComment:"%",fold:"indent"}})),e.defineMIME("text/x-octave","octave")}(t(31))}}]);
//# sourceMappingURL=76.cfb7979e.chunk.js.map