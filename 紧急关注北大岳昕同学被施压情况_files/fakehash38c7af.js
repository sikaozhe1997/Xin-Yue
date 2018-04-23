define("new_video/player.html.js",[],function(){
return'<div id="js_mpvedio_<#=id#>" class="js_mpvedio">\n<div class="js_page_video page_video <#if(ratio==(16/9)){#>ratio_primary<#}#>" style="width:<#=width#>px;height:<#=height#>px;display:<#=display#>;">\n    <!--ps: @拉风\n        1.全屏body添加扩展类： full_screen_mv\n        2.全屏是竖屏播放的情况：需要给page_video这个div加一个margin-left,margin-top\n        这两个值是page_video设置的高度和宽度的一半的负数；\n        3.如果是横屏的话(横屏默认为全屏)，page_video上设置的宽度和高度去掉即可。\n    -->\n\n<!--     <div class="wrp_loading js_loading">\n        <div class="wrp_svg">\n            <svg  class="rotate_svg" width="64" height="64" xmlns="http://www.w3.org/2000/svg">\n                <circle cx="50%" cy="50%" r="40%" stroke-width="4"/>\n                <path fill="#fff" stroke="#f00" stroke-width="4" fill-opacity="0" d="M4.5 35\n               A 26 26, 0,0,0, 27 56" transform="rotate(330.191 30 30)">\n             <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 30 30" to="360 30 30" dur="5s" repeatCount="indefinite"></animateTransform>\n\n          </path>\n            </svg>\n            <svg class="loader_bg" xmlns="http://www.w3.org/2000/svg" width="64" height="64">\n                <circle cx="50%" cy="50%" r="40%" style="fill:#a5a4a2;stroke:#a5a4a2;stroke-width:4;fill-opacity:0;"></circle>\n            </svg>\n        </div>\n    </div>     -->\n    <!--下载腾讯视频-->\n    <div id="ing_download_<#=id#>" class="app_download_container" style="display:none;">\n        <# if (window.cgiData) { #>\n        <img class="app_thumb" src="<#=window.cgiData.appImg||""#>">\n        <# } else { #>\n        <img class="app_thumb" src="">\n        <# } #>\n        <span class="btn_app_download_wrp js_download_btn">\n            <span class="btn_app_download js_download_text">下载</span>\n        </span>\n        <span class="btn_app_download_wrp js_progress_main" style="display:none;">\n            <span class="btn_app_download progress_text js_progress_text"></span>\n            <span class="app_download_progress js_progress" style="width:0%;"></span>\n        </span>\n        <div class="app_download_info">\n            <strong class="app_download_title">提升3倍流畅度</strong>\n            <p class="app_download_desc"><span class="js_installStatus"></span>腾讯视频客户端</p>\n        </div>\n    </div>\n\n    <!-- 视频加载失败 -->\n    <!--\n    <div class="wx_video_error_box">\n        <div class="wx_video_error_msg">\n            <p>视频加载失败，请刷新重试</p>\n            <a class="wx_video_error_msg_btn" href="javascript:void(0);">刷新</a>\n        </div>\n        <img class="wx_video_error_loading" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAMAAAC7xnO3AAAAY1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+aRQ2gAAAAIXRSTlMAOx20pMJbzBQNTDGTh2ohLCZmeUF2hEmXCFdxUquef4yHE17nAAACnklEQVRIx9WW2xqiIBSFRc1AUATJU1a+/1MOm0NYKvnNXM260ZLftRcbqCQinOLI0yiY/iXKuUZPjx5Fk+6RhF1yHiVF0wC6IZfr9fqIkpRqdNyQ9AoiUU8g+YZ8Xn96YmNKvkhkLMskKgEo/yJzaxkXeZsGsjeWKEIFU/FBZgA+D5yEwGtTgR0J18lYUvdcLZ1YkUjLf+a0saYYSG/J3Hury+WSkTCjCETtF6Mvd8QGJMZSWIfsAlKhWGRl5zQ1ZNBDgy/zzvvFavWUK7SyTRs+rsiUZS/4LHIHyo8VgBx7vDkKx2WhPS7dD1Q6cNlu2dTa0gMys4bz/vJR6ph8ADgcVcSVUkfnhzJTc6gRj8fbCOHk30UI2KC+V4gKjskJQqC5frFHli0kafogFIfFkAXVCSqdAFVR8pmtVCWiXCtaarbWpGtQAYx7sjf2GCbfjFRQpH7lTLucveSMBE7+Z6VqViT2/PVs0d7hPk9TUcTaUuVaT8k/f/v6SXOgyG7InZaSvM8vj/309LrbvpSAORDH2/kWGyHhm/u5AYUc8qdFBRRrsV749bRv6I5x1OY50GZUUxQz9aGplAXZcOQ1DL3vwsTyvHQ2YWgjZV2rDTmxYRjUuoBvcQDr7QRLBiiNzJ4BawG3FLtTmEMGBigTRyC2oIKht1vbwLWrKmXKBZal+yApDGhm4q5JCVdNdrZeQBe8B44WnE2NGmxrR1bCvMugHdkhSwMWI9wjIGeosnPlJmNrst6PQrpeFkBSyAmkdD016DYqAVC6HHcNtnCPgazcuytAd5IqB/qYtq4bkP7vnEaL3W4KH9/HhKBAKl8XFUlMIWYIek4hZgh6UtjHBLVA4pPkCKRf9jOQ5Kwp1UvPDyb3qkPJaRG8Ln7f8Q8Bki/Kj5IYnQAAAABJRU5ErkJggg==">\n    </div>\n    -->\n    <!--菊花-->\n    <div class="wrp_loading js_loading start_loading"  style="display:none;">\n        <div class="mid_opr">\n            <div class="spinner" role="progressbar"\n                style="position: absolute; width: 0px; z-index: 2000000000; left: 50%; top: 50%;backface-visibility:hidden; -webkit-backface-visibility:hidden;">\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-0-12 1.25s linear infinite;-webkit-animation: opacity-60-25-0-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(0deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(0deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-1-12 1.25s linear infinite;-webkit-animation: opacity-60-25-1-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(30deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(30deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-2-12 1.25s linear infinite;-webkit-animation: opacity-60-25-2-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(60deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(60deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-3-12 1.25s linear infinite;-webkit-animation: opacity-60-25-3-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(90deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(90deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-4-12 1.25s linear infinite;-webkit-animation: opacity-60-25-4-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(120deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(120deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-5-12 1.25s linear infinite;-webkit-animation: opacity-60-25-5-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(150deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(150deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-6-12 1.25s linear infinite;-webkit-animation: opacity-60-25-6-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(180deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(180deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-7-12 1.25s linear infinite;-webkit-animation: opacity-60-25-7-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(210deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(210deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-8-12 1.25s linear infinite;-webkit-animation: opacity-60-25-8-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(240deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(240deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-9-12 1.25s linear infinite;-webkit-animation: opacity-60-25-9-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(270deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(270deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-10-12 1.25s linear infinite;-webkit-animation: opacity-60-25-10-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(300deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(300deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n                <div style="position: absolute; top: -1px; opacity: 0.25; animation: opacity-60-25-11-12 1.25s linear infinite;-webkit-animation: opacity-60-25-11-12 1.25s linear infinite;">\n                    <div\n                        style="position: absolute; width: 9.68px; height: 3.08px; box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 1px; transform-origin: left 50% 0px; transform: rotate(330deg) translate(9.24px, 0px);-webkit-transform-origin: left 50% 0px; -webkit-transform: rotate(330deg) translate(9.24px, 0px); border-radius: 1px; background: rgb(253, 253, 253);"></div>\n                </div>\n            </div>\n        </div>\n        <!--\n        <svg version="1.1" class="svg_loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n        width="60px" height="60px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve">\n\n        <circle cx="30" cy="30" r="26" style="fill:#a5a4a2;stroke:#a5a4a2;stroke-width:4;fill-opacity:0" />\n        <path  fill="#fff" stroke="#fff"  stroke-width="4"  fill-opacity="0" d="M4.5 35A 26 26, 0,0,0, 27 56" style="stroke-linecap:round;">\n        <animateTransform attributeType="xml"\n        attributeName="transform"\n        type="rotate"\n        from="0 30 30"\n        to="360 30 30"\n        dur="0.5s"\n        repeatCount="indefinite"/>\n        </path>\n        </svg>\n        -->\n    </div>\n\n    <!-- 播放按钮 z-index:12 -->\n    <div class="video_pause_controll js_video_pause_controll">\n        <a class="btn_pause js_btn_pause">\n            <i class="icon_pause"></i>\n        </a>\n    </div>\n\n    <!-- 互选视频广告 静音btn 静音状态className:muting -->\n    <# if(ad_muted_btn){ #>\n    <span class="js_muted_btn video_muted_btn muting">静音</span>\n    <# } #>\n\n    <!-- 视频广告 z-index:13 -->\n    <div class="video_ad js_ad_controll" style="display:none;">\n        <span class="button_left_time video_ad_time_meta">广告<span class="button_left_time_num js_play_time"></span></span>\n        <a href="javascript:void(0);" class="btn_close js_btn_can_close_ad video_ad_time_meta" style="display:none;">可在<span class="js_can_close_time">(5s)</span>后关闭</a>\n        <a href="javascript:void(0);" class="btn_close js_btn_close_ad video_ad_time_meta" style="display:none;">关闭<i></i></a>\n\n    </div>\n    <!-- 视频广告详情入口 -->\n    <div class="video_ad_detail js_ad_detail" style="display:none;">\n        <!--带小程序logo时，className 去掉with_arrow，加className with_weapp-->\n        <a href="javascript:;" class="btn btn_ad_detail with_arrow js_btn_ad_detail">\n            <!-- 小程序图标 -->\n            <span class="icon26_weapp_white js_video_post_weapp_icon" style="display:none;"></span>了解详情\n        </a>\n    </div>\n    <!--带小程序icon-->\n    <!-- <div class="video_ad_detail js_ad_detail" style="display:none;">\n        <a href="javascript:;" class="btn btn_ad_detail with_weapp js_btn_ad_detail">\n            <span class="icon26_weapp_white js_video_post_weapp_icon"></span>\n            了解详情\n        </a>\n    </div> -->\n\n    <div class="video_ad_detail js_ad_app" style="display:none;">\n        <a href="javascript:;" class="btn btn_ad_detail with_arrow js_btn_ad_app">下载应用</a>\n    </div>\n\n     <!--最后的视频推荐 z-index:11-->\n    <div class="js_end_dom continue_play none">\n        <!--\n        <div class="continue_inner">\n            <div class="hd_opr"><a href="#" class="btn_replay"><i class="icon_replay"></i>重新播放</a></div>\n            <div class="tit_desc">以下视频将跳到腾讯视频播放</div>\n            <ul class="video_list">\n               <li class="video_item">\n                   <a href="#" class="inner_item">\n                       <img  class="cover" src="<%@GetResFullName($images_path$pages/default_avator.png)%>"/>\n                       <div class="desc">\n                        这里是video的标题啊标题京东覅是\n                       </div>\n                   </a>\n               </li>\n            </ul>\n        </div>\n        -->\n    </div>\n\n    <!-- 无障碍按钮 -->\n    <em data-status="0" role="button" class="js_btn_play_aria btn_pause_accessibility"></em>\n\n    <!--封面-->\n    <!-- 跟播放器相同比例是style加上：\n        -webkit-background-size:cover;background-size:cover;  -->\n    <#if(cover){#>\n    <div class="js_poster_cover poster_cover" style="background-image:url(<#=cover#>)">\n        <!-- <img aria-labelledby="封面" alt="封面" src="<#=cover#>">\n        <div class="poster_cover_mask"></div> -->\n    </div>\n    <#}#>\n    <!--大播放-->\n    <div style="display:none;" class="full_screen_opr js_video_play_controll">\n        <div class="mid_play_box js_btn_play">\n            <i class="icon_mid_play"></i>\n            <p class="js_video_length video_length" style="display:none;"></p>\n        </div>\n    </div>\n\n\n    <!--mask,暂停状态下，提醒状态等的半透明蒙层-->\n    <div class="video_mask none"></div>\n\n    <!--快进。后退 操作 快进：next,快退，pre-->\n    <div  class="mid_opr fast_pre_next none js_forward">\n        <p class="video_length">\n            <span class="played_time js_forward_play_time">03:30</span>\n            <em>/</em>\n            <span class="total_time">03:30</span>\n        </p>\n        <div class="video_processor_bar">\n            <div class="processor_bar_inner js_forward_bar" style="width:30%;"></div>\n        </div>\n    </div>\n\n   <!--播放条-->\n    <!--消失opr_fade_out  出现opr_fade_in-->\n    <!--消失opr_fade_out  出现opr_fade_in-->\n    <div class="js_controll video_opr" style="display:none">\n         <div class="opr_inner">\n            <div class="opr_inner_fl">\n                <div class="js_switch switch switch_on"><!--switch_off 关闭，switch on开启-->\n                     <a href="javascript:void(0);" class="btn_opr">on/off</a>\n                 </div>\n                <div class="played_time js_now_play_time">\n                      00:00\n                </div>\n            </div>\n\n             <div class="wrp_play_bar">\n                <div class="js_progress_bar wrp_progress" style="display:none;">\n                    <div class="progress_bar">\n                        <div class="js_played_bar played_bar" style="width:0%"></div>\n                        <div class="js_buffer_bar buffer_bar" style="width:0%"></div><!--缓冲条-->\n                        <div class="js_played_speed_cnt wrp_speed_dot"><i class="speed_dot" style="left:0%"></i></div>\n                    </div>\n                </div>\n             </div>\n\n            <!-- <div class="wrp_pop_play"><a href="#" class="pop_play">小窗</a></div> -->\n            <!--清晰度选择-->\n           <!--  <div class="play_mode">\n                 <a href="#" class="btn_mode current">超清</a>\n                 <div class="pop_mode_select">\n                     <ul class="clarity">\n                         <li class="clarity_item current">超清</li>\n                         <li class="clarity_item">标清</li>\n                         <li class="clarity_item">流畅</li>\n                     </ul>\n                 </div>\n            </div> -->\n            <div class="opr_inner_fr">\n                <div class="total_time js_total_time" style="display:none;"></div>\n                <# if (!_mustHideFullScreen) { #><div class="js_full_screen_control screenSize_control full"><i class="icon_control"></i></div>  <!--全屏className：full,小窗className：small-->\n<# } #>\n            </div>\n         </div>\n    </div>\n    <!--视频-->\n    <div class="js_inner inner not_fullscreen">\n        <div class="js_video_poster video_poster" style="display:none;">\n            <div class="video_mask"></div>\n             <video class="<#if(videoFit){#>video_fill<#}#>"  webkit-playsinline playsinline>\n                  您的浏览器不支持 video 标签\n             </video>\n        </div>\n    </div>\n\n</div>\n\n    <!--全屏遮罩-->\n<div class="js_full_mask full_mask" style=""></div>\n\n<!--\n11 菊花\n10 最后的视频推荐\n9封面上边的控制按钮\n8  以后的广告浮层\n7 封面\n6 视频+控制条 （在里边控制条z-index>视频） -->\n\n</div>\n';
});define("biz_wap/zepto/touch.js",["biz_wap/zepto/zepto.js"],function(e){
"use strict";
e("biz_wap/zepto/zepto.js"),function(e){
function t(e,t,o,n){
return Math.abs(e-t)>=Math.abs(o-n)?e-t>0?"Left":"Right":o-n>0?"Up":"Down";
}
function o(){
p=null,g.last&&(g.el&&"function"==typeof g.el.trigger&&g.el.trigger("longTap"),g={});
}
function n(){
p&&clearTimeout(p),p=null;
}
function i(){
a&&clearTimeout(a),l&&clearTimeout(l),c&&clearTimeout(c),p&&clearTimeout(p),a=l=c=p=null,
g={};
}
function r(e){
return("touch"==e.pointerType||e.pointerType==e.MSPOINTER_TYPE_TOUCH)&&e.isPrimary;
}
function u(e,t){
return e.type=="pointer"+t||e.type.toLowerCase()=="mspointer"+t;
}
var a,l,c,p,s,g={},f=750;
e(document).ready(function(){
var w,y,T,h,d=0,m=0;
"MSGesture"in window&&(s=new MSGesture,s.target=document.body),e(document).bind("MSGestureEnd",function(e){
var t=e.velocityX>1?"Right":e.velocityX<-1?"Left":e.velocityY>1?"Down":e.velocityY<-1?"Up":null;
t&&g.el&&"function"==typeof g.el.trigger&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t));
}).on("touchstart MSPointerDown pointerdown",function(t){
(!(h=u(t,"down"))||r(t))&&(T=h?t:t.touches[0],t.touches&&1===t.touches.length&&g.x2&&(g.x2=void 0,
g.y2=void 0),w=Date.now(),y=w-(g.last||w),g.el=e("tagName"in T.target?T.target:T.target.parentNode),
a&&clearTimeout(a),g.x1=T.pageX,g.y1=T.pageY,y>0&&250>=y&&(g.isDoubleTap=!0),g.last=w,
p=setTimeout(o,f),s&&h&&s.addPointer(t.pointerId));
}).on("touchmove MSPointerMove pointermove",function(e){
(!(h=u(e,"move"))||r(e))&&(T=h?e:e.touches[0],n(),g.x2=T.pageX,g.y2=T.pageY,d+=Math.abs(g.x1-g.x2),
m+=Math.abs(g.y1-g.y2));
}).on("touchend MSPointerUp pointerup",function(o){
(!(h=u(o,"up"))||r(o))&&(n(),g.x2&&Math.abs(g.x1-g.x2)>30||g.y2&&Math.abs(g.y1-g.y2)>30?c=setTimeout(function(){
g.el&&"function"==typeof g.el.trigger&&(g.el.trigger("swipe"),g.el.trigger("swipe"+t(g.x1,g.x2,g.y1,g.y2))),
g={};
},0):"last"in g&&(30>d&&30>m?l=setTimeout(function(){
var t=e.Event("tap");
t.cancelTouch=i,g.el&&"function"==typeof g.el.trigger&&g.el.trigger(t),g.isDoubleTap?(g.el&&g.el.trigger("doubleTap"),
g={}):a=setTimeout(function(){
a=null,g.el&&g.el.trigger("singleTap"),g={};
},250);
},0):g={}),d=m=0);
}).on("touchcancel MSPointerCancel pointercancel",i),e(window).on("scroll",i);
}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){
e.fn[t]=function(e){
return this.on(t,e);
};
});
}(Zepto);
});define("biz_wap/zepto/event.js",["biz_wap/zepto/zepto.js"],function(e){
"use strict";
e("biz_wap/zepto/zepto.js"),function(e){
function n(e){
return e._zid||(e._zid=d++);
}
function t(e,t,o,u){
if(t=r(t),t.ns)var a=i(t.ns);
return(g[n(e)]||[]).filter(function(e){
return!(!e||t.e&&e.e!=t.e||t.ns&&!a.test(e.ns)||o&&n(e.fn)!==n(o)||u&&e.sel!=u);
});
}
function r(e){
var n=(""+e).split(".");
return{
e:n[0],
ns:n.slice(1).sort().join(" ")
};
}
function i(e){
return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)");
}
function o(e,n){
return e.del&&!y&&e.e in E||!!n;
}
function u(e){
return b[e]||y&&E[e]||e;
}
function a(t,i,a,s,f,d,l){
var v=n(t),h=g[v]||(g[v]=[]);
i.split(/\s/).forEach(function(n){
if("ready"==n)return e(document).ready(a);
var i=r(n);
i.fn=a,i.sel=f,i.e in b&&(a=function(n){
var t=n.relatedTarget;
return!t||t!==this&&!e.contains(this,t)?i.fn.apply(this,arguments):void 0;
}),i.del=d;
var v=d||a;
i.proxy=function(e){
if(e=c(e),!e.isImmediatePropagationStopped()){
e.customData=s;
var n=v.apply(t,e._args==p?[e]:[e].concat(e._args));
return n===!1&&(e.preventDefault(),e.stopPropagation()),n;
}
},i.i=h.length,h.push(i),"addEventListener"in t&&t.addEventListener(u(i.e),i.proxy,o(i,l));
});
}
function s(e,r,i,a,s){
var c=n(e);
(r||"").split(/\s/).forEach(function(n){
t(e,n,i,a).forEach(function(n){
delete g[c][n.i],"removeEventListener"in e&&e.removeEventListener(u(n.e),n.proxy,o(n,s));
});
});
}
function c(n,t){
return(t||!n.isDefaultPrevented)&&(t||(t=n),e.each(_,function(e,r){
var i=t[e];
n[e]=function(){
return this[r]=P,i&&i.apply(t,arguments);
},n[r]=z;
}),(t.defaultPrevented!==p?t.defaultPrevented:"returnValue"in t?t.returnValue===!1:t.getPreventDefault&&t.getPreventDefault())&&(n.isDefaultPrevented=P)),
n;
}
function f(e){
var n,t={
originalEvent:e
};
for(n in e)w.test(n)||e[n]===p||(t[n]=e[n]);
return c(t,e);
}
var p,d=(e.zepto.qsa,1),l=Array.prototype.slice,v=e.isFunction,h=function(e){
return"string"==typeof e;
},g={},m={},y="onfocusin"in window,E={
focus:"focusin",
blur:"focusout"
},b={
mouseenter:"mouseover",
mouseleave:"mouseout"
};
m.click=m.mousedown=m.mouseup=m.mousemove="MouseEvents",e.event={
add:a,
remove:s
},e.proxy=function(t,r){
if(v(t)){
var i=function(){
return t.apply(r,arguments);
};
return i._zid=n(t),i;
}
if(h(r))return e.proxy(t[r],t);
throw new TypeError("expected function");
},e.fn.bind=function(e,n,t){
return this.on(e,n,t);
},e.fn.unbind=function(e,n){
return this.off(e,n);
},e.fn.one=function(e,n,t,r){
return this.on(e,n,t,r,1);
};
var P=function(){
return!0;
},z=function(){
return!1;
},w=/^([A-Z]|returnValue$|layer[XY]$)/,_={
preventDefault:"isDefaultPrevented",
stopImmediatePropagation:"isImmediatePropagationStopped",
stopPropagation:"isPropagationStopped"
};
e.fn.delegate=function(e,n,t){
return this.on(n,e,t);
},e.fn.undelegate=function(e,n,t){
return this.off(n,e,t);
},e.fn.live=function(n,t){
return e(document.body).delegate(this.selector,n,t),this;
},e.fn.die=function(n,t){
return e(document.body).undelegate(this.selector,n,t),this;
},e.fn.on=function(n,t,r,i,o){
var u,c,d=this;
return n&&!h(n)?(e.each(n,function(e,n){
d.on(e,t,r,n,o);
}),d):(h(t)||v(i)||i===!1||(i=r,r=t,t=p),(v(r)||r===!1)&&(i=r,r=p),i===!1&&(i=z),
d.each(function(p,d){
o&&(u=function(e){
return s(d,e.type,i),i.apply(this,arguments);
}),t&&(c=function(n){
var r,o=e(n.target).closest(t,d).get(0);
return o&&o!==d?(r=e.extend(f(n),{
currentTarget:o,
liveFired:d
}),(u||i).apply(o,[r].concat(l.call(arguments,1)))):void 0;
}),a(d,n,i,r,t,c||u);
}));
},e.fn.off=function(n,t,r){
var i=this;
return n&&!h(n)?(e.each(n,function(e,n){
i.off(e,t,n);
}),i):(h(t)||v(r)||r===!1||(r=t,t=p),r===!1&&(r=z),i.each(function(){
s(this,n,r,t);
}));
},e.fn.trigger=function(n,t){
return n=h(n)||e.isPlainObject(n)?e.Event(n):c(n),n._args=t,this.each(function(){
"dispatchEvent"in this?this.dispatchEvent(n):e(this).triggerHandler(n,t);
});
},e.fn.triggerHandler=function(n,r){
var i,o;
return this.each(function(u,a){
i=f(h(n)?e.Event(n):n),i._args=r,i.target=a,e.each(t(a,n.type||n),function(e,n){
return o=n.proxy(i),i.isImmediatePropagationStopped()?!1:void 0;
});
}),o;
},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(n){
e.fn[n]=function(e){
return e?this.bind(n,e):this.trigger(n);
};
}),["focus","blur"].forEach(function(n){
e.fn[n]=function(e){
return e?this.bind(n,e):this.each(function(){
try{
this[n]();
}catch(e){}
}),this;
};
}),e.Event=function(e,n){
h(e)||(n=e,e=n.type);
var t=document.createEvent(m[e]||"Events"),r=!0;
if(n)for(var i in n)"bubbles"==i?r=!!n[i]:t[i]=n[i];
return t.initEvent(e,r,!0),c(t);
};
}(Zepto);
});define("biz_wap/zepto/zepto.js",[],function(){
"use strict";
var t=function(){
function t(t){
return null==t?String(t):J[W.call(t)]||"object";
}
function n(n){
return"function"==t(n);
}
function e(t){
return null!=t&&t==t.window;
}
function i(t){
return null!=t&&t.nodeType==t.DOCUMENT_NODE;
}
function r(n){
return"object"==t(n);
}
function o(t){
return r(t)&&!e(t)&&Object.getPrototypeOf(t)==Object.prototype;
}
function s(t){
return t instanceof Array;
}
function u(t){
return"number"==typeof t.length;
}
function c(t){
return P.call(t,function(t){
return null!=t;
});
}
function a(t){
return t.length>0?C.fn.concat.apply([],t):t;
}
function l(t){
return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase();
}
function f(t){
return t in M?M[t]:M[t]=new RegExp("(^|\\s)"+t+"(\\s|$)");
}
function h(t,n){
return"number"!=typeof n||z[l(t)]?n:n+"px";
}
function p(t){
var n,e;
return j[t]||(n=L.createElement(t),L.body.appendChild(n),e=getComputedStyle(n,"").getPropertyValue("display"),
n.parentNode.removeChild(n),"none"==e&&(e="block"),j[t]=e),j[t];
}
function d(t){
return"children"in t?$.call(t.children):C.map(t.childNodes,function(t){
return 1==t.nodeType?t:void 0;
});
}
function g(t,n,e){
for(E in n)e&&(o(n[E])||s(n[E]))?(o(n[E])&&!o(t[E])&&(t[E]={}),s(n[E])&&!s(t[E])&&(t[E]=[]),
g(t[E],n[E],e)):n[E]!==x&&(t[E]=n[E]);
}
function m(t,n){
return null==n?C(t):C(t).filter(n);
}
function v(t,e,i,r){
return n(e)?e.call(t,i,r):e;
}
function y(t,n,e){
null==e?t.removeAttribute(n):t.setAttribute(n,e);
}
function b(t,n){
var e=t.className,i=e&&e.baseVal!==x;
return n===x?i?e.baseVal:e:void(i?e.baseVal=n:t.className=n);
}
function w(t){
var n;
try{
return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(n=Number(t))?/^[\[\{]/.test(t)?C.parseJSON(t):t:n):t;
}catch(e){
return t;
}
}
function N(t,n){
n(t);
for(var e in t.childNodes)N(t.childNodes[e],n);
}
var x,E,C,O,T,S,A=[],$=A.slice,P=A.filter,L=window.document,j={},M={},z={
"column-count":1,
columns:1,
"font-weight":1,
"line-height":1,
opacity:1,
"z-index":1,
zoom:1
},Z=/^\s*<(\w+|!)[^>]*>/,q=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,_=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,k=/^(?:body|html)$/i,B=/([A-Z])/g,R=["val","css","html","text","data","width","height","offset"],V=["after","prepend","before","append"],F=L.createElement("table"),H=L.createElement("tr"),I={
tr:L.createElement("tbody"),
tbody:F,
thead:F,
tfoot:F,
td:H,
th:H,
"*":L.createElement("div")
},U=/complete|loaded|interactive/,D=/^[\w-]*$/,J={},W=J.toString,X={},Y=L.createElement("div"),G={
tabindex:"tabIndex",
readonly:"readOnly",
"for":"htmlFor",
"class":"className",
maxlength:"maxLength",
cellspacing:"cellSpacing",
cellpadding:"cellPadding",
rowspan:"rowSpan",
colspan:"colSpan",
usemap:"useMap",
frameborder:"frameBorder",
contenteditable:"contentEditable"
};
return X.matches=function(t,n){
if(!n||!t||1!==t.nodeType)return!1;
var e=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;
if(e)return e.call(t,n);
var i,r=t.parentNode,o=!r;
return o&&(r=Y).appendChild(t),i=~X.qsa(r,n).indexOf(t),o&&Y.removeChild(t),i;
},T=function(t){
return t.replace(/-+(.)?/g,function(t,n){
return n?n.toUpperCase():"";
});
},S=function(t){
return P.call(t,function(n,e){
return t.indexOf(n)==e;
});
},X.fragment=function(t,n,e){
var i,r,s;
return q.test(t)&&(i=C(L.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(_,"<$1></$2>")),
n===x&&(n=Z.test(t)&&RegExp.$1),n in I||(n="*"),s=I[n],s.innerHTML=""+t,i=C.each($.call(s.childNodes),function(){
s.removeChild(this);
})),o(e)&&(r=C(i),C.each(e,function(t,n){
R.indexOf(t)>-1?r[t](n):r.attr(t,n);
})),i;
},X.Z=function(t,n){
return t=t||[],t.__proto__=C.fn,t.selector=n||"",t;
},X.isZ=function(t){
return t instanceof X.Z;
},X.init=function(t,e){
var i;
if(!t)return X.Z();
if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))i=X.fragment(t,RegExp.$1,e),
t=null;else{
if(e!==x)return C(e).find(t);
i=X.qsa(L,t);
}else{
if(n(t))return C(L).ready(t);
if(X.isZ(t))return t;
if(s(t))i=c(t);else if(r(t))i=[t],t=null;else if(Z.test(t))i=X.fragment(t.trim(),RegExp.$1,e),
t=null;else{
if(e!==x)return C(e).find(t);
i=X.qsa(L,t);
}
}
return X.Z(i,t);
},C=function(t,n){
return X.init(t,n);
},C.extend=function(t){
var n,e=$.call(arguments,1);
return"boolean"==typeof t&&(n=t,t=e.shift()),e.forEach(function(e){
g(t,e,n);
}),t;
},X.qsa=function(t,n){
var e,r="#"==n[0],o=!r&&"."==n[0],s=r||o?n.slice(1):n,u=D.test(s);
return i(t)&&u&&r?(e=t.getElementById(s))?[e]:[]:1!==t.nodeType&&9!==t.nodeType?[]:$.call(u&&!r?o?t.getElementsByClassName(s):t.getElementsByTagName(n):t.querySelectorAll(n));
},C.contains=function(t,n){
return t!==n&&t.contains(n);
},C.type=t,C.isFunction=n,C.isWindow=e,C.isArray=s,C.isPlainObject=o,C.isEmptyObject=function(t){
var n;
for(n in t)return!1;
return!0;
},C.inArray=function(t,n,e){
return A.indexOf.call(n,t,e);
},C.camelCase=T,C.trim=function(t){
return null==t?"":String.prototype.trim.call(t);
},C.uuid=0,C.support={},C.expr={},C.map=function(t,n){
var e,i,r,o=[];
if(u(t))for(i=0;i<t.length;i++)e=n(t[i],i),null!=e&&o.push(e);else for(r in t)e=n(t[r],r),
null!=e&&o.push(e);
return a(o);
},C.each=function(t,n){
var e,i;
if(u(t)){
for(e=0;e<t.length;e++)if(n.call(t[e],e,t[e])===!1)return t;
}else for(i in t)if(n.call(t[i],i,t[i])===!1)return t;
return t;
},C.grep=function(t,n){
return P.call(t,n);
},window.JSON&&(C.parseJSON=JSON.parse),C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){
J["[object "+n+"]"]=n.toLowerCase();
}),C.fn={
forEach:A.forEach,
reduce:A.reduce,
push:A.push,
sort:A.sort,
indexOf:A.indexOf,
concat:A.concat,
map:function(t){
return C(C.map(this,function(n,e){
return t.call(n,e,n);
}));
},
slice:function(){
return C($.apply(this,arguments));
},
ready:function(t){
return U.test(L.readyState)&&L.body?t(C):L.addEventListener("DOMContentLoaded",function(){
t(C);
},!1),this;
},
get:function(t){
return t===x?$.call(this):this[t>=0?t:t+this.length];
},
toArray:function(){
return this.get();
},
size:function(){
return this.length;
},
remove:function(){
return this.each(function(){
null!=this.parentNode&&this.parentNode.removeChild(this);
});
},
each:function(t){
return A.every.call(this,function(n,e){
return t.call(n,e,n)!==!1;
}),this;
},
filter:function(t){
return n(t)?this.not(this.not(t)):C(P.call(this,function(n){
return X.matches(n,t);
}));
},
add:function(t,n){
return C(S(this.concat(C(t,n))));
},
is:function(t){
return this.length>0&&X.matches(this[0],t);
},
not:function(t){
var e=[];
if(n(t)&&t.call!==x)this.each(function(n){
t.call(this,n)||e.push(this);
});else{
var i="string"==typeof t?this.filter(t):u(t)&&n(t.item)?$.call(t):C(t);
this.forEach(function(t){
i.indexOf(t)<0&&e.push(t);
});
}
return C(e);
},
has:function(t){
return this.filter(function(){
return r(t)?C.contains(this,t):C(this).find(t).size();
});
},
eq:function(t){
return-1===t?this.slice(t):this.slice(t,+t+1);
},
first:function(){
var t=this[0];
return t&&!r(t)?t:C(t);
},
last:function(){
var t=this[this.length-1];
return t&&!r(t)?t:C(t);
},
find:function(t){
var n,e=this;
return n="object"==typeof t?C(t).filter(function(){
var t=this;
return A.some.call(e,function(n){
return C.contains(n,t);
});
}):1==this.length?C(X.qsa(this[0],t)):this.map(function(){
return X.qsa(this,t);
});
},
closest:function(t,n){
var e=this[0],r=!1;
for("object"==typeof t&&(r=C(t));e&&!(r?r.indexOf(e)>=0:X.matches(e,t));)e=e!==n&&!i(e)&&e.parentNode;
return C(e);
},
parents:function(t){
for(var n=[],e=this;e.length>0;)e=C.map(e,function(t){
return(t=t.parentNode)&&!i(t)&&n.indexOf(t)<0?(n.push(t),t):void 0;
});
return m(n,t);
},
parent:function(t){
return m(S(this.pluck("parentNode")),t);
},
children:function(t){
return m(this.map(function(){
return d(this);
}),t);
},
contents:function(){
return this.map(function(){
return $.call(this.childNodes);
});
},
siblings:function(t){
return m(this.map(function(t,n){
return P.call(d(n.parentNode),function(t){
return t!==n;
});
}),t);
},
empty:function(){
return this.each(function(){
this.innerHTML="";
});
},
pluck:function(t){
return C.map(this,function(n){
return n[t];
});
},
show:function(){
return this.each(function(){
"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName));
});
},
replaceWith:function(t){
return this.before(t).remove();
},
wrap:function(t){
var e=n(t);
if(this[0]&&!e)var i=C(t).get(0),r=i.parentNode||this.length>1;
return this.each(function(n){
C(this).wrapAll(e?t.call(this,n):r?i.cloneNode(!0):i);
});
},
wrapAll:function(t){
if(this[0]){
C(this[0]).before(t=C(t));
for(var n;(n=t.children()).length;)t=n.first();
C(t).append(this);
}
return this;
},
wrapInner:function(t){
var e=n(t);
return this.each(function(n){
var i=C(this),r=i.contents(),o=e?t.call(this,n):t;
r.length?r.wrapAll(o):i.append(o);
});
},
unwrap:function(){
return this.parent().each(function(){
C(this).replaceWith(C(this).children());
}),this;
},
clone:function(){
return this.map(function(){
return this.cloneNode(!0);
});
},
hide:function(){
return this.css("display","none");
},
toggle:function(t){
return this.each(function(){
var n=C(this);
(t===x?"none"==n.css("display"):t)?n.show():n.hide();
});
},
prev:function(t){
return C(this.pluck("previousElementSibling")).filter(t||"*");
},
next:function(t){
return C(this.pluck("nextElementSibling")).filter(t||"*");
},
html:function(t){
return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(n){
var e=this.innerHTML;
C(this).empty().append(v(this,t,n,e));
});
},
text:function(t){
return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){
this.textContent=t===x?"":""+t;
});
},
attr:function(t,n){
var e;
return"string"==typeof t&&n===x?0==this.length||1!==this[0].nodeType?x:"value"==t&&"INPUT"==this[0].nodeName?this.val():!(e=this[0].getAttribute(t))&&t in this[0]?this[0][t]:e:this.each(function(e){
if(1===this.nodeType)if(r(t))for(E in t)y(this,E,t[E]);else y(this,t,v(this,n,e,this.getAttribute(t)));
});
},
removeAttr:function(t){
return this.each(function(){
1===this.nodeType&&y(this,t);
});
},
prop:function(t,n){
return t=G[t]||t,n===x?this[0]&&this[0][t]:this.each(function(e){
this[t]=v(this,n,e,this[t]);
});
},
data:function(t,n){
var e=this.attr("data-"+t.replace(B,"-$1").toLowerCase(),n);
return null!==e?w(e):x;
},
val:function(t){
return 0===arguments.length?this[0]&&(this[0].multiple?C(this[0]).find("option").filter(function(){
return this.selected;
}).pluck("value"):this[0].value):this.each(function(n){
this.value=v(this,t,n,this.value);
});
},
offset:function(t){
if(t)return this.each(function(n){
var e=C(this),i=v(this,t,n,e.offset()),r=e.offsetParent().offset(),o={
top:i.top-r.top,
left:i.left-r.left
};
"static"==e.css("position")&&(o.position="relative"),e.css(o);
});
if(0==this.length)return null;
var n=this[0].getBoundingClientRect();
return{
left:n.left+window.pageXOffset,
top:n.top+window.pageYOffset,
width:Math.round(n.width),
height:Math.round(n.height)
};
},
css:function(n,e){
if(arguments.length<2){
var i=this[0],r=getComputedStyle(i,"");
if(!i)return;
if("string"==typeof n)return i.style[T(n)]||r.getPropertyValue(n);
if(s(n)){
var o={};
return C.each(s(n)?n:[n],function(t,n){
o[n]=i.style[T(n)]||r.getPropertyValue(n);
}),o;
}
}
var u="";
if("string"==t(n))e||0===e?u=l(n)+":"+h(n,e):this.each(function(){
this.style.removeProperty(l(n));
});else for(E in n)n[E]||0===n[E]?u+=l(E)+":"+h(E,n[E])+";":this.each(function(){
this.style.removeProperty(l(E));
});
return this.each(function(){
this.style.cssText+=";"+u;
});
},
index:function(t){
return t?this.indexOf(C(t)[0]):this.parent().children().indexOf(this[0]);
},
hasClass:function(t){
return t?A.some.call(this,function(t){
return this.test(b(t));
},f(t)):!1;
},
addClass:function(t){
return t?this.each(function(n){
O=[];
var e=b(this),i=v(this,t,n,e);
i.split(/\s+/g).forEach(function(t){
C(this).hasClass(t)||O.push(t);
},this),O.length&&b(this,e+(e?" ":"")+O.join(" "));
}):this;
},
removeClass:function(t){
return this.each(function(n){
return t===x?b(this,""):(O=b(this),v(this,t,n,O).split(/\s+/g).forEach(function(t){
O=O.replace(f(t)," ");
}),void b(this,O.trim()));
});
},
toggleClass:function(t,n){
return t?this.each(function(e){
var i=C(this),r=v(this,t,e,b(this));
r.split(/\s+/g).forEach(function(t){
(n===x?!i.hasClass(t):n)?i.addClass(t):i.removeClass(t);
});
}):this;
},
scrollTop:function(t){
if(this.length){
var n="scrollTop"in this[0];
return t===x?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){
this.scrollTop=t;
}:function(){
this.scrollTo(this.scrollX,t);
});
}
},
scrollLeft:function(t){
if(this.length){
var n="scrollLeft"in this[0];
return t===x?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){
this.scrollLeft=t;
}:function(){
this.scrollTo(t,this.scrollY);
});
}
},
position:function(){
if(this.length){
var t=this[0],n=this.offsetParent(),e=this.offset(),i=k.test(n[0].nodeName)?{
top:0,
left:0
}:n.offset();
return e.top-=parseFloat(C(t).css("margin-top"))||0,e.left-=parseFloat(C(t).css("margin-left"))||0,
i.top+=parseFloat(C(n[0]).css("border-top-width"))||0,i.left+=parseFloat(C(n[0]).css("border-left-width"))||0,
{
top:e.top-i.top,
left:e.left-i.left
};
}
},
offsetParent:function(){
return this.map(function(){
for(var t=this.offsetParent||L.body;t&&!k.test(t.nodeName)&&"static"==C(t).css("position");)t=t.offsetParent;
return t;
});
}
},C.fn.detach=C.fn.remove,["width","height"].forEach(function(t){
var n=t.replace(/./,function(t){
return t[0].toUpperCase();
});
C.fn[t]=function(r){
var o,s=this[0];
return r===x?e(s)?s["inner"+n]:i(s)?s.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each(function(n){
s=C(this),s.css(t,v(this,r,n,s[t]()));
});
};
}),V.forEach(function(n,e){
var i=e%2;
C.fn[n]=function(){
var n,r,o=C.map(arguments,function(e){
return n=t(e),"object"==n||"array"==n||null==e?e:X.fragment(e);
}),s=this.length>1;
return o.length<1?this:this.each(function(t,n){
r=i?n:n.parentNode,n=0==e?n.nextSibling:1==e?n.firstChild:2==e?n:null,o.forEach(function(t){
if(s)t=t.cloneNode(!0);else if(!r)return C(t).remove();
N(r.insertBefore(t,n),function(t){
null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML);
});
});
});
},C.fn[i?n+"To":"insert"+(e?"Before":"After")]=function(t){
return C(t)[n](this),this;
};
}),X.Z.prototype=C.fn,X.uniq=S,X.deserializeValue=w,C.zepto=X,C;
}();
window.Zepto=t,void 0===window.$&&(window.$=t);
});;define('page/pages/video.css', [], function(require, exports, module) {
	return "html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{line-height:1.6;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:16px}body,h1,h2,h3,h4,h5,p,ul,ol,dl,dd,fieldset,textarea{margin:0}fieldset,legend,textarea,input,button{padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0;*font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}ul,ol{padding-left:0;list-style-type:none}a img,fieldset{border:0}a{text-decoration:none}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;line-height:1.6}a{color:#607fa6;text-decoration:none}.tips_global{color:#8c8c8c}.tc{text-align:center}.tr{text-align:right}.line_wrp{line-height:58px;color:#607fa6}body,html{height:100%;width:100%;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.none{display:none}.clearfix:after{content:\" \";display:block;clear:both;height:0}.clearfix{zoom:1}.wrp_pop_tips{width:100%;height:100%;background-color:#000;position:absolute;left:0;top:0;z-index:20;line-height:100%;text-align:center}.wrp_pop_tips .pop_tips{position:absolute;top:50%;left:0;margin-top:-36px;display:inline-block;padding:15px 0;text-align:center;color:#fff;width:100%}.wrp_pop_tips .pop_tips .error_code{display:block;font-style:normal;font-size:12px;color:#888;margin-top:10px}.wrp_load_failed{width:100%;height:100%;background-color:#000;position:absolute;left:0;top:0;z-index:20;line-height:100%;text-align:center}.wrp_load_failed .wrp_icon_info{width:60px;height:60px;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%;border:1px solid #fff;position:absolute;left:50%;top:50%;display:block;margin-left:-30px;margin-top:-50px}.wrp_load_failed .wrp_icon_info:after{content:\"\";position:absolute;left:50%;top:50%;display:block;width:50px;height:50px;margin-left:-25px;margin-top:-25px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_load_faild27d36a.png) no-repeat 0 0;-webkit-background-size:100% auto;background-size:100% auto}.wrp_load_failed p{width:100%;height:60px;position:absolute;top:50%;display:block;margin-top:30px;color:#fff}.page_video{max-height:100%;position:relative;background-color:#000}.page_video .wrp_loading{width:100%;height:100%;position:absolute;left:0;top:0;z-index:8}.page_video .wrp_loading .svg_loader{position:absolute;left:50%;top:50%;margin-left:-30px;margin-top:-30px}.page_video .wrp_loading.start_loading .mid_opr{width:100%;height:100%;top:0;left:0;bottom:0;right:0;margin:0}.page_video .mid_opr{width:52px;height:52px;position:absolute;left:50%;top:50%;margin-left:-26px;margin-top:-26px;z-index:10;background-color:rgba(0,0,0,0.5);text-align:center;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;color:#fff}.page_video .mid_opr .spinner{transform:scale(0.7);-webkit-transform:scale(0.7);-moz-transform:scale(0.7);-ms-transform:scale(0.7)}.page_video .mid_opr .icon_mid_play{display:inline-block;width:0;height:0;margin-top:25px;margin-left:25px;border-width:14px 25px;overflow:hidden;border-color:transparent transparent transparent #fff;border-style:dotted dotted dotted solid}.page_video .mid_opr .icon_mid_speed_play{display:inline-block;width:35px;height:20px;margin-top:27px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_speed_play27d36a.png) no-repeat 0 0;-webkit-background-size:100% auto;background-size:100% auto}.page_video .mid_opr .video_length{color:#cbcbcb;font-size:12px}.page_video .mid_opr .video_length .played_time{color:#fff;font-weight:400}.page_video .mid_opr .video_length em{margin:0 2px}.page_video .mid_opr.fast_pre_next{width:132px;height:52px;border-radius:3px;margin-left:-66px;margin-top:-26px;background-color:rgba(0,0,0,0.5)}.page_video .mid_opr.fast_pre_next .video_length{padding-top:10px;padding-bottom:7px;font-weight:300}.page_video .mid_opr .video_processor_bar{position:relative;margin:0 auto;width:106px;height:3px;border-radius:2px;background-color:rgba(0,0,0,0.4);text-align:left}.page_video .mid_opr .processor_bar_inner{position:absolute;display:inline-block;width:106px;height:3px;border-radius:2px;background-color:#09bb07;opacity:.9}.page_video .mid_opr.next .icon_mid_speed_play{transform:rotate(180deg);-webkit-transform:rotate(180deg)}.page_video .full_screen_opr{z-index:12;text-align:center;position:absolute;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,0.5)}.page_video .full_screen_opr .icon_mid_play{display:inline-block;width:0;height:0;margin-top:25px;margin-left:25px;border-width:14px 25px;overflow:hidden;border-color:transparent transparent transparent #fff;border-style:dotted dotted dotted solid}.page_video .full_screen_opr .video_length{color:#fefefe;font-size:12px}.page_video .full_screen_opr .video_length .played_time{color:#fff;font-weight:400}.page_video .full_screen_opr .video_length em{margin:0 2px}.page_video .full_screen_opr .mid_play_box{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%)}.page_video .full_screen_opr .mid_play_box .video_length{font-size:14px;font-weight:300}.page_video .full_screen_opr .mid_play_box .video_length:before{content:\"\u603b\u65f6\u957f\";position:absolute;left:-9999em}.page_video .poster_cover{text-align:center;position:absolute;overflow:hidden;left:0;top:0;z-index:7;width:100%;height:100%;-webkit-background-size:contain;background-size:contain;background-position:50% 50%;background-repeat:no-repeat}.page_video .poster_cover img{height:100%;width:100%;position:absolute;left:0;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)}.page_video .poster_cover_mask{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.35)}.page_video .continue_play{position:absolute;left:0;top:0;right:0;bottom:0;z-index:11;color:#fff;font-size:14px;background-color:#000}.page_video .continue_play .continue_opr{position:absolute;text-align:right;bottom:15px;right:4%;z-index:2}.page_video .continue_play .continue_opr .btn_replay{color:#fff}.page_video .continue_play .continue_opr .icon_replay{display:inline-block;width:12px;height:13px;margin-right:5px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_replay27d36a.png) no-repeat 0 0;-webkit-background-size:100% auto;background-size:100% auto;vertical-align:middle}.page_video .continue_play .continue_nav{position:absolute;z-index:3;bottom:15px;left:50%;margin-left:-20px;width:40px}.page_video .continue_play .continue_nav .nav_dot{width:4px;height:4px;font-size:0;text-indent:-999em;display:inline-block;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%;border:1px solid #949494;margin-right:3px}.page_video .continue_play .continue_nav .nav_dot.current{background-color:#fff;border-color:#fff}.page_video .continue_play .tit_desc{width:94%;position:absolute;height:150px;top:50%;margin-top:-98px;left:50%;margin-left:-47%;color:#959494;text-align:left}.page_video .continue_play .tit_desc span{display:block;border-bottom:1px solid #2c2c2c;padding-bottom:8px}.page_video .continue_play .wrp_video_continue{position:relative;height:100%;left:0;top:0}.page_video .continue_play .dl_video_continue{position:absolute;height:100%;left:0;right:0;top:0;z-index:1}.page_video .continue_play .dd_continue_inner{width:100%;position:relative;top:50%;height:150px;margin-top:-68px;text-align:center;z-index:0}.page_video .continue_play .dd_continue_inner .video_list{display:table;width:94%;text-align:left;margin:15px auto 0;font-size:12px}.page_video .continue_play .dd_continue_inner .video_list .video_item{height:35px;margin-bottom:15px}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item{display:block;position:relative;color:#fff}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:60px;height:35px;position:absolute;left:0;top:0}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{padding-left:70px;margin-top:-5px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;box-sizing:border-box;-webkit-box-sizing:border-box}.page_video .continue_play .dd_continue_inner .video_list .video_item:last-child{margin-bottom:0}.page_video .video_mask{width:100%;height:100%;background-color:rgba(0,0,0,0.5);position:absolute;left:0;top:0;z-index:1}.page_video .inner{position:relative;width:100%;height:100%;z-index:6;overflow:hidden}.page_video .inner .video_poster{width:100%;height:100%}.page_video .inner .video_poster video{width:100%;height:100%;vertical-align:middle;position:relative;z-index:1;padding:0;top:0}.page_video .inner .video_poster .video_mask{width:100%;height:100%;vertical-align:middle;position:absolute;z-index:2;background-color:transparent}.page_video .video_opr{background-color:rgba(0,0,0,0.6);color:#fff;z-index:9;position:absolute;left:0;right:0;bottom:0;color:#cbcbcb;height:50px;font-size:14px}.page_video .video_opr .opr_inner{padding:0 15px;position:relative}.page_video .video_opr .opr_inner .opr_inner_fl{position:absolute;left:15px;top:0}.page_video .video_opr .opr_inner .opr_inner_fr{position:absolute;right:15px;top:0}.page_video .video_opr .opr_inner .wrp_play_bar{padding:24px 90px 23px 82px;box-sizing:border-box;-webkit-box-sizing:border-box}.page_video .video_opr .opr_inner_fl .switch{display:inline-block;vertical-align:middle;padding:16px 12px 12px 0;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-appearance:none}.page_video .video_opr .opr_inner_fl .switch .btn_opr{width:15px;height:18px;display:inline-block;text-indent:-999em}.page_video .video_opr .opr_inner_fl .switch.switch_on .btn_opr{background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_play_small27d36a.png) no-repeat 0 0;-webkit-background-size:100% auto;background-size:100% auto}.page_video .video_opr .opr_inner_fl .switch.switch_off .btn_opr{background:transparent url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAYAAACe0YppAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw\/eHBhY2tldCBiZWdpbj0i77u\/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTg1RjJGODBGQTBBMTFFNEI2QUJCQjU2OEZFMTFENzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTg1RjJGODFGQTBBMTFFNEI2QUJCQjU2OEZFMTFENzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxODVGMkY3RUZBMEExMUU0QjZBQkJCNTY4RkUxMUQ3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxODVGMkY3RkZBMEExMUU0QjZBQkJCNTY4RkUxMUQ3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI\/PmECzPoAAABRSURBVHja7NgxDgAgCEPRYjye1\/V8qIOjii4uvwkTKW\/H3F2L1D5jWXSXUM828FzYJRzqJX0KMDAwMDAwMDAwMDAwMDCwlA8vBXu4Geo1AQYA08wNr4Eto7IAAAAASUVORK5CYII=) no-repeat 0 0;-webkit-background-size:100% auto;background-size:100% auto}.page_video .video_opr .opr_inner_fl .played_time{display:inline-block;vertical-align:middle;color:#fff;font-size:12px;padding:14px 0;font-weight:300}.page_video .video_opr .wrp_play_bar .wrp_progress{position:relative;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.page_video .video_opr .wrp_play_bar .wrp_progress .progress_bar{height:3px;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;background-color:#454545;position:relative}.page_video .video_opr .wrp_play_bar .wrp_progress .progress_bar .played_bar{position:absolute;height:3px;left:0;top:0;background-color:#fff;z-index:4;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px}.page_video .video_opr .wrp_play_bar .wrp_progress .progress_bar .buffer_bar{position:absolute;height:3px;left:0;top:0;background-color:#a2a2a2;z-index:3;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px}.page_video .video_opr .wrp_play_bar .wrp_progress .progress_bar .wrp_speed_dot{position:absolute;left:-1px;top:50%;margin-top:-10px;width:20px;height:20px;line-height:15px;z-index:5}.page_video .video_opr .wrp_play_bar .wrp_progress .progress_bar .wrp_speed_dot .speed_dot{width:12px;height:12px;position:absolute;top:50%;margin-top:-6px;background-color:#fff;border-radius:100%;-moz-border-radius:100%;-webkit-border-radius:100%;margin-left:-1px}.page_video .video_opr .opr_inner_fr .total_time{color:#fff;font-size:12px;display:inline-block;padding:14px 0;top:-1px;position:relative;font-weight:300}.page_video .video_opr .opr_inner_fr .screenSize_control{display:inline-block;vertical-align:middle;padding:14px 0 14px 8px;-webkit-appearance:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.page_video .video_opr .opr_inner_fr .screenSize_control .icon_control{width:18px;height:18px;display:inline-block;text-indent:-999em;background:transparent url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAYVJREFUWAnt2DtOwzAYB\/DmsaGoGwdAygHyYunOAkdAnIudjZkuSHCAJkuy0gvAxkgUKXz\/CEskcRLbdWwGLEVuP79+tVvb6mbzx5IDT1EU723bnsvYHMfZp2l6I9NGpK6LSrIYkY5V6\/jDhvTJPwl4lWXZYVhm4n03Q2ygH8yW8uc8zy9Z3GTeA2FmbKN6ICyTbVQPhKWxjRqBbKO4IJuoSZAt1CzIBmoRZBolBDKJ6kC0Ge7xYOC5xNsSqqq6mGsjW9ad9rKNcKzgeKFNdOt53l0cxw+yfUzVVwKhM8xM0zS7IAgewzD8mhrgP657BpSXjAcpy\/Ksrutb13VfkiQ58uosxYR\/9ksdoRwYyu7py16o3qe0gnzff1W5T9Gd\/gkPPpRWUBRFbyr3KWpzjUc7CB3yNk+Z5dM6QwAhnYJaBXQKajWQKmpVkApqdZAsyghIBmUMJIoyCppCIc6ScRAGHu5TDIN89O\/H70LV1ziX2FEw1wfVGRVbmaGRggJ0KH\/w4tZj37PhT+ObZtthAAAAAElFTkSuQmCC) no-repeat 0 0;-webkit-background-size:18px 18px;background-size:18px 18px}.full_mask{position:fixed;bottom:0;top:0;left:0;right:0;z-index:1;background-color:#000;display:none}.full_screen_mv .page_video{position:absolute;left:50%;top:50%;margin-left:-150px;margin-top:-100px;background-color:#000;z-index:10}.full_screen_mv .page_video .inner{overflow:visible;position:absolute;left:0;top:0}.full_screen_mv .page_video .inner .video_poster video{background-color:#000;max-height:100%;max-width:100%;display:inline-block}.full_screen_mv .page_video .video_opr{position:fixed;bottom:0}.full_screen_mv .page_video .video_opr .screenSize_control .icon_control{background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/video\/icon_rebackplay@2x27d36a.png) no-repeat 0 0;-webkit-background-size:100% auto;background-size:100% auto}.full_screen_mv .page_content{height:100%;overflow:hidden}.full_screen_mv .full_mask{display:block}@media all and (orientation:portrait){.full_screen_mv .opr_fade_out{-webkit-animation:opr_fade_out .4s ease-in-out 1}.full_screen_mv .opr_fade_in{-webkit-animation:opr_fade_in .4s ease-in-out 1}@-webkit-keyframes opr_fade_out{0%{filter:alpha(opacity = 100);-moz-opacity:1;-khtml-opacity:1;opacity:1}100%{filter:alpha(opacity = 0);-moz-opacity:0;-khtml-opacity:0;opacity:0}}@-webkit-keyframes opr_fade_in{0%{filter:alpha(opacity = 0);-moz-opacity:0;-khtml-opacity:0;opacity:0}100%{bottom:0;filter:alpha(opacity = 100);-moz-opacity:1;-khtml-opacity:1;opacity:1}}}@media all and (orientation:landscape){.full_screen_mv .page_video .video_opr .opr_inner{padding:0 25px}.full_screen_mv .page_video .video_opr .opr_inner .opr_inner_fl{left:25px}.full_screen_mv .page_video .video_opr .opr_inner .opr_inner_fr{right:25px}}.interact_video{text-align:right;background-color:#fdfdfd;line-height:2.5;overflow:hidden;font-size:11px;padding:0 15px;font-size:14px;position:relative;border-bottom-left-radius:2px;-moz-border-radius-bottomleft:2px;-webkit-border-bottom-left-radius:2px;border-bottom-right-radius:2px;-moz-border-radius-bottomright:2px;-webkit-border-bottom-right-radius:2px}.interact_video:before{content:\" \";position:absolute;top:0;left:0;border:1px solid #ececec;border-bottom-left-radius:4px;-moz-border-radius-bottomleft:4px;-webkit-border-bottom-left-radius:4px;border-bottom-right-radius:4px;-moz-border-radius-bottomright:4px;-webkit-border-bottom-right-radius:4px;border-top:0;width:200%;height:200%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-webkit-transform:scale(0.5);transform:scale(0.5);-webkit-transform-origin:0 0;transform-origin:0 0}.interact_video .access_original{-webkit-tap-highlight-color:rgba(0,0,0,0);color:#959494;position:absolute;left:0;right:0;top:0;bottom:0;text-align:right;padding-right:15px}.interact_video .access_original:after{content:\" \";display:inline-block;height:7px;width:7px;border-width:1px 1px 0 0;border-color:#c8c7cd;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:-1px;margin-left:.3em}.interact_video .video_original{text-align:left;padding-left:15px;padding-right:25px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal}.interact_video .video_original:after{position:absolute;top:50%;margin-top:-4px;right:15px}.interact_video .video_resource{float:left;color:#959494}.interact_video .inter_opr{float:right;color:#607fa6}.interact_video .inter_opr .praise_area{padding-left:10px;float:right}.interact_video .inter_opr .btn_detail{display:inline-block;text-align:center;position:relative}.interact_video .inter_opr .love_num{font-size:13px;line-height:13px}.interact_video .inter_opr .icon_love{width:12px;height:12px;vertical-align:middle;display:inline-block;vertical-align:0;position:relative;top:1px;background:transparent url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/qqmusic\/icon_love_mini_sprite.2x25ded2.png) no-repeat 0 0;-webkit-background-size:12px auto;background-size:12px auto}.interact_video .inter_opr .loved .icon_love{background-image:url(\/mmbizwap\/zh_CN\/htmledition\/images\/icon\/appmsg\/qqmusic\/icon_love_mini_sprite.2x25ded2.png);background-position:0 -17px}.pages_common_area{overflow:hidden}.tc{text-align:center}.tr{text-align:right}.tips_global{color:#8c8c8c}.video_info_area{margin-top:1em}.video_info_area.empty_data .praise_access_wrp{float:none}.video_info_area.empty_data .praise_user_list{padding:0}.video_info_area.empty_data .praise_access_wrp,.video_info_area.empty_data .comment_access_wrp{text-align:center}.video_info_area.empty_data .discuss_container{margin-right:15px;padding-right:0}.video_info_hd{overflow:hidden;font-size:14px;line-height:2.2em;padding:0 15px;position:relative}.video_info_hd:before{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #dfdfdd;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.video_info_bd{padding:0 0 0 15px}.video_extend_inner{padding-right:15px}.no_in_mm{padding-top:2em}.video_abstract{position:relative;margin-top:10px;font-size:14px;padding:15px}.video_abstract .video_title{font-size:16px;font-weight:400;font-style:normal}.video_abstract .inner_abstract{padding-top:10px;color:#8c8c8c;line-height:1.6;max-height:4.7em;overflow:hidden;margin-bottom:.5em;word-wrap:break-word;word-break:break-all;-webkit-transition:max-height .3s ease-in}.video_abstract .inner_abstract.hide{position:absolute;left:15px;right:15px;visibility:hidden;z-index:-1;max-height:none}.opr_fade_out{-webkit-animation:opr_fade_out .7s ease-in-out 1}.opr_fade_in{-webkit-animation:opr_fade_in .7s ease-in-out 1}@-webkit-keyframes opr_fade_out{0%{filter:alpha(opacity = 100);-moz-opacity:1;-khtml-opacity:1;opacity:1}100%{filter:alpha(opacity = 0);-moz-opacity:0;-khtml-opacity:0;opacity:0}}@-webkit-keyframes opr_fade_in{0%{filter:alpha(opacity = 0);-moz-opacity:0;-khtml-opacity:0;opacity:0}100%{filter:alpha(opacity = 100);-moz-opacity:1;-khtml-opacity:1;opacity:1}}.video_pause_controll{position:absolute;z-index:12;left:0;top:0;width:100%;height:100%;display:none;background-color:rgba(0,0,0,0.5)}.video_pause_controll .btn_pause{position:absolute;left:50%;top:50%;z-index:10;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);text-align:center;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;color:#fff}.video_pause_controll .btn_pause .icon_pause{display:inline-block;font-size:0;width:0;height:0;margin-top:25px;margin-left:25px;margin-bottom:25px;border-width:14px 25px;overflow:hidden;border-color:transparent transparent transparent #fff;border-style:dotted dotted dotted solid}.btn_pause_accessibility{position:absolute;left:0;top:0;width:3px;height:3px;z-index:10000;overflow:hidden;color:transparent}.btn_pause_accessibility:before{content:\"\u64ad\u653e\u89c6\u9891\"}.btn_pause_accessibility.video_playing:before{content:\"\u6682\u505c\u64ad\u653e\"}.video_ad{position:absolute;z-index:13;right:0;top:0;width:100%;height:54px;text-align:right;padding-top:4px;padding-right:10px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;background-image:-webkit-gradient(linear,0 0,0 100%,from(rgba(51,51,51,0.43)),to(rgba(255,255,255,0)));background-image:-webkit-linear-gradient(top,rgba(51,51,51,0.43) 0,rgba(255,255,255,0) 100%);background-image:linear-gradient(to bottom,rgba(51,51,51,0.43) 0,rgba(255,255,255,0) 100%)}.video_ad_detail{position:absolute;z-index:14;right:0;bottom:0;width:100%;height:30px}.video_ad_detail .btn_ad_detail{position:absolute;right:10px;bottom:10px;background-color:rgba(37,37,37,0.7);padding:2px 10px;border-radius:4px;font-size:12px;color:#fff}.video_ad_detail .btn_ad_detail.primary{color:#09ba07;border:1px solid #09ba07;overflow:hidden}.video_ad_detail .btn_ad_detail.with_arrow{background-color:rgba(45,45,45,0.7);padding:0;line-height:2.3;min-width:98px;text-align:center}.video_ad_detail .btn_ad_detail.with_arrow:after{content:\" \";display:inline-block;height:7px;width:7px;border-width:1px 1px 0 0;border-color:#fff;border-style:solid;transform:matrix(0.71,0.71,-0.71,0.71,0,0);-ms-transform:matrix(0.71,0.71,-0.71,0.71,0,0);-webkit-transform:matrix(0.71,0.71,-0.71,0.71,0,0);position:relative;top:-2px;top:0;margin-top:-2px;margin-left:4px;vertical-align:middle}.video_ad_detail .btn_ad_detail.with_weapp{padding:0 10px;min-width:auto}.icon26_weapp_white{display:inline-block;width:14px;height:14px;background-image:url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAY1BMVEVHcEz\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/80LMUcAAAAIHRSTlMAfBg4AeNjmS\/2\/PDnrcyG1Qt1az8ys4MhUcLc6UWcl7QkidAAAADFSURBVHhetdFJqsMwEEVRWZ0luYm79E5y97\/Kz6cQQXaATPJGDw4UpZL6OuN8a+O9vuzFOACIk91IiORUpdgB6Pz13EAyBT0A\/1+0g66gCnppHtaCXvCUyQvEgmqopR1g+Ei2SnBQkuNs3hR6oNXynBMknWl0QBNEGsCNmTRwEtEt0If3wGU6qrwNqbLFhjlD3mZPERZpT3gVtIKX1m8P3oHTcjh4FGQSNOer74Bh84MVOTGoMnaKIs6oXS71Pa63eVS\/zR\/btROXGlgZggAAAABJRU5ErkJggg==);background-size:cover;background-repeat:no-repeat;vertical-align:middle;margin-right:4px}.video_ad_time_meta{font-size:12px;margin-left:.7em;padding-left:.7em;color:#fff;position:relative}.video_ad_time_meta:before{content:\" \";width:1px;height:10px;background-color:#fff;position:absolute;left:-2px;top:50%;margin-top:-5px}.video_ad_time_meta:first-child:before{display:none}.btn_close .left_time{color:#fcd037;position:relative;margin-right:10px;font-weight:400;font-style:normal}.imgad_cover{text-align:center;position:absolute;overflow:hidden;left:0;top:0;z-index:7;width:100%;height:100%;-webkit-background-size:contain;background-size:contain;background-position:50% 50%;background-repeat:no-repeat}.imgad_cover img{height:100%;width:100%}.imgad_cover_border{border:1px solid #d8d8d8;position:absolute;left:-1px;top:-1px;right:-1px;bottom:-1px}@media(min-device-width:480px){.page_video .continue_play .continue_inner .video_list{margin-top:20px}.page_video .continue_play .continue_inner .video_list .video_item{margin-bottom:20px}.page_video .continue_play .continue_inner{height:210px;margin-top:-105px}}@media(min-device-width:360px){.video_ad_time_meta{font-size:13px}.video_ad_detail .btn_ad_detail{font-size:14px}}@media only screen and (min-width:375px){.page_video .continue_play .tit_desc{margin-top:-120px}.page_video .continue_play .dd_continue_inner{margin-top:-88px}.page_video .continue_play .dd_continue_inner .video_list{font-size:14px}.page_video .continue_play .dd_continue_inner .video_list .video_item{height:50px}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:80px;height:50px}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{padding-left:95px}}@media only screen and (min-device-width:375px) and (max-device-width:667px) and (-webkit-min-device-pixel-ratio:2){.page_video .continue_play .continue_inner .video_list{margin-top:20px}.page_video .continue_play .continue_inner .video_list .video_item{margin-bottom:20px}.page_video .continue_play .continue_inner{height:210px;margin-top:-105px}}@media only screen and (min-device-width:414px) and (max-device-width:736px) and (-webkit-min-device-pixel-ratio:3){.page_video .continue_play .continue_inner .video_list{margin-top:20px}.page_video .continue_play .continue_inner .video_list .video_item{margin-bottom:20px}.page_video .continue_play .continue_inner{height:210px;margin-top:-105px}.page_video .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{font-size:14px}}@-webkit-keyframes opacity-60-25-0-12{0%{opacity:.25}0.01%{opacity:.25}0.02%{opacity:1}60.01%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-1-12{0%{opacity:.25}8.34333%{opacity:.25}8.35333%{opacity:1}68.3433%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-2-12{0%{opacity:.25}16.6767%{opacity:.25}16.6867%{opacity:1}76.6767%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-3-12{0%{opacity:.25}25.01%{opacity:.25}25.02%{opacity:1}85.01%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-4-12{0%{opacity:.25}33.3433%{opacity:.25}33.3533%{opacity:1}93.3433%{opacity:.25}100%{opacity:.25}}@-webkit-keyframes opacity-60-25-5-12{0%{opacity:.270958333333333}41.6767%{opacity:.25}41.6867%{opacity:1}1.67667%{opacity:.25}100%{opacity:.270958333333333}}@-webkit-keyframes opacity-60-25-6-12{0%{opacity:.375125}50.01%{opacity:.25}50.02%{opacity:1}10.01%{opacity:.25}100%{opacity:.375125}}@-webkit-keyframes opacity-60-25-7-12{0%{opacity:.479291666666667}58.3433%{opacity:.25}58.3533%{opacity:1}18.3433%{opacity:.25}100%{opacity:.479291666666667}}@-webkit-keyframes opacity-60-25-8-12{0%{opacity:.583458333333333}66.6767%{opacity:.25}66.6867%{opacity:1}26.6767%{opacity:.25}100%{opacity:.583458333333333}}@-webkit-keyframes opacity-60-25-9-12{0%{opacity:.687625}75.01%{opacity:.25}75.02%{opacity:1}35.01%{opacity:.25}100%{opacity:.687625}}@-webkit-keyframes opacity-60-25-10-12{0%{opacity:.791791666666667}83.3433%{opacity:.25}83.3533%{opacity:1}43.3433%{opacity:.25}100%{opacity:.791791666666667}}@-webkit-keyframes opacity-60-25-11-12{0%{opacity:.895958333333333}91.6767%{opacity:.25}91.6867%{opacity:1}51.6767%{opacity:.25}100%{opacity:.895958333333333}}.app_download_container{overflow:hidden;padding:10px 12px;color:#fff;background-color:rgba(0,0,0,0.65);position:absolute;left:0;right:0;bottom:0;z-index:13}.app_download_container .app_thumb{float:left;width:45px;height:45px}.app_download_container .btn_app_download_wrp{float:right;position:relative;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;font-size:0;margin-top:10px}.app_download_container .btn_app_download{display:inline-block;border:1px solid #09ba07;text-align:center;width:3.2em;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;font-size:14px;color:#09ba07;line-height:1.75;position:relative;z-index:1}.app_download_container .btn_app_download.progress_text{color:#fff}.app_download_container .app_download_progress{position:absolute;top:0;bottom:0;left:0;background-color:rgba(9,186,7,0.75)}.app_download_container .app_download_info{overflow:hidden;padding:0 10px;word-wrap:break-word;word-break:break-all}.app_download_container .app_download_title{display:block;font-weight:400;font-size:17px;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;margin-bottom:-3px}.app_download_container .app_download_desc{font-size:15px}.inner_app_download_container{position:absolute;left:0;right:0;bottom:0;z-index:5;text-align:center;color:#fff}.inner_app_download_container .inner_app_download_bd{background-color:#459aea;display:table-cell;padding:0 20px;vertical-align:middle;word-wrap:break-word;word-break:break-all;width:2000px;height:45px}.inner_app_download_container .inner_app_download_bd.success{background-color:#09ba07}.inner_app_download_container .app_download_progress_wrp{background-color:#398bd7;height:3px;position:relative;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px;overflow:hidden;margin-top:5px;margin-bottom:3px}.inner_app_download_container .app_download_progress{position:absolute;left:0;top:0;bottom:0;background-color:#fff;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px}.wx_video_error_box{position:absolute;top:0;bottom:0;left:0;right:0;z-index:25;background-color:#262626;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.wx_video_error_msg{color:#fff}.wx_video_error_msg_btn{display:inline-block;padding:0 1.34em;line-height:1.7;color:#fff;margin-top:2em;-webkit-tap-highlight-color:rgba(0,0,0,0)}.wx_video_error_loading{width:26px;margin-top:-0.2em;vertical-align:middle;animation:loading 1000ms steps(13,end) 0ms infinite}.wx_video_error_refresh{width:17px;margin:-0.2em .34em 0 0;vertical-align:middle}.wx_video_error_code{display:block;font-style:normal;font-size:12px;color:#888;margin-top:10px}@-webkit-keyframes loading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}@keyframes loading{0%{-webkit-transform:rotate3d(0,0,1,0deg)}100%{-webkit-transform:rotate3d(0,0,1,360deg)}}.not_fullscreen .video_fill{object-fit:fill}.not_fullscreen video::-webkit-media-controls-start-playback-button{display:none!important;-webkit-appearance:none}.not_fullscreen video::-webkit-media-controls{display:none!important}.video_muted_btn{position:absolute;left:5px;bottom:3px;z-index:13;line-height:300px;overflow:hidden;border-width:12px 10px;border-style:solid;border-color:transparent;background:transparent url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABCCAMAAAAYE8oxAAABRFBMVEUAAAABAQEAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEGBgb\/\/\/\/+\/v4ICAj+\/v7+\/v7\/\/\/\/+\/v78\/Pz6+vqCgoL5+fn4+Pjy8vL4+Pjv7+\/e3t7w8PDHx8evr69DQ0M7OzspKSlTU1P+\/v7+\/v79\/f319fX29vbu7u729vbc3Nzn5+fU1NTb29vr6+vk5OTX19e+vr7b29vHx8fz8\/O6urqBgYHc3NxjY2OGhob7+\/v19fX7+\/vx8fH7+\/vu7u7y8vL4+Pjs7Ozr6+vS0tLR0dHHx8fo6OiysrLY2Njb29uHh4ft7e16enpnZ2cxMTHPz89YWFjExMRlZWWTk5MoKCiEhITn5+f7+\/vi4uLq6urm5ub4+Pjj4+Pw8PCwsLDa2trNzc2fn5+MjIzf399zc3NcXFydnZ2xsbH\/\/\/9PhljfAAAAa3RSTlMABQcLDhoXER0TJzIhJfvsLPXv9+no3zTjxsW1rpqDbEouJyAR+fLg0Mu3jo6MioN2dGhkWVJRIiAcGxba2NHMyr+yoZaPgH96aF1ORkU\/PDo6NDItKyopDr+4r6yclol4bmFhYFRQSUA0LriWdMcAAAObSURBVFjD7ZdXd9swDIVLUaIkV44dZ+\/Ymc1q9t6r2Xt178n\/\/14ANB8kubGGTx96ipfkCvGnCwKwlCf\/4+8GY6Ostjy2Iw1WQ6Dx0CElN1jtgCttUkqTs5oBF9YlhBsmMrZ0xhIAb4YkhuBGKDWfyy0xFhd41SgV0TSCqW64\/IozFg94UpAqrBCRn+D1yVjny\/hsg\/wz0d6D6\/VXnMUAHtbJR4hu3zAk1qPPFeMfEPWIR+e0HjKHEU0yxkfl40RTeBOQGeo3WBSewXdkmEhDOM+YNlnMQWqqwqgCIBC8v0MGiXoI687IFNxUeGOQWvXvE6VktdBE9vAOfm9cUEhuW9eDoI99RLpXNCKtJA38pjo6MOl0gewwQfqbFp1oztWpudYmL0A3LPMA0Y1M5Kb1HFXjijbptYP85Ft6vBzDo\/DWUHZrk84+qE5\/2YZpRSXSyc2gLCxypu5wjiNp84REOrnssNRDiCfmNIG6S0wkRI\/U\/aWyR0BNQzYx0bSKA1L3l8GHccjHoexkRDJJ7ZWzvHywaLkzFdF2aIB2y2WLXhDP3KRE+nNB3d4GW2S5BUSrSE7UrmSbq4j2LYhcOiK5ks2iTOwDUS+4kZxIDIJQs5USZipiS5mo9vIWhZWO2EtVayLycymJnyUODBI1vzUlkeZxRBOnEZ+O6NLOvNW9fo87k67Xi\/Q1PlMmutu41yLVzkyjbii5iiiaQPWIVHvdhnrLoS00+E9ULW4a4izpfbjAcHimQDQhPvn34yrKQhF7oR13WsmJBp8kOeaUj\/Gujo4RskmfM8fU6FxRF70HaqAEjUn6dL0pkJrQFhcHcdj9x0gPo0z+aSAuXwaI5Il3k9jIWqbq9DjKI0j6ibZwshl\/5PNPX1ciunPN0NoLbXEZLTd70KXAm5TtCssfjpfJd1Ug2s5918CRJ8iUoSy\/oKIDSM5NX9i2sLL5iTDRhHKuPRoWUL\/wFFvvkV\/9jZTblpc\/8L\/ZUzlQjbA5Nbp\/EzMHdATVgtFnvfzHBh8RKFgNR6B+UR\/Oqr5UZ1KFmS8FHxFvhTyq+Rs9HE7JYqRQyK9NwW8zCPq50khtUV2Kg\/zeqonBduIgtWdVlyIjcfh\/rFUmmqLUlTt3RKz\/5ZkByOzlRphIKcsrOYKWJx4SBnOLHvGhM3GFcAkYD4mDmXkjBQ8SmRok6FN8pHCc3fCIqLVAYHyk6Qar8w1SEiRXa1KroD0x0gPD5f0r8RsZhZXDnmumggAAAABJRU5ErkJggg==) no-repeat 0 0;width:27px;height:22px;vertical-align:middle;display:inline-block;-webkit-background-size:27px auto;background-size:27px auto}.video_muted_btn.muting{background-image:url(data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABCCAMAAAAYE8oxAAABTVBMVEUAAAAAAAAAAAABAQEAAAAAAAAFBQXq6uoAAAD\/\/\/8AAAAAAAABAQEWFhba2tr4+PgWFhYAAABLS0sBAQH+\/v719fX+\/v7\/\/\/\/9\/f3y8vJJSUliYmJBQUElJSX+\/v77+\/v7+\/v6+vr19fXy8vLt7e3v7+\/g4ODp6enW1tbQ0NDIyMiBgYEVFRU0NDT+\/v78\/Pz5+fn39\/fs7Ozh4eHs7Ozn5+fw8PDz8\/Otra2AgIDCwsIAAABoaGgcHBzc3NyMjIxoaGj6+vr19fX7+\/v29vbu7u7q6urm5ub6+vr4+Pj7+\/vr6+vOzs61tbXo6OjX19fAwMC6urrd3d3R0dHHx8fb29vt7e12dnZQUFBpaWmZmZktLS2+vr6EhIT7+\/v7+\/vb29vy8vL19fXBwcHk5OSfn5+MjIygoKAeHh7V1dU5OTmSkpJRUVGysrL\/\/\/+xlHuyAAAAbnRSTlMABxkLDgQSuiD7FSMTLGSxLicNMvXM6\/jvsywaER\/y6OHR0cS3rZyOiIFsNCga6OPguJWIeXVbUUpGMC0rJBwcCdvYxsXAv62ooZGFeWpoaGJZWFBNRj89PDgvKCMO0riPjX58cWBUPjs3LSomIUfhR2IAAAQqSURBVFjD7djXe9MwEABwzpJM4hhKShJCEkahbCi0FEoLbdl777330P\/\/yJ1s92rJRojvgyf0Qs\/Cv550Z0fpmv\/jHw919U9uOn75tKqZOn1Fgwr14HhTj1WT8GJaawGBIoFaj41DxdTyOZySQoWlKC5rXU3Cj5c0k1aIaulhfYoi3VxJKljYbiYS6f6uuV5vSdWKyeKkQxL4ZUqbETkivMXLr4SqW3UaHVzrkAoebNU1ohIPaOuP1ZAKZNJYZ5MK7m7S9WK8B693FoBJaz6ySQU3m\/oXYrplB05McF\/5SCVmDVifYzTfwZmbQv0WqUC8Ya+yMjJq7MWZw6O6JKFEivErulJUS3NqJYWvvZriKAU4hEyjVkEOx3SVqGCu33yY4VTN1zh1RoKTXX5Xc31CJDOOqF5cxZ+nnkOR5IC6656dJAjtIwsRnvcoODcO+XPR2E0LkmCXRDMZEVkvynum\/rMmKwVx9ATjTUOhrMbSPpLFaC9FU8OVJHdiuJ57Mt9gbZEbmHTE1lkKrwmV7+Q+jHZJS4y0h2QRk7pB4dZlyO99RC0ZC2WJXpLEfOdaXYrf50mmjW0YPXVEP0liTuyneFpCvuxJ2kgJlughWaT\/Pdiki\/pSeBSjPbEt+kgWKUkqr74rICsrpbwr30gWvSQ\/1xBnDTSTLzs5gUE39YlMuqKMbtOFzZQWpXwAg+2JR2TSFU1WnJaIT2HQ84tMuqLJSh\/JEIi3YNDJp1n0k3yLQIOQ1WLTEf3klpVbANfJaYE85c3RJbkQmfiJLhwuRNqDniv6ybERFOIdiidyMT5Bta4RPeQ45OJRCncW4i0qvCMGkFjraYp2J4JCYfxdjhhAKnGoT8HtJO\/wzfRcO\/3oI1d\/jstb5vIgzcSE3mb7HTGAFPF5+mlHZIoP8ilFB9IA0SJH8X1N43rRPMcw2Ia8JQaQhybon\/4zUxhFGVNhnPdjAHlGm0o38m381qRtjGSY6B4N+k+KRc\/Q+3zAheFPVx+ZJFGDyX2NvHeW6ZQyydu48p5vn9xojc8Xy2QSp0zuOIgbhwaIaxTe4UXzwbHVLo91JzdeskTJh8ELiwkZCoY9elNiwmCdpPD32wPT3l3+5BICyeJNdIgMELNmC3jRfBYVsjzimCqxt3xqBiL5TaSUWOjQe+cZL5pNBdYwCa17hySLKiP56RlNmF43jeQddDd+H7lR\/vZROliP5B5TpRan6DGFTBrtD\/1VokXepxV05k2KAeTHbSxaZDPrTE7RTwKR80dYtEgcO9um0AFkGrUfn2XRJvuPsl4MI1uPuyxa5IXs4QkiBZIbLrLIJLd60Mh68OCl0jd24L7sDkVAinx71JihFnHJ7neqSzgp0yTlv3zwwie7A96MMFJIydvF5OIgSvl62GbiUBWZc+rhpnIvAWXuB8Mz\/8vjJ5ndr64kqpVrAAAAAElFTkSuQmCC)}.page_video.ratio_primary .continue_play{white-space:nowrap;font-size:0}.page_video.ratio_primary .continue_play .wrp_video_continue{position:static;display:inline-block;vertical-align:middle;height:auto;width:100%;top:auto;left:auto;white-space:normal;font-size:13px;padding:10px 15px;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}.page_video.ratio_primary .continue_play .wrp_video_continue .tit_desc{position:static;width:auto;height:auto;margin:0}.page_video.ratio_primary .continue_play .wrp_video_continue .tit_desc span{padding-bottom:5px;border-bottom:0}.page_video.ratio_primary .continue_play .wrp_video_continue_inner{overflow:hidden}.page_video.ratio_primary .continue_play .dl_video_continue{height:auto;position:relative}.page_video.ratio_primary .continue_play .dd_continue_inner{height:auto;margin:0;top:auto}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list{display:block;width:auto;margin:0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item{height:auto;margin:7px 0 0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item{overflow:hidden}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:75px;height:42.1875px;position:static;float:left;margin-right:10px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{margin:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;padding-left:0;font-size:14px}.page_video.ratio_primary .continue_play .continue_nav,.page_video.ratio_primary .continue_play .continue_opr{bottom:10px}@media(max-device-width:413px){.page_video.ratio_primary .continue_play .wrp_video_continue{padding:7px 10px;font-size:12px}.page_video.ratio_primary .continue_play .wrp_video_continue .tit_desc span{padding-bottom:4px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item{margin:6px 0 0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:68px;height:38.25px;margin-right:10px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{font-size:14px}}@media(max-device-width:360px){.page_video.ratio_primary .continue_play .wrp_video_continue{padding:6px 10px;font-size:11px}.page_video.ratio_primary .continue_play .wrp_video_continue .tit_desc span{padding-bottom:4px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item{margin:5px 0 0}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .cover{width:56px;height:31.5px;margin-right:7px}.page_video.ratio_primary .continue_play .dd_continue_inner .video_list .video_item .inner_item .desc{font-size:12px}.page_video.ratio_primary .continue_play .continue_nav,.page_video.ratio_primary .continue_play .continue_opr{bottom:8px}}";
});define("a/appdialog_confirm.html.js",[],function(){
return'<div class="wx_profile_dialog_primary">\n    <div class="weui-mask"></div>\n    <div class="weui-dialog weui-skin_android">\n        <div class="weui-dialog__hd"><strong class="weui-dialog__title">是否立即下载该应用</strong></div>\n        <div class="weui-dialog__bd">\n            <div class="weui-flex">\n                <div class="wx_profile_info_avatar_wrp">\n                    <span class="wx_profile_info_avatar">\n                        <img src="<#=app_img_url#>" alt="">\n                    </span>\n                </div>\n                <div class="weui-flex__item">\n                    <strong class="wx_profile_info_title"><#=app_name#></strong>\n                </div>\n            </div>\n        </div>\n        <div class="weui-dialog__ft">\n            <a href="javascript:;" class="js_cancel weui-dialog__btn weui-dialog__btn_default">取消</a>\n            <a href="javascript:;" class="js_ok weui-dialog__btn weui-dialog__btn_primary">下载</a>\n        </div>\n    </div>\n</div>\n';
});;define('widget/wx_profile_dialog_primary.css', [], function(require, exports, module) {
	return ".radius_avatar{display:inline-block;background-color:#fff;padding:3px;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;overflow:hidden;vertical-align:middle}.radius_avatar img{display:block;width:100%;height:100%;border-radius:50%;-moz-border-radius:50%;-webkit-border-radius:50%;background-color:#eee}.wx_profile_dialog_primary .weui-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,0.6)}.wx_profile_dialog_primary .weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;-webkit-transform:translate(-50%,-65%);transform:translate(-50%,-65%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.wx_profile_dialog_primary .weui-dialog__hd{position:relative;padding:20px 20px 10px;text-align:left}.wx_profile_dialog_primary .weui-dialog__hd:after{content:\" \";position:absolute;left:20px;right:20px;bottom:0;height:1px;border-bottom:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__title{font-weight:400;font-size:17px}.wx_profile_dialog_primary .weui-dialog__bd{padding:16px 20px;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.wx_profile_dialog_primary .weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.wx_profile_dialog_primary .weui-dialog__ft{position:relative;line-height:44px;font-size:17px;display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(0.5);transform:scaleY(0.5)}.wx_profile_dialog_primary .weui-dialog__btn{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.wx_profile_dialog_primary .weui-dialog__btn:active{background-color:#eee}.wx_profile_dialog_primary .weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleX(0.5);transform:scaleX(0.5)}.wx_profile_dialog_primary .weui-dialog__btn:first-child:after{display:none}.wx_profile_dialog_primary .weui-dialog__btn_default{color:#353535}.wx_profile_dialog_primary .weui-dialog__btn_primary{color:#1aad19}.wx_profile_dialog_primary .weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,0.1)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__title{font-size:21px}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd{text-align:left;padding:1.3em 1.6em 1.2em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__hd:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd{color:#999;padding:0 1.6em 1.4em;font-size:17px;text-align:left}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__ft:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:after{display:none}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:active{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,0.06)}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn:last-child{margin-right:-0.8em}.wx_profile_dialog_primary .weui-skin_android .weui-dialog__btn_default{color:#808080}@media screen and (min-width:1024px){.wx_profile_dialog_primary .weui-dialog{width:35%}}.wx_profile_dialog_primary .weui-flex{display:-webkit-box;display:-webkit-flex;display:flex}.wx_profile_dialog_primary .weui-flex__item{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wx_profile_dialog_primary .weui-flex{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.wx_profile_dialog_primary .weui-flex__item{word-wrap:break-word;word-break:break-all}.wx_profile_info_avatar_wrp{padding-right:10px}.wx_profile_info_avatar{width:50px;height:50px;padding:0;display:inline-block;background-color:#fff;vertical-align:middle}.wx_profile_info_avatar img{display:block;width:100%;-webkit-border-radius:10px;border-radius:10px}.wx_profile_info_title{display:block;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:16px;font-weight:400;text-align:left}";
});define("appmsg/emotion/caret.js",[],function(e,t){
"use strict";
var t={};
return t.get=function(e){
var t=0;
if(document.selection){
e.focus();
var a=document.selection.createRange();
a.moveStart("character",-e.value.length),t=Sel.text.length;
}else(e.selectionStart||"0"==e.selectionStart)&&(t=e.selectionStart);
return t;
},t.set=function(e,t){
if(e.setSelectionRange)e.focus(),e.setSelectionRange(t,t);else if(e.createTextRange){
var a=e.createTextRange();
a.collapse(!0),a.moveEnd("character",t),a.moveStart("character",t),a.select();
}
},t;
});define("biz_wap/utils/localstorage.js",[],function(){
"use strict";
var t={};
return t=window.localStorage?{
set:function(t,e){
null!==this.get(t)&&this.remove(t),localStorage.setItem(t,e);
},
get:function(t){
var e=localStorage.getItem(t);
return void 0===e?null:e;
},
remove:function(t){
localStorage.removeItem(t);
},
clear:function(){
localStorage.clear();
},
each:function(t){
for(var e,o=localStorage.length,n=0,t=t||function(){};o>n&&(e=localStorage.key(n),
t.call(this,e,this.get(e))!==!1);n++)localStorage.length<o&&(o--,n--);
}
}:{
set:function(){},
get:function(){},
remove:function(){},
clear:function(){},
each:function(){}
};
});define("new_video/player.js",["page/pages/video.css","biz_wap/zepto/zepto.js","biz_wap/zepto/event.js","biz_wap/zepto/touch.js","new_video/player.html.js","biz_wap/utils/device.js","new_video/ctl.js","biz_common/tmpl.js"],function(e,i,t,n){
"use strict";
e("page/pages/video.css"),e("biz_wap/zepto/zepto.js"),e("biz_wap/zepto/event.js"),
e("biz_wap/zepto/touch.js");
var o=e("new_video/player.html.js"),a=e("biz_wap/utils/device.js"),r=e("new_video/ctl.js"),s=e("biz_common/tmpl.js"),l=3e3;
if(parent.window._players||(parent.window._players={}),parent.window._players_guid||(parent.window._players_guid=1),
parent.window.lastFullScreenPlay=null,a.os.ios||parent.window._hasHashChange||(parent.window._hasHashChange=!0,
$(parent.window).on("hashchange",function(){
var e=parent.window.lastFullScreenPlay,i=parent.location.hash;
e&&"#fullscreen"!=i&&e.isInFullScreen()&&e.exitH5FullScreen();
})),!parent.window._hasOnOrient){
var d="onorientationchange"in window?"orientationchange":"resize";
$(parent.window).on(d,function(){
var e=parent.window.lastFullScreenPlay;
e&&e.adaptH5FullScreen();
}),parent.window._hasOnOrient=!0;
}
var _=(parent.window.location.href.indexOf("&vconsole=1")>0?!0:!1,function(){}),h=(navigator.userAgent,
function(){
return!0;
}()),u=function(){
return!!a.browser.M1;
}(),c=function(e,i){
var t=document.createElement("div");
return e in t.style?(t.style[e]=i,t.style[e]===i):!1;
},f=function(e){
var i=0,t=0,n=0;
.5>e&&(e=0),e=Math.ceil(e);
var i=Math.floor(e/3600),t=Math.floor((e-3600*i)/60),n=e-3600*i-60*t;
return 0!=i?(10>i&&(i="0"+i),i+=":"):i="",10>t&&(t="0"+t),10>n&&(n="0"+n),i+t+":"+n;
},p=!a.canSupportVideo,g=function(e){
var i=$(e.container);
e.width=e.width||300,e.height=e.height||300,e.videoWidth=e.videoWidth||0,e.videoHeight=e.videoHeight||0,
e.duration=e.duration||0,e.videoFit=!1;
var t={
needToFit:!1,
supportObjectFit:!1,
os:a.os
};
if(e.width&&e.height&&e.videoWidth&&e.videoHeight){
var n=Math.abs(e.width/e.height-e.videoWidth/e.videoHeight);
.1>=n&&(t.needToFit=!0,c("objectFit","fill")&&(t.supportObjectFit=!0,e.videoFit=!0));
}
e.ratio=e.ratio||e.width/e.height,this.opt=e,this.id=e.id=parent.window._players_guid++,
this.__forcePause=!1,this.__hasFuncControllBar=!0,this.__dragTimes=[],this.__play_total_time=0,
this.__last_playtime=0,this.__always_hide_loading=e.always_hide_loading||!1,e._mustHideFullScreen=u,
e.display=e.autoHide?"none":"block",e.ad_muted_btn=e.ad_muted_btn||!1;
var r=s.tmpl(o,e);
i.append(r);
var l=this.container=$("#js_mpvedio_"+this.id);
this.$video=l.find("video");
var d=this.video=this.$video[0];
this.__initData(),this.__initVideo();
var _=e.src;
if(!_)return void this.__triggerOutside("error",{
errorcode:5
});
if(d.setAttribute("origin_src",_),p)return l.find(".js_btn_play").attr("href",_).show(),
this.__loadedHandler(),void this.__bindBtnEvent();
var h=e.plugins||[];
this._blockPlugin={};
for(var f=0,g=h.length;g>f;++f){
var v=h[f];
v.setPlayer(this),!!v.init&&v.init();
}
this.plugins=h,parent.window._players[_]=this,this._trigger("afterCheckVideoFit",t),
this._trigger("loading"),this.__bindBtnEvent(),this.__bindVideoEvent();
};
return $.extend(g.prototype,{
__triggerOutside:function(){
var e=this.opt,i=arguments,t=i[0],n=this,o=this.video;
if(t){
t=t.substr(0,1).toUpperCase()+t.substr(1);
var r=e["on"+t];
"function"==typeof r&&r.apply(this,i),"BeginPlay"!=t||null!=n.__replaySec&&0!=n.__replaySec||!a.os.ios||(o.currentTime=.1);
}
},
__errorHandler:function(){
this.video.removeAttribute("src");
},
__loadingHandler:function(e){
this.showLoading(),this._trigger("ready",e);
},
__readyHandler:function(e){
this.opt.src;
this._trigger("loaded",e);
},
__loadedHandler:function(e){
if(e&&e.autoplay)return void this._trigger("readyBeginPlay",e);
this.hideLoading(),this.container.find(".js_video_play_controll").css({
display:"block"
});
var i=this.opt.duration;
i&&i>0&&this.container.find(".js_video_length").html(f(i)).show();
},
__outsidePauseHandler:function(){
_("__outsidePauseHandler"),this.hideLoading(),this.pause(),this._trigger("userpause"),
this.hideControllBar(!0),this._showPlayControllBar();
},
__readyBeginPlayHandler:function(e){
this.setSrc(this.opt.src),this._trigger("beginPlay",e);
},
__beginPlayHandler:function(){
p&&(location.href=this.opt.src);
var e=this.container,i=this,t=this.video;
e.find(".js_video_poster").show(),this.showCover(),e.find(".js_video_play_controll").hide(),
this.__hasBeginPlay=!0,i.showLoading("firstTime"),setTimeout(function(){
t.play();
},1);
},
__replayHandler:function(){
this.setSrc(this.src),this._afterReplay();
},
__endHandler:function(){
this.container.find(".js_btn_play_aria").data("status","3").removeClass("video_playing"),
this.hideControllBar(),this._hidePlayControllBar();
},
__hideControllTimeoutCallback:function(){
this.isPlay()&&this.hideControllBar();
},
__touchVideoHandler:function(){
var e=this,i=this.opt;
if(i.blockTouchVideo)return!1;
var t=this.__touchVideoTimeoutHandler;
if(!e.__canplay||e.isEnd()&&i.hideControllBarAtEnd)return void e.hideControllBar();
var n=e.container.find(".js_controll");
"none"==n.css("display")?e.showControllBar():e.hideControllBar(!0),t&&clearTimeout(t),
e.__touchVideoTimeoutHandler=setTimeout(function(){
e.__hideControllTimeoutCallback.call(e);
},l);
},
__initData:function(){
this.log={
hasended:0,
lastsec:0,
duration:0,
video_error:0
},this.__hasBeginPlay=!1,this.__canplay=!1,this.__hasscroll=!1,this.__replaySec=null;
},
__initVideo:function(){
var e=this.opt,i=this.video;
i.addEventListener("contextmenu",function(e){
e.preventDefault(),e.stopPropagation();
},!1),i.hasAttribute("controls")&&i.removeAttribute("controls"),i.setAttribute("webkit-playsinline","isiPhoneShowPlaysinline"),
i.setAttribute("playsinline","isiPhoneShowPlaysinline"),e.loop&&i.setAttribute("loop",e.loop),
e.muted&&i.setAttribute("muted",e.muted),this.$video.off("loadedmetadata durationchange"),
this.__hasVideoDurationchange=!1;
},
__getDuration:function(){
var e=this.opt,i=this.video,t=i.duration;
return t&&1!=t?t:e.duration;
},
__videoDurationchange:function(){
var e=this;
if(!e.__hasVideoDurationchange){
var i=this.video,t=this.opt,n=this.container;
if(1/0!=i.duration&&i.duration>0&&1!=i.duration)e.duration=i.duration,e.__hasVideoDurationchange=!0;else{
if(!t.duration)return!1;
e.duration=t.duration,e.__hasVideoDurationchange=!0;
}
e.log.duration=e.duration,n.find(".js_total_time").text(f(e.duration)),this.__hasFuncControllBar&&n.find(".js_progress_bar,.js_total_time").show();
var o=+new Date,a=o-e.log.loadwait_start;
e.log.loadwait=a,e._trigger("durationchange",{
loadwait:a
});
}
},
__startCountTime:function(){
var e=this,i=this.video;
i&&null===e.__last_playtime&&(e.__last_playtime=i.currentTime);
},
__endCountTime:function(){
var e=this,i=this.video;
i&&i.currentTime>e.__last_playtime&&null!==e.__last_playtime&&(e.__play_total_time+=i.currentTime-e.__last_playtime,
e.__last_playtime=null);
},
__bindVideoEvent:function(){
var e=this.$video,i=this,t=this.container,n=t.find(".js_switch"),o=(t.find(".js_video_pause_controll"),
this.video);
e.off("timeupdate").on("timeupdate",function(){
if(i.__forcePause===!0)return void _(i.id+":timeupdate __forcePause return");
if(i.__hasBeginPlay&&!i.__canplay)return i.showLoading(),!1;
o=i.video,null!=i.__replaySec&&(_(i.id+":timeupdate __replaySec"),o.pause(),o.currentTime=i.__replaySec,
i.__last_playtime=i.__replaySec,o.play(),i.__replaySec=null),i.__startCountTime(),
i.hideLoading(),i.__videoDurationchange();
var e=o.currentTime;
if(e>0){
var n=i.__getDuration();
i.__setControllBar(e/n),i.hideCover(),i.hideLoading(),t.find(".js_now_play_time").text(f(e)),
i._trigger("timeupdate",{
currentTime:e
});
}
}),e.off("canplay").on("canplay",function(){
null!=i.__replaySec&&(o.currentTime=i.__replaySec,i.__last_playtime=i.__replaySec,
i.__replaySec=null),i.__canplay=!0,i._trigger("canplay");
}),e.off("ended").on("ended",function(){
_("player inner isend:"+i.isEnd()),i.isEnd()&&(i.__endCountTime(),i._trigger("end"));
}),e.off("emptied").on("emptied",function(){}),i.waitingHandlerTimer=null;
var a=0;
e.off("stalled").on("stalled",function(){
if(this.__hasBeginPlay&&!i.waitingHandlerTimer){
i.showLoading();
var e=o.src,t=o.readyState,n=o.error;
0!=t||n&&0!=n.code||(clearTimeout(i.waitingHandlerTimer),i.waitingHandlerTimer=null,
i.showLoading(),i.showCover(),o.pause(),o.src=e,o.load(),o.play(),_(i.id+":stalled"));
}
}),e.off("seeking").on("seeking",function(){
_("seeking,__hasBeginPlay:"+i.__hasBeginPlay),i.__hasBeginPlay&&i.showLoading();
}),e.off("waiting").on("waiting",function(){
if(_("waiting,__hasBeginPlay:"+i.__hasBeginPlay),i.__hasBeginPlay){
i.showLoading(),clearTimeout(i.waitingHandlerTimer),i.waitingHandlerTimer=null;
var e=0,t=parent.window._players;
for(var n in t)if(t.hasOwnProperty(n)&&e++,e>1)break;
e>1&&i.__forcePause===!1&&(i.waitingHandlerTimer=setTimeout(function(){
if(i.__forcePause!==!0){
var e=o.error;
if(0==o.readyState&&(!e||0==e.code)){
clearTimeout(i.waitingHandlerTimer),i.waitingHandlerTimer=null;
var t=o.src;
i.showLoading(),i.showCover(),o.pause(),o.src=t,a++,o.load(),o.play(),_(i.id+":waitingHandlerTimer");
}
}
},1e4)),i._trigger("waiting");
}
}),e.off("play playing").on("play playing",function(){
return i.__forcePause===!0?void _(i.id+":play playing __forcePause return"):(_(i.id+":play playing"),
n.removeClass("switch_on"),n.addClass("switch_off"),i._hidePlayControllBar(),i.__startCountTime(),
void i._trigger("play"));
}),e.off("pause").on("pause",function(){
_(i.id+":video pause event"),n.addClass("switch_on"),n.removeClass("switch_off"),
!i.__canplay||i.isEnd()||i.__onTouch?i._hidePlayControllBar():(i.hideControllBar(!0),
i._showPlayControllBar()),i.__endCountTime(),i._trigger("pause");
}),e.off("error").on("error",function(){
var e;
i.video.error&&(e=i.video.error.code),i._trigger("error",{
errorcode:e
});
}),e.on("webkitfullscreenchange mozfullscreenchange fullscreenchange",function(){
var e=document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen,t=$(this);
e?(t.parents(".js_inner").removeClass("not_fullscreen"),i.__isInFullScreen=!0):(t.parents(".js_inner").addClass("not_fullscreen"),
i.hideLoading(),i.__isInFullScreen=!1);
});
},
__bindBtnEvent:function(){
function e(){
if(p)return location.href=t.opt.src,!1;
if(o){
var e=2;
try{
e=window.cgiData&&"0"==window.cgiData.media_source?11:2;
}catch(i){}
r.report({
step:e,
vid:o.vid,
traceid:o.pageplayer._getTraceId(),
orderid:o.pageplayer._getOrderid()
});
}
t._trigger("readyBeginPlay");
}
function i(){
t.isPlay()?(t.hideLoading(),t.pause(),t._trigger("userpause"),t.hideControllBar(!0),
t._showPlayControllBar()):(t.__forcePause=!1,t.showLoading(),t.play(),t._trigger("userplay"));
}
var t=this,n=this.opt,o=n.extinfo,s=this.container,l=this.video,d=(s.find(".js_video_play_controll"),
s.find(".js_btn_play")),u=s.find(".js_btn_play_aria"),c=(s.find(".js_video_poster"),
s.find(".js_switch")),f=s.find(".js_progress_bar"),g=s.find(".js_played_bar"),v=s.find(".js_page_video"),y=s.find(".js_full_mask"),w=s.find(".js_video_pause_controll"),m=s.find(".js_full_screen_control"),j=s.find(".js_loading");
w.on("tap",".js_btn_pause",function(){
t.__forcePause=!1,t.play(),t._trigger("userplay"),t._hidePlayControllBar();
});
var C,T,b,P,S=0,B=!1,F=0,H=0,x=0,D=t.__getDuration(),k=0,M=1,L=parent.window.user_uin||0,V=0!==L&&Math.floor(L/100)%1e3<M,E=!1,I=0;
v.on("touchstart",function(e){
1==e.targetTouches.length&&t.isPlay()&&(n.blockTouchVideo||(b=C=new Date,P=T={
x:e.targetTouches[0].clientX,
y:e.targetTouches[0].clientY
},x=parent.document.body.scrollTop,k=t.getCurTime(),a.os.android&&e.preventDefault()));
}),v.on("touchmove",function(e){
if(1==e.targetTouches.length&&t.isPlay()&&!n.blockTouchVideo){
if(parent.document.body.scrollTop!=x)return B=!1,void(x=-1);
var i=new Date,o=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY,r=i-C,s=o-T.x,l=a-T.y,d=Math.sqrt(Math.pow(s,2)+Math.pow(l,2))+H,_=Math.min(Math.ceil(d/r),6);
F=Math.floor(.1*d+.2*_*_*_)*Math.ceil(D/500),H=0==F?d:0,0>s&&(F=-F);
var h=180*Math.atan2(l,s)/Math.PI;
B||(h>=-30&&30>=h&&++S,(h>=150&&180>=h||h>=-180&&-150>=h)&&--S,(S>=4||-4>=S)&&(5>=d?S=0:(I=Math.max(I,_),
B=!0))),B&&(k+=F,0>k&&(k=0),k>D&&(k=1*D),t.__setForwardBar(k),e.preventDefault(),
e.stopPropagation()),T={
x:o,
y:a
},C=i;
}
}),v.on("touchend",function(e){
if(t.isEnd()||t.isPause()||B||t._trigger("touchVideo"),B&&(t.play(k),s.find(".js_forward").css("display","none"),
V&&((new Image).src="/mp/jsmonitor?idkey=28307_29_1",!E))){
var i=(new Date,{
x:e.changedTouches[0].clientX,
y:e.changedTouches[0].clientY
}),n=i.x-P.x,o=i.y-P.y,a=parseInt(Math.sqrt(Math.pow(n,2)+Math.pow(o,2))),r=parseInt(180*Math.atan2(o,n)/Math.PI);
r>=-30&&30>=r||r>=150&&180>=r||r>=-180&&-150>=r||((new Image).src="/mp/jsmonitor?idkey=28307_35_1"),
(new Image).src="/mp/jsmonitor?idkey=28307_31_1;28307_33_"+a+";28307_34_"+I,E=!0;
}
F=0,B=!1,S=0;
}),v.on("touchmove MSPointerMove pointermove mousemove",function(e){
t.isInFullScreen()&&!h&&(e.preventDefault(),e.stopPropagation());
}),j.on("touchend",function(){
t._trigger("touchVideo");
}),y.on("touchend",function(){
t.isEnd()||t._trigger("touchVideo");
}),y.on("touchmove MSPointerMove pointermove mousemove",function(e){
t.isInFullScreen()&&!h&&(e.preventDefault(),e.stopPropagation());
}),_("play aria click"),u.on("tap",function(){
var n=$(this),o=1*n.data("status");
_("play aria status:"+o),0==o?(n.addClass("video_playing").data("status","1"),e()):1==o?(n.removeClass("video_playing").data("status","2"),
i()):2==o?(n.addClass("video_playing").data("status","1"),i()):3==o&&(n.addClass("video_playing").data("status","1"),
t._trigger("ariaReplay"));
}),d.on("tap",function(){
e();
}),j.on("touchend",function(){
t._trigger("touchVideo");
}),c.on("tap",function(){
i();
});
var z,O,A,q=null,R=[];
t.__onTouch=!1,f.on("touchstart",function(e){
t.__hasFuncControllBar&&(t.__onTouch=!0,O=z?e:e.touches[0],q={},q.x1=O.pageX,q.y1=O.pageY,
A=l.currentTime,R=A,t.pause(),e.preventDefault());
}),f.on("touchmove",function(e){
if(t.__hasFuncControllBar){
t.__onTouch=!0,O=z?e:e.touches[0];
var i=O.pageX,n=O.pageY;
q.x2=i,q.y2=n;
var o=g.offset(),a=f.width(),r=(i-o.left)/a;
A=t.__getDuration()*r,t.pause(),t.__setControllBar(r),t.__has_drag=!0,e.preventDefault(),
e.stopPropagation();
}
}),f.on("touchend",function(e){
if(t.__hasFuncControllBar){
if(t.__onTouch=!1,q&&q.x1){
var i=q.x2?q.x2:q.x1,n=g.offset(),o=f.width(),a=(i-n.left)/o;
if(a=a>1?1:a,A=t.__getDuration()*a,t.__setControllBar(a),R){
var r=0>A?0:A;
t.__dragTimes.push(Math.round(1e3*R)+":#:"+Math.round(1e3*r)),R=0;
}
}
return q=null,setTimeout(function(){
t.__forcePause=!1,t.showLoading(),t.play(A);
},0),e.preventDefault(),e.stopPropagation(),!1;
}
}),m.on("tap",function(e){
return t.isInFullScreen()?h?t.exitFullScreen():t.exitH5FullScreen():(t.__has_fullscreen=!0,
h?((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_56_1&r="+Math.random(),
t.enterFullScreen()):t.enterH5FullScreen()),e.stopPropagation(),e.preventDefault(),
!1;
});
},
_hidePlayControllBar:function(){
var e=this.container.find(".js_video_pause_controll");
e.hide();
},
_showPlayControllBar:function(){
var e=this.container.find(".js_video_pause_controll");
this.isEnd()||(this.hideControllBar(),e.show(),this.container.find(".js_video_play_controll").hide());
},
_showPlayer:function(){
var e=this.container.find(".js_page_video");
e.show();
},
_hidePlayer:function(){
var e=this.container.find(".js_page_video");
e.hide();
},
__setControllBar:function(e){
e=Math.ceil(100*e),0>e&&(e=0),e>100&&(e=100);
this.video,this.duration;
this.__setBufferBar(e),e+="%";
var i=this.container;
i.find(".js_played_bar").css({
width:e
}),i.find(".js_played_speed_cnt").css({
left:e
});
},
__setForwardBar:function(e){
var i=this.container,t=(this.video,this.__getDuration()),n=e/t;
i.find(".js_forward").css("display","block"),i.find(".total_time").text(f(t)),i.find(".js_forward_bar").css("width",100*n+"%"),
i.find(".js_forward_play_time").text(f(e));
},
__setBufferBar:function(e){
var i=this.container,t=this.video,n=this.__getDuration(),o=t.currentTime;
e=e||o/n;
var a=e;
t.buffered&&t.buffered.length>0&&t.buffered.end&&n&&(a=t.buffered.end(0)/n,a=Math.max(e,Math.ceil(parseInt(100*a))),
a>98&&(a=100)),i.find(".js_buffer_bar").css({
width:a+"%"
});
},
__resetVideo:function(){
this.$video.remove();
var e=this.container,i=e.find(".js_video_poster");
i.append("<video></video>");
{
var t=this.$video=i.find("video");
this.video=t[0];
}
this.__canplay=!1,this.__forcePause=!1,this.__initVideo(),this.__bindVideoEvent();
},
_trigger:function(e,i){
if("play"==e){
var t=parent.window._players;
for(var n in t){
var o=t[n];
o!==this&&o.__hasBeginPlay&&!o.isEnd()?(o.__forcePause=!0,o.hideLoading(),o.video.pause(),
o._trigger("userpause"),_(o.id+":pause other"),o._showPlayControllBar()):o===this&&(o.__forcePause=!1,
o._trigger("userplay"));
}
}
var a=this.plugins,r=this._blockPlugin[e]||this._blockPlugin.all,s=0;
if(r&&"function"==typeof r.recv&&(s|=r.recv(e,i),1&s))return!1;
for(var n=0,l=a.length;l>n&&(s|=a[n].recv(e,i),!(2&s));++n);
if(!(this._blockInnerHandler||4&s)){
var d=this["__"+e+"Handler"];
d&&d.call(this,i);
}
8&s||this.__triggerOutside(e,i);
},
_setBlockInnerHandler:function(e){
this._blockInnerHandler=e;
},
_setBlockPlugin:function(e,i){
this._blockPlugin[e]=i;
},
_getContainer:function(){
return this.container;
},
_setCover:function(e,i){
this.container.find(".js_poster_cover").css(i),this.opt.cover=e;
},
_removeCover:function(e){
var e=e||{
"background-image":"none"
};
this.container.find(".js_poster_cover").css(e);
},
_afterReplay:function(){
this.__hasBeginPlay=!0,this.showControllBar(),this.play(.1);
},
setSrc:function(e,i){
var t=this,n=this.$video,o=(this.opt,this.video);
this.src=e,t.__initData(),t.__initVideo(),this.showCover(),t.log.loadwait_start=+new Date,
n.attr("src",e),o.preload=i||"metadata",o.load(),this.container.find(".js_now_play_time").text(f(0)),
n.on("loadedmetadata durationchange",function(){
t.__videoDurationchange();
}),o.duration>0&&1!=o.duration&&t.__videoDurationchange();
},
replay:function(){
a.os.android;
var e=this.opt.extinfo;
e&&r.report({
step:9,
vid:e.vid,
traceid:e.pageplayer._getTraceId(),
orderid:e.pageplayer._getOrderid()
}),this._trigger("replay");
},
resetVideo:function(){
this.container.find(".js_video_poster").hide(),this.showCover(),this.__resetVideo(),
this._trigger("loading"),this.__hasBeginPlay=!0;
},
play:function(e){
if(!i||0!=i.readyState){
var i=this.video,t=this;
e*=1;
try{
if(isNaN(e)||"number"!=typeof e)e=0;else{
var n=this.__getDuration();
e>=n&&(e=n-.01),0>e&&(e=0),i.currentTime=e,t.__replaySec=e,t.__last_playtime=e,t.container.find(".js_now_play_time").text(f(e));
}
}catch(o){
e=0;
}
clearTimeout(t.__delayToPlay),t.__delayToPlay=setTimeout(function(){
t.__forcePause!==!0&&(i.pause(),i.play(),t._trigger("play"),_(t.id+":delayToplay"));
},100),_(t.id+":play function");
}
},
pause:function(){
if(!e||0!=e.readyState){
var e=this.video;
this.__replaySec=null,this.__delayToPlay&&(clearTimeout(this.__delayToPlay),this.__delayToPlay=null),
this.waitingHandlerTimer&&(clearTimeout(this.waitingHandlerTimer),this.waitingHandlerTimer=null),
e.pause(),_(this.id+":pause function");
}
},
enterFullScreen:function(){
var e=this.video;
e.webkitSupportsFullscreen?e.webkitEnterFullscreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen(),
this.__isInFullScreen=!0;
},
exitFullScreen:function(){
this.video;
this.hideLoading(),document.webkitExitFullscreen&&document.webkitExitFullscreen(),
this.__isInFullScreen=!1;
},
isInFullScreen:function(){
return!!this.__isInFullScreen;
},
setWidth:function(e){
this.container.find(".js_page_video").css({
width:e
});
},
setHeight:function(e){
this.container.find(".js_page_video").css({
height:e
});
},
showCover:function(){
this.container.find(".js_poster_cover").show();
},
hideCover:function(){
this.container.find(".js_poster_cover").hide();
},
showFuncControllBar:function(){
var e=this.container.find(".js_progress_bar,.js_full_screen_control");
e.show(),this.__hasFuncControllBar=!0;
},
hideFuncControllBar:function(){
var e=this.container.find(".js_progress_bar,.js_full_screen_control");
e.hide(),this.__hasFuncControllBar=!1;
},
showControllBar:function(){
this.container.find(".js_controll").removeClass("opr_fade_out").show();
},
hideControllBar:function(e){
var i=this.container.find(".js_controll");
i.removeClass("opr_fade_in");
var t=this,e=!1;
e?(t.__timerHideControll&&clearTimeout(t.__timerHideControll),i.hide()):(i.addClass("opr_fade_out"),
t.__timerHideControll=setTimeout(function(){
i.hide();
},500));
},
showLoading:function(e){
if(!this.__isshowLoading&&!this.__always_hide_loading){
this.__isshowLoading=!0;
var i=this;
window.setTimeout(function(){
i.__isshowLoading=!1;
},1e3),"firstTime"==e&&this.container.find(".js_loading").addClass("start_loading"),
this.container.find(".js_loading").show();
}
},
hideLoading:function(){
this.container.find(".js_loading").hasClass("start_loading")&&this.container.find(".js_loading").removeClass("start_loading"),
this.container.find(".js_loading").hide();
},
triggerMuted:function(e){
e?(this.video.muted=!0,this.video.setAttribute("muted",!0),this.container.find(".js_muted_btn").addClass("muting")):(this.video.muted=!1,
this.video.removeAttribute("muted"),this.container.find(".js_muted_btn").removeClass("muting"));
},
adaptH5FullScreen:function(){
var e=$(window).width(),i=$(window).height(),t=!1;
(180==window.orientation||0==window.orientation||i>e)&&(t=!0);
var o=this,a=this.opt,r=o.container,s=r.find(".js_page_video"),l=o.$video;
if(a.defineCSS)return!1;
if(t){
var d=e,_=l.height()/l.width(),h=d*_;
s.css({
marginTop:-h/2,
marginLeft:-d/2,
width:d+"px",
height:h+"px"
});
}else n("!isVertical"),s.css({
marginTop:0,
marginLeft:0,
width:"100%!important",
height:"100%!important"
});
},
enterH5FullScreen:function(){
{
var e=this,i=this.opt,t=e.container;
t.find(".js_page_video"),e.$video;
}
!!i.onBeforeEnterH5FullScreen&&i.onBeforeEnterH5FullScreen(),$("body").addClass("full_screen_mv"),
this.adaptH5FullScreen(),parent.window.lastFullScreenPlay=this,this.__isInFullScreen=!0,
"#fullscreen"!=parent.location.hash&&(parent.location.hash="#fullscreen");
},
exitH5FullScreen:function(){
{
var e=this,i=this.opt,t=e.container,n=t.find(".js_page_video");
e.$video;
}
!!i.onBeforeExitH5FullScreen&&i.onBeforeExitH5FullScreen(),n.css({
marginTop:0,
marginLeft:"auto",
marginRight:"auto",
width:i.width+"px",
height:i.height+"px"
}),$("body").removeClass("full_screen_mv"),t.find(".js_controll").removeClass("opr_fade_out").addClass("opr_fade_in").show(),
parent.window.lastFullScreenPlay=null,this.__isInFullScreen=!1,"#fullscreen"==parent.location.hash&&(parent.location.hash="");
},
setVideoCSS:function(e){
var i=this,t=i.container,n=t.find(".js_page_video");
n.css(e);
},
hasFullScreen:function(){
return!!this.__has_fullscreen;
},
hasDrag:function(){
return!!this.__has_drag;
},
getCurTime:function(){
return this.video.currentTime;
},
getEndDom:function(){
return this.container.find(".js_end_dom");
},
getDrag:function(){
return this.__dragTimes;
},
getPlayTotalTime:function(){
return this.__endCountTime(),this.__play_total_time;
},
getLog:function(){
var e=this.log||{};
return{
hasended:e.hasended,
last_ms:Math.floor(1e3*(e.lastsec||0)),
duration_ms:Math.floor(1e3*(e.duration||0)),
video_error:e.video_error||0,
video_error_code:e.video_error_code||0,
loadwait:e.loadwait||0
};
},
isPlay:function(){
return!this.video.paused&&!this.isEnd();
},
isPause:function(){
return!!this.video.paused;
},
isEnd:function(){
return!!this.video.ended;
}
}),g._getFormatTime=f,g;
});define("a/appdialog_confirm.js",["widget/wx_profile_dialog_primary.css","biz_common/tmpl.js","biz_common/dom/event.js","a/appdialog_confirm.html.js"],function(o){
"use strict";
o("widget/wx_profile_dialog_primary.css");
var n=o("biz_common/tmpl.js"),e=o("biz_common/dom/event.js"),i=o("a/appdialog_confirm.html.js"),m=function(o){
var m=document.createElement("div");
m.innerHTML=n.tmpl(i,o),document.body.appendChild(m),e.on(m.getElementsByClassName("js_ok")[0],"click",function(){
o.onOk&&o.onOk(),document.body.removeChild(m);
}),e.on(m.getElementsByClassName("js_cancel")[0],"click",function(){
o.onCancel&&o.onCancel(),document.body.removeChild(m);
});
};
return m;
});define("biz_wap/jsapi/cardticket.js",["biz_wap/jsapi/core.js"],function(e){
"use strict";
var c=e("biz_wap/jsapi/core.js"),r={
openCardDetail:function(e){
function r(){
c.invoke("openCardDetail",{
card_id:e.card_id,
card_ext:e.card_ext
},function(c){
"open_card_detail:fail"==c.err_msg||"open_card_detail:ok"==c.err_msg||"open_card_detail:cancel"==c.err_msg?e.success&&e.success(c):c.err_msg.indexOf("function_not_exist")>=0?e.function_not_exist&&e.function_not_exist():"system:access_denied"==c.err_msg?e.access_denied&&e.access_denied("openCardDetail"):e.error&&e.error(c);
});
}
function n(){
c.invoke("batchAddCard",{
card_list:[{
card_id:e.card_id,
card_ext:e.card_ext
}]
},function(c){
"batch_add_card:ok"==c.err_msg||"batch_add_card:fail"==c.err_msg||"batch_add_card:cancel"==c.err_msg?e.success&&e.success(c):c.err_msg.indexOf("function_not_exist")>=0?r():"system:access_denied"==c.err_msg?e.access_denied&&e.access_denied("batchAddCard"):e.error&&e.error(c);
});
}
n();
},
supportCardDetail:function(e){
c.invoke("openCardDetail",{
card_id:"err_id"
},function(c){
e.callback(c.err_msg.indexOf("function_not_exist")>=0?!1:!0);
});
},
openCard:function(e){
c.invoke("batchViewCard",{
cardList:[{
cardId:e.cardId,
code:e.code
}]
},function(c){
c.err_msg.indexOf("function_not_exist")>=0?e.function_not_exist&&e.function_not_exist():e.success&&e.success(c);
});
}
};
return r;
});define("appmsg/friend_comment_tpl.html.js",[],function(){
return'<#if(window.new_appmsg){#>\n    <div class="discuss_container" id="js_friend_cmt_main" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <p class="discuss_icon_tips tc" id="js_cmt_addbtn3" style="display:none">\n            <a href="javascript:;" id="js_cmt_write3">留言</a> <!-- 有留言的时候的写留言入口 -->\n        </p>\n        <#}#>\n        <div class="mod_title_context">\n            <strong class="mod_title">朋友留言</strong>\n        </div>\n        <!-- <ul class="discuss_list" id="js_friend_cmt_list"></ul> -->\n        <!-- _js_friend_cmt放全部留言，用来计算总高度，展开的时候赋值给js_friend_cmt  -->\n        <!-- js_friend_cmt初始的时候放前三条留言，展开的时候把总高度加上  -->\n        <ul class="friend_cmt_area hide" id="js_friend_cmt_list_hide"></ul>\n        <ul class="friend_cmt_area" id="js_friend_cmt_list"></ul>\n        <p class="friend_cmt_readmore" style="display:none;" id="js_more_friend_cmt_area">\n            <a href="javascript:void(0);" id="js_more_friend_cmt">更多朋友留言</a>\n        </p>\n    </div>\n\n    <!-- 没有付费才给写留言入口 -->\n    <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n    <div class="mod_title_context">\n        <p class="discuss_icon_tips tc" id="js_cmt_addbtn4" style="display:none">\n            <a href="javascript:;" id="js_cmt_write4">留言</a> <!-- 没有留言的时候的写留言入口 -->\n        </p>\n    </div>\n    <#}#>\n\n<#}else{#>\n    <div class="discuss_container" id="js_friend_cmt_main" style="display:none">\n        <p class="discuss_icon_tips title_bottom_tips tr" id="js_cmt_addbtn3" style="display:none">\n            <!-- 没有付费才给写留言入口 -->\n            <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n            <a href="javascript:;" id="js_cmt_write3"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n            <#}#>\n        </p>\n        <div class="rich_tips with_line title_tips discuss_title_line">\n            <span class="tips">朋友留言</span>\n        </div>\n        <!-- <ul class="discuss_list" id="js_friend_cmt_list"></ul> -->\n        <!-- _js_friend_cmt放全部留言，用来计算总高度，展开的时候赋值给js_friend_cmt  -->\n        <!-- js_friend_cmt初始的时候放前三条留言，展开的时候把总高度加上  -->\n        <ul class="friend_cmt_area hide" id="js_friend_cmt_list_hide"></ul>\n        <ul class="friend_cmt_area" id="js_friend_cmt_list"></ul>\n        <p class="friend_cmt_readmore" style="display:none;" id="js_more_friend_cmt_area">\n            <a href="javascript:void(0);" id="js_more_friend_cmt">更多朋友留言</a>\n        </p>\n    </div>\n\n    <p class="discuss_icon_tips rich_split_tips tc" id="js_cmt_addbtn4" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <a href="javascript:;" id="js_cmt_write4"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n        <#}#>\n    </p>\n\n<#}#>\n';
});define("appmsg/comment_tpl.html.js",[],function(){
return'<#if(window.new_appmsg){#>\n    <div class="discuss_container" id="js_cmt_main" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <p class="discuss_icon_tips tc" id="js_cmt_addbtn1" style="display:none">\n            <a href="javascript:;" id="js_cmt_write1">留言</a>\n        </p>\n        <#}#>\n        <div class="mod_title_context">\n            <strong class="mod_title">精选留言</strong>\n            <p class="tips_global tr title_bottom_tips" id="js_cmt_nofans1" style="display:none;">作者已设置关注后才可以留言</p>\n        </div>\n        <ul class="discuss_list" id="js_cmt_list"></ul>\n    </div>\n\n\n    <!-- 没有付费才给写留言入口 -->\n    <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n    <div class="mod_title_context">\n        <p class="discuss_icon_tips tc" id="js_cmt_addbtn2" style="display:none">\n            <a href="javascript:;" id="js_cmt_write2">留言</a>\n        </p>\n    </div>\n    <#}#>\n\n    <div class="tips_global rich_split_tips tc" id="js_cmt_nofans2" style="display:none;">\n        作者已设置关注后才可以留言    </div>\n    <p class="rich_split_tips tc tips_global" id="js_cmt_tips" style="display:none;"></p>\n\n\n    <div class="weui-loadmore" id="js_cmt_loading">\n        <i class="weui-loading"></i>\n        <span class="weui-loadmore__tips">正在加载</span>\n    </div>\n\n    <div class="rich_split_tips tc discuss_end_tips" id="js_cmt_statement" style="display:none">\n        <div class="weui-loadmore weui-loadmore_line weui-loadmore_dot">\n            <span class="weui-loadmore__tips"></span>\n        </div>\n        <!--\n        以上留言由公众号审核产生，        <a href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150313qmMbyi.html?scene_id=kf264">\n            了解留言功能详情        </a>\n        -->\n    </div>\n<#}else{#>\n    <div class="discuss_container" id="js_cmt_main" style="display:none">\n        <p class="discuss_icon_tips title_bottom_tips tr" id="js_cmt_addbtn1" style="display:none">\n            <!-- 没有付费才给写留言入口 -->\n            <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n            <a href="javascript:;" id="js_cmt_write1"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n            <#}#>\n        </p>\n        <div class="rich_tips with_line title_tips discuss_title_line">\n            <span class="tips">精选留言</span>\n        </div>\n        <p class="tips_global tc title_bottom_tips" id="js_cmt_nofans1" style="display:none;">该文章作者已设置需关注才可以留言</p>\n        <ul class="discuss_list" id="js_cmt_list"></ul>\n    </div>\n\n\n    <p class="discuss_icon_tips rich_split_tips tc" id="js_cmt_addbtn2" style="display:none">\n        <!-- 没有付费才给写留言入口 -->\n        <#if(window._copyright_stat!=1 || window.need_pay!=1){#>\n        <a href="javascript:;" id="js_cmt_write2"><img class="icon_edit" src="<#=window.comment_edit_icon#>" alt="">留言</a>\n        <#}#>\n    </p>\n\n    <div class="tips_global rich_split_tips tc" id="js_cmt_nofans2" style="display:none;">\n        该文章作者已设置需关注才可以留言    </div>\n    <p class="rich_split_tips tc tips_global" id="js_cmt_tips" style="display:none;"></p>\n\n\n    <div class="rich_tips tips_global loading_tips" id="js_cmt_loading">\n        <img src="<#=window.comment_loading_img#>" class="rich_icon icon_loading_white" alt="">\n        <span class="tips">加载中</span>\n    </div>\n\n    <div class="rich_tips with_line tips_global" id="js_cmt_statement" style="display:none">\n        <span class="tips">以上留言由公众号筛选后显示</span>\n    </div>\n\n    <p class="rich_split_tips tc" id="js_cmt_qa" style="display:none;">\n        <a href="http://kf.qq.com/touch/sappfaq/150211YfyMVj150313qmMbyi.html?scene_id=kf264">\n            了解留言功能详情        </a>\n    </p>\n<#}#>\n\n';
});define("biz_wap/utils/fakehash.js",["biz_common/dom/event.js"],function(t){
"use strict";
function s(t){
t=t||location.hash.substr(1);
var s,o,e,i,r=!1,c=[];
for(s=0;s<h.length;s++)o=h[s],e=o[0],i=o[1],e!==a?("string"==typeof e&&e===t||e instanceof RegExp&&e.test(t))&&(i(n),
r=!0):c.push(i);
if(!r)for(s=0;s<c.length;s++)c[s](n,t);
n=t;
}
var o=t("biz_common/dom/event.js"),h=[],a="__default_hash__",n=location.hash.substr(1);
return o.on(window,"popstate",function(t){
var o=a;
t.state&&t.state.hash&&(o=t.state.hash),s(o);
}),o.on(window,"hashchange",s),o.on(window,"load",function(){
history.state&&history.state.hash&&s(history.state.hash);
}),{
val:function(){
return history.state&&history.state.hash||location.hash.substr(1);
},
push:function(t){
history.pushState?(history.pushState({
hash:t
},document.title,location.href),s(t)):location.hash=t;
},
replace:function(t){
history.replaceState?(history.replaceState({
hash:t
},document.title,location.href),s(t)):this.push(t);
},
on:function(t,s){
"function"==typeof t&&(s=t,t=a),h.push([t,s]);
}
};
});