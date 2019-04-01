var box_top_right=document.getElementById('box_top_right');
		var box_top_right_li=box_top_right.getElementsByTagName('li');

		var carousel_ol=document.getElementById('carousel_ol');
		var carousel_ol_li=carousel_ol.getElementsByTagName('li');

		var carousel_ul=document.getElementById('carousel_ul');
		var carousel_ul_li=carousel_ul.getElementsByTagName('li');
		var carousel_ul_li2=document.getElementById('carousel_ul_li2');


		var timer9=null;

		var key8=0;

		var top_pic1=document.getElementById('top_pic1');
		var embed=document.getElementById('embed');
 
		//右边小圆点切换 上面切换
		for(var i=0;i<carousel_ol_li.length;i++){
			carousel_ol_li[i].index=i;
			carousel_ol_li[i].onclick=function(){
				key8=this.index;
				tab();
			}
			//上面切换
			box_top_right_li[i].index=i;
			box_top_right_li[i].onclick=function(){
				key8=this.index;
				tab();
			}
		}
		function tab(){
			for(var j=0;j<carousel_ol_li.length;j++){
				carousel_ol_li[j].className='';
				// box_top_right_li[j].style.color='rgb(0,159,227)';
			}
			// carousel_ol_li[key8].className='bgc';

			// box_top_right_li[key8].style.color='black';
			move3(carousel_ul,-key8*638);

		}
function move3(ele,target){

		if(ele.timer9){
			clearInterval(ele.timer9);
		}
		ele.timer9=setInterval(function(){
			var speed=(target-ele.offsetTop)/15;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			ele.style.top=ele.offsetTop+speed+"px";
			var cha=Math.abs(target-ele.offsetTop);
			if(cha<=Math.abs(speed)){
				ele.style.top=target+"px";
				clearInterval(ele.timer9);
			}
		},30)
	}
	//滚轮切换
	if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		document.addEventListener('DOMMouseScroll',fnWheel,false)
	}else{
		document.onmousewheel=fnWheel;
	}
	var isWheel=true;
		function fnWheel(ev){
			if(isWheel){
				var event=ev||event;
				var down=false;
				if(event.wheelDelta){
					down=event.wheelDelta<0?true:false;
				}else{
					down=event.detail<0?false:true;
				}
				if(down){
					key8++;
					if(key8>carousel_ol_li.length-1){
						key8=carousel_ol_li.length-1;
					}
				}else{
					key8--;
					if(key8<0){
						key8=0;
					}
				}
				isWheel=false;
				setTimeout(function(){
					isWheel=true;
				},2000)
				tab();
			}
		}