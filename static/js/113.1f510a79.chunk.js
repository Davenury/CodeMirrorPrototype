(this.webpackJsonpcode_mirror_example=this.webpackJsonpcode_mirror_example||[]).push([[113],{541:function(e,t,n){!function(e){"use strict";e.defineMode("vb",(function(t,n){var r="error";function i(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var a=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),o=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),c=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),s=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),u=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),d=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),l=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],m=["else","elseif","case","catch","finally"],h=["next","loop"],f=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],p=i(f),b=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],g=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],v=i(b),y=i(g),w='"',k=i(l),x=i(m),I=i(h),E=i(["end"]),L=i(["do"]),z=null;function C(e,t){t.currentIndent++}function R(e,t){t.currentIndent--}function _(e,t){if(e.eatSpace())return null;if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var n=!1;if((e.match(/^\d*\.\d+F?/i)||e.match(/^\d+\.\d*F?/)||e.match(/^\.\d+F?/))&&(n=!0),n)return e.eat(/J/i),"number";var i=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?i=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),i=!0):e.match(/^0(?![\dx])/i)&&(i=!0),i)return e.eat(/L/i),"number"}return e.match(w)?(t.tokenize=F(e.current()),t.tokenize(e,t)):e.match(u)||e.match(s)?null:e.match(c)||e.match(a)||e.match(p)?"operator":e.match(o)?null:e.match(L)?(C(e,t),t.doInCurrentLine=!0,"keyword"):e.match(k)?(t.doInCurrentLine?t.doInCurrentLine=!1:C(e,t),"keyword"):e.match(x)?"keyword":e.match(E)?(R(e,t),R(e,t),"keyword"):e.match(I)?(R(e,t),"keyword"):e.match(y)||e.match(v)?"keyword":e.match(d)?"variable":(e.next(),r)}function F(e){var t=1==e.length,i="string";return function(a,o){for(;!a.eol();){if(a.eatWhile(/[^'"]/),a.match(e))return o.tokenize=_,i;a.eat(/['"]/)}if(t){if(n.singleLineStringErrors)return r;o.tokenize=_}return i}}function J(e,t){var n=t.tokenize(e,t),i=e.current();if("."===i)return"variable"===(n=t.tokenize(e,t))?"variable":r;var a="[({".indexOf(i);return-1!==a&&C(e,t),"dedent"===z&&R(e,t)||-1!==(a="])}".indexOf(i))&&R(e,t)?r:n}return e.registerHelper("hintWords","vb",l.concat(m).concat(h).concat(f).concat(b).concat(g)),{electricChars:"dDpPtTfFeE ",startState:function(){return{tokenize:_,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=J(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(I)||r.match(E)||r.match(x)?t.indentUnit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*t.indentUnit},lineComment:"'"}})),e.defineMIME("text/x-vb","vb")}(n(31))}}]);
//# sourceMappingURL=113.1f510a79.chunk.js.map