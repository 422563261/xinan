(function(){
	var li = document.getElementById('nav_info').getElementsByTagName('li');
	for (var i = 0; i < li.length; i++) {
		li[i].onclick = function(){
			if (this.className = "inactive") {
				for (var k = 0; k < li.length; k++) {
					if (li[k].className = "active") {
						li[k].className = 'inactive';
						// class和className兼容方法：
						// object.setAttribute("class","content")
						// 在IE8、Chrome、火狐、Opera10中都能设置成功；但是在IE7下无法设置。
						// object.setAttribute("className","content")
						// 只有IE7能设置成功，但是其他浏览器均无法设置。
						// 兼容方法：
						// 使用 object.className="content"
					}
				}
				this.className = 'active';
			}
		}
	}
})();

