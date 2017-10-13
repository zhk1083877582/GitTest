$(function(){
/*	$.ajax({
		type:"get",
		url:"json/nextTop.json",
		success:function(res){
			var html = "";
			var con = "";
			for(var i = 0; i<res.length; i++){*/
//				html += '<li class="item"><a href="#" class="link"></a></li>'
//				html += '<div class="resumeWrap"><div class="catalogInfo"><p class="title">'+res[i].title+'</p><a href="#" class="imgWrap"><img src="'+res[i].img+'" alt="" /></a></div></div></div><div class="catalogChoice"></div>'
				/*for(var j = 0;j < res[i].text1.length;j++){
					alert(res[i].text1.length);
					con += '<div class="catalogChoice"><ul><li>'+res[i].text1[j]+'</li><li>'+res[i].text1[j]+'</li><li>'+res[i].text1[j]+'</li><li>'+res[i].text1[j]+'</li></ul></div>'
				}*/
			/*	con += '<div class="catalogChoice"><ul><li>'+res[i].text1+'</li></ul></div>'
			}
			
//			$(".resumeContainer").html(html);
			$(".resumeWrap").append($(con));
			
			}
		})*/
	
	
//hover上去字体变颜色
	$(".wrap").find("a").hover(function(){
		$(this).css("color","#f36");
	},function(){
		$(this).css("color","#363636")
	})
	
			$.ajax({
				type:"get",
				url:"json/next-goods.json",
				success:function(res){
					var html = "";
					for(var i = 0;i < res.length;i++){
						html += '<a href="shopgoods1.html"><div class="item pic-list item_active" id= "'+ res[i].id +'"><img src="'+res[i].img +'" alt="" /><div class="info"><div class="part"><div class="price">'+res[i].prise+'</div><div class="collect"><i class="icon-star"></i>'+res[i].number+'</div></div><p class="title"><span class="icon-select"><img src="'+ res[i].img_2+'" alt="" /></span>'+res[i].title+'</p></div></div></a>'
					}
					
					$(".js-wall").html(html);
				}
			});	
			
			
	
//bottm显示页数
		$(".pageNav").find("a").click(function(){
			$(".pageNav").find("a").attr("class","");
			$(this).attr("class","currentpage");
		})
			
})



















