//购物车
var oCart = document.querySelector('.top .cart');
var oCartLink = document.querySelector('.top .cart .cart-box a');
var oCartContent = document.querySelector('.top .cart .cart-content');
var oLoader = oCartContent.querySelector('.loader');
var oEmptyCart = oCartContent.querySelector('.empty-cart');
oCart.onmouseenter = function(){
	oCartLink.style.backgroundColor = '#fff';
	oCartLink.style.color = '#ff6700';
	oLoader.style.display = 'block';
	//显示购物车内容，假设购物车完全显示就获取到了购物车数据
	animate(oCartContent,{height:100},true,function(){
		oLoader.style.display = 'none';
		oEmptyCart.style.display = 'block';
	});
}
oCart.onmouseleave = function(){
	oCartLink.style.backgroundColor = '#424242';
	oCartLink.style.color = '#b0b0b0';
	animate(oCartContent,{height:0},true);
	oLoader.style.display = 'none';
	oEmptyCart.style.display = 'none';
}







/*轮播图*/
	var aImg = document.querySelectorAll('.carousel-imgs-item');
	var oLeftArrow = document.querySelector('.left-arrow');
	var oRightArrow = document.querySelector('.right-arrow');
	var aBtn = document.querySelector('.carousel-btn').children;
	var oCarousel = document.querySelector('.carousel');
	var timer = 0;

	var now = 0;
	function tab(){
		for(var i = 0;i<aImg.length;i++){
			aImg[i].style.zIndex = '0';
			aBtn[i].className = '';
			aImg[i].style.opacity = '0';
		}
			aImg[now].style.zIndex = '99';
			aBtn[now].className = 'active';
			aImg[now].style.opacity = '1';
	}
	oRightArrow.onclick = function(){
		now++;
		if(now >= aImg.length){
			now = 0;
		}
		tab();
	}
	oLeftArrow.onclick = function(){
		now--;
		if(now < 0){
			now = aImg.length - 1;
		}
		tab();
	}
	for(var i = 0;i<aBtn.length;i++){
		aBtn[i].index = i;
		aBtn[i].onclick = function(){
			now = this.index;
			tab();
		}
	}
	timer = setInterval(oRightArrow.onclick,5000);
	oCarousel.onmouseover = function(){
		clearInterval(timer);
	}
	oCarousel.onmouseout = function(){
		timer = setInterval(oRightArrow.onclick,5000);
	}


/*倒计时*/
	var oTimeNum1 = document.querySelectorAll('.timer-num')[0];
	var oTimeNum2 = document.querySelectorAll('.timer-num')[1];
	var oTimeNum3 = document.querySelectorAll('.timer-num')[2];
	var endDate = new Date('2018-12-25 20:00:00');
	var endtimes = endDate.getTime();
	function to2Str(num){
			return num < 10 ? '0'+ num : ''+ num;
		}
	function tonow(){
		var allMilsec = endtimes - Date.now();
		var allSec = parseInt(allMilsec/1000);
		var iHour = parseInt(allSec/3600);
		var iMinute = parseInt(allSec%3600/60);
		var iSecond = allSec%3600%60;
		oTimeNum1.innerHTML = to2Str(iHour);
		oTimeNum2.innerHTML = to2Str(iMinute);
		oTimeNum3.innerHTML = to2Str(iSecond);
	}
	setInterval(tonow,1000);
	tonow();

/*选项卡*/
	