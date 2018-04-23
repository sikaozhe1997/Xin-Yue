define("a/app_card.js",["biz_common/dom/event.js","biz_common/dom/class.js","a/a_report.js","biz_wap/utils/position.js","biz_common/utils/report.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","a/appdialog_confirm.js","biz_common/utils/url/parse.js"],function(a,t,n,e){
"use strict";
function o(a){
h("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+a+H.report_param);
}
function d(a,t){
if(H.app_status=a,"downloading"==a){
t=t||0,console.log(t);
var n="";
if(document.getElementById("js_appdetail_action_0")&&(z=document.getElementById("js_appdetail_action_0").offsetWidth,
D=document.getElementById("js_appdetail_action_0").offsetHeight,console.log("btn_width: ",z)),
104==H.data.pt?n='<i class="btn_processor" style="width:'+t+'%;"></i><span class="btn_processor_value js_btn_process">暂停('+t+"%)</span>":113==H.data.pt||114==H.data.pt?H.btn.innerHTML.indexOf("继续")>-1?(n=H.btn.innerHTML,
n=n.replace("继续","暂停")):n='<i class="btn_processor" style="width:'+t+'%;"></i><span class="btn_processor_value js_btn_process">暂停</span>':122==H.data.pt?(H.btn.innerHTML.indexOf("继续")>-1?(n=H.btn.innerHTML,
n=n.replace(/继续/g,"暂停")):0==C?n='<span class="btn_progress_inner js_btn_process" id="percent_btn_1" style="width:'+t+'%;"><span id="percent_btn_2" class="btn_progress_bd js_btn_process" style="width:'+z+'px;">暂停</span></span>暂停':document.getElementById("percent_btn_1").style.width=t+"%",
C=t):1==H.data.use_new_protocol?(z=H.btn.offsetWidth,D=H.btn.offsetHeight,H.btn.innerHTML.indexOf("继续")>-1?(n=H.btn.innerHTML,
n=n.replace(/继续/g,"暂停")):0==C?n='<span class="btn_progress_inner js_btn_process" id="percent_btn_1" style="width:'+t+'%;"><span id="percent_btn_2" class="btn_progress_bd js_btn_process" style="width:'+z+"px; line-height: "+D+'px">暂停下载</span></span>暂停下载':document.getElementById("percent_btn_1").style.width=t+"%",
C=t):n='<i class="btn_processor" style="width:'+t+'%;"></i><span class="btn_processor_value js_btn_process">'+t+"%</span>",
console.log(H.btn.innerHTML),!n)return;
H.btn.innerHTML=n,122==H.data.pt||1==H.data.use_new_protocol?w.addClass(H.btn,"btn_progress"):w.addClass(H.btn,"with_processor");
}else if("paused"==a){
var n="";
104==H.data.pt||113==H.data.pt||114==H.data.pt||122==H.data.pt||1==H.data.use_new_protocol?(n=H.btn.innerHTML,
n=n.replace(/暂停/g,"继续"),H.btn.innerHTML=n):(w.removeClass(H.btn,"with_processor"),
w.removeClass(H.btn,"btn_progress"),H.btn.innerHTML=x[a]);
}else w.removeClass(H.btn,"with_processor"),w.removeClass(H.btn,"btn_progress"),
H.btn.innerHTML=x[a],1==H.data.use_new_protocol&&"gotodetail"==a&&(H.btn.innerHTML="进入应用");
}
function s(a){
var t=a.js_app_rating,n=1*H.data.app_rating;
n>5&&(n=5),0>n&&(n=0);
var e=["","one","two","three","four","five"],o="",d=Math.floor(n);
if(o="star_"+e[d],n>d&&(n=d+.5,o+="_half"),t&&n>0){
var s=t.getElementsByClassName("js_stars"),i=t.getElementsByClassName("js_scores");
s&&i&&s[0]&&i[0]&&(s=s[0],i=i[0],s.style.display="inline-block",w.addClass(s,o));
}
}
function i(a){
"undefined"!=typeof v&&v.log&&v.log(a);
}
function l(){
v.on("wxdownload:progress_change",function(a){
a.download_id==H.download_id&&d("downloading",a.progress);
});
}
function r(){
H.download_id&&v.invoke("queryDownloadTask",{
download_id:H.download_id
},function(a){
if(i("queryDownloadTask : "+a.state+"; dowloadid = "+H.download_id),a&&a.state){
if("download_succ"==a.state&&(d("downloaded"),window.clearInterval(H.clock)),"downloading"==a.state)return;
("download_fail"==a.state||"default"==a.state)&&(window.clearInterval(H.clock),window.clearInterval(H.install_clock),
e("下载失败"),d("download"));
}
});
}
function p(){
v.invoke("getInstallState",{
packageName:H.data.pkgname,
download_id:H.download_id
},function(a){
var t=a.err_msg;
t.indexOf("get_install_state:yes")>-1&&(i("getInstallState @app, version : "+t),
window.clearInterval(H.install_clock),d(H.url_scheme?"gotodetail":"installed"));
});
}
function c(){
v.invoke("pauseDownloadTask",{
packageName:H.data.pkgname,
download_id:H.download_id
},function(a){
a.err_msg.indexOf("pause_download_task:ok")>-1&&d("paused");
});
}
function _(){
v.invoke("resumeDownloadTask",{
packageName:H.data.pkgname,
download_id:H.download_id
},function(a){
a.err_msg.indexOf("ok")>-1&&d("downloading");
});
}
function m(){
if(104==H.data.pt||113==H.data.pt||114==H.data.pt||122==H.data.pt||1==H.data.use_new_protocol&&12==H.data.product_type&&H.url_scheme)j.gtVersion("6.5.6",!0)?v.invoke("launchApplication",{
schemeUrl:H.url_scheme
},function(a){
-1==a.err_msg.indexOf("ok")&&(location.href=H.url_scheme);
}):location.href=H.url_scheme;else{
var t=H.data.url,n=a("biz_common/utils/url/parse.js");
(!t||0!=t.indexOf("http://mp.weixin.qq.com/tp/")&&0!=t.indexOf("https://mp.weixin.qq.com/tp/"))&&(t="http://mp.weixin.qq.com/mp/ad_app_info?t=ad/app_detail&app_id="+H.data.app_id+(H.appdetail_params||"")+"&channel_id="+H.channelid+"&md5sum="+H.data.md5sum+"#wechat_redirect"),
H.url_scheme&&(t=n.join(t,{
is_installed:"1"
})),location.href=t;
}
}
function u(a){
if(H.btn=a.btn,!H.btn)return!1;
H.data=a.adData,H.url_scheme=a.url_scheme,H.appdetail_params=a.appdetail_params||"";
var t={};
H.channelid=H.data.channel_id||"",H.report_param=a.report_param;
var n=20;
if(("103"==H.data.pt||"104"==H.data.pt)&&s(a),"104"==H.data.pt||"113"==H.data.pt||"114"==H.data.pt||"122"==H.data.pt||1==H.data.use_new_protocol&&12==H.data.product_type){
var u=H.data.androiddownurl;
if(u&&u.match){
var w=/&channelid\=([^&]*)/,g=u.match(w);
g&&g[1]&&(H.channelid=g[1],H.data.androiddownurl=u.replace(w,""));
}
H.channelid&&(H.channelid="&channelid="+H.channelid),a.via&&(H.via=["&via=ANDROIDWX.YYB.WX.ADVERTISE",a.via].join("."));
}
v.ready(function(){
console.log("appcard info",H.btn.id),console.log(H),("113"==H.data.pt||"114"==H.data.pt||"104"==H.data.pt||"122"==H.data.pt||1==H.data.use_new_protocol&&12==H.data.product_type)&&(v.invoke("getInstallState",{
packageName:T
},function(a){
var t=a.err_msg;
i("getInstallState @yingyongbao : "+t);
var n=t.lastIndexOf("_")+1,e=t.substring(n);
1*e>=O&&t.indexOf("get_install_state:yes")>-1&&(I=!0);
}),v.invoke("getInstallState",{
packageName:H.data.pkgname
},function(a){
var t=a.err_msg;
i("getInstallState @"+H.data.pkgname+" : "+t);
var n=t.lastIndexOf("_")+1,e=t.substring(n);
1*e>=H.data.versioncode&&t.indexOf("get_install_state:yes")>-1&&d(H.url_scheme?"gotodetail":"installed");
})),console.log("bind btn",H.btn.id),f.on(H.btn,"click",function(s){
if(console.log("app click",H),console.log(s.target),"installed"==H.app_status)return d("installed"),
!1;
if("gotodetail"==H.app_status)return o(74),m(),!1;
if("downloading"==H.app_status)return o(71),c(),!1;
if("paused"==H.app_status)return o(72),_(),!1;
if("downloaded"==H.app_status)return o(73),v.invoke("installDownloadTask",{
download_id:H.download_id,
file_md5:H.data.md5sum
},function(a){
var t=a.err_msg;
i("installDownloadTask : "+t),t.indexOf("install_download_task:ok")>-1?H.install_clock=setInterval(p,1e3):e("安装失败！");
}),!1;
var u=function(){
if("103"==H.data.pt||"111"==H.data.pt||"112"==H.data.pt||"121"==H.data.pt||1==H.data.use_new_protocol&&19==H.data.product_type){
o(23);
var t="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(H.data.appinfo_url)+"&ticket="+(H.data.ticket||window.ticket)+"#wechat_redirect";
H.url_scheme&&j.gtVersion("6.5.6",!0)?v.invoke("launchApplication",{
schemeUrl:H.url_scheme
},function(a){
-1==a.err_msg.indexOf("ok")&&(location.href=t);
}):v.invoke("downloadAppInternal",{
appUrl:H.data.appinfo_url
},function(a){
a.err_msg&&-1!=a.err_msg.indexOf("ok")||(location.href=t);
});
}else{
if(I)return o(16),void(location.href="tmast://download?oplist=1,2&pname="+H.data.pkgname+H.channelid+H.via);
o(15);
var s=[H.data.adid,H.data.traceid,(H.data.pkgname||"").replace(/\./g,"_"),H.data.source,n,a.engine].join("."),c=function(a,t,n){
console.log("addDownloadTask : "+a.data.appname+","+a.data.androiddownurl+","+t+","+a.data.md5sum),
v.invoke("addDownloadTaskStraight",{
task_name:a.data.appname,
task_url:a.data.androiddownurl,
extInfo:t,
file_md5:a.data.md5sum
},function(e){
var o=e.err_msg;
o.indexOf("ok")>-1?n&&n(e):v.invoke("addDownloadTask",{
task_name:a.data.appname,
task_url:a.data.androiddownurl,
extInfo:t,
file_md5:a.data.md5sum
},n);
}),a.url_scheme&&j.isAndroid&&j.gtVersion("6.5.6",!0)&&v.invoke("writeCommData",{
packageName:a.data.pkgname,
data:a.url_scheme
},function(a){
console.log(a);
});
};
console.log("addDownloadTask : "+H.data.appname+","+H.data.androiddownurl+","+s+","+H.data.md5sum),
c(H,s,function(a){
var t=a.err_msg;
i("addDownloadTask : "+t),t.indexOf("ok")>-1?(H.download_id=a.download_id,i("download_id : "+H.download_id),
d("downloading"),H.clock=setInterval(r,1e3),H.install_clock=setInterval(p,1e3),l()):e("调用下载器失败！");
});
}
},f=function(){
return j.isIOS?void u():void y({
app_name:H.data.appname,
app_img_url:H.data.icon_url,
onOk:function(){
u(),o(I?106:100);
},
onCancel:function(){
o(I?107:101);
}
});
};
if("download"==H.app_status&&H.data.rl&&H.data.traceid){
if(!t[H.data.traceid]){
t[H.data.traceid]=!0;
var w,g,h,x,T=!!s&&s.target;
T&&(w=k.getX(T,"js_ad_link")+s.offsetX,g=k.getY(T,"js_ad_link")+s.offsetY,h=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
x=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
b({
type:H.data.type,
report_type:2,
click_pos:0,
url:encodeURIComponent(H.data.androiddownurl),
tid:H.data.traceid,
rl:encodeURIComponent(H.data.rl),
__biz:biz,
pos_type:a.pos_type||0,
pt:H.data.pt,
pos_x:w,
pos_y:g,
ad_w:h||0,
ad_h:x||0
},function(){
t[H.data.traceid]=!1,f();
});
}
}else f();
return!1;
});
});
}
var f=a("biz_common/dom/event.js"),w=a("biz_common/dom/class.js"),g=a("a/a_report.js"),b=g.AdClickReport,k=a("biz_wap/utils/position.js"),h=a("biz_common/utils/report.js"),v=a("biz_wap/jsapi/core.js"),j=a("biz_wap/utils/mmversion.js"),y=a("a/appdialog_confirm.js"),x={
download:"下载",
downloading:"下载中",
paused:"继续",
downloaded:"安装",
gotodetail:"进入",
installed:"已安装"
},I=!1,T="com.tencent.android.qqdownloader",O=1060125,C=0,z=0,D=0,H={
app_status:"download",
btn:null,
download_id:0,
clock:null,
install_clock:null,
data:{},
channelid:"",
via:"",
report_param:"",
appdetail_params:""
};
return u;
});define("a/ios.js",["biz_common/dom/event.js","biz_common/utils/report.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(e){
"use strict";
function t(e){
"undefined"!=typeof WeixinJSBridge&&WeixinJSBridge.log&&WeixinJSBridge.log(e);
}
function o(e,t){
r("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+e+t.report_param);
}
function i(e){
var i=e.btn;
if(!i)return!1;
var r=e.adData,p=!1,c={};
e.report_param=e.report_param||"";
var d="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(r.appinfo_url)+"&ticket="+(e.ticket||window.ticket)+"#wechat_redirect";
n.on(i,"click",function(){
if(t("click @js_app_action"),p)return t("is_app_installed"),o(r.is_appmsg?17:13,e),
void(location.href=r.app_id+"://");
var i=function(){
t("download"),o(r.is_appmsg?15:11,e),t("go : "+d),location.href=d;
};
return t("download"),r.rl&&r.traceid?c[r.traceid]||(c[r.traceid]=!0,a({
url:"/mp/advertisement_report?report_type=2&type="+r.type+"&url="+encodeURIComponent(r.appinfo_url)+"&ascene="+encodeURIComponent(window.ascene||-1)+"&tid="+r.traceid+"&rl="+encodeURIComponent(r.rl)+"&pt="+r.pt+e.report_param,
type:"GET",
timeout:1e3,
complete:function(){
t("ready to download"),c[r.traceid]=!1,i();
},
async:!0
})):i(),!1;
});
}
{
var n=e("biz_common/dom/event.js"),r=e("biz_common/utils/report.js"),a=e("biz_wap/utils/ajax.js");
e("biz_wap/jsapi/core.js");
}
return i;
});define("a/android.js",["biz_common/dom/event.js","biz_common/utils/report.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js"],function(n,a,e,t){
"use strict";
function o(n){
"undefined"!=typeof s&&s.log&&s.log(n);
}
function i(n,a){
r("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+n+a.report_param);
}
function d(n){
function a(){
s.invoke("getInstallState",{
packageName:c.pkgname
},function(n){
var a=n.err_msg;
a.indexOf("get_install_state:yes")>-1&&(window.clearInterval(T),k=!0,d.innerHTML=x.installed);
});
}
function e(){
b&&s.invoke("queryDownloadTask",{
download_id:b
},function(a){
if(a&&a.state){
if("download_succ"==a.state){
o("download_succ"),i(c.is_appmsg?18:14,n),window.clearInterval(y),I=!1,j=!0,d.innerHTML=x.downloaded;
var e=document.createEvent("MouseEvents");
e.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),d.dispatchEvent(e);
}
if("downloading"==a.state)return;
("download_fail"==a.state||"default"==a.state)&&(o("fail, download_state : "+a.state),
window.clearInterval(y),I=!1,t("下载失败"),d.innerHTML=x.download);
}
});
}
var d=n.btn;
if(!d)return!1;
var r={},c=n.adData,m="",u="",p=c.androiddownurl;
if(p&&p.match){
var _=/&channelid\=([^&]*)/,w=p.match(_);
w&&w[1]&&(m="&channelid="+w[1],c.androiddownurl=p.replace(_,""));
}
n.via&&(u=["&via=ANDROIDWX.YYB.WX.ADVERTISE",n.via].join("."));
var f=!1,v="com.tencent.android.qqdownloader",g=1060125,k=!1,I=!1,j=!1,b=0,y=null,T=null,x={
download:"下载",
downloading:"下载中",
downloaded:"安装",
installed:"已安装"
};
d.innerHTML=x.download,s.ready(function(){
s.invoke("getInstallState",{
packageName:v
},function(n){
var a=n.err_msg;
o("getInstallState @yingyongbao : "+a);
var e=a.lastIndexOf("_")+1,t=a.substring(e);
1*t>=g&&a.indexOf("get_install_state:yes")>-1&&(f=!0);
}),s.invoke("getInstallState",{
packageName:c.pkgname
},function(n){
var a=n.err_msg;
o("getInstallState @"+c.pkgname+" : "+a);
var e=a.lastIndexOf("_")+1,t=a.substring(e);
1*t>=c.versioncode&&a.indexOf("get_install_state:yes")>-1&&(k=!0,d.innerHTML=x.installed);
}),d.addEventListener("click",function(){
if(o("click @js_app_action"),!I){
if(k)return!1;
if(j)return s.invoke("installDownloadTask",{
download_id:b,
file_md5:c.md5sum
},function(n){
var e=n.err_msg;
o("installDownloadTask : "+e),e.indexOf("install_download_task:ok")>-1?T=setInterval(a,1e3):t("安装失败！");
}),!1;
var p=function(){
return f?(i(c.is_appmsg?16:12,n),void(location.href="tmast://download?oplist=1,2&pname="+c.pkgname+m+u)):void s.invoke("addDownloadTask",{
task_name:c.appname,
task_url:c.androiddownurl,
extInfo:n.task_ext_info,
file_md5:c.md5sum
},function(a){
var r=a.err_msg;
o("addDownloadTask : "+r),r.indexOf("add_download_task:ok")>-1?(i(c.is_appmsg?15:11,n),
I=!0,b=a.download_id,o("download_id : "+b),d.innerHTML=x.downloading,y=setInterval(e,1e3)):t("调用下载器失败！");
});
};
return c.rl&&c.traceid?r[c.traceid]||(r[c.traceid]=!0,l({
url:"/mp/advertisement_report?report_type=2&type="+c.type+"&url="+encodeURIComponent(c.androiddownurl)+"&tid="+c.traceid+"&rl="+encodeURIComponent(c.rl)+"&__biz="+biz+"&ascene="+encodeURIComponent(window.ascene||-1)+"&pt="+c.pt+"&r="+Math.random(),
type:"GET",
timeout:1e3,
complete:function(){
r[c.traceid]=!1,p();
},
async:!0
})):p(),!1;
}
});
});
}
var r=(n("biz_common/dom/event.js"),n("biz_common/utils/report.js")),l=n("biz_wap/utils/ajax.js"),s=n("biz_wap/jsapi/core.js");
return d;
});define("a/profile.js",["biz_common/dom/event.js","biz_common/utils/report.js","a/a_report.js","biz_wap/utils/ajax.js","biz_common/utils/url/parse.js","biz_wap/utils/position.js","biz_wap/jsapi/core.js"],function(t){
"use strict";
function e(t,e){
a("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+e.report_param);
}
function n(t){
console.log(t),location.href=t;
}
function i(t){
var i=t.adData,s=t.pos_type||0,l={};
t.report_param=t.report_param||"",function(){
function r(t){
{
var e=_.dataset;
"https:"==top.location.protocol?1500:1200;
}
if(e.rl&&e.url&&e.type&&e.tid){
var n=e.tid,o=e.type,a=e.url,r=e.rl;
if(!l[n]){
l[n]=!0;
var d,m,u,j,b=!!t&&t.target;
b&&(d=c.getX(b,"js_ad_link")+t.offsetX,m=c.getY(b,"js_ad_link")+t.offsetY,u=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
j=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
p({
type:o,
report_type:2,
click_pos:0,
url:encodeURIComponent(a),
tid:n,
rl:encodeURIComponent(r),
__biz:biz,
pos_type:s,
pt:i.pt,
pos_x:d,
pos_y:m,
ad_w:u||0,
ad_h:j||0
},function(){
l[n]=!1,f();
});
}
}else f();
}
var _=t.btnAddContact,m=t.btnViewProfile;
if(_&&_.dataset){
var u=function(o,s){
var p=o.err_msg,r=i.is_appmsg?6:1;
-1!=p.indexOf("ok")?(m.style.display="inline-block",_.style.display="none",r=i.is_appmsg?9:4):"add_contact:added"==p?r=i.is_appmsg?7:2:"add_contact:cancel"==p?r=i.is_appmsg?8:3:(--s,
s>=0?d.invoke("addContact",{
scene:scene,
webtype:"1",
username:i.usename
},function(t){
u(t,s);
}):(p="addContact:fail|msg:"+p+"|uin:"+uin+"|biz:"+biz,a("http://mp.weixin.qq.com/mp/jsreport?key=13&content="+p+"&r="+Math.random()),
n(i.url))),e(r,t);
},f=function(){
e(i.is_appmsg?10:5,t),d.invoke("addContact",{
scene:scene,
webtype:"1",
username:i.usename
},function(t){
u(t,1);
});
};
o.on(_,"click",r);
}
}(),function(){
var e=t.btnViewProfile;
e&&o.on(e,"click",function(){
var e=t.btnAddContact.dataset,o={
source:4,
tid:e.tid,
idx:idx,
mid:mid,
appuin:biz,
pt:i.pt,
aid:t.aid,
ad_engine:t.ad_engine,
pos_type:s
},a=r.join(i.url,o);
return n(a),!1;
});
}();
}
{
var o=t("biz_common/dom/event.js"),a=t("biz_common/utils/report.js"),s=t("a/a_report.js"),p=s.AdClickReport,r=(t("biz_wap/utils/ajax.js"),
t("biz_common/utils/url/parse.js")),c=t("biz_wap/utils/position.js"),d=t("biz_wap/jsapi/core.js");
"https:"==top.location.protocol?5:0,window.__report;
}
return i;
});define("a/cpc_a_tpl.html.js",[],function(){
return'<!--有title “广告”，去掉 class appmsg_card_context。没有title “广告”，加class appmsg_card_context-->\n<div id="js_cpc_area"  class="js_ad_link  <# if(exp_obj.icon_pos != \'left\' && exp_obj.icon_pos != \'right\'){ #> appmsg_card_context <# } #> appmsg_card_active mpda_cpc_context pages_reset" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>"  data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>" data-is_cpm="<#=is_cpm#>">\n    <!--有文字 "广告"-->\n    <# if(exp_obj.icon_pos == \'left\'){ #>\n    <div class="appmsg_card_hd mpda_cpc_hd">\n      <!--"广告" 居左-->\n      <p class="mpda_cpc_title mpda_cpc_title_left">广告</p>\n    </div>\n    <# } else if(exp_obj.icon_pos == \'right\'){ #>\n    <div class="appmsg_card_hd mpda_cpc_hd">\n      <!--"广告" 居右-->\n      <p class="mpda_cpc_title mpda_cpc_title_right">广告</p>\n    </div>\n    <# } #>\n    <div class="mpda_cpc_inner">\n      <div class="appmsg_card_bd mpda_cpc_bd" style="background-image:url(<#=image_url#>)"></div>\n\n      <div class="appmsg_card_ft mpda_cpc_ft <# if(!exp_obj.price){ #> single<# } #>" style="z-index: 2;">\n          <# if(exp_obj.icon_pos == \'left\' || exp_obj.icon_pos == \'right\'){ #>\n\n          <# } else { #>\n          <span class="dropdown_opr_tips">\n              广告\n              <span class="dropdown_opr_popover"></span>\n          </span>\n          <# } #>\n          <!--title 金额-->\n\n          <# if(!!exp_obj.sale_text){ #>\n          <span class="appmsg_card_msg">\n              <span class="appmsg_card_msg_title">\n                  <#=exp_obj.sale_text#>\n              </span>\n              <# if(!!exp_obj.price){ #>\n              <span class="appmsg_card_msg_supp price">\n                  ¥<#=exp_obj.price#>\n              </span>\n              <# } #>\n          </span>\n          <# } #>\n\n\n          <# if(use_new_protocol){ #>\n          <a href="javascript:void(0);" class="appmsg_card_btn wx_min_plain_btn ba_btn btn_progress" id="js_ad_btn_<#=pos_type#>">\n              <!-- 新广告协议逻辑去掉小程序 -->\n              <#=exp_obj.btn_text#>\n          </a>    \n          <# } else { #>\n          <a href="javascript:void(0);" class="appmsg_card_btn">\n              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAAGz7rX1AAAAAXNSR0IArs4c6QAAA65JREFUSA2lVk9oVGcQ/+a9tytoSm6t5pBK9i0trdCTXlrx4EEF/1w0p+Klh9LiQcF9uy9Gu2rcfXlJUfAfth4UvPTPQVop9FCagzdBoaAI+xJjDgpCBaMbzO6+N8687Dy/Td6GRD/Iznwzv5n55vtm5kWp5VahEkyr+Gc51FJdoVJDlhpLVW0J6BqGA8AfiLgXTPPTWCc+FlNwRqc+wTB8KBZjQ/kOb7rnhO9AtOOdpnjHkyO6448/s7LZz33XPsFmUPCCMRXhUcNQmwwri61G474yYJwuZCE7tuA/CRK7KlZqJxlZPfrxA1F0pR2n0lF0MnC8yaZCNEVON3PALw78nmpU/hWz9SCYNwwojpZsX4zaqU5bItDp/MyMzXvDytxiWr7yZG39ef2ZosczTfW15frBl60W3lYA4YdWT2+hsL7OQH2Vv+2bo32PyKwwVDd4M+baSdSo1dzNsjX9/QHTxSvOiR52Pz3sb4mSovqlXIYeOq6mRP6uTOrNsTOnGhyjKx8Rx6DgqT9k96UaFL1gVxThX3QpqACHIYKdqHCrAtVMEhZPTCNUfzKlC5FqqxSqwXV63IMiYP3bpb26CEHhU+YTgzJiwgtIKOVzClEVEwOnEoT1ahA61cnvBSSUwIe4EyjpiHvJ4JqhhNi757u5SwIUSh1yYbNtW3RDcXHKMTyydgW0mA4OQiiyBQOAPhEklF484TXG4rvl63KqtY0I6m+FMEJ7ake1R8Ml7EI9VYInlMcGkVIdDdPZz8j+vWhqaazE47A/k2uEje/oyrcTfoBtANQk/d6iE/44Wsq9ED+rDuJ4tbMYqcPiYDlKc+3QaCl/cVVBnEptgppxGzumgpkDA3bQiW/rgahBDlLNX6MHin1TVj+tOEipGtghYk0cmmBs8dzcHdnrlAbGNzQwrsYyUPNSiDomlYdMJqsrIGMtmWusL3pTX6goPCtYyvhmR4vz+A8bzR8QcB+l+L9lmbsqhYH/xKAbLV981jM3O3uXiiAfRW9rXko0DiJTiT4nC354CgK8akUfPOrmWJe/np3Lk0lv3DxK3aRmOUkPfl8wFk2FX+gEgyygEnxJ7bTPL9r/CmAl1HM33iPcR92wFl8Nf1DiZZhH6BOWGgCbrXW6E2w222nr0nSeMoProsIo+plLUPZCi97kVxHihOwp5QnPtVO/RwlGY+ISbg/L85q8KwuGOueX8ke6AlIUHX1CJ+7l/0Aihfz1jEcF0Smqkn+yZvbyiNNPY2P16w2TL37yLBAjYAAAAABJRU5ErkJggg==" alt="">\n              <#=exp_obj.btn_text#>\n          </a>\n          <# } #>\n          <!--\n          <a href="javascript:void(0);" class="link_tips">\n              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAh1BMVEUAAAD19fX19fX////09PT09PT09PT09PT19fX09PT29vb29vb4+Pj////19fX09PT19fX09PR1htvJz+t6i9zS1+6wuefs7fLn6fKSn+GFlN5/j93w8fTZ3O+8xOmMmuCiruScqOOYpOLGzOvByOqrteamseWAkN7g4/De4e/N0uzM0uyAkN1rIPf0AAAAEXRSTlMAf/ML6NnTv6qlclIjFoLyg7LPVaEAAAFSSURBVDjLlZXZcoMwDEWNgRAIkPgGCEuWZu/2/99XlxYjUBgP9wUjnUGWLAsxVByFgS+lH4RRLCaVpAtFtEiTl5jrSDWSdFzOrTz1Qt5qzDlqQs4w7FJNaknDU46TLK41+kpZ9J+R69lAzyWB7cETyR35uc6qYtdXPtHghnMFWj1zY0k1uGDcUUN11QBNac5diJhx+wbZp37cgYcxxiJi4AEo2kWNkzFGImTgFti2iwsyYwxFMAm+Z+SLgfCH++vBWwbcjMMXku7ugqoDHwDeSA+Ldf9y1b5TB+rUi33vWwufZotL2YEf11IR+SSZM3A0yYwVkPI0eoOTYEgK/o2qO8GcgRE5wvMfsKuBkoExaYr8tyDH4knLQppCpOPuwmnHwHTYuF+1xrI752QyvgplftAYkzPjcs25rvYBMHOk2IfUrLFnH6QzRjNXsrEPe/vv4weFgFW8AqzRsgAAAABJRU5ErkJggg==" alt="">\n              去逛逛\n          </a>\n          -->\n        </div>\n    </div>\n</div>\n';
});define("a/sponsor_a_tpl.html.js",[],function(){
return'<div class="ct_mpda_area <#if(window.new_appmsg){#>appmsg_card_context<# } #>" id="js_ad_area">\n    <div class="ct_mpda_placeholder">\n        <p class="ct_mpda_tips">广告，也可以是生活的一部分</p>\n    </div>\n    <div class="ct_mpda_inner js_ad_link" id="js_ad_inner" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>" data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>" data-is_cpm="<#=is_cpm#>">\n        <div class="ct_mpda_hd">\n            <# if(pt==108 || pt==109 || pt==110){ #>\n            <span class="ct_mpda_main_img img_bg_cover" id="js_main_img" style="background-image:url(<#=image_url#>)"></span>\n            <# }else if(pt==116 || pt==117){ #>\n            <div id="js_video_container"></div>\n            <# }else{ #>\n            <span class="ct_mpda_main_img img_bg_cover" id="js_main_img" style="background-image:url(<#=image_url#>)"></span>\n            <# } #>\n        </div>\n        <div class="ct_mpda_bd" id="js_ad_message">\n            <span class="ct_mpda_logo img_bg_cover" style="background-image:url(<#=biz_info.head_img#>)"></span>\n            <div class="ct_mpda_desc_box">\n                <p class="ct_mpda_title"><#=biz_info.nick_name#></p>\n                <p class="ct_mpda_details" id="js_ad_detail">提供的广告</p>\n            </div>\n            <# if(dest_type== 6){ #>\n            <a class="ct_mpda_btn_more" id="js_ad_more"><i class="icon26_weapp_blue"></i>查看详情</a>\n            <# }else if(pt== 108||pt==116){ #>\n            <a class="ct_mpda_btn_more" id="js_ad_more">查看详情</a>\n            <# }else if(pt==109){ #>\n            <a class="ct_mpda_btn_more" id="js_ad_more">下载应用</a>\n            <# }else if(pt==110||pt==117){ #>\n            <a class="ct_mpda_btn_more" id="js_ad_more">了解公众号</a>\n            <# } #>\n            <a class="ct_mpda_btn_about" id="js_btn_about">关于广告</a>\n        </div>\n    </div>\n</div>\n';
});define("a/a_tpl.html.js",[],function(){
return'<div class="rich_media_extra" id="gdt_area">\n    <# if(pos_type==0){ #>\n        <#if(window.new_appmsg){#>\n        <div class="mod_title_context">\n            <strong class="mod_title">广告</strong>\n        </div>\n        <#}else{#>\n        <div class="rich_tips with_line title_tips">\n            <span class="tips">广告</span>\n        </div>\n        <# } #>\n    <# } #>\n    <div class="js_ad_link extra_link <# if(pt==107){ #>preview_img_primary<# } #>" data-type="<#=type#>" data-ticket="<#=ticket#>" data-url="<#=url#>" data-rl="<#=rl#>"  data-aid="<#=aid#>" data-pt="<#=pt#>" data-tid="<#=traceid#>" data-gid="<#=group_id#>" data-apurl="<#=apurl#>" data-is_cpm="<#=is_cpm#>">\n        <# if(!use_new_protocol){ #>\n            <# if(pt==1){ #>\n                <#=hint_txt#>\n                <img class="icon_arrow_gray" src="<%@GetResFullName($images_path$icon/common/icon_arrow_gray.png)%>">\n                <img class="icon_loading_white icon_after" style="display:none;" id="loading_<#=traceid#>" src="<%@GetResFullName($images_path$icon/common/icon_loading_white.gif)%>">\n            <# }else if(pt==2||pt==107||pt==119){ #>\n                <!--第三方logo-->\n                <# if (logo.indexOf("http://mmsns.qpic.cn/") == 0){ #>\n                    <div class="brand_logo"><img data-src="<#=logo#>" alt="logo图片" class="js_alazy_img"></div>\n                <# } #>\n                <img class="appmsg_banner js_alazy_img" data-src="<#=image_url#>">\n                <# if(watermark_type!=0){ #>\n                    <i class="promotion_tag" id="js_promotion_tag">\n                    <# if(pt==119){ #>\n                    <span class="icon26_weapp_white"></span>\n                    <# } #>\n\n                    <# if(watermark_type==1){ #>\n                        商品推广\n                    <# }else if (watermark_type==2){ #>\n                        活动推广\n                    <# }else if (watermark_type==3){ #>\n                        应用下载\n                    <# } #>\n                    </i>\n                <# } #>\n            <# }else if(pt==7||pt==120){ #>\n            <!-- 图文 -->\n            <div class="preview_group preview_card">\n                <div class="preview_group_inner card_inner">\n                    <div class="preview_group_info">\n                        <strong class="preview_group_title2"><#=hint_txt#></strong>\n                        <div class="preview_group_desc"><#=ad_desc#></div>\n                        <img data-src="<#=image_url#>" alt="" class="preview_card_avatar js_alazy_img">\n                    </div>\n                    <i class="promotion_tag">\n                        <# if(pt==120){ #>\n                        <span class="icon26_weapp_white"></span>\n                        <# } #>\n                        活动推广\n                    </i>\n                </div>\n            </div>\n            <# }else if(pt==115){ #>\n            <div class="preview_group mod_follow_with_img">\n                <div class="wx_flex_layout">\n                    <div class="wx_flex_bd">\n                        <img class="fwi_thumb js_alazy_img" data-src="<#=image_url#>" alt="">\n                    </div>\n                    <div class="wx_flex_ft">\n                        <span class="radius_avatar"><img data-src="<#=biz_info.head_img#>" alt="" class="js_alazy_img"></span>\n                        <strong class="fwi_nickname"><#=biz_info.nick_name#></strong>\n                        <a id="js_view_profile_<#=pos_type#>" <# if(biz_info.is_subscribed == 0){ #>style="display:none"<# } #> class="wx_min_plain_btn primary js_ad_btn">查看</a>\n                        <a id="js_add_contact_<#=pos_type#>" data-url="<#=url#>" data-type="<#=type#>" data-tid="<#=traceid#>" data-rl="<#=rl#>" <# if(biz_info.is_subscribed ==1){ #>style="display:none"<# } #> class="wx_min_plain_btn primary js_ad_btn">关注</a>\n                    </div>\n                </div>\n            </div>\n            <# }else if(pt==100){ #>\n            <div class="preview_group follow <# if(!!biz_info.show_comm_attention_num){ #>with_tips<# } #>">\n                <div class="preview_group_inner">\n                    <div class="preview_group_info append_btn">\n                        <strong class="preview_group_title"><#=biz_info.nick_name#></strong>\n                        <div class="preview_group_desc"><#=hint_txt#></div>\n                        <# if(!!biz_info.show_comm_attention_num){ #>\n                        <div class="preview_group_desc weak_tips">有<#=biz_info.comm_attention_num#>个好友关注</div>\n                        <# } #>\n                        <# if(!!biz_info.head_img){ #>\n                        <img data-src="<#=biz_info.head_img#>" alt="" class="preview_group_avatar br_radius js_alazy_img" >\n                        <# }else{ #>\n                        <img class="preview_group_avatar br_radius" src="http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0" alt="<#=biz_info.nick_name#>" >\n                        <# } #>\n                    </div>\n                    <div class="preview_group_opr">\n                        <a id="js_view_profile_<#=pos_type#>" <# if(biz_info.is_subscribed == 0){ #>style="display:none"<# } #> class="btn btn_inline btn_primary btn_line js_ad_btn">查看</a>\n                        <a id="js_add_contact_<#=pos_type#>" data-url="<#=url#>" data-type="<#=type#>" data-tid="<#=traceid#>" data-rl="<#=rl#>" <# if(biz_info.is_subscribed ==1){ #>style="display:none"<# } #> class="btn btn_inline btn_line  btn_primary js_ad_btn">关注</a>\n                    </div>\n                </div>\n            </div>\n            <# }else if(pt==102){ #>\n            <div class="preview_group">\n                <div class="preview_group_inner">\n                    <div class="preview_group_info append_btn">\n                        <strong class="preview_group_title"><#=app_info.app_name#></strong>\n                        <div class="preview_group_desc"><#=hint_txt#></div>\n                        <img data-src="<#=app_info.icon_url#>" alt="" class="preview_group_avatar br_radius js_alazy_img">\n                    </div>\n                    <div class="preview_group_opr">\n                        <a id="js_app_action_<#=pos_type#>" class="btn btn_inline btn_primary js_ad_btn btn_download">下载</a>\n                    </div>\n                </div>\n            </div>\n            <# }else if(pt==101){ #>\n            <div class="preview_group preview_card">\n                <div class="preview_group_inner card_inner">\n                    <div class="preview_group_info append_btn">\n                        <strong class="preview_group_title"><#=app_info.app_name#></strong>\n                        <div class="preview_group_desc"><#=hint_txt#></div>\n                        <img data-src="<#=app_info.icon_url#>" alt="" class="preview_card_avatar js_alazy_img">\n                    </div>\n                    <div class="preview_group_opr">\n                        <a id="js_app_action_<#=pos_type#>" class="btn btn_inline btn_primary js_ad_btn">下载</a>\n                    </div>\n                </div>\n            </div>\n            <# }else if(pt==103||pt==104){ #>\n            <div class="preview_group obvious_app">\n                <div class="preview_group_inner">\n                    <div class="pic_app">\n                        <img data-src="<#=image_url#>" alt="" class="js_alazy_img">\n                    </div>\n                    <div class="info_app">\n                        <p class="name_app"><#=app_info.app_name#></p>\n                        <# if(pt==103){ #>\n                        <p class="profile_app" style="display:none;"><span class="fun_exp"><#=app_info._category#></span><em>|</em><span class="compacity"><#=app_info._app_size#></span></p>\n                        <# } else if(pt==104){ #>\n                        <p class="profile_app" style="display:none;"><span class="fun_exp"><#=app_info._app_size#></span><em>|</em><span class="compacity"><#=app_info._down_count#></span></p>\n                        <# } #>\n                        <!--星级评分-->\n                        <p class="grade_app" id="js_app_rating_<#=pos_type#>">\n                            <!--\n                                半星：star_half\n                                一星：star_one\n                                一星半：star_one_half\n                                二星：star_two\n                                三星：star_three\n                                四星：star_four\n                                五星：star_five\n                            -->\n                            <span class="js_stars stars" style="display:none;"></span>\n                            <!--暂无评分\n                            <span class="scores">3.5</span>\n                            -->\n                            <span class="js_scores scores"></span>\n                        </p>\n                        <div class="dm_app">\n                            <a id="js_appdetail_action_<#=pos_type#>" class="ad_btn btn_download js_ad_btn">下载</a>\n                            <p class="extra_info">来自<# if(pt==103){ #>App Store<# }else{ #>腾讯应用宝<# } #></p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <# }else if(pt==105){ #>\n            <div class="mpda_card cardticket">\n                <div class="cardticket_hd cell">\n                    <div class="cell_hd">\n                        <span class="radius_avatar">\n                            <img class="avatar js_alazy_img" data-src="<#=card_info.card_logo_url#>" >\n                        </span>\n                    </div>\n                    <div class="cell_bd cell_primary"><#=card_info.card_title#></div>\n                    <div class="cell_ft">\n                        <a class="btn btn_plain_primary btn_inline js_ad_btn" id="js_card_action_<#=pos_type#>">领券</a>\n                    </div>\n                </div>\n                <div class="cardticket_ft">\n                    <div class="cardticket_theme"></div>\n                    <p class="cardticket_source tips_global"><#=card_info.card_brand_name#></p>\n                </div>\n            </div>\n            <# }else if(pt==106){ #>\n            <!-- 小店广告 -->\n            <div class="preview_group preview_card preview_shop_card">\n                <div class="preview_group_inner shop_card_inner">\n                    <div class="preview_group_info">\n                        <strong class="preview_shop_card_title"><#=mp_shop_info.name#></strong>\n                        <div class="preview_shop_card_desc">\n                            <span class="preview_card_desc_meta btn_plain_primary preview_shop_card_btn_buy js_ad_btn" id="js_shop_action_<#=pos_type#>">购买</span>\n                            <span class="preview_card_desc_meta preview_shop_card_oldprice">&yen;<#=mp_shop_info.ori_price/100#></span>\n                            <span class="preview_card_desc_meta preview_shop_card_price">&yen;<#=mp_shop_info.cur_price/100#></span>\n                        </div>\n                        <img data-src="<#=mp_shop_info.img#>" alt="" class="preview_card_avatar js_alazy_img">\n                    </div>\n                </div>\n            </div>\n            <# }else if(pt==111||pt==113||pt==112||pt==114){ #>\n            <!-- 背景高斯模糊带描述文字、带背景图的app下载 -->\n            <div class="preview_group download_app_with_desc js_download_app_card">\n                <div class="preview_group_inner" style="background-image:url(<#=image_url#>)">\n                    <div class="preview_group_hd">\n                        <div class="preview_group_hd_inner">\n                            <img data-src="<#=app_info.icon_url#>" alt="" class="preview_card_avatar js_alazy_img">\n                            <strong class="preview_group_title"><#=app_info.app_name#></strong>\n                            <a id="js_appdetail_action_<#=pos_type#>" class="preview_group_btn js_ad_btn">下载</a>\n                            <!-- <a id="js_app_action_<#=pos_type#>" class="preview_group_btn">继续</a>\n                            <a id="js_app_action_<#=pos_type#>" class="preview_group_btn">打开</a> -->\n                            <!-- <a id="js_app_action_<#=pos_type#>" class="preview_group_btn with_processor"><i class="btn_processor" style="width:35%;"></i><span class="btn_processor_value">35%</span></a> -->\n                        </div>\n                    </div>\n                    <# if(pt==111||pt==113){ #>\n                    <div class="preview_group_bd">\n                        <div class="preview_group_desc"><#=hint_txt.split(\'|\')[0]#></div>\n                        <div class="preview_group_desc"><#=hint_txt.split(\'|\')[1] || ""#></div>\n                    </div>\n                    <div class="preview_group_ft"><div class="preview_group_download_info"><span class="download_size" ><#=app_info.app_size#></span>&nbsp;来自<# if(pt==111){ #>App Store<# }else{ #>腾讯应用宝<# } #></div></div>\n                    <# } #>\n                </div>\n            </div>\n            <# }else if(pt==122||pt==121){ #>\n            <!-- app下载类广告 -->\n            <!--117 新卡片 begin -->\n            <div class="preview_group mod_method117">\n                <div class="wx_flex_layout">\n                    <div class="wx_flex_bd">\n                        <img class="fwi_thumb js_alazy_img" data-src="<#=image_url#>" alt="">\n                    </div>\n                    <div class="wx_flex_ft">\n                        <span class="radius_avatar"><img data-src="<#=app_info.icon_url#>" alt="" class="js_alazy_img"></span>\n                        <strong class="fwi_nickname"><#=app_info.app_name#></strong>\n                        <a id="js_appdetail_action_<#=pos_type#>" class="wx_min_plain_btn primary js_ad_btn">下载</a>\n                        <!-- <a href="#" class="wx_min_plain_btn primary btn_progress">\n                            <span class="btn_progress_inner" style="width:37%;">\n                                <span class="btn_progress_bd" style="width:57px;">暂停</span>\n                            </span>\n                            暂停\n                        </a> -->\n                    </div>\n                </div>\n            </div>\n            <!--117 end-->\n            <!--互选广告 begin-->\n            <# }else if(pt==125 || pt==140 || pt==142){ #>\n            <div class="da_area">\n              <div class="da_inner">\n                <!--广告头部-->\n                <div class="da_hd">\n                  <div class="da_video_area">\n                    <!-- <span class="da_video_bg_cover" id="js_main_img" style="background-image:url(<#=video_info.thumbUrl#>)"></span> -->\n                    <!--放视频-->\n                    <div id="js_video_container"></div>\n                  </div>\n                </div>\n                <!--广告信息-->\n                <div class="da_bd">\n                  <div class="da_brand_info">\n                    <span class="da_brand_info_hd" style="background-image:url(<#=biz_info.head_img#>)"></span>\n                    <div class="da_brand_info_content">\n                      <p class="da_brand_info_title"><#=biz_info.nick_name#></p>\n                    </div>\n                  </div>\n                  <a class="da_btn_more"><# if(dest_type==6){ #><span class="icon26_weapp_blue"></span><# } #>查看详情</a>\n                </div>\n              </div>\n            </div>\n            <# } #>\n            <!--互选广告 end-->\n        <# }else{ #>\n            <!--新协议-->\n            <# if(material_type == 9){ #>\n            <!--视频-->\n            <div class="da_area">\n              <div class="da_inner">\n                <!--广告头部-->\n                <div class="da_hd">\n                  <div class="da_video_area">\n                    <!-- <span class="da_video_bg_cover" id="js_main_img" style="background-image:url(<#=video_info.thumbUrl#>)"></span> -->\n                    <!--放视频-->\n                    <div id="js_video_container"></div>\n                  </div>\n                </div>\n                <!--广告信息-->\n                <div class="da_bd">\n                  <div class="da_brand_info">\n                    <span class="da_brand_info_hd" style="background-image:url(<#=biz_info.head_img#>)"></span>\n                    <div class="da_brand_info_content">\n                      <p class="da_brand_info_title"><#=biz_info.nick_name#></p>\n                    </div>\n                  </div>\n                  <# if (product_type==12 || product_type==19){ #>\n                  <!--<a id="js_ad_btn_<#=pos_type#>" class="da_btn_more wx_min_plain_btn ba_btn btn_progress">立即下载</a>-->\n                  <a id="js_ad_btn_<#=pos_type#>" class="appmsg_card_btn wx_min_plain_btn ba_btn btn_progress">下载应用</a>\n                  <# }else{ #>\n                  <a class="da_btn_more">查看详情</a>\n                  <# } #>\n                </div>\n              </div>\n            </div>\n            <# }else if(material_type == 2){ #>\n            <!--图片-->\n                <# if (logo.indexOf("http://mmsns.qpic.cn/") == 0){ #>\n                    <div class="brand_logo"><img data-src="<#=logo#>" alt="logo图片" class="js_alazy_img"></div>\n                <# } #>\n                    <img class="appmsg_banner js_alazy_img" data-src="<#=image_url#>">\n                    <i class="promotion_tag" id="js_promotion_tag">\n                    <# if(dest_type==6){ #>\n                    <span class="icon26_weapp_white"></span>\n                    <# } #>\n\n                    <# if (product_type==12 || product_type==19){ #>\n                        应用下载\n                    <# } #>\n                    </i>\n            <# } #>\n        <# } #>\n    </div>\n</div>\n';
});define("a/mpshop.js",["biz_common/dom/event.js","biz_common/utils/report.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","biz_wap/jsapi/core.js","biz_common/utils/url/parse.js"],function(t){
"use strict";
function e(t,e){
s("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+e.report_param);
}
function o(t){
var o=t.adData,s=t.pos_type||0,a=o.tid,_=o.type,l=(o.adid,o.outer_id),m=o.url,c=o.rl,d={};
t.report_param=t.report_param||"";
var j=t.btn;
if(j){
i.on(j,"click",function(o){
if(!d[a]){
d[a]=!0;
var i,j,u,b,f=!!o&&o.target;
f&&(i=r.getX(f,"js_ad_link")+o.offsetX,j=r.getY(f,"js_ad_link")+o.offsetY,u=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
b=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
n({
type:_,
report_type:2,
click_pos:0,
url:encodeURIComponent(m),
tid:a,
rl:encodeURIComponent(c),
__biz:biz,
pos_type:s,
pt:106,
pos_x:i,
pos_y:j,
ad_w:u||0,
ad_h:b||0
},function(){
d[a]=!1,e(61,t),location.href=p.join(m,{
outer_id:l
});
});
}
return!1;
});
}
}
var i=t("biz_common/dom/event.js"),s=t("biz_common/utils/report.js"),a=t("a/a_report.js"),n=a.AdClickReport,r=(t("biz_wap/utils/ajax.js"),
t("biz_wap/utils/position.js")),p=(t("biz_wap/jsapi/core.js"),t("biz_common/utils/url/parse.js"));
return o;
});define("a/wxopen_card.js",["biz_wap/jsapi/core.js","biz_common/utils/report.js","biz_wap/utils/mmversion.js"],function(e){
"use strict";
function i(e,i){
n("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+e+i);
}
function o(e){
var o=e.url||"";
o=o.replace(/&amp;/g,"&");
var a=o.indexOf("?"),n=0;
(119==e.pt||120==e.pt)&&(n=2),e.report_param="&tid="+e.traceid+"&ticket="+e.ticket+"&aid="+e.aid,
o.indexOf("?")>=0?o=o.slice(0,a)+".html"+o.slice(a):o+=".html";
var r="",p="";
if(document.getElementsByTagName("mpcpc")[0]&&document.getElementsByTagName("mpcpc")[0].dataset&&(r=document.getElementsByTagName("mpcpc")[0].dataset.category_id_list),
"undefined"==typeof c){
var c;
c=window.cgiData&&window.cgiData.__biz?window.cgiData.__biz:window.parent.biz;
}
p=e.traceid+":"+r+":"+c+":"+e.aid+":"+e.pos_type,console.log("sceneNote",p);
var m={
scene:1067,
sceneNote:p,
userName:e.weapp_info.original_id+"@app",
relativeURL:o,
appVersion:1
},s=!1,d=navigator.userAgent.match(/MicroMessenger\/(\d+)\.(\d+)\.(\d+)/);
if(d){
var _=Number(d[1]),g=Number(d[2]),l=Number(d[3]);
_>6?s=!0:6===_&&g>5?s=!0:6===_&&5===g&&l>=3&&(s=!0);
}
return console.log("canJumpOnTap : ",s,e.weapp_info.original_id,navigator.userAgent),
s?void t.invoke("openWeApp",m,function(o){
"openWeApp:ok"===o.err_msg&&i(125+n,e.report_param),"system:function_not_exist"===o.err_msg&&(location.href="https://mp.weixin.qq.com/mp/waerrpage?type=upgrade&original_id="+encodeURIComponent(e.weapp_info.original_id)+"#wechat_redirect",
i(126+n,e.report_param));
}):(location.href="https://mp.weixin.qq.com/mp/waerrpage?type=upgrade&original_id="+encodeURIComponent(e.weapp_info.original_id)+"#wechat_redirect",
void i(126+n,e.report_param));
}
function a(e){
t.invoke("preloadMiniProgramContacts",{
userNames:[e.weapp_info.original_id+"@app"]
},function(e){
console.log(e);
});
}
{
var t=e("biz_wap/jsapi/core.js"),n=e("biz_common/utils/report.js");
e("biz_wap/utils/mmversion.js");
}
return{
openWxopen:o,
startConnect:a
};
});define("a/card.js",["biz_common/dom/event.js","biz_common/utils/report.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","biz_wap/jsapi/core.js","biz_wap/jsapi/cardticket.js"],function(e,t,a,i){
"use strict";
function o(e,t){
r("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+e+t.report_param);
}
function s(e){
var t=e.adData,a=e.pos_type||0,i=t.tid,r=t.type,p=t.url,d=t.rl,l={};
e.report_param=e.report_param||"";
var m=e.btn;
if(m){
n.on(m,"click",function(n){
if(!l[i]){
l[i]=!0;
var m,j,u,f,b=!!n&&n.target;
b&&(m=_.getX(b,"js_ad_link")+n.offsetX,j=_.getY(b,"js_ad_link")+n.offsetY,u=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
f=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
c({
type:r,
report_type:2,
click_pos:0,
url:encodeURIComponent(p),
tid:i,
rl:encodeURIComponent(d),
__biz:biz,
pos_type:a,
pt:105,
pos_x:m,
pos_y:j,
ad_w:u||0,
ad_h:f||0
},function(){
l[i]=!1,o(37,e),s.openCardDetail(t.card_id,t.card_ext,e);
});
}
return!1;
});
}
}
var n=e("biz_common/dom/event.js"),r=e("biz_common/utils/report.js"),p=e("a/a_report.js"),c=p.AdClickReport,_=(e("biz_wap/utils/ajax.js"),
e("biz_wap/utils/position.js")),d=(e("biz_wap/jsapi/core.js"),e("biz_wap/jsapi/cardticket.js"));
return s.openCardDetail=function(e,t,a){
d.openCardDetail({
card_id:e,
card_ext:t,
success:function(){
!!a&&o(38,a);
},
error:function(){
!!a&&o(39,a),i("调起卡券错误");
},
access_denied:function(){
!!a&&o(40,a),i("异常错误[access_denied]");
}
});
},s;
});define("biz_wap/utils/position.js",[],function(){
"use strict";
function e(t,f){
var s=t.offsetLeft;
if(t.offsetParent&&t.offsetParent.className){
var a=t.offsetParent.className;
-1==a.indexOf(f)&&(s+=e(t.offsetParent,f));
}
return s;
}
function t(e,f){
var s=e.offsetTop;
if(e.offsetParent&&e.offsetParent.className){
var a=e.offsetParent.className;
-1==a.indexOf(f)&&(s+=t(e.offsetParent,f));
}
return s;
}
return{
getX:e,
getY:t
};
});define("a/a_report.js",["biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","biz_wap/utils/mmversion.js","appmsg/log.js"],function(o){
"use strict";
function e(o,e){
var a="https:"==location.protocol?1500:1200,_="/mp/advertisement_report?r="+Math.random()+"&ascene="+encodeURIComponent(window.ascene||-1)+"&",d=[],c=!1;
for(var u in o)o.hasOwnProperty(u)&&d.push(u+"="+o[u]);
var l=2;
1==window.__ad_has_exposure&&(l=1),d.push("has_exposure="+l),_+=d.join("&");
var w="trace_id="+o.tid+"&product_type="+o.pt+"&jump_url="+o.url+"&logtype=3&url="+encodeURIComponent(location.href)+"&rl="+o.rl;
o.tid&&p.gtVersion("6.3.22",!0)&&i.invoke("adDataReport",{
ad_info:w,
need_record_page_operation:1
},function(){}),s("[Ad report] url="+_),2==l&&window.__addIdKeyReport("68064",0),
window.__ad_test_exposure||window.__addIdKeyReport("68064",7),t({
url:_,
mayAbort:!0,
type:"GET",
success:function(){
r&&r(56+n);
},
error:function(){
r&&r(57+n);
},
complete:function(){
c||(c=!0,!!e&&e());
},
async:!0
}),setTimeout(function(){
c||(c=!0,window.__ajaxtest="1",!!e&&e());
},a);
}
var t=o("biz_wap/utils/ajax.js"),r=window.__report,a=location.protocol,n="https:"==a?5:0,i=o("biz_wap/jsapi/core.js"),p=o("biz_wap/utils/mmversion.js"),s=o("appmsg/log.js");
return{
AdClickReport:e
};
});define("appmsg/comment.js",["biz_common/dom/class.js","appmsg/cmt_tpl.html.js","biz_common/utils/wxgspeedsdk.js","biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_common/utils/string/html.js","biz_common/tmpl.js","biz_wap/utils/fakehash.js","appmsg/log.js","appmsg/comment_tpl.html.js","appmsg/friend_comment_tpl.html.js","appmsg/my_comment_tpl.html.js","appmsg/emotion/emotion.js","appmsg/emotion/dom.js"],function(e,t,n,m){
"use strict";
function o(e,t){
e&&(e.style.display=t?t:"block");
}
function i(e){
e&&(e.style.display="none");
}
function c(){
setTimeout(function(){
o(K.toast);
},750),setTimeout(function(){
i(K.toast),window.history.back(-1),j();
},1500);
}
function d(e){
return e.replace(/^\s+|\s+$/g,"");
}
function l(e,t){
if(!(Math.random()<.999)){
var n=window.location.protocol,m=9;
"https:"==n&&(m=18),M.saveSpeeds({
uin:uin,
pid:m,
speeds:[{
sid:29,
time:e
},{
sid:30,
time:t
}]
}),M.send();
}
}
function s(e,t){
if("undefined"!=typeof e){
var n=new Image;
n.src=F.idkey?"//mp.weixin.qq.com/mp/jsmonitor?idkey="+(F.idkey+"_"+e+"_1")+"&t="+Math.random():"http://mp.weixin.qq.com/mp/jsreport?key="+e+"&content="+(t||"")+"&r="+Math.random();
}
}
function a(){
var e=window.innerHeight||document.documentElement.clientHeight,t=window.pageYOffset||document.documentElement.scrollTop,n=document.documentElement.scrollHeight;
if(t+e+100>n&&R.off(window,"scroll",a),!(Q||-1==J||J>0&&n-t-e>500)){
if("number"==typeof window.comment_count&&0==window.comment_count)return void r({
enabled:1,
elected_comment:[],
friend_comment:[],
elected_comment_total_cnt:0,
my_comment:[],
only_fans_can_comment:window.only_fans_can_comment,
is_fans:window._is_fans,
logo_url:window._logo_url,
nick_name:window._nick_name
});
var m=+new Date;
Q=!0,i(K.tips),o(K.loading);
var c="/mp/appmsg_comment?action=getcomment&scene="+F.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+H+"&offset="+J+"&limit="+G+(window.send_time?"&send_time="+send_time:"");
try{
tt++,tt>1&&s(F.moreList,encodeURIComponent(c)),et.indexOf(c)>-1&&s(F.repeatList,encodeURIComponent(c)),
et.push(c);
}catch(d){}
!!q&&console.log("[Appmsg comment] start get comment data:"+c),N("[Appmsg comment] start get comment data, url:"+c),
S({
url:c,
type:"get",
success:function(e){
var t=+new Date,n=t-m,o={};
try{
o=window.eval.call(window,"("+e+")");
}catch(i){}
window.test_comment_data&&(o=window.test_comment_data);
var d=o.base_resp&&o.base_resp.ret;
if(0==d){
r(o);
var a=+new Date-t;
l(n,a);
}else s(F.errList,"type:resperr;url:"+encodeURIComponent(c)+";ret="+d);
N("[Appmsg comment] get comment success, text: "+e);
},
error:function(){
s(F.errList,"type:ajaxerr;url:"+encodeURIComponent(c)),N("[Appmsg comment] get comment ajax error");
},
complete:function(){
Q=!1,i(K.loading),R.off(window,"scroll",B);
}
});
}
}
function r(e){
var t,n,m=document.createDocumentFragment(),c=document.createDocumentFragment();
nt++,nt>1&&s(F.handleList,encodeURIComponent(JSON.stringify({
comment_id:H,
offset:J,
url:location.href
}))),"undefined"!=typeof e.only_fans_can_comment?window.can_fans_comment_only=e.only_fans_can_comment:"undefined"==typeof window.can_fans_comment_only&&(window.can_fans_comment_only=0),
1!=e.enabled?(x&&(x.style.display="none"),z&&i(z),e.elected_comment=[],e.friend_comment=[],
e.elected_comment_total_cnt=0,e.friend_comment_total_cnt=0):(x&&(x.style.display="block"),
z&&o(z)),0==J?(X=e.logo_url,Z=e.nick_name,t=e.elected_comment,t&&t.length?(g(t,m,"elected"),
K.list.appendChild(m),o(K.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?o(document.getElementById("js_cmt_addbtn1")):o(document.getElementById("js_cmt_nofans1"),"block"),
e.elected_comment_total_cnt<=10&&(o(document.getElementById("js_cmt_statement")),
o(document.getElementById("js_cmt_qa")))):(i(K.main),0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans?o(document.getElementById("js_cmt_addbtn2")):o(document.getElementById("js_cmt_nofans2"),"block")),
n=e.friend_comment,g(n,c,"friend"),K.fdlist.appendChild(c),n&&n.length?(o(K.fdmain),
(0==window.can_fans_comment_only||1==window.can_fans_comment_only&&1==e.is_fans)&&(i(document.getElementById("js_cmt_addbtn1")),
i(document.getElementById("js_cmt_addbtn2")),o(document.getElementById("js_cmt_addbtn3")))):i(K.fdmain),
function(){
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var n=t.offsetTop;
window.scrollTo(0,n-25);
}
}()):(t=e.elected_comment,t&&t.length&&(g(t,m,"elected"),K.list.appendChild(m))),
0==e.elected_comment_total_cnt?(J=-1,i(document.getElementById("js_cmt_loading")),
i(document.getElementById("js_cmt_statement")),i(document.getElementById("js_cmt_qa"))):J+G>=e.elected_comment_total_cnt?(J=-1,
i(document.getElementById("js_cmt_loading")),o(document.getElementById("js_cmt_statement")),
o(document.getElementById("js_cmt_qa"))):J+=e.elected_comment.length;
}
function _(){
Y.log("tag1");
var e=d(K.input.value);
if(Y.log("tag2"),!D.hasClass(K.submit,"btn_disabled")){
if(Y.log("tag3"),e.length<1)return y("留言不能为空");
if(Y.log("tag4"),e.length>600)return y("字数不能多于600个");
Y.log("tag5"),D.addClass(K.submit,"btn_disabled"),Y.log("tag6");
var t=document.getElementById("activity-name");
Y.log("tag7"),mt!=e&&(ot=+new Date);
var n=function(t){
var n=document.createDocumentFragment(),m=document.createDocumentFragment();
if(c(),console.log("------------------------",window.friend_comment_enabled),g([{
content:e,
nick_name:Z,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:X,
like_status:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:t.my_id,
content_id:t.content_id
}],n,"mine"),K.mylist.insertBefore(n,K.mylist.firstChild),1==window.friend_comment_enabled){
g([{
content:e,
nick_name:Z,
create_time:(new Date).getTime()/1e3|0,
is_elected:0,
logo_url:X,
like_status:0,
like_num_format:0,
like_num:0,
is_from_friend:0,
is_from_me:1,
my_id:t.my_id,
content_id:t.content_id
}],m,"friend");
var i=K.fdlist.querySelectorAll("li.discuss_item");
if(i.length){
for(var d=!1,l=0;l<i.length;l++)if(!i[l].querySelector(".praise_num").innerHTML){
K.fdlist.insertBefore(m,i[l]),d=!0;
break;
}
d||K.fdlist.appendChild(m);
}else K.fdlist.appendChild(m),o(K.fdmain);
}
o(K.mylist.parentNode),K.input.value="",v();
};
if(window.test_comment_data)return void n({
my_id:"111"
});
var m="/mp/appmsg_comment?action=addcomment&scene="+F.scene+"&comment_id="+H+"&__biz="+biz+"&idx="+idx+"&appmsgid="+appmsgid+"&sn="+sn;
S({
url:m,
data:{
content:e,
title:t&&d(t.innerText),
head_img:X,
nickname:Z,
client_id:ot
},
type:"POST",
success:function(t){
Y.log("tag8"),P.hidePannel();
var o={};
try{
o=window.eval.call(window,"("+t+")");
}catch(i){}
switch(+o.ret){
case 0:
n(o);
break;

case-6:
y("你留言的太频繁了，休息一下吧");
break;

case-7:
y("你还未关注该公众号，不能参与留言");
break;

case-10:
y("字数不能多于600个");
break;

case-15:
y("留言已关闭");
break;

default:
mt=e,y("系统错误，请重试");
}
0!=o.ret&&s(F.addCommentErr,"type:resperr;url:"+encodeURIComponent(m)+";ret="+o.ret);
},
error:function(e){
Y.log("shit;"+e.status+";"+e.statusText),s(F.addCommentErr,"type:ajaxerr;url:"+encodeURIComponent(m));
},
complete:function(){
""!=K.input.value&&D.removeClass(K.submit,"btn_disabled");
}
});
}
}
function p(){
if(0==$){
var e="/mp/appmsg_comment?action=getmycomment&scene="+F.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&idx="+idx+"&comment_id="+H,t=document.getElementById("js_mycmt_loading");
$=1,o(t),S({
url:e,
type:"get",
success:function(t){
var n={};
try{
n=window.eval.call(window,"("+t+")");
}catch(m){}
var i=n.base_resp&&n.base_resp.ret;
if(0==i){
var c=n.my_comment,d=document.createDocumentFragment();
c&&c.length&&(g(c,d,"mine"),K.mylist.appendChild(d),o(K.mylist.parentNode)),$=2;
}else $=0,s(F.errComment,"type:resperr;url:"+encodeURIComponent(e)+";ret="+i);
},
error:function(){
$=0,s(F.errComment,"type:ajaxerr;url:"+encodeURIComponent(e));
},
complete:function(){
i(t);
}
});
}
}
function u(e){
var t=(new Date).getTime(),n=new Date;
n.setDate(n.getDate()+1),n.setHours(0),n.setMinutes(0),n.setSeconds(0),n=n.getTime();
var m=t/1e3-e,o=n/1e3-e,i=new Date(n).getFullYear(),c=new Date(1e3*e);
return 3600>m?Math.ceil(m/60)+"分钟前":86400>o?Math.floor(m/60/60)+"小时前":172800>o?"昨天":604800>o?Math.floor(o/24/60/60)+"天前":c.getFullYear()==i?c.getMonth()+1+"月"+c.getDate()+"日":c.getFullYear()+"年"+(c.getMonth()+1)+"月"+c.getDate()+"日";
}
function g(e,t,n){
var m,o="",i=document.createElement("div"),c="http://mmbiz.qpic.cn/mmbiz/ByCS3p9sHiak6fjSeA7cianwo25C0CIt5ib8nAcZjW7QT1ZEmUo4r5iazzAKhuQibEXOReDGmXzj8rNg/0";
V={};
for(var d,l=0;d=e[l];++l){
d.time=u(d.create_time),d.status="",d.logo_url=d.logo_url||c,d.logo_url=-1!=d.logo_url.indexOf("wx.qlogo.cn")?d.logo_url.replace(/\/132$/,"/96"):d.logo_url,
d.content=d.content.htmlDecodeLite().htmlEncodeLite(),d.nick_name=d.nick_name.htmlDecodeLite().htmlEncodeLite(),
d.like_num_format=parseInt(d.like_num)>=1e4?(d.like_num/1e4).toFixed(1)+"万":d.like_num,
d.is_from_friend="friend"==n?0:d.is_from_friend||0,d.is_from_me="mine"==n?1:d.is_from_me||0,
d.reply=d.reply||{
reply_list:[]
},d.is_mine=n?!1:!0,d.is_elected="elected"==n||"friend"==n?1:d.is_elected,d.is_top="friend"==n?0:d.is_top,
d.reply.reply_list.length>0&&(d.reply.reply_list[0].time=u(d.reply.reply_list[0].create_time),
d.reply.reply_list[0].content=(d.reply.reply_list[0].content||"").htmlEncodeLite(),
d.reply.reply_list[0].reply_like_status=d.reply.reply_list[0].reply_like_status||0,
d.reply.reply_list[0].reply_like_num=d.reply.reply_list[0].reply_like_num||0,d.reply.reply_list[0].reply_like_num_format=parseInt(d.reply.reply_list[0].reply_like_num)>=1e4?(d.reply.reply_list[0].reply_like_num/1e4).toFixed(1)+"万":d.reply.reply_list[0].reply_like_num),
d.new_appmsg=window.new_appmsg,o+=A.tmpl(T,d);
try{
var a=d.nick_name+d.content,r=!1,_=F.repeatContentID;
V[a]&&(r=!0,_=F.repeatContent),W.indexOf(d.content_id)>-1&&(r=!0,_=F.repeatContentID),
W.push(d.content_id),V[a]=!0,r&&s(_,encodeURIComponent(JSON.stringify({
comment_id:H,
content_id:d.content_id,
offset:J,
length:e.length,
url:location.href
})));
}catch(p){}
}
for(i.innerHTML=o,f(i);m=i.children.item(0);)t.appendChild(m);
}
function f(e){
Y.each(e.querySelectorAll("div.discuss_message_content"),function(e){
e.innerHTML=P.encode(e.innerHTML);
});
}
function y(e){
return setTimeout(function(){
m(e);
});
}
function w(){
var e="1"===L.getParam("js_my_comment");
e&&h(!0);
}
function h(e){
i(K.article),o(K.mine),U=document.documentElement.scrollHeight,window.scrollTo(0,0),
p(),e||Y.later(function(){
K.input.focus();
});
}
function j(){
i(K.mine),o(K.article),window.scrollTo(0,U),K.input.blur();
}
function b(e){
var t=e.delegatedTarget||e.srcElement,n=null;
if(D.hasClass(t,"js_comment_praise")&&(n=t),n){
for(var m=parseInt(n.dataset.status),o=0==m?1:0,i=n.dataset.contentId,c="/mp/appmsg_comment?action=likecomment&scene="+F.scene+"&like="+o+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+H+"&content_id="+i,d=document.querySelectorAll('.js_comment_praise[data-content-id="'+i+'"]'),l=0;l<d.length;l++)E(d[l]);
if(window.test_comment_data)return;
S({
url:c,
type:"GET"
});
}
}
function I(e){
for(var t=e.delegatedTarget,n=parseInt(t.dataset.status),m=n?0:1,o=t.dataset.contentId,i=t.dataset.replyId,c=document.querySelectorAll('.js_reply_praise[data-content-id="'+o+'"]'),d=0;d<c.length;d++)E(c[d]);
document.querySelector("meta[name=viewport]"),window.test_comment_data||S({
url:"/mp/appmsg_comment?action=like_author_reply&scene="+F.scene,
type:"post",
data:{
comment_id:H,
content_id:o,
reply_id:i,
like:m
}
});
}
function E(e){
var t=D.hasClass(e,"praised"),n=e.querySelector(".praise_num"),m=n.innerHTML,o=m.indexOf("万"),i=parseInt(m)?parseInt(m):0;
t?(-1==o&&(n.innerHTML=i-1>0?i-1:""),D.removeClass(e,"praised"),e.dataset.status=0):(-1==o&&(n.innerHTML=i+1),
D.addClass(e,"praised"),e.dataset.status=1);
}
function v(){
K.list.children.length?K.fdlist.children.length?(o(document.getElementById("js_cmt_addbtn3")),
i(document.getElementById("js_cmt_addbtn1")),i(document.getElementById("js_cmt_addbtn2")),
i(document.getElementById("js_cmt_addbtn4"))):(o(document.getElementById("js_cmt_addbtn1")),
i(document.getElementById("js_cmt_addbtn2")),i(document.getElementById("js_cmt_addbtn3")),
i(document.getElementById("js_cmt_addbtn4"))):K.fdlist.children.length?(o(document.getElementById("js_cmt_addbtn3")),
i(document.getElementById("js_cmt_addbtn4")),i(document.getElementById("js_cmt_addbtn1")),
i(document.getElementById("js_cmt_addbtn2"))):(o(document.getElementById("js_cmt_addbtn4")),
i(document.getElementById("js_cmt_addbtn3")),i(document.getElementById("js_cmt_addbtn1")),
i(document.getElementById("js_cmt_addbtn2")));
}
function k(e){
var t=e.delegatedTarget,n=t.getAttribute("data-my-id"),o="/mp/appmsg_comment?action=delete&scene="+F.scene+"&__biz="+biz+"&appmsgid="+appmsgid+"&comment_id="+H+"&my_id="+n;
confirm("确定删除吗？")&&S({
url:o,
success:function(e){
var o,c=t;
try{
e=JSON.parse(e);
}catch(d){
e={};
}
if(0==e.ret){
for(;c&&(c.nodeType!=c.ELEMENT_NODE||"li"!=c.tagName.toLowerCase());)c=c.parentNode;
if(c){
c.parentNode.removeChild(c),o=document.getElementById("cid"+n);
for(var l=document.querySelectorAll(".cid"+n),s=0;s<l.length;s++)l[s].parentNode.removeChild(l[s]);
0==K.list.children.length?(i(K.main),i(document.getElementById("js_cmt_statement")),
i(document.getElementById("js_cmt_qa")),0==K.fdlist.children.length&&i(K.fdmain)):0==K.fdlist.children.length&&i(K.fdmain),
0==K.mylist.children.length&&i(K.mylist.parentNode),v();
}
}else m("删除失败，请重试");
},
error:function(){
m("网络错误，请重试");
}
});
}
function B(){
try{
var e=K.loading.getBoundingClientRect(),t=Math.random()<1;
e.top<window.innerHeight&&Q&&t&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_45_1&lc=1&log0",
R.off(window,"scroll",B));
}catch(n){}
}
function C(e){
var t=document.createElement("a");
t.setAttribute("href",e),this.el=t,this.parser=this.el,this.getParam=function(e){
var t=new RegExp("([?&])"+e+"=([^&#]*)([&#])?"),n=this.el.search.match(t);
return n?n[2]:null;
};
}
var D=e("biz_common/dom/class.js"),T=e("appmsg/cmt_tpl.html.js"),x=document.getElementById("js_cmt_area"),z=document.getElementById("js_friend_cmt_area"),L=new C(window.location.href),M=e("biz_common/utils/wxgspeedsdk.js"),q=location.href.indexOf("vconsole=1")>0||document.cookie&&document.cookie.indexOf("vconsole_open=1")>-1?!0:!1,H=0;
if(window._has_comment=!0,"undefined"!=typeof window.comment_id?H=window.comment_id:window.cgiData&&"undefined"!=typeof window.cgiData.comment_id&&(H=window.cgiData.comment_id),
!!q&&console.log("comment_id:"+H+";uin:"+uin+";key:"+key),-1!=navigator.userAgent.indexOf("MicroMessenger")||window.test_comment_data||(x&&(x.style.display="none"),
z&&(z.style.display="none"),H=0,window._has_comment=!1),0==H||!uin||!key)return void(window._has_comment=!1);
var R=e("biz_common/dom/event.js"),S=e("biz_wap/utils/ajax.js"),A=(e("biz_common/utils/string/html.js"),
e("biz_common/tmpl.js")),O=e("biz_wap/utils/fakehash.js"),N=e("appmsg/log.js"),F={
scene:0,
idkey:"",
moreList:27,
repeatList:25,
errList:18,
handleList:26,
addCommentErr:19,
errComment:18,
repeatContent:24,
repeatContentID:23
},U=null;
window.__commentReportData&&window.__commentReportData.idkey&&(!!q&&console.log("init reportData"),
F=window.__commentReportData),function(){
if(x){
var t=e("appmsg/comment_tpl.html.js");
x.innerHTML=A.tmpl(t,{
new_appmsg:window.new_appmsg
});
}
if(z){
var n=e("appmsg/friend_comment_tpl.html.js");
z.innerHTML=A.tmpl(n,{
new_appmsg:window.new_appmsg
});
}
}(),function(){
var t=e("appmsg/my_comment_tpl.html.js"),n=document.createElement("div");
n.innerHTML=A.tmpl(t,{
new_appmsg:window.new_appmsg,
friend_comment_enabled:window.friend_comment_enabled
}),document.body.appendChild(n);
}();
var P=e("appmsg/emotion/emotion.js"),Y=e("appmsg/emotion/dom.js"),J=(new Image,0),G=100,Q=!1,X="",Z="我",$=0,K={
article:document.getElementById("js_article"),
mine:document.getElementById("js_cmt_mine"),
main:document.getElementById("js_cmt_main"),
input:document.getElementById("js_cmt_input"),
submit:document.getElementById("js_cmt_submit"),
addbtn:document.getElementById("js_cmt_addbtn"),
list:document.getElementById("js_cmt_list"),
mylist:document.getElementById("js_cmt_mylist"),
morelist:document.getElementById("js_cmt_morelist"),
toast:document.getElementById("js_cmt_toast"),
tips:document.getElementById("js_cmt_tips"),
loading:document.getElementById("js_cmt_loading"),
fdmain:document.getElementById("js_friend_cmt_main"),
fdlist:document.getElementById("js_friend_cmt_list"),
fdlisthide:document.getElementById("js_friend_cmt_list_hide"),
morefdlist:document.getElementById("js_more_friend_cmt_area"),
morefd:document.getElementById("js_more_friend_cmt")
},W=[],V={},et=(new Image,[]),tt=0,nt=0,mt=null,ot=+new Date;
!function(){
a(),w(),P.init();
}(),O.on("comment",function(){
!!q&&console.log("FakeHash on comment"),h();
}),O.on("article",function(){
!!q&&console.log("FakeHash on article"),j();
}),O.on(function(e){
"comment"==e&&j();
}),R.on(K.input,"input",function(){
var e=d(K.input.value);
e.length<1?D.addClass(K.submit,"btn_disabled"):D.removeClass(K.submit,"btn_disabled");
}),R.on(K.list,"tap",".js_comment_praise",b),R.on(K.mylist,"tap",".js_comment_praise",b),
R.on(K.fdlist,"tap",".js_comment_praise",b),R.on(K.list,"tap",".js_reply_praise",I),
R.on(K.fdlist,"tap",".js_reply_praise",I),R.on(K.list,"tap",".js_del",k),R.on(K.mylist,"tap",".js_del",k),
R.on(K.fdlist,"tap",".js_del",k),R.on(K.list,"tap",".js_del",function(e){
e.preventDefault();
}),R.on(K.mylist,"tap",".js_del",function(e){
e.preventDefault();
}),R.on(K.fdlist,"tap",".js_del",function(e){
e.preventDefault();
}),R.on(K.submit,"tap",_),R.on(K.submit,"click",function(e){
e.preventDefault();
}),R.on(window,"scroll",a),R.on(window,"scroll",B),R.on(document.getElementById("js_cmt_write1"),"click",function(e){
e.preventDefault(),!!q&&console.log("push comment"),O.push("comment");
}),R.on(document.getElementById("js_cmt_write2"),"click",function(e){
e.preventDefault(),!!q&&console.log("push comment"),O.push("comment");
}),R.on(document.getElementById("js_cmt_write3"),"click",function(e){
e.preventDefault(),!!q&&console.log("push comment"),O.push("comment");
}),R.on(document.getElementById("js_cmt_write4"),"click",function(e){
e.preventDefault(),!!q&&console.log("push comment"),O.push("comment");
});
});define("appmsg/my_comment_tpl.html.js",[],function(){
return'<!-- 发表留言 -->\n<#if(window.new_appmsg){#>\n    <div id="js_cmt_mine" class="discuss_container editing access" style="display:none;">\n        <div class="discuss_container_inner">\n            <h2 class="rich_media_title"><#=window.msg_title#></h2>\n            <span id="log"></span>\n            <div class="frm_textarea_box_wrp">\n                <span class="frm_textarea_box">\n                    <#if(window.friend_comment_enabled == 1){#>\n                    <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言对朋友可见，被公众号筛选后，将对所有人可见。"></textarea>\n                    <#}else{#>\n                    <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言将由公众号筛选后显示，对所有人可见。"></textarea>\n                    <#}#>\n                    <div class="emotion_tool">\n                        <span class="emotion_switch" style="display:none;"></span>\n                        <span id="js_emotion_switch" class="pic_emotion_switch_wrp">\n                            <img class="pic_default" src="<#=window.icon_emotion_switch#>" alt="">\n                            <img class="pic_active" src="<#=window.icon_emotion_switch_active#>" alt="">\n                        </span>\n                        <div class="emotion_panel" id="js_emotion_panel">\n                            <span class="emotion_panel_arrow_wrp" id="js_emotion_panel_arrow_wrp">\n                                <i class="emotion_panel_arrow arrow_out"></i>\n                                <i class="emotion_panel_arrow arrow_in"></i>\n                            </span>\n                            <div class="emotion_list_wrp" id="js_slide_wrapper">\n                                <!--<ul class="emotion_list"></ul>-->\n                                <!--<li class="emotion_item"><i class="icon_emotion"></i></li>-->\n                            </div>\n                            <ul class="emotion_navs" id="js_navbar">\n                                <!--<li class="emotion_nav"></li>-->\n                            </ul>\n                        </div>\n                    </div>\n                </span>\n            </div>\n            <div class="discuss_btn_wrp"><a id="js_cmt_submit" class="btn btn_primary btn_discuss btn_disabled" href="##">留言</a></div>\n            <div class="discuss_list_wrp" style="display:none">\n                <div class="mod_title_context">\n                    <strong class="mod_title">我的留言</strong>\n                </div>\n                <ul class="discuss_list" id="js_cmt_mylist"></ul>\n            </div>\n            <div class="weui-loadmore" id="js_mycmt_loading">\n                <i class="weui-loading"></i>\n                <span class="weui-loadmore__tips">正在加载</span>\n            </div>\n            <div id="js_cmt_toast" style="display: none;">\n                <div class="weui-mask_transparent"></div>\n                <div class="weui-toast">\n                    <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n                    <p class="weui-toast__content">已留言</p>\n                </div>\n            </div>\n        </div>\n    </div>\n<#}else{#>\n    <div id="js_cmt_mine" class="discuss_container editing access" style="display:none;">\n        <div class="discuss_container_inner">\n            <h2 class="rich_media_title"><#=window.msg_title#></h2>\n            <span id="log"></span>\n            <div class="frm_textarea_box_wrp">\n                <span class="frm_textarea_box">\n                    <#if(window.friend_comment_enabled == 1){#>\n                    <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言对朋友可见，被公众号筛选后，将对所有人可见。"></textarea>\n                    <#}else{#>\n                    <textarea id="js_cmt_input" class="frm_textarea" placeholder="留言将由公众号筛选后显示，对所有人可见。"></textarea>\n                    <#}#>\n                    <div class="emotion_tool">\n                        <span class="emotion_switch" style="display:none;"></span>\n                        <span id="js_emotion_switch" class="pic_emotion_switch_wrp">\n                            <img class="pic_default" src="<#=window.icon_emotion_switch#>" alt="">\n                            <img class="pic_active" src="<#=window.icon_emotion_switch_active#>" alt="">\n                        </span>\n                        <div class="emotion_panel" id="js_emotion_panel">\n                            <span class="emotion_panel_arrow_wrp" id="js_emotion_panel_arrow_wrp">\n                                <i class="emotion_panel_arrow arrow_out"></i>\n                                <i class="emotion_panel_arrow arrow_in"></i>\n                            </span>\n                            <div class="emotion_list_wrp" id="js_slide_wrapper">\n                                <!--<ul class="emotion_list"></ul>-->\n                                <!--<li class="emotion_item"><i class="icon_emotion"></i></li>-->\n                            </div>\n                            <ul class="emotion_navs" id="js_navbar">\n                                <!--<li class="emotion_nav"></li>-->\n                            </ul>\n                        </div>\n                    </div>\n                </span>\n            </div>\n            <div class="discuss_btn_wrp"><a id="js_cmt_submit" class="btn btn_primary btn_discuss btn_disabled" href="##">留言</a></div>\n            <div class="discuss_list_wrp" style="display:none">\n                <div class="rich_tips with_line title_tips discuss_title_line">\n                    <span class="tips">我的留言</span>\n                </div>\n                <ul class="discuss_list" id="js_cmt_mylist"></ul>\n            </div>\n            <div class="rich_tips tips_global loading_tips" id="js_mycmt_loading">\n                <img src="<#=window.icon_loading_white#>" class="rich_icon icon_loading_white" alt="">\n                <span class="tips">加载中</span>\n            </div>\n            <div class="wx_poptips" id="js_cmt_toast" style="display:none;">\n                <img alt="" class="icon_toast" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAABqCAYAAABUIcSXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMTUxMzkxZS1jYWVhLTRmZTMtYTY2NS0xNTRkNDJiOGQyMWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTA3QzM2RTg3N0UwMTFFNEIzQURGMTQzNzQzMDAxQTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTA3QzM2RTc3N0UwMTFFNEIzQURGMTQzNzQzMDAxQTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWMyOGVjZTMtNzllZS00ODlhLWIxZTYtYzNmM2RjNzg2YjI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNTEzOTFlLWNhZWEtNGZlMy1hNjY1LTE1NGQ0MmI4ZDIxYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmvxj1gAAAVrSURBVHja7J15rF1TFMbXk74q1ZKHGlMkJVIhIgg1FH+YEpEQJCKmGBpThRoSs5jVVNrSQUvEEENIhGiiNf9BiERICCFIRbUiDa2qvudbOetF3Tzv7XWGffa55/uS7593977n3vO7e5+199p7v56BgQGh0tcmvAUERREUQVEERREUQVEERREUQVEERREUQVEERREUQVEERREUQVEERVAUQVEERVAUQbVYk+HdvZVG8b5F0xj4RvhouB+eCy8KrdzDJc1RtAX8ILxvx98V1GyCSkN98Cx4z/95/Wn4fj6j6tUEeN4wkFSnw1MJqj5NhBfAuwaUHREUg4lqNMmePVsHll/HFhVfe1t3FwpJI8DXCCquDrCWNN4B6Tb4M3Z98aTPmTvh0YHl18PXw29yZiKejoPvcUD6E74yFBJbVDk6Bb7K8aP/Hb4c/tRzEYIqprPhSxzlf4Uvhb/0Xoig8qnHAJ3lqPMzfDH8XZ4LEpRf2sVdA5/sqPO9Qfop70UJyn+/boaPddT5yrq7VUUvTIVJI7q74MMddXR8NB1eXcYvhBpZm0s2w72/o86HFoKvLau/pYaXzjLMdUJ6y0LwtWV9CIIaXtvA8+G9HHV03u5q+K+yH47U0NoRngPv7KjzHDwTLj0bS1BDazfJJlcnOOostC6ysnCT+q80G/sIvFVgeW09D8FPVT0uoP7VfvAD8NjA8pqmuAN+OcYAjso0RbIZ8DGB5TVNcRO8JMaHY9SXSdfa3eeANJimWBLrA7JFiZwIXye+NMUV8CcxP2SRFjXefok7NRjSGZJlWUPvw2/wtNiQirSoXWyMsR28wR7AzzYM0oXw+Y7yK+CLJGeaoqjyrJSdZJD6Ov4+z5y6NJc0Az7NUecHydIUy+v60KNyQHoM3nKI1y7YCFiq0i7uBvgER52vDdKqWn9djhY1Dn4G3n6Ecqm2rF74dvgoR53S0hQxW9RJAZAGW5bSn58QJA27dQ7uIEedjywEX5NKVxCqsY6y+qA+LxFI4+yZ6oH0trWkNan80jygtIUsc5SflgAsDXgehfdx1KkkTRE76tN+Xue2jnTU0Ru1oIbvpt30bBtKhOp5yaaRkts0lic8V1i6dPcIRx2d/l8Y8XtNNEg7OOo8bl1kmmOKnDsO88CaYzejau0hWZqiL7C83oCH4SeTHvwV2BqqsHRVztSEYOmWF80NeXZT6Hd4KflResE9vCnBOlCyGfDNAstHTVPUDWoQ1t3iW+9WNizvlhfd4aerXd+ThqiMfNR6+9LvOOro5OY5JX2H4+F7HZD+kGzlamMgldWiirQsjcwWFbjmqZJteekJLK9pisvgL6RhKvuciZiwzrWWGapfrPy30kBVcSBIrw0aD3PU0XB6cehntq7rTMf7/2iQlktDVdXJLXlg6VjmiYBn6rWSTRCH6hvJ0hQrpcGq8oidsmHpTP8t8DGO9/vcWt9qabiqPgup1yKyQwvC2tSefZ73SSpNkUJ4PlLorlHZ+446nc8f3fIyywlJhwrTuwVSjBa1ccvSxN0hjjoK5xVrYZMd9V6XbFfgBukixTwGLg8sDam3dZR/wZ6L/dJlin1en8LS+bgpFbz3Ygvzu1J1HKxYNqxGpCmaCEo12rrBorD6LRp8UbpcdR5VWhTW35KlKd6QFqjuM2XzwlpnMxTvSkuUwuG/Xlg6NtPjbT6WFimF/VG6LEvXgn8QGDjMbBukVECFwhpoS+CQatfX2Q1q6H7wENHdrfCr0lKleEB9JyxNneus+VJpsVL9TwI6W65LovWIGl3KtVJaLv7LBwYTFEERFEVQFEERFEVQFEERFEVQFEERFEVQFEERFEVQFEERFFWq/hFgADUMN4RzT6/OAAAAAElFTkSuQmCC">\n                <p class="toast_content">已留言</p>\n            </div>\n        </div>\n    </div>\n<#}#>\n';
});define("appmsg/cmt_tpl.html.js",[],function(){
return'<#if(window.new_appmsg){#>\n<li class="discuss_item cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>" id="cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>">\n    <# if(is_elected == 1){ #>\n    <div class="discuss_opr">\n        <span class="media_tool_meta tips_global meta_praise js_comment_praise <# if(like_status == 1){ #>praised<# } #>" data-status="<#=like_status#>" data-content-id=\'<#=content_id#>\'>\n            <i class="icon_praise_gray"></i>\n            <span class="praise_num"><# if(like_num_format !== 0){ #><#=like_num_format#> <# } #></span>\n        </span>\n    </div>\n    <# } #>\n    <div class="user_info">\n        <strong class="nickname"><#=nick_name#><# if(is_from_friend == 1){ #>(朋友)<# } #></strong>\n        <img class="avatar" src="<#=logo_url#>">\n        <# if(typeof is_top === \'number\' && is_top == 1){ #><span class="icon_appmsg_tag">置顶</span><# } #>\n    </div>\n    <div class="discuss_message">\n        <span class="discuss_status"><#=status#></span>\n        <div class="discuss_message_content"><#=content#></div>\n    </div>\n    <p class="discuss_extra_info">\n        <#=time#>               \n        <# if (is_from_me == 1) { #>\n        <a class="discuss_del js_del" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">删除</a>\n        <# } #>\n    </p>\n    <# if(reply && reply.reply_list && reply.reply_list.length > 0){ #>\n        <div class="reply_result">\n            <div class="discuss_opr">\n                <span class="media_tool_meta tips_global meta_praise js_reply_praise <# if(reply.reply_list[0].reply_like_status == 1){ #>praised<# } #>" data-status="<#=reply.reply_list[0].reply_like_status#>" data-content-id="<#=content_id#>" data-reply-id=\'<#=reply.reply_list[0].reply_id#>\'>\n                    <i class="icon_praise_gray"></i>\n                    <span class="praise_num"><# if(reply.reply_list[0].reply_like_num_format !== 0){ #><#=reply.reply_list[0].reply_like_num_format#> <# } #></span>\n                </span>\n            </div>\n            <#if(window.new_appmsg){#>\n            <div class="nickname">作者</div>\n            <#}else{#>\n            <div class="nickname">作者回复</div>\n            <# } #>\n            <div class="discuss_message">\n                <div class="discuss_message_content"><#=reply.reply_list[0].content#></div>\n            </div>\n            <p class="discuss_extra_info"><#=reply.reply_list[0].time#></p>\n        </div>\n    <# } #>\n        \n</li>\n<#}else{#>\n<li class="discuss_item cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>" id="cid<# if (is_from_me == 1) { #><#=my_id#><# } else { #><#=content_id#><# } #>">\n    <# if(is_elected == 1){ #>\n    <div class="discuss_opr">\n        <span class="media_tool_meta tips_global meta_praise js_comment_praise <# if(like_status == 1){ #>praised<# } #>" data-status="<#=like_status#>" data-content-id=\'<#=content_id#>\'>\n            <i class="icon_praise_gray"></i>\n            <span class="praise_num"><# if(like_num_format !== 0){ #><#=like_num_format#> <# } #></span>\n        </span>\n    </div>\n    <# } #>\n    <div class="user_info">\n        <strong class="nickname"><#=nick_name#><# if(is_from_friend == 1){ #>(朋友)<# } #></strong>\n        <img class="avatar" src="<#=logo_url#>">\n        <# if(typeof is_top === \'number\' && is_top == 1){ #><span class="icon_discuss_top">置顶</span><# } #>\n    </div>\n    <div class="discuss_message">\n        <span class="discuss_status"><#=status#></span>\n        <div class="discuss_message_content"><#=content#></div>\n    </div>\n    <p class="discuss_extra_info">\n        <#=time#>               \n        <# if (is_from_me == 1) { #>\n        <a class="discuss_del js_del" data-my-id="<#=my_id#>" data-content-id="<#=content_id#>">删除</a>\n        <# } #>\n    </p>\n    <# if(reply && reply.reply_list && reply.reply_list.length > 0){ #>\n        <div class="reply_result">\n            <div class="discuss_opr">\n                <span class="media_tool_meta tips_global meta_praise js_reply_praise <# if(reply.reply_list[0].reply_like_status == 1){ #>praised<# } #>" data-status="<#=reply.reply_list[0].reply_like_status#>" data-content-id="<#=content_id#>" data-reply-id=\'<#=reply.reply_list[0].reply_id#>\'>\n                    <i class="icon_praise_gray"></i>\n                    <span class="praise_num"><# if(reply.reply_list[0].reply_like_num_format !== 0){ #><#=reply.reply_list[0].reply_like_num_format#> <# } #></span>\n                </span>\n            </div>\n            <#if(window.new_appmsg){#>\n            <div class="nickname">作者</div>\n            <#}else{#>\n            <div class="nickname">作者回复</div>\n            <# } #>\n            <div class="discuss_message">\n                <div class="discuss_message_content"><#=reply.reply_list[0].content#></div>\n            </div>\n            <p class="discuss_extra_info"><#=reply.reply_list[0].time#></p>\n        </div>\n    <# } #>\n        \n</li>\n<#}#>\n';
});define("sougou/a_tpl.html.js",[],function(){
return'<h3 class="rich_media_area_title">相关文章</h3>\n<ul class="relate_article_list">\n    <# for(var i in list){#>\n    <li class="relate_article_item">\n        <a class="relate_article_link sg_link" href="<#=list[i].url#>" target="_blank"><#=list[i].title#></a>\n    </li>\n    <#}#>\n</ul>\n';
});define("appmsg/emotion/emotion.js",["appmsg/emotion/dom.js","appmsg/emotion/slide.js","appmsg/emotion/common.js","appmsg/emotion/nav.js","appmsg/emotion/textarea.js","biz_common/utils/emoji_data.js","biz_common/utils/emoji_panel_data.js"],function(t,n){
"use strict";
function i(){
v.WIDTH=S=_("#js_article").width()||_("#js_cmt_mine").width(),v.pageCount=M=e(),
o(),a(),s();
}
function e(){
d=S-2*P,C=parseInt(d/W),k=3*C-1;
var t=parseInt(R/k);
return R%k!==0&&t++,t;
}
function o(){
var t=_("#js_slide_wrapper"),n=v.wrapperWidth=M*S;
t.css({
width:n+"px"
});
}
function a(){
for(var t=_("#js_slide_wrapper").el[0],n=(S-C*W)/2,i=0,e=M;e>i;i++){
var o=document.createElement("ul");
o.setAttribute("class","emotion_list"),t.appendChild(o),_(o).css({
width:S+"px",
"float":"left",
"padding-left":n+"px",
"padding-right":"0"
}),r(o,i,n);
}
}
function s(){
for(var t=_("#js_navbar"),n=0,i=M;i>n;n++){
var e=_(_.el("li"));
e.attr("class","emotion_nav js_emotion_nav"),D.push(e),t.append(e);
}
v.navs=D;
}
function r(t,n,i){
for(var e=0,o=k;o>e;e++){
var a=document.createElement("li");
if(y++,y>R)break;
a=c(y),_(t).append(a);
}
var s=m(i);
_(t).append(s);
}
function c(t){
var n=_(_.el("li")),i=_(_.el("i")),e=0;
i.attr("class","icon_emotion icon"+t),i.css({
"background-position":"0px "+((1-t)*Z-e)+"px"
}),n.attr("class","emotion_item js_emotion_item"),n.attr("data-index",t);
var o=W+"px";
return n.css({
width:o,
height:o
}),n.append(i),n;
}
function m(t){
var n=_(_.el("li")),i=_(_.el("i"));
n.attr("class","emotion_item del js_emotion_item"),n.attr("data-index",-1),i.attr("class","icon_emotion del");
var e=W+"px";
return n.css({
width:e,
height:e,
right:t+"px"
}),n.append(i),n;
}
function p(){
function t(){
o.show(),w.show(),e.blur(),_.later(function(){
e.blur();
});
}
function n(){
o.hide(),w.hide(),e.focus(),_.later(function(){
e.focus();
});
}
w=_("#js_emotion_panel");
var i=_("#js_cmt_input"),e=i.el[0],o=_("#js_emotion_panel_arrow_wrp");
w.hide(),_("#js_emotion_switch").on("tap",function(i){
i.preventDefault(),i.stopPropagation(),g=!g,g?t():n();
}),i.on("tap",function(){
w.hide(),g=!1;
});
}
function l(){
function t(t){
if(!v.isMoved){
var n=_(t.currentTarget),i=+n.attr("data-index");
h.inputEmotion(i);
}
}
_("li.js_emotion_item").on("click",t),_("li.js_emotion_item").on("touchend",t);
}
function u(t){
for(var n=[],i=0;i<x.length;i++){
var e=x[i];
if(e.cn){
var o=new RegExp(e.cn.replace("[","\\[").replace("]","\\]"),"g"),a=t.match(o);
a&&(n=n.concat(a));
}
if(e.emoji){
var o=new RegExp(e.emoji,"g"),a=t.match(o);
a&&(n=n.concat(a));
}
}
return _.each(n,function(n){
if(void 0!==I[n]){
var i=I[n],e=O[i],o='<i class="icon_emotion_single '+e+'"></i>';
t=t.replace(n,o);
}
}),t;
}
for(var d,_=t("appmsg/emotion/dom.js"),f=t("appmsg/emotion/slide.js"),v=t("appmsg/emotion/common.js"),j=t("appmsg/emotion/nav.js"),h=t("appmsg/emotion/textarea.js"),n=(_.each,
{}),g=!1,w=null,x=t("biz_common/utils/emoji_data.js"),b=t("biz_common/utils/emoji_panel_data.js"),E={},I={},O=[],T=0;T<x.length;T++){
var N=x[T];
E[N.id]=N;
}
for(var T=0;T<b.length;T++){
var z=b[T],N=E[z];
I[N.cn]=T,N.emoji&&(I[N.emoji]=T),O.push(N.style);
}
var M,k,C,S,D=[],P=15,R=v.EMOTIONS_COUNT,W=v.EMOTION_LI_SIZE,Z=v.EMOTION_SIZE;
n.init=function(){
p(),i(),f.init(),j.activeNav(0),l(),h.init();
};
var y=0;
return n.encode=function(t){
t=u(t);
var n=/\/([\u4e00-\u9fa5\w]{1,4})/g,i=t.match(n);
return i?(_.each(i,function(n){
var i=n.replace("/",""),e=[i.slice(0,4),i.slice(0,3),i.slice(0,2),i.slice(0,1)];
_.each(e,function(n){
if(void 0!==I["["+n+"]"]){
var i=I["["+n+"]"],e=O[i],o='<i class="icon_emotion_single '+e+'"></i>';
t=t.replace("/"+n,o);
}
});
}),t):t;
},n.hidePannel=function(){
w.hide();
},n;
});