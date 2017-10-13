$(function(){
	/*head下拉菜单*/
	$(".inner li").mouseover(function(){
			$(this).find(".down").css("display","block")
		}).mouseout(function(){
			$(this).find(".down").css("display","none")
		})
	/*侧边栏回顶部按钮*/	
	$(window).scroll(function(){
		if($(this).scrollTop() > 1){//当window的scrolltop距离大于1时，go to top按钮淡出，反之淡入
			//alert($(window).scrollTop());
			$(".goToTop").fadeIn();
			
		}else{
			$(".goToTop").fadeOut();
		}
	});
	//小购物车
	$(".shopping_cart").hover(function(){
		$(".shop_cart_info").css("display","block");
	},function(){
		$(".shop_cart_info").css("display","none");
	});
	if($.cookie("goods")){
		var cookieStr = $.cookie("goods");
		var newarr = cookieStr.split(":");
		var goodshtml = "";
		if(cookieStr){
			goodshtml += '<ul class="max_height_ie6"><li><a href="#" class="imgbox"><img src='+ newarr[0] +'></a><a href="#" class="title">'+ newarr[1] +'</a><span class="info">颜色:白色 尺码:均码</span><span class="price">'+ newarr[2] +'</span><span class="del">删除</span></li></ul><div class="subbox"><div class="fr"><a href="mycar.html" target="_blank" class="goel">查看购物车</a></div></div>'
		$(".shop_cart_info").html(goodshtml);
		}
	}
	if(goodshtml){
			$(".empty_cart").css("display","none");
		}else{
			$(".empty_cart").css("display","block");
	}
	
	//给回顶部按钮添加点击事件和动画
	$(".goToTop").click(function(){
		$("html,body").stop().animate({scrollTop:0},400);
		return false;
	});
	
	//显示右侧导航栏二维码
	$(".download").hover(function(){
		$(".hide_erweima").css("display","block")
	},function(){
		$(".hide_erweima").css("display","none")
	})
	
	//导航栏滚动定位
	$(window).scroll(function(){
		
		if($(document).scrollTop() > 190){
			$(".sec_nav").addClass("fixednav classify");
			$(".stepping").css("display","block");
			$(".sec_nav").fadeIn();
		}else{
			$(".sec_nav").removeClass("fixednav classify");
			$(".stepping").css("display","none");
		}
	})
})
