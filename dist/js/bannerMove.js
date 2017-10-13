	//banner图运动
	$(function(){
		var aBtns = $(".content-wrap .num").find("span")
		var aPrv = $(".content-wrap .bnr-btn-wrap").find(".prv");
		var aNext = $(".content-wrap .bnr-btn-wrap").find(".next");
		var oUL = $(".banner_box").find(".banner");
		var aLi = oUL.find("li");
		
		var iNow = 0;
		var timer = null;
		aBtns.click(function(){
			iNow = $(this).index();
			tab();
		})
		aPrv.click(function(){
			if(iNow == 0){
				iNow += 1
			}else{
				iNow -= 1;
			}
			
			tab();
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "cur");
			}
		})
		aNext.click(function(){
			iNow += 1;
			tab();
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "cur");
			}
		})
		
		function tab(){
			aBtns.attr("class","");
			aBtns.eq(iNow).attr("class","cur");
			
			oUL.animate({left:-1200 * iNow},
				function(){
					if(iNow == aBtns.size()){
						oUL.css("left",0);
						iNow = 0
					}
				})
		}
		function timerInner(){
			iNow++;
//			document.title = iNow;
			tab();
			
			if(iNow == aBtns.size()){
				aBtns.eq(0).attr("class", "cur");
			}
		}
		timer = setInterval(timerInner,3000);
		
		$(".content-wrap").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(timerInner,3000)
		})
	})
	
	
