$(function(){
//pic-nav插入背景图
	$.ajax({
		type:"get",
		url:"json/pic-nav.json",
		success:function(res){
			var html = "";
			for(var i = 0; i<res.length; i++){
				html += '<li class="item"><a href="#" class="link"></a></li>'
			}
			$(".pic-nav .channels").html(html);
			
			$(".pic-nav .channels").find(".item .link").each(function(item){
				$(this).css("background-image",'url('+ res[item].img +')')
			})
			
		}
	});
	$.ajax({
		type:"get",
		url:"json/nav2.json",
		success:function(res){
			var html = "";
			for(var i = 0;i < res.length;i++){
				html += '<li class="list"><div class="list_cont"><h3 class="nav_tle"><a href="#">'+res[i].title+'</a></h3><p class="listP">'
				for(var j = 0;j < res[i].classify.length;j++){
					//创建a添加到之前创建的盒子里。
				html += '<a href="#">'+res[i].classify[j].details+'</a>'
				}
				html +='</p><samp class="corner"><img src="'+ res[i].img +'"/></samp></div><ul class="nav_list"><li><h4><a href="#">'+ res[i].right +'</a></h4><p>'//在这创建a外面的盒子，并且添加在ul里面。
				for(var k = 0;k<res[i].details.length;k++){
					html += '<a href="#">'+res[i].details[k].details+'</a>'
				}
				html += '</p></li></ul></li>'
			}
			
			$(".sec_attr").html(html);
			
		}
	});

	$(".attr_box .sec_attr").delegate(".list","mouseenter",function(){
		$(this).addClass("active");
		$(this).find(".nav_list").css("display","block");
	})	
	$(".attr_box .sec_attr").delegate(".list","mouseleave",function(){
		$(this).removeClass("active");
		$(this).find(".nav_list").css("display","none");
	})	
	/*$('.sec_attr').find('li').each(function(){
			$(this).hover(function(){
				$(this).find('.nav_list').css('display','block');
			},function(){
				$(this).find('.nav_list').css('display','none');

			})
		})*/
//今日新品
	$.ajax({
		type:"get",
		url:"json/today.json",
		success:function(res){
			var html = "";
			for(var i = 0;i < res.length;i++){
				html += '<div class="item pic-list" id= "'+ res[i].id +'"><img src="'+res[i].img +'" alt="" /><div class="info"><div class="part"><div class="price">'+res[i].prise+'</div><div class="collect"><i class="icon-star"></i>'+res[i].number+'</div></div><p class="title">'+res[i].title+'</p></div></div>'
			}
			
			$(".goods-today").html(html);
			
			$(".content").find(".pic-list").each(function(item){
//				alert(this.id)
				if(this.id % 5 == 0){
					$(this).css("margin-right","0")
				}
			})
		}
	});
//一周热销
	$.ajax({
		type:"get",
		url:"json/week.json",
		success:function(res){
			var html = "";
			for(var i = 0;i < res.length;i++){
				html += '<div class="item pic-list" id= "'+ res[i].id +'"><img src="'+res[i].img +'" alt="" /><div class="info"><div class="part"><div class="price">'+res[i].prise+'</div><div class="collect"><i class="icon-star"></i>'+res[i].number+'</div></div><p class="title">'+res[i].title+'</p></div></div>'
			}
			
			$(".goods-week").html(html);
			$(".content").find(".pic-list").each(function(item){
//				alert(this.id)
				if(this.id % 5 == 0){
					$(this).css("margin-right","0")
				}
			})
		}
	});
//今日热搜和一周热销选项卡切换	
	$("#top-goods .nav-wrap").find(".link").click(function(){
		$("#top-goods .nav-wrap").find("p").attr("class","")
		$("#top-goods").find(".content").css("display","none");
		$(this).attr("class","hover");
		$("#top-goods").find(".content").eq($(this).index()).css("display","block")
	})
	
	
//美丽优选图片
	var ipage = 0; 
			$.ajax({
				type:"get",
				url:"json/meiliyouxuan.json",
				success:function(res){
					var html = "";
					for(var i = 0;i < res[ipage].page.length;i++){
						html += '<div class="item pic-list" id= "'+ res[ipage].page[i].id +'"><img src="'+res[ipage].page[i].img +'" alt="" /><div class="info"><div class="part"><div class="price">'+res[ipage].page[i].prise+'</div><div class="collect"><i class="icon-star"></i>'+res[ipage].page[i].number+'</div></div><p class="title"><span class="icon-select"><img src="'+ res[ipage].page[i].img_2+'" alt="" /></span>'+res[ipage].page[i].title+'</p></div></div>'
					}
					
					$(".js-wall").html(html);
					$(".js-wall").find(".pic-list").each(function(item){
		//				alert(this.id)
						if(this.id % 5 == 0){
							$(this).css("margin-right","0")
						}
					})
				}
			});
			
	var islonging = false;			
	$(window).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var scrollHeight = $(document).height();
		var windowHeight = $(this).height();
//		var footerHeight = $(".footer").height();
//		alert(footerHeight);
		if(scrollTop + windowHeight >= scrollHeight){
			if(!islonging){
				islonging = true;
				ipage++ ;
				$.ajax({
					type:"get",
					url:"json/meiliyouxuan.json",
					success:function(res){
						var con = "";
						for(var i = 0;i < res[ipage].page.length;i++){
							con += '<div class="item pic-list" id= "'+ res[ipage].page[i].id +'"><img src="'+res[ipage].page[i].img +'" alt="" /><div class="info"><div class="part"><div class="price">'+res[ipage].page[i].prise+'</div><div class="collect"><i class="icon-star"></i>'+res[ipage].page[i].number+'</div></div><p class="title"><span class="icon-select"><img src="'+ res[ipage].page[i].img_2+'" alt="" /></span>'+res[ipage].page[i].title+'</p></div></div>'
						}				
						$(".js-wall").append($(con));
						$(".js-wall").find(".pic-list").each(function(item){
							if(this.id % 5 == 0){
								$(this).css("margin-right","0")
							}
						});
					}
					
				});
			
			}
		}
		islonging = false;
		if(ipage == 2){
			$(".pullUp").css("display","none")
		}		
	})

})














