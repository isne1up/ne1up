import{g as l}from"./index-CyLP52pK.js";function c(r,e){for(var a=0;a<e.length;a++){const t=e[a];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in r)){const o=Object.getOwnPropertyDescriptor(t,n);o&&Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s,u;function f(){if(u)return s;u=1,s=r,r.displayName="squirrel",r.aliases=[];function r(e){e.languages.squirrel=e.languages.extend("clike",{comment:[e.languages.clike.comment[0],{pattern:/(^|[^\\:])(?:\/\/|#).*/,lookbehind:!0,greedy:!0}],string:{pattern:/(^|[^\\"'@])(?:@"(?:[^"]|"")*"(?!")|"(?:[^\\\r\n"]|\\.)*")/,lookbehind:!0,greedy:!0},"class-name":{pattern:/(\b(?:class|enum|extends|instanceof)\s+)\w+(?:\.\w+)*/,lookbehind:!0,inside:{punctuation:/\./}},keyword:/\b(?:__FILE__|__LINE__|base|break|case|catch|class|clone|const|constructor|continue|default|delete|else|enum|extends|for|foreach|function|if|in|instanceof|local|null|resume|return|static|switch|this|throw|try|typeof|while|yield)\b/,number:/\b(?:0x[0-9a-fA-F]+|\d+(?:\.(?:\d+|[eE][+-]?\d+))?)\b/,operator:/\+\+|--|<=>|<[-<]|>>>?|&&?|\|\|?|[-+*/%!=<>]=?|[~^]|::?/,punctuation:/[(){}\[\],;.]/}),e.languages.insertBefore("squirrel","string",{char:{pattern:/(^|[^\\"'])'(?:[^\\']|\\(?:[xuU][0-9a-fA-F]{0,8}|[\s\S]))'/,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("squirrel","operator",{"attribute-punctuation":{pattern:/<\/|\/>/,alias:"important"},lambda:{pattern:/@(?=\()/,alias:"operator"}})}return s}var i=f();const d=l(i),g=c({__proto__:null,default:d},[i]);export{g as s};
//# sourceMappingURL=squirrel-BseVwWyh.js.map
