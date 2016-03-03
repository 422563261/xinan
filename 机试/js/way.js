//1.document.getElementById('xxx');
//2.document.getElementsByTagName('xx');
//3.doucument.getElementByClassName('xx');
//4.document.getElementByName('xxx');



var btn = document.getElementById('btn');
var num = 0;
btn.onclick = function () {
	if(num == 0){
		btn.style.background = "#ababab";
		num = 1;
	}
	else{
		btn.style.background = "#000";
		num = 0;
	}
}///click way 1
// btn.addEventListener('click',function(){
// 	btn.style.backgroundColor = "#ababab";
// })///click way 2
// btn.attachEvent('click',function(){
// 	btn.style.backgroundColor = "#ababab";
// })///click way 3 ie



btn.setAttribute('class','nicai');//chrome
btn.setAttribute('className','nicai');//ie
btn.className = 'nicai';



var li =  document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
	if (i == li.length - 1) {
		console.log(li[i].innerHTML);
	};
};
for (var i = 0; i < li.length; i++) {
	if (li[i].nextSibling != li[i-1]) {
		console.log(li[i].innerHTML);
	};
};

