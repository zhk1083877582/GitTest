window.onload = function(){
	var oBtn = document.getElementById("sub");
	var Text = document.getElementById("uname");
	var Pass = document.getElementById("pass");
	var error = document.getElementById("error");
			Text.onblur = function(){
				var ovalue = this.value.replace(/\s/ig,"");
				this.value = ovalue;
				if(/^[1-3]\d{10}$/.test(ovalue)){
					error.style.display = "none";
				}else{
					error.style.display = "block"
				}
			}	
}
