function $_ajax(josn){
	if (!josn.method) {
		josn.method="get";
	}
	if (!josn.data) {
		josn.data="";
	}
	ajax(josn.method,josn.url,josn.data,josn.success);

}


function ajax(method,url,data,success){
	var xhr = null;

		try{
				xhr = new XMLHttpRequest();
			}catch(error){
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		if (method=="get"&&data) {
			url+="?"+data;	
		}
			
		xhr.open(method, url, true);
		
		 if (method=="get") {
		 	xhr.send();
		}else{
		
			xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded"); 
			xhr.send(data);
		}
		xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if (xhr.status==200) {
							if (success) {
								success(xhr.responseText);
							}
							
						}
					
					}
				}

}