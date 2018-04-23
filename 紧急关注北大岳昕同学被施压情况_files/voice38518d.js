define("biz_common/utils/respTypes.js",[],function(require,exports,module,alert){
"use strict";
var logList=[],log=function(r){
logList.push(r);
},printLog=function(){
for(var r=0,e=logList.length;e>r;++r)console.log("[RespType]"+logList[r]);
},isArray=function(r){
return"[object Array]"==Object.prototype.toString.call(r);
},getValueType=function(r){
return isArray(r)?"array":typeof r;
},parseRtDesc=function(r,e){
var t="mix",o=!1,c=e;
if(e){
var n="_R",s=e.indexOf(n),i=e.length-n.length;
o=-1!=s&&s==i,c=o?e.substring(0,i):e;
}
return"string"==typeof r?t=r:isArray(r)?t="array":"object"==typeof r&&(t="object"),
{
key:c,
type:t,
isRequired:o
};
},checkForArrayRtDesc=function(r,e){
if(!isArray(r))return!1;
for(var t=0,o=r.length;o>t;++t){
for(var c,n=r[t],s=0,i=0===e.length;c=e[s++];)if(checkForRtDesc(n,c)){
i=!0;
break;
}
if(!i)return!1;
}
return!0;
},checkForStringRtDesc=function(r,e){
var t=getValueType(r),o=parseRtDesc(e),c=o.type==t;
return c||log("miss match type : "+t+" !== "+o.type),c;
},checkForObjectRtDesc=function(r,e){
if("object"!=typeof r||isArray(r))return log("must be object"),!1;
var t=r,o=r;
for(var c in e)if(e.hasOwnProperty(c)){
var n=e[c],s=parseRtDesc(n,c),i=s.key;
o=t[i];
var u=getValueType(o);
if(s.isRequired&&void 0===o)return log("is required @key="+i),!1;
if(void 0!==o){
if(u!=s.type&&"mix"!=s.type)return log("miss match type : "+u+" !== "+s.type+" @key="+i),
!1;
if(("array"==u||"object"==u)&&"mix"!=s.type&&!checkForRtDesc(o,n))return!1;
}
}
return!0;
},checkForRtDesc=function(r,e){
return isArray(e)?checkForArrayRtDesc(r,e):"object"==typeof e?checkForObjectRtDesc(r,e):"string"==typeof e?checkForStringRtDesc(r,e):!1;
},check=function(json,rtDescs){
if("string"==typeof json)try{
json=eval("("+json+")");
}catch(e){
return log("parse json error"),!1;
}
if("object"!=typeof json)return log("must be object"),!1;
isArray(rtDesc)||(rtDescs=[rtDescs]);
for(var rtDesc,i=0;rtDesc=rtDescs[i++];)if(checkForRtDesc(json,rtDesc))return!0;
return!1;
};
return{
check:function(r,e){
logList=[];
try{
var t=check(r,e);
return t||printLog(),t;
}catch(o){
return logList.push("[rtException]"+o.toString()),printLog(),!1;
}
},
getMsg:function(){
return logList.join(";");
}
};
});define("biz_wap/utils/log.js",["biz_wap/utils/mmversion.js","biz_wap/jsapi/core.js"],function(i){
"use strict";
var s=i("biz_wap/utils/mmversion.js"),e=i("biz_wap/jsapi/core.js");
return function(i,n,o){
"string"!=typeof i&&(i=JSON.stringify(i)),n=n||"info",o=o||function(){};
var t;
s.isIOS?t="writeLog":s.isAndroid&&(t="log"),t&&e.invoke(t,{
level:n,
msg:"[WechatFe]"+i
},o);
};
});define("sougou/index.js",["appmsg/emotion/emotion.js","biz_common/tmpl.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/utils/string/html.js","sougou/a_tpl.html.js","appmsg/cmt_tpl.html.js","appmsg/my_comment_tpl.html.js"],function(t){
"use strict";
function e(t){
var e=document.getElementById("js_cover"),n=[];
e&&n.push(e);
var o=document.getElementById("js_content");
if(o)for(var m=o.getElementsByTagName("img")||[],s=0,r=m.length;r>s;s++)n.push(m.item(s));
for(var a=[],s=0,r=n.length;r>s;s++){
var p=n[s],l=p.getAttribute("data-src")||p.getAttribute("src");
l&&(a.push(l),function(e){
i.on(p,"click",function(){
return"ios"==t?window.JSInvoker&&window.JSInvoker.openImageList&&window.JSInvoker.openImageList(JSON.stringify({
index:e,
array:a
})):window.JSInvoker&&JSInvoker.weixin_openImageList&&window.JSInvoker.weixin_openImageList(JSON.stringify({
index:e,
array:a
})),!1;
});
}(s));
}
}
var n=t("appmsg/emotion/emotion.js"),o=t("biz_common/tmpl.js"),i=(t("biz_wap/utils/ajax.js"),
t("biz_common/tmpl.js"),t("biz_common/dom/event.js"));
t("biz_common/utils/string/html.js");
t("sougou/a_tpl.html.js"),t("appmsg/cmt_tpl.html.js");
if(document.getElementById("js_report_article3").style.display="none",document.getElementById("js_toobar3").style.display="none",
function(){
var e=t("appmsg/my_comment_tpl.html.js"),n=document.createElement("div");
n.innerHTML=o.tmpl(e,{}),document.body.appendChild(n);
}(),n.init(),navigator.userAgent.toLowerCase().match(/ios/)){
var m=navigator.userAgent.toLowerCase().match(/(?:sogousearch\/ios\/)(.*)/);
if(m&&m[1]){
var s=m[1].replace(/\./g,"");
parseInt(s)>422&&e("ios");
}
}else e("android");
window.onerror=function(t){
var e=new Image;
e.src="/mp/jsreport?key=86&content="+t+"&r="+Math.random();
};
});define("biz_wap/safe/mutation_observer_report.js",[],function(){
"use strict";
window.addEventListener&&window.addEventListener("load",function(){
window.__moonsafe_mutation_report_keys||(window.__moonsafe_mutation_report_keys={});
var e=window.moon&&moon.moonsafe_id||29715,o=window.moon&&moon.moonsafe_key||0,t=[],n={},r=function(e){
return"[object Array]"==Object.prototype.toString.call(e);
},s=function(e,o,s){
s=s||1,n[e]||(n[e]=0),n[e]+=s,o&&(r(o)?t=t.concat(o):t.push(o)),setTimeout(function(){
a();
},1500);
},a=function(){
var r=[],s=t.length,i=["r="+Math.random()];
for(var c in n)n.hasOwnProperty(c)&&r.push(e+"_"+(1*c+1*o)+"_"+n[c]);
for(var c=0;s>c&&!(c>=10);++c)i.push("log"+c+"="+encodeURIComponent(t[c]));
if(!(0==r.length&&i.length<=1)){
var _,d="idkey="+r.join(";")+"&lc="+(i.length-1)+"&"+i.join("&");
if(window.ActiveXObject)try{
_=new ActiveXObject("Msxml2.XMLHTTP");
}catch(w){
try{
_=new ActiveXObject("Microsoft.XMLHTTP");
}catch(f){
_=!1;
}
}else window.XMLHttpRequest&&(_=new XMLHttpRequest);
_&&(_.open("POST",location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?",!0),_.setRequestHeader("cache-control","no-cache"),
_.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),
_.setRequestHeader("X-Requested-With","XMLHttpRequest"),_.onreadystatechange=function(){
4===_.readyState&&(t.length>10?(t=t.slice(10),a()):(t=[],n={}));
},t=[],n={},_.send(d));
}
};
try{
if(!window.__observer)return;
var i=window.__observer_data;
if(window.__observer.takeRecords){
var c=window.__observer.takeRecords();
if(c&&c.length){
i.count++;
var _=new Date;
c.forEach(function(e){
for(var o=e.addedNodes,t=0;t<o.length;t++){
var n=o[t];
if("SCRIPT"===n.tagName){
var r=n.src;
!r||/qq\.com/.test(r)||/weishi\.com/.test(r)||i.list.push(r);
}
}
}),i.exec_time+=new Date-_;
}
}
window.__observer.disconnect();
for(var d=window.__moonsafe_mutation_report_keys.observer||2,w=window.__moonsafe_mutation_report_keys.script_src||8,f=window.__moonsafe_mutation_report_keys.setattribute||9,u=window.__moonsafe_mutation_report_keys.ajax||10,m=25,v=0;v<i.list.length;v++){
var l=i.list[v],h=["[moonsafe][observer][url]:"+location.href,"[moonsafe][observer][src]:"+l,"[moonsafe][observer][ua]:"+navigator.userAgent];
i.list.length==v+1&&(h.push("[moonsafe][observer][count]:"+i.count),h.push("[moonsafe][observer][exec_time]:"+i.exec_time+"ms")),
s(d,h),"inlinescript_without_nonce"==l&&s(m,h);
}
var p=window.__danger_src;
if(p)for(var y=[{
key:"xmlhttprequest",
idkey:u
},{
key:"script_src",
idkey:w
},{
key:"script_setAttribute",
idkey:f
}],v=0;v<y.length;v++){
var b=y[v].key,g=p[b];
if(g&&g.length)for(var k=0;k<g.length;k++){
var h=["[moonsafe]["+b+"][url]:"+location.href,"[moonsafe]["+b+"][src]:"+g[k],"[moonsafe]["+b+"][ua]:"+navigator.userAgent];
s(y[v].idkey,h);
}
}
}catch(q){
var R=3,h=["[moonsafe][observer][exception]:"+q];
s(R,h);
}
},!1);
});define("appmsg/fereport.js",["biz_wap/utils/wapsdk.js","biz_common/utils/http.js","appmsg/log.js"],function(e){
"use strict";
function i(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var i,s=e.timing,a=0,d=0,m=window.location.protocol,p=Math.random(),r=1>2*p,u=1>25*p,l=1>100*p,w=1>250*p,c=1>1e3*p,g=1>1e4*p,_=!0;
"https:"==m?(a=18,d=27,_=!1):"http:"==m&&(a=9,d=19);
var S=window.__wxgspeeds||{};
if(S&&S.moonloadtime&&S.moonloadedtime){
var v=S.moonloadedtime-S.moonloadtime;
i=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
n.saveSpeeds({
sample:21==i||22==i&&c?1:0,
uin:uin,
pid:a,
speeds:{
sid:i,
time:v
}
});
}
S&&S.mod_downloadtime&&n.saveSpeeds({
uin:uin,
pid:a,
speeds:{
sid:24,
time:S.mod_downloadtime
}
});
var f=s.domContentLoadedEventStart-s.navigationStart;
if(f>3e3&&(n.setBasicTime({
sample:l&&_||u&&!_?1:0,
uin:uin,
pid:d
}),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_28_1&lc=1&log0="+encodeURIComponent(location.href)),
window.moon&&moon.clearSample&&n.setBasicTime({
sample:1,
uin:uin,
pid:417
}),n.setBasicTime({
sample:w&&_||l&&!_?1:0,
uin:uin,
pid:a
}),o.htmlSize){
var h=o.htmlSize/(s.responseEnd-s.connectStart);
n.saveSpeeds({
sample:c,
uin:uin,
pid:a,
speeds:{
sid:25,
time:Math.round(h)
}
});
}
if(S&&S.combo_times)for(var b=1;b<S.combo_times.length;b++)n.saveSpeeds({
sample:w,
uin:uin,
pid:a,
speeds:{
sid:26,
time:S.combo_times[b]-S.combo_times[b-1]
}
});
if(S&&S.mod_num){
var j=S.hit_num/S.mod_num;
n.saveSpeeds({
sample:w,
uin:uin,
pid:a,
speeds:[{
sid:27,
time:Math.round(100*j)
},{
sid:28,
time:Math.round(1e3*j)
}]
});
}
var T=window.logs.pagetime.jsapi_ready_time-s.navigationStart;
n.saveSpeeds(156==a||155==a?{
sample:r,
uin:uin,
pid:a,
speeds:{
sid:31,
time:T
}
}:{
sample:c,
uin:uin,
pid:a,
speeds:{
sid:31,
time:T
}
}),n.send(),window.setTimeout(function(){
window.__moonclientlog&&t("[moon] "+window.__moonclientlog.join(" ^^^ "));
},250),window.setTimeout(function(){
window.onBridgeReadyTime&&(i=window.WeixinJSBridge&&window.WeixinJSBridge._createdByScriptTag?33:32,
n.saveSpeeds({
sample:g,
uin:uin,
pid:a,
speeds:{
sid:i,
time:window.onBridgeReadyTime-s.navigationStart
}
}),n.send());
},5e3);
}
}
var n=e("biz_wap/utils/wapsdk.js"),o=e("biz_common/utils/http.js"),t=e("appmsg/log.js");
i(),function(){
function e(e){
var n=new TextEncoder("utf-8").encode(e),o=crypto.subtle||crypto.webkitSubtle;
return o.digest(m,n).then(function(e){
return i(e);
});
}
function i(e){
for(var i=[],n=new DataView(e),o=0;o<n.byteLength;o+=4){
var t=n.getUint32(o),s=t.toString(16),a="00000000",d=(a+s).slice(-a.length);
i.push(d);
}
return i.join("");
}
try{
var o=Math.random(),t=window.localStorage,s=[],a=[];
for(var d in t)-1!=d.indexOf("__MOON__")&&window.moon_map[d.substr(8)]&&s.push(t[d]);
if(window.crypto){
var m="";
m=.5>o?"SHA-256":"SHA-1";
for(var p=(new Date).getTime(),r=0;r<s.length;r++)a.push(e(s[r]));
Promise.all(a).then(function(){
var e=(new Date).getTime(),i=e-p;
n.saveSpeeds({
uin:uin,
pid:108,
speeds:{
sid:.5>o?21:23,
time:i
}
}),n.send();
});
}else n.saveSpeeds({
uin:uin,
pid:108,
speeds:{
sid:24,
time:1
}
}),n.send();
}catch(u){}
}();
});define("appmsg/report.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","appmsg/cdn_img_lib.js","biz_wap/utils/mmversion.js","biz_common/utils/report.js","biz_common/utils/monitor.js"],function(e){
"use strict";
function t(){
var t=(e("biz_wap/utils/mmversion.js"),e("biz_common/utils/report.js"),e("biz_common/utils/monitor.js")),a=!1,r=window.performance||window.msPerformance||window.webkitPerformance;
return function(){
return;
}(),r&&r.timing&&r.timing.navigationStart?(a=r.timing.navigationStart,function(){
return;
}(),function(){
function e(){
if(-1==n.indexOf("NetType/"))return!1;
for(var e=["2G","cmwap","cmnet","uninet","uniwap","ctwap","ctnet"],t=0,i=e.length;i>t;++t)if(-1!=n.indexOf(e[t]))return!0;
return!1;
}
var i=window.performance&&window.performance.timing,r=write_sceen_time-a,s=first_sceen__time-a,d=page_endtime-a,m=(window.onload_endtime||+new Date)-a;
-1!=navigator.userAgent.indexOf("MicroMessenger")&&(r=real_show_page_time-a,s=real_show_page_time-a);
var g=window.logs.jsapi_ready_time?window.logs.jsapi_ready_time-a:void 0,w=window.logs.a8key_ready_time?window.logs.a8key_ready_time-a:void 0,p=i&&i.connectEnd-i.connectStart,c=i&&i.secureConnectionStart&&i.connectEnd-i.secureConnectionStart,u=i&&i.domainLookupEnd&&i.domainLookupStart&&i.domainLookupEnd-i.domainLookupStart;
if(window.logs.pagetime.wtime=r,window.logs.pagetime.ftime=s,window.logs.pagetime.ptime=d,
window.logs.pagetime.onload_time=m,window.logs.pagetime.jsapi_ready_time=g,window.logs.pagetime.a8key_ready_time=w,
need_report_cost?o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["1|1|"+d,"1|2|"+s,"1|3|"+m,"1|4|"+g,"1|5|"+w,"1|6|"+p,"1|7|"+c,"1|8|"+u].join(";")
}
}):Math.random()<.01&&o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["#1|1|"+d,"1|2|"+s,"1|3|"+m,"1|4|"+g,"1|5|"+w,"1|6|"+p,"1|7|"+c,"1|8|"+u].join(";")
}
}),need_report_cost&&s>3e3){
var l=new Image,f=(new Date).getTime();
l.onload=function(){
var e=(new Date).getTime()-f,t=(new Date).getTime(),i=new Image;
i.onload=function(){
var i=(new Date).getTime()-t;
o({
url:"/mp/report_cost",
type:"post",
data:{
id_key_list:["^2|1|"+e,"2|2|"+i].join(";")
}
});
},i.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
},l.src="http://ugc.qpic.cn/adapt/0/7d8963bb-aace-df23-0569-f8a4e388eacb/100?r="+Math.random();
}
if(!(Math.random()>.2||0>m||0>r||0>s||0>d)){
if(g&&t.setAvg(27822,15,g),w&&t.setAvg(27822,17,w),d>=15e3)return t.setAvg(27822,29,d),
void t.send();
t.setAvg(27822,1,d).setAvg(27822,3,m).setAvg(27822,5,s),window.isWeixinCached&&t.setAvg(27822,19,d),
e()?(t.setAvg(27822,9,d),window.isWeixinCached&&t.setAvg(27822,23,d)):"wifi"==networkType?(t.setAvg(27822,7,d),
window.isWeixinCached&&t.setAvg(27822,21,d)):"2g/3g"==networkType?(t.setAvg(27822,11,d),
window.isWeixinCached&&t.setAvg(27822,25,d)):(t.setAvg(27822,13,d),window.isWeixinCached&&t.setAvg(27822,28,d)),
window.moon&&moon.clearSample&&(t.setAvg(27822,71,d),e()?t.setAvg(27822,73,d):"wifi"==networkType?t.setAvg(27822,75,d):"2g/3g"==networkType?t.setAvg(27822,77,d):t.setAvg(27822,79,d)),
p&&t.setAvg(27822,65,p),c&&t.setAvg(27822,67,c),u&&t.setAvg(27822,69,u),t.send();
}
}(),function(){
window.logs.jsapi_ready_fail&&(t.setSum(24729,55,window.logs.jsapi_ready_fail),t.send());
}(),function(){
var e=document.getElementById("js_toobar3"),t=document.getElementById("page-content"),n=window.innerHeight||document.documentElement.clientHeight;
if(t&&!(Math.random()>.1)){
var o=function(){
var a=window.pageYOffset||document.documentElement.scrollTop,s=e.offsetTop;
if(a+n>=s){
for(var d,m,g=t.getElementsByTagName("img"),w={},p=[],c=0,u=0,l=0,f=0,_=g.length;_>f;++f){
var v=g[f];
d=v.getAttribute("data-src")||v.getAttribute("src"),m=v.getAttribute("src"),d&&(d.isCDN()?u++:l++,
c++,w[m]={});
}
if(p.push("1="+1e3*c),p.push("2="+1e3*u),p.push("3="+1e3*l),r.getEntries){
var h=r.getEntries(),y=window.logs.img.download,A=[0,0,0],j=[0,0,0];
c=u=0;
for(var f=0,k=h.length;k>f;++f){
var T=h[f],b=T.name;
b&&"img"==T.initiatorType&&w[b]&&(b.isCDN()&&(j[0]+=T.duration,u++),A[0]+=T.duration,
c++,w[b]={
startTime:T.startTime,
responseEnd:T.responseEnd
});
}
A[0]>0&&c>0&&(A[2]=A[0]/c),j[0]>0&&u>0&&(j[2]=j[0]/u);
for(var f in y)if(y.hasOwnProperty(f)){
for(var M=y[f],E=0,x=0,C=0,z=0,S=0,_=M.length;_>S;++S){
var d=M[S];
if(w[d]&&w[d].startTime&&w[d].responseEnd){
var D=w[d].startTime,I=w[d].responseEnd;
E=Math.max(E,I),x=x?Math.min(x,D):D,d.isCDN()&&(C=Math.max(E,I),z=x?Math.min(x,D):D);
}
}
A[1]+=Math.round(E-x),j[1]+=Math.round(C-z);
}
for(var N=4,W=7,f=0;3>f;f++)A[f]=Math.round(A[f]),j[f]=Math.round(j[f]),A[f]>0&&(p.push(N+f+"="+A[f]),
"wifi"==networkType?p.push(N+f+6+"="+A[f]):"2g/3g"==networkType&&p.push(N+f+12+"="+A[f])),
j[f]>0&&(p.push(W+f+"="+j[f]),"wifi"==networkType?p.push(W+f+6+"="+j[f]):"2g/3g"==networkType&&p.push(W+f+12+"="+j[f]));
}
i.off(window,"scroll",o,!1);
}
};
i.on(window,"scroll",o,!1);
}
}(),void function(){
if(!(Math.random()>.001)){
var e=document.createElement("iframe"),t=[600,800,1e3,1200,1500,2e3,3e3,5e3,1e4,18e3],i=Math.ceil(10*Math.random())-1,n=uin+mid+idx+Math.ceil(1e3*Math.random())+(new Date).getTime();
e.style.display="none",e.id="js_ajax",e.setAttribute("data-time",i),e.src="/mp/iframetest?action=page&traceid="+n+"&devicetype="+devicetype+"&timeout="+t[i];
var o=document.getElementById("js_article");
o.appendChild(e);
}
}()):!1;
}
var i=e("biz_common/dom/event.js"),n=navigator.userAgent,o=e("biz_wap/utils/ajax.js");
e("appmsg/cdn_img_lib.js"),i.on(window,"load",function(){
if(""==networkType&&window.isInWeixinApp()){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
JSAPI.invoke("getNetworkType",{},function(i){
networkType=e[i.err_msg],t();
});
}else t();
},!1);
});define("appmsg/report_and_source.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","appmsg/articleReport.js","biz_wap/utils/ajax.js","appmsg/open_url_with_webview.js","biz_wap/jsapi/core.js"],function(e,t,i,o){
"use strict";
function n(){
var e=c.indexOf("://")<0?"http://"+c:c;
if(-1!=e.indexOf("mp.weixin.qq.com/s")||-1!=e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var t=e.split("#");
e=s.addParam(t[0],"scene",25,!0)+(t[1]?"#"+t[1]:""),e=e.replace(/#rd$/g,"#wechat_redirect");
}else e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(c);
try{
if("mp.weixin.qq.com"!=top.window.location.host)return window.top.open(e,"_blank"),
!1;
}catch(i){}
var o=location.search.replace("wx_header","del_wx_header"),n={
url:"/mp/advertisement_report"+o+"&report_type=3&action_type=0&url="+encodeURIComponent(c)+"&ascene="+encodeURIComponent(window.ascene||-1)+"&__biz="+biz+"&r="+Math.random(),
type:"GET",
mayAbort:!0,
async:!1
};
return n.timeout=2e3,n.complete=function(){
l(e,{
sample:0,
reject:function(){
location.href=e;
}
});
},p(n),!1;
}
e("biz_common/utils/string/html.js");
var r=e("biz_common/dom/event.js"),s=e("biz_common/utils/url/parse.js"),m=e("appmsg/articleReport.js"),p=e("biz_wap/utils/ajax.js"),a=msg_title.htmlDecode(),c=msg_source_url.htmlDecode(),l=e("appmsg/open_url_with_webview.js"),_=e("biz_wap/jsapi/core.js");
m.init({
dom:document.getElementById("js_report_article3"),
title:a,
link:window.msg_link
});
var d=document.getElementById("js_view_source");
r.on(d,"click",function(){
return n(),!1;
});
});define("appmsg/page_pos.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/cookie.js","biz_common/utils/http.js","appmsg/cdn_img_lib.js","biz_wap/utils/storage.js"],function(e){
"use strict";
function t(e){
window.logs||(window.logs={}),p.js_content=e.js_content||document.getElementById("js_content");
var t=e.js_toobar3||document.getElementById("js_toobar3");
p.pageEndTop=t?t.offsetTop:0,p.imgs=p.js_content?p.js_content.getElementsByTagName("img")||[]:[],
p.media=e.media||document.getElementById("media"),p.title=e.title||(window.msg_title||"").htmlDecode(),
p.video_cnt=e.video_cnt||window.logs.video_cnt||0,p.js_cmt_area=e.js_cmt_area||document.getElementById("js_cmt_area"),
p.item_show_type=e.item_show_type||window.item_show_type||0,c=document.getElementsByTagName("html"),
c&&1==!!c.length&&l&&(c=c[0].innerHTML,y.content_length=l.htmlSize),window.logs.pageinfo=y,
function(){
if(window.localStorage&&!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var t=localStorage.key(e);
t.match(/^\d+$/)?localStorage.removeItem(t):t.match(/^adinfo_/)&&localStorage.removeItem(t),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(m.on(window,"load",function(){
O=1*u.get(E);
var t=location.href.indexOf("scrolltodown")>-1?!0:!1,o=p.js_cmt_area;
if(t&&o&&o.offsetTop){
var n=o.offsetTop;
window.scrollTo(0,n-25);
}else window.scrollTo(0,O);
if(window.__wxjs_is_wkwebview){
var i=h.getData("page_time");
i.page_time&&(d(i.page_time.val),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_59_1&r="+Math.random()),
window.setInterval(function(){
var e=a();
h.set("page_time",e,+new Date+864e7);
},1e3);
}
var m=f.getData("spad");
m&&m.spad&&_(m.spad.val),e.hasSpAd&&window.setInterval(function(){
s();
var e=r();
f.set("spad",e,+new Date+864e7);
},1e3);
}),m.on(window,"unload",function(){
window.__ajaxtest="2";
var e=a();
d(e);
}),window.logs.read_height=0,m.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(z),z=setTimeout(function(){
O=window.pageYOffset,u.set(E,O,+new Date+72e5);
},500);
}),m.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(z),z=setTimeout(function(){
O=window.pageYOffset,u.set(E,O,+new Date+72e5);
},500);
}));
}
function o(e,t){
if(e&&!(e.length<=0))for(var o,n,i,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,d=0,s=e.length;s>d;++d)o=e[d],
o&&(n=o.getAttribute(t),n&&(i=n.match(a),i&&i[2]&&(v[i[2]]=!0)));
}
function n(e){
for(var t=0,o=j.length;o>t;++t)if(j[t]==e)return!0;
return!1;
}
function i(){
v={},o(document.getElementsByTagName("a"),"href"),o(document.getElementsByTagName("link"),"href"),
o(document.getElementsByTagName("iframe"),"src"),o(document.getElementsByTagName("script"),"src"),
o(document.getElementsByTagName("img"),"src");
var e=[];
for(var t in v)v.hasOwnProperty(t)&&(window.networkType&&"wifi"==window.networkType&&!b&&n(t)&&(b=!0),
e.push(t));
return v={},e.join(",");
}
function a(){
var e,t=window.pageYOffset||document.documentElement.scrollTop,o=p.js_content,n=p.screen_height,a=p.screen_width,d=p.scroll_height,s=Math.ceil(d/n),r=Math.ceil((o.scrollHeight||o.offsetHeight)/n),_=(window.logs.read_height||t)+n,m=p.pageEndTop,w=p.imgs,l=Math.ceil(_/n)||1,g=p.media,u=50,h=0,f=0,v=0,j=0,T=_+u>m?1:0;
l>s&&(l=s);
var z=function(t){
if(t)for(var o=0,n=t.length;n>o;++o){
var i=t[o];
if(i){
h++;
var a=i.getAttribute("src"),d=i.getAttribute("data-type");
a&&0==a.indexOf("http")&&(f++,a.isCDN()&&(v++,-1!=a.indexOf("tp=webp")&&j++),d&&(e["img_"+d+"_cnt"]=e["img_"+d+"_cnt"]||0,
e["img_"+d+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=j||0,e.download_img_cnt=f||0,e.download_cdn_img_cnt=v||0,
e.img_cnt=h||0;
},O=window.appmsgstat||{},E=window.logs.img||{},x=window.logs.pagetime||{},D=E.load||{},k=E.read||{},S=[],I=[],N=0,B=0,M=0;
for(var H in k)H&&0==H.indexOf("http")&&k.hasOwnProperty(H)&&I.push(H);
for(var H in D)H&&0==H.indexOf("http")&&D.hasOwnProperty(H)&&S.push(H);
for(var A=0,P=S.length;P>A;++A){
var q=S[A];
q&&q.isCDN()&&(-1!=q.indexOf("/0")&&N++,-1!=q.indexOf("/640")&&B++,-1!=q.indexOf("/300")&&M++);
}
var e={
__biz:biz,
title:p.title,
mid:mid,
idx:idx,
subscene:window.subscene||0,
read_cnt:O.read_num||0,
like_cnt:O.like_num||0,
screen_width:a,
screen_height:n,
screen_num:r,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:p.video_cnt,
read_screen_num:l||0,
is_finished_read:T,
scene:source,
content_len:y.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
img_640_cnt:B,
img_0_cnt:N,
img_300_cnt:M,
wtime:x.onload_time||0,
ftime:x.ftime||0,
ptime:x.ptime||0,
onload_time:x.onload_time||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0,
outer_pic:window.logs.outer_pic||0,
publish_time:window.ct,
item_show_type:p.item_show_type
};
if(window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=S.length,
e.wifi_read_imgs_cnt=I.length),window.logs.webplog&&4==window.logs.webplog.total){
var R=window.logs.webplog;
e.webp_total=1,e.webp_lossy=R.lossy,e.webp_lossless=R.lossless,e.webp_alpha=R.alpha,
e.webp_animation=R.animation;
}
if(e.copyright_stat=window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.__addIdKeyReport&&window.moon&&(moon.hit_num>0&&moon.hit_num<1e3&&window.__addIdKeyReport(27613,30,moon.hit_num),
moon.mod_num>0&&moon.mod_num<1e3&&window.__addIdKeyReport(27613,31,moon.mod_num)),
window.logs.idkeys){
var Y=window.logs.idkeys,J=[];
for(var K in Y)if(Y.hasOwnProperty(K)){
var C=Y[K];
C.val>0&&J.push(K+"_"+C.val);
}
e.idkey=J.join(";");
}
z(!!g&&g.getElementsByTagName("img")),z(w);
var W=(new Date).getDay(),L=i();
return(b||0!==user_uin&&Math.floor(user_uin/100)%7==W)&&(e.domain_list=L),b&&(e.html_content=c),
window.isSg&&(e.from="sougou"),e.source=window.friend_read_source||"",e.req_id=window.req_id||"",
e.recommend_version=window.friend_read_version||"",e.class_id=window.friend_read_class_id||"",
e;
}
function d(e){
T||(T=!0,h.remove("page_time"),e.report_time=parseInt(+new Date/1e3),e.ascene=window.ascene||-1,
w({
url:"/mp/appmsgreport?action=page_time",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
}));
}
function s(){
if(window._adRenderData&&"undefined"!=typeof JSON&&JSON.stringify){
var e=JSON.stringify(window._adRenderData),t=+new Date,o=[biz,sn,mid,idx].join("_"),n=new g("ad");
n.set(o,{
info:e,
time:t
},+new Date+24e4);
}
u.set(o,O,+new Date+72e5);
}
function r(){
return window.__video_report_data;
}
function _(e){
e&&e.play_type&&(f.remove("spad"),e.report_type=1,w({
url:"/mp/ad_video_report?action=video_play_report",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
}));
}
e("biz_common/utils/string/html.js");
var m=e("biz_common/dom/event.js"),w=e("biz_wap/utils/ajax.js"),l=(e("biz_common/utils/cookie.js"),
e("biz_common/utils/http.js"));
e("appmsg/cdn_img_lib.js");
var c,g=e("biz_wap/utils/storage.js"),p={
js_cmt_area:null,
js_content:null,
screen_height:document.documentElement.clientHeight||window.innerHeight,
screen_width:document.documentElement.clientWidth||window.innerWidth,
scroll_height:document.body.scrollHeight||document.body.offsetHeight,
pageEndTop:0,
imgs:[],
media:null,
title:"",
video_cnt:0,
item_show_type:0
},u=new g("page_pos"),h=new g("time_on_page"),f=new g("spad"),y={},v={},b=!1,j=["wap.zjtoolbar.10086.cn","125.88.113.247","115.239.136.61","134.224.117.240","hm.baidu.com","c.cnzz.com","w.cnzz.com","124.232.136.164","img.100msh.net","10.233.12.76","wifi.witown.com","211.137.132.89","qiao.baidu.com","baike.baidu.com"],T=!1,z=null,O=0,E=[biz,sn,mid,idx].join("_");
return{
init:t
};
});define("appmsg/cdn_speed_report.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function i(){
function e(e){
var i=[];
for(var n in e)i.push(n+"="+encodeURIComponent(e[n]||""));
return i.join("&");
}
if(networkType){
var i=window.performance||window.msPerformance||window.webkitPerformance;
if(i&&"undefined"!=typeof i.getEntries){
var n,t,a=100,o=document.getElementsByTagName("img"),s=o.length,p=navigator.userAgent,m=!1;
/micromessenger\/(\d+\.\d+)/i.test(p),t=RegExp.$1;
for(var g=0,w=o.length;w>g;g++)if(n=parseInt(100*Math.random()),!(n>a)){
var d=o[g].getAttribute("src");
if(d&&!(d.indexOf("mp.weixin.qq.com")>=0)){
for(var f,u=i.getEntries(),c=0;c<u.length;c++)if(f=u[c],f.name==d){
var _=o[g].getAttribute("data-fail");
r({
type:"POST",
url:"/mp/appmsgpicreport?__biz="+biz+"#wechat_redirect",
data:e({
rnd:Math.random(),
uin:uin,
version:version,
client_version:t,
device:navigator.userAgent,
time_stamp:parseInt(+new Date/1e3),
url:d,
img_size:o[g].fileSize||0,
user_agent:navigator.userAgent,
net_type:networkType,
appmsg_id:window.appmsgid||"",
sample:s>100?100:s,
delay_time:parseInt(f.duration),
from:window.isSg?"sougou":"",
fail:_
})
}),m=!0;
break;
}
if(m)break;
}
}
}
}
}
var n=e("biz_common/dom/event.js"),t=e("biz_wap/jsapi/core.js"),r=e("biz_wap/utils/ajax.js"),a={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
t.invoke("getNetworkType",{},function(e){
networkType=a[e.err_msg],i();
}),n.on(window,"load",i,!1);
});define("appmsg/wxtopic.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_common/dom/event.js","appmsg/topic_tpl.html.js"],function(t){
"use strict";
function e(t){
t.parentNode.removeChild(t);
}
function i(t,e){
var i=c;
e.img_url||(e.img_url=topic_default_img);
for(var o in e){
var a=new RegExp("{"+o+"}","g");
i=i.replace(a,e[o]);
}
var p=document.createElement("span");
p.className="db topic_area",p.innerHTML=i,t.parentNode.insertBefore(p,t),t.parentNode.removeChild(t),
r.tap(p,function(){
var e=location.protocol+"//mp.weixin.qq.com/mp/topic?action=topic_detail_page&topic_id="+t.getAttribute("data-topic-id")+"&topic_type="+t.getAttribute("data-topic-type")+"&sn="+t.getAttribute("data-topic-sn")+"&scene=101#wechat_redirect";
n.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t&&-1!==t.err_msg.indexOf(":ok")||(location.href=e);
});
});
}
function o(t){
var o={
topic_id:t.getAttribute("data-topic-id"),
topic_type:t.getAttribute("data-topic-type"),
sn:t.getAttribute("data-topic-sn"),
biz:biz
};
p({
url:"/mp/topic?action=get_topic_info",
type:"post",
data:o,
success:function(o){
if(console.log(o),o=JSON.parse(o),0!=o.base_resp.ret)return void e(t);
var a={
title:o.title,
author:o.author||(o.leading_actor?o.leading_actor.replace(/\$\$/g," / "):"-"),
img_url:o.img_url,
msg_num:o.msg_num
};
i(t,a);
},
error:function(){
e(t);
}
});
}
function a(){
var t=document.getElementsByTagName("wxtopic");
t[0]&&o(t[0]);
}
var p=t("biz_wap/utils/ajax.js"),n=t("biz_wap/jsapi/core.js"),r=t("biz_common/dom/event.js"),c=t("appmsg/topic_tpl.html.js");
a();
});define("appmsg/new_index.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
var n=e("biz_common/dom/event.js"),s=e("biz_wap/jsapi/core.js"),t=document.getElementById("js_new_appmsg_addcontact");
n.tap(t,function(){
return s.invoke("addContact",{
webtype:"1",
username:user_name_new||user_name
},function(e){
(-1!=e.err_msg.indexOf("ok")||-1!=e.err_msg.indexOf("added"))&&(t.style.display="none");
}),!1;
});
});define("appmsg/weapp.js",["biz_common/utils/string/html.js","pages/weapp_tpl.html.js","biz_wap/utils/ajax.js","biz_common/dom/event.js","biz_common/tmpl.js","biz_common/dom/class.js","appmsg/weapp_common.js"],function(e){
"use strict";
function t(e,t,n){
var i=new Image;
i.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=106&content="+n+",biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(t.toString())+"&r="+Math.random()).substr(0,1024),
console&&t&&console.error(t);
}
function n(e,t,n,i,a,o,p){
s({
url:"/mp/appmsgreport?action=appmsg_weapp_report",
data:{
__biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
weapp_appid:e||"",
weapp_pos:t||0,
weapp_title:i||0,
weapp_nickname:n||0,
type:a||0,
scene:window.source||-1,
weapp_type:o,
is_confirm:p||0,
ascene:window.ascene||-1
},
type:"POST",
dataType:"json",
async:!0,
success:function(){}
});
}
function i(){
var e=m("js_content");
if(!e)return!1;
w=e.getElementsByTagName("mp-weapp")||[],f=e.getElementsByTagName("mp-miniprogram")||[],
h=[];
for(var t=e.getElementsByTagName("a"),n=0,i=t.length;i>n;n++){
var a=t[n],o=a.getAttribute("data-miniprogram-appid");
o&&h.push(a);
}
return w.length<=0&&f.length<=0&&0==h.length?!1:j&&0!=j.length?!0:!1;
}
function a(e){
return e=e||"",e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}
function o(e,t,i,a,o){
n(e,t,i,a,4,o),window.__addIdKeyReport&&window.__addIdKeyReport("28307",103);
}
function p(e,t,i,a,o){
n(e,t,i,a,5,o);
}
function r(){
window.reportWeappid=[];
for(var e=0;e<j.length;e++)window.reportWeappid.push(j[e].appid);
var i=function(){};
c.on(document.getElementById("js_minipro_dialog_ok"),"click",function(){
i&&i(),document.getElementById("js_minipro_dialog").style.display="none";
}),c.on(document.getElementById("js_minipro_dialog_cancel"),"click",function(){
var e=document.getElementById("js_minipro_dialog");
e.style.display="none",n(e._appid,e._i,e._nickname,e._title,3,1,1),window.__addIdKeyReport&&window.__addIdKeyReport("28307",116);
}),u.getAppidInfo({
onSuccess:function(r){
var d=r.data.infoMap;
if(d){
for(e=0;e<b.length;e++)(function(e){
var r=b[e].appid,m=b[e].path,s=b[e].imageUrl,w=b[e].title,f=b[e].elem,h=d[r];
if(h){
var y=f.tagName.toLowerCase(),j=f.firstChild&&1==f.firstChild.nodeType&&"IMG"===f.firstChild.tagName;
if(j=j||f.firstElementChild&&"IMG"===f.firstElementChild.tagName,"a"!=y)f.innerHTML=_.tmpl(l,{
imageUrl:a(s),
title:a(w),
nickname:a(h.nickname),
avatar:a(h.logo_url)
});else{
if(j){
var I=f.firstChild;
I&&g.addClass(f,"weapp_image_link");
}else g.addClass(f,"weapp_text_link");
f.href="javascript:void(0);";
}
c.on(f,"a"==y?"click":"tap",function(){
if(i=function(){
var i=j?1:"a"==y?2:0;
return u.jumpUrl({
sceneNote:encodeURIComponent(location.href),
appid:r,
path:m,
scene:1058,
beforeNonWechatWarn:function(){
p(r,e,h.nickname,w,i);
},
beforeJumpBackupPage:function(){
o(r,e,h.nickname,w,i);
},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",102),
t(107,new Error(e.err_msg),"");
}
}),window.__addIdKeyReport&&window.__addIdKeyReport("28307",100),n(r,e,h.nickname,w,3,i,j?2:0),
j&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",115),!1;
},j&&wxa_img_alert){
document.getElementById("js_minipro_dialog_name").innerText=h.nickname;
var a=document.getElementById("js_minipro_dialog");
return a.style.display="block",a._appid=r,a._i=e,a._nickname=h.nickname,a._title=w,
n(r,e,h.nickname,w,3,1,0),u.canJumpOnTap&&window.__addIdKeyReport&&window.__addIdKeyReport("28307",114),
!1;
}
return i();
},"a"==y);
}
})(e);
var m=null,s=function(){
m=null;
for(var e=window.innerHeight||document.documentElement.clientHeight,t=0;t<I.length;t++){
var i=I[t].elem,a=i.tagName.toLowerCase(),o=i.firstChild&&1==i.firstChild.nodeType,p=o?1:"a"==a?2:0,r=I[t].elem.getBoundingClientRect();
r.top<e&&r.bottom>0&&(setTimeout(function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307",101);
},0),n(I[t].appid,t,d[I[t].appid].nickname,I[t].title,2,p),I.splice(t--,1));
}
};
s(),c.on(window,"scroll",function(){
m||(m=setTimeout(s,100));
});
}
},
onError:function(e){
3==e.code&&t(106,e.catchErr,"parsing weapp info error");
}
});
}
function d(){
for(var e=0;e<f.length+w.length;e++){
var t=e<f.length,n=t?f[e]:w[e-f.length],i=n.getAttribute(t?"data-miniprogram-appid":"data-weapp-appid")||"",a=n.getAttribute(t?"data-miniprogram-path":"data-weapp-path")||"",o=n.getAttribute(t?"data-miniprogram-imageUrl":"data-weapp-imageUrl")||"",p=n.getAttribute(t?"data-miniprogram-title":"data-weapp-title")||"",r=document.createElement("span");
n.setAttribute("class",""),r.setAttribute("class","weapp_display_element js_weapp_display_element"),
b.push({
appid:i,
path:a,
imageUrl:o,
title:p,
elem:r
}),I.push({
appid:i,
elem:r,
title:p
}),n.parentNode.insertBefore(r,n.nextSibling);
}
for(var e=0;e<h.length;e++){
var d=h[e];
b.push({
appid:d.getAttribute("data-miniprogram-appid"),
path:d.getAttribute("data-miniprogram-path")||"",
elem:d
});
}
}
function m(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var l=e("pages/weapp_tpl.html.js"),s=e("biz_wap/utils/ajax.js"),c=e("biz_common/dom/event.js"),_=e("biz_common/tmpl.js"),g=e("biz_common/dom/class.js"),u=e("appmsg/weapp_common.js"),w=null,f=null,h=null,y={},b=[],j=u.appidSnInfo,I=[];
return i()?(d(),r(),y):void 0;
});define("appmsg/weproduct.js",["appmsg/weapp_common.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/url/parse.js","biz_common/utils/monitor.js"],function(e){
"use strict";
function t(){
if("function"==typeof document.getElementsByClassName){
var e=document.getElementsByClassName("js_product_container");
e&&e.length>0&&r.getAppidInfo({
onSuccess:function(t){
l.data=t.data,n(e);
}
}),a();
}
}
function n(e){
for(var t=0,n=e.length;n>t;t++)!function(e,t){
c.on(e,"tap",".js_product_loop_content",function(e){
var n=e.delegatedTarget,o=n.getAttribute("data-wxaappid"),a=n.getAttribute("data-wxapath"),c=n.getAttribute("data-pid");
return r.jumpUrl({
appid:o,
path:a,
scene:1091,
sceneNote:encodeURIComponent(location.href)+":"+encodeURIComponent(c),
beforeNonWechatWarn:function(){},
beforeJumpBackupPage:function(){},
onJsapiCallback:function(e){
"openWeApp:ok"===e.err_msg&&c&&i([{
wxa_appid:o,
pid:c,
type:2,
absolute_order:t+1,
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}]);
}
}),!1;
});
}(e[t],t);
var a=document.getElementsByClassName("js_product_loop_content");
if(a&&a.length>0&&l.innerHeight){
for(var t=0;t<a.length;t++)l.pvele.push(a[t]);
o(),c.on(window,"scroll",o);
}
}
function o(){
l.checkInScreenId&&clearTimeout(l.checkInScreenId),l.checkInScreenId=setTimeout(function(){
l.checkInScreenId=null;
for(var e=[],t=0;t<l.pvele.length;t++){
var n=l.pvele[t],a=n.getBoundingClientRect(),r=a.rect||a.bottom-a.top;
if(r>0&&a.top<l.innerHeight-r/2&&a.bottom>r/2){
var d=n.getAttribute("data-pid");
d&&e.push({
wxa_appid:n.getAttribute("data-wxaappid"),
pid:d,
type:1,
absolute_order:t+1,
templateid:n.getAttribute("data-templateid")||"",
relative_order:1*n.getAttribute("data-order"),
packid:n.getAttribute("data-packid")||""
}),l.pvele.splice(t--,1);
}
}
i(e),0==l.pvele.length&&(c.off(window,"scroll",o),o=null);
},100);
}
function a(){
setTimeout(function(){
var e=document.getElementsByClassName("js_product_loop_content").length,t=document.getElementsByClassName("js_product_err_container").length;
u.setSum("64469","15",e+t),u.setSum("64469","16",e),u.setSum("64469","18",t),u.send();
},0);
}
function i(e){
if(e&&0!=e.length){
for(var t={
batch_no:p.getQuery("batch_no")||"",
bizuin:window.biz||"",
biz:window.biz||"",
mid:window.mid||"",
idx:window.idx||"",
uin:window.user_uin||"",
total:e.length
},n=0;n<e.length;n++){
var o=e[n],a=n+1;
for(var i in o)o.hasOwnProperty(i)&&(t[i+""+a]=o[i]);
}
d({
url:"/mp/productreport?",
type:"POST",
data:t,
dataType:"json",
async:!0
});
}
}
var r=e("appmsg/weapp_common.js"),c=e("biz_common/dom/event.js"),d=e("biz_wap/utils/ajax.js"),p=e("biz_common/utils/url/parse.js"),u=e("biz_common/utils/monitor.js"),l={
pvele:[],
innerHeight:window.innerHeight||document.documentElement.clientHeight,
checkInScreenId:null,
reportRandom:Math.random()
};
t();
});define("appmsg/voicemsg.js",["biz_wap/jsapi/core.js","biz_common/dom/event.js","biz_common/dom/class.js"],function(e){
"use strict";
function o(e){
return document.getElementById(e);
}
function i(){
"1"==window.show_msg_voice&&(s.invoke("getBackgroundAudioState",{},function(e){
console.log("voicemsg getBackgroundAudioState res",e);
var i="waiting"==e.playState||"seeked"==e.playState||"seeking"==e.playState||"play"==e.playState;
e.paused=1*e.paused,e&&!e.paused&&i&&e.src&&e.src.indexOf("/mp/msgvoice?action=get_voice")>=0?a||(o("js_msgvoice_reading").style.display="",
o("js_msgvoice_reading_title").innerHTML=e.title,console.log("hello msgvoice reading"),
n.on(o("js_msgvoice_reading"),"click",function(){
location.href=e.musicbar_url||"https://mp.weixin.qq.com/mp/msgvoice?action=ttspage&__biz="+window.biz+"&mid="+window.mid+"&idx="+window.idx+"&sn="+window.sn+"#wechat_redirect";
}),c.addClass(o("page-content"),"voice"),console.log("add class voice in page-content"),
a=!0):(a=!1,o("js_msgvoice_reading").style.display="none",c.removeClass(o("page-content"),"voice"),
console.log("removeClass done"));
}),console.log("begin to getBackgroundAudioState in show_msg_voice"),setTimeout(function(){
i(),4>=d&&(d++,t+=1e3);
},t)),console.log("show_msg_voice is",window.show_msg_voice);
}
var s=e("biz_wap/jsapi/core.js"),n=e("biz_common/dom/event.js"),c=e("biz_common/dom/class.js"),t=1e3,a=!1,d=0;
i();
});define("appmsg/autoread.js",["biz_common/utils/string/html.js","biz_common/dom/event.js","pages/voice_tpl.html.js","pages/voice_component.js","biz_wap/utils/ajax.js"],function(e){
"use strict";
function i(){
var e=d("autoread");
e&&(e.innerHTML='<p><label>朗读类型：</label>                                <select id="autoreadSelect">                                <option selected="true" value="0">女1</option>                                <option value="1">女2</option>                                <option value="2">男1</option>                                <option value="6">男2</option>                                </select></p><p id="autoread_voice"></p>',
r.on(d("autoreadSelect"),"change",function(){
p.player&&(p.player.destory(),p.player=null),p.checkAudioId&&(clearTimeout(p.checkAudioId),
p.checkAudioId=null);
var e=d("autoreadSelect");
d("autoread_voice").innerHTML="",o(e.value);
}),o(0));
}
function o(e){
var i=d("autoread_voice");
p._oMusic={
voiceid:p.voiceid,
duration_str:"",
posIndex:p.posIndex,
title:"文章朗读体验（"+p.voiceType[e||0]+"）",
nickname:window.nickname||"公众号"
},s.renderPlayer(u,p._oMusic,i,!0),d("voice_author_"+p.key).innerHTML="来自"+p._oMusic.nickname+"（创建音频中）",
c(e);
}
function n(e,i){
var o=p._oMusic;
d("voice_author_"+p.key).innerHTML="来自"+o.nickname,d("voice_duration_"+p.key).innerHTML=s.formatTime(1*i),
p.player=s.init({
protocal:"hls",
wxIndex:o.posIndex,
type:2,
songId:e,
src:a("https://mp.weixin.qq.com/mp/msgvoice?action=get_voice&media="+e),
allowPause:!0,
autoPlay:!0,
duration:i,
title:o.title,
singer:o.nickname?o.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"share_audio_playing",
playCssDom:d("voice_main_"+p.key),
playArea:d("voice_play_"+p.key),
progress:d("voice_progress_"+p.key),
fileSize:o.fileSize,
playtimeDom:d("voice_playtime_"+p.key),
bufferDom:d("voice_buffer_"+p.key),
playdotDom:d("voice_playdot_"+p.key),
seekRange:d("voice_seekRange_"+p.key),
seekContainer:d("voice_main_"+p.key),
loadingDom:d("voice_loading_"+p.key)
});
}
function t(e){
p.curNum+=1;
var i=1e3;
p.curNum>p.maxNum&&(i=2e3);
var o=["/mp/msgvoice?action=get_media&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&type=",e||0].join("");
m({
url:o,
type:"GET",
dataType:"json",
async:!0,
success:function(o){
o.mediaid&&o.duration?n(o.mediaid,o.duration):p.checkAudioId=setTimeout(function(){
t(e);
},i);
},
error:function(){
p.checkAudioId=setTimeout(function(){
t(e);
},i);
}
});
}
function a(e){
return e+=["&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&uin=",window.uin||"","&key=",window.key||"","&pass_ticket=",window.pass_ticket||"","&clientversion=",window.clientversion||"","&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||""].join("");
}
function c(e){
p.curNum=0;
var i=["/mp/msgvoice?action=tts&mid=",window.mid||"","&idx=",window.idx||"","&biz=",window.biz||"","&type=",e||0].join("");
m({
url:i,
type:"GET",
dataType:"json",
async:!0,
success:function(i){
i&&i.base_resp&&0==i.base_resp.ret?t(e):d("voice_author_"+p.key).innerHTML="来自"+window.nickname+"（失败）";
},
error:function(){
d("voice_author_"+p.key).innerHTML="来自"+window.nickname+"（失败）";
}
});
}
function d(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var r=e("biz_common/dom/event.js"),u=e("pages/voice_tpl.html.js"),s=e("pages/voice_component.js"),m=e("biz_wap/utils/ajax.js"),p={
checkId:"",
voiceid:"autoread",
posIndex:0,
key:"autoread_0",
voiceType:{
0:"女1",
1:"女2",
2:"男1",
6:"男2"
},
maxNum:5,
curNum:0
};
i();
});define("appmsg/voice.js",["biz_common/utils/string/html.js","pages/voice_tpl.html.js","appmsg/log.js","pages/voice_component.js"],function(e){
"use strict";
function i(){
var e=a("js_content");
return e?(p._oElements=e.getElementsByTagName("mpvoice")||[],p._oElements.length<=0?!1:!0):!1;
}
function o(){
p.musicLen=p._oElements.length;
}
function n(){
for(var e=0,i=0;i<p.musicLen;i++){
var o=p._oElements[i],n={},c=o.getAttribute("voice_encode_fileid")||"";
try{
c=decodeURIComponent(c);
}catch(a){}
n.voiceid=r.encodeStr(c),n.voiceid=n.voiceid.replace(/&#61;/g,"=").replace(/^\s/,"").replace(/\s$/,""),
n.isaac=1*o.getAttribute("isaac2")||0,n.src=p.srcRoot.replace("#meidaid#",n.voiceid),
1===n.isaac&&(n.jsapi2Src=n.src+"&voice_type=1"),n.voiceid&&"undefined"!=n.voiceid&&(t(o,n,e),
e++);
}
}
function t(e,i,o){
i.duration=parseInt((1*e.getAttribute("play_length")||0)/1e3,10),i.duration_str=r.formatTime(i.duration),
i.posIndex=o;
var n=e.getAttribute("name")||"";
try{
n=decodeURIComponent(n);
}catch(t){}
i.title=r.encodeStr(n).replace(/^\s/,"").replace(/\s$/,""),i.fileSize=1*e.getAttribute("high_size")||0,
i.nickname=window.nickname,r.renderPlayer(d,i,e),c(i),p.musicList[i.voiceid+"_"+i.posIndex]=i;
}
function c(e){
var i=e.voiceid+"_"+e.posIndex,o="";
if(window.voice_in_appmsg&&window.voice_in_appmsg[e.voiceid]){
var n=window.voice_in_appmsg[e.voiceid],t=window.biz||"",c=window.mid||"",d=window.idx||"";
n.bizuin&&n.appmsgid&&n.idx&&(t=n.bizuin,c=n.appmsgid,d=n.idx);
var p=window.location.protocol||"https:";
o=p+"//mp.weixin.qq.com/mp/audio?_wxindex_=#_wxindex_#&scene=104&__biz=#biz#&mid=#mid#&idx=#idx#&voice_id=#voice_id#&sn=#sn##wechat_redirect".replace("#_wxindex_#",e.posIndex).replace("#biz#",t).replace("#mid#",c).replace("#idx#",d).replace("#voice_id#",e.voiceid).replace("#sn#",n.sn||"");
}
s("[Voice] init"+o);
var m=r.decodeStr(e.title);
e.player=r.init({
wxIndex:e.posIndex,
type:2,
songId:e.voiceid,
comment_id:"",
src:e.src,
jsapi2Src:e.jsapi2Src,
allowPause:!0,
duration:e.duration,
title:m,
singer:window.nickname?window.nickname+"的语音":"公众号语音",
epname:"来自文章",
coverImgUrl:window.__appmsgCgiData.hd_head_img,
playingCss:"share_audio_playing",
playCssDom:a("voice_main_"+i),
playArea:a("voice_play_"+i),
progress:a("voice_progress_"+i),
fileSize:e.fileSize,
playtimeDom:a("voice_playtime_"+i),
bufferDom:a("voice_buffer_"+i),
playdotDom:a("voice_playdot_"+i),
seekRange:a("voice_seekRange_"+i),
seekContainer:a("voice_main_"+i),
loadingDom:a("voice_loading_"+i),
detailArea:o?a("voice_detail_"+i):"",
detailUrl:o,
webUrl:o
});
}
function a(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js");
var d=e("pages/voice_tpl.html.js"),s=e("appmsg/log.js"),r=e("pages/voice_component.js"),p={
musicList:{},
musicLen:0,
srcRoot:location.protocol+"//res.wx.qq.com/voice/getvoice?mediaid=#meidaid#"
};
return i()?(o(),n(),p.musicList):void 0;
});