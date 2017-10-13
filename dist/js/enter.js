window.onload = function(){
	var oBtn = document.getElementById("sub");
	var Text = document.getElementById("uname");
	var Pass = document.getElementById("pass");
	var error = document.getElementById("error");
	var arr = {
			username:"17362113082",
			password:"123456"
	}
		/*if ($_cookie("username")==arr.username&&$_cookie("password")==arr.password) {
				alert("自动登录成功");
			}*/
		oBtn.onclick=function(){
			if (Text.value==arr.username && Pass.value==arr.password) {
//				
				$_cookie("username",Text.value,{
					expires:7
				});
				$_cookie("password",Pass.value,{
					expires:7
				});
				error.style.display = "none";
				
				window.open("index.html");
			}else{
				error.style.display = "block";
			}
		}
		Pass.onblur = function(){
			if(Pass.value==arr.password){
				error.style.display = "none";
			}
		}
		Text.onblur = function(){
			var ovalue = this.value.replace(/\s/ig,"");
			this.value = ovalue;
			if(this.value.length != /^1[0-9]{10}/){
				error.style.display = "block";
			}else{
				error.style.display = "none"
			}
			if(this.value==arr.username){
				error.style.display = "none"
			}else{
				error.style.display = "block";
			}
		}	
}
