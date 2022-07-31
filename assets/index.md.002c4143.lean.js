import{d as H,r as V,c as $,o as x,a as R,b as O,w as X,v as B,F as k,e as K,u as U,t as N,f as q,g as Y}from"./app.c1b778d4.js";function S(n){if(n===null||n===!0||n===!1)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function D(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function _(n){D(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new Date(n.getTime()):typeof n=="number"||e==="[object Number]"?new Date(n):((typeof n=="string"||e==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function L(n,e){D(2,arguments);var s=_(n),a=S(e);return isNaN(a)?new Date(NaN):(a&&s.setDate(s.getDate()+a),s)}function Z(n,e){D(2,arguments);var s=_(n),a=S(e);if(isNaN(a))return new Date(NaN);if(!a)return s;var t=s.getDate(),o=new Date(s.getTime());o.setMonth(s.getMonth()+a+1,0);var l=o.getDate();return t>=l?o:(s.setFullYear(o.getFullYear(),o.getMonth(),t),s)}var J={};function Q(){return J}function nn(n,e){D(2,arguments);var s=S(e),a=s*7;return L(n,a)}function en(n,e){D(2,arguments);var s=S(e);return Z(n,s*12)}function E(n,e){for(var s=n<0?"-":"",a=Math.abs(n).toString();a.length<e;)a="0"+a;return s+a}function G(n,e){var s,a;D(1,arguments);var t=_(n);if(isNaN(t.getTime()))throw new RangeError("Invalid time value");var o=String((s=e==null?void 0:e.format)!==null&&s!==void 0?s:"extended"),l=String((a=e==null?void 0:e.representation)!==null&&a!==void 0?a:"complete");if(o!=="extended"&&o!=="basic")throw new RangeError("format must be 'extended' or 'basic'");if(l!=="date"&&l!=="time"&&l!=="complete")throw new RangeError("representation must be 'date', 'time', or 'complete'");var r="",i="",u=o==="extended"?"-":"",w=o==="extended"?":":"";if(l!=="time"){var p=E(t.getDate(),2),f=E(t.getMonth()+1,2),c=E(t.getFullYear(),4);r="".concat(c).concat(u).concat(f).concat(u).concat(p)}if(l!=="date"){var d=t.getTimezoneOffset();if(d!==0){var h=Math.abs(d),y=E(Math.floor(h/60),2),b=E(h%60,2),C=d<0?"+":"-";i="".concat(C).concat(y,":").concat(b)}else i="Z";var m=E(t.getHours(),2),A=E(t.getMinutes(),2),I=E(t.getSeconds(),2),z=r===""?"":"T",g=[m,A,I].join(w);r="".concat(r).concat(z).concat(g).concat(i)}return r}function sn(n){D(1,arguments);var e=_(n),s=e.getFullYear(),a=e.getMonth(),t=new Date(0);return t.setFullYear(s,a+1,0),t.setHours(0,0,0,0),t.getDate()}function an(n,e){D(2,arguments);var s=_(n),a=_(e);return s.getTime()<a.getTime()}function tn(n){return D(1,arguments),_(n).getTime()<Date.now()}function ln(n,e){D(2,arguments);var s=_(n),a=S(e),t=s.getFullYear(),o=s.getDate(),l=new Date(0);l.setFullYear(t,a,15),l.setHours(0,0,0,0);var r=sn(l);return s.setMonth(a,Math.min(o,r)),s}function on(n,e){D(2,arguments);var s=_(n),a=S(e);return s.setDate(a),s}function rn(n,e,s){var a,t,o,l,r,i,u,w;D(2,arguments);var p=Q(),f=S((a=(t=(o=(l=s==null?void 0:s.weekStartsOn)!==null&&l!==void 0?l:s==null||(r=s.locale)===null||r===void 0||(i=r.options)===null||i===void 0?void 0:i.weekStartsOn)!==null&&o!==void 0?o:p.weekStartsOn)!==null&&t!==void 0?t:(u=p.locale)===null||u===void 0||(w=u.options)===null||w===void 0?void 0:w.weekStartsOn)!==null&&a!==void 0?a:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=_(n),d=S(e),h=c.getDay(),y=d%7,b=(y+7)%7,C=7-f,m=d<0||d>6?d-(h+C)%7:(b+C)%7-(h+C)%7;return L(c,m)}const cn=[["sunday",0],["monday",1],["tuesday",2],["wednesday",3],["thursday",4],["friday",5],["saturday",6]],pn=[["january",1],["february",2],["march",3],["april",4],["may",5],["june",6],["july",7],["august",8],["september",9],["october",10],["november",11],["december",12]],dn=[["everyday","1D"],["daily","1D"],["weekly","1W"],["monthly","1M"],["yearly","1Y"]],yn=["every","each"],un=["next","coming","upcoming"],Dn=[["today",0],["tomorrow",1],["yesterday",-1]],fn="th|st|nd|rd",hn=[["first",1],["second",2],["third",3],["fourth",4],["fifth",5],["sixth",6],["seventh",7],["eigth",8],["nineth",9],["tenth",10],["one",1],["two",2],["three",3],["four",4],["five",5],["six",6],["seven",7],["eight",8],["nine",9],["ten",10],["eleven",11],["twelve",12],["thirteen",13],["fourteen",14],["fifteen",15],["sixteen",16],["seventeen",17],["eighteen",18],["nineteen",19],["twenty",20],["twentyone",21],["twentytwo",22],["twentythree",23],["twentyfour",24],["twentyfive",25],["twentysix",26],["twentyseven",27],["twentyeight",28],["twentynine",29],["thirty",30]],gn=[["seconds?","s"],["minutes?","m"],["hours?","h"],["days?","D"],["weeks?","W"],["months?","M"],["years?","Y"]],vn={DAY_OF_WEEK_WORDS:cn,MONTH_WORDS:pn,SCHEDULE_SINGLE_WORDS:dn,SCHEDULE_TRIGGER_WORDS:yn,DATE_NEXT_TRIGGER_WORDS:un,SINGLE_DAY_WORDS:Dn,ENUM_SUFFIX:fn,ENUM_WORDS:hn,UNIT_WORDS:gn},_n=[["sonntag",0],["montag",1],["dienstag",2],["mittwoch",3],["donnerstag",4],["freitag",5],["samstag",6]],mn=[["januar",1],["februar",2],["m\xE4rz",3],["april",4],["mai",5],["juni",6],["juli",7],["august",8],["september",9],["oktober",10],["november",11],["dezember",12]],Fn=[["t\xE4glich","1D"],["w\xF6chentlich","1W"],["monatlich","1M"],["j\xE4hrlich","1Y"]],En=["jede[rn]?","alle"],Sn=["n\xE4chste[rn]?","kommende[rn]?"],wn=[["heute",0],["morgen",1],["\xFCbermorgen",2],["gestern",-1]],An="ter?",Cn=[["erste[rn]?",1],["zweite[rn]?",2],["dritte[rn]?",3],["vierte[rn]?",4],["f\xFCnfte[rn]?",5],["sexte[rn]?",6],["siebte[rn]?",7],["achte[rn]?",8],["neunte[rn]?",9],["zehnte[rn]?",10],["eins",1],["zwei",2],["drei",3],["vier",4],["f\xFCnf",5],["sechs",6],["sieben",7],["acht",8],["neun",9],["zehn",10],["elf",11],["zw\xF6lf",12],["dreizehn",13],["vierzehn",14],["f\xFCnfzehn",15],["sechzehn",16],["siebzehn",17],["achtzehn",18],["neunzehn",19],["zwanzig",20],["einundzwanzig",21],["zweiundzwanzig",22],["dreinundzwanzig",23],["vierundzwanzig",24],["f\xFCnfundzwanzig",25],["sechsundzwanzig",26],["siebenundzwanzig",27],["achtundzwanzig",28],["neunundzwanzig",29],["dreissig",30],["drei\xDFig",30]],On=[["sekunden?","s"],["minuten?","m"],["stunden?","h"],["tag[e|en]?","D"],["wochen?","W"],["monat[e|en]?","M"],["jahr[e|en]?","Y"]],xn={DAY_OF_WEEK_WORDS:_n,MONTH_WORDS:mn,SCHEDULE_SINGLE_WORDS:Fn,SCHEDULE_TRIGGER_WORDS:En,DATE_NEXT_TRIGGER_WORDS:Sn,SINGLE_DAY_WORDS:wn,ENUM_SUFFIX:An,ENUM_WORDS:Cn,UNIT_WORDS:On},Rn={en:vn,de:xn},M=n=>function(e,s,a){return e.some(t=>{const o=typeof t=="string"?t:t[0],l=typeof t=="string"?t:t[1],r=s.match(n(o));if(r&&r[0]){let i=r.index||0,u=r[0];return r[0].startsWith(" ")&&(i++,u=u.slice(1)),a(i,u,l),!0}return!1})},bn=M(n=>new RegExp(`(?:^| )${n}(?=$| )`,"i")),Mn=M(n=>new RegExp(`(?:^| )${n} `,"i")),Wn=M(n=>new RegExp(`^${n} `,"i")),T=M(n=>new RegExp(`^${n}(?=$| )`,"i"));function Nn(n,e){let s=rn(n,e,{weekStartsOn:1});return an(s,n)&&(s=nn(s,1)),s}function P(n,e={locales:["en"]}){if(!n)return null;const s=e.locales.map(a=>Rn[a]);for(const a of s){const{DAY_OF_WEEK_WORDS:t,MONTH_WORDS:o,SCHEDULE_TRIGGER_WORDS:l,SCHEDULE_SINGLE_WORDS:r,ENUM_WORDS:i,UNIT_WORDS:u,ENUM_SUFFIX:w}=a;let p,f=0,c="",d,h,y=new Date;if(bn(r,n,(g,v,F)=>{f=g,c=v,p=`P${F}`})&&p)return{schedule:{repeatFrequency:p,startDate:G(y),byDay:d,byMonth:h},match:{index:f,length:c.length,text:c}};if(!Mn(l,n,(g,v)=>{f=g,c=v,n=n.slice(f+c.length)}))continue;let m=!1;const A=n.match(new RegExp(`^(\\d+)(${w}|.)? `,"i"));if(A&&A[0]&&(p=`P${A[1]}`,c=`${c}${A[0]}`,n=n.slice(A[0].length),m=!0),m||(m=Wn(i,n,(g,v,F)=>{p=`P${F}`,c=`${c}${v}`,n=n.slice(v.length)})),m||(p="P1"),!T(u,n,(g,v,F)=>{p=`${p}${F}`,c=`${c}${v}`})&&!T(t,n,(v,F,W)=>{p=`${p}W`,d=W,y=Nn(y,d),c=`${c}${F}`})&&!T(o,n,(F,W,j)=>{p=`${p}Y`,h=j,y=on(ln(y,h-1),1),tn(y)&&(y=en(y,1)),c=`${c}${W}`})||!p)continue;return{schedule:{repeatFrequency:p,startDate:G(y),byDay:d,byMonth:h},match:{index:f,length:c.length,text:c}}}return null}const Tn={class:"md:-mx-8 lg:-mx-12 p-6 lg:p-12 shadow-lg rounded-lg bg-gradient-to-br from-green-50 to-indigo-100 border-4 border-white dark:border-purple-800 dark:from-purple-900 dark:to-indigo-800 dark:shadow-purple-900 text-slate-800"},In={class:"relative mb-6"},zn={class:"border border-transparent absolute inset-0 pointer-events-none p-4 text-xl font-extrabold whitespace-pre text-slate-700"},$n={key:0,class:"text-pink-500"},kn={key:1},Un={class:"language-ts"},Gn=H({__name:"ParrotPlayground",setup(n){const e=V("I eat pizza every second friday, yummi"),s=$(()=>P(e.value)),a=$(()=>{const t=e.value,o=P(t),l=o&&o.match;if(!l)return[{value:t}];const r=[{isSchedule:!!o,value:l.text}];l.index>0&&r.unshift({value:t.slice(0,l.index)});const i=l.index+l.text.length;return t.length>i&&r.push({value:t.slice(i)}),r});return(t,o)=>(x(),R("div",Tn,[O("div",In,[X(O("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),autofocus:"",class:"border border-solid border-white shadow-md bg-slate-50 rounded-lg w-full p-4 text-xl focus:outline focus:outline-4 focus:outline-pink-400 focus:bg-white font-extrabold text-transparent caret-slate-800"},null,512),[[B,e.value]]),O("div",zn,[(x(!0),R(k,null,K(U(a),l=>(x(),R(k,null,[l.isSchedule?(x(),R("span",$n,N(l.value),1)):(x(),R("span",kn,N(l.value),1))],64))),256))])]),O("div",Un,[O("pre",null,[O("code",null,N(U(s)||"null"),1)])])]))}}),Pn=Y("",5),Yn=Y("",8),Hn=JSON.parse('{"title":"DateParrot","description":"","frontmatter":{},"headers":[{"level":2,"title":"Playground","slug":"playground"},{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Localization","slug":"localization"}],"relativePath":"index.md"}'),Ln={name:"index.md"},Vn=Object.assign(Ln,{setup(n){return(e,s)=>(x(),R("div",null,[Pn,q(Gn,{class:"my-8"}),Yn]))}});export{Hn as __pageData,Vn as default};
