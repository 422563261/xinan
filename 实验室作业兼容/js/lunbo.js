window.onload = function () {
		var pic = document.getElementById('lunbo');
		var wait = false;
		var timer;
		var li = document.getElementById('choose_pic').getElementsByTagName('li');
		function animate(move){
			wait = true;
			var time = 300;
			var interval = 10;
			var speed;
			var last = parseFloat(pic.style.left) + move;

			function flash(){
				speed = (last - parseFloat(pic.style.left))/(time/interval);
				if (speed < 0) {
					speed = Math.floor(speed);
				};
				if (speed < 0 && parseFloat(pic.style.left) > last) {
                   pic.style.left = parseFloat(pic.style.left) + speed + 'px';
                   setTimeout(flash, interval);
				}
				else{
					wait = false;
	                pic.style.left = last + 'px';
                    if (pic.style.left == -831 + 'px') {
			        pic.style.left = 0 + 'px';
                    }    
	            }
	            if (parseFloat(pic.style.left) < 0&&parseFloat(pic.style.left) > -277) {
	            	li[2].className = 'pic_active';
	            	li[1].className = '';
	            	li[3].className = '';

	            }
	            else if(parseFloat(pic.style.left) < -277&&parseFloat(pic.style.left) > -554) {
	            	li[1].className = 'pic_active';
	            	li[2].className = '';
	            	li[3].className = '';
	            }
	            else if(parseFloat(pic.style.left) < -554) {
	            	li[3].className = 'pic_active';
	            	li[2].className = '';
	            	li[1].className = '';
	            }
            }
            flash();

		}
		function startflash(){
			timer = setTimeout(function(){
				if (!wait) {
					animate(-277);
				}
				startflash();
			},4000);
		}
		function stopflash() {
            clearTimeout(timer);
        }
        startflash();
        pic.onmouseover = function() {
        	stopflash();
        }
        pic.onmouseleave = function(){
        	startflash();
        }
		// pic.addEventListener("mouseover",function(){stopflash();console.log(1)});
		//pic.addEventListener("mouseleave",function(){startflash();console.log(2)});
	}