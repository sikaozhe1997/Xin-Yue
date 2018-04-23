//搜索点击弹出效果
function SerMax(){
    $('#btn_ser').click(function(){
    	$('#ser').toggle(300);
    })
}
//下拉菜单 例调用：Nav('#nav');
function Nav(id){
	var oNav = $(id);
	var aLi = oNav.find('li');
	
	aLi.hover(function (){
        $(this).addClass('on');
	},function (){
        $(this).removeClass('on');
	})	
};
//12.移动端顶部点击弹出下拉菜单
function Menu(menu,main){
    var onOff = true;
    $(menu).bind('click',function (){
        $(main).slideToggle();
		if($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{
			$(this).addClass('open');
			}
    })
    $(main).find('li> strong').bind('click',function (){
        if($(this).parent().hasClass('on')){
            $(this).parent().find('dl').slideUp();
            $(this).parent().removeClass('on');
			$(this).html("+")
            return false;
        };
        $(this).parent().siblings().removeClass('on');
        $(this).parent().siblings().find('dl').slideUp();
        $(this).parent().addClass('on');
        $(this).parent().find('dl').slideDown();
		$(this).html('&times;');
    })
	
};


// 手机端下拉菜单
function navMin() {
    $("#mbtn").click(function(){
        $(".navm").toggle(300);
    });
};




/*tab切换*/
;(function($){
    $.fn.extend({
        tab: function (options){
            var defaults = {         //默认参数
                ev : 'mouseover',    //默认事件'mouseover','click'
                delay : 100,         //延迟时间
                auto : true,         //是否自动切换 true,false
                speed : 2000,        //自动切换间隔时间(毫秒)
                more : false         //是否有more,false,true
            };
            var options = $.extend(defaults, options);  //用户设置参数覆盖默认参数
            return this.each(function (){
                var o = options;
                var obj = $(this);
                var oTil = obj.find('.til_tab');
                var oBox = obj.find('.tabListBox');
                var oMore = null;
                var iNum = 0;
                var iLen = oTil.length;

                //鼠标事件绑定
                oTil.bind(o.ev , function (){
                    var _this = this;
                    if(o.ev == 'mouseover' && o.delay){
                        _this.timer = setTimeout(function (){
                            change(_this);
                        },o.delay);
                    }else{
                        change(_this);
                    }; 
                })

                oTil.bind('mouseout',function (){
                    var _this = this;
                    clearTimeout(_this.timer);
                });

                //自动切换效果
                (function autoPlay(){
                    var timer2 = null;
                    if(o.auto){
                        function play(){
                            iNum++;
                            if(iNum >= iLen){
                                iNum =0;
                            };
                            change(oTil.eq(iNum));
                        };
                        timer2 = setInterval(play,o.speed);

                        obj.on('mouseover',function (){
                            clearInterval(timer2);
                        })

                        obj.on('mouseout',function (){
                            timer2 = setInterval(play,o.speed);
                        })
                    };
                })();

                function change(box){
                    iNum = $(box).index();
                    oTil.removeClass('on');
                    oBox.css('display','none');
                    if(o.more){
                        oMore = obj.find('.more_tab');
                        oMore.css('display','none');
                        oMore.eq(iNum).css('display','block');
                    };
                    oTil.eq(iNum).addClass('on');
                    oBox.eq(iNum).css('display','block');
                }
            });
        }
    })
})(jQuery);




// 二级页头部大图高度
function SubImgHeight(){
    var iWSon = document.documentElement.clientWidth;
    var oSubbanner = document.getElementById('subbanner');

    if(iWSon>=1920){
    	oSubbanner.style.height = 350+'px';
    }else if(iWSon<1920){
    	oSubbanner.style.height = iWSon * (350/1920)+'px';
	}

	window.onscroll = window.onresize = function (){
		var iWSon = document.documentElement.clientWidth;
		if(iWSon>=1920){
	        oSubbanner.style.height = 350+'px';
	    }else if(iWSon<1920){
			oSubbanner.style.height = iWSon * (350/1920)+'px';
		}
	}

}

/*//字号大小
function ToMax(){
    var oArt = document.getElementById('art');
    var aEm = $('.rt01a_general em');

    aEm[0].onclick = aEm[3].onclick =function (){
    	oArt.style.fontSize = '1.4em';
    }
    aEm[1].onclick = aEm[4].onclick =function (){
    	oArt.style.fontSize = '1.6em';
    }
    aEm[2].onclick = aEm[5].onclick =function (){
    	oArt.style.fontSize = '1.8em';
    }
}*/
//字号大小
function FontSize2(Size,obj){
    var iNum = 13;

    $(Size).find('.max').bind('click',function (){
        iNum+=2;
        if(iNum>=24){
            iNum = 24;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })

    $(Size).find('.mid').bind('click',function (){
        iNum = 13;
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })

    $(Size).find('.min').bind('click',function (){
        iNum-=2;
        if(iNum<=14){
            iNum = 12;
        }
        $(obj).css('font-size',iNum + 'px');
        return iNum;
    })
};
//大图切换高度问题
function ImgHeight(){
	// var oSlider = document.getElementById('slider');
	// var aLiSlider = oSlider.getElementsByTagName('img');

	 window.onload = function (){
		var iHeight = document.documentElement.clientWidth * (365/1920);
		$('.rslides,.caption,.wz_caption').css('height',iHeight+'px');

		window.onscroll = window.onresize = function (){
			var iHeight = document.documentElement.clientWidth * (365/1920);
			$('.rslides,.caption,.wz_caption').css('height',iHeight+'px');
		}
     }
}


/*二维码显示*/
$(document).ready(function() {
    $(".btn01").click(function(){
		$(this).next("div").toggle(700)
		});
	$(".close").click(function(){
		$(this).parent().hide(300);
		})
});

function side_subMenu(){
	$('.sub_left').find('.arrow').click(function(){
		if($(this).parent().hasClass('on')){
            $(this).parent().find('dl').slideUp();
            $(this).parent().removeClass('on');
			$(this).html("+")
            return false;
        };
        $(this).parent().siblings().removeClass('on');
        $(this).parent().siblings().find('dl').slideUp();
        $(this).parent().addClass('on');
        $(this).parent().find('dl').slideDown();
		$(this).html('&times;');
		})
	}

