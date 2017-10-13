function setCookie(name, value, {expires = 7, path, domain, secure}){
			var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
				if(expires){
					cookieText += ";expires=" +numOfDate(expires) ;
				}
				if(path){
					cookieText += ";path=" + path;
				}
				if(domain){
					cookieText += ";domain=" + domain;
				}
				if(secure){
					cookieText += ";secure";
				}
			
			//设置cookie
			document.cookie = cookieText;
		}


		function getCookie(name){
			//1、取出存好的cookie
			var cookieText = decodeURIComponent(document.cookie);
			//2、找出键值对的位置
			var start = cookieText.indexOf(name);
			if(start == -1){
				return null;
			}else{
				var end = cookieText.indexOf(";", start);
				if(end == -1){
					//这是结尾
					end = cookieText.length;
				}
			}

			//3、将键值对提取出来
			var str = cookieText.substring(start, end);
			var arr = str.split("=");
			return arr[1];
		}

		// 超级英雄=钢铁侠; X战警=金刚狼; 变种人=万磁王

		function removeCookie(name){
			document.cookie = encodeURIComponent(name) + "= ;expires=" + new Date(0);
		}


		//alert(new Date(0)); //快速生成过去的时间
		// alert(numOfDate(-1));

		function numOfDate(n){
			var d = new Date();
			var day = d.getDate();
			d.setDate(day + n);
			return d;
		}


/*		$_cookie("超级英雄", "钢铁侠", {
			expires: numOfDate(7)
		});
		$_cookie("X战警", "金刚狼", {
			expires: numOfDate(30)
		});	
		$_cookie("变种人", "万磁王", {
			expires: numOfDate(100)
		});	

		alert(decodeURIComponent(document.cookie));

		alert($_cookie("X战警"));
		$_cookie("X战警", null);
		alert($_cookie("X战警"));*/
		




		/*
			合并成一个
			$_cookie()
			$_cookie(name); getCookie
			$_cookie(name, null); 删除cookie
			$_cookie(name, value, json); setCookie
		*/

		function $_cookie(){
			//通过参数所传内容区分
			switch(arguments.length){
				case 1: //获取cookie
					return getCookie(arguments[0]);
					break;
				case 2:
					//1、删除cookie
					if(!arguments[1]){
						removeCookie(arguments[0]);
					}else{
						//2、设置cookie
						setCookie(arguments[0], arguments[1]);
					}
					break;
				default:
					//3、设置cookie  arguments[2] 必须是json对象
					setCookie(arguments[0], arguments[1], arguments[2]);
					break;
			}
		}