function loadScript(url, idName, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	
	// 注册js文件载入完成后的响应函数.
	if (script.readyState) {
		if (script.onreadystatechange = function() {
			if (script.readyState === "loaded" || script.readyState === "complete")
			{
				script.onreadystatechange = null;
				callback();
			}
		});
		
	} else {
		script.onload = function () {
			callback();
		}
	}
	
	script.src = url;
	document.getElementById(idName).appendChild(script);
	
}