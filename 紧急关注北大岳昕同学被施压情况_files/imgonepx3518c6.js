define("new_video/ctl.js",["biz_wap/utils/ajax.js"],function(e){
"use strict";
var i;
if(parent==window)i=window;else try{
{
parent.window.location.href;
}
i=parent.window;
}catch(t){
i=window;
}
var r=i.user_uin,n=Math.floor(i.user_uin/100)%20;
r||(n=-1);
var a=function(){
return n>=0;
};
i.__webviewid||(i.__webviewid=+new Date+"_"+Math.ceil(1e3*Math.random()));
var d=function(){
var e=i.mid,t=i.idx,n="";
n=e&&t?e+"_"+t:"";
var a=i.__webviewid,d=[r,n,a].join("_");
return d;
},o=function(i){
if(20>n)try{
var t=i.vid||"",r={};
r.__biz=parent.window.biz||"",r.vid=t,r.clienttime=+new Date;
var o=parent.window.mid,w=parent.window.idx,_="";
o&&w?(r.type=1,_=o+"_"+w):(r.type=2,_=t),r.id=_,r.webviewid=d(),r.step=i.step||0,
r.orderid=i.orderid||0,r.ad_source=i.ad_source||0,r.traceid=i.traceid||0,r.ext1=i.ext1||"",
r.ext2=i.ext2||"",r.r=Math.random(),r.devicetype=parent.window.devicetype,r.version=parent.window.clientversion,
r.is_gray=a()?1:0;
var c=e("biz_wap/utils/ajax.js");
c({
url:"/mp/ad_video_report?action=user_action",
type:"post",
data:r
});
}catch(v){}
};
return{
report:o,
getWebviewid:d,
showAd:a
};
});define("a/testdata.js",[],function(){
"use strict";
function e(){
var e=[],a=new RegExp("(^|&)mock_ad=([^&]*)(&|$)","i"),i=window.location.search.substr(1).match(a);
if(i&&i[2]){
for(var t=i[2],d=t.split("_"),c=0;c<d.length;c++){
var B=p["pt_"+d[c]];
B&&e.push(B);
}
return e;
}
}
var p={
pt_2:{
ad_desc:"",
aid:"14152818",
app_info:{
apk_name:"com.tuan800.tao800",
apk_url:"http://imtt.dd.qq.com/16891/ECAB9669DE7A77DACA842CF2E4CEA9CE.apk?fsname=com.tuan800.tao800_4.22.0_42207.apk&amp;csr=1bca",
app_id:100734944,
app_md5:"ECAB9669DE7A77DACA842CF2E4CEA9CE",
app_name:"折800-独家折扣优惠买",
app_rating:4.93209,
app_size:29068789,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/ECAB9669DE7A77DACA842CF2E4CEA9CE.apk?fsname=com.tuan800.tao800_4.22.0_42207.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635363934363334",
desc:"折800，手机必备购物APP，大牌折扣，好货底价购，服饰、家居，母婴、家电、鞋包……全品类覆盖，用心生活，精明消费，省钱又省心【新人好礼】新人专享、爆款秒杀，海量红包等你拿【品牌折扣】达芙妮、美的、COACH等半价购【劲爆促销】每日千余商品限时特卖，就是那么低价【正品保证】品牌授权，商家信誉严格把控【9大工序】商品细节，使用体验等全方位评测【职业选款】优中选优，超高性价比【抄底捡价】心黑手狠帮您砍价低至1折【嗨购活动】拼团、领券、抽奖、拍卖玩儿不停【签到赚钱】签到赚积分，积分当钱花【任性包邮】全场包邮，呼朋唤友来抢购【售后无忧】8天无理由退换，退货就返券，你来任性，小折为你买单！【联系我们】折800数千员工随时为你解决任何问题！客服：电话400-0611-800；QQ群：199512527 意见反馈：app@tuan800.com官方微博微信同步搜索：折800官方网址：m.zhe800.com；www.zhe800.com",
down_count:65980944,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_187076_1502105988/256",
new_feature:"1、99大促即将来袭！前方新一波优惠等你来拿2、收藏夹也能方便找到设置提醒的商品~3、优化用户体验，修复了部分已知功能~",
signature_md5:"CBFAB0D55237931C650DF038C6AE9E93",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_187076_1_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_2_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_3_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_4_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_5_1503288410/330",
url_scheme:"",
version_code:42207
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=GV0J%2BtrsQQNyp%2BMYCgCMCeQ%2BaDcHVWgrdGS7V5G4iSYtFxzSguZ2DNnNq%2BeZnD%2FfRi93PAMqHeVeUvIH5OA%2BIR7ZYjjMe%2F6lSbTRJeAd5DT4puSh4JVGBXQv3aqNQWOztu%2FFDjM6vegBDn5amzfSx2mUl1%2Fk1QVce8W4sFM8GUdGdygypG0IaxWwEMUQYVfiOvQI7yZaDF21S0bk3D7VqjQaGWUT18yOHKNVaLzU0eF5nBV4PgIGsBC1whR%2FsVfYK5KKc2qF3BMn1aBZu6JF23lKsAcHF5uQkTEhRDLPWLjjBMQbO6KvNV%2FzJSFBY5QkuV3A%2FOEOyEkd7ANb4o6rxn3AaxTvoJ7VHcIUq%2BIjBHSsTqNvSUTAkbdjBEPI%2BPCnYPF0im0cABILaTelvbzgg6dZVTdUH65f7BEqwpqxsJYva9XTEWi3lrMLHPwVmsydPbQ1fh9ZlyQG25jBM63BFyADYFq%2Bw3dDDycH1ySKNpIY8I7Uai8hmmcih3Wp9%2BbSXi1q1bPphmjwzY%2BHN1VxUnOnsqFbm%2B3tVuwEzjluodNcOS3c9U88DOnrtcziWksr9HuXR0Tyg2ao%2B44FmRkxxsgXOQRdzLul4Ur8yCE27pApqEAklKB%2BxaVd%2FDGFXqKsoFnFiRTVpm47yF7Ms9ui%2BNZWT91h%2FB1scMsN95qbki%2Bsz04lhaVkCKtIGxkBbeaxGVSGfCWc8l9LNscT8xQeIx7p9TIClLkoATVIFSpCnsrA6SqgZBbtaNlAPbBqgH7Y22AS5U4ajsMyHBIwKqRMtY%2BJEnfMYe5VBdJULSgbocsw%2FeTs4ZB0v0Aap14nEAX6rJD6tZMm1WD5eiNc%2BtURhbV0VU4ITvy5oPBb5O4Fa0GgcyafzYzMbRtApCWN2Xrmm8W774qHvFbITLWUBIsKE5rpKZUQ14BOLTGmt48zXU9HFLl6vA1h7955ip6ZdeYu7BbmHscY68GN%2B%2F7jcKx7tx7HfP2uXr5EulUtVID86vitwn8OIsTGdxgfYkI3CNRHYfBbLru1MV2xjzVT0PY8djLbhscGWZZGF%2BvkYoGEmApWQ78hPRVLRxO1IVBlrZf4Kk1fgEhpNmk%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"包2-0731-优秀女装",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410c82bf63643209dd9cb247c79f446aaa0020300b9770400&amp;hy=SH&amp;storeid=32303137303831343039343633383030303263303631313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:2,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=GV0J%2BtrsQQNyp%2BMYCgCMCeQ%2BaDcHVWgrdGS7V5G4iSYtFxzSguZ2DNnNq%2BeZnD%2FfRi93PAMqHeVeUvIH5OA%2BIR7ZYjjMe%2F6lSbTRJeAd5DT4puSh4JVGBXQv3aqNQWOztu%2FFDjM6vegBDn5amzfSx2mUl1%2Fk1QVce8W4sFM8GUdGdygypG0IaxWwEMUQYVfiOvQI7yZaDF21S0bk3D7VqjQaGWUT18yOHKNVaLzU0eF5nBV4PgIGsBC1whR%2FsVfYK5KKc2qF3BMn1aBZu6JF23lKsAcHF5uQkTEhRDLPWLjjBMQbO6KvNV%2FzJSFBY5QkuV3A%2FOEOyEkd7ANb4o6rxn3AaxTvoJ7VHcIUq%2BIjBHSsTqNvSUTAkbdjBEPI%2BPCnYPF0im0cABILaTelvbzgg6dZVTdUH65f7BEqwpqxsJYva9XTEWi3lrMLHPwVmsydPbQ1fh9ZlyQG25jBM63BFyADYFq%2Bw3dDDycH1ySKNpIY8I7Uai8hmmcih3Wp9%2BbSXi1q1bPphmjwzY%2BHN1VxUnOnsqFbm%2B3tVuwEzjluodNcOS3c9U88DOnrtcziWksr9HuXR0Tyg2ao%2B44FmRkxxsgXOQRdzLul4Ur8yCE27pApqEAklKB%2BxaVd%2FDGFXqKsoFnFiRTVpm47yF7Ms9ui%2BNZWT91h%2FB1scMsN95qbki%2Bsz04lhaVkCKtIGxkBbeaxGVSGfCWc8l9LNscT8xQeIx7p9TIClLkoATVIFSpCnsrA6SqgZBbtaNlAPbBqgH7Y22AS5U4ajsMyHBIwKqRMtY%2BJEnfMYe5VBdJULSgbocsw%2FeTs4ZB0v0Aap14nEAX6rJD6tZMm1WD5eiNc%2BtURhbV0VU4ITvy5oPBb5O4Fa0GgcyafzYzMbRtApCWN2Xrmm8W774qHvFbITLWUBIsKE5rpKZUQ14BOLTGmt48zXU9HFLl6vA1h7955ip6ZdeYu7BbmHscY68GN%2B%2F7jcKx7tx7HfP2uXr5EulUtVID86vitwn8OIsTGdxgfYkI3CNRHYfBbLru1MV2xjzVT0PY8djLbhscGWZZGF%2BvkYoGEmApWQ78hPRVLRxO1IVBlrZf4Kk1fgEhpNmk%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0roylv2tqhiegu00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=100734944&weixinadkey=08492438fabea0fa20ea10ca113c9c77ab393b4afe956b9402cb9c146446a4897b07983cdf4c87e494525135bbbf6c75&ticket=2vzb4elulhdn4&gdt_vid=wx03uxqfwz22ubsa00&channel_id=000116083636303834373639&md5sum=9A454F1F2CC41E3A02295D688871F7E1&weixinadinfo=13262845.wx03uxqfwz22ubsa00.0.1#wechat_redirect",
watermark_type:3
},
pt_2x1:{
ad_desc:"",
aid:"14152818",
app_info:{
apk_name:"com.tuan800.tao800",
apk_url:"http://imtt.dd.qq.com/16891/ECAB9669DE7A77DACA842CF2E4CEA9CE.apk?fsname=com.tuan800.tao800_4.22.0_42207.apk&amp;csr=1bca",
app_id:100734944,
app_md5:"ECAB9669DE7A77DACA842CF2E4CEA9CE",
app_name:"折800-独家折扣优惠买",
app_rating:4.93209,
app_size:29068789,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/ECAB9669DE7A77DACA842CF2E4CEA9CE.apk?fsname=com.tuan800.tao800_4.22.0_42207.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635363934363334",
desc:"折800，手机必备购物APP，大牌折扣，好货底价购，服饰、家居，母婴、家电、鞋包……全品类覆盖，用心生活，精明消费，省钱又省心【新人好礼】新人专享、爆款秒杀，海量红包等你拿【品牌折扣】达芙妮、美的、COACH等半价购【劲爆促销】每日千余商品限时特卖，就是那么低价【正品保证】品牌授权，商家信誉严格把控【9大工序】商品细节，使用体验等全方位评测【职业选款】优中选优，超高性价比【抄底捡价】心黑手狠帮您砍价低至1折【嗨购活动】拼团、领券、抽奖、拍卖玩儿不停【签到赚钱】签到赚积分，积分当钱花【任性包邮】全场包邮，呼朋唤友来抢购【售后无忧】8天无理由退换，退货就返券，你来任性，小折为你买单！【联系我们】折800数千员工随时为你解决任何问题！客服：电话400-0611-800；QQ群：199512527 意见反馈：app@tuan800.com官方微博微信同步搜索：折800官方网址：m.zhe800.com；www.zhe800.com",
down_count:65980944,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_187076_1502105988/256",
new_feature:"1、99大促即将来袭！前方新一波优惠等你来拿2、收藏夹也能方便找到设置提醒的商品~3、优化用户体验，修复了部分已知功能~",
signature_md5:"CBFAB0D55237931C650DF038C6AE9E93",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_187076_1_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_2_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_3_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_4_1503288410/330|http://pp.myapp.com/ma_pic2/0/shot_187076_5_1503288410/330",
url_scheme:"zhe800://goto_home",
version_code:42207
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=GV0J%2BtrsQQNyp%2BMYCgCMCeQ%2BaDcHVWgrdGS7V5G4iSYtFxzSguZ2DNnNq%2BeZnD%2FfRi93PAMqHeVeUvIH5OA%2BIR7ZYjjMe%2F6lSbTRJeAd5DT4puSh4JVGBXQv3aqNQWOztu%2FFDjM6vegBDn5amzfSx2mUl1%2Fk1QVce8W4sFM8GUdGdygypG0IaxWwEMUQYVfiOvQI7yZaDF21S0bk3D7VqjQaGWUT18yOHKNVaLzU0eF5nBV4PgIGsBC1whR%2FsVfYK5KKc2qF3BMn1aBZu6JF23lKsAcHF5uQkTEhRDLPWLjjBMQbO6KvNV%2FzJSFBY5QkuV3A%2FOEOyEkd7ANb4o6rxn3AaxTvoJ7VHcIUq%2BIjBHSsTqNvSUTAkbdjBEPI%2BPCnYPF0im0cABILaTelvbzgg6dZVTdUH65f7BEqwpqxsJYva9XTEWi3lrMLHPwVmsydPbQ1fh9ZlyQG25jBM63BFyADYFq%2Bw3dDDycH1ySKNpIY8I7Uai8hmmcih3Wp9%2BbSXi1q1bPphmjwzY%2BHN1VxUnOnsqFbm%2B3tVuwEzjluodNcOS3c9U88DOnrtcziWksr9HuXR0Tyg2ao%2B44FmRkxxsgXOQRdzLul4Ur8yCE27pApqEAklKB%2BxaVd%2FDGFXqKsoFnFiRTVpm47yF7Ms9ui%2BNZWT91h%2FB1scMsN95qbki%2Bsz04lhaVkCKtIGxkBbeaxGVSGfCWc8l9LNscT8xQeIx7p9TIClLkoATVIFSpCnsrA6SqgZBbtaNlAPbBqgH7Y22AS5U4ajsMyHBIwKqRMtY%2BJEnfMYe5VBdJULSgbocsw%2FeTs4ZB0v0Aap14nEAX6rJD6tZMm1WD5eiNc%2BtURhbV0VU4ITvy5oPBb5O4Fa0GgcyafzYzMbRtApCWN2Xrmm8W774qHvFbITLWUBIsKE5rpKZUQ14BOLTGmt48zXU9HFLl6vA1h7955ip6ZdeYu7BbmHscY68GN%2B%2F7jcKx7tx7HfP2uXr5EulUtVID86vitwn8OIsTGdxgfYkI3CNRHYfBbLru1MV2xjzVT0PY8djLbhscGWZZGF%2BvkYoGEmApWQ78hPRVLRxO1IVBlrZf4Kk1fgEhpNmk%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"包2-0731-优秀女装",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410c82bf63643209dd9cb247c79f446aaa0020300b9770400&amp;hy=SH&amp;storeid=32303137303831343039343633383030303263303631313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:2,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=GV0J%2BtrsQQNyp%2BMYCgCMCeQ%2BaDcHVWgrdGS7V5G4iSYtFxzSguZ2DNnNq%2BeZnD%2FfRi93PAMqHeVeUvIH5OA%2BIR7ZYjjMe%2F6lSbTRJeAd5DT4puSh4JVGBXQv3aqNQWOztu%2FFDjM6vegBDn5amzfSx2mUl1%2Fk1QVce8W4sFM8GUdGdygypG0IaxWwEMUQYVfiOvQI7yZaDF21S0bk3D7VqjQaGWUT18yOHKNVaLzU0eF5nBV4PgIGsBC1whR%2FsVfYK5KKc2qF3BMn1aBZu6JF23lKsAcHF5uQkTEhRDLPWLjjBMQbO6KvNV%2FzJSFBY5QkuV3A%2FOEOyEkd7ANb4o6rxn3AaxTvoJ7VHcIUq%2BIjBHSsTqNvSUTAkbdjBEPI%2BPCnYPF0im0cABILaTelvbzgg6dZVTdUH65f7BEqwpqxsJYva9XTEWi3lrMLHPwVmsydPbQ1fh9ZlyQG25jBM63BFyADYFq%2Bw3dDDycH1ySKNpIY8I7Uai8hmmcih3Wp9%2BbSXi1q1bPphmjwzY%2BHN1VxUnOnsqFbm%2B3tVuwEzjluodNcOS3c9U88DOnrtcziWksr9HuXR0Tyg2ao%2B44FmRkxxsgXOQRdzLul4Ur8yCE27pApqEAklKB%2BxaVd%2FDGFXqKsoFnFiRTVpm47yF7Ms9ui%2BNZWT91h%2FB1scMsN95qbki%2Bsz04lhaVkCKtIGxkBbeaxGVSGfCWc8l9LNscT8xQeIx7p9TIClLkoATVIFSpCnsrA6SqgZBbtaNlAPbBqgH7Y22AS5U4ajsMyHBIwKqRMtY%2BJEnfMYe5VBdJULSgbocsw%2FeTs4ZB0v0Aap14nEAX6rJD6tZMm1WD5eiNc%2BtURhbV0VU4ITvy5oPBb5O4Fa0GgcyafzYzMbRtApCWN2Xrmm8W774qHvFbITLWUBIsKE5rpKZUQ14BOLTGmt48zXU9HFLl6vA1h7955ip6ZdeYu7BbmHscY68GN%2B%2F7jcKx7tx7HfP2uXr5EulUtVID86vitwn8OIsTGdxgfYkI3CNRHYfBbLru1MV2xjzVT0PY8djLbhscGWZZGF%2BvkYoGEmApWQ78hPRVLRxO1IVBlrZf4Kk1fgEhpNmk%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0roylv2tqhiegu00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=100734944&weixinadkey=08492438fabea0fa20ea10ca113c9c77ab393b4afe956b9402cb9c146446a4897b07983cdf4c87e494525135bbbf6c75&ticket=2vzb4elulhdn4&gdt_vid=wx03uxqfwz22ubsa00&channel_id=000116083636303834373639&md5sum=9A454F1F2CC41E3A02295D688871F7E1&weixinadinfo=13262845.wx03uxqfwz22ubsa00.0.1#wechat_redirect",
watermark_type:3
},
pt_2x2:{
hint_txt:"世包国际中心",
url:"https://www.91xiangju.com/commodity-house/369.html?cps_id=3000&weixinadkey=217129ad35c6d7141bc4c9577a505c807cc3c263469de4f24a65ba4b327ed70ee7c4ca4e96aa8b31040617d05f57a817&gdt_vid=wx03amsjux4cp62m00&weixinadinfo=14865209.wx03amsjux4cp62m00.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=nMtwP4DM39pQbfG2MjMiPaYrUMO%2FJlRdJcx1gAeqVSArpTWI7%2B7y5Ht0kNp7csV8pOg%2FCfbBLuWaAE%2BQgraIsY3BBYWJHEo6s5pH52kt04VbIcVvsC9EDTMT8VNmjloczICeGrPg%2BZiuEpH5OmN0tcpmyRxQubnkJ%2FJh%2BNJeGVFoWksMMS1RY%2FLqq2gJIunfdfLDhIcXHMCqSyctGcNfuoJ78h2AzHvAmTUpbBtOlYywptyitKcYYeSRbqvkzceFcceJoQW%2BJTwNNnL3hTgy7dNV9DVM%2FC9gCpr%2FNwube1jLBeddaGt%2FIdCGnmAWGyxPVy8t9dMB8ylm53oxtlFbyqclxhsqF9Y9wVqwc2g3PimFbjQ4erW2y8wmSLmlRII533pLZFSJKMynsDoKlzlT7VqGdQluXpAsymEzLomiu%2BSx6gKPd%2FNb641%2BF9gHX3A7Kof7js09WvzhmuTy14FThgXSppOFQGQvNa9UZh9pwIu7uBiCKeEuXT1Xh3xTnN8Uz4lXsu89z68PPzjjktaLu3ES8tBg1oc8DAOW8WAhD17FMHFN3zXD1cdY92cqDsq8pLcEsOoHL9lUnygABEXYcD8CI21X0lGskYmZK6bqwXbjMcuM5DiAn6cBJgb2hDEX0rHhWHuk5c1b4Ty%2BHomACBN9hHlmWLZ8RYtjN%2FbQWnhi7ybJD7PFgZWviYkLAHKGDv%2BlSqpHPehq8OV1a0qvSEnlJVs9oWna%2FqchzosBgDjsykippj7sWCczPWIwFTT5NBdmo%2BNsaxnWbg1Y3iK1jGRVIv0ARLCl9ePlxmNyhqyeQUS7BNyE4%2FODWhmrrLe67UTTMC2eWkI56g6DumY%2FDlffZP4oh9svjtQT3gwuTjbXYR%2B9tdJUEkMAmeAFBh4irS6LZtK6j3feD5l2%2FGCBs6U2y5dwTTXoosD8v8W6LeVbVLAw4di8QaToPwn2wS7lYw%2FTfwvqDuCv5iwecgKyV%2FEDtqoTMWsfZf2Pv1eGySdd0A%2BHYudVDt3H%2BA8BUwP0RU6JstNsP%2FvSHXkjxFoYvsNPdjNaimMfLdoT5r6%2BC5dSFBpuVw1RJSZgS8ZaUs5SPctBzBmNKgTZdnknL6QpdWX9j79Xhskn",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=nMtwP4DM39pQbfG2MjMiPaYrUMO%2FJlRdJcx1gAeqVSArpTWI7%2B7y5Ht0kNp7csV8pOg%2FCfbBLuWaAE%2BQgraIsY3BBYWJHEo6s5pH52kt04VbIcVvsC9EDTMT8VNmjloczICeGrPg%2BZiuEpH5OmN0tcpmyRxQubnkJ%2FJh%2BNJeGVFoWksMMS1RY%2FLqq2gJIunfdfLDhIcXHMCqSyctGcNfuoJ78h2AzHvAmTUpbBtOlYywptyitKcYYeSRbqvkzceFcceJoQW%2BJTwNNnL3hTgy7dNV9DVM%2FC9gCpr%2FNwube1jLBeddaGt%2FIdCGnmAWGyxPVy8t9dMB8ylm53oxtlFbyqclxhsqF9Y9wVqwc2g3PimFbjQ4erW2y8wmSLmlRII533pLZFSJKMynsDoKlzlT7VqGdQluXpAsymEzLomiu%2BSx6gKPd%2FNb641%2BF9gHX3A7Kof7js09WvzhmuTy14FThgXSppOFQGQvNa9UZh9pwIu7uBiCKeEuXT1Xh3xTnN8Uz4lXsu89z68PPzjjktaLu3ES8tBg1oc8DAOW8WAhD17FMHFN3zXD1cdY92cqDsq8pLcEsOoHL9lUnygABEXYcD8CI21X0lGskYmZK6bqwXbjMcuM5DiAn6cBJgb2hDEX0rHhWHuk5c1b4Ty%2BHomACBN9hHlmWLZ8RYtjN%2FbQWnhi7ybJD7PFgZWviYkLAHKGDv%2BlSqpHPehq8OV1a0qvSEnlJVs9oWna%2FqchzosBgDjsykippj7sWCczPWIwFTT5NBdmo%2BNsaxnWbg1Y3iK1jGRVIv0ARLCl9ePlxmNyhqyeQUS7BNyE4%2FODWhmrrLe67UTTMC2eWkI56g6DumY%2FDlffZP4oh9svjtQT3gwuTjbXYR%2B9tdJUEkMAmeAFBh4irS6LZtK6j3feD5l2%2FGCBs6U2y5dwTTXoosD8v8W6LeVbVLAw4di8QaToPwn2wS7lYw%2FTfwvqDuCv5iwecgKyV%2FEDtqoTMWsfZf2Pv1eGySdd0A%2BHYudVDt3H%2BA8BUwP0RU6JstNsP%2FvSHXkjxFoYvsNPdjNaimMfLdoT5r6%2BC5dSFBpuVw1RJSZgS8ZaUs5SPctBzBmNKgTZdnknL6QpdWX9j79Xhskn",
traceid:"wx03amsjux4cp62m00",
group_id:"",
ticket:"",
aid:"14865209",
pt:2,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410c07d2c3e99938774bdb158ef262589b8020300847c0400&hy=SH&storeid=32303137303832393039343230313030303030353762313336666664393336663561333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"",
pos_type:0,
watermark_type:2,
logo:"",
is_cpm:0,
dest_type:0
},
pt_2x3:{
hint_txt:"10769-宝丽爵-0824",
url:"https://mob.viewlayer.cn/?mtag=59a535c89b167282979719&weixinadkey=86e6eb5c544f70e026d52e419149d2026973d0aa1889900a2eb167ab40fc30662db001d032c56f030897f6cd7a77d20b&gdt_vid=wx0fjcetau7qkfqy00&weixinadinfo=14889680.wx0fjcetau7qkfqy00.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=91fgdLRf69awj12CmDMtqxE502q5uM%2BXPE8qWCUo9pxG3r%2FVfjPdr6txG%2FJAFtk6b2PHfACRtmGUkuhwpl8izS%2FRR1NMxl4Gdbz2epUMSkPKvgB6DMAM5dVWeFaB%2Bpf3D1WGaEbphEtyK3JKuMbFVGCiGSKvKH6RZMlM%2B0GKwFr07Z2hXNl41u6hocy2oqNZ6avM1M8HXTKpd4ks4v5%2BwgzpL3u%2BhpHLQvR0cyXPeQ4IPuunzCk6vKax%2FnFkiv9s5rjgsfuttNWN9SGJsofEf9mAbi8nP0CpYsyLxhAuTDmctClLYMKKs2tWW%2Fqcu%2BEjbSWf6jRi4%2Fqc41MSy4FnJOxUwoDqperrCJtKjJyve4XXXdwLl1RfeYNBCRjdrBK83FkSgDdDPpUTvUXGJpbxe0hvniD5gPXFZOePuohpTe3V4t9382QZXkRfhPWfKO1sy9UbS06WAP12EfzA14gjLOAp5ZCKdDZ92xTDej2mVXmUDkHaQ%2BN%2Fpg16xieWs4XRcZL97YmaCkw39nWeadjJQgehzbqLZdLw9jj8cZCU2oa3n28T8AD%2FxxhEKLdKcOxcbSUV2r8V8DntwpPiMDB31CRrvFUrV%2FM%2BgZC%2BMLsxixyDK4VLvXUu7kBaiSyt%2FCfnqqixcXOmbrsp%2ByzUMLUI7iYKGdf30Og9ZUR5XB%2BcpkF7jd642%2BBVRUkcdPppkwgLwBbFockwt6XFPjSyRHgQD%2FeVAgbPDbd%2BVLjbMIy3m4fvuNG0pBiPfUzcExfn5DVdPJIbfYhPgn51WObooV1jVypsUm2uNEhVihhUicCHcGMviDjqinnOharKPwaXW6dQVO%2FZatXhZgUfxIlFIEDeyMWEXDFaA6IE32YJyk7mvzYpzOzjxu8APMZZtY4sm6rol9bcQ0dR7jVE6pTmmTe%2FHbIlIKlfH4R9K1hJ956v%2Fq1zdiQmP1IR8fcdlCe%2B%2Bw5Uv3JdQl97LQSuNsno%2F8X1RXvSbo%2BRtPx6kZkRGC9WMbgZzsPmswrYaKZnFW%2Frjwvnt5gYAfvug7kB8T38Jnwm%2BsIMYIY5E61DulId3FTVZoRpJKQPopd3CRV5wgBUtaNWlf0u1xtT8eMk2M6tJ%2Fi5Dg%3D%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=91fgdLRf69awj12CmDMtqxE502q5uM%2BXPE8qWCUo9pxG3r%2FVfjPdr6txG%2FJAFtk6b2PHfACRtmGUkuhwpl8izS%2FRR1NMxl4Gdbz2epUMSkPKvgB6DMAM5dVWeFaB%2Bpf3D1WGaEbphEtyK3JKuMbFVGCiGSKvKH6RZMlM%2B0GKwFr07Z2hXNl41u6hocy2oqNZ6avM1M8HXTKpd4ks4v5%2BwgzpL3u%2BhpHLQvR0cyXPeQ4IPuunzCk6vKax%2FnFkiv9s5rjgsfuttNWN9SGJsofEf9mAbi8nP0CpYsyLxhAuTDmctClLYMKKs2tWW%2Fqcu%2BEjbSWf6jRi4%2Fqc41MSy4FnJOxUwoDqperrCJtKjJyve4XXXdwLl1RfeYNBCRjdrBK83FkSgDdDPpUTvUXGJpbxe0hvniD5gPXFZOePuohpTe3V4t9382QZXkRfhPWfKO1sy9UbS06WAP12EfzA14gjLOAp5ZCKdDZ92xTDej2mVXmUDkHaQ%2BN%2Fpg16xieWs4XRcZL97YmaCkw39nWeadjJQgehzbqLZdLw9jj8cZCU2oa3n28T8AD%2FxxhEKLdKcOxcbSUV2r8V8DntwpPiMDB31CRrvFUrV%2FM%2BgZC%2BMLsxixyDK4VLvXUu7kBaiSyt%2FCfnqqixcXOmbrsp%2ByzUMLUI7iYKGdf30Og9ZUR5XB%2BcpkF7jd642%2BBVRUkcdPppkwgLwBbFockwt6XFPjSyRHgQD%2FeVAgbPDbd%2BVLjbMIy3m4fvuNG0pBiPfUzcExfn5DVdPJIbfYhPgn51WObooV1jVypsUm2uNEhVihhUicCHcGMviDjqinnOharKPwaXW6dQVO%2FZatXhZgUfxIlFIEDeyMWEXDFaA6IE32YJyk7mvzYpzOzjxu8APMZZtY4sm6rol9bcQ0dR7jVE6pTmmTe%2FHbIlIKlfH4R9K1hJ956v%2Fq1zdiQmP1IR8fcdlCe%2B%2Bw5Uv3JdQl97LQSuNsno%2F8X1RXvSbo%2BRtPx6kZkRGC9WMbgZzsPmswrYaKZnFW%2Frjwvnt5gYAfvug7kB8T38Jnwm%2BsIMYIY5E61DulId3FTVZoRpJKQPopd3CRV5wgBUtaNWlf0u1xtT8eMk2M6tJ%2Fi5Dg%3D%3D",
traceid:"wx0fjcetau7qkfqy00",
group_id:"",
ticket:"",
aid:"14889680",
pt:2,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d0402534804105b110f03693bbf2947fa00821992985602027b350400&hy=SH&storeid=32303137303832393039333831363030306166613830313336666664393331333630333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"",
pos_type:0,
watermark_type:1,
logo:"",
is_cpm:0,
dest_type:0
},
pt_2x4:{
hint_txt:"创意-20180119",
url:"https://mp.weixin.qq.com/tp/ad_detail_info?page_key=fb453cc093cadbb19e1164df64b76670606affb1f3a67a2b661552266d7c7d9cb69ba15a92e881a924ef1a1b46cda0c2&amp;weixinadkey=302899249b5ab23f9fa115eaf45c9d49dc9027631ee14c13b4cf237b0b7670d73c9d65b748d00d50c13f7f3251e19f69&amp;ticket=293p3wsdhdhnu&amp;gdt_vid=wx0aznegqnwiz46k00&amp;weixinadinfo=17553526.wx0aznegqnwiz46k00.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=8FkkjcRvBFG71lrCZWfyCylRv%2FSBLvIp7CvLpurBBYJzXaZ9GpUujQZPD1nZCVGc4iZlv2GPrrRsxW9N%2BLPufS6JZh7EQh86iC%2Bsg1Ci5obss4EYc9%2FbDh4UyfQl4ZFv8T1%2BA2iC6jEZcuzeMhtYWcMGml3aOkvfODTHM5meVvrYEfPTwjiGOthmGWa0CaMzj9z3SN5JKEeTjXLOOZRAy8zFOPKfw%2FbngKPtutPf4Kd1QV1O%2BPSfeCQxNrXBi4cYiQ%2Bi09%2F2nJ%2BzwqbKaepxwJktOpJPJIa90vs2oithFjfxi7T%2Blphnm5PcOstPS0vtkXNq3act%2FPNySAECCnSyUTgPmTbRuAOs7W%2By5fUu5nw6VPK8qlFgvh0GXDZWcLQtAE4QF60bgh%2FjtfrmdBYjuVJPf1Fl5c4HJgiWQBdyEAsMKo%2BCAelrA%2B15Hj456vQfQL0niQEcbthWC0iDeDqxS5dppcFFx6H2aTf6qZmwB80%2FFfdrftVYA2nx4iBUBFdh1nI%2FxlrS6P89z8zG%2Beph%2BuwgZw4%2ByUUJ4lwX9EASusYZGjos4wiALFBcxHEAbSt0wXcuGCJFjtDBaPLOCKqaVWrNldQSPYn2HolWShb20lAbj11gqOLEoSNpYkxlJ2qbdXSVhW55oimIFoNR%2B7t8dsPh4wS%2F74WPAtf53f9ErcOrMqcgpYRzRNJWq4Ar2cXvDyF5nNyoRwNGyRLr0gTSUjodhVwisnoyKOg0chxpwT4QwRjuwLZZbFYu7%2FVk3l%2FFiJXznASwbs879ql%2FHGXbYlNAYDSW1TUNUoaGNB5tYBPfDqueQuo7Q2LNlMbFf3gqZEMnzRgdxuthhuRC0%2B3kpy0alkRpKHSwaT1IHdX8IpUi7yWroMhpfSbj6fn2OQ3JkSC2OBZDEMULYp3ZtH6%2BjouvYEf03Y8S3Ud7lFmBt%2F5O16jRenvDwKIPllESFfvJg2jKt2KMPP%2BKbtxNMRe%2BmCvDzBp1rm7jj8xS5ViCm%2FLCdoB22HcbkN1T4XItV2vNCtGq7GS2t%2Bc%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=8FkkjcRvBFG71lrCZWfyCylRv%2FSBLvIp7CvLpurBBYJzXaZ9GpUujQZPD1nZCVGc4iZlv2GPrrRsxW9N%2BLPufS6JZh7EQh86iC%2Bsg1Ci5obss4EYc9%2FbDh4UyfQl4ZFv8T1%2BA2iC6jEZcuzeMhtYWcMGml3aOkvfODTHM5meVvrYEfPTwjiGOthmGWa0CaMzj9z3SN5JKEeTjXLOOZRAy8zFOPKfw%2FbngKPtutPf4Kd1QV1O%2BPSfeCQxNrXBi4cYiQ%2Bi09%2F2nJ%2BzwqbKaepxwJktOpJPJIa90vs2oithFjfxi7T%2Blphnm5PcOstPS0vtkXNq3act%2FPNySAECCnSyUTgPmTbRuAOs7W%2By5fUu5nw6VPK8qlFgvh0GXDZWcLQtAE4QF60bgh%2FjtfrmdBYjuVJPf1Fl5c4HJgiWQBdyEAsMKo%2BCAelrA%2B15Hj456vQfQL0niQEcbthWC0iDeDqxS5dppcFFx6H2aTf6qZmwB80%2FFfdrftVYA2nx4iBUBFdh1nI%2FxlrS6P89z8zG%2Beph%2BuwgZw4%2ByUUJ4lwX9EASusYZGjos4wiALFBcxHEAbSt0wXcuGCJFjtDBaPLOCKqaVWrNldQSPYn2HolWShb20lAbj11gqOLEoSNpYkxlJ2qbdXSVhW55oimIFoNR%2B7t8dsPh4wS%2F74WPAtf53f9ErcOrMqcgpYRzRNJWq4Ar2cXvDyF5nNyoRwNGyRLr0gTSUjodhVwisnoyKOg0chxpwT4QwRjuwLZZbFYu7%2FVk3l%2FFiJXznASwbs879ql%2FHGXbYlNAYDSW1TUNUoaGNB5tYBPfDqueQuo7Q2LNlMbFf3gqZEMnzRgdxuthhuRC0%2B3kpy0alkRpKHSwaT1IHdX8IpUi7yWroMhpfSbj6fn2OQ3JkSC2OBZDEMULYp3ZtH6%2BjouvYEf03Y8S3Ud7lFmBt%2F5O16jRenvDwKIPllESFfvJg2jKt2KMPP%2BKbtxNMRe%2BmCvDzBp1rm7jj8xS5ViCm%2FLCdoB22HcbkN1T4XItV2vNCtGq7GS2t%2Bc%3D",
traceid:"wx0aznegqnwiz46k00",
group_id:"",
ticket:"293p3wsdhdhnu",
aid:"17553526",
pt:2,
image_url:"http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=79a3ff480997ae77fa4aefe9658d605e&amp;filekey=3033020101041f301d02016d04025348041079a3ff480997ae77fa4aefe9658d605e02020bbf040d00000004627466730000000131&amp;hy=SH&amp;storeid=32303138303131393037333035303030303833383765313336666664393337313561333230613030303030303664&amp;bizid=1023",
app_info:{
category:[],
url_scheme:""
},
ad_desc:"",
biz_appid:"",
pos_type:0,
watermark_type:2,
logo:"",
is_cpm:0,
dest_type:7,
material_width:582,
material_height:166,
canvas_info:{
canvas_id:"114667",
ad_info_xml:"&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39; ?&gt;\n&lt;ADInfo&gt;\n	&lt;uxinfo&gt;17553526|wx0aznegqnwiz46k00||0|1516937278|0&lt;/uxinfo&gt;\n	&lt;session_data&gt;\n		&lt;trace_id&gt;wx0aznegqnwiz46k00&lt;/trace_id&gt;\n		&lt;aid&gt;17553526&lt;/aid&gt;\n	&lt;/session_data&gt;\n&lt;/ADInfo&gt;\n\n"
}
},
pt_7:{
hint_txt:"19.9元留住宝宝的纯真影像",
url:"http://mall.qiakr.com/mall/getStockInfoForCustomer.htm?stockId=3265436&salesId=85999&weixinadkey=a2d138b7c0b55dcc82d2b3d1459d7678125a430f23b2b920b5aeeb1b8fdf0cc68fc967edec80016f6c1ee58da63add62&gdt_vid=wx0jbf2bov3yned400&weixinadinfo=14889854.wx0jbf2bov3yned400.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=JCeVfPTbl5HMTQp8E%2B5NsR5%2FbQBV3iR0re%2B%2BYqBj2Dj1j34%2BoBeR2xIUu%2BaWmWKK2dpbLlJnViMis4a%2FyWjVvZCdUwktE%2Bvt2tZysGWKaYaBFg4XolshIoMdHTMoDNRq7PJAljdLsDR3QrOm1vDeMGfKeYXVltgXBKNg3H8jZK9%2FBxaM7KjvwJe6vICEehiXEUtyjmLNdRXsaSacASN03w1IpbjEZ6nuBY1T7axAYTv%2FK%2Fle5enFaMHOHfj%2BqtEJ26UNXwnIm9pWIFS7QO9xUnVf9fFXF9zzLoax0zLiuBWJdc8b%2F8PXCWrCHueIr24bPhL54TX6XbedAyuAH2rh5yQb5aP9pv%2FAPvfQWBSsYB4ek0rXvhEa367yo14VD2Wf3LqoZ4er%2Fyz3z0XlFdP9jQjIh9cIbO0xe6Pgreh03IG9rcDEVucRnDLJI1y%2B0LxZ9iFzKQxPJnQYFE6lC09Jrysyrd%2FwK9DSsbUtq1EKWWgTIS4olfnOxzNFL9O8OqWtUEnG%2Fma0ADE7RIRq2NGDBhwxH1ba4u75ukOsFpZDmWCucem3EImIlYT1y%2BOyy3CmMU3Uqmv0iQY3gqFr5ej31mQODcjTyiRDieUHWkBzqAhKLEt%2FQ81uWzkUXgjxwFHSBrCK7C1zVpTWvil70tGQxlatA5j9H9b6AdUxN32As497y1FPDwn59c3RsSv6vDiCewM4RfMt2mw620ToJgkT%2BypsAAxWjna%2BCgDtcolZdapMZ%2FbcBPAqN2DAQTPayJyruRHJHXZGiVPl6eaUQJJvgkQs2Yo1hIq8gaImSgaQCa%2FjXLwtErfUw9svaakxhzu17SkQP3aaKFb7wGBN%2Bs72RGRUy32p14M6mW6OcW%2BCDlAXuwWYq%2FnskvlAZS3F2I16whmDSyGU8FsYExhq481zn4loo%2FBOzuSJ7Nu4ZagmruyOY3UEnq5M8HcH1ylC8g5%2B2%2BINCMCG4X3EUQz2wb8pvEfvEZuPQ6J494BqBXjeDQZ%2F5Kk8h51CBG0DIk81KaGztDYconO%2BZne39H%2BvR5wKQAQ7gbdahGPdi6OIVLbqwM%2BBiLJxQMaWK5BP7T%2BRqh%2BkQADee%2FjY24kKdjxNx%2F%2FhQ5XCZ9hzhw8d",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=JCeVfPTbl5HMTQp8E%2B5NsR5%2FbQBV3iR0re%2B%2BYqBj2Dj1j34%2BoBeR2xIUu%2BaWmWKK2dpbLlJnViMis4a%2FyWjVvZCdUwktE%2Bvt2tZysGWKaYaBFg4XolshIoMdHTMoDNRq7PJAljdLsDR3QrOm1vDeMGfKeYXVltgXBKNg3H8jZK9%2FBxaM7KjvwJe6vICEehiXEUtyjmLNdRXsaSacASN03w1IpbjEZ6nuBY1T7axAYTv%2FK%2Fle5enFaMHOHfj%2BqtEJ26UNXwnIm9pWIFS7QO9xUnVf9fFXF9zzLoax0zLiuBWJdc8b%2F8PXCWrCHueIr24bPhL54TX6XbedAyuAH2rh5yQb5aP9pv%2FAPvfQWBSsYB4ek0rXvhEa367yo14VD2Wf3LqoZ4er%2Fyz3z0XlFdP9jQjIh9cIbO0xe6Pgreh03IG9rcDEVucRnDLJI1y%2B0LxZ9iFzKQxPJnQYFE6lC09Jrysyrd%2FwK9DSsbUtq1EKWWgTIS4olfnOxzNFL9O8OqWtUEnG%2Fma0ADE7RIRq2NGDBhwxH1ba4u75ukOsFpZDmWCucem3EImIlYT1y%2BOyy3CmMU3Uqmv0iQY3gqFr5ej31mQODcjTyiRDieUHWkBzqAhKLEt%2FQ81uWzkUXgjxwFHSBrCK7C1zVpTWvil70tGQxlatA5j9H9b6AdUxN32As497y1FPDwn59c3RsSv6vDiCewM4RfMt2mw620ToJgkT%2BypsAAxWjna%2BCgDtcolZdapMZ%2FbcBPAqN2DAQTPayJyruRHJHXZGiVPl6eaUQJJvgkQs2Yo1hIq8gaImSgaQCa%2FjXLwtErfUw9svaakxhzu17SkQP3aaKFb7wGBN%2Bs72RGRUy32p14M6mW6OcW%2BCDlAXuwWYq%2FnskvlAZS3F2I16whmDSyGU8FsYExhq481zn4loo%2FBOzuSJ7Nu4ZagmruyOY3UEnq5M8HcH1ylC8g5%2B2%2BINCMCG4X3EUQz2wb8pvEfvEZuPQ6J494BqBXjeDQZ%2F5Kk8h51CBG0DIk81KaGztDYconO%2BZne39H%2BvR5wKQAQ7gbdahGPdi6OIVLbqwM%2BBiLJxQMaWK5BP7T%2BRqh%2BkQADee%2FjY24kKdjxNx%2F%2FhQ5XCZ9hzhw8d",
traceid:"wx0jbf2bov3yned400",
group_id:"",
ticket:"",
aid:"14889854",
pt:7,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d0402534804105dee9141292a1f6ec2fdf5a44794a473020219830400&hy=SH&storeid=32303137303832393039333730303030303730656162313336666664393336663561333230613030303030303664&bizid=1023",
ad_desc:"小糯米为每个孩子打造一个开心、梦想、快乐、童真的童年",
biz_appid:"",
pos_type:0,
watermark_type:0,
logo:"",
is_cpm:0,
dest_type:0
},
pt_100:{
hint_txt:"点击“关注” 观看更多精彩潮剧",
url:"https://mp.weixin.qq.com/mp/ad_biz_info?__biz=MzU1MTE2OTk0NQ==&sn=6518d701813ded1dd09918956297917e&weixinadkey=548ae46bee12701d10d6ab4047c5a0654a5490df1dff40d7e5f67376762916254bd5aa9329fb3a7617e2324cb48a50c5&ticket=2tkzedhfavvnh&gdt_vid=wx0dczgs7job3vjy00&weixinadinfo=14888809.wx0dczgs7job3vjy00.0.1#wechat_redirect",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=fdj3ZZhD2qDmsKZjo9y6dU8Mp35CBHU1XJtkvATh%2B%2BJSG3EDPN%2FDltuZyeSKmsqb0d%2FShkXtSwn3vGdHrkWLZHGSRj67aypageTq%2FZ4M6WG1lwmsOzBRVMYhIqnUfNG695ZVwYJNaWumol%2BAEgddnm9zRmSND2lEDL%2FGNol%2FRIK5SR8IjtFD%2Fvvd3WTmzI%2BRwFnyOxw6yInbeJYSB985tP5joFDobz%2F3Yb3gKVFOhom9eiV%2FW4Den8rQyRAsdrE0486QvPBMujGScpNQBbw%2FCK1%2BQRL%2B0xuUuthvFm%2BcQByq7OdTt5a%2B0X23ce9EHVPyh%2BJafiK0ps7O1G%2FdAcfhbcpk0e1Bmtax%2Bnl%2FEABFFTsjG7CACftv6bXaX1RYPwWLf3%2BdryBoMrFZT0esJWftV8XlkDeINcSpLqmnO0Fc6ZIQEa6l0EBQObc%2FNH19c504%2FZJOuBpG7YzhHvJC9JyF09M2m95y46LqHh0Kv1WqpZlIytHoZJuA5S2Kj6GZA%2FbPLWQiiQHBxgQNyfKf2Gaw8Bfev0bukZ2AoufqyKL4b1t2AgosQgfm4PHNi2HnfMfsBK%2FIvWWB%2B8ygdPkgYIGI2Qa4npNUVK8py56bAfjNr5zjC9nJfZkLTwlY56GtA0NzcKm6t3lhPhvarKFv3grP7CXmTXn2pHNrEjkYMAQ0x0TOzun2ha3g6fKJFiPkUvMP22h1V6WzXYwtKwoLmYVoQcewlUx6u1F4PU3ZSXqkCp8dsAO89lZFc%2BLReloRvW1SZh90LAV0iiPxGOnYgF%2BLLgX32BCUQ9j6kUhhblV346n8zGobixoKGrP7FVaiIAtf0yMkEDtTfGbgjb7K9Nm7ND37c2i4fAHOYaYAYWJU7k3TXvivQmXIyP7M5XgkV9s3yLswrkuHO8hgIdcbdwlQZkk7T97AG%2F2irKAvFHdJ4aArIvxNGEJ%2FBSHm3TGBpuVyiuWsyd1n7l%2B6pDEljosRv2PvDIfsu5oIWaj7EzsBUvxqY5kFCQCcBBDol9VNAJY81%2BSPo%2BxXA0aYJ%2BenGCFgVm9QwSKfjab8WyAgmtkm1V5eZ4jkboOPfwaHYw0IqV9QxQ3Su1DPPIk%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=fdj3ZZhD2qDmsKZjo9y6dU8Mp35CBHU1XJtkvATh%2B%2BJSG3EDPN%2FDltuZyeSKmsqb0d%2FShkXtSwn3vGdHrkWLZHGSRj67aypageTq%2FZ4M6WG1lwmsOzBRVMYhIqnUfNG695ZVwYJNaWumol%2BAEgddnm9zRmSND2lEDL%2FGNol%2FRIK5SR8IjtFD%2Fvvd3WTmzI%2BRwFnyOxw6yInbeJYSB985tP5joFDobz%2F3Yb3gKVFOhom9eiV%2FW4Den8rQyRAsdrE0486QvPBMujGScpNQBbw%2FCK1%2BQRL%2B0xuUuthvFm%2BcQByq7OdTt5a%2B0X23ce9EHVPyh%2BJafiK0ps7O1G%2FdAcfhbcpk0e1Bmtax%2Bnl%2FEABFFTsjG7CACftv6bXaX1RYPwWLf3%2BdryBoMrFZT0esJWftV8XlkDeINcSpLqmnO0Fc6ZIQEa6l0EBQObc%2FNH19c504%2FZJOuBpG7YzhHvJC9JyF09M2m95y46LqHh0Kv1WqpZlIytHoZJuA5S2Kj6GZA%2FbPLWQiiQHBxgQNyfKf2Gaw8Bfev0bukZ2AoufqyKL4b1t2AgosQgfm4PHNi2HnfMfsBK%2FIvWWB%2B8ygdPkgYIGI2Qa4npNUVK8py56bAfjNr5zjC9nJfZkLTwlY56GtA0NzcKm6t3lhPhvarKFv3grP7CXmTXn2pHNrEjkYMAQ0x0TOzun2ha3g6fKJFiPkUvMP22h1V6WzXYwtKwoLmYVoQcewlUx6u1F4PU3ZSXqkCp8dsAO89lZFc%2BLReloRvW1SZh90LAV0iiPxGOnYgF%2BLLgX32BCUQ9j6kUhhblV346n8zGobixoKGrP7FVaiIAtf0yMkEDtTfGbgjb7K9Nm7ND37c2i4fAHOYaYAYWJU7k3TXvivQmXIyP7M5XgkV9s3yLswrkuHO8hgIdcbdwlQZkk7T97AG%2F2irKAvFHdJ4aArIvxNGEJ%2FBSHm3TGBpuVyiuWsyd1n7l%2B6pDEljosRv2PvDIfsu5oIWaj7EzsBUvxqY5kFCQCcBBDol9VNAJY81%2BSPo%2BxXA0aYJ%2BenGCFgVm9QwSKfjab8WyAgmtkm1V5eZ4jkboOPfwaHYw0IqV9QxQ3Su1DPPIk%3D",
traceid:"wx0dczgs7job3vjy00",
group_id:"",
ticket:"2tkzedhfavvnh",
aid:"14888809",
pt:100,
image_url:"",
ad_desc:"",
biz_appid:"wx8c950ba05b9f01a9",
biz_info:{
user_name:"gh_d62037c98f00",
nick_name:"潮剧精选",
is_subscribed:0,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5PIbkaKgjHgnkhY4O3ZLBiaXbgrk6uquUy9ACLJd664ww/0",
biz_uin:3551169945
},
pos_type:0,
watermark_type:0,
logo:"",
is_cpm:0,
exp_info:{
exp_num:0,
exp_value:[]
},
dest_type:0
},
pt_103:{
ad_desc:"",
aid:"10904444",
app_info:{
apk_name:"com.mlzy.mlzy",
apk_url:"https://itunes.apple.com/cn/app/%E9%AD%94%E9%BE%99%E6%88%98%E5%9F%9F-%E4%BC%A0%E5%A5%87%E8%B7%A8%E6%9C%8D%E7%AB%9E%E6%8A%80-%E5%AE%9E%E6%97%B6%E6%BF%80%E6%83%85pk/id1177821716?mt=8&amp;uo=4",
app_id:1177821716,
app_md5:"",
app_name:"魔龙战域-传奇跨服竞技,实时激情PK",
app_rating:0,
app_size:0,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E9%AD%94%E9%BE%99%E6%88%98%E5%9F%9F-%E4%BC%A0%E5%A5%87%E8%B7%A8%E6%9C%8D%E7%AB%9E%E6%8A%80-%E5%AE%9E%E6%97%B6%E6%BF%80%E6%83%85pk/id1177821716?mt=8&amp;uo=4",
category:[],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/86djwtIhOVD5ZwnOicUov9kUJGYxNuzJYDDADtOafuh6y4CKJLZicjR7BUD2tkgOXluqavibm6vNib68NAMx8A4sDA/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=BaQ97XL3503Auq%2Fl3Z63G5%2FMMc%2BtVZslK8LZCGSv74ZwnlaGZRMH6kv%2F0nK0GPyASYIyb%2BUQbqisCYeoTicGk8hp2MOqOUQMyv2weAJ6q%2FPGQslfRjAx8ZEakCuxw6nSn4slmx9dsu2Ux5SaSleqJn7BfGnvyvV1SX5JtGh9anjn4ibrl0nktv3hB%2B2%2FZMYQTobLlj5QPCjNDxOllyIegnRZiKM%2FH%2B31Zr2AGeqC0EPBIeK1dvG0GIHwjMYB1odiJNiK8Togz36JenoPEd9oAWOasyGHdVNZGprI1xg0%2FYvnXqKqSkmDRtAip0Ddi6AVkOEnrBJDPhXCWUs%2Bu1%2Bx8ruQQ8Oawsb8aQhGivNmsaDHCUTzFq7%2FdHv7u%2B86Ciz%2FydhvJWKGxhjS2ItjpljV49%2Fc4Q5IrDy0DsFe863NkXe6EjxRwa81VTiY2KmI20o3x%2B8%2BlUR5OqJlGa8KRkDUv0eeG5%2BYiKsMds5VcgVHo6Jmjv3w80zVqg24wAPZPY1W3lhD%2BUXJfSOA7iQ%2FUQPTxA8CrDyAHKe%2FeP%2BMvzz2cAni5wveEheyqlASUoVVdpKej7lLUsF3sBMeIIaP%2BDlTNM6zu0IJEeJHMCdcPyIz%2FLELhSw2lxv4oju2Wu2WEI4RUkj2W%2BWmpBrdR5w8SlpJ8DwcHOuVtk1Qjm12sjZ3OwjYCtP4VXwr7230nUdqpUGUz3MdWAOoLTWbK%2B64vMnmJhIsmEW8bAdJMkBCn20HyJVoi2NCeZFGuWtOcZ%2BsOY6p1%2FNO5J21pq7Yi3i1O0x5V2TSk%2B7p%2BRgRm3%2FQotAuQeBOAfPgm85YjuJzVCuZ6KcTEaGAp1qleCFhng5hOVj0dngoiZ927zYTlzgdFQLqnKVJgjJv5RBuqHDJPF8nbo3%2Bxft400e4h%2FJAxg0Pmuslgb7cSK3jwkcvAARKY2UWJHA7gccW%2F9japd96T8jUMnEpVip5ApANfFSRg1RNylRtNwyKqDwCu2AzWrEZZ2eS5%2Fcz4JaSXT0t22%2BmuBjzKGxVyp336Efkrf3X8liCGi8ZlyJeY5IkDKQm",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"0307-魔龙战域-1",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d040253480410e13eb7f81e7445ac5427c8c417c68bbc02026c260400&amp;hy=SH&amp;storeid=32303137303432373130343330343030306138333663313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:103,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=BaQ97XL3503Auq%2Fl3Z63G5%2FMMc%2BtVZslK8LZCGSv74ZwnlaGZRMH6kv%2F0nK0GPyASYIyb%2BUQbqisCYeoTicGk8hp2MOqOUQMyv2weAJ6q%2FPGQslfRjAx8ZEakCuxw6nSn4slmx9dsu2Ux5SaSleqJn7BfGnvyvV1SX5JtGh9anjn4ibrl0nktv3hB%2B2%2FZMYQTobLlj5QPCjNDxOllyIegnRZiKM%2FH%2B31Zr2AGeqC0EPBIeK1dvG0GIHwjMYB1odiJNiK8Togz36JenoPEd9oAWOasyGHdVNZGprI1xg0%2FYvnXqKqSkmDRtAip0Ddi6AVkOEnrBJDPhXCWUs%2Bu1%2Bx8ruQQ8Oawsb8aQhGivNmsaDHCUTzFq7%2FdHv7u%2B86Ciz%2FydhvJWKGxhjS2ItjpljV49%2Fc4Q5IrDy0DsFe863NkXe6EjxRwa81VTiY2KmI20o3x%2B8%2BlUR5OqJlGa8KRkDUv0eeG5%2BYiKsMds5VcgVHo6Jmjv3w80zVqg24wAPZPY1W3lhD%2BUXJfSOA7iQ%2FUQPTxA8CrDyAHKe%2FeP%2BMvzz2cAni5wveEheyqlASUoVVdpKej7lLUsF3sBMeIIaP%2BDlTNM6zu0IJEeJHMCdcPyIz%2FLELhSw2lxv4oju2Wu2WEI4RUkj2W%2BWmpBrdR5w8SlpJ8DwcHOuVtk1Qjm12sjZ3OwjYCtP4VXwr7230nUdqpUGUz3MdWAOoLTWbK%2B64vMnmJhIsmEW8bAdJMkBCn20HyJVoi2NCeZFGuWtOcZ%2BsOY6p1%2FNO5J21pq7Yi3i1O0x5V2TSk%2B7p%2BRgRm3%2FQotAuQeBOAfPgm85YjuJzVCuZ6KcTEaGAp1qleCFhng5hOVj0dngoiZ927zYTlzgdFQLqnKVJgjJv5RBuqHDJPF8nbo3%2Bxft400e4h%2FJAxg0Pmuslgb7cSK3jwkcvAARKY2UWJHA7gccW%2F9japd96T8jUMnEpVip5ApANfFSRg1RNylRtNwyKqDwCu2AzWrEZZ2eS5%2Fcz4JaSXT0t22%2BmuBjzKGxVyp336Efkrf3X8liCGi8ZlyJeY5IkDKQm",
ticket:"2d4hi78djhdmi",
traceid:"wx0rir2hs42k4zvu00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E9%AD%94%E9%BE%99%E6%88%98%E5%9F%9F-%E4%BC%A0%E5%A5%87%E8%B7%A8%E6%9C%8D%E7%AB%9E%E6%8A%80-%E5%AE%9E%E6%97%B6%E6%BF%80%E6%83%85pk/id1177821716?mt=8&amp;uo=4&amp;weixinadkey=f65aa694022d1eb46a0da2b9286cf607f91178d071f0161c50f66291b21f0879436343822ded6c294be38b1ac77e302d&amp;ticket=2d4hi78djhdmi&amp;gdt_vid=wx0rir2hs42k4zvu00&amp;md5sum=&amp;weixinadinfo=10904444.wx0rir2hs42k4zvu00.0.1",
watermark_type:0
},
pt_103x1:{
ad_desc:"",
aid:"14690166",
app_info:{
apk_name:"com.vipshop.iphone",
apk_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
app_id:417200582,
app_md5:"",
app_name:"唯品会 - 全球精选 正品特卖",
app_rating:4.5,
app_size:177868800,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
category:["购物","生活"],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/QxcpzGS56acDgouyWHPicmB7uddoozlibww6EFq9dxplGGnTm89rxMYxGSvO6MPwABPI6fUxaZKzxcJBqbNqsR8Q/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=U1yjZ%2BxwYQbCgbvSiCl7sdIQbkIlw%2BK38Q87PiH%2B2A0U147V7yYHvMdwUgyY3rxyxyCzKNTxp1d7SuvgHltNZfl5KO10DjFvngfguSdBSGEX1mrrezc%2FSM757ZuoeLmOkKbwz1L1IXV54smUztL3iElnrcrFJO5YnsnxJYBEidtS1J%2FKTgkNsgP%2BBFHbXVc4FeAdrzscb5%2F7U0%2B5Q9lz8mipql9wAChjCOJRE5XxDDMys8Ugu9cVFDueqZmsS9bs6B1mdZ4AD6arzM%2FPaZ6%2FxkYDaadvcYhVvEphp6qfCeqx%2FX3y1vvh9asbCy4EkQt7IDsXZmZ4PpK%2BjKUu8yvViytKBuJPf6jGmpbgGYSfl1ppjGIYA0fhZsHSqwU%2BIBeF9netPpt23GXK894wKMbKlIuxy7IV5BnzJ67zrl4iO%2BdDZCh%2BoCsG0MEwApmTPy88ctS%2FjsF1mxNPpkRLxiddExCmEek9Q4HHrCyAUztemEudqlbNabEFZZMRnXnmHc8J3RkYx0M7eu7%2B1RQHbPYJmIQDYut%2B7n1E%2Fak1uzbAg6OoVuI3C4cCdMalbQQMRc%2BJDcQhTfBu%2BFzwUegTMx6PLtgw%2FtCgeC6YVOxxfLf9x8K4M0pkjjYLD5eKYjQEU3AKidPc3nrD64Y7fjtHsDNLuwajxDDgdxusixnJEuaADc8e%2BUcs8pHzr1fA8ndPFjfq1abY2U42C2yJkrcJs1CVUk7YNWcuk77E2hIFQ%2F8%2B%2B6E6BmaLdY1e6ZATjD0W%2BXxKGGtmAG2VhKWNrTMZeaTlLG7ZA04pLREUNjMeZjY20Z3tavH%2FdBvHctYTub1gqF5LOooF8f%2FM5OrjOy8aMheNOhCQCtleUhHM8F2iXcS0gJgJjVRMMGETPLhF%2B5gosi7wOBrYg%2BECoA6n9qqu2NJtSMEIvNWj8LY6rVwW%2Fc09NfYg3Q5IvFRAxpqzNUGRu5Odvmno5yZj%2F2rMoZqoIM1tXYS1SOBw%2FLHCswqOsGq%2B0slUrEtwvitJRy8wLD3Y8lbMT2zHA3SWQu8bFd%2B%2B%2Bjn3c%2BVTSb2FkE6hWbPoXp4VzceD%2Fo3AgkgsmCGFpOlRWt0wnGOcsK6s0oQ%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"IOS-牛仔单品-0408",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d040253480410ff8ee6a9e5086ee741f3fb674cf6f39702026d7f0400&amp;hy=SH&amp;storeid=32303137303832353034333232323030306132666331313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:103,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=U1yjZ%2BxwYQbCgbvSiCl7sdIQbkIlw%2BK38Q87PiH%2B2A0U147V7yYHvMdwUgyY3rxyxyCzKNTxp1d7SuvgHltNZfl5KO10DjFvngfguSdBSGEX1mrrezc%2FSM757ZuoeLmOkKbwz1L1IXV54smUztL3iElnrcrFJO5YnsnxJYBEidtS1J%2FKTgkNsgP%2BBFHbXVc4FeAdrzscb5%2F7U0%2B5Q9lz8mipql9wAChjCOJRE5XxDDMys8Ugu9cVFDueqZmsS9bs6B1mdZ4AD6arzM%2FPaZ6%2FxkYDaadvcYhVvEphp6qfCeqx%2FX3y1vvh9asbCy4EkQt7IDsXZmZ4PpK%2BjKUu8yvViytKBuJPf6jGmpbgGYSfl1ppjGIYA0fhZsHSqwU%2BIBeF9netPpt23GXK894wKMbKlIuxy7IV5BnzJ67zrl4iO%2BdDZCh%2BoCsG0MEwApmTPy88ctS%2FjsF1mxNPpkRLxiddExCmEek9Q4HHrCyAUztemEudqlbNabEFZZMRnXnmHc8J3RkYx0M7eu7%2B1RQHbPYJmIQDYut%2B7n1E%2Fak1uzbAg6OoVuI3C4cCdMalbQQMRc%2BJDcQhTfBu%2BFzwUegTMx6PLtgw%2FtCgeC6YVOxxfLf9x8K4M0pkjjYLD5eKYjQEU3AKidPc3nrD64Y7fjtHsDNLuwajxDDgdxusixnJEuaADc8e%2BUcs8pHzr1fA8ndPFjfq1abY2U42C2yJkrcJs1CVUk7YNWcuk77E2hIFQ%2F8%2B%2B6E6BmaLdY1e6ZATjD0W%2BXxKGGtmAG2VhKWNrTMZeaTlLG7ZA04pLREUNjMeZjY20Z3tavH%2FdBvHctYTub1gqF5LOooF8f%2FM5OrjOy8aMheNOhCQCtleUhHM8F2iXcS0gJgJjVRMMGETPLhF%2B5gosi7wOBrYg%2BECoA6n9qqu2NJtSMEIvNWj8LY6rVwW%2Fc09NfYg3Q5IvFRAxpqzNUGRu5Odvmno5yZj%2F2rMoZqoIM1tXYS1SOBw%2FLHCswqOsGq%2B0slUrEtwvitJRy8wLD3Y8lbMT2zHA3SWQu8bFd%2B%2B%2Bjn3c%2BVTSb2FkE6hWbPoXp4VzceD%2Fo3AgkgsmCGFpOlRWt0wnGOcsK6s0oQ%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0abnpizrj5oq3m00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4&amp;weixinadkey=3cd216b7f0cabb3fd88ead2f48df5b44d3906580063ce9c182d4571e9e24ea657458ed9501be0ffec77716211c50162f&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx0abnpizrj5oq3m00&amp;md5sum=&amp;weixinadinfo=14690166.wx0abnpizrj5oq3m00.0.1",
watermark_type:0
},
pt_103x2:{
ad_desc:"",
aid:"14690166",
app_info:{
apk_name:"com.vipshop.iphone",
apk_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
app_id:417200582,
app_md5:"",
app_name:"唯品会 - 全球精选 正品特卖",
app_rating:4.5,
app_size:177868800,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
category:["购物","生活"],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/QxcpzGS56acDgouyWHPicmB7uddoozlibww6EFq9dxplGGnTm89rxMYxGSvO6MPwABPI6fUxaZKzxcJBqbNqsR8Q/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"vipshop://goHome?tra_from=tra%3Atlkelyf1%3A%3A%3A%3A",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=U1yjZ%2BxwYQbCgbvSiCl7sdIQbkIlw%2BK38Q87PiH%2B2A0U147V7yYHvMdwUgyY3rxyxyCzKNTxp1d7SuvgHltNZfl5KO10DjFvngfguSdBSGEX1mrrezc%2FSM757ZuoeLmOkKbwz1L1IXV54smUztL3iElnrcrFJO5YnsnxJYBEidtS1J%2FKTgkNsgP%2BBFHbXVc4FeAdrzscb5%2F7U0%2B5Q9lz8mipql9wAChjCOJRE5XxDDMys8Ugu9cVFDueqZmsS9bs6B1mdZ4AD6arzM%2FPaZ6%2FxkYDaadvcYhVvEphp6qfCeqx%2FX3y1vvh9asbCy4EkQt7IDsXZmZ4PpK%2BjKUu8yvViytKBuJPf6jGmpbgGYSfl1ppjGIYA0fhZsHSqwU%2BIBeF9netPpt23GXK894wKMbKlIuxy7IV5BnzJ67zrl4iO%2BdDZCh%2BoCsG0MEwApmTPy88ctS%2FjsF1mxNPpkRLxiddExCmEek9Q4HHrCyAUztemEudqlbNabEFZZMRnXnmHc8J3RkYx0M7eu7%2B1RQHbPYJmIQDYut%2B7n1E%2Fak1uzbAg6OoVuI3C4cCdMalbQQMRc%2BJDcQhTfBu%2BFzwUegTMx6PLtgw%2FtCgeC6YVOxxfLf9x8K4M0pkjjYLD5eKYjQEU3AKidPc3nrD64Y7fjtHsDNLuwajxDDgdxusixnJEuaADc8e%2BUcs8pHzr1fA8ndPFjfq1abY2U42C2yJkrcJs1CVUk7YNWcuk77E2hIFQ%2F8%2B%2B6E6BmaLdY1e6ZATjD0W%2BXxKGGtmAG2VhKWNrTMZeaTlLG7ZA04pLREUNjMeZjY20Z3tavH%2FdBvHctYTub1gqF5LOooF8f%2FM5OrjOy8aMheNOhCQCtleUhHM8F2iXcS0gJgJjVRMMGETPLhF%2B5gosi7wOBrYg%2BECoA6n9qqu2NJtSMEIvNWj8LY6rVwW%2Fc09NfYg3Q5IvFRAxpqzNUGRu5Odvmno5yZj%2F2rMoZqoIM1tXYS1SOBw%2FLHCswqOsGq%2B0slUrEtwvitJRy8wLD3Y8lbMT2zHA3SWQu8bFd%2B%2B%2Bjn3c%2BVTSb2FkE6hWbPoXp4VzceD%2Fo3AgkgsmCGFpOlRWt0wnGOcsK6s0oQ%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"IOS-牛仔单品-0408",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d040253480410ff8ee6a9e5086ee741f3fb674cf6f39702026d7f0400&amp;hy=SH&amp;storeid=32303137303832353034333232323030306132666331313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:103,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=U1yjZ%2BxwYQbCgbvSiCl7sdIQbkIlw%2BK38Q87PiH%2B2A0U147V7yYHvMdwUgyY3rxyxyCzKNTxp1d7SuvgHltNZfl5KO10DjFvngfguSdBSGEX1mrrezc%2FSM757ZuoeLmOkKbwz1L1IXV54smUztL3iElnrcrFJO5YnsnxJYBEidtS1J%2FKTgkNsgP%2BBFHbXVc4FeAdrzscb5%2F7U0%2B5Q9lz8mipql9wAChjCOJRE5XxDDMys8Ugu9cVFDueqZmsS9bs6B1mdZ4AD6arzM%2FPaZ6%2FxkYDaadvcYhVvEphp6qfCeqx%2FX3y1vvh9asbCy4EkQt7IDsXZmZ4PpK%2BjKUu8yvViytKBuJPf6jGmpbgGYSfl1ppjGIYA0fhZsHSqwU%2BIBeF9netPpt23GXK894wKMbKlIuxy7IV5BnzJ67zrl4iO%2BdDZCh%2BoCsG0MEwApmTPy88ctS%2FjsF1mxNPpkRLxiddExCmEek9Q4HHrCyAUztemEudqlbNabEFZZMRnXnmHc8J3RkYx0M7eu7%2B1RQHbPYJmIQDYut%2B7n1E%2Fak1uzbAg6OoVuI3C4cCdMalbQQMRc%2BJDcQhTfBu%2BFzwUegTMx6PLtgw%2FtCgeC6YVOxxfLf9x8K4M0pkjjYLD5eKYjQEU3AKidPc3nrD64Y7fjtHsDNLuwajxDDgdxusixnJEuaADc8e%2BUcs8pHzr1fA8ndPFjfq1abY2U42C2yJkrcJs1CVUk7YNWcuk77E2hIFQ%2F8%2B%2B6E6BmaLdY1e6ZATjD0W%2BXxKGGtmAG2VhKWNrTMZeaTlLG7ZA04pLREUNjMeZjY20Z3tavH%2FdBvHctYTub1gqF5LOooF8f%2FM5OrjOy8aMheNOhCQCtleUhHM8F2iXcS0gJgJjVRMMGETPLhF%2B5gosi7wOBrYg%2BECoA6n9qqu2NJtSMEIvNWj8LY6rVwW%2Fc09NfYg3Q5IvFRAxpqzNUGRu5Odvmno5yZj%2F2rMoZqoIM1tXYS1SOBw%2FLHCswqOsGq%2B0slUrEtwvitJRy8wLD3Y8lbMT2zHA3SWQu8bFd%2B%2B%2Bjn3c%2BVTSb2FkE6hWbPoXp4VzceD%2Fo3AgkgsmCGFpOlRWt0wnGOcsK6s0oQ%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0abnpizrj5oq3m00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4&amp;weixinadkey=3cd216b7f0cabb3fd88ead2f48df5b44d3906580063ce9c182d4571e9e24ea657458ed9501be0ffec77716211c50162f&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx0abnpizrj5oq3m00&amp;md5sum=&amp;weixinadinfo=14690166.wx0abnpizrj5oq3m00.0.1",
watermark_type:0
},
pt_104:{
ad_desc:"",
aid:"10824252",
app_info:{
apk_name:"com.dushe.movie",
apk_url:"http://imtt.dd.qq.com/16891/B957D57DF9BA262E7ED8588E746E3B6F.apk?fsname=com.dushe.movie_1.0.10_12.apk&amp;csr=1bca",
app_id:1105719791,
app_md5:"B957D57DF9BA262E7ED8588E746E3B6F",
app_name:"毒舌电影",
app_rating:4.95802,
app_size:14312989,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/B957D57DF9BA262E7ED8588E746E3B6F.apk?fsname=com.dushe.movie_1.0.10_12.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635343432333337",
desc:"挑选好片拒绝烂片、千万影迷聚集的影视社区！1、评电影：这里提供真实、无水军的电影评分，看片前查一下，从此告别烂片；2、找汁源：海量视频资源，找你想看的片，从此不再苦苦求种；3、喷电影：一群毒舌家族老司机，陪你神侃各类影视话题，由浅入深，渐入佳境；4、毒舌影评：毒舌家族每日推荐有料的影视播报，以毒舌刻薄的作风，保证片片优质；5、我的想看：想看的电影，售票时间、影评资讯等消息让你抢先知道，不再错过。---用户评价摘选---关注毒舌电影以来帮我省了不少钱，好片推荐烂片预警！ -by 生命如墙这样说真话不怕得罪人的app我真是第一次见，选片前刷一下很有必要 -by 鬼叫影评独到，不偏不倚，推荐的影片还提供资源，很棒。 -by Wayne虽然叫“毒舌”两字，却是影评界的一道清流，不做作，必看影评！-by tianxie相信毒舌不会让热爱电影的朋友失望，中国影评的评分标杆！ -by 凡人小康app的开机电影就让我爱上了！评分制度、功能编排、电影预告等都很用心在做，以后电影评分来这里了 -by 桐桐桐铜内容和功能都很不错，很喜欢UI，nice App! -by DryLhcl公众号：毒舌电影微博：@毒舌电影网址：www.dushemovie.com反馈邮箱：support@youhaoxi.cn",
down_count:364220,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_52414231_1493103610/256",
new_feature:"1.1.4版本特性1、全新首页—查找内容更爽了，各种分类一目了然；2、影评、视频增加快捷入口，历史／热门内容清晰呈现；",
signature_md5:"93850477387C9C3E7381EE4A1CB9A702",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_52414231_1_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_2_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_3_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_4_1498021362/330|http://pp.myapp.com/ma_pic2/0/shot_52414231_5_1498021362/330",
url_scheme:"",
version_code:12
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=EUK6sIITQ%2BIiZgPsXYcyFSLopRX%2BTrpH2F3CF7L%2BTekYp3IvCiBsRaVsRD9fH5fFjeHDFUV50Bg4pAAo6txt4VZMsQ97th8VwccNUbOKyPgtc0iCJW0zreAllxM5u4s8ajB08xXisvtL1zgv9Bw4%2FwSbjo%2FdjoAJM%2FINrWWbbRlH0GKQejxRh1HnUdZ0KnAdGCn5tGakYtL8anfAjq3uJpHjqtZd4JczeHnnT9lMbTnJskpMqmCjP5xmhV6mDt%2FLY3HkTq9QGPPPLqTJKtSQMpTSmgYqtQmfnjtWEr9L%2FBn4rxR6MFJg3AIxf6fUylI%2B5FSuMZKmTx4moN1YK8FYuyy1dNQRRXU022PGpM7vbIZWrPn0MM5Mbo8QGeWj5CBykWWfacC3lBIjut1HwPSJHeHDjhQOhaNQSBG27FGkad6g3LR6ZPlW6A6adVbtRC4jnojBO53yq5Cq4FnhWQdVPOpprYpwF3gbf%2Fh%2FdNJRD7tivQK1WdApXnC%2BzOXT5BGLONzUBoWzii097jlR0bLddaL8YTribN8eft9f1rmy4uVSbViXQK9o0xmPqqSW5nJ9rMLybyBKTnWnVzcCLk4ou3%2BE7PARc5G%2FSxPyh7894cIqocbF5nzNlqntYKlk%2FzFEgpoRRy0anSIsZZ7NmNDsOeLDi3kVd8yyzLDxLhmMPqpfCnzEg9Elcni6fnhddlRm2XHkVkb8Hde27BZDr1DOk21rrDg5jCkVJ0FvlH30s3MXZBoF03Fbvwl%2B5qvleiqbp86Bcu%2F6mhMjZa%2BbcanMlw22QydRW%2Bvg3hVs%2BfsKMrPlumQ7ZEZwMl5LDsrH7cSKg%2BbX7GQLhWMBmT3U%2FmA3JiVBwMg%2FAlo9XrPi4Lqav9QOHBN%2FxCM%2B7ZBQmUiLeUTU7hvPK11npdV0XeOfz1RUO3SvDvY3BaA9s2uGPPpTZFArzGQlIFLGYEHKXHQgXUVZ3a%2FgWbyTV4lj8cAMOZcdQl6z4uC6mr%2FU",
biz_appid:"",
group_id:"",
hint_txt:"毒舌安卓-0425",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041087654e9c4648f82e7956612b4c5ee3c5020271b00400&amp;hy=SH&amp;storeid=32303137303432353038313431343030306262326663313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:104,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=EUK6sIITQ%2BIiZgPsXYcyFSLopRX%2BTrpH2F3CF7L%2BTekYp3IvCiBsRaVsRD9fH5fFjeHDFUV50Bg4pAAo6txt4VZMsQ97th8VwccNUbOKyPgtc0iCJW0zreAllxM5u4s8ajB08xXisvtL1zgv9Bw4%2FwSbjo%2FdjoAJM%2FINrWWbbRlH0GKQejxRh1HnUdZ0KnAdGCn5tGakYtL8anfAjq3uJpHjqtZd4JczeHnnT9lMbTnJskpMqmCjP5xmhV6mDt%2FLY3HkTq9QGPPPLqTJKtSQMpTSmgYqtQmfnjtWEr9L%2FBn4rxR6MFJg3AIxf6fUylI%2B5FSuMZKmTx4moN1YK8FYuyy1dNQRRXU022PGpM7vbIZWrPn0MM5Mbo8QGeWj5CBykWWfacC3lBIjut1HwPSJHeHDjhQOhaNQSBG27FGkad6g3LR6ZPlW6A6adVbtRC4jnojBO53yq5Cq4FnhWQdVPOpprYpwF3gbf%2Fh%2FdNJRD7tivQK1WdApXnC%2BzOXT5BGLONzUBoWzii097jlR0bLddaL8YTribN8eft9f1rmy4uVSbViXQK9o0xmPqqSW5nJ9rMLybyBKTnWnVzcCLk4ou3%2BE7PARc5G%2FSxPyh7894cIqocbF5nzNlqntYKlk%2FzFEgpoRRy0anSIsZZ7NmNDsOeLDi3kVd8yyzLDxLhmMPqpfCnzEg9Elcni6fnhddlRm2XHkVkb8Hde27BZDr1DOk21rrDg5jCkVJ0FvlH30s3MXZBoF03Fbvwl%2B5qvleiqbp86Bcu%2F6mhMjZa%2BbcanMlw22QydRW%2Bvg3hVs%2BfsKMrPlumQ7ZEZwMl5LDsrH7cSKg%2BbX7GQLhWMBmT3U%2FmA3JiVBwMg%2FAlo9XrPi4Lqav9QOHBN%2FxCM%2B7ZBQmUiLeUTU7hvPK11npdV0XeOfz1RUO3SvDvY3BaA9s2uGPPpTZFArzGQlIFLGYEHKXHQgXUVZ3a%2FgWbyTV4lj8cAMOZcdQl6z4uC6mr%2FU",
ticket:"2mkwms35zbept",
traceid:"wx0xqjkdkhmcohlk00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105719791&amp;weixinadkey=5d88339b5cfb77fadd16963a27c22be50cd646e79a1276b85299ae7c7ea395d9536df4d6b3b0ad4a0c6de9943af1b328&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0xqjkdkhmcohlk00&amp;channel_id=000116083635343432333337&amp;md5sum=B957D57DF9BA262E7ED8588E746E3B6F&amp;weixinadinfo=10824252.wx0xqjkdkhmcohlk00.0.1#wechat_redirect",
watermark_type:0
},
pt_105:{
hint_txt:"80元优惠券你领了吗-ios",
url:"https://mp.weixin.qq.com/mp/ad_biz_info?__biz=MzAwMzIwNDA5NA==&sn=b649ca44a99325d90147a954abd57c08&weixinadkey=f8597c40a1e1d9b133e3da0a9c4cb10ebb0657fabcb11b4faaee411dd00cdd0061ecacfbb361101c212434c607091057&ticket=2tkzedhfavvnh&gdt_vid=wx0ystdughnrwkeg00&weixinadinfo=14883338.wx0ystdughnrwkeg00.0.1#wechat_redirect",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=3zgXCdMPKdJy%2BCQSBW9ArACqYTwyMmlVq8olKeVviDZKfHlHsAS7tVrHrzSh7nduOcqOhf2%2FzrTaV4e3I2%2F0B5HpazXfnl1q5sI%2Bf27kr5FYovuDu5ZeUCz2k95%2B8gTFSMBCkyV5s790Mbt5pB%2BPKX6asfAkwkNGZ9lzFXhNFQUGoIkL8%2FehLI5UPJfnGNgdUN%2F0rNjjLeIcuXsILLv5%2FzfzgUMcTT9mAdkmyW%2FiSbVxy91lEC3GnMkz1Z126D%2B59mH51Kg%2BcdjeR%2BG2%2FZ87PX9JzoU4iQn%2Bt2OxQzX24HYSlG5R7eiMqlzltHaEw9FuuHD34hluU41PN6xX4nUpetU06Nc0U3cYMSaVIOGFWcSMPhFx4tl8xhnGXYOIf4jh8%2Bhz14wlu%2Fvglcn0YLGZuxOXREweMOACXyu02iP4l8Daud5%2BvJOfFvM930NL9yE%2Fwcw6TRWRPD1uEHP%2F1byGbMjW4GO2K2STTi%2F8B3W3ZDaocDit6G3kP4oiVhge8Ft5xcf%2FmcKebkWqNEZsmJrl68vrY4dXwrl1u6wXKhjOOhwEGHOkSkCFwXHOBICsNLAlODu3oo8R%2BQ1Wj7g715VYIv8ZNW3WoeaHWKvX6Zvpf1EgKLRj1FxIZ5joFi2eOkOU2jYWih9JBKuuT8sPMlmWeRQFMgaZ5Rvdt1wjMwD%2BVZ9XnXvE8ipEP9v2UQfhg4TDBxjkX13nsA7%2B1Tt7%2B%2FAi7wQoattaw5CWx7juwYCKcY%2FJgtFgM4wKhdKZalAyGx3Z%2BIUU%2Bew8o2lZeqnRemvGXT9HrPIP2O0VY5vHBPlQLtZuZeoHYfO5lpjduNlrHu%2Fxdd5SjNp75PWGdBA%2BcyBtKulCYSv5KoMxC6hYWxs8eoeTXEWBQtduZI2nd%2Ftmxgxem4p30GululT7jNTjunuNap%2FUFbKbgN2%2Bh9z9nFArWCH2muXmA17KRWmh88CUH3zRo2xgJF2XgsFwvbByrWINS%2FKT%2BXSCPey77nOkQx2R3O0uFePCLKlbXTf9cqsRiM%2BLdSyBCrN9j8ee1yN0faEW7tkjPeVRDpmkUONNr7dYgFtS%2BaJrjxnRx8wf4cxsJrqFHhqo5ma6o83SqAUEsPpftCh%2Bwn52cLUO7XepeqA7ZtU%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=3zgXCdMPKdJy%2BCQSBW9ArACqYTwyMmlVq8olKeVviDZKfHlHsAS7tVrHrzSh7nduOcqOhf2%2FzrTaV4e3I2%2F0B5HpazXfnl1q5sI%2Bf27kr5FYovuDu5ZeUCz2k95%2B8gTFSMBCkyV5s790Mbt5pB%2BPKX6asfAkwkNGZ9lzFXhNFQUGoIkL8%2FehLI5UPJfnGNgdUN%2F0rNjjLeIcuXsILLv5%2FzfzgUMcTT9mAdkmyW%2FiSbVxy91lEC3GnMkz1Z126D%2B59mH51Kg%2BcdjeR%2BG2%2FZ87PX9JzoU4iQn%2Bt2OxQzX24HYSlG5R7eiMqlzltHaEw9FuuHD34hluU41PN6xX4nUpetU06Nc0U3cYMSaVIOGFWcSMPhFx4tl8xhnGXYOIf4jh8%2Bhz14wlu%2Fvglcn0YLGZuxOXREweMOACXyu02iP4l8Daud5%2BvJOfFvM930NL9yE%2Fwcw6TRWRPD1uEHP%2F1byGbMjW4GO2K2STTi%2F8B3W3ZDaocDit6G3kP4oiVhge8Ft5xcf%2FmcKebkWqNEZsmJrl68vrY4dXwrl1u6wXKhjOOhwEGHOkSkCFwXHOBICsNLAlODu3oo8R%2BQ1Wj7g715VYIv8ZNW3WoeaHWKvX6Zvpf1EgKLRj1FxIZ5joFi2eOkOU2jYWih9JBKuuT8sPMlmWeRQFMgaZ5Rvdt1wjMwD%2BVZ9XnXvE8ipEP9v2UQfhg4TDBxjkX13nsA7%2B1Tt7%2B%2FAi7wQoattaw5CWx7juwYCKcY%2FJgtFgM4wKhdKZalAyGx3Z%2BIUU%2Bew8o2lZeqnRemvGXT9HrPIP2O0VY5vHBPlQLtZuZeoHYfO5lpjduNlrHu%2Fxdd5SjNp75PWGdBA%2BcyBtKulCYSv5KoMxC6hYWxs8eoeTXEWBQtduZI2nd%2Ftmxgxem4p30GululT7jNTjunuNap%2FUFbKbgN2%2Bh9z9nFArWCH2muXmA17KRWmh88CUH3zRo2xgJF2XgsFwvbByrWINS%2FKT%2BXSCPey77nOkQx2R3O0uFePCLKlbXTf9cqsRiM%2BLdSyBCrN9j8ee1yN0faEW7tkjPeVRDpmkUONNr7dYgFtS%2BaJrjxnRx8wf4cxsJrqFHhqo5ma6o83SqAUEsPpftCh%2Bwn52cLUO7XepeqA7ZtU%3D",
traceid:"wx0ystdughnrwkeg00",
group_id:"",
ticket:"2tkzedhfavvnh",
aid:"14883338",
pt:105,
image_url:"",
ad_desc:"",
biz_appid:"wxfe55a3afa49537b6",
biz_info:{
user_name:"gh_974472b359a3",
nick_name:"每日优鲜会员店",
is_subscribed:1,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5O1JC938qZ9IIBmUnlW6QAvyIEuIkn2YcwAHCKVqibzZQ/0",
biz_uin:3003204094
},
pos_type:0,
watermark_type:0,
logo:"",
card_info:{
card_logo_url:"http://mmbiz.qpic.cn/mmbiz/fVRBnicEsiceRpwp7fIX8NmIBEWKXicAEyT8to01Wd8f49bdFMRB24CsA71Hs7asnfBMqZEOlbsjDpELNBP3XGfIQ/0?wx_fmt=jpeg",
card_title:"来就送，全场不限购",
card_brand_name:"每日优鲜",
card_id:"pLdaCt1yKL9u8auHF9Pl5MX9V3Jc",
card_outer_id:"wx0ystdughnrwkeg00_14883338_14883339",
card_ext:'{"code":"","timestamp":1504008556,"signature":"bc543819d991d6df1b446e1cbd52b43693ae0320","openid":"","source_scene":"SOURCE_SCENE_APPMSG_JSAPI","outer_id":0,"unique_id":"","outer_str":"","user_card":{}}'
},
is_cpm:0,
dest_type:0
},
pt_107:{
hint_txt:"香港",
url:"http://clickc.admaster.com.cn/c/a90369,b1882040,c2132,i0,m101,8a2,8b2,h?weixinadkey=b8edb659e79a4c21932d4d5d919b363863a8b6fc1e403d13274587beab13366c0fc8b26e60a6b4b418a4703d9c7ad495&gdt_vid=wx0rvwt6sm654f6200&weixinadinfo=14884284.wx0rvwt6sm654f6200.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=MxsJYgnw6iZWfQYjtG9x4aaLEaVH%2FrkkV%2Bs8ttfNZRnOUrbNLRNSMQNOgrzWshG7E57vLfXXbE6hmpkHgIlBzyAJowHYjDT8NsBWh1WrdXi2Y587%2FaZJPLWRn9wjcYJ0XjlYoB2ey6pHq8HT%2BtVkO%2B7stg9mmEvJ%2BNcK61TluidVdPGMsIMGqhBQRP%2BcRs4IaLWRqbqo18FgKEpDgRrjfz82gTMJ0qKcC1UQjQ28JFmPCKZvEbKVjWWQ5DwGpTmMc8oqi%2BnnB87tb3ZRJYx5advhI7s3%2FKAZVviZdkod6YaJzgJR9mm7cp8l1GR3Gld6ysesphqyNARtt9C4LVN%2FuAHTc3E5kH6lvrlAc9s0AM8%2B%2BLOBLjd0ltYVEzu2mkBblGyBmj%2BqvDqej15qeQZZUxwFGg6WlK5FEOZArSBaJEPgZFunxoYwbcpo%2Fz95cmusktYLSbccA9DNORhz8VvHffii3GSqSywZ4hLyne0YNp8o0jwWARw0DYlmnrd36nOsG6u37jkQrjKXCO1OEfGA00lZpKbLghVR06PUtfgGU%2FsceHwpSVYpRtqkpn4QnIoKngOG1%2FFr6VJdj%2BkauF94pWd7emXic2d7qcCyNh%2B1jcLOCR4SfcV33gXq%2FbGE41cCHjH3POIcS17ZnxMdMyaMw0SQQYsgTfByZPSFMWKy3%2FAT6DQLrHX9RoxGzv%2Bae7Cbo3VOlcvrX5ZU08Js%2FtEqFFTB3DOMV%2Bkz6%2BdFxSY2firnG9AsZuwsosu7toBW4wQQLoxf3pWCHsire4%2F6uO7SojOqzTyReH%2BxmR%2BiZ4bZq1ikH1ie5WKVgTUWC71fRKHDc0N6S5Vox0O%2BrfHU3Ew0%2FHyHaIh4tzRsSHjfedzNAYNh5bMppchpPpxfmOlA12aUN0P2DEW83bpJjHuq6Yb5whpG0RSsHOjYORxh46JvuJ%2F3ttAqijAnDZ5K5TokwYC6UCkcQL6ZlYUezONHfEcYPZCimrSryDHEu5hJqCuz2xa12jG1UWru22WSWUp9Mh20dN2oBgQy1V0Va14s4AvtnSld1bbFx8ywEuk5RKPSZMSHL%2F%2BnGfIsX4S8Qdl9Pg%2BxrR%2BjnMhasek%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=MxsJYgnw6iZWfQYjtG9x4aaLEaVH%2FrkkV%2Bs8ttfNZRnOUrbNLRNSMQNOgrzWshG7E57vLfXXbE6hmpkHgIlBzyAJowHYjDT8NsBWh1WrdXi2Y587%2FaZJPLWRn9wjcYJ0XjlYoB2ey6pHq8HT%2BtVkO%2B7stg9mmEvJ%2BNcK61TluidVdPGMsIMGqhBQRP%2BcRs4IaLWRqbqo18FgKEpDgRrjfz82gTMJ0qKcC1UQjQ28JFmPCKZvEbKVjWWQ5DwGpTmMc8oqi%2BnnB87tb3ZRJYx5advhI7s3%2FKAZVviZdkod6YaJzgJR9mm7cp8l1GR3Gld6ysesphqyNARtt9C4LVN%2FuAHTc3E5kH6lvrlAc9s0AM8%2B%2BLOBLjd0ltYVEzu2mkBblGyBmj%2BqvDqej15qeQZZUxwFGg6WlK5FEOZArSBaJEPgZFunxoYwbcpo%2Fz95cmusktYLSbccA9DNORhz8VvHffii3GSqSywZ4hLyne0YNp8o0jwWARw0DYlmnrd36nOsG6u37jkQrjKXCO1OEfGA00lZpKbLghVR06PUtfgGU%2FsceHwpSVYpRtqkpn4QnIoKngOG1%2FFr6VJdj%2BkauF94pWd7emXic2d7qcCyNh%2B1jcLOCR4SfcV33gXq%2FbGE41cCHjH3POIcS17ZnxMdMyaMw0SQQYsgTfByZPSFMWKy3%2FAT6DQLrHX9RoxGzv%2Bae7Cbo3VOlcvrX5ZU08Js%2FtEqFFTB3DOMV%2Bkz6%2BdFxSY2firnG9AsZuwsosu7toBW4wQQLoxf3pWCHsire4%2F6uO7SojOqzTyReH%2BxmR%2BiZ4bZq1ikH1ie5WKVgTUWC71fRKHDc0N6S5Vox0O%2BrfHU3Ew0%2FHyHaIh4tzRsSHjfedzNAYNh5bMppchpPpxfmOlA12aUN0P2DEW83bpJjHuq6Yb5whpG0RSsHOjYORxh46JvuJ%2F3ttAqijAnDZ5K5TokwYC6UCkcQL6ZlYUezONHfEcYPZCimrSryDHEu5hJqCuz2xa12jG1UWru22WSWUp9Mh20dN2oBgQy1V0Va14s4AvtnSld1bbFx8ywEuk5RKPSZMSHL%2F%2BnGfIsX4S8Qdl9Pg%2BxrR%2BjnMhasek%3D",
traceid:"wx0rvwt6sm654f6200",
group_id:"",
ticket:"",
aid:"14884284",
pt:107,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041097f8416e7dba80185eb1ce3584b92b3402030119700400&hy=SH&storeid=32303137303832393038343831383030306162333336313336666664393337313561333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"",
pos_type:0,
watermark_type:2,
logo:"",
is_cpm:0,
dest_type:1
},
pt_108:{
hint_txt:"",
url:"http://www.bmw.com.cn/zh/all-models/5-series/sedan/2017/campaign.html?bmw=dis:G38-launch:G30:m_wechhx_17-g38-pd-g38-soc_hxa_am_kol12&weixinadkey=c3e62068f8f6b72b3dfc3a80ea462979a552431fd42aaae1dfffd5c4184a9fc5a6d6788fb07ea9834ea46f0979708832&gdt_vid=wx0bm4j5xpmdnsnw00&weixinadinfo=10464868.wx0bm4j5xpmdnsnw00.1.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=jAt%2BjtzubuFN%2FlLgCHrg2VDh7mykjsR9eRRCq4rl4diohJDfjJVbYwz6t%2BdFfbCXPPs2X3F%2BDexoo%2FXRTEtXKb5B%2BbuCK2mldAwsBMe7w4TrtbdFJdXPvcyL8kYqHCmjjlVy8SjjSjQBboxdpEY1rSeq8Npv0CHN3I1FyHm0vWSkbTvHQ4LvkBJJrw0UGvnLdAy7g4S1InwJeFrW4Cwv9E7rSmPd%2FU9lQwOIdrshIiYlVpRJuQ0yYcI9dJ%2BvnLfN5RlSzXYYbyxlsbZZDslHoEzWwuKfgg7ytoxYlIdXzguHqfawMW90v7vm5v7GTgjRnwdYBEHyrhKliLIFEzWGL5VFhgVD%2B9jKxi%2FphBFPqv0oS7oJUpLThQ8lYP%2FUzspxRTHvPV0ihF1lemXfZ4q7LY3NSXOYsHY%2BtdbEmbXa7EaCmS63bi6GGQTzduFRB5MgpdhSjTPE%2Fq9HqsNU63tU2z2VOUfpXlf0ZL4x%2BaV0UZFKFVc8gfUJCThLk2g37XOiiK%2Bh07p3%2BEI7%2FBiSEfTwDGTqDo9aAOjSYFIq7nGgPhfANjbLPloSeALLlzeulZY9HiiViaV%2BXAlI2zo5GzLSYJNp6bVtimJufEwro7Q0dP5MWfVbREhJ0fZnR3ZYB42VlYSvSLHzn5SjpNwCGfeMGFeR6s9M1C48goH83kChTbHtgaWGXDEyDw5LbZagYZvBGfze1%2BS1G9TLbavn4YvSOgpN6P55wBzx3jgaba%2BmblOoq9QHTNNGuOv9g4X3x7ikFXXmomdM4FpeZWQV4RPByLH2HXs3ntmqpKxcJfXD1VD5XaTYBOcBHcS%2FRXrECMv%2F3bN8%2BBLko%2B66w9yGQsFoxdsRJCgDhOTxRzodVdFfN%2FAFB%2FiJx89rJhinepZi3X00OLJWQTVs4Ro%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=jAt%2BjtzubuFN%2FlLgCHrg2VDh7mykjsR9eRRCq4rl4diohJDfjJVbYwz6t%2BdFfbCXPPs2X3F%2BDexoo%2FXRTEtXKb5B%2BbuCK2mldAwsBMe7w4TrtbdFJdXPvcyL8kYqHCmjjlVy8SjjSjQBboxdpEY1rSeq8Npv0CHN3I1FyHm0vWSkbTvHQ4LvkBJJrw0UGvnLdAy7g4S1InwJeFrW4Cwv9E7rSmPd%2FU9lQwOIdrshIiYlVpRJuQ0yYcI9dJ%2BvnLfN5RlSzXYYbyxlsbZZDslHoEzWwuKfgg7ytoxYlIdXzguHqfawMW90v7vm5v7GTgjRnwdYBEHyrhKliLIFEzWGL5VFhgVD%2B9jKxi%2FphBFPqv0oS7oJUpLThQ8lYP%2FUzspxRTHvPV0ihF1lemXfZ4q7LY3NSXOYsHY%2BtdbEmbXa7EaCmS63bi6GGQTzduFRB5MgpdhSjTPE%2Fq9HqsNU63tU2z2VOUfpXlf0ZL4x%2BaV0UZFKFVc8gfUJCThLk2g37XOiiK%2Bh07p3%2BEI7%2FBiSEfTwDGTqDo9aAOjSYFIq7nGgPhfANjbLPloSeALLlzeulZY9HiiViaV%2BXAlI2zo5GzLSYJNp6bVtimJufEwro7Q0dP5MWfVbREhJ0fZnR3ZYB42VlYSvSLHzn5SjpNwCGfeMGFeR6s9M1C48goH83kChTbHtgaWGXDEyDw5LbZagYZvBGfze1%2BS1G9TLbavn4YvSOgpN6P55wBzx3jgaba%2BmblOoq9QHTNNGuOv9g4X3x7ikFXXmomdM4FpeZWQV4RPByLH2HXs3ntmqpKxcJfXD1VD5XaTYBOcBHcS%2FRXrECMv%2F3bN8%2BBLko%2B66w9yGQsFoxdsRJCgDhOTxRzodVdFfN%2FAFB%2FiJx89rJhinepZi3X00OLJWQTVs4Ro%3D",
traceid:"wx0bm4j5xpmdnsnw00",
group_id:"",
ticket:"",
aid:"10464868",
pt:108,
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410843862ace59d7f54684e8636e547179d02030107250400&hy=SH&storeid=32303137303431313130333130363030303433643732313336666664393336663561333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"wx32aa823f78e5f6ad",
biz_info:{
user_name:"gh_f917083b43f6",
nick_name:"宝马中国",
is_subscribed:0,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM76uydt9p5uZibiapePLb7Fq9uohicmOyqphtUVfBAapY6Bg/0",
biz_uin:2399998701
},
pos_type:3,
watermark_type:2,
logo:"",
is_cpm:1,
dest_type:0
},
pt_108x1:{
hint_txt:"",
url:"https://mp.weixin.qq.com/tp/ad_detail_info?page_key=fb453cc093cadbb19e1164df64b76670606affb1f3a67a2b661552266d7c7d9c38dc8b93b7234a3c307e9f589c706a38&amp;weixinadkey=9beedd976bec8f5dd185840039eb0a6d167106fa76a3bf90181a1313708f9ae5133a3a1741ce1ed6230bee56c0067eb3&amp;ticket=2iy82ek9vr14r&amp;gdt_vid=wx0mgwlsn7oqz4eo00&amp;weixinadinfo=17563214.wx0mgwlsn7oqz4eo00.0.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=jRJ2yVdzo",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=jRJ2yVdzo",
traceid:"wx0mgwlsn7oqz4eo00",
group_id:"",
ticket:"2iy82ek9vr14r",
aid:"17563214",
pt:108,
image_url:"http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?m=65ce79901c249141a62daf68f4a585dd&amp;filekey=30340201010420301e02016d04025348041065ce79901c249141a62daf68f4a585dd020300de4c040d00000004627466730000000131&amp;hy=SH&amp;storeid=32303138303230363034333635353030306333666438313336666664393331333630333230613030303030303664&amp;bizid=1023",
app_info:{
category:[],
url_scheme:""
},
ad_desc:"",
biz_appid:"wx1810db69dad380b3",
biz_info:{
user_name:"gh_715d9b59caea",
nick_name:"2394012349",
is_subscribed:0,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM4rBIcmiaQiabtaQ7PcRrX5YDD5IToCZEctSpxfbTAB3K5Q/0",
biz_uin:2394012349
},
pos_type:3,
watermark_type:2,
logo:"",
is_cpm:1,
dest_type:9,
material_width:690,
material_height:388,
canvas_info:{
canvas_id:"115732",
ad_info_xml:"&lt;?xml version=&#39;1.0&#39; encoding=&#39;utf-8&#39; ?&gt;\n&lt;ADInfo&gt;\n	&lt;uxinfo&gt;17563214|wx0mgwlsn7oqz4eo00||0|1517979379|0&lt;/uxinfo&gt;\n	&lt;session_data&gt;\n		&lt;trace_id&gt;wx0mgwlsn7oqz4eo00&lt;/trace_id&gt;\n		&lt;aid&gt;17563214&lt;/aid&gt;\n	&lt;/session_data&gt;\n&lt;/ADInfo&gt;\n\n"
}
},
pt_112:{
ad_desc:"",
aid:"14693949",
app_info:{
apk_name:"com.vipshop.iphone",
apk_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
app_id:417200582,
app_md5:"",
app_name:"唯品会 - 全球精选 正品特卖",
app_rating:4.5,
app_size:177868800,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
category:["购物","生活"],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/QxcpzGS56acDgouyWHPicmB7uddoozlibww6EFq9dxplGGnTm89rxMYxGSvO6MPwABPI6fUxaZKzxcJBqbNqsR8Q/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=dzPi6nSDBnUeIy2F22yf%2BRcXSt9Mowsho0QDRtu7vZ99upmzsmxqZNyoOHuOD9PlyAWcottz9uYBorF30lIRkKpMxis%2BAEYckXqka%2F3BkAvAC5QAOfjWW2BWRrDMLFjYbHNaw3CCKFLAjpcBvPCp1QDTKBwGB6zaPDnDi94Y4K0Cjb3SOYLvW1SZbDbjDeMnPePjvx0QbhEUGNVqjlKKN1es23L4fsxA%2F7iL%2FNAj0YDS4IneMCe2M2T%2Fq49a7lwX8dchCyJ6g6qTE5yLXRPfHK0AklwHe9lam1Bp2ECs6DMBqbSVrs2%2BHP9G0HGevSBpM%2Fzsdzk6cWBaD2ZgL6RumRPxPwUeyJ2AHkY2u105cdsFfbHsUYNASgKvnaO4X38Y1Z2QuPH9amrHlVXyGuiZvO5uR2yT3rKLzjTd%2F6fKWWqT%2Fazr0rxYjo2oSYdzLG01lOh8zuFlYOojcRjeEsgaOTF03wnD6TK%2FhT7bA8dAtUjV7l%2F8asbPKW0RhJFodllHwPsm8%2FHOP3%2FfF29R9AyPcR6GD0vQSfjR5iwjhNa5F07aGlqWUtNAixvC7DY51sJluBMMf1PJ9p2itkjbLHA52vXt0l9WuLraoPM6LbR8zocssCDSlbant2mAKEIAB%2F8N4DLQGTrsPSBIE90VhE%2BRpaZWkBI%2FuhnCzDJoC7x4LtCmj01YRwFFMoCL8VT71z2f4buxqsqLSsE0t3fvQRn8YXuUv1X1vHEIVnD14ixD0gOkWIFJkpBH%2BV91S7ZP%2BbALie4LjkzxumDWj2RDBraUPogOn2yEm8H7zoAMs%2F%2B0WN0R8iMNuM79OcZqGMsDS2n5r4NBztFcuhXdi3Sr8hMhMfqLc2YLbwSbUGzWEbCq1OH01DTPn2uwHy2vBUf5pT4mVvTHjXYNLKmoSfisbnBCiv1pnU2kh09zaJacDRyCmjOkOmDMZgt1HjtCpwcR5tFQ%2FmMhGkHqy%2FFe6lWqggbiaj%2FT04oR7Btlfd51astFioXTHtmtUVyqwlTRftjl%2ByRyKZ9%2F3ZuWxWRgJNQX%2FaSsgAVggxTZp18neL1rVS21a%2F3fIDNk5EUlhBqTsHzjGStOQwG2YvVSQOk%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"IOS-牛仔单品-0408",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041003cbda0b46790c0aaabd593d59a13048020300c2780400&amp;hy=SH&amp;storeid=32303137303832353035353332333030306433313263313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:112,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=dzPi6nSDBnUeIy2F22yf%2BRcXSt9Mowsho0QDRtu7vZ99upmzsmxqZNyoOHuOD9PlyAWcottz9uYBorF30lIRkKpMxis%2BAEYckXqka%2F3BkAvAC5QAOfjWW2BWRrDMLFjYbHNaw3CCKFLAjpcBvPCp1QDTKBwGB6zaPDnDi94Y4K0Cjb3SOYLvW1SZbDbjDeMnPePjvx0QbhEUGNVqjlKKN1es23L4fsxA%2F7iL%2FNAj0YDS4IneMCe2M2T%2Fq49a7lwX8dchCyJ6g6qTE5yLXRPfHK0AklwHe9lam1Bp2ECs6DMBqbSVrs2%2BHP9G0HGevSBpM%2Fzsdzk6cWBaD2ZgL6RumRPxPwUeyJ2AHkY2u105cdsFfbHsUYNASgKvnaO4X38Y1Z2QuPH9amrHlVXyGuiZvO5uR2yT3rKLzjTd%2F6fKWWqT%2Fazr0rxYjo2oSYdzLG01lOh8zuFlYOojcRjeEsgaOTF03wnD6TK%2FhT7bA8dAtUjV7l%2F8asbPKW0RhJFodllHwPsm8%2FHOP3%2FfF29R9AyPcR6GD0vQSfjR5iwjhNa5F07aGlqWUtNAixvC7DY51sJluBMMf1PJ9p2itkjbLHA52vXt0l9WuLraoPM6LbR8zocssCDSlbant2mAKEIAB%2F8N4DLQGTrsPSBIE90VhE%2BRpaZWkBI%2FuhnCzDJoC7x4LtCmj01YRwFFMoCL8VT71z2f4buxqsqLSsE0t3fvQRn8YXuUv1X1vHEIVnD14ixD0gOkWIFJkpBH%2BV91S7ZP%2BbALie4LjkzxumDWj2RDBraUPogOn2yEm8H7zoAMs%2F%2B0WN0R8iMNuM79OcZqGMsDS2n5r4NBztFcuhXdi3Sr8hMhMfqLc2YLbwSbUGzWEbCq1OH01DTPn2uwHy2vBUf5pT4mVvTHjXYNLKmoSfisbnBCiv1pnU2kh09zaJacDRyCmjOkOmDMZgt1HjtCpwcR5tFQ%2FmMhGkHqy%2FFe6lWqggbiaj%2FT04oR7Btlfd51astFioXTHtmtUVyqwlTRftjl%2ByRyKZ9%2F3ZuWxWRgJNQX%2FaSsgAVggxTZp18neL1rVS21a%2F3fIDNk5EUlhBqTsHzjGStOQwG2YvVSQOk%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0yep5orkdfvofu00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4&amp;weixinadkey=b562294f6542f5f06567317aef77f34650af02b6f13068dd9194cc80ea5d8fd177047dd133d89ad6e4eb8f6aba73ce96&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx0yep5orkdfvofu00&amp;md5sum=&amp;weixinadinfo=14693949.wx0yep5orkdfvofu00.0.1",
watermark_type:0
},
pt_112x1:{
ad_desc:"",
aid:"14693949",
app_info:{
apk_name:"com.vipshop.iphone",
apk_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
app_id:417200582,
app_md5:"",
app_name:"唯品会 - 全球精选 正品特卖",
app_rating:4.5,
app_size:177868800,
app_type:0,
appinfo_url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4",
category:["购物","生活"],
channel_id:"",
desc:"",
down_count:0,
icon_url:"http://mmbiz.qpic.cn/mmbiz_jpg/QxcpzGS56acDgouyWHPicmB7uddoozlibww6EFq9dxplGGnTm89rxMYxGSvO6MPwABPI6fUxaZKzxcJBqbNqsR8Q/0",
new_feature:"",
signature_md5:"",
snap_shots:"",
url_scheme:"vipshop://goHome?tra_from=tra%3Atlkelyf1%3A%3A%3A%3A",
version_code:0
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=dzPi6nSDBnUeIy2F22yf%2BRcXSt9Mowsho0QDRtu7vZ99upmzsmxqZNyoOHuOD9PlyAWcottz9uYBorF30lIRkKpMxis%2BAEYckXqka%2F3BkAvAC5QAOfjWW2BWRrDMLFjYbHNaw3CCKFLAjpcBvPCp1QDTKBwGB6zaPDnDi94Y4K0Cjb3SOYLvW1SZbDbjDeMnPePjvx0QbhEUGNVqjlKKN1es23L4fsxA%2F7iL%2FNAj0YDS4IneMCe2M2T%2Fq49a7lwX8dchCyJ6g6qTE5yLXRPfHK0AklwHe9lam1Bp2ECs6DMBqbSVrs2%2BHP9G0HGevSBpM%2Fzsdzk6cWBaD2ZgL6RumRPxPwUeyJ2AHkY2u105cdsFfbHsUYNASgKvnaO4X38Y1Z2QuPH9amrHlVXyGuiZvO5uR2yT3rKLzjTd%2F6fKWWqT%2Fazr0rxYjo2oSYdzLG01lOh8zuFlYOojcRjeEsgaOTF03wnD6TK%2FhT7bA8dAtUjV7l%2F8asbPKW0RhJFodllHwPsm8%2FHOP3%2FfF29R9AyPcR6GD0vQSfjR5iwjhNa5F07aGlqWUtNAixvC7DY51sJluBMMf1PJ9p2itkjbLHA52vXt0l9WuLraoPM6LbR8zocssCDSlbant2mAKEIAB%2F8N4DLQGTrsPSBIE90VhE%2BRpaZWkBI%2FuhnCzDJoC7x4LtCmj01YRwFFMoCL8VT71z2f4buxqsqLSsE0t3fvQRn8YXuUv1X1vHEIVnD14ixD0gOkWIFJkpBH%2BV91S7ZP%2BbALie4LjkzxumDWj2RDBraUPogOn2yEm8H7zoAMs%2F%2B0WN0R8iMNuM79OcZqGMsDS2n5r4NBztFcuhXdi3Sr8hMhMfqLc2YLbwSbUGzWEbCq1OH01DTPn2uwHy2vBUf5pT4mVvTHjXYNLKmoSfisbnBCiv1pnU2kh09zaJacDRyCmjOkOmDMZgt1HjtCpwcR5tFQ%2FmMhGkHqy%2FFe6lWqggbiaj%2FT04oR7Btlfd51astFioXTHtmtUVyqwlTRftjl%2ByRyKZ9%2F3ZuWxWRgJNQX%2FaSsgAVggxTZp18neL1rVS21a%2F3fIDNk5EUlhBqTsHzjGStOQwG2YvVSQOk%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"IOS-牛仔单品-0408",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041003cbda0b46790c0aaabd593d59a13048020300c2780400&amp;hy=SH&amp;storeid=32303137303832353035353332333030306433313263313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:112,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=dzPi6nSDBnUeIy2F22yf%2BRcXSt9Mowsho0QDRtu7vZ99upmzsmxqZNyoOHuOD9PlyAWcottz9uYBorF30lIRkKpMxis%2BAEYckXqka%2F3BkAvAC5QAOfjWW2BWRrDMLFjYbHNaw3CCKFLAjpcBvPCp1QDTKBwGB6zaPDnDi94Y4K0Cjb3SOYLvW1SZbDbjDeMnPePjvx0QbhEUGNVqjlKKN1es23L4fsxA%2F7iL%2FNAj0YDS4IneMCe2M2T%2Fq49a7lwX8dchCyJ6g6qTE5yLXRPfHK0AklwHe9lam1Bp2ECs6DMBqbSVrs2%2BHP9G0HGevSBpM%2Fzsdzk6cWBaD2ZgL6RumRPxPwUeyJ2AHkY2u105cdsFfbHsUYNASgKvnaO4X38Y1Z2QuPH9amrHlVXyGuiZvO5uR2yT3rKLzjTd%2F6fKWWqT%2Fazr0rxYjo2oSYdzLG01lOh8zuFlYOojcRjeEsgaOTF03wnD6TK%2FhT7bA8dAtUjV7l%2F8asbPKW0RhJFodllHwPsm8%2FHOP3%2FfF29R9AyPcR6GD0vQSfjR5iwjhNa5F07aGlqWUtNAixvC7DY51sJluBMMf1PJ9p2itkjbLHA52vXt0l9WuLraoPM6LbR8zocssCDSlbant2mAKEIAB%2F8N4DLQGTrsPSBIE90VhE%2BRpaZWkBI%2FuhnCzDJoC7x4LtCmj01YRwFFMoCL8VT71z2f4buxqsqLSsE0t3fvQRn8YXuUv1X1vHEIVnD14ixD0gOkWIFJkpBH%2BV91S7ZP%2BbALie4LjkzxumDWj2RDBraUPogOn2yEm8H7zoAMs%2F%2B0WN0R8iMNuM79OcZqGMsDS2n5r4NBztFcuhXdi3Sr8hMhMfqLc2YLbwSbUGzWEbCq1OH01DTPn2uwHy2vBUf5pT4mVvTHjXYNLKmoSfisbnBCiv1pnU2kh09zaJacDRyCmjOkOmDMZgt1HjtCpwcR5tFQ%2FmMhGkHqy%2FFe6lWqggbiaj%2FT04oR7Btlfd51astFioXTHtmtUVyqwlTRftjl%2ByRyKZ9%2F3ZuWxWRgJNQX%2FaSsgAVggxTZp18neL1rVS21a%2F3fIDNk5EUlhBqTsHzjGStOQwG2YvVSQOk%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx0yep5orkdfvofu00",
type:"0",
url:"https://itunes.apple.com/cn/app/%E5%94%AF%E5%93%81%E4%BC%9A-%E5%85%A8%E7%90%83%E7%B2%BE%E9%80%89-%E6%AD%A3%E5%93%81%E7%89%B9%E5%8D%96/id417200582?mt=8&amp;uo=4&amp;weixinadkey=b562294f6542f5f06567317aef77f34650af02b6f13068dd9194cc80ea5d8fd177047dd133d89ad6e4eb8f6aba73ce96&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx0yep5orkdfvofu00&amp;md5sum=&amp;weixinadinfo=14693949.wx0yep5orkdfvofu00.0.1",
watermark_type:0
},
pt_113:{
ad_desc:"",
aid:"10708726",
app_info:{
apk_name:"hk.socap.tigercoach",
apk_url:"http://imtt.dd.qq.com/16891/CAB8BFEC6A56A568B019AAAD8359154E.apk?fsname=hk.socap.tigercoach_1.0_1.apk&amp;csr=97c2",
app_id:1105677653,
app_md5:"CAB8BFEC6A56A568B019AAAD8359154E",
app_name:"老虎教练",
app_rating:5,
app_size:15414811,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/CAB8BFEC6A56A568B019AAAD8359154E.apk?fsname=hk.socap.tigercoach_1.0_1.apk&amp;csr=97c2",
category:[],
channel_id:"",
desc:"#约课记录 按时提醒# 高效管理会员约课情况，60秒帮你轻松搞定所有工作安排#数据报告 一键分享# 各项智能、精准的数据报告，供你多渠道任性分享#排行目标 数据说话# 更直观的对比，更有效的激励，教练有实力、会员进步大，我们在用数据说话",
down_count:10091,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_42368321_1492425259/256",
new_feature:"#约课记录 按时提醒# 高效管理会员约课情况，60秒帮你轻松搞定所有工作安排#数据报告 一键分享# 各项智能、精准的数据报告，供你多渠道任性分享#排行目标 数据说话# 更直观的对比，更有效的激励，教练有实力、会员进步大，我们在用数据说话",
signature_md5:"56561B3882F1704E6C070855DFCA0419",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_42368321_1_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_2_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_3_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_4_1493898503/330|http://pp.myapp.com/ma_pic2/0/shot_42368321_5_1493898503/330",
url_scheme:"",
version_code:1
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=dIFwHXIFg1LnLplm4XFpVvOsBLGRuJMlJpKQQevQAxvNSC3qXhDqEExWurQSh7n0coc2om8S3leZNkUSl%2BWyS3IsDIA4V20O9zzXMs%2Bfy5cFQiBqNUyLSJgXnsguJHhymSX%2FVsi3JO42WEZjZPI%2BUC6s8WNf2DqBd6efhGVxgEY3h6Tk%2BbHtCl7PKnYU7GAyfZDzZnXokAesrahNHgLHbDTLdtOjgKEYQBiBoU8GEMWXkBFPR3sZvhSwAPYX9o7qFDsu2JjpyEM0mGjG0BAnfWrBMQYixHUvWi%2B4aJlZlrTa%2B2sUIuV8bBGgk6%2B%2BFhhbtAks%2BmyyxHLJTpt9udAmE%2FDh6N535fNoFLXO1KHmA6i7GoANQ2CrMhLMYUewwPrEJ2WIWjfk7BdHPYwRLlBraqE%2B1jxX64GgtTg7lvuhDfM3aJYZEpFAi3uIMpzQvK%2BLeTzjR9q45WCNVPWDf4KpXLANcyN%2BCIjoUm0H0bpy7FVXs07M98Ezlk6xen%2FRZVGU1KoZ3EnGWh951rt8Mi4hkZFc43E6ePY0RP2dHc5JprBI2JZ0nr9b%2F4NJUw1%2FnPeaQHlZWWDmKmrjQuJN%2BMLnDUX%2Fqr3Gfos%2FlWWYBCf3Zrojn1i0k64b6wU4ivkh1wubQV54dt0fGLZo3gIHd0QGX15a8QkBa8QqWhzfNMiADzGUqQUAXNfQpRdk3t9ijhSJcoRCYgyQmf8zbx%2FwV5L8mdbexOoUUnmFJtDYoRKRRmn%2FD0cNDXMVGSJBfvvpKnZLAOwpyItrZigifitX9NzpdnU9KTh7J4dk%2BS5eB3s61yFzh98RqkevaZ2nqRZSR8bXoFLSGVfsPAOa0kx3BkxmEB4HAdqKszeGrymjrP3VyDi0%2BjY%2B2sA62rXA%2FtPz7xXiwtAYYexWEJZ1gQVIbgaxfNB32kVqtaMG63nfP76O9yu7JEReIc6%2FCiAX7lXbBfqKxSk5VsPKfKEZoX7M9KIUUq8po6z91cg4",
biz_appid:"",
group_id:"",
hint_txt:"健身教练的黑科技|生成精美训练记录",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041029a2949fb496566907ee0d9ed2067be2020221350400&amp;hy=SH&amp;storeid=32303137303432303039353134393030303933623462313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:113,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=dIFwHXIFg1LnLplm4XFpVvOsBLGRuJMlJpKQQevQAxvNSC3qXhDqEExWurQSh7n0coc2om8S3leZNkUSl%2BWyS3IsDIA4V20O9zzXMs%2Bfy5cFQiBqNUyLSJgXnsguJHhymSX%2FVsi3JO42WEZjZPI%2BUC6s8WNf2DqBd6efhGVxgEY3h6Tk%2BbHtCl7PKnYU7GAyfZDzZnXokAesrahNHgLHbDTLdtOjgKEYQBiBoU8GEMWXkBFPR3sZvhSwAPYX9o7qFDsu2JjpyEM0mGjG0BAnfWrBMQYixHUvWi%2B4aJlZlrTa%2B2sUIuV8bBGgk6%2B%2BFhhbtAks%2BmyyxHLJTpt9udAmE%2FDh6N535fNoFLXO1KHmA6i7GoANQ2CrMhLMYUewwPrEJ2WIWjfk7BdHPYwRLlBraqE%2B1jxX64GgtTg7lvuhDfM3aJYZEpFAi3uIMpzQvK%2BLeTzjR9q45WCNVPWDf4KpXLANcyN%2BCIjoUm0H0bpy7FVXs07M98Ezlk6xen%2FRZVGU1KoZ3EnGWh951rt8Mi4hkZFc43E6ePY0RP2dHc5JprBI2JZ0nr9b%2F4NJUw1%2FnPeaQHlZWWDmKmrjQuJN%2BMLnDUX%2Fqr3Gfos%2FlWWYBCf3Zrojn1i0k64b6wU4ivkh1wubQV54dt0fGLZo3gIHd0QGX15a8QkBa8QqWhzfNMiADzGUqQUAXNfQpRdk3t9ijhSJcoRCYgyQmf8zbx%2FwV5L8mdbexOoUUnmFJtDYoRKRRmn%2FD0cNDXMVGSJBfvvpKnZLAOwpyItrZigifitX9NzpdnU9KTh7J4dk%2BS5eB3s61yFzh98RqkevaZ2nqRZSR8bXoFLSGVfsPAOa0kx3BkxmEB4HAdqKszeGrymjrP3VyDi0%2BjY%2B2sA62rXA%2FtPz7xXiwtAYYexWEJZ1gQVIbgaxfNB32kVqtaMG63nfP76O9yu7JEReIc6%2FCiAX7lXbBfqKxSk5VsPKfKEZoX7M9KIUUq8po6z91cg4",
ticket:"2mkwms35zbept",
traceid:"wx0v7mxghuorbrlw00",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105677653&amp;weixinadkey=1ac83a824aee4692ead6e7d74359bdd06013385b1b5b3a7b3391054132701a381a2bbdfbf07d98e2ba4e6ab0b2c4b280&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0v7mxghuorbrlw00&amp;md5sum=CAB8BFEC6A56A568B019AAAD8359154E&amp;weixinadinfo=10708726.wx0v7mxghuorbrlw00.0.1#wechat_redirect",
watermark_type:0,
advertisement_num:1
},
pt_114:{
ad_desc:"",
aid:"10905397",
app_info:{
apk_name:"com.tencent.tmgp.dhqy.rww",
apk_url:"http://imtt.dd.qq.com/16891/149A641FAEBE52386459BA5D983BE882.apk?fsname=com.tencent.tmgp.dhqy.rww_3.0.0_20.apk&amp;csr=1bca",
app_id:1105907773,
app_md5:"149A641FAEBE52386459BA5D983BE882",
app_name:"大话奇缘",
app_rating:0,
app_size:184561734,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/149A641FAEBE52386459BA5D983BE882.apk?fsname=com.tencent.tmgp.dhqy.rww_3.0.0_20.apk&amp;csr=1bca",
category:[],
channel_id:"000116083635353932373736",
desc:"大话奇缘是一款画风Q萌的仙侠玄幻类RPG角色扮演手游，游戏以西游为题材，剧情丰富，画质精美，任务Q萌，技能华丽，感兴趣的小伙伴快来下载吧！特色玩法： 免费福利——飞行坐骑，上古神兵，免费获得，多重福利天天送！ 情怀再现——百位伙伴，自由搭配，打造最强：西游战队！ 激情策略——阵法相生，属性相克，战斗策略，完美呈现！ 剧情跌宕——西游无间道，谁才是终极BOSS？等你揭晓！真人社交——实时语音，轻松撩妹，战斗协同，玩转西游！",
down_count:1020,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_52459198_1493292084/256",
new_feature:"大话奇缘是一款画风Q萌的仙侠玄幻类RPG角色扮演手游，游戏以西游为题材，剧情丰富，画质精美，任务Q萌，技能华丽，感兴趣的小伙伴快来下载吧！特色玩法： 免费福利——飞行坐骑，上古神兵，免费获得，多重福利天天送！ 情怀再现——百位伙伴，自由搭配，打造最强：西游战队！ 激情策略——阵法相生，属性相克，战斗策略，完美呈现！ 剧情跌宕——西游无间道，谁才是终极BOSS？等你揭晓！真人社交——实时语音，轻松撩妹，战斗协同，玩转西游！",
signature_md5:"8C6830E0A094F25D33234BE821177A13",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_52459198_1_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_2_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_3_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_4_1493105480/330|http://pp.myapp.com/ma_pic2/0/shot_52459198_5_1493105480/330",
url_scheme:"",
version_code:20
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=SNN8szKTYJrVr0PUTMzYSyxLAUCqEMMoyjDPVclvxwIy1wJBdvESAM5soxT%2F5DZyl90WVyu7Kueft0Y97DeZo9u3w6Y1uUvD4VG8DdQq0mmEu9GHB%2Fn552HMJIlK%2FWSD7c8sHv4tA%2BatzhoV9k4cIs6lwbr1GXn7Jz4ilM7aBBkZfso61d5VnAwbIXKpg77sflvq1s0mAh2%2Bbwuwn1kTKi88KRtOqelM2SglvE2ApYua3vPkVnav1avSGeJm%2BE3%2FpLh9z0sdxKpUK7S57kn4Ts9V1MOvh3LFWy3Y%2FiTVylBKyqsqTVPFo9VoFjm6GkL0FRcnQxqSJfOtZDR64G2LZTmvda%2BCvDGbE57LGgQ74p75W8bsN2YwqSJYGFpMUJqnCzXQWth%2Bgr%2FWBeRAhEiUJ%2B9VFc%2Blj311ajdz%2BoZ9jNDbxKo9mnYgPSVPjqciyjYGH%2F3GN%2F7bs6Bc7b0YjNosS54XVXesnEL3%2BykGnp5%2BFFpzOu8VyOmxoBBKBC%2FKHBIUtdz8jUeP3mHgPOkmhaLyU9yIN%2Bs0ExHTy6VGexzN4kZwgOCO3peL4DqsPW%2Fu02WnMp6FcnZQQ2M%2Fy%2FQ%2BIxLkZXGtmcxZSgwGc0wVSywPlf7ZssvTyvrs1lAb6JNMGgiyH5crCnF9TKGHtjgkvjOC1bOmlyFHKmPN0rAGmbBXr3Qb30pOMDghWnrTwHdN%2FIKo7P4Xa3PoH655PcXl992CmX7a%2Bfb%2FCH%2FfFEm1ENn3JfHUZkd%2BrfVRHgRvneXU4diIYDNH9Q864XNit63YwEx5s%2BRoYQXWurwI7XdF7lIUN2vEIAd6mgIXwUd%2FoGaq7zWabp7vOHoy%2BvsL6jO8IdQaz4GS0ehruct4kzixVeHKIEXDTxTWZz%2Fg%2F64udCyNYFSkf1OOZKQ%2B4ijc4wEQf%2BCp1T1EpkkC%2BpArpTfqv%2FJHgPNkO3DFFD%2BdTER9Z7I%2F757e6o9GN%2BOn3YQn6hTttlpCW3hLzMOlo2J8%2FcIEdAsltJo%3D",
biz_appid:"",
group_id:"",
hint_txt:"修仙江湖安卓再营销1",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410b7986e563774afe71a689178232845cb020300bcd90400&amp;hy=SH&amp;storeid=32303137303432373131343631303030303161393963313336666664393331333630333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:114,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=SNN8szKTYJrVr0PUTMzYSyxLAUCqEMMoyjDPVclvxwIy1wJBdvESAM5soxT%2F5DZyl90WVyu7Kueft0Y97DeZo9u3w6Y1uUvD4VG8DdQq0mmEu9GHB%2Fn552HMJIlK%2FWSD7c8sHv4tA%2BatzhoV9k4cIs6lwbr1GXn7Jz4ilM7aBBkZfso61d5VnAwbIXKpg77sflvq1s0mAh2%2Bbwuwn1kTKi88KRtOqelM2SglvE2ApYua3vPkVnav1avSGeJm%2BE3%2FpLh9z0sdxKpUK7S57kn4Ts9V1MOvh3LFWy3Y%2FiTVylBKyqsqTVPFo9VoFjm6GkL0FRcnQxqSJfOtZDR64G2LZTmvda%2BCvDGbE57LGgQ74p75W8bsN2YwqSJYGFpMUJqnCzXQWth%2Bgr%2FWBeRAhEiUJ%2B9VFc%2Blj311ajdz%2BoZ9jNDbxKo9mnYgPSVPjqciyjYGH%2F3GN%2F7bs6Bc7b0YjNosS54XVXesnEL3%2BykGnp5%2BFFpzOu8VyOmxoBBKBC%2FKHBIUtdz8jUeP3mHgPOkmhaLyU9yIN%2Bs0ExHTy6VGexzN4kZwgOCO3peL4DqsPW%2Fu02WnMp6FcnZQQ2M%2Fy%2FQ%2BIxLkZXGtmcxZSgwGc0wVSywPlf7ZssvTyvrs1lAb6JNMGgiyH5crCnF9TKGHtjgkvjOC1bOmlyFHKmPN0rAGmbBXr3Qb30pOMDghWnrTwHdN%2FIKo7P4Xa3PoH655PcXl992CmX7a%2Bfb%2FCH%2FfFEm1ENn3JfHUZkd%2BrfVRHgRvneXU4diIYDNH9Q864XNit63YwEx5s%2BRoYQXWurwI7XdF7lIUN2vEIAd6mgIXwUd%2FoGaq7zWabp7vOHoy%2BvsL6jO8IdQaz4GS0ehruct4kzixVeHKIEXDTxTWZz%2Fg%2F64udCyNYFSkf1OOZKQ%2B4ijc4wEQf%2BCp1T1EpkkC%2BpArpTfqv%2FJHgPNkO3DFFD%2BdTER9Z7I%2F757e6o9GN%2BOn3YQn6hTttlpCW3hLzMOlo2J8%2FcIEdAsltJo%3D",
ticket:"2mkwms35zbept",
traceid:"wx0dzohrsr4j7ad200",
type:"0",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1105907773&amp;weixinadkey=e359b1e7499e785130bda691aece8642ca35a75b0c70edde44eb07d0426f18f591cfbe09b7aa0a0eb33820487b26ae34&amp;ticket=2mkwms35zbept&amp;gdt_vid=wx0dzohrsr4j7ad200&amp;channel_id=000116083635353932373736&amp;md5sum=149A641FAEBE52386459BA5D983BE882&amp;weixinadinfo=10905397.wx0dzohrsr4j7ad200.0.1#wechat_redirect",
watermark_type:0
},
pt_114x1:{
ad_desc:"",
aid:"14725306",
app_info:{
apk_name:"com.achievo.vipshop",
apk_url:"http://imtt.dd.qq.com/16891/23B8B81AD9270BDB3310FACCA8B8B3B3.apk?fsname=com.achievo.vipshop_6.5.3_733.apk&amp;csr=1bca",
app_id:1101072624,
app_md5:"23B8B81AD9270BDB3310FACCA8B8B3B3",
app_name:"唯品会",
app_rating:4.35158,
app_size:42632348,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/23B8B81AD9270BDB3310FACCA8B8B3B3.apk?fsname=com.achievo.vipshop_6.5.3_733.apk&amp;csr=1bca",
category:[],
channel_id:"000116083636323838363139",
desc:"唯品会，全球精选，正品特卖！唯品会提供1折起的深度折扣，从此再也不用担心买不起正品大牌啦！ 1、深度折扣 限时特卖 品类齐全 每天早10点&amp;晚8点上新品 全场大牌深度折扣，1折起售，全网最实惠 服饰、美妆、亲子、居家多种品类，满足您的一站式购物需求 2、购物体验有保障 支持货到付款，先看实物再给钱 七天无条件退货，退货返还运费 3、全球知名特卖电商，美国上市公司，百分百正品保障 品牌直签授权，从根源杜绝假货 4、七成用户成为回头客 每天帮助两亿会员节省数亿元，享受“尊贵不贵”超过70%的会员买了又买，日日约会 5、直播.发现惊喜无处不在 为你精选最热时尚资讯、好玩活动，更有明星达人直播——穿搭、美妆、生活、母婴各类干货轻松GET！6、开通唯品花，分期付款0压力，3/6/9/12/18期，随心分期！立即下载，开启省钱之旅吧！ 【意见反馈】 官方微博：@唯品会 官方微信：“唯品会特卖“ 时刻倾听你的声音。",
down_count:287579385,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_8588_1503540559/256",
new_feature:"【活动预告】夏末刚走秋燥杀到！别忘了给肌肤添置保湿好物！唯品会905秋季美妆节，面膜精华和面霜超优惠！满199减100！更有0元领商品限量抢购！9月4日晚8点准时开抢，快来把秋冬美妆爆款抢回家！【近期更新】1、丰富首页品牌展示形式，帮你发现更多惊喜品牌；2、全新好物•签到，十万用户帮你选，视频30秒极速种草，深扒唯品会好物；3、详情页推出口红试妆功能，打开摄像头就可以在线试妆哦！颜色合不合适试试就知道啦；4、新增服务进度反馈，以后咨询过的问题进度可以在消息中心查看啦；5、增加了用户自助查询客服工单的功能，可快速查询工单进度。",
signature_md5:"0572A236AE97F777609471D99C118331",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_8588_1_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_2_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_3_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_4_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_5_1503975667/330",
url_scheme:"",
version_code:733
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=AGft%2FmcDKo9BVCqkzg57z2F3StLr6dwCcmiInStspj6ckzUQanM%2BLORkRPhfA5%2FkdbsPrq5xm3oXxPFONqEfImD1bmOOWWx93%2FCvt%2Ff0ikqtrP3q01iRMYoTgG6%2B8wCwXBdT8ctVl9MYWPfhwYK5tUl3Mppn0HfnOCTv3tA6y57r63x3bbuyqcAONLiOK%2Bo2EsEAoRXu2RGT%2BK3YiYqiGXag%2B4J44KLnRhZE0IwHhgbFh1vxXk4CfdlqUAjjF8LiKIw3U5G3MtlaNtpXUPBkuOYkXg2hVIGPg%2BpbCOCWTw6t8GijgfwpU5tXFGO5buAp3AtMX14GkvZ1FT83uJsWWXf3bIjUbJ02FAwFdmGmFGb%2BBGlsN6Onvb5vDjMfIjHWMsHsH%2FgV93kcctYk5fFHzaI1jcmqe%2BJ5lIxhEDT7rhL7fH6aEkFXrSaflT16yTtOjPOWIFnwqD816krNqX4peIEgwR%2FR2f8rLR%2BaUNP0IXCHXHyLNx8jpnyt%2FQSuwh1bcVCR7JXB9KeVEhDBfjs%2B77Dz2eb0PtEl7cJ3rLe8iwdk4HmNTt4GoqU1dIndeapxZhoqPzqxcKWWV901G08XFyn2FUV4z7%2Bisu6l286UzxZg7HBhyGhn663YjPAM29mI7oUD8RfVgR%2FXiqoRYWTMgf58RWoc1eQE5LHJlkXzehLvMKodaAmkSOEnao89d00x21q2i06GoLv4C9HsMQ%2BzwiU5tpZ9s0lvtAncw1bukMXKvIx7LD00uQ%2FWnsVF7BMlz0qHEy45NzfULJwdIe5opwFoqJS%2BxI1qUupdmzkdDQXd%2BfMIzbG%2B3G9AMcusfNXLbQWnCGqXpWF0kvkolC1V6aennoR0zYleSXMLNwspPrLq2yySKT0uAj1K6TjydVIHltFKC5VBjt6J%2BsSwvglTh23L6HH5MqOvKpjPVhYTU4QydmfMFB%2FK0HutVATvlkBJ6ChsQ00kCAPDlyEcOVN6L5gDSdglhzPDqFfG21wXH0rmt02dcdYIQzGOwOrPMnnM%2BJNUwlv0Y2BawwjcrmKoA%2B3kmR5s0SzFkUEpXV6d01hJ5Le7%2BP4LJ9yUBKEDVRvhpoU2bWy0THo%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"02包-单卡-双人长裙-0805",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041059e5cc48f3c3f284f7ffc2315ef55e78020300c4b40400&amp;hy=SH&amp;storeid=32303137303832353130323333323030303531363235313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:114,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=AGft%2FmcDKo9BVCqkzg57z2F3StLr6dwCcmiInStspj6ckzUQanM%2BLORkRPhfA5%2FkdbsPrq5xm3oXxPFONqEfImD1bmOOWWx93%2FCvt%2Ff0ikqtrP3q01iRMYoTgG6%2B8wCwXBdT8ctVl9MYWPfhwYK5tUl3Mppn0HfnOCTv3tA6y57r63x3bbuyqcAONLiOK%2Bo2EsEAoRXu2RGT%2BK3YiYqiGXag%2B4J44KLnRhZE0IwHhgbFh1vxXk4CfdlqUAjjF8LiKIw3U5G3MtlaNtpXUPBkuOYkXg2hVIGPg%2BpbCOCWTw6t8GijgfwpU5tXFGO5buAp3AtMX14GkvZ1FT83uJsWWXf3bIjUbJ02FAwFdmGmFGb%2BBGlsN6Onvb5vDjMfIjHWMsHsH%2FgV93kcctYk5fFHzaI1jcmqe%2BJ5lIxhEDT7rhL7fH6aEkFXrSaflT16yTtOjPOWIFnwqD816krNqX4peIEgwR%2FR2f8rLR%2BaUNP0IXCHXHyLNx8jpnyt%2FQSuwh1bcVCR7JXB9KeVEhDBfjs%2B77Dz2eb0PtEl7cJ3rLe8iwdk4HmNTt4GoqU1dIndeapxZhoqPzqxcKWWV901G08XFyn2FUV4z7%2Bisu6l286UzxZg7HBhyGhn663YjPAM29mI7oUD8RfVgR%2FXiqoRYWTMgf58RWoc1eQE5LHJlkXzehLvMKodaAmkSOEnao89d00x21q2i06GoLv4C9HsMQ%2BzwiU5tpZ9s0lvtAncw1bukMXKvIx7LD00uQ%2FWnsVF7BMlz0qHEy45NzfULJwdIe5opwFoqJS%2BxI1qUupdmzkdDQXd%2BfMIzbG%2B3G9AMcusfNXLbQWnCGqXpWF0kvkolC1V6aennoR0zYleSXMLNwspPrLq2yySKT0uAj1K6TjydVIHltFKC5VBjt6J%2BsSwvglTh23L6HH5MqOvKpjPVhYTU4QydmfMFB%2FK0HutVATvlkBJ6ChsQ00kCAPDlyEcOVN6L5gDSdglhzPDqFfG21wXH0rmt02dcdYIQzGOwOrPMnnM%2BJNUwlv0Y2BawwjcrmKoA%2B3kmR5s0SzFkUEpXV6d01hJ5Le7%2BP4LJ9yUBKEDVRvhpoU2bWy0THo%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx06ounuusvh332400",
type:"0",
url:"https://mp.weixin.qq.com/tp/ad_detail_info?page_key=d1ea7c579aa826b20831deeb2be29c24500b804c66d92198e217944f4ffc04343537d38c9c5edaef83117494d4bd03fa&amp;app_id=1101072624&amp;weixinadkey=c8dea834686b79294dabb8fc0d936f9000b26672b3b6d23cca9d8d2a2e886ec8270990708c5fde3ec574b5a2f3df1358&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx06ounuusvh332400&amp;channel_id=000116083636323838363139&amp;md5sum=23B8B81AD9270BDB3310FACCA8B8B3B3&amp;weixinadinfo=14725306.wx06ounuusvh332400.0.1#wechat_redirect",
watermark_type:0
},
pt_114x2:{
ad_desc:"",
aid:"14725306",
app_info:{
apk_name:"com.achievo.vipshop",
apk_url:"http://imtt.dd.qq.com/16891/23B8B81AD9270BDB3310FACCA8B8B3B3.apk?fsname=com.achievo.vipshop_6.5.3_733.apk&amp;csr=1bca",
app_id:1101072624,
app_md5:"23B8B81AD9270BDB3310FACCA8B8B3B3",
app_name:"唯品会",
app_rating:4.35158,
app_size:42632348,
app_type:1,
appinfo_url:"http://imtt.dd.qq.com/16891/23B8B81AD9270BDB3310FACCA8B8B3B3.apk?fsname=com.achievo.vipshop_6.5.3_733.apk&amp;csr=1bca",
category:[],
channel_id:"000116083636323838363139",
desc:"唯品会，全球精选，正品特卖！唯品会提供1折起的深度折扣，从此再也不用担心买不起正品大牌啦！ 1、深度折扣 限时特卖 品类齐全 每天早10点&amp;晚8点上新品 全场大牌深度折扣，1折起售，全网最实惠 服饰、美妆、亲子、居家多种品类，满足您的一站式购物需求 2、购物体验有保障 支持货到付款，先看实物再给钱 七天无条件退货，退货返还运费 3、全球知名特卖电商，美国上市公司，百分百正品保障 品牌直签授权，从根源杜绝假货 4、七成用户成为回头客 每天帮助两亿会员节省数亿元，享受“尊贵不贵”超过70%的会员买了又买，日日约会 5、直播.发现惊喜无处不在 为你精选最热时尚资讯、好玩活动，更有明星达人直播——穿搭、美妆、生活、母婴各类干货轻松GET！6、开通唯品花，分期付款0压力，3/6/9/12/18期，随心分期！立即下载，开启省钱之旅吧！ 【意见反馈】 官方微博：@唯品会 官方微信：“唯品会特卖“ 时刻倾听你的声音。",
down_count:287579385,
icon_url:"http://pp.myapp.com/ma_icon/0/icon_8588_1503540559/256",
new_feature:"【活动预告】夏末刚走秋燥杀到！别忘了给肌肤添置保湿好物！唯品会905秋季美妆节，面膜精华和面霜超优惠！满199减100！更有0元领商品限量抢购！9月4日晚8点准时开抢，快来把秋冬美妆爆款抢回家！【近期更新】1、丰富首页品牌展示形式，帮你发现更多惊喜品牌；2、全新好物•签到，十万用户帮你选，视频30秒极速种草，深扒唯品会好物；3、详情页推出口红试妆功能，打开摄像头就可以在线试妆哦！颜色合不合适试试就知道啦；4、新增服务进度反馈，以后咨询过的问题进度可以在消息中心查看啦；5、增加了用户自助查询客服工单的功能，可快速查询工单进度。",
signature_md5:"0572A236AE97F777609471D99C118331",
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_8588_1_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_2_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_3_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_4_1503975667/330|http://pp.myapp.com/ma_pic2/0/shot_8588_5_1503975667/330",
url_scheme:"vipshop://showGoodsDetail?pid=277250153&goodType=1&tra_from=tra%3A0xuoe90q%3A%3A%3A%3A",
version_code:733
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=AGft%2FmcDKo9BVCqkzg57z2F3StLr6dwCcmiInStspj6ckzUQanM%2BLORkRPhfA5%2FkdbsPrq5xm3oXxPFONqEfImD1bmOOWWx93%2FCvt%2Ff0ikqtrP3q01iRMYoTgG6%2B8wCwXBdT8ctVl9MYWPfhwYK5tUl3Mppn0HfnOCTv3tA6y57r63x3bbuyqcAONLiOK%2Bo2EsEAoRXu2RGT%2BK3YiYqiGXag%2B4J44KLnRhZE0IwHhgbFh1vxXk4CfdlqUAjjF8LiKIw3U5G3MtlaNtpXUPBkuOYkXg2hVIGPg%2BpbCOCWTw6t8GijgfwpU5tXFGO5buAp3AtMX14GkvZ1FT83uJsWWXf3bIjUbJ02FAwFdmGmFGb%2BBGlsN6Onvb5vDjMfIjHWMsHsH%2FgV93kcctYk5fFHzaI1jcmqe%2BJ5lIxhEDT7rhL7fH6aEkFXrSaflT16yTtOjPOWIFnwqD816krNqX4peIEgwR%2FR2f8rLR%2BaUNP0IXCHXHyLNx8jpnyt%2FQSuwh1bcVCR7JXB9KeVEhDBfjs%2B77Dz2eb0PtEl7cJ3rLe8iwdk4HmNTt4GoqU1dIndeapxZhoqPzqxcKWWV901G08XFyn2FUV4z7%2Bisu6l286UzxZg7HBhyGhn663YjPAM29mI7oUD8RfVgR%2FXiqoRYWTMgf58RWoc1eQE5LHJlkXzehLvMKodaAmkSOEnao89d00x21q2i06GoLv4C9HsMQ%2BzwiU5tpZ9s0lvtAncw1bukMXKvIx7LD00uQ%2FWnsVF7BMlz0qHEy45NzfULJwdIe5opwFoqJS%2BxI1qUupdmzkdDQXd%2BfMIzbG%2B3G9AMcusfNXLbQWnCGqXpWF0kvkolC1V6aennoR0zYleSXMLNwspPrLq2yySKT0uAj1K6TjydVIHltFKC5VBjt6J%2BsSwvglTh23L6HH5MqOvKpjPVhYTU4QydmfMFB%2FK0HutVATvlkBJ6ChsQ00kCAPDlyEcOVN6L5gDSdglhzPDqFfG21wXH0rmt02dcdYIQzGOwOrPMnnM%2BJNUwlv0Y2BawwjcrmKoA%2B3kmR5s0SzFkUEpXV6d01hJ5Le7%2BP4LJ9yUBKEDVRvhpoU2bWy0THo%3D",
biz_appid:"",
dest_type:0,
group_id:"",
hint_txt:"02包-单卡-双人长裙-0805",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d04025348041059e5cc48f3c3f284f7ffc2315ef55e78020300c4b40400&amp;hy=SH&amp;storeid=32303137303832353130323333323030303531363235313336666664393336663561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:114,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=AGft%2FmcDKo9BVCqkzg57z2F3StLr6dwCcmiInStspj6ckzUQanM%2BLORkRPhfA5%2FkdbsPrq5xm3oXxPFONqEfImD1bmOOWWx93%2FCvt%2Ff0ikqtrP3q01iRMYoTgG6%2B8wCwXBdT8ctVl9MYWPfhwYK5tUl3Mppn0HfnOCTv3tA6y57r63x3bbuyqcAONLiOK%2Bo2EsEAoRXu2RGT%2BK3YiYqiGXag%2B4J44KLnRhZE0IwHhgbFh1vxXk4CfdlqUAjjF8LiKIw3U5G3MtlaNtpXUPBkuOYkXg2hVIGPg%2BpbCOCWTw6t8GijgfwpU5tXFGO5buAp3AtMX14GkvZ1FT83uJsWWXf3bIjUbJ02FAwFdmGmFGb%2BBGlsN6Onvb5vDjMfIjHWMsHsH%2FgV93kcctYk5fFHzaI1jcmqe%2BJ5lIxhEDT7rhL7fH6aEkFXrSaflT16yTtOjPOWIFnwqD816krNqX4peIEgwR%2FR2f8rLR%2BaUNP0IXCHXHyLNx8jpnyt%2FQSuwh1bcVCR7JXB9KeVEhDBfjs%2B77Dz2eb0PtEl7cJ3rLe8iwdk4HmNTt4GoqU1dIndeapxZhoqPzqxcKWWV901G08XFyn2FUV4z7%2Bisu6l286UzxZg7HBhyGhn663YjPAM29mI7oUD8RfVgR%2FXiqoRYWTMgf58RWoc1eQE5LHJlkXzehLvMKodaAmkSOEnao89d00x21q2i06GoLv4C9HsMQ%2BzwiU5tpZ9s0lvtAncw1bukMXKvIx7LD00uQ%2FWnsVF7BMlz0qHEy45NzfULJwdIe5opwFoqJS%2BxI1qUupdmzkdDQXd%2BfMIzbG%2B3G9AMcusfNXLbQWnCGqXpWF0kvkolC1V6aennoR0zYleSXMLNwspPrLq2yySKT0uAj1K6TjydVIHltFKC5VBjt6J%2BsSwvglTh23L6HH5MqOvKpjPVhYTU4QydmfMFB%2FK0HutVATvlkBJ6ChsQ00kCAPDlyEcOVN6L5gDSdglhzPDqFfG21wXH0rmt02dcdYIQzGOwOrPMnnM%2BJNUwlv0Y2BawwjcrmKoA%2B3kmR5s0SzFkUEpXV6d01hJ5Le7%2BP4LJ9yUBKEDVRvhpoU2bWy0THo%3D",
ticket:"2t3fxa7gwijlf",
traceid:"wx06ounuusvh332400",
type:"0",
url:"https://mp.weixin.qq.com/tp/ad_detail_info?page_key=d1ea7c579aa826b20831deeb2be29c24500b804c66d92198e217944f4ffc04343537d38c9c5edaef83117494d4bd03fa&amp;app_id=1101072624&amp;weixinadkey=c8dea834686b79294dabb8fc0d936f9000b26672b3b6d23cca9d8d2a2e886ec8270990708c5fde3ec574b5a2f3df1358&amp;ticket=2t3fxa7gwijlf&amp;gdt_vid=wx06ounuusvh332400&amp;channel_id=000116083636323838363139&amp;md5sum=23B8B81AD9270BDB3310FACCA8B8B3B3&amp;weixinadinfo=14725306.wx06ounuusvh332400.0.1#wechat_redirect",
watermark_type:0
},
pt_115:{
hint_txt:"0818T1-1",
url:"https://mp.weixin.qq.com/mp/ad_biz_info?__biz=MzIyMjk2Njg2MA==&sn=f821cb9abd03c959eff7b3ffba906285&weixinadkey=93cea84ba7269f607ae7ee423d52add76b3f8054e06d8f1fa86b5ce3ac2bad86a93d71e8b1d945abf9c93107aae0a840&ticket=2tkzedhfavvnh&gdt_vid=wx0oos4rrnqayqba00&weixinadinfo=14889617.wx0oos4rrnqayqba00.0.1#wechat_redirect",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=mo%2F5irZnv0N04Au6tjLMXWWtZywtaaXCRFujSawbYqbcfg4%2B3M2Sdj2CvZd%2BtskYD2XUZWVPG2vNi0FI5QSJ5ztmvDiBKrC58q2Kyh8UXpp3xvrE44xt0BylT9NNv%2FWZEd8LLym%2FKC%2FYtAYaOgos37IMV2jucPefIZu1Ft0LF8ZEb523l34gjqd0kCJmlehjS0UuNT%2F8wXjj%2BteGnhLRzjBkiQtMr2L4GjR6Z1lvHg2I0smF5Ab%2FNKsy4BLaeFuEYQvacy0Y11MkTEPaqtpw2l71wcpU%2B1fp3tdJYoz%2B%2FucOCyw%2BmUhC9wWs9QMJWkybXzk8Wc5znweluGHkdQ2ZN%2BeBZZ9xgzcZJp5fXu6bfHzJZUniE0JqNgQqdvmJCLOrONUcVIO1%2BxTJXnISMswyNrgt10hr2M%2FC%2FuJEUeHzrjKac3EoQjVWmau7n2qIFvkVeC9Tor1%2F2Tef2fG26qpkrJ2VLOjB6MlAmEsSXlZkDe8QEltcgoTToeWOLrA%2FDcXKxXc2k6Ny0HHIpoHbpIo1Y9sKRsgmyoTfxDTMdzaWDBaoDTZtg%2BD3PjA1vi0Ox7RsDvaxqnxH3N%2FloseOVxhK6xBozlns0V0QC3pEJJTnwZdVTrLdBJTBWzPzRWbLHx2aMiew%2Bx6CqhkAT9h3Xjv64xKE4nUYEeheXIMFHOCXwMPWqMJ%2FAsIUz77V3X%2FhGDLGFBLBw2fPRVYl2%2BQLFobafcoKo6V1EBj4rFjW4ZSB8Et5qF16FwkLb22sVEh9LFk25YpqdWZzdUWZ25v50KF4Qjk0GgZ6bFYPYdM4C1E7BRqyPBjx8zgaAPYqhylYFkTewfa4Rqir%2BJhmmJtR7dU8cGKWHIaE4pfH2w405kFDDFPS7SflUb%2BM0WYk5YfYfP6Z0BwFN9S9MqCdCH132H4HF3djZOIcrKcObqi33pZOeYhUKoQFQA0HrPFRHpo0zFbN9xPn7eRwRzyYB%2BA5em9cw%2BS3FjCDrCtcHo3B7j01A2t9zxIBNLdVoE3GnEa%2BKePTLiV6FX0ijo4oSf7bbywakIvnu8sit1XqROG6p7nd5VuRrIEEeeJP5INrNor6XYkWzDLyqFGbI0gKoj2AgzzIOZw37zU8ooKz",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=mo%2F5irZnv0N04Au6tjLMXWWtZywtaaXCRFujSawbYqbcfg4%2B3M2Sdj2CvZd%2BtskYD2XUZWVPG2vNi0FI5QSJ5ztmvDiBKrC58q2Kyh8UXpp3xvrE44xt0BylT9NNv%2FWZEd8LLym%2FKC%2FYtAYaOgos37IMV2jucPefIZu1Ft0LF8ZEb523l34gjqd0kCJmlehjS0UuNT%2F8wXjj%2BteGnhLRzjBkiQtMr2L4GjR6Z1lvHg2I0smF5Ab%2FNKsy4BLaeFuEYQvacy0Y11MkTEPaqtpw2l71wcpU%2B1fp3tdJYoz%2B%2FucOCyw%2BmUhC9wWs9QMJWkybXzk8Wc5znweluGHkdQ2ZN%2BeBZZ9xgzcZJp5fXu6bfHzJZUniE0JqNgQqdvmJCLOrONUcVIO1%2BxTJXnISMswyNrgt10hr2M%2FC%2FuJEUeHzrjKac3EoQjVWmau7n2qIFvkVeC9Tor1%2F2Tef2fG26qpkrJ2VLOjB6MlAmEsSXlZkDe8QEltcgoTToeWOLrA%2FDcXKxXc2k6Ny0HHIpoHbpIo1Y9sKRsgmyoTfxDTMdzaWDBaoDTZtg%2BD3PjA1vi0Ox7RsDvaxqnxH3N%2FloseOVxhK6xBozlns0V0QC3pEJJTnwZdVTrLdBJTBWzPzRWbLHx2aMiew%2Bx6CqhkAT9h3Xjv64xKE4nUYEeheXIMFHOCXwMPWqMJ%2FAsIUz77V3X%2FhGDLGFBLBw2fPRVYl2%2BQLFobafcoKo6V1EBj4rFjW4ZSB8Et5qF16FwkLb22sVEh9LFk25YpqdWZzdUWZ25v50KF4Qjk0GgZ6bFYPYdM4C1E7BRqyPBjx8zgaAPYqhylYFkTewfa4Rqir%2BJhmmJtR7dU8cGKWHIaE4pfH2w405kFDDFPS7SflUb%2BM0WYk5YfYfP6Z0BwFN9S9MqCdCH132H4HF3djZOIcrKcObqi33pZOeYhUKoQFQA0HrPFRHpo0zFbN9xPn7eRwRzyYB%2BA5em9cw%2BS3FjCDrCtcHo3B7j01A2t9zxIBNLdVoE3GnEa%2BKePTLiV6FX0ijo4oSf7bbywakIvnu8sit1XqROG6p7nd5VuRrIEEeeJP5INrNor6XYkWzDLyqFGbI0gKoj2AgzzIOZw37zU8ooKz",
traceid:"wx0oos4rrnqayqba00",
group_id:"",
ticket:"2tkzedhfavvnh",
aid:"14889617",
pt:115,
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d04025348041080238f1cbb0dcd94d712c9bb4445b9fc020276060400&hy=SH&storeid=32303137303832393039333732333030303433366364313336666664393337313561333230613030303030303664&bizid=1023",
ad_desc:"",
biz_appid:"wxfab026d124c60311",
biz_info:{
user_name:"gh_471c30ca73ec",
nick_name:"轻松学彩铅画",
is_subscribed:0,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5GQibEnamPFlfoPCN8KqL04KjNeZ1A4RtpicPp1U8HR6Rw/0",
biz_uin:3222966860
},
pos_type:0,
watermark_type:0,
logo:"",
is_cpm:0,
dest_type:0
},
pt_116:{
ad_desc:"",
aid:"14076581",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=9u9Aw6%2FwMWEVo4a1mdoAYHzEl05e6WG1fx2sR5sbof9XpUdbc0ELf6w2KzosSymK3VzIhNjMSwrGIHlDPPMX9PUFxiXWVS3jBqPkrMXlQApQFO8aNBAJYlQ3RXZsvwpdPQuKUFDOwsTFzswX0x1Xyz0MFJ2FE%2Bjf%2B%2FpxJ3gxTOQ8YHi9RMfmbwFu9nT%2BhbaIJHwEEw6wTgw2zfLzJ3p8DQ%2FQwolEiPBiLS%2FdA7Y8C39TEYdPngh0spATFk3gao6l%2Bin0BFyibGMgBDfS%2BqPR3s7RTfXmCyR7QR3xRZi2wHYltGJmzPY20FIHfZ2ly21nmqGihcw1TAGVOgk1rVzP0Hf%2FwarGe8Y3m5IEcPAWOGHCzs%2FSl1bgFh8VtSjmo%2FBVIAM%2BKxfFXe0NXIottOVHrwBEW1GVVSULP2gZK4Jm%2BBnSql23UHKEdjB7uN3YJRFI%2B3EuPmtCyipsQsyy2tiAtCa%2FRmx1kWhLeZbgY3BNKihiA0R8V%2F9RQTKkF8ICH2CUfKK%2Fg0qRcY2VJBrFU462iPPjSGVWvpSdaPNPks0IVtfSidAc7IqKg9QNV0o%2FgzUMbd7X2TS8fM9IwVcGpc%2Bzdt4BSCSslhST7btQdsQiYlqxPaUFTjXFcso3gN4uPc7jzEM%2BfxPLnHDCshG0IYduAQDQl5FZGoygzEPOHC1ajJrYkqBU9FhPGIuJKuStquBQHWzqNhT9C3KoOV0nDkn661Qs2HzhD6O%2FlV%2BBQNUNXW62T8%2F80wcIVWpxmBrdGMcuv9IlfuhI413oMGuWLiiHVNhv6RgTzxN3WZgSYquVUHKZn0CQjxnbTiXWxcl8gK5Z7FmXhM1pPpWROqK9c9%2BSIb%2Bof6l%2BzeJn",
biz_appid:"wxb43647c46f347835",
biz_info:{
biz_uin:3098260700,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM5SEBQsOxicWxVSl1WRpArKVydT7AWtzsIoL0XBBtZqIKQ/0",
is_subscribed:0,
nick_name:"广汽本田",
user_name:"gh_59ca0f11a65d"
},
dest_type:1,
group_id:"",
hint_txt:"",
image_url:"",
is_cpm:1,
logo:"",
pos_type:3,
pt:116,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=9u9Aw6%2FwMWEVo4a1mdoAYHzEl05e6WG1fx2sR5sbof9XpUdbc0ELf6w2KzosSymK3VzIhNjMSwrGIHlDPPMX9PUFxiXWVS3jBqPkrMXlQApQFO8aNBAJYlQ3RXZsvwpdPQuKUFDOwsTFzswX0x1Xyz0MFJ2FE%2Bjf%2B%2FpxJ3gxTOQ8YHi9RMfmbwFu9nT%2BhbaIJHwEEw6wTgw2zfLzJ3p8DQ%2FQwolEiPBiLS%2FdA7Y8C39TEYdPngh0spATFk3gao6l%2Bin0BFyibGMgBDfS%2BqPR3s7RTfXmCyR7QR3xRZi2wHYltGJmzPY20FIHfZ2ly21nmqGihcw1TAGVOgk1rVzP0Hf%2FwarGe8Y3m5IEcPAWOGHCzs%2FSl1bgFh8VtSjmo%2FBVIAM%2BKxfFXe0NXIottOVHrwBEW1GVVSULP2gZK4Jm%2BBnSql23UHKEdjB7uN3YJRFI%2B3EuPmtCyipsQsyy2tiAtCa%2FRmx1kWhLeZbgY3BNKihiA0R8V%2F9RQTKkF8ICH2CUfKK%2Fg0qRcY2VJBrFU462iPPjSGVWvpSdaPNPks0IVtfSidAc7IqKg9QNV0o%2FgzUMbd7X2TS8fM9IwVcGpc%2Bzdt4BSCSslhST7btQdsQiYlqxPaUFTjXFcso3gN4uPc7jzEM%2BfxPLnHDCshG0IYduAQDQl5FZGoygzEPOHC1ajJrYkqBU9FhPGIuJKuStquBQHWzqNhT9C3KoOV0nDkn661Qs2HzhD6O%2FlV%2BBQNUNXW62T8%2F80wcIVWpxmBrdGMcuv9IlfuhI413oMGuWLiiHVNhv6RgTzxN3WZgSYquVUHKZn0CQjxnbTiXWxcl8gK5Z7FmXhM1pPpWROqK9c9%2BSIb%2Bof6l%2BzeJn",
ticket:"",
traceid:"wx0wufunvuk63xfw00",
type:"0",
url:"http://www.ghac.cn/vehicles/honda/odyssey?weixinadkey=0c52ad5fd45796439b24582df9a6167361d5ab1e4457b2c9e96a29d5a19e3d1bc8bbf0e5df7591508a76757470b14928&amp;gdt_vid=wx0wufunvuk63xfw00&amp;weixinadinfo=14076581.wx0wufunvuk63xfw00.1.1",
video_info:{
displayHeight:540,
displayWidth:960,
thumbUrl:"http://wxsnsdythumb.video.qq.com/109/20250/snsvideodownload?filekey=30270201010420301e02016d040253480410192dd121d864094a06fcbf6ec03970380203017f900400&amp;hy=SH&amp;storeid=32303137303831313130303834353030306438353437313336666664393330323561333230613030303030303664&amp;bizid=1023",
videoUrl:"http://wxsnsdy.video.qq.com/105/20210/snsdyvideodownload?m=ae0e93b5b2522f71f468a5436b069b88&amp;filekey=30270201010420301e020169040253480410ae0e93b5b2522f71f468a5436b069b88020316f0e30400&amp;hy=SH&amp;storeid=32303137303831313130303834353030306463393866313336666664393330323561333230613030303030303639&amp;bizid=1023"
},
watermark_type:0
},
pt_118:{
ad_desc:"",
aid:"14764746",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
biz_appid:"",
dest_type:6,
group_id:"",
hint_txt:"电商推广-20170703-垃圾袋测试1",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410d51122abd9413058beee4748b45cdd640203013ca10400&amp;hy=SH&amp;storeid=32303137303832363135353434383030303231323435313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:4,
pt:118,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
ticket:"",
traceid:"wx0tgj5o4czvigfw00",
type:"0",
url:"/pages/detail/pages/pintuan/index?itemId=1k5o5oe&amp;activityId=1c3wby&amp;ptp=_qd._tengxun__4459884.152.1.0&amp;weixinadkey=bf9951d70e454c6438d959cbbea3735a227eebf2e96952441d1f0e26a0e758d51c82d4e9e270e0de56da8b15765db589&amp;gdt_vid=wx0tgj5o4czvigfw00&amp;weixinadinfo=14764746.wx0tgj5o4czvigfw00.1.1",
watermark_type:0,
weapp_info:{
original_id:"gh_78b4a2eb5f09"
}
},
pt_118x1:{
ad_desc:"",
aid:"14764746",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
biz_appid:"",
cpc_exp_info:{
exp_content:"{&quot;btn_text&quot;: &quot;去购买&quot;,&quot;aid_list&quot;:[{&quot;aid&quot;: 14764746}]}"
},
dest_type:6,
group_id:"",
hint_txt:"电商推广-20170703-垃圾袋测试1",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410d51122abd9413058beee4748b45cdd640203013ca10400&amp;hy=SH&amp;storeid=32303137303832363135353434383030303231323435313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:4,
pt:118,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
ticket:"",
traceid:"wx0tgj5o4czvigfw00",
type:"0",
url:"/pages/detail/pages/pintuan/index?itemId=1k5o5oe&amp;activityId=1c3wby&amp;ptp=_qd._tengxun__4459884.152.1.0&amp;weixinadkey=bf9951d70e454c6438d959cbbea3735a227eebf2e96952441d1f0e26a0e758d51c82d4e9e270e0de56da8b15765db589&amp;gdt_vid=wx0tgj5o4czvigfw00&amp;weixinadinfo=14764746.wx0tgj5o4czvigfw00.1.1",
watermark_type:0,
weapp_info:{
original_id:"gh_78b4a2eb5f09"
}
},
pt_118x2:{
ad_desc:"",
aid:"14764746",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
biz_appid:"",
cpc_exp_info:{
exp_content:"{&quot;btn_text&quot;: &quot;去看看&quot;,&quot;icon_pos&quot;: &quot;left&quot;,&quot;aid_list&quot;:[{&quot;aid&quot;: 14764746,&quot;sale_text&quot;: &quot;全场5折起-vicky&quot;}]}"
},
dest_type:6,
group_id:"",
hint_txt:"电商推广-20170703-垃圾袋测试1",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410d51122abd9413058beee4748b45cdd640203013ca10400&amp;hy=SH&amp;storeid=32303137303832363135353434383030303231323435313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:4,
pt:118,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
ticket:"",
traceid:"wx0tgj5o4czvigfw00",
type:"0",
url:"/pages/detail/pages/pintuan/index?itemId=1k5o5oe&amp;activityId=1c3wby&amp;ptp=_qd._tengxun__4459884.152.1.0&amp;weixinadkey=bf9951d70e454c6438d959cbbea3735a227eebf2e96952441d1f0e26a0e758d51c82d4e9e270e0de56da8b15765db589&amp;gdt_vid=wx0tgj5o4czvigfw00&amp;weixinadinfo=14764746.wx0tgj5o4czvigfw00.1.1",
watermark_type:0,
weapp_info:{
original_id:"gh_78b4a2eb5f09"
}
},
pt_118x3:{
ad_desc:"",
aid:"14764746",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
biz_appid:"",
cpc_exp_info:{
exp_content:"{&quot;btn_text&quot;: &quot;去购买&quot;,&quot;icon_pos&quot;: &quot;left&quot;,&quot;aid_list&quot;:[{&quot;aid&quot;: 14764746,&quot;sale_text&quot;: &quot;全场5折起-vicky&quot;,&quot;price&quot;: &quot;1399&quot;}]}"
},
dest_type:6,
group_id:"",
hint_txt:"电商推广-20170703-垃圾袋测试1",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410d51122abd9413058beee4748b45cdd640203013ca10400&amp;hy=SH&amp;storeid=32303137303832363135353434383030303231323435313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:4,
pt:118,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
ticket:"",
traceid:"wx0tgj5o4czvigfw00",
type:"0",
url:"/pages/detail/pages/pintuan/index?itemId=1k5o5oe&amp;activityId=1c3wby&amp;ptp=_qd._tengxun__4459884.152.1.0&amp;weixinadkey=bf9951d70e454c6438d959cbbea3735a227eebf2e96952441d1f0e26a0e758d51c82d4e9e270e0de56da8b15765db589&amp;gdt_vid=wx0tgj5o4czvigfw00&amp;weixinadinfo=14764746.wx0tgj5o4czvigfw00.1.1",
watermark_type:0,
weapp_info:{
original_id:"gh_78b4a2eb5f09"
}
},
pt_118x4:{
ad_desc:"",
aid:"14764746",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
biz_appid:"",
cpc_exp_info:{
exp_content:"{&quot;btn_text&quot;: &quot;去购买&quot;,&quot;icon_pos&quot;: &quot;right&quot;,&quot;aid_list&quot;:[{&quot;aid&quot;: 14764746,&quot;sale_text&quot;: &quot;全场5折起-vicky&quot;,&quot;price&quot;: &quot;1399&quot;}]}"
},
dest_type:6,
group_id:"",
hint_txt:"电商推广-20170703-垃圾袋测试1",
image_url:"http://wxsnsdythumb.video.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410d51122abd9413058beee4748b45cdd640203013ca10400&amp;hy=SH&amp;storeid=32303137303832363135353434383030303231323435313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:4,
pt:118,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=vhLToc08YoIbLWeWei4Bg7pV%2BwHRfxuAOVNgyFSkMcOWEahu%2BZjQS3OlU0CkEmbCIi3AGYy%2F4XSsY4vpWTITZhVT9yFbmKtfn%2BzsTUZ5R9w8l42vo8SoYn83DVVvkIlEhq0%2F4%2FpMscg9rAwHL1fyBkzASVOIdQ%2BPQFdogjbEYE%2B41dDXFxL%2B6D2UHDaFFS3AjC%2B%2Bpj9WNc8aX9AM%2FvU9qW6rTUNAsMOfUX7aL4rPhQ0tczOaUJLsxMiduhyvjV6aFlKpIXO5IXMkcr1Fu2GuT28DRpREydZKU9AW9c9oSs3R6qJdg1Fqw6DOpzy9pTdyKVsXm0sGOTGhlS6T9xkNiDkPgF%2BlFR%2Bneiwai4rzpJJFn5HPtu1vj120jbWODlJiCCrpkePbGIMXP0VC%2BQnvIzsqUDxm6EPYNJ49GKXUYKMsF8GYIBUfwrrx0W9OaQ%2B5U3tdiA7lxCtDJNLA21afqjm5UB5HjS5AVhPG8Wm2gdRIDjNBxmUeOQukF0djgecmuDKRQ3k8qChVVRIL8XoIlUuDVNs16BriQVuo3vC%2BWT7K5cYDE8QH%2BNqu33Ps2B1SsEtb1d7R0oTGkc7udyjo5Qdp%2BHbLjBqfPau2kXbVEsD%2FTbhb9lw%2F6dGult72nSSKMyqjDHiKqE51z7%2FMcwebV8A0pPdjS8U%2FHO5S6n4L%2B%2F9eZTpQmQR0VTw%2BQpJXg0EgzKGYPuG5BKdIF5YemAiZKpq6l7kooPSZU7XSzJxhGvKEQq5vKiweA7uArQuTvs4IcmPxyyP59pX6VLKLkOeHzJxbJWrkP%2BTT3s%2BGg3wwiAhr61XKCsa2iH2Xzud2%2B3eN5ommp6mJQxG%2FMfUFDIJTSV3%2BZq1Qec0MdxDLc%2BV6Dar%2FddfWZ543fQn6M92c2TQxwHWhAvfLnZDYzO7VbCFHfxCLV%2F6CvVz5MlKLW53y5fzFgx5kFhhAPmPmwv6WY%2Fqc%2FKWqVhcr3N9OUIQbc5KdewwSXGRQ8Xza%2Fm9JAZAXZw4FFdgE7mdjYRQ7wSaukFERlkWtcQcsO9BjioteQqEi6rp8gMqb2keyycsk0OC0LqfRYkG9q5SFOQ%3D%3D",
ticket:"",
traceid:"wx0tgj5o4czvigfw00",
type:"0",
url:"/pages/detail/pages/pintuan/index?itemId=1k5o5oe&amp;activityId=1c3wby&amp;ptp=_qd._tengxun__4459884.152.1.0&amp;weixinadkey=bf9951d70e454c6438d959cbbea3735a227eebf2e96952441d1f0e26a0e758d51c82d4e9e270e0de56da8b15765db589&amp;gdt_vid=wx0tgj5o4czvigfw00&amp;weixinadinfo=14764746.wx0tgj5o4czvigfw00.1.1",
watermark_type:0,
weapp_info:{
original_id:"gh_78b4a2eb5f09"
}
},
pt_119:{
ad_desc:"",
aid:"11514588",
app_info:{
category:[],
url_scheme:""
},
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=JQl2DdYu2F7fedkmJMakuuz%2BcbjoYoLUkJpH4XNZmVm0HWz2TPzJ%2FUlM8oa9NRFc3LMhVYq7q0yx%2BpPIQHYhATPRmvWjJ%2FhQQ5448hZZ5IJgDUCW9pn9x6Oe6O5i4d94en4UyMt0amQR2vmmlvRpF8UeLC1GuYDNdwDxam5BYXHi6skDlCWX%2FqMBEx8U5oQ3rHOb%2F8C%2Bwi6dFuvehEcmmkgd%2BPXlC04faEgJaBioyZNQHNYbMoCHb9t0RyIyOsgZ0W50x0RCSKC5otfFA2EGByKcI2LsoWf52iA0HNtX7NS5BvJGapKD2hlq8XX8CPcOQuGtbyhZiVHLSRRkerxLLnygcFbxRWWI%2FLd%2FetjUrcER2vmmlvRpF8UeLC1GuYDNg6IebWC%2FQqg68WT3P8Rn3n81qcn%2FW05WniqeNPAjKXrEnXiVI5mJHq8Hq82QGeop5fsVLSzmhl6mj7L2YYJZsA6zOHkDNuAvdoZQCcICQLzLrq9T%2FfwpH5rrbM7MG0HhST%2BaKtynO5Zd3pDcTqoFzTJPd8nH7k1BAjLS75VSeovYjRJp%2BeK%2FGtueC%2BcYZ39GGcV%2F00UbYwWdGWbbwwx11UdxkwG4evYL%2FI85Qn5gKwatZ7zuhar29YXnFOdzMAG2bNNXXrZKs6ZkwY6zBR49ZY%2BRQQO0j6%2B9ZbC0F6yIi%2B93xrRiBWbzBg%3D%3D",
biz_appid:"",
dest_type:6,
group_id:"",
hint_txt:"ddd",
image_url:"http://vweixinthumb.tc.qq.com/109/20204/snsvideodownload?filekey=30270201010420301e02016d040253480410cb06ce928fae4ffe0201207b80095469020300bdce0400&amp;hy=SH&amp;storeid=32303137303830373038313935303030303232316539313336666664393337303561333230613030303030303664&amp;bizid=1023",
is_cpm:0,
logo:"",
pos_type:0,
pt:119,
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=JQl2DdYu2F7fedkmJMakuuz%2BcbjoYoLUkJpH4XNZmVm0HWz2TPzJ%2FUlM8oa9NRFc3LMhVYq7q0yx%2BpPIQHYhATPRmvWjJ%2FhQQ5448hZZ5IJgDUCW9pn9x6Oe6O5i4d94en4UyMt0amQR2vmmlvRpF8UeLC1GuYDNdwDxam5BYXHi6skDlCWX%2FqMBEx8U5oQ3rHOb%2F8C%2Bwi6dFuvehEcmmkgd%2BPXlC04faEgJaBioyZNQHNYbMoCHb9t0RyIyOsgZ0W50x0RCSKC5otfFA2EGByKcI2LsoWf52iA0HNtX7NS5BvJGapKD2hlq8XX8CPcOQuGtbyhZiVHLSRRkerxLLnygcFbxRWWI%2FLd%2FetjUrcER2vmmlvRpF8UeLC1GuYDNg6IebWC%2FQqg68WT3P8Rn3n81qcn%2FW05WniqeNPAjKXrEnXiVI5mJHq8Hq82QGeop5fsVLSzmhl6mj7L2YYJZsA6zOHkDNuAvdoZQCcICQLzLrq9T%2FfwpH5rrbM7MG0HhST%2BaKtynO5Zd3pDcTqoFzTJPd8nH7k1BAjLS75VSeovYjRJp%2BeK%2FGtueC%2BcYZ39GGcV%2F00UbYwWdGWbbwwx11UdxkwG4evYL%2FI85Qn5gKwatZ7zuhar29YXnFOdzMAG2bNNXXrZKs6ZkwY6zBR49ZY%2BRQQO0j6%2B9ZbC0F6yIi%2B93xrRiBWbzBg%3D%3D",
ticket:"",
traceid:"wx0rugvht6pygczc00",
type:"0",
url:"/pages/detail/detail?id=1112&amp;share=true&amp;weixinadkey=e6945e4066ec2c5f5a7368948a8716eac2bde11af126a8f051891696e2017fcf12e5f5b0fa6672bc31acc2552727a77d&amp;gdt_vid=wx0rugvht6pygczc00&amp;weixinadinfo=11514588.wx0rugvht6pygczc00.0.1",
watermark_type:2,
weapp_info:{
original_id:"gh_6ee8536f381b"
}
},
pt_122:{
hint_txt:"",
url:"http://mp.weixin.qq.com/mp/ad_app_info?app_id=1101190044&amp;weixinadkey=34b9e3bd38f3859bee1c23202f3b6df6848b100064d7a6a068b349e0933643b05ad366f80123557b8caf631ecbc11ec5&amp;ticket=2uxp24z9r4cs1&amp;gdt_vid=wx0bzrgyopn55la600&amp;md5sum=B75DBA5A7979AC22D5605CED6B98F1AA&amp;weixinadinfo=11528188.wx0bzrgyopn55la600.0.1#wechat_redirect",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=viewid=%7B%22count%22%3A+%221%22%2C+%22wxuin%22%3A+%2268516840%22%2C+%22datafmt%22%3A+%22json%22%2C+%22posid%22%3A+%2272058780271891663%22%2C+%22pass_ticket%22%3A+%22dY16UHPC90lkP9Z48gqtJVz%25252B64a8WScMjJS3B20xBns%25253D%22%2C+%22charset%22%3A+%22utf8%22%2C+%22uin%22%3A+%22569825475%22%2C+%22ext%22%3A+%7B%22req%22%3A+%7B%22c_ua%22%3A+%22Mozilla%2F5.0+%28iPhone%3B+CPU+iPhone+OS+10_2+like+Mac+OS+X%29+AppleWebKit%2F602.3.12+%28KHTML%2C+like+Gecko%29+Mobile%2F14C92+MicroMessenger%2F6.5.18+NetType%2FWIFI+Language%2Fzh_CN%22%2C+%22msg_type%22%3A+9%2C+%22is_preview%22%3A+0%2C+%22c_loc%22%3A+993250%2C+%22wuid%22%3A+%22oDdoCtxtgdRmDwouqnskz5_2u9mM%22%2C+%22hosttype%22%3A+%22wechat%22%2C+%22c_os%22%3A+%22ios%22%2C+%22c_ip%22%3A+%2257.1.0.0%22%2C+%22appid%22%3A+%22wx9259bd068c1cfcc4%22%2C+%22conn%22%3A+1%7D%2C+%22pos%22%3A+%7B%22index_0%22%3A+%7B%22category_list%22%3A+%5B%5D%2C+%22aid_list%22%3A+%5B%5D%2C+%22msgid%22%3A+2652154099%2C+%22itemidx%22%3A+5%2C+%22msg_time%22%3A+1508232790%2C+%22scene_type%22%3A+0%2C+%22msg_daily_idx%22%3A+1%2C+%22wx_share%22%3A+1%7D%7D%7D%2C+%22adposcount%22%3A+%221%22%7D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=%7B%22count%22%3A+%221%22%2C+%22wxuin%22%3A+%2268516840%22%2C+%22datafmt%22%3A+%22json%22%2C+%22posid%22%3A+%2272058780271891663%22%2C+%22pass_ticket%22%3A+%22dY16UHPC90lkP9Z48gqtJVz%25252B64a8WScMjJS3B20xBns%25253D%22%2C+%22charset%22%3A+%22utf8%22%2C+%22uin%22%3A+%22569825475%22%2C+%22ext%22%3A+%7B%22req%22%3A+%7B%22c_ua%22%3A+%22Mozilla%2F5.0+%28iPhone%3B+CPU+iPhone+OS+10_2+like+Mac+OS+X%29+AppleWebKit%2F602.3.12+%28KHTML%2C+like+Gecko%29+Mobile%2F14C92+MicroMessenger%2F6.5.18+NetType%2FWIFI+Language%2Fzh_CN%22%2C+%22msg_type%22%3A+9%2C+%22is_preview%22%3A+0%2C+%22c_loc%22%3A+993250%2C+%22wuid%22%3A+%22oDdoCtxtgdRmDwouqnskz5_2u9mM%22%2C+%22hosttype%22%3A+%22wechat%22%2C+%22c_os%22%3A+%22ios%22%2C+%22c_ip%22%3A+%2257.1.0.0%22%2C+%22appid%22%3A+%22wx9259bd068c1cfcc4%22%2C+%22conn%22%3A+1%7D%2C+%22pos%22%3A+%7B%22index_0%22%3A+%7B%22category_list%22%3A+%5B%5D%2C+%22aid_list%22%3A+%5B%5D%2C+%22msgid%22%3A+2652154099%2C+%22itemidx%22%3A+5%2C+%22msg_time%22%3A+1508232790%2C+%22scene_type%22%3A+0%2C+%22msg_daily_idx%22%3A+1%2C+%22wx_share%22%3A+1%7D%7D%7D%2C+%22adposcount%22%3A+%221%22%7D",
traceid:"wx0bzrgyopn55la600",
group_id:"",
ticket:"2uxp24z9r4cs1",
aid:"11528188",
pt:122,
image_url:"http://wxsnsdythumb.wxs.qq.com/109/20204/snsvideodownload?filekey=3026020101041f301d02016d0402534804107a03b840e114ba5ebed148a104445a4602023cbf0400&amp;hy=SH&amp;storeid=32303137313031303130343832333030306563343130313336666664393337303561333230613030303030303664&amp;bizid=1023",
app_info:{
app_name:"达令全球好货",
app_id:1101190044,
apk_name:"com.ymall.presentshop",
icon_url:"http://pp.myapp.com/ma_icon/0/icon_10441856_1501057920/256",
apk_url:"http://imtt.dd.qq.com/16891/B75DBA5A7979AC22D5605CED6B98F1AA.apk?fsname=com.ymall.presentshop_5.9.8_58.apk&amp;csr=97c2",
app_md5:"B75DBA5A7979AC22D5605CED6B98F1AA",
version_code:58,
appinfo_url:"http://imtt.dd.qq.com/16891/B75DBA5A7979AC22D5605CED6B98F1AA.apk?fsname=com.ymall.presentshop_5.9.8_58.apk&amp;csr=97c2",
app_size:9940095,
down_count:3400591,
category:[],
snap_shots:"http://pp.myapp.com/ma_pic2/0/shot_10441856_1_1501057898/330|http://pp.myapp.com/ma_pic2/0/shot_10441856_2_1501057898/330|http://pp.myapp.com/ma_pic2/0/shot_10441856_3_1501057898/330|http://pp.myapp.com/ma_pic2/0/shot_10441856_4_1501057898/330|http://pp.myapp.com/ma_pic2/0/shot_10441856_5_1501057898/330",
signature_md5:"29FA5788AC46F8319408A83D2755C288",
desc:"【新人有礼】新人专享优惠，购物接近零成本。\n 【任性包邮】 新用户首单就包邮。\n 【达令闪购】每日20点开抢，极致低价，绝对好货，数量有限。\n 【全球时尚杂货铺】遍及32个国家，上百位国际时尚买手，全球好货精挑细选，件件都会让您心动！\n 【品类丰富】极致美护、全球零食、创意生活、配饰等商品种类高达万种，满足一切购物需求。\n 【明星鹿晗投资】hi，达令，我是鹿晗，达令投资人，投资比影响力更重要的是责任.达令，100%正品，绝无假货，让我们一起携手开启美好生活。\n 【自营免税】品牌直签－商品够独特 ; 海关监督-正品有保证 ；免税－价格更便宜；轻松购物－不出国门鲜货入手。\n 【货到付款才安心】看到宝贝再付款，不满意就退货，支持7天无理由退换货，一切只为您安心。\n 【打造极致体验】选货无需凭借经验(跟着买手购全球)，不用在去垂直电商(都说达令啥都有)，服务不仅仅售后(服务体验更一流)，千万用户口碑推荐(口碑有保证)。 【联系我们】\n -官方网站：http://www.daling.com\n -官方服务电话：400-080-1888",
new_feature:"1、为你推荐的商品只为你推荐哦，最懂你的达令\n2、提升了密码设置安全度\n3、提升了身份验证有效性",
channel_id:"",
app_rating:4.68559,
url_scheme:"",
app_type:1
},
ad_desc:"",
biz_appid:"wx1cc240e4c8a57224",
biz_info:{
user_name:"gh_53de48b23bb3",
nick_name:"腾讯MP测试账号1",
is_subscribed:0,
biz_uin:3072042422
},
pos_type:0,
watermark_type:0,
logo:"",
is_cpm:0,
dest_type:2
},
pt_125:{
hint_txt:"创意-20180115",
url:"http://www.ghac.cn/vehicles/honda/odyssey?weixinadkey=0c52ad5fd45796439b24582df9a6167361d5ab1e4457b2c9e96a29d5a19e3d1bc8bbf0e5df7591508a76757470b14928&amp;gdt_vid=wx0wufunvuk63xfw00&amp;weixinadinfo=14076581.wx0wufunvuk63xfw00.1.1",
type:"0",
rl:"http://ad.wx.com:12638/cgi-bin/click?viewid=AQrMXyT89gngX7Yqg3VmoZ%2BgZXHcFzAUPN%2BO66slyJzfc1RpFF%2FM6ZHfSV9qy2%2BJXDgneeysXEh561%2Bt%2BlqnFe%2B9CRvOv6P00C89bIEUdzOloWeqoHSpLf2h8PWKCHChBNftN0UtFrwhv7WuSeS7NyybemN9XybnMGpCHzd2xxVe3xMaFDzEDn83mQ7UPKcZse31v82G6sriTTG1imyjPx4gTFFvcAdNe9Ucb1g%2BmkqQMlouoHmYXq%2Fvqs4O3ZW0h6irVoUvR7rPq8kESHHUJze2SO4Dp5T%2FqzYZoaFGO6%2FB1baqlUe5Zk8c5e0ZdcsVoGZr2VpHK4l%2BoFL7iibprBkGy%2Bvj13BoIRz3LL16wAY3cvM0gWi%2BL93XtSHoWhtREhzdxcl%2FE%2FqLvO798Jr8QOovcdfP0Fa2UJP00Ll3nhtbshh6x6tpYubNiFm%2FDEGThFLM2Bm9w%2BMvx3WlrOG1NbGe4%2BdTVOCbe2y24T7IRk%2FIH87jhW5gZPDej%2B%2F8bI%2BrBk1WcqDPNIdDmmG0iQb3RVwIr%2B22j8poNY%2Bm7EI8V7GkGjzGkFn%2FhDouo26BsHlekICoeVurgSlKMGS2Vez%2Bfo7BiKCAD5WK93La3ceJm1D9FiWAyKmm%2FiBqPgV%2BIjhxdkQSfUTTWexV0lFzCivDQ4T9YXc6MGkf%2FSpM%2FdTZBPh7lD%2FTSsD6DZUm1RVwn%2B2EOAsVO1r9XZVL4hLwij9BOx8nQ2nBZGxqHzYAO5EnQBlBXDwq8ZZG19gCMpX9UInNT1jDM6EapF24Cv1pOwALPnyE4gd7kNTcEkKDAnDDuvAl4H3J8MX9xiCwus%2FgSlijiuydzpeSdatop0fyGpDkrERZhK0BY%2FWVsZGyiOMwW1NXeCYuRjt8XI8ETkbpuGp2sL7hXIj71zfBB6u8aWPv1Bn5HOn3b1c%2BYYXviuJ4W0aywemTOZCbZ7gJ0rdjr1jq6O%2F6FbSubjcMyemZWRb9KQlzngXIKn1iUe5huXgmAUKzo4Uv%2B5HptxSbNKewBOIAErfaJ8wEHaVmIUuTm7RcI22lXqRNGvFMpR5fVTTwGdG4oBqKWOcVhR8WlKRYfiCoqMhYmt1rKZgBerU0t%2BnUerkV40kGrjY3O4fe1q%2Bw9e7rRJ4VElq7GmEe9Ug%3D",
apurl:"http://ad.wx.com:12638/cgi-bin/exposure?viewid=AQrMXyT89gngX7Yqg3VmoZ%2BgZXHcFzAUPN%2BO66slyJzfc1RpFF%2FM6ZHfSV9qy2%2BJXDgneeysXEh561%2Bt%2BlqnFe%2B9CRvOv6P00C89bIEUdzOloWeqoHSpLf2h8PWKCHChBNftN0UtFrwhv7WuSeS7NyybemN9XybnMGpCHzd2xxVe3xMaFDzEDn83mQ7UPKcZse31v82G6sriTTG1imyjPx4gTFFvcAdNe9Ucb1g%2BmkqQMlouoHmYXq%2Fvqs4O3ZW0h6irVoUvR7rPq8kESHHUJze2SO4Dp5T%2FqzYZoaFGO6%2FB1baqlUe5Zk8c5e0ZdcsVoGZr2VpHK4l%2BoFL7iibprBkGy%2Bvj13BoIRz3LL16wAY3cvM0gWi%2BL93XtSHoWhtREhzdxcl%2FE%2FqLvO798Jr8QOovcdfP0Fa2UJP00Ll3nhtbshh6x6tpYubNiFm%2FDEGThFLM2Bm9w%2BMvx3WlrOG1NbGe4%2BdTVOCbe2y24T7IRk%2FIH87jhW5gZPDej%2B%2F8bI%2BrBk1WcqDPNIdDmmG0iQb3RVwIr%2B22j8poNY%2Bm7EI8V7GkGjzGkFn%2FhDouo26BsHlekICoeVurgSlKMGS2Vez%2Bfo7BiKCAD5WK93La3ceJm1D9FiWAyKmm%2FiBqPgV%2BIjhxdkQSfUTTWexV0lFzCivDQ4T9YXc6MGkf%2FSpM%2FdTZBPh7lD%2FTSsD6DZUm1RVwn%2B2EOAsVO1r9XZVL4hLwij9BOx8nQ2nBZGxqHzYAO5EnQBlBXDwq8ZZG19gCMpX9UInNT1jDM6EapF24Cv1pOwALPnyE4gd7kNTcEkKDAnDDuvAl4H3J8MX9xiCwus%2FgSlijiuydzpeSdatop0fyGpDkrERZhK0BY%2FWVsZGyiOMwW1NXeCYuRjt8XI8ETkbpuGp2sL7hXIj71zfBB6u8aWPv1Bn5HOn3b1c%2BYYXviuJ4W0aywemTOZCbZ7gJ0rdjr1jq6O%2F6FbSubjcMyemZWRb9KQlzngXIKn1iUe5huXgmAUKzo4Uv%2B5HptxSbNKewBOIAErfaJ8wEHaVmIUuTm7RcI22lXqRNGvFMpR5fVTTwGdG4oBqKWOcVhR8WlKRYfiCoqMhYmt1rKZgBerU0t%2BnUerkV40kGrjY3O4fe1q%2Bw9e7rRJ4VElq7GmEe9Ug%3D",
traceid:"wx0akxhovy4dzrec00",
group_id:"",
ticket:"",
aid:"17552658",
pt:125,
image_url:"",
app_info:{
category:[],
url_scheme:""
},
ad_desc:"",
biz_appid:"wx13fa0756d9611069",
biz_info:{
user_name:"gh_a1d71beaf42d",
nick_name:"dd_testing18",
is_subscribed:0,
head_img:"http://wx.qlogo.cn/mmhead/Q3auHgzwzM7T42AtbwoPuOblZmJvhATf9lTyO9yfTtOcuNRLSG9nrg/0",
biz_uin:3098042136
},
pos_type:0,
watermark_type:0,
logo:"",
is_cpm:0,
video_info:{
displayWidth:960,
displayHeight:540,
thumbUrl:"http://wxsnsdythumb.wxs.qq.com/109/20250/snsvideodownload?m=4467ec2512e075be90b3dcffe4433ffa&amp;filekey=30340201010420301e02016d0402534804104467ec2512e075be90b3dcffe4433ffa020301ae46040d00000004627466730000000131&amp;hy=SH&amp;storeid=32303138303131353133353930393030303131323433313336666664393330343561333230613030303030303664&amp;bizid=1023",
videoUrl:"http://wxsnsdy.wxs.qq.com/105/20210/snsdyvideodownload?m=6ecceed8787419a0810593972fde324b&amp;filekey=30340201010420301e0201690402534804106ecceed8787419a0810593972fde324b020316fc73040d00000004627466730000000131&amp;hy=SH&amp;storeid=32303138303131353133353930393030303134646565313336666664393330343561333230613030303030303639&amp;bizid=1023"
},
dest_type:1,
material_width:690,
material_height:388
}
};
return{
getAd:e
};
});define("appmsg/reward_entry.js",["biz_common/dom/event.js","biz_wap/utils/ajax.js","biz_wap/jsapi/core.js","rt/appmsg/getappmsgext.rt.js","biz_wap/utils/mmversion.js"],function(e,t,r,a){
"use strict";
function n(e){
e&&(e.style.display="block");
}
function i(e){
e&&(e.style.display="none");
}
function d(){
p({
url:"/mp/getappmsgext?&f=json"+(window.send_time?"&send_time="+send_time:""),
data:{
__biz:biz,
appmsg_type:appmsg_type,
mid:mid,
sn:sn,
idx:idx,
scene:source,
title:encodeURIComponent(msg_title.htmlDecode()),
ct:ct,
devicetype:devicetype.htmlDecode(),
version:version.htmlDecode(),
is_need_reward:is_need_reward,
reward_uin_count:is_need_reward?3*l:0,
r:Math.random()
},
type:"post",
dataType:"json",
async:!0,
rtId:27613,
rtKey:50,
rtDesc:h,
success:function(e){
e&&(document.getElementById("js_reward_link")&&u.off(document.getElementById("js_reward_link"),"click",j),
s({
reward_total:e.reward_total_count,
reward_head_imgs:e.reward_head_imgs||[],
can_reward:e.can_reward,
timestamp:e.timestamp,
reward_author_head:e.reward_author_head
}));
}
});
}
function o(e){
return function(t){
return"0"==window.wx_user_can_reward?void a("你已成为该公众号的黑名单用户，暂时无法赞赏。"):(t.preventDefault(),
void g.invoke("openUrlWithExtraWebview",{
url:e,
openType:1
},function(t){
t.err_msg.indexOf(":ok")>-1||(location.href=e);
}));
};
}
function s(e){
var t=window.innerWidth||document.documentElement.innerWidth,r=(Math.ceil((v-188)/42)+1)*Math.floor((t-15)/42);
w="http://mp.weixin.qq.com/mp/reward?act=getrewardheads&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&offset=0&count="+r+"&source=1#wechat_redirect";
var a="#wechat_redirect",s="";
s=source_mid&&source_biz&&source_idx?"https://mp.weixin.qq.com/mp/author?action=show&__biz="+source_encode_biz+"&appmsgid="+source_mid+"&idx="+source_idx+"&reprint_biz="+biz+"&reprint_appmsgid="+mid+"&reprint_idx="+idx+"&timestamp="+e.timestamp+"&author_id="+author_id+"&scene=141#wechat_redirect":"https://mp.weixin.qq.com/mp/author?action=show&__biz="+biz+"&appmsgid="+mid+"&timestamp="+e.timestamp+"&author_id="+author_id+"&idx="+idx+"&scene=142#wechat_redirect",
-1!=navigator.userAgent.indexOf("Android")&&(s="https://mp.weixin.qq.com/bizmall/reward?act=showpage&__biz="+biz+"&appmsgid="+mid+"&idx="+idx+"&sn="+sn+"&timestamp="+e.timestamp+"&showwxpaytitle=1"+a);
var m=document.getElementById("js_reward_link");
if(m&&(g.on("activity:state_change",function(e){
if("onResume"==e.state_change||"onResume"==e.state){
var t=(new Date).valueOf();
if(-1!=navigator.userAgent.indexOf("Android")&&localStorage.getItem("lastOnresumeTime")&&t-parseInt(localStorage.getItem("lastOnresumeTime"))<=b)return;
localStorage.setItem("lastOnresumeTime",t),g.invoke("setNavigationBarColor",{
actionCode:"1"
}),d();
}
}),j=o(s),u.on(m,"click",j),f.isIOS&&1==e.can_reward)){
m.setAttribute("class","reward_button"),n(document.getElementById("js_reward_author")),
n(document.getElementById("js_reward_avatar")),document.getElementById("js_reward_author_head").setAttribute("src",e.reward_author_head),
document.getElementById("js_reward_area").classList.add("reward_area_primary");
var l=document.getElementById("js_reward_link_text");
l.innerText="Like the Author";
var p=document.getElementById("js_like_total"),h=document.getElementById("js_like_total_parent"),z=document.getElementById("js_reward_total_parent");
p&&(p.innerText=e.reward_total,p.setAttribute("href",w)),h&&n(h),z&&i(z);
}
y=e.reward_head_imgs;
var I=_();
x.reward&&1==e.can_reward?(n(x.reward),u.on(window,"load",function(){
c&&(u.off(window,"scroll",c),u.on(window,"scroll",c));
})):i(x.reward);
var E=document.getElementById("js_reward_inner");
E&&I>0&&n(E);
var B=document.getElementById("js_reward_total");
B&&(B.innerText=e.reward_total,B.setAttribute("href",w));
}
function m(e,t){
var r=document.createElement("span");
r.className="reward_user_avatar";
var a=new Image;
return a.onload=function(){
window.logs&&window.logs.reward_heads_total++,a.onload=a.onerror=null;
},a.onerror=function(){
window.logs&&window.logs.reward_heads_total++,window.logs&&window.logs.reward_heads_fail++,
a.onload=a.onerror=null;
},a.src=t,r.appendChild(a),e.appendChild(r),r;
}
function _(){
if(y.length){
var e=document.getElementById("js_reward_list"),t=0,r=document.createDocumentFragment();
if(e){
for(var a=0,n=y.length;n>a&&(t++,m(r,y[a]),t!=3*l);++a);
t>l&&(e.className+=" tl"),e.innerHTML="",e.appendChild(r);
}
return t;
}
}
function c(){
var e=window.pageYOffset||document.documentElement.scrollTop;
e+v>x.reward.offsetTop&&(p({
type:"GET",
url:"/bizmall/reward?act=report&__biz="+biz+"&appmsgid="+mid+"&idx="+idx,
async:!0
}),u.off(window,"scroll",c),c=null);
}
var l,w,u=e("biz_common/dom/event.js"),p=e("biz_wap/utils/ajax.js"),g=e("biz_wap/jsapi/core.js"),h=e("rt/appmsg/getappmsgext.rt.js"),f=e("biz_wap/utils/mmversion.js"),v=window.innerHeight||document.documentElement.clientHeight,x={
reward:document.getElementById("js_reward_area")
},y=[],b=500;
window.logs&&(window.logs.reward_heads_total=0,window.logs.reward_heads_fail=0);
var j=function(){};
return{
handle:function(e,t){
l=t,s(e);
},
render:function(e){
l=e,_();
}
};
});define("appmsg/like.js",["biz_common/dom/event.js","biz_common/dom/class.js","biz_wap/utils/ajax.js","appmsg/log.js"],function(require,exports,module,alert){
"use strict";
function initLikeEvent(opt){
var el_like=opt.likeAreaDom,el_likeNum=opt.likeNumDom;
if(el_like&&el_likeNum){
var like_report=function(e){
log("[Appmsg] click like");
var tmpAttr=el_like.getAttribute("like"),tmpHtml=el_likeNum.innerHTML,isLike=parseInt(tmpAttr)?parseInt(tmpAttr):0,like=isLike?0:1,likeNum=parseInt(tmpHtml)?parseInt(tmpHtml):0,appmsgid=opt.appmsgid||opt.mid,itemidx=opt.itemidx||opt.idx;
ajax({
url:"/mp/appmsg_like?__biz="+opt.biz+"&mid="+opt.mid+"&idx="+opt.idx+"&like="+like+"&f=json&appmsgid="+appmsgid+"&itemidx="+itemidx,
data:{
is_temp_url:opt.is_temp_url||0
},
type:"POST",
success:function(res){
var data=eval("("+res+")");
log("[Appmsg] like ajax succ"+data.base_resp.ret),0==data.base_resp.ret&&(isLike?(Class.removeClass(el_like,opt.className),
el_like.setAttribute("like",0),likeNum>0&&"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum-1==0?"赞":likeNum-1)):(el_like.setAttribute("like",1),
Class.addClass(el_like,opt.className),"100000+"!==tmpHtml&&(el_likeNum.innerHTML=likeNum+1)));
},
async:!0
});
};
DomEvent.on(el_like,"click",function(e){
return like_report(e),!1;
});
}
}
function showLikeNum(e){
var i=e||{};
if(i.show){
var t=i.likeAreaDom,l=i.likeNumDom;
t&&(t.style.display=i.likeAreaDisplayValue,i.liked&&Class.addClass(t,i.className),
t.setAttribute("like",i.liked?"1":"0"));
var s=i.likeNum||"赞";
parseInt(s)>1e5?s="100000+":"",l&&(l.innerHTML=s);
}
}
function showReadNum(e){
var i=e||{};
if(i.show){
var t=i.readAreaDom,l=i.readNumDom;
t&&(t.style.display=i.readAreaDisplayValue);
var s=i.readNum||1;
parseInt(s)>1e5?s="100000+":"",l&&(l.innerHTML=s);
}
}
var DomEvent=require("biz_common/dom/event.js"),Class=require("biz_common/dom/class.js"),ajax=require("biz_wap/utils/ajax.js"),log=require("appmsg/log.js");
return{
initLikeEvent:initLikeEvent,
showLikeNum:showLikeNum,
showReadNum:showReadNum
};
});define("pages/create_txv.js",["biz_common/utils/monitor.js","biz_wap/utils/ajax_load_js.js","pages/loadscript.js"],function(e){
"use strict";
function n(){
"function"!=typeof window.__createTxVideo&&(window.__createTxVideo=function(e){
o(e);
});
}
function o(e){
var n=function(){},o=function(){};
"function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(n=e.onError),
r.Load({
url:c.jsUrl,
version:c.jsVersion,
useCache:!0,
win:e.win,
onSuccess:function(s){
2!=s.code&&3!=s.code||0!=s.queueIndex||(i.setSum("64728","111",1),i.setSum("64728","112",1));
var u=e.win||window,a=!0;
if(u.Txp&&"function"==typeof u.Txp.Player?(a=!0,0==s.queueIndex&&(2==s.code?i.setSum("64728","116",1):3==s.code&&i.setSum("64728","117",1),
i.send())):(a=!1,0==s.queueIndex&&(2==s.code?i.setSum("64728","114",1):3==s.code&&i.setSum("64728","115",1),
i.send())),a){
var d=t({
win:u,
options:e
});
o({
player:d
});
}else r.ClearCache({
win:u,
version:c.jsVersion,
url:c.jsUrl
}),n();
},
onError:function(n){
0==n.queueIndex&&(i.setSum("64728","111",1),i.setSum("64728","118",1),51==n.code?i.setSum("64728","119",1):52==n.code?i.setSum("64728","120",1):53==n.code&&i.setSum("64728","121",1),
i.send()),s(e);
}
});
}
function t(e){
var n=e.win||window,o=e.options,t=new n.Txp.Player({
containerId:o.containerId,
vid:o.vid,
width:o.width,
height:o.height,
autoplay:o.autoplay===!0?!0:!1,
allowFullScreen:o.allowFullScreen===!0?!0:!1
});
return t;
}
function s(e){
var n=function(){},o=function(){};
"function"==typeof e.onSuccess&&(o=e.onSuccess),"function"==typeof e.onError&&(n=e.onError);
var s=c.jsUrl;
s+=-1==s.indexOf("?")?"?"+c.customerParam+"="+c.jsVersion:"&"+c.customerParam+"="+c.jsVersion,
u({
win:e.win,
url:s,
timeout:1e4,
type:"JS",
callback:function(){
i.setSum("64728","122",1);
var s=e.win||window;
if(s.Txp&&"function"==typeof s.Txp.Player){
i.setSum("64728","124",1),i.send();
var r=t({
win:e.win,
options:e
});
o({
player:r
});
}else i.setSum("64728","123",1),i.send(),n();
},
onerror:function(e){
switch(i.setSum("64728","122",1),1*e){
case 400:
c.jsLoadState=4,i.setSum("64728","125",1);
break;

case 500:
c.jsLoadState=5,i.setSum("64728","126",1);
break;

default:
c.jsLoadState=6,i.setSum("64728","127",1);
}
i.send(),n();
}
});
}
var i=e("biz_common/utils/monitor.js"),r=e("biz_wap/utils/ajax_load_js.js"),u=e("pages/loadscript.js"),c={
customerParam:"wxv",
jsUrl:"//vm.gtimg.cn/tencentvideo/txp/js/iframe/api.js?",
jsVersion:"v1"
};
return{
createTxVideo:o,
createGlobalFunc:n
};
});define("pages/version4video.js",["biz_common/dom/event.js","biz_wap/jsapi/core.js","biz_wap/utils/device.js","new_video/ctl.js"],function(e){
"use strict";
function i(e,i){
i=i||"",i=["uin:"+r.user_uin,"resp:"+i].join("|"),(new Image).src="/mp/jsreport?key="+e+"&content="+i+"&r="+Math.random();
}
function n(){
return-1!=s.indexOf("&_newvideoplayer=0")?!1:-1!=s.indexOf("&_newvideoplayer=1")?!0:1!=r.is_login?!1:r.use_tx_video_player?!1:w.canSupportVideo&&u.inWechat?u.is_ios||u.is_android?!0:!1:(r._hasReportCanSupportVideo||w.canSupportVideo||!u.inWechat||(r._hasReportCanSupportVideo=!0,
i(44)),!1);
}
function o(){
{
var e=s,i=window.location.href;
r.sn||"";
}
return-1==e.indexOf("&_videoad=0")||"5a2492d450d45369cd66e9af8ee97dbd"!=r.sn&&"f62e1cb98630008303667f77c17c43d7"!=r.sn&&"30c609ee11a3a74a056e863f0e20cae2"!=r.sn?-1!=e.indexOf("&_videoad=1")?!0:-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")?!1:"54"==r.appmsg_type?!1:-1!=i.indexOf("&xd=1")?!1:r.__appmsgCgiData&&r.__appmsgCgiData.can_use_page&&(u.is_ios||u.is_android)?!0:c.showAd()?!0:!1:!1;
}
function t(){
var e=s;
if(!r.user_uin)return!1;
if(-1!=e.indexOf("&_proxy=1"))return!0;
if(-1!=e.indexOf("&_proxy=0"))return!1;
if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show"))return!1;
var i=(new Date).getHours();
return i>=9&&14>=i?!1:u.inWechat&&u.is_android&&u.is_x5&&u.wechatVer>="6.2.2"?!0:u.inWechat&&u.is_android&&u.is_xweb&&u.xweb_version>=16?!0:u.inWechat&&u.is_ios&&(-1!=_.indexOf("MicroMessenger/6.2.4")||u.wechatVer>="6.2.4")?!0:!1;
}
function a(){
return f.networkType;
}
var r,s,d=e("biz_common/dom/event.js"),p=e("biz_wap/jsapi/core.js"),w=e("biz_wap/utils/device.js"),c=e("new_video/ctl.js"),_=window.navigator.userAgent,f={
networkType:""
},u={};
if(parent==window)r=window,s=window.location.href;else try{
s=parent.window.location.href,r=parent.window;
}catch(h){
s=window.location.href,r=window;
}
return function(e){
var i=w.os;
u.is_ios=/(iPhone|iPad|iPod|iOS)/i.test(e),u.is_android=!!i.android,u.is_wp=!!i.phone,
u.is_pc=!(i.phone||!i.Mac&&!i.windows),u.inWechat=/MicroMessenger/.test(e),u.inWindowWechat=/WindowsWechat/i.test(e),
u.inMacWechat=/wechat.*mac os/i.test(e),u.is_android_phone=u.is_android&&/Mobile/i.test(e),
u.is_android_tablet=u.is_android&&!/Mobile/i.test(e),u.ipad=/iPad/i.test(e),u.iphone=!u.ipad&&/(iphone)\sos\s([\d_]+)/i.test(e),
u.is_x5=/TBS\//.test(e)&&/MQQBrowser/i.test(e);
var n,o=/XWEB\/([\d\.]+)/i,t=e.match(o);
t&&t[1]&&(n=parseInt(t[1])),u.is_xweb=!!t,u.xweb_version=n;
var a=e.match(/MicroMessenger\/((\d+)(\.\d+)*)/);
u.wechatVer=a&&a[1]||0,d.on(window,"load",function(){
if(""==f.networkType&&u.inWechat){
var e={
"network_type:fail":"fail",
"network_type:edge":"2g/3g",
"network_type:wwan":"2g/3g",
"network_type:wifi":"wifi"
};
p.invoke("getNetworkType",{},function(i){
f.networkType=e[i.err_msg]||"fail";
});
}
},!1);
}(window.navigator.userAgent),"undefined"==typeof r._hasReportCanSupportVideo&&(r._hasReportCanSupportVideo=!1),
{
device:u,
isShowMpVideo:n,
isUseProxy:t,
isUseAd:o,
getNetworkType:a
};
});define("a/a.js",["biz_wap/utils/mmversion.js","biz_common/dom/event.js","biz_common/utils/url/parse.js","a/a_report.js","biz_wap/utils/ajax.js","biz_wap/utils/position.js","a/card.js","a/wxopen_card.js","a/mpshop.js","biz_wap/jsapi/core.js","biz_common/tmpl.js","a/a_tpl.html.js","a/sponsor_a_tpl.html.js","a/cpc_a_tpl.html.js","biz_common/utils/report.js","biz_common/dom/class.js","biz_wap/utils/storage.js","appmsg/log.js","appmsg/cdn_img_lib.js","a/profile.js","a/android.js","a/ios.js","a/app_card.js","a/sponsor.js","a/video.js"],function(require,exports,module,alert){
"use strict";
function report(e,a){
Report("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+e+a);
}
function getWindowHeight(){
return"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:document.body.clientHeight;
}
function checkNeedAds(){
var is_need_ad=1,_adInfo=null,screen_num=0,inwindowwx=-1!=navigator.userAgent.indexOf("WindowsWechat");
if(!document.getElementsByClassName||-1==navigator.userAgent.indexOf("MicroMessenger")||inwindowwx)is_need_ad=0,
js_sponsor_ad_area.style.display="none",js_bottom_ad_area.style.display="none",js_cpc_area&&js_cpc_area.style&&(js_cpc_area.style.display="none");else{
var adLS=new LS("ad");
if(window.localStorage)try{
var key=[biz,sn,mid,idx].join("_"),_ad=adLS.get(key);
_adInfo=_ad.info;
try{
_adInfo=eval("("+_adInfo+")");
}catch(e){
_adInfo=null;
}
var _adInfoSaveTime=_ad.time,_now=+new Date;
_adInfo&&18e4>_now-1*_adInfoSaveTime&&1*_adInfo.advertisement_num>0?is_need_ad=0:adLS.remove(key),
log("[Ad] is_need_ad: "+is_need_ad+" , adData:"+JSON.stringify(_ad));
}catch(e){
is_need_ad=1,_adInfo=null;
}
}
return{
is_need_ad:is_need_ad,
both_ad:0,
_adInfo:_adInfo
};
}
function afterGetAdData(e,a){
function p(e){
if(12==e.product_type||19==e.product_type){
var a=e,p=a.app_info.app_size||0,i=a.app_info.app_name||a.app_info.appname||"",t=a.app_info.apk_url||a.app_info.pkgurl||"",o=a.app_info.file_md5||a.app_info.pkgmd5||a.app_info.app_md5||"",n=a.app_info.apk_name||a.app_info.pkg_name||"";
p=formSize(p),i=formName(i),a.app_info.app_size=p,a.app_info.app_name=i,a.app_info.apk_name=n,
a.app_info.appname=a.app_info.app_name,a.app_info.app_rating=a.app_info.app_rating||0,
a.app_info.app_id=a.app_info.app_id,a.app_info.icon_url=a.app_info.icon_url,a.app_info.channel_id=a.app_info.channel_id,
a.app_info.md5sum=a.app_info.app_md5,a.app_info.rl=a.rl,a.app_info.pkgname=n,a.app_info.url_scheme=a.app_info.url_scheme,
a.app_info.androiddownurl=t,a.app_info.versioncode=a.app_info.version_code,a.app_info.appinfo_url=a.app_info.appinfo_url,
a.app_info.traceid=a.traceid,a.app_info.pt=a.pt,a.app_info.url=a.url,a.app_info.ticket=a.ticket,
a.app_info.type=a.type,a.app_info.adid=a.aid,a.app_info.file_md5=o;
var _=extend({
appname:a.app_info.app_name,
app_rating:a.app_info.app_rating||0,
app_id:a.app_info.app_id,
icon_url:a.app_info.icon_url,
channel_id:a.app_info.channel_id,
md5sum:a.app_info.app_md5,
rl:a.rl,
pkgname:n,
url_scheme:a.app_info.url_scheme,
androiddownurl:t,
versioncode:a.app_info.version_code,
appinfo_url:a.app_info.appinfo_url,
traceid:a.traceid,
pt:a.pt,
url:a.url,
ticket:a.ticket,
type:a.type,
adid:a.aid,
source:source||"",
is_appmsg:!0,
file_md5:o
},a);
return console.log(_),_;
}
return e;
}
function i(e){
if(12==e.product_type||19==e.product_type){
var a=e,p=a.app_info.app_size||0,i=a.app_info.app_name||a.app_info.appname||"",t=a.app_info.apk_url||a.app_info.pkgurl||"",o=a.app_info.file_md5||a.app_info.pkgmd5||a.app_info.app_md5||"",n=a.app_info.apk_name||a.app_info.pkg_name||"";
p=formSize(p),i=formName(i),a.app_info.app_size=p,a.app_info.app_name=i,a.app_info.apk_name=n,
a.app_info.appname=a.app_info.app_name,a.app_info.app_rating=a.app_info.app_rating||0,
a.app_info.app_id=a.app_info.app_id,a.app_info.icon_url=a.app_info.icon_url,a.app_info.channel_id=a.app_info.channel_id,
a.app_info.md5sum=a.app_info.app_md5,a.app_info.rl=a.rl,a.app_info.pkgname=n,a.app_info.url_scheme=a.app_info.url_scheme,
a.app_info.androiddownurl=t,a.app_info.versioncode=a.app_info.version_code,a.app_info.appinfo_url=a.app_info.appinfo_url,
a.app_info.traceid=a.traceid,a.app_info.pt=a.pt,a.app_info.url=a.url,a.app_info.ticket=a.ticket,
a.app_info.type=a.type,a.app_info.adid=a.aid,a.app_info.file_md5=o;
var _=extend({
appname:a.app_info.app_name,
app_rating:a.app_info.app_rating||0,
app_id:a.app_info.app_id,
icon_url:a.app_info.icon_url,
channel_id:a.app_info.channel_id,
md5sum:a.app_info.app_md5,
rl:a.rl,
pkgname:n,
url_scheme:a.app_info.url_scheme,
androiddownurl:t,
versioncode:a.app_info.version_code,
appinfo_url:a.app_info.appinfo_url,
traceid:a.traceid,
pt:a.pt,
url:a.url,
ticket:a.ticket,
type:a.type,
adid:a.aid,
source:source||"",
is_appmsg:!0,
file_md5:o
},a);
return console.log(_),_;
}
return e;
}
var t={},o=e.is_need_ad,n=e._adInfo;
if(0==o)t=n,t||(t={
advertisement_num:0
});else{
if(a.advertisement_num>0&&a.advertisement_info){
var _=a.advertisement_info;
t.advertisement_info=saveCopy(_);
}
t.advertisement_num=a.advertisement_num;
}
1==o&&(window._adRenderData=t),t=t||{
advertisement_num:0
};
var r=!1;
if(!t.flag&&t.advertisement_num>0){
var d=t.advertisement_num,s=t.advertisement_info;
window.adDatas.num=d;
for(var c=0;d>c;++c){
var l,m=null,f=s[c];
if(f.exp_info=f.exp_info||{},f.is_cpm=f.is_cpm||0,f.biz_info=f.biz_info||{},f.app_info=f.app_info||{},
f.pos_type=f.pos_type||0,f.logo=f.logo||"",f.use_new_protocol=f.use_new_protocol||0,
l=f.use_new_protocol)4==f.pos_type?(r=!0,f=p(f),m=f):0==f.pos_type&&(f=i(f),m=f);else if(100==f.pt||115==f.pt){
for(var u=f.exp_info.exp_value||[],g=!1,y=0,h=0;h<u.length;++h){
var v=u[h]||{};
if(1==v.exp_type&&(y=v.comm_attention_num,g=y>0),2==v.exp_type){
g=!1,y=0;
break;
}
}
f.biz_info.show_comm_attention_num=g,f.biz_info.comm_attention_num=y,m={
usename:f.biz_info.user_name,
pt:f.pt,
url:f.url,
traceid:f.traceid,
adid:f.aid,
ticket:f.ticket,
is_appmsg:!0
};
}else if(102==f.pt)m={
appname:f.app_info.app_name,
versioncode:f.app_info.version_code,
pkgname:f.app_info.apk_name,
androiddownurl:f.app_info.apk_url,
md5sum:f.app_info.app_md5,
signature:f.app_info.version_code,
rl:f.rl,
traceid:f.traceid,
pt:f.pt,
ticket:f.ticket,
type:f.type,
adid:f.aid,
is_appmsg:!0
};else if(101==f.pt)m={
appname:f.app_info.app_name,
app_id:f.app_info.app_id,
icon_url:f.app_info.icon_url,
appinfo_url:f.app_info.appinfo_url,
rl:f.rl,
traceid:f.traceid,
pt:f.pt,
ticket:f.ticket,
type:f.type,
adid:f.aid,
is_appmsg:!0
};else if(103==f.pt||104==f.pt||2==f.pt&&f.app_info){
var w=f.app_info.down_count||0,x=f.app_info.app_size||0,j=f.app_info.app_name||"",k=f.app_info.category,b=["万","百万","亿"];
if(w>=1e4){
w/=1e4;
for(var I=0;w>=10&&2>I;)w/=100,I++;
w=w.toFixed(1)+b[I]+"次";
}else w=w.toFixed(1)+"次";
x=formSize(x),k=k?k[0]||"其他":"其他",j=formName(j),f.app_info._down_count=w,f.app_info._app_size=x,
f.app_info._category=k,f.app_info.app_name=j,m={
appname:f.app_info.app_name,
app_rating:f.app_info.app_rating||0,
icon_url:f.app_info.icon_url,
app_id:f.app_info.app_id,
channel_id:f.app_info.channel_id,
md5sum:f.app_info.app_md5,
rl:f.rl,
pkgname:f.app_info.apk_name,
url_scheme:f.app_info.url_scheme,
androiddownurl:f.app_info.apk_url,
versioncode:f.app_info.version_code,
appinfo_url:f.app_info.appinfo_url,
traceid:f.traceid,
pt:f.pt,
url:f.url,
ticket:f.ticket,
type:f.type,
adid:f.aid,
is_appmsg:!0,
app_info:f.app_info
};
}else if(105==f.pt){
var q=f.card_info.card_id||"",E=f.card_info.card_ext||"";
E=E.htmlDecode();
try{
E=JSON.parse(E),E.outer_str=f.card_info.card_outer_id||"",E=JSON.stringify(E);
}catch(z){
E="{}";
}
m={
card_id:q,
card_ext:E,
pt:f.pt,
ticket:f.ticket||"",
url:f.url,
rl:f.rl,
tid:f.traceid,
traceid:f.traceid,
type:f.type,
adid:f.aid,
is_appmsg:!0
};
}else if(106==f.pt){
var C=f.mp_shop_info.pid||"",O=f.mp_shop_info.outer_id||"";
m={
pid:C,
outer_id:O,
pt:f.pt,
url:f.url,
rl:f.rl,
tid:f.traceid,
traceid:f.traceid,
type:f.type,
adid:f.aid,
is_appmsg:!0
};
}else if(108==f.pt||109==f.pt||110==f.pt||116==f.pt||117==f.pt)m={
pt:f.pt,
ticket:f.ticket||"",
url:f.url,
traceid:f.traceid,
adid:f.aid,
is_appmsg:!0
},f.video_info&&(m.displayWidth=f.video_info.displayWidth,m.displayHeight=f.video_info.displayHeight,
m.thumbUrl=f.video_info.thumbUrl,m.videoUrl=f.video_info.videoUrl,m.rl=f.rl),6==f.dest_type&&Wxopen_card.startConnect(f);else if(111==f.pt||113==f.pt||114==f.pt||112==f.pt||121==f.pt||122==f.pt){
var x=f.app_info.app_size||0,j=f.app_info.app_name||"";
x=formSize(x),j=formName(j),f.app_info.app_size=x,f.app_info.app_name=j,m={
appname:f.app_info.app_name,
app_rating:f.app_info.app_rating||0,
app_id:f.app_info.app_id,
icon_url:f.app_info.icon_url,
channel_id:f.app_info.channel_id,
md5sum:f.app_info.app_md5,
rl:f.rl,
pkgname:f.app_info.apk_name,
url_scheme:f.app_info.url_scheme,
androiddownurl:f.app_info.apk_url,
versioncode:f.app_info.version_code,
appinfo_url:f.app_info.appinfo_url,
traceid:f.traceid,
pt:f.pt,
url:f.url,
ticket:f.ticket,
type:f.type,
adid:f.aid,
source:source||"",
is_appmsg:!0
};
}else 118==f.pt?(m=f,r=!0,console.log("?#$:"),Wxopen_card.startConnect(f)):119==f.pt||120==f.pt?(m=f,
Wxopen_card.startConnect(f)):125==f.pt&&(m=f,6==f.dest_type&&Wxopen_card.startConnect(f));
var A=f.image_url;
if(require("appmsg/cdn_img_lib.js"),A&&A.isCDN()&&(A=A.replace(/\/0$/,"/640"),A=A.replace(/\/0\?/,"/640?"),
f.image_url=ParseJs.addParam(A,"wxfrom","50",!0)),adDatas.ads["pos_"+f.pos_type]={
a_info:f,
adData:m
},localStorage&&localStorage.setItem&&f.app_info&&f.app_info.url_scheme&&localStorage.setItem("__WXLS__a_url_schema_"+f.traceid,f.app_info.url_scheme),
f.has_installed=!1,l){
if(12==f.product_type||19==f.product_type){
console.log("pkgname:",f.app_info.apk_name),console.log(f);
var D=f.pos_type;
console.log("appPos",D),function(e,a){
console.log("appPos in",e),JSAPI.invoke("getInstallState",{
packageName:a.app_info.apk_name
},function(p){
var i=p.err_msg;
i.indexOf("get_install_state:yes")>-1&&(a.has_installed=!0,console.log("change btn","js_ad_btn_"+e),
document.getElementById("js_ad_btn_"+e)&&(document.getElementById("js_ad_btn_"+e).innerHTML="进入应用"),
document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="进入应用"));
});
}(D,f);
}
}else f&&(104==f.pt||113==f.pt||114==f.pt||2==f.pt||122==f.pt)&&f.app_info.url_scheme&&JSAPI.invoke("getInstallState",{
packageName:f.app_info.apk_name
},function(e){
var a=e.err_msg;
a.indexOf("get_install_state:yes")>-1&&(f.has_installed=!0,document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="进入应用"));
});
}
var T=function(){
var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,a=document.documentElement.clientHeight||window.innerHeight;
js_sponsor_ad_area.offsetTop<e+a&&(Class.addClass(document.getElementById("js_ad_area"),"show"),
DomEvent.off(window,"scroll",T));
},B=adDatas.ads;
for(var S in B)if(0==S.indexOf("pos_")){
var m=B[S],f=!!m&&m.a_info;
if(m&&f){
if(console.log(f),0==f.pos_type){
if(f.new_appmsg=window.new_appmsg,js_bottom_ad_area.innerHTML=TMPL.tmpl(a_tpl,f),
111==f.pt||112==f.pt||113==f.pt||114==f.pt){
var R=document.getElementsByClassName("js_download_app_card")[0],N=R.offsetWidth,H=Math.floor(N/2.875);
H>0&&(R.style.height=H+"px");
}
}else if(3==f.pos_type){
var R=document.createElement("div");
R.appendChild(document.createTextNode(f.image_url)),f.image_url=R.innerHTML.replace(/&amp;/g,"&"),
f.new_appmsg=window.new_appmsg,js_sponsor_ad_area.innerHTML=TMPL.tmpl(sponsor_a_tpl,f),
js_sponsor_ad_area.style.display="block";
var U=js_sponsor_ad_area.clientWidth;
108==f.pt||109==f.pt||110==f.pt?document.getElementById("js_main_img").style.height=U/1.77+"px":116==f.pt||117==f.pt,
DomEvent.on(window,"scroll",T),T(0);
}else 4==f.pos_type&&(console.log("test"),_checkShowCpc()&&(f=_parseExpCpc(f),console.log(f),
js_cpc_area.innerHTML=TMPL.tmpl(cpc_a_tpl,f),console.log("show cpc")));
lazyLoadAdImg({
aid:f.aid,
type:f.pt
}),checkAdImg(f),console.log("check ios",mmversion.isIOS,f.app_info),mmversion.isIOS&&f.app_info&&f.app_info.url_scheme&&(console.log("check ios end",document.getElementById("js_promotion_tag")),
document.getElementById("js_promotion_tag")&&(document.getElementById("js_promotion_tag").innerHTML="查看应用"),
document.getElementsByClassName("js_ad_btn")&&document.getElementsByClassName("js_ad_btn").length>0&&(document.getElementsByClassName("js_ad_btn")[0].innerHTML="查看"),
document.getElementById("js_ad_btn_"+f.pos_type)&&(document.getElementById("js_ad_btn_"+f.pos_type).innerHTML="查看应用"));
}
}
bindAdOperation();
}
is_temp_url&&document.getElementsByTagName("mpcpc").length>0&&_checkShowCpc()&&!r&&(js_cpc_area.innerHTML=TMPL.tmpl(cpc_a_tpl,{
type:"",
ticket:"",
url:"",
rl:"",
aid:"",
pt:"",
traceid:"",
group_id:"",
apurl:"",
is_cpm:"",
image_url:"https://mmbiz.qlogo.cn/mmbiz_png/cVgP5bCElFiaPhsbHe4ctnlUllMCDCEIJib69wX3BUX42XagNypd2JcgyEiaoFRu4KicKF3avfRgVnWPABVTjtPRwQ/0?wx_fmt=png"
}));
}
function _parseExpCpc(e){
var a={
icon_pos:"",
btn_text:"去逛逛",
price:"",
sale_text:""
};
if(5==e.watermark_type&&(a.btn_text="查看详情"),29==e.product_type||31==e.product_type?a.btn_text="查看详情":12==e.product_type||19==e.product_type?a.btn_text="下载应用":30==e.product_type&&(a.btn_text="去逛逛"),
e.has_installed&&(a.btn_text="进入应用"),e.cpc_exp_info&&e.cpc_exp_info.exp_content){
var p=e.cpc_exp_info.exp_content;
try{
for(var i=JSON.parse(p.replace(/&quot;/g,'"')),t=-1,o=0;o<i.aid_list.length;o++)i.aid_list[o].aid==e.aid&&(t=o);
t>-1&&(a.icon_pos=i.icon_pos||"",a.btn_text=i.btn_text||a.btn_text,a.price=i.aid_list[t].price,
a.sale_text=i.aid_list[t].sale_text,window.__addIdKeyReport("68064",15));
}catch(n){
window.__addIdKeyReport("68064",16);
}
}
return e.exp_obj=a,e;
}
function _checkShowCpc(){
if(js_cpc_area){
var e=(document.documentElement.clientHeight||window.innerHeight)/2,a=js_cpc_area.offsetTop,p=document.getElementById("js_content").offsetHeight;
return e>a||e>p-a?!1:!0;
}
}
function lazyLoadAdImg(e){
for(var a=document.getElementsByClassName("js_alazy_img"),p=0;p<a.length;p++){
var i=a[p];
a[p].onload=function(){
window.__addIdKeyReport("28307",54),i.src.indexOf("retry")>-1&&window.__addIdKeyReport("28307",69);
},a[p].onerror=function(){
if(-1==i.src.indexOf("retry"))i.src=ParseJs.addParam(i.src,"retry",1);else{
window.__addIdKeyReport("28307",98);
var a="other";
mmversion.isIOS?a="iphone":mmversion.isAndroid&&(a="android"),window.setTimeout(function(){
var p=window.networkType||"unknow";
ajax({
url:"http://mp.weixin.qq.com/tp/datacenter/report?cmd=report&id=900023&os="+a+"&uin=777&aid="+e.aid+"&image_url="+encodeURIComponent(i.src)+"&type="+e.type+"&network="+p,
type:"GET",
async:!0
});
},500);
}
window.__addIdKeyReport("28307",57);
},a[p].src=a[p].dataset.src;
}
}
function getHost(e){
if(!e)return"";
var a=document.createElement("a");
return a.href=e,a.hostname;
}
function checkAdImg(e){
if(e){
var a=["wximg.qq.com","wximg.gtimg.com","pgdt.gtimg.cn","mmsns.qpic.cn","mmbiz.qpic.cn","vweixinthumb.tc.qq.com","pp.myapp.com","wx.qlog.cn","mp.weixin.qq.com"],p=e.image_url||"",i=getHost(p);
return void(i&&-1==a.indexOf(i)&&window.__addIdKeyReport("28307",58));
}
}
function saveCopyArr(e){
for(var a=[],p=0;p<e.length;++p){
var i=e[p],t=typeof i;
i="string"==t?i.htmlDecode():i,"object"==t&&(i="[object Array]"==Object.prototype.toString.call(i)?saveCopyArr(i):saveCopy(i)),
a.push(i);
}
return a;
}
function saveCopy(e){
var a={};
for(var p in e)if(e.hasOwnProperty(p)){
var i=e[p],t=typeof i;
i="string"==t?i.htmlDecode():i,"object"==t&&(i="[object Array]"==Object.prototype.toString.call(i)?saveCopyArr(i):saveCopy(i)),
a[p]=i;
}
return a;
}
function formName(e){
for(var a=[" ","-","(",":",'"',"'","：","（","—","－","“","‘"],p=-1,i=0,t=a.length;t>i;++i){
var o=a[i],n=e.indexOf(o);
-1!=n&&(-1==p||p>n)&&(p=n);
}
return-1!=p&&(e=e.substring(0,p)),e;
}
function formSize(e){
return"number"!=typeof e?e:(e>=1024?(e/=1024,e=e>=1024?(e/1024).toFixed(2)+"MB":e.toFixed(2)+"KB"):e=e.toFixed(2)+"B",
e);
}
function seeAds(){
function debounce(e,a,p){
var i;
return function(){
var t=this,o=arguments,n=function(){
i=null,p||e.apply(t,o);
},_=p&&!i;
clearTimeout(i),i=setTimeout(n,a),_&&e.apply(t,o);
};
}
var adDatas=window.adDatas;
if(adDatas&&adDatas.num>0){
var onScroll=debounce(function(){
for(var scrollTop=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,i=0;total_pos_type>i;++i)!function(i){
var pos_key="pos_"+i,gdt_a=gdt_as[pos_key];
if(gdt_a=!!gdt_a&&gdt_a[0],gdt_a&&gdt_a.dataset&&gdt_a.dataset.apurl){
var gid=gdt_a.dataset.gid,tid=gdt_a.dataset.tid,aid=gdt_a.dataset.aid,apurl=gdt_a.dataset.apurl,is_cpm=1*gdt_a.dataset.is_cpm,ads=adDatas.ads,a_info=ads[pos_key].a_info||{},exp_info=a_info.exp_info||{},exp_id=exp_info.exp_id||"",exp_value=exp_info.exp_value||[],pos_type=adDatas.ads[pos_key].a_info.pos_type,gdt_area=el_gdt_areas[pos_key],offsetTop=gdt_area.offsetTop,adHeight=gdt_a.clientHeight,adOffsetTop=offsetTop+gdt_a.offsetTop,gh_id="",pt=adDatas.ads[pos_key].a_info.pt;
adDatas.ads[pos_key]&&adDatas.ads[pos_key].a_info&&adDatas.ads[pos_key].a_info.weapp_info&&adDatas.ads[pos_key].a_info.weapp_info.original_id&&(gh_id=adDatas.ads[pos_key].a_info.weapp_info.original_id),
adDatas.ads[pos_key].ad_engine=0;
try{
exp_value=JSON.stringify(exp_value);
}catch(e){
exp_value="[]";
}
if(-1!=apurl.indexOf("ad.wx.com")&&(adDatas.ads[pos_key].ad_engine=1),!ping_apurl[pos_key]&&scrollTop+innerHeight>offsetTop){
ping_apurl[pos_key]=!0;
var report_arg="trace_id="+tid+"&product_type="+pt+"&logtype=2&url="+encodeURIComponent(location.href)+"&apurl="+encodeURIComponent(apurl);
tid&&mmversion.gtVersion("6.3.22",!0)&&JSAPI.invoke("adDataReport",{
ad_info:report_arg
},function(){}),log("[Ad] seeAd, tid="+tid+", aid="+aid+", pos_type="+pos_type),
ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl)+"&__biz="+biz+"&ascene="+encodeURIComponent(window.ascene||-1)+"&pos_type="+pos_type+"&exp_id="+exp_id+"&exp_value="+exp_value+"&r="+Math.random(),
success:function(res){
log("[Ad] seeAd report success, tid="+tid+", aid="+aid+", pos_type="+pos_type);
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret?ping_apurl[pos_key]=!1:ping_apurl.pos_0&&ping_apurl.pos_1;
},
error:function(){
log("[Ad] seeAd report error, tid="+tid+", aid="+aid+", pos_type="+pos_type),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_27_1";
},
async:!0
});
}
var ping_cpm_apurl_obj=ping_cpm_apurl[pos_key];
if(is_cpm&&!ping_cpm_apurl_obj.hasPing){
var rh=.5;
scrollTop+innerHeight>=adOffsetTop+adHeight*rh&&adOffsetTop+adHeight*(1-rh)>=scrollTop?3==pos_type?(ping_cpm_apurl_obj.hasPing=!0,
ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl+"&viewable=true")+"&__biz="+biz+"&ascene="+encodeURIComponent(window.ascene||-1)+"&pos_type="+pos_type+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
})):ping_cpm_apurl_obj.clk||(ping_cpm_apurl_obj.clk=setTimeout(function(){
ping_cpm_apurl_obj.hasPing=!0,ajax({
url:"/mp/advertisement_report?report_type=1&tid="+tid+"&aid="+aid+"&gh_id="+gh_id+"&adver_group_id="+gid+"&apurl="+encodeURIComponent(apurl+"&viewable=true")+"&__biz="+biz+"&ascene="+encodeURIComponent(window.ascene||-1)+"&pos_type="+pos_type+"&exp_id="+exp_id+"&exp_value="+exp_value+"&r="+Math.random(),
mayAbort:!0,
success:function(res){
try{
res=eval("("+res+")");
}catch(e){
res={};
}
res&&0!=res.ret&&(ping_cpm_apurl_obj.hasPing=!1);
},
async:!0
});
},1001)):3!=pos_type&&ping_cpm_apurl_obj.clk&&(clearTimeout(ping_cpm_apurl_obj.clk),
ping_cpm_apurl_obj.clk=null);
}
var allReport=!0;
if(107==pt||108==pt||110==pt)for(var i=0;i<see_ad_detail_report.length;i++)if(see_ad_detail_report[i])allReport=!1;else{
var report_url=location.protocol+"//mp.weixin.qq.com/mp/ad_report?action=see_report&aid="+aid+"&tid="+tid;
if((0==i&&scrollTop+innerHeight>offsetTop+1||1==i&&scrollTop+innerHeight>offsetTop+.5*adHeight||2==i&&scrollTop+innerHeight>offsetTop+adHeight)&&((new Image).src=report_url+"&seepos="+(i+1)+"&report_type=0",
see_ad_detail_report[i]=!0),i>=3)if(scrollTop+innerHeight>offsetTop&&offsetTop+adHeight>scrollTop){
if(see_ad_detail_first_see_time>0){
var t=0;
3==i&&(t=500),4==i&&(t=1e3),5==i&&(t=2e3),+new Date-see_ad_detail_first_see_time>t?((new Image).src=report_url+"&seetime="+t+"&report_type=1",
see_ad_detail_report[i]=!0):window.setTimeout(function(){
seeAds();
},t);
}
0==see_ad_detail_first_see_time&&(see_ad_detail_first_see_time=+new Date);
}else see_ad_detail_first_see_time=0;
}
}
}(i);
},500);
DomEvent.on(window,"scroll",onScroll),onScroll();
}
}
function imgReport(e){
(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=68064_"+e+"_1&r="+Math.random();
}
function imgReportBadJs(e){
var a=Math.random();
.5>a&&((new Image).src="https://badjs.weixinbridge.com/badjs?id=102&level=4&from="+encodeURIComponent(location.host)+"&msg="+encodeURIComponent(e));
}
function ad_click(e,a,p,i,t,o,n,_,r,d,s,c,l,m,f,u,g,y,h){
if(!has_click[t]){
has_click[t]=!0;
var v=document.getElementById("loading_"+t);
v&&(v.style.display="inline");
var w=g.exp_info||{},x=w.exp_id||"",j=w.exp_value||[];
try{
j=JSON.stringify(j);
}catch(k){
j="[]";
}
var b="";
c&&c.weapp_info&&c.weapp_info.original_id&&(b=c.weapp_info.original_id),AdClickReport({
click_pos:1,
report_type:2,
type:e,
exp_id:x,
exp_value:j,
url:encodeURIComponent(a),
tid:t,
aid:_,
rl:encodeURIComponent(p),
__biz:biz,
pos_type:d,
pt:r,
pos_x:l,
pos_y:m,
ad_w:f,
ad_h:u,
gh_id:b,
press_interval:window.__a_press_interval||-1
},function(){
function p(e,a,p,i,t,n,_,r,d,s,c){
if(console.log("handleApp",c),c&&c.has_installed&&-1==e.indexOf("itunes.apple.com")&&c.app_info.url_scheme)return void JSAPI.invoke("launchApplication",{
schemeUrl:c.app_info.url_scheme
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=c.app_info.url_scheme);
});
if(0==e.indexOf("https://itunes.apple.com/")||0==e.indexOf("http://itunes.apple.com/"))return c.app_info&&c.app_info.url_scheme&&mmversion.gtVersion("6.5.6",!0)?JSAPI.invoke("launchApplication",{
schemeUrl:c.app_info.url_scheme
},function(a){
-1==a.err_msg.indexOf("ok")&&(location.href=e);
}):JSAPI.invoke("downloadAppInternal",{
appUrl:e
},function(a){
a.err_msg&&-1!=a.err_msg.indexOf("ok")||(console.log("http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(e)+"&ticket="+o+"#wechat_redirect"),
location.href="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(e)+"&ticket="+o+"#wechat_redirect");
}),!1;
if(-1==e.indexOf("mp.weixin.qq.com"))e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e);else if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var l={
source:4,
tid:a,
idx:p,
mid:i,
appuin:t,
pt:n,
aid:_,
ad_engine:r,
pos_type:d
},m=window.__report;
if(s||-1!=e.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var f="",u="";
s&&(f=s.pkgname&&s.pkgname.replace(/\./g,"_"),u=s.channel_id||""),l={
source:4,
tid:a,
traceid:a,
mid:i,
idx:p,
appuin:t,
pt:n,
channel_id:u,
aid:_,
engine:r,
pos_type:d,
pkgname:f
};
}
e=URL.join(e,l),(0==e.indexOf("http://mp.weixin.qq.com/promotion/")||0==e.indexOf("https://mp.weixin.qq.com/promotion/"))&&(e=URL.join(e,{
traceid:a,
aid:_,
engine:r
})),!_&&m&&m(80,e);
}
location.href=e;
}
function i(e,a,p,i,t,o,n,_,r,d){
if(-1==e.indexOf("mp.weixin.qq.com"))e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(e);else if(-1==e.indexOf("mp.weixin.qq.com/s")&&-1==e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var s={
source:4,
tid:a,
idx:p,
mid:i,
appuin:t,
pt:o,
aid:n,
ad_engine:_,
pos_type:r
},c=window.__report;
if(("104"==o||"113"==o||"114"==o||"122"==o)&&d||-1!=e.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var l="",m="";
d&&(l=d.pkgname&&d.pkgname.replace(/\./g,"_"),m=d.channel_id||""),s={
source:4,
tid:a,
traceid:a,
mid:i,
idx:p,
appuin:t,
pt:o,
channel_id:m,
aid:n,
engine:_,
pos_type:r,
pkgname:l
};
}
e=URL.join(e,s),(0==e.indexOf("http://mp.weixin.qq.com/promotion/")||0==e.indexOf("https://mp.weixin.qq.com/promotion/"))&&(e=URL.join(e,{
traceid:a,
aid:n,
engine:_
})),!n&&c&&c(80,e);
}
location.href=e;
}
if(has_click[t]=!1,v&&(v.style.display="none"),g.canvas_info)return void JSAPI.invoke("openADCanvas",{
canvasId:g.canvas_info.canvas_id,
preLoad:0,
noStore:0,
extraData:JSON.stringify({
pos_type:d
}),
adInfoXml:g.canvas_info.ad_info_xml
},function(e){
0!=e.ret?(location.href=a,report(135,y)):report(134,y);
});
if(h)1==g.dest_type?i(a,t,idx,mid,biz,r,_,s,d,c,g):(12==g.product_type||19==g.product_type)&&p(a,t,idx,mid,biz,r,_,s,d,c,g);else if("5"==e)location.href="/mp/profile?source=from_ad&tousername="+a+"&ticket="+o+"&uin="+uin+"&key="+key+"&__biz="+biz+"&mid="+mid+"&idx="+idx+"&tid="+t;else{
if("105"==r&&c)return void Card.openCardDetail(c.card_id,c.card_ext,c);
if("106"==r&&c)return void(location.href=ParseJs.join(a,{
outer_id:c.outer_id
}));
if("118"==r||"119"==r||"120"==r)return void Wxopen_card.openWxopen(c);
if("125"==r&&6==g.dest_type)return void Wxopen_card.openWxopen(c);
if(g&&g.has_installed&&("104"==r||"113"==r||"114"==r||"122"==r||"2"==r&&-1==a.indexOf("itunes.apple.com"))&&g.app_info.url_scheme)return void JSAPI.invoke("launchApplication",{
schemeUrl:g.app_info.url_scheme
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=g.app_info.url_scheme);
});
if(0==a.indexOf("https://itunes.apple.com/")||0==a.indexOf("http://itunes.apple.com/"))return g.app_info&&g.app_info.url_scheme&&mmversion.gtVersion("6.5.6",!0)?JSAPI.invoke("launchApplication",{
schemeUrl:g.app_info.url_scheme
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=a);
}):JSAPI.invoke("downloadAppInternal",{
appUrl:a
},function(e){
e.err_msg&&-1!=e.err_msg.indexOf("ok")||(location.href="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(a)+"&ticket="+o+"#wechat_redirect");
}),!1;
if(-1==a.indexOf("mp.weixin.qq.com"))a="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(a);else if(-1==a.indexOf("mp.weixin.qq.com/s")&&-1==a.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var n={
source:4,
tid:t,
idx:idx,
mid:mid,
appuin:biz,
pt:r,
aid:_,
ad_engine:s,
pos_type:d
},l=window.__report;
if(("104"==r||"113"==r||"114"==r||"122"==r)&&c||-1!=a.indexOf("mp.weixin.qq.com/mp/ad_app_info")){
var m="",f="";
c&&(m=c.pkgname&&c.pkgname.replace(/\./g,"_"),f=c.channel_id||""),n={
source:4,
tid:t,
traceid:t,
mid:mid,
idx:idx,
appuin:biz,
pt:r,
channel_id:f,
aid:_,
engine:s,
pos_type:d,
pkgname:m
};
}
a=URL.join(a,n),(0==a.indexOf("http://mp.weixin.qq.com/promotion/")||0==a.indexOf("https://mp.weixin.qq.com/promotion/"))&&(a=URL.join(a,{
traceid:t,
aid:_,
engine:s
})),!_&&l&&l(80,a);
}
location.href=a;
}
});
}
}
function bindAdOperation(){
seeAds();
for(var e=0;total_pos_type>e;++e)!function(e){
var a="pos_"+e,p=el_gdt_areas[a];
if(!p)return!1;
if(!p.getElementsByClassName&&p.style)return p.style.display="none",!1;
var i=p.getElementsByClassName("js_ad_link")||[],t=adDatas.ads[a];
if(t){
for(var o=t.adData,n=t.a_info,_=n.pos_type,r=t.ad_engine,d=0,s=i.length;s>d;++d)!function(e,a){
var p=i[e],t=p.dataset;
if(t&&3!=n.pos_type){
var o=t.type,d=t.url,s=t.rl,c=t.apurl,l=t.tid,m=t.ticket,f=t.group_id,u=t.aid,g=t.pt,y=n.use_new_protocol,h=!0;
console.log("js click data: ",t),console.log("js click data: ",n),!y||12!=n.product_type&&19!=n.product_type||(h=!1,
console.log("js dom event type: ",h)),DomEvent.on(p,"click",function(e){
var p=!!e&&e.target;
if(p&&"js_ad_btn"==p.id);else if(!p||!p.className||-1==p.className.indexOf("js_ad_btn")&&-1==p.className.indexOf("js_btn_process")&&-1==p.className.indexOf("js_muted_btn")&&-1==p.className.indexOf("js_poster_cover")){
if(a){
a.adid=window.adid||a.adid||a.aid;
var i="&tid="+a.traceid+"&uin="+uin+"&key="+key+"&ticket="+(a.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+a.adid+"&ad_engine="+r+"&pos_type="+_+"&r="+Math.random();
n&&n.has_installed&&("104"==a.pt||"113"==a.pt||"114"==a.pt||"2"==a.pt)?report(114,i):"103"==a.pt||"111"==a.pt||"112"==a.pt?report(23,i):("104"==a.pt||"113"==a.pt||"114"==a.pt)&&report(25,i);
}
var t,h,v,w;
return t=position.getX(p,"js_ad_link")+e.offsetX,h=position.getY(p,"js_ad_link")+e.offsetY,
v=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
w=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight,
ad_click(o,d,s,c,l,m,f,u,g,_,r,a,t,h,v,w,n,i,y),log("[Ad] ad_click: type="+o+", url="+d+", rl="+s+", apurl="+c+", traceid="+l+", ticket="+m+", group_id="+f+", aid="+u+", pt="+g+", pos_type="+_+", ad_engine="+r),
!1;
}
},h),DomEvent.on(p,"touchstart",function(){
console.log("touchstart",+new Date),window.__a_press_interval=+new Date;
}),DomEvent.on(p,"touchend",function(){
console.log("touchend",+new Date),window.__a_press_interval=+new Date-window.__a_press_interval;
});
}
}(d,o);
if(o){
o.adid=window.adid||o.adid||o.aid;
var c=n.exp_info||{},l=c.exp_id||"",m=c.exp_value||[];
try{
m=JSON.stringify(m);
}catch(f){
m="[]";
}
var u="&tid="+o.traceid+"&uin="+uin+"&key="+key+"&ticket="+(o.ticket||"")+"&__biz="+biz+"&source="+source+"&scene="+scene+"&appuin="+biz+"&aid="+o.adid+"&ad_engine="+r+"&pos_type="+_+"&exp_id="+l+"&exp_value="+m+"&r="+Math.random();
if(o.report_param=u,o.use_new_protocol){
if(12==n.product_type||19==n.product_type){
var g=require("a/app_card.js"),y=15,h=o.pkgname&&o.pkgname.replace(/\./g,"_"),v=document.getElementById("js_ad_btn_"+_);
new g({
btn:v,
adData:o,
report_param:u,
pos_type:_,
url_scheme:o.url_scheme,
via:[o.traceid,o.adid,h,source,y,r].join("."),
ticket:o.ticket,
appdetail_params:["&aid="+o.adid,"traceid="+o.traceid,"pkgname="+h,"source="+source,"type="+y,"engine="+r,"appuin="+biz,"pos_type="+_,"ticket="+o.ticket,"scene="+scene].join("&"),
engine:r
});
}
if(9==n.material_type){
n.report_param=u;
var w=require("a/video.js");
console.log("video_info",n),new w(n),console.log("new video loaded");
}
}else{
if("100"==o.pt||"115"==o.pt){
var x=require("a/profile.js");
return void new x({
btnViewProfile:document.getElementById("js_view_profile_"+_),
btnAddContact:document.getElementById("js_add_contact_"+_),
adData:o,
pos_type:_,
report_param:u,
aid:o.adid,
ad_engine:r
});
}
if("102"==o.pt){
var j=require("a/android.js"),y=15,h=o.pkgname&&o.pkgname.replace(/\./g,"_");
return void new j({
btn:document.getElementById("js_app_action_"+_),
adData:o,
report_param:u,
task_ext_info:[o.adid,o.traceid,h,source,y,r].join("."),
via:[o.traceid,o.adid,h,source,y,r].join(".")
});
}
if("101"==o.pt){
var k=require("a/ios.js");
return void new k({
btn:document.getElementById("js_app_action_"+_),
adData:o,
ticket:o.ticket,
report_param:u
});
}
if("105"==o.pt)return void new Card({
btn:document.getElementById("js_card_action_"+_),
adData:o,
report_param:u,
pos_type:_
});
if("106"==o.pt)return void new MpShop({
btn:document.getElementById("js_shop_action_"+_),
adData:o,
report_param:u,
pos_type:_
});
if("103"==o.pt||"104"==o.pt||"111"==o.pt||"112"==o.pt||"113"==o.pt||"114"==o.pt||"121"==o.pt||"122"==o.pt){
var g=require("a/app_card.js"),y=15,h=o.pkgname&&o.pkgname.replace(/\./g,"_");
return void new g({
btn:document.getElementById("js_appdetail_action_"+_),
js_app_rating:document.getElementById("js_app_rating_"+_),
adData:o,
report_param:u,
pos_type:_,
url_scheme:o.url_scheme,
via:[o.traceid,o.adid,h,source,y,r].join("."),
ticket:o.ticket,
appdetail_params:["&aid="+o.adid,"traceid="+o.traceid,"pkgname="+h,"source="+source,"type="+y,"engine="+r,"appuin="+biz,"pos_type="+_,"ticket="+o.ticket,"scene="+scene].join("&"),
engine:r
});
}
if("108"==o.pt||"109"==o.pt||"110"==o.pt||"116"==o.pt||"117"==o.pt){
var b=require("a/sponsor.js");
new b({
adDetailBtn:document.getElementById("js_ad_detail"),
adMoreBtn:document.getElementById("js_ad_more"),
adAbout:document.getElementById("js_btn_about"),
adImg:document.getElementById("js_main_img"),
adMessage:document.getElementById("js_ad_message"),
adVideo:document.getElementById("js_video_container"),
adData:o,
a_info:n,
pos_type:_,
report_param:u
});
}
if("118"==n.pt&&(o.report_param=u),"125"==n.pt){
n.report_param=u,console.log("old video info");
var w=require("a/video.js");
new w(n);
}
}
}
}
}(e);
}
function extend(e,a){
for(var p in a)e[p]=a[p];
return e;
}
var mmversion=require("biz_wap/utils/mmversion.js"),js_bottom_ad_area=document.getElementById("js_bottom_ad_area"),js_sponsor_ad_area=document.getElementById("js_sponsor_ad_area"),js_cpc_area=document.getElementsByTagName("mpcpc"),gdt_pos_4={};
js_cpc_area.length>0?(js_cpc_area=document.getElementsByTagName("mpcpc")[0],gdt_pos_4=js_cpc_area.getElementsByClassName("js_ad_link")):js_cpc_area=void 0;
var pos_type=window.pos_type||0,__report=window.__report,total_pos_type=5,el_gdt_areas={
pos_4:js_cpc_area,
pos_3:js_sponsor_ad_area,
pos_0:js_bottom_ad_area
},gdt_as={
pos_4:gdt_pos_4,
pos_3:js_sponsor_ad_area.getElementsByClassName("js_ad_link"),
pos_0:js_bottom_ad_area.getElementsByClassName("js_ad_link")
},isScroll=!1,isSee=!1;
window.adDatas={
ads:{},
num:0
};
var adDatas=window.adDatas,has_click={},DomEvent=require("biz_common/dom/event.js"),URL=require("biz_common/utils/url/parse.js"),AReport=require("a/a_report.js"),AdClickReport=AReport.AdClickReport,ajax=require("biz_wap/utils/ajax.js"),position=require("biz_wap/utils/position.js"),Card=require("a/card.js"),Wxopen_card=require("a/wxopen_card.js"),MpShop=require("a/mpshop.js"),JSAPI=require("biz_wap/jsapi/core.js"),ParseJs=require("biz_common/utils/url/parse.js"),TMPL=require("biz_common/tmpl.js"),a_tpl=require("a/a_tpl.html.js"),sponsor_a_tpl=require("a/sponsor_a_tpl.html.js"),cpc_a_tpl=require("a/cpc_a_tpl.html.js"),Report=require("biz_common/utils/report.js"),Class=require("biz_common/dom/class.js"),LS=require("biz_wap/utils/storage.js"),ParseJs=require("biz_common/utils/url/parse.js"),log=require("appmsg/log.js"),ping_apurl={
pos_0:!1,
pos_1:!1,
pos_3:!1,
pos_4:!1
},ping_cpm_apurl={
pos_0:{},
pos_1:{},
pos_3:{},
pos_4:{}
},ping_test_apurl={
pos_0:[],
pos_1:[],
pos_3:[],
pos_4:[]
},see_ad_detail_report=[!1,!1,!1,!1,!1,!1],see_ad_detail_first_see_time=0,ping_test_apurl_random=Math.random()<.3,innerHeight=window.innerHeight||document.documentElement.clientHeight,innerHeight_new=getWindowHeight(),ad_engine=0,keyOffset="https:"==location.protocol?5:0;
return{
checkNeedAds:checkNeedAds,
afterGetAdData:afterGetAdData
};
});define("rt/appmsg/getappmsgext.rt.js",[],function(){
"use strict";
return{
base_resp:{
ret:"number",
errmsg:"string",
wxtoken:"number"
},
advertisement_num:"number",
advertisement_info:[{
hint_txt_R:"string",
url_R:"string",
type_R:"string",
rl_R:"string",
apurl_R:"string",
traceid_R:"string",
group_id_R:"string",
ticket:"string",
aid:"string",
pt:"number",
image_url:"string",
ad_desc:"string",
biz_appid:"string",
pos_type:"number",
watermark_type:"number",
logo:"string",
app_info:{},
biz_info:{},
card_info:{}
}],
comment_enabled:"number",
appmsgticket:{
ticket:"string"
},
self_head_imgs:"string",
appmsgstat:{
ret:"number",
show:"boolean",
is_login:"boolean",
like_num:"number",
liked:"boolean",
read_num:"number",
real_read_num:"number"
},
timestamp:"number",
reward_total_count:"number",
reward_head_imgs:["string"]
};
});define("biz_wap/utils/storage.js",[],function(){
"use strict";
function t(t){
if(!t)throw"require function name.";
this.key=t,this.init();
}
var e="__WXLS__",n=window.localStorage||{
getItem:function(){},
setItem:function(){},
removeItem:function(){},
key:function(){},
length:0
};
return t.getItem=function(t){
return t=e+t,n.getItem(t);
},t.setItem=function(i,r){
i=e+i;
for(var a=3;a--;)try{
n.setItem(i,r);
break;
}catch(o){
t.clear();
}
},t.clear=function(){
var t,i;
for(t=n.length-1;t>=0;t--)i=n.key(t),0==i.indexOf(e)&&n.removeItem(i);
},t.prototype={
constructor:t,
init:function(){
this.check();
},
getData:function(){
var e=t.getItem(this.key)||"{}";
try{
e=JSON.parse(e);
}catch(n){
e={};
}
return e;
},
check:function(){
var e,n,i=this.getData(),r={},a=+new Date;
for(e in i)n=i[e],+n.exp>a&&(r[e]=n);
t.setItem(this.key,JSON.stringify(r));
},
set:function(e,n,i){
var r=this.getData();
r[e]={
val:n,
exp:i||+new Date
},t.setItem(this.key,JSON.stringify(r));
},
get:function(t){
var e=this.getData();
return e=e[t],e?e.val||null:null;
},
remove:function(e){
var n=this.getData();
n[e]&&delete n[e],t.setItem(this.key,JSON.stringify(n));
}
},t;
});define("biz_common/tmpl.js",[],function(){
"use strict";
var e=function(e,r,t){
var n="";
n=e.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r"),
n=t?n.replace(/\t==(.*?)#>/g,"',$1,'").replace(/\t=(.*?)#>/g,"', String($1).replace(/&/g,'&amp;').replace(/\"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;') ,'"):n.replace(/\t=(.*?)#>/g,"',$1,'"),
n=n.split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'");
var p=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n+"');}return p.join('');");
return p(r);
},r=function(r,t,n){
var p=document.getElementById(r);
return p?e(p.innerHTML,t,n):"";
};
return{
render:r,
tmpl:e
};
});define("appmsg/share_tpl.html.js",[],function(){
return'<div class="rich_media_extra">\n    <a href="<#= url #>" class="share_appmsg_container appmsg_card_context flex_context">\n        <div class="flex_hd">\n            <i class="share_appmsg_icon"> </i>\n        </div>\n        <div class="flex_bd">\n            <div class="share_appmsg_title">分享给订阅用户</div>\n            <p class="share_appmsg_desc">可快速分享原创文章给你的公众号订阅用户</p>\n        </div>\n    </a>\n</div>\n';
});define("appmsg/appmsgext.js",["appmsg/log.js","biz_wap/utils/ajax.js","rt/appmsg/getappmsgext.rt.js"],function(e){
"use strict";
function t(e){
var t={
biz:"",
appmsg_type:"",
mid:"",
sn:"",
idx:"",
scene:"",
title:"",
ct:"",
abtest_cookie:"",
devicetype:"",
version:"",
is_need_ticket:0,
is_need_ad:0,
comment_id:"",
is_need_reward:0,
both_ad:0,
reward_uin_count:0,
send_time:"",
msg_daily_idx:"",
is_original:0,
is_only_read:0,
req_id:"",
pass_ticket:"",
is_temp_url:0,
rtId:"",
rtKey:"",
onSuccess:function(){},
onError:function(){}
};
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);
i({
url:"/mp/getappmsgext?f=json",
data:{
r:Math.random(),
__biz:t.biz,
appmsg_type:t.appmsg_type,
mid:t.mid,
sn:t.sn,
idx:t.idx,
scene:t.scene,
title:encodeURIComponent(t.title.htmlDecode()),
ct:t.ct,
abtest_cookie:t.abtest_cookie,
devicetype:t.devicetype.htmlDecode(),
version:t.version.htmlDecode(),
is_need_ticket:t.is_need_ticket,
is_need_ad:t.is_need_ad,
comment_id:t.comment_id,
is_need_reward:t.is_need_reward,
both_ad:t.both_ad,
reward_uin_count:t.is_need_reward?t.reward_uin_count:0,
send_time:t.send_time,
msg_daily_idx:t.msg_daily_idx,
is_original:t.is_original,
is_only_read:t.is_only_read,
req_id:t.req_id,
pass_ticket:t.pass_ticket,
is_temp_url:t.is_temp_url
},
type:"POST",
dataType:"json",
rtId:t.rtId,
rtKey:t.rtKey,
rtDesc:a,
async:!0,
success:function(e){
if(s("[Appmsg] success get async data"),"function"==typeof t.onSuccess&&t.onSuccess(e),
e)try{
s("[Appmsg] success get async data, async data is: "+JSON.stringify(e));
}catch(i){}else s("[Appmsg] success get async data, async data is empty");
},
error:function(){
s("[Appmsg] error get async data, biz="+t.biz+", mid="+t.mid),"function"==typeof t.onError&&t.onError();
}
});
}
var s=e("appmsg/log.js"),i=e("biz_wap/utils/ajax.js"),a=e("rt/appmsg/getappmsgext.rt.js");
return{
getData:t
};
});define("appmsg/img_copyright_tpl.html.js",[],function(){
return'<span class="original_img_wrp">            \n    <span class="tips_global">来自: <#=source_nickname#></span>\n</span>    ';
});define("pages/video_ctrl.js",[],function(){
"use strict";
function i(i){
return i=i||window,i.cgiData&&2==i.cgiData.ori_status?!0:!1;
}
function n(i){
return i=i||window,!1;
}
function t(){
return-1!=a.indexOf("&vl=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function e(){
return-1!=a.indexOf("&dd=1")?!1:"54"==parent.window.appmsg_type?!1:!0;
}
function o(){
var i;
if(parent==window)i=window;else try{
{
parent.window.__videoDefaultRatio;
}
i=parent.window;
}catch(n){
i=window;
}
var t=i.__videoDefaultRatio||16/9;
return"54"==i.appmsg_type?t:t;
}
var a=window.location.href;
return{
showPauseTips:e,
showVideoLike:t,
showVideoDetail:n,
showH5Profile:i,
getRatio:o
};
});define("appmsg/comment_utils.js",["appmsg/comment.js"],function(n){
"use strict";
function m(m){
1==m.comment_enabled&&(window.can_fans_comment_only=m.only_fans_can_comment,window.comment_count=m.comment_count,
window._is_fans=m.is_fans,window._logo_url=m.logo_url,window._nick_name=m.nick_name,
window.friend_comment_enabled=m.friend_comment_enabled,n("appmsg/comment.js"));
}
return{
initCommentByExtData:m
};
});define("biz_common/ui/imgonepx.js",[],function(){
"use strict";
return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDQzA1MTVGNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDQzA1MTYwNkE2MjExRTRBRjEzODVCM0Q0NEVFMjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNDMDUxNUQ2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNDMDUxNUU2QTYyMTFFNEFGMTM4NUIzRDQ0RUUyMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6p+a6fAAAAD0lEQVR42mJ89/Y1QIABAAWXAsgVS/hWAAAAAElFTkSuQmCC";
});