(function(){var h={},mt={},c={id:"7e5b67cdb40188a301b15e216d15d822",dm:["zhichiwangluo.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:6075752,qiao:0,lxb:0,conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,s=!0,t=null,u=!1;mt.cookie={};mt.cookie.set=function(a,b,d){var g;d.I&&(g=new Date,g.setTime(g.getTime()+d.I));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(g?"; expires="+g.toGMTString():"")+(d.fb?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:t};mt.f={};mt.f.V=function(a){return document.getElementById(a)};
mt.f.K=function(a,b){var d=[],g=[];if(!a)return g;for(;a.parentNode!=t;){for(var f=0,l=0,m=a.parentNode.childNodes.length,e=0;e<m;e++){var n=a.parentNode.childNodes[e];if(n.nodeName===a.nodeName&&(f++,n===a&&(l=f),0<l&&1<f))break}if((m=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else m&&(m="#"+encodeURIComponent(a.id),m=0<d.length?m+">"+d.join(">"):m,g.push(m)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<f?"["+l+"]":""));a=a.parentNode}g.push(d.join(">"));return g};
mt.f.Za=function(a){return(a=mt.f.K(a,s))&&a.length?String(a[0]):""};mt.f.Ya=function(a){return mt.f.K(a,u)};mt.f.Wa=function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return t};mt.f.pa=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};
mt.f.Xa=function(a){var b=mt.f.pa(a),d={top:0,left:0};if(a)return b=b.documentElement,"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect()),{top:d.top+(window.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};
(mt.f.P=function(){function a(){if(!a.D){a.D=s;for(var b=0,d=g.length;b<d;b++)g[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var d=u,g=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,u);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!d)if(d=s,"complete"===document.readyState)a.D=s;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
f,u),window.addEventListener("load",a,u);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var g=u;try{g=window.frameElement==t}catch(m){}document.documentElement.doScroll&&g&&b()}})();return function(b){a.D?b():g.push(b)}}()).D=u;mt.event={};mt.event.c=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(b){d.call(a,b)}):a.addEventListener&&a.addEventListener(b,d,u)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=u};
(function(){var a=mt.event;mt.i={};mt.i.Da=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.Ba=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:r;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Fa=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.i.orientation=0;
(function(){function b(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.i.orientation=a}b();a.c(window,"orientationchange",b)})();return mt.i})();mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var b=d[a];if(b)return b;b=a.charCodeAt();return"\\u00"+Math.floor(b/16).toString(16)+(b%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===t)return"null";if(d instanceof Array){var f=["["],l=d.length,m,e,n;for(e=0;e<l;e++)switch(n=d[e],typeof n){case "undefined":case "function":case "unknown":break;default:m&&f.push(","),f.push(mt.l.stringify(n)),m=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';m=["{"];e=mt.l.stringify;for(l in d)if(Object.prototype.hasOwnProperty.call(d,l))switch(n=
d[l],typeof n){case "undefined":case "unknown":case "function":break;default:f&&m.push(","),f=1,m.push(e(l)+":"+e(n))}m.push("}");return m.join("")}}}();mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.bb=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.eb=function(a){return mt.lang.d(a,"String")};mt.lang.j=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.localStorage={};
mt.localStorage.G=function(){if(!mt.localStorage.h)try{mt.localStorage.h=document.createElement("input"),mt.localStorage.h.type="hidden",mt.localStorage.h.style.display="none",mt.localStorage.h.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.h)}catch(a){return u}return s};
mt.localStorage.set=function(a,b,d){var g=new Date;g.setTime(g.getTime()+d||31536E6);try{window.localStorage?(b=g.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.G()&&(mt.localStorage.h.expires=g.toUTCString(),mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.setAttribute(a,b),mt.localStorage.h.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),d=a.substring(0,b)-0;if(d&&d>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.G())try{return mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.getAttribute(a)}catch(g){}return t};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.G())try{mt.localStorage.h.load(document.location.hostname),mt.localStorage.h.removeAttribute(a),mt.localStorage.h.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(d){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):t};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.ba={};mt.ba.log=function(a,b){var d=new Image,g="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[g]=d;d.onload=d.onerror=d.onabort=function(){d.onload=d.onerror=d.onabort=t;d=window[g]=t;b&&b(a)};d.src=a};mt.R={};
mt.R.ua=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return a};
mt.R.Va=function(a,b,d,g,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+d+'" height="'+g+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+d+'" height="'+g+'" src="'+b+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.g=function(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:t};mt.url.$a=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:t};mt.url.ra=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):t};mt.url.X=function(a){return(a=mt.url.ra(a))?a.replace(/:\d+$/,""):a};mt.url.K=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):t};
(function(){function a(){for(var a=u,d=document.getElementsByTagName("script"),g=d.length,g=100<g?100:g,f=0;f<g;f++){var l=d[f].src;if(l&&0===l.indexOf("https://hm.baidu.com/h")){a=s;break}}return a}return h.oa=a})();var A=h.oa;
h.s={ab:"http://tongji.baidu.com/hm-web/welcome/ico",aa:"hm.baidu.com/hm.gif",fa:"baidu.com",ya:"hmmd",za:"hmpl",Oa:"utm_medium",xa:"hmkw",Qa:"utm_term",va:"hmci",Na:"utm_content",Aa:"hmsr",Pa:"utm_source",wa:"hmcu",Ma:"utm_campaign",r:0,m:Math.round(+new Date/1E3),T:Math.round(+new Date/1E3)%65535,protocol:"https:"===document.location.protocol?"https:":"http:",N:A()||"https:"===document.location.protocol?"https:":"http:",cb:0,Sa:6E5,Ta:5,Ua:1024,Ra:1,A:2147483647,ca:"cc cf ci ck cl cm cp cu cw ds ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt".split(" ")};
(function(){var a={p:{},c:function(a,d){this.p[a]=this.p[a]||[];this.p[a].push(d)},B:function(a,d){this.p[a]=this.p[a]||[];for(var g=this.p[a].length,f=0;f<g;f++)this.p[a][f](d)}};return h.w=a})();
(function(){function a(a,g){var f=document.createElement("script");f.charset="utf-8";b.d(g,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=t,g()}:f.onload=function(){g()});f.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(f,l)}var b=mt.lang;return h.load=a})();
(function(){function a(){var a="";h.b.a.nv?(a=encodeURIComponent(document.referrer),window.sessionStorage?d.set("Hm_from_"+c.id,a):b.set("Hm_from_"+c.id,a,864E5)):a=(window.sessionStorage?d.get("Hm_from_"+c.id):b.get("Hm_from_"+c.id))||"";return a}var b=mt.localStorage,d=mt.sessionStorage;return h.U=a})();
(function(){var a=mt.f,b=h.s,d=h.load,g=h.U;h.w.c("pv-b",function(){var f=b.protocol+"//crs.baidu.com/";c.rec&&a.P(function(){for(var l=0,m=c.rp.length;l<m;l++){var e=c.rp[l][0],n=c.rp[l][1],k=a.V("hm_t_"+e);if(n&&!(2==n&&!k||k&&""!==k.innerHTML))k="",k=Math.round(Math.random()*b.A),k=4==n?f+"hl.js?"+["siteId="+c.id,"planId="+e,"rnd="+k].join("&"):f+"t.js?"+["siteId="+c.id,"planId="+e,"from="+g(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+k].join("&"),
d(k)}})})})();(function(){var a=h.s,b=h.load,d=h.U;h.w.c("pv-b",function(){if(c.trust&&c.vcard){var g="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+d(),"rnd="+Math.round(Math.random()*a.A),"hm=1"].join("&");b(g)}})})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.H.sa()+","+h.H.qa();h.b.k()}}function b(){clearTimeout(y);var a;x&&(a="visible"==document[x]);z&&(a=!document[z]);e="undefined"==typeof a?s:a;if((!m||!n)&&e&&k)w=s,p=+new Date;else if(m&&n&&(!e||!k))w=u,q+=+new Date-p;m=e;n=k;y=setTimeout(b,100)}function d(a){var n=document,p="";if(a in n)p=a;else for(var d=["webkit","ms","moz","o"],b=0;b<d.length;b++){var k=d[b]+a.charAt(0).toUpperCase()+a.slice(1);if(k in n){p=
k;break}}return p}function g(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))k="focus"==a.type||"focusin"==a.type?s:u,b()}var f=mt.event,l=h.w,m=s,e=s,n=s,k=s,v=+new Date,p=v,q=0,w=s,x=d("visibilityState"),z=d("hidden"),y;b();(function(){var a=x.replace(/[vV]isibilityState/,"visibilitychange");f.c(document,a,b);f.c(window,"pageshow",b);f.c(window,"pagehide",b);"object"==typeof document.onfocusin?(f.c(document,"focusin",g),f.c(document,"focusout",g)):(f.c(window,"focus",g),
f.c(window,"blur",g))})();h.H={sa:function(){return+new Date-v},qa:function(){return w?+new Date-p+q:q}};l.c("pv-b",function(){f.c(window,"unload",a())});return h.H})();
(function(){var a=mt.lang,b=h.s,d=h.load,g={Ca:function(f){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.b){var g=h.b.J();d([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(g)].join(""),f)}},La:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.ia=g})();
(function(){function a(a,d,b,p){if(!(a===r||d===r||p===r)){if(""===a)return[d,b,p].join("*");a=String(a).split("!");for(var q,e=u,f=0;f<a.length;f++)if(q=a[f].split("*"),String(d)===q[0]){q[1]=b;q[2]=p;a[f]=q.join("*");e=s;break}e||a.push([d,b,p].join("*"));return a.join("!")}}function b(a){for(var k in a)if({}.hasOwnProperty.call(a,k)){var e=a[k];d.d(e,"Object")||d.d(e,"Array")?b(e):a[k]=String(e)}}var d=mt.lang,g=mt.l,f=h.s,l=h.w,m=h.ia,e={z:[],F:0,Z:u,o:{S:"",page:""},init:function(){e.e=0;l.c("pv-b",
function(){e.ka();e.ma()});l.c("pv-d",function(){e.na();e.o.page=""});l.c("stag-b",function(){h.b.a.api=e.e||e.F?e.e+"_"+e.F:"";h.b.a.ct=[decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),e.o.S,e.o.page].join("!")});l.c("stag-d",function(){h.b.a.api=0;e.e=0;e.F=0})},ka:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,n=0;n<arguments.length;n++){var p=arguments[n];d.d(p,"Array")&&(a.cmd[a.id].push(p),"_setAccount"===p[0]&&(1<
p.length&&/^[0-9a-f]{32}$/.test(p[1]))&&(p=p[1],a.id=p,a.cmd[p]=a.cmd[p]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ma:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var d=a.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,p=0,q=d.length;p<q;p++){var f=d[p];b.test(f[0])?e.z.push(f):e.O(f)}a.cmd[c.id]={push:e.O}},na:function(){if(0<e.z.length)for(var a=0,d=e.z.length;a<d;a++)e.O(e.z[a]);e.z=t},O:function(a){var b=a[0];if(e.hasOwnProperty(b)&&d.d(e[b],"Function"))e[b](a)},
_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(e.e|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],u===a||s===a))e.e|=2,h.b.Y=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){e.e|=4;h.b.a.et=0;h.b.a.ep="";h.b.L?(h.b.a.nv=0,h.b.a.st=4):h.b.L=s;var d=h.b.a.u,b=h.b.a.su;h.b.a.u=f.protocol+"//"+document.location.host+a[1];e.Z||(h.b.a.su=document.location.href);h.b.k();h.b.a.u=d;h.b.a.su=b}},_trackEvent:function(a){2<a.length&&(e.e|=8,h.b.a.nv=
0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=d.j(a[1])+"*"+d.j(a[2])+(a[3]?"*"+d.j(a[3]):"")+(a[4]?"*"+d.j(a[4]):""),h.b.k())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],f=a[4]||3;if(0<b&&6>b&&0<f&&4>f){e.F++;for(var p=(h.b.a.cv||"*").split("!"),q=p.length;q<b-1;q++)p.push("*");p[b-1]=f+"*"+d.j(a[2])+"*"+d.j(a[3]);h.b.a.cv=p.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Ea("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>
b.length)){var e=d.j(b[1]);b=d.j(b[2]);if(e!==r&&b!==r){var f=decodeURIComponent(h.b.getData("Hm_ct_"+c.id)||""),f=a(f,e,1,b);h.b.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var f=d.j(b[1]);b=d.j(b[2]);if(f!==r&&b!==r){var g=e.o.S,g=a(g,f,2,b);e.o.S=g}}},_setPageTag:function(b){if(!(3>b.length)){var f=d.j(b[1]);b=d.j(b[2]);if(f!==r&&b!==r){var g=e.o.page,g=a(g,f,3,b);e.o.page=g}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&
"/"===a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],e.Z=s)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),e.e|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=g.stringify(a),h.b.k())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.e|=32,h.b.a.et=93,h.b.a.ep=a,h.b.k()},_trackRTPageview:function(a){a=a[1];d.d(a,"Object")&&(b(a),a=g.stringify(a),512>=encodeURIComponent(a).length&&(e.e|=64,h.b.a.rt=a))},_trackRTEvent:function(a){a=a[1];if(d.d(a,
"Object")){b(a);a=encodeURIComponent(g.stringify(a));var k=function(a){var b=h.b.a.rt;e.e|=128;h.b.a.et=90;h.b.a.rt=a;h.b.k();h.b.a.rt=b},l=a.length;if(900>=l)k.call(this,a);else for(var l=Math.ceil(l/900),p="block|"+Math.round(Math.random()*f.A).toString(16)+"|"+l+"|",q=[],m=0;m<l;m++)q.push(m),q.push(a.substring(900*m,900*m+900)),k.call(this,p+q.join("|")),q=[]}},_setUserId:function(a){a=a[1];m.Ca();m.La(a)}};e.init();h.ga=e;return h.ga})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=s,this.a={},this.Y=s,this.L=u,this.init())}var b=mt.url,d=mt.ba,g=mt.R,f=mt.lang,l=mt.cookie,m=mt.i,e=mt.localStorage,n=mt.sessionStorage,k=h.s,v=h.w;a.prototype={M:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},$:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},C:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.$(a,c.dm[d]))return s}else{var e=b.X(a);if(e&&this.M(e,c.dm[d]))return s}return u},J:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.M(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},W:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.$(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},ta:function(){if(!document.referrer)return k.m-k.r>c.vdur?1:4;var a=
u;this.C(document.referrer)&&this.C(document.location.href)?a=s:(a=b.X(document.referrer),a=this.M(a||"",document.location.hostname));return a?k.m-k.r>c.vdur?1:4:3},getData:function(a){try{return l.get(a)||n.get(a)||e.get(a)}catch(b){}},setData:function(a,b,d){try{l.set(a,b,{domain:this.J(),path:this.W(),I:d}),d?e.set(a,b,d):n.set(a,b)}catch(f){}},Ea:function(a){try{l.set(a,"",{domain:this.J(),path:this.W(),I:-1}),n.remove(a),e.remove(a)}catch(b){}},Ja:function(){var a,b,d,e,f;k.r=this.getData("Hm_lpvt_"+
c.id)||0;13===k.r.length&&(k.r=Math.round(k.r/1E3));b=this.ta();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){e=d.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/1E3));for(;2592E3<k.m-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(k.m);4<e.length;)e.shift();d=e.join(",");e=e[e.length-1]}else d=k.m,e="",f=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,k.m);d=k.m===this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.C(document.location.href)&&
(""===document.referrer||this.C(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=e;this.a.lv=f},Ia:function(){for(var a=[],b=this.a.et,d=0,e=k.ca.length;d<e;d++){var f=k.ca[d],g=this.a[f];"undefined"!==typeof g&&""!==g&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(g))}switch(b){case 0:a.push("sn="+k.T);this.a.rt&&a.push("rt="+encodeURIComponent(this.a.rt));break;case 3:a.push("sn="+k.T);break;case 90:this.a.rt&&a.push("rt="+this.a.rt)}return a.join("&")},
Ka:function(){this.Ja();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=m.Fa;this.a.cl=m.colorDepth+"-bit";this.a.ln=String(m.language).toLowerCase();this.a.ja=m.javaEnabled?1:0;this.a.ck=m.cookieEnabled?1:0;this.a.lo="number"===typeof _bdhm_top?1:0;this.a.fl=g.ua();this.a.v="1.2.24";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.a.tt=document.title||"";var a=document.location.href;this.a.cm=b.g(a,k.ya)||"";this.a.cp=b.g(a,k.za)||b.g(a,k.Oa)||"";this.a.cw=b.g(a,k.xa)||b.g(a,
k.Qa)||"";this.a.ci=b.g(a,k.va)||b.g(a,k.Na)||"";this.a.cf=b.g(a,k.Aa)||b.g(a,k.Pa)||"";this.a.cu=b.g(a,k.wa)||b.g(a,k.Ma)||""},init:function(){try{this.Ka(),0===this.a.nv?this.Ha():this.Q(".*"),h.b=this,this.ha(),v.B("pv-b"),this.Ga()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(k.N+"//"+k.aa+"?"+b.join("&"))}},Ga:function(){function a(){v.B("pv-d")}this.Y?(this.L=s,
this.a.et=0,this.a.ep="",this.k(a)):a()},k:function(a){var b=this;b.a.rnd=Math.round(Math.random()*k.A);v.B("stag-b");var e=k.N+"//"+k.aa+"?"+b.Ia();v.B("stag-d");b.ea(e);d.log(e,function(d){b.Q(d);f.d(a,"Function")&&a.call(b)})},ha:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),e=-1<document.referrer.indexOf(k.fa),f=b.g(a,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);a&&(d.test(a)&&e&&g)&&(this.a.rnd=Math.round(Math.random()*k.A),a=document.createElement("script"),a.setAttribute("type",
"text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.a.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},ea:function(a){var b=n.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");n.set("Hm_unsent_"+c.id,b)},Q:function(a){var b=n.get("Hm_unsent_"+c.id)||"";b&&(a=encodeURIComponent(a.replace(/^https?:\/\//,"")),
a=RegExp(a.replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),(b=b.replace(a,"").replace(/,$/,""))?n.set("Hm_unsent_"+c.id,b):n.remove("Hm_unsent_"+c.id))},Ha:function(){var a=this,b=n.get("Hm_unsent_"+c.id);if(b)for(var b=b.split(","),e=function(b){d.log(k.N+"//"+decodeURIComponent(b),function(b){a.Q(b)})},f=0,g=b.length;f<g;f++)e(b[f])}};return new a})();
(function(){var a=mt.f,b=mt.event,d=mt.url,g=mt.l;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var f=+new Date,l=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},m=t;a.P(function(){m=+new Date});var e=function(){var a,b,e;e=l("navigation");b=l("request");e={netAll:b.start-e.start,netDns:l("domainLookup").value,netTcp:l("connect").value,srv:l("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:l("loadEvent").end-e.start};a=document.referrer;var n=a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[],w=t;b=t;if("www.baidu.com"===n[2]||"m.baidu.com"===n[2])w=d.g(a,"qid"),b=d.g(a,"click_t");a=w;e.qid=a!=t?a:"";b!=t?(e.bdDom=m?m-b:0,e.bdRun=f-b,e.bdDef=l("navigation").start-b):(e.bdDom=0,e.bdRun=0,e.bdDef=0);h.b.a.et=87;h.b.a.ep=g.stringify(e);h.b.k()};b.c(window,"load",function(){setTimeout(e,500)})}}catch(n){}})();
(function(){var a=mt.i,b=mt.lang,d=mt.event,g=mt.l;if("undefined"!==typeof h.b&&(c.med||(!a.Da||7<a.Ba)&&c.cvcc)){var f,l,m,e,n=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},k=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===u)return u},v=function(a,d){var e={};e.n=f;e.t="clk";e.v=a;if(d){var k=d.getAttribute("href"),l=d.getAttribute("onclick")?""+d.getAttribute("onclick"):t,n=d.getAttribute("id")||"";m.test(k)?(e.sn="mediate",
e.snv=k):b.d(l,"String")&&m.test(l)&&(e.sn="wrap",e.snv=l);e.id=n}h.b.a.et=86;h.b.a.ep=g.stringify(e);h.b.k();for(e=+new Date;400>=+new Date-e;);};if(c.med)l="/zoosnet",f="swt",m=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,e={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(m.test(e)||m.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){l="/other-comm";f="other";m=c.cvcc.q||r;var p=c.cvcc.id||r;e={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f,g=0,k=b.length;g<k;g++)d=b[g],m!==r?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),p?(d=d.getAttribute("id"),(m.test(e)||m.test(f)||p.test(d))&&
a.push(b[g])):(m.test(e)||m.test(f))&&a.push(b[g])):p!==r&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof e&&"undefined"!==typeof m){var q;l+=/\/$/.test(l)?"":"/";var w=function(a,d){if(q===d)return v(l+a,d),u;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(q===d[e])return v(l+a+"/"+(e+1),d[e]),u};d.c(document,"mousedown",function(a){a=a||window.event;q=a.target||a.srcElement;var d={};for(k(e,function(a,e){d[a]=b.d(e,"Function")?e():document.getElementById(e)});q&&
q!==document&&k(d,w)!==u;)q=q.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,d=mt.event,g=mt.l;if("undefined"!==typeof h.b&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var f={da:function(){for(var b=c.cvcf.length,g,e=0;e<b;e++)(g=a.V(decodeURIComponent(c.cvcf[e])))&&d.c(g,"click",f.la())},la:function(){return function(){h.b.a.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.b.a.ep=g.stringify(a);h.b.k()}}};a.P(function(){f.da()})}})();
(function(){var a=mt.event,b=mt.l;if(c.med&&"undefined"!==typeof h.b){var d=+new Date,g={n:"anti",sb:0,kb:0,clk:0},f=function(){h.b.a.et=86;h.b.a.ep=b.stringify(g);h.b.k()};a.c(document,"click",function(){g.clk++});a.c(document,"keyup",function(){g.kb=1});a.c(window,"scroll",function(){g.sb++});a.c(window,"unload",function(){g.t=+new Date-d;f()});a.c(window,"load",function(){setTimeout(f,5E3)})}})();})();
