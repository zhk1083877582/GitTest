$(function(){
	$(".all").hover(function(){
		$(".slideer").css("display","block");
	},function(){
		$(".slideer").css("display","none")
	});
	
	$(".z-nav-list").hover(function(){
		$(this).find(".category_list").css("display","block");
	},function(){
		$(this).find(".category_list").css("display","none");
	});
	$(".style").find(".img").click(function(){
		$(".style").find(".img").attr("class","")
		$(this).addClass("c")
	});
	$(".close-btn").click(function(){
		$(".lb_bd").css("display","none");
	})
	
	$("#join").on("click",function(){
				var src = $(".centerbox ul .now").find("img").attr("src");
				var imgname = $(".centerbox .imgname").html();
				var price = $(".centerbox .price samp").html();
					$.cookie("goods",src + ":" + imgname + ":" + price,{
						expirse:7,
						path:"/"
					})
//				alert($.cookie("goods"));
				return false;
			})
	

	  var showproduct = {
		  "boxid":"showbox",
		  "sumid":"showsum",
		  "boxw":400,
		  "boxh":550,
		  "sumw":60,//列表每个宽度,该版本中请把宽高填写成一样
		  "sumh":60,//列表每个高度,该版本中请把宽高填写成一样
		  "sumi":7,//列表间隔
		  "sums":5,//列表显示个数
		  "sumsel":"sel",
		  "sumborder":1,//列表边框，没有边框填写0，边框在css中修改
		  "lastid":"showlast",
		  "nextid":"shownext"
		  };//参数定义	  
	 $.ljsGlasses.pcGlasses(showproduct);//方法调用，务必在加载完后执行
	 
	 $(function(){

		$('.tabs a').click(function(){
			
			var $this=$(this);
			$('.panel').hide();
			$('.tabs a.active').removeClass('active');
			$this.addClass('active').blur();
			var panel=$this.attr("href");
			$(panel).show();				
			return false;
			})//end click
				
			$(".tabs li:first a").click()   //web 浏览器，单击第一个标签吧

		})//end ready
		
		$(".centerbox li").click(function(){
			$("li").removeClass("now");
			$(this).addClass("now")
			
		});
})
