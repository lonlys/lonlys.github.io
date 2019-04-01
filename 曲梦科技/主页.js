    var lg  = document.getElementById("lg");
    var nav_cont = document.getElementById("nav_cont");
    var lis=nav_cont.children[0].children;
    var current = 0; 
    //alert(lis.length);
    for(var i=0; i<lis.length;i++) {
        lis[i].onmouseover = function() {
            // alert(this.offsetLeft);
            target = this.offsetLeft;  // 把左侧的位置 ，给 target
        }
        // lis[i].onmouseout = function() {
        //     target = current;     // 鼠标离开  target 是 刚才我们点击的位置
        // }
        // lis[i].onclick = function() {
        //    current = this.offsetLeft;//点击的时候吧当前位置存贮一下
        // }
     }
    var leader = 0, target = 0;
    setInterval(function(){
        leader = leader + (target - leader ) / 10;

        lg.style.left = leader + "px";
    },10);



 var top_bg = document.getElementById('top_bg');
    // 获取导航条距页面顶部的距离
    var titTop = top_bg.offsetTop;
    //设置滚动监听事件
    // onscroll滚动条件
    document.onscroll = function() {
            //获取当前滚动距离  //scrollTop卷进去的距离
            var btop = document.body.scrollTop || document.documentElement.scrollTop;//这里是一个兼容性处理 有的浏览器支持body 有的支持documentElement
            //如果滚动距离大于导航条距顶部距离
            if (btop > titTop) {
                    //为导航条设置fixed
                    top_bg.className = "fix";
            }else {
                    //移出fixed
                    top_bg.className = "";
            }
    }//当卷进去的内容大于导航







    var gygs_btm=document.getElementById('gygs_btm');
    var ad=document.getElementById("ad");
    var ul=ad.children[0];
    var ol=ad.children[1];

    var ulliArr=ul.getElementsByTagName("li");
    var olliArr=ol.getElementsByTagName("li");
    var btnArr=document.getElementById("btnArr");
    var leftBtn=document.getElementById("left");
    var rightBtn=document.getElementById("right");

    var timer1=null;
    var timer2=null;

    var num=0;
    function autoOpa() {
        var opa=0;
        if(timer1){
            clearInterval(timer1);
        }
        timer1=setInterval(function(){
            opa+=0.05;
            if(opa>1){
                opa=1;//当前的显示
                // console.log(opa);
                clearInterval(timer1);
                // 其他所有的都隐藏
                for(var i=0; i<ulliArr.length; i++){
                ulliArr[i].style.opacity=0;
                ulliArr[i].style.zIndex=0;

                }
            }
            ulliArr[num].style.opacity=opa;
        },30)
    }

    autoOpa();
// 2.开启第二个定时器，控制num自增
    function autoNum(){
        num++;//计数器自增，控制哪一张图片显示
        if(num>3){
            num=0;
        }
        if(num<0){
            num=3;
        }
        autoOpa();
         
        autoBtn();
        ulliArr[num].style.zIndex=1;
    }

    function autoBtn(){
        for(var j=0; j<olliArr.length; j++){
            olliArr[j].className="";
        }
        olliArr[num].className="current";

    }
    function autoplay(){
        if(timer2){
            clearInterval(timer2);
        }
        timer2=setInterval(autoNum,2000);
    }
    autoplay();

    gygs_btm.onmouseover=function(){
        
        clearInterval(timer2);


        
    }
// 6.鼠标经过gygs_btm的时候，清楚定时器，鼠标移开，重新开启定时器
    gygs_btm.onmouseout=function(){
        
        autoplay();


        
    }
    
    rightBtn.onclick=function(){
        autoNum();
    }
    // 4.左侧按钮点击，执行函数autoNum()
    // num-=2;
    leftBtn.onclick=function(){
        num-=2;
        
        autoNum();//2+1-2  3+1-2
    }
    for(var m=0; m<olliArr.length; m++){
        olliArr[m].onclick=function(){


            // 排他思想
            for(var n=0; n<olliArr.length; n++){
                if(this==olliArr[n]){
                    olliArr[n].className="current";
                    // 7.关联num 和鼠标滑过小方块的时候，的索引值
                    num=n;
                    autoOpa();
                    ulliArr[num].style.zIndex=1;
                }else{
                    olliArr[n].className="";
                    ulliArr[n].style.zIndex=0;
                }
            }
            autoplay();
        }
    }



    var timer3=null;
    function chageHeight(target){
        clearInterval(timer3);
        var speed=target>libg.offsetWidth?10:-10;
         timer3=setInterval(function(){
            if(libg.offsetWidth==674){
                clearInterval(timer3);
                libg.style.width=674+"px";
            }
            libg.style.width=libg.offsetWidth+speed+"px";

         },30)
    }







  var cutd = document.getElementById("cutd");  // 云彩
    var nav_cut = document.getElementById("nav_cut");
    var list = nav_cut.children[0].children;


    for(var i=0; i<list.length;i++) {
        list[i].onmouseover = function() {
           
            targht = this.offsetTop; 
            
        }

     }
     var time=null;
    // 缓动公式
    var leadec = 0, targht=0;
    time=setInterval(function(){
        leadec = leadec+ (targht - leadec ) / 10;
        cutd.style.top = leadec + "px";

 
    },10);


var zchu=document.getElementById("zchu");
var top_left=document.getElementById("top_left");
var kg=true;
zchu.onclick=function(){
    if(kg==true){
         // top_left.style.backgroundColor="white";
         actionFn(0,top_left)
         kg=false;
    }else{
         actionFn(-240,top_left)
         kg=true;

    }
   
}



var timer5=null;
var mubiao=-240;
function actionFn(target,ele){
            if (timer5) {
                clearInterval(timer5);
            }
            timer5=setInterval(function(){
            mubiao = mubiao + (target - mubiao )/10;
            ele.style.left = mubiao + "px";
            },10)
}


var wlw=document.getElementById("wlw");
var liBrr=wlw.getElementsByTagName("li");
var spanB=wlw.getElementsByTagName("span");
for(var i=0;i<liBrr.length;i++){
    liBrr[i].onmouseover=function(){
        for(var j=0;j<spanB.length;j++){
            if(this==liBrr[j]){
               startmov(spanB[j],190)
            }
        }
    }
     liBrr[i].onmouseout=function(){
        for(var j=0;j<spanB.length;j++){
            if(this==liBrr[j]){
               startmov(spanB[j],0)
            }
        }
    }
}



function startmov(obj,itarget){
  clearInterval(obj.timer);
  obj.timer = setInterval(function(){
   var speed =0;
   speed = (itarget - obj.offsetHeight)/8;
   speed = speed>0?Math.ceil(speed):Math.floor(speed);
   if(obj.offsetHeight == itarget){
   clearInterval(obj.timer);
   }
   else{
   obj.style.height = obj.offsetHeight+speed+'px';
   }
  },30);
 }





    var anlie=document.getElementById('anlie');
    var uls=anlie.getElementsByTagName('ul')[0];
    var zuo_btn=document.getElementById('you_btn');
    var you_btn=document.getElementById('zuo_btn');

    var liCrr=ul.getElementsByTagName('li');

    var timer7=null;

    // 需求，为了让轮播的第五张 平滑过渡到第一张，复制第一张到第五张后面
    // var liNew=uls.children[0].cloneNode(true);
    // uls.appendChild(liNew);

    // 自动播放
    // 定义两个计数器，利用定时器，每隔2秒自增一次，一个计数器来控制ul，另外一个控制小方块
    var key2=0; 
    var s2=0;
    // 注意，两个计数器，必须是全局变量
    function autoplay2(){
    key2++;
   if (key2>6) {
    uls.style.left=0+"px";
    key2=0;
   };


    move(uls,-key2*320);
   
    s2++;


}
    clearInterval(timer7);
    // timer7=setInterval(autoplay2,2000);
    

     
     


     var index2=0;
     // 定义一个索引值，判断点击次数
     you_btn.onclick=function(){
        autoplay2();
     }

     zuo_btn.onclick=function(){
        key2--;
        // 一旦key小于0，就让ul立刻跳转到第六张，然后滑动到第五张
        if(key2<0){
            uls.style.left=-3*320+"px";
            key2=4;
        }
        move(uls,-key2*320);

        s2--;
        if(s2<0){
            s2=10;
        }
     }
function move(ele,target){

        if(ele.timer){
            clearInterval(ele.timer);
        }
        ele.timer=setInterval(function(){
            var speed=(target-ele.offsetLeft)/15;
            speed=speed>0?Math.ceil(speed):Math.floor(speed);
            ele.style.left=ele.offsetLeft+speed+"px";
            var cha=Math.abs(target-ele.offsetLeft);
            if(cha<=Math.abs(speed)){
                ele.style.left=target+"px";
                clearInterval(ele.timer);
            }
        },30)
    }




var gs_conl=document.getElementById("gs_conl");
var gs_cont=document.getElementById("gs_cont");
var lib=gs_conl.getElementsByTagName("li");
var lic=gs_cont.getElementsByTagName("div");
  for(var i=0;i<lib.length;i++){
    lib[i].onclick=function(){
        for(var j=0;j<lib.length;j++){
            if (this==lib[j]) {
                lib[j].style.backgroundColor="black";
                lib[j].style.color="white";
                lic[j].style.display="block";
            }else{
                 lib[j].style.backgroundColor="white";
                 lib[j].style.color="black";
                lic[j].style.display="none";
            }
        }
    }
  }






  var wrap = document.getElementById("wrap");  // 大盒子
    var arrow = document.getElementById("arrow");  // 三角
    var slider = document.getElementById("slide");
    var lis3 = slider.getElementsByTagName("li");  // 所有要操作的盒子
    wrap.onmouseover = function() {  // 鼠标经过显示和隐藏 左右两个箭头
         animate(arrow,{'opacity':100});
    }
    wrap.onmouseout = function() {
        animate(arrow,{'opacity':0});
    }
    //  存储了每个图片的信息
    var json = [
        {   //  1
            width:80,
            top:8,
            left:20,
            opacity:20,
            z:2
        },
        {  // 2
            width:120,
            top:28,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:160,
            top:40,
            left:80,
            opacity:100,
            z:4
        },
        {  // 4
            width:120,
            top:28,
            left:240,
            opacity:80,
            z:3
        },
        {   //5
            width:100,
            top:10,
            left:225,
            opacity:20,
            z:2
        }
    ];
    //  两个按钮点击事件
    // 函数节流
    var jieliu = true; //  用来控制函数节奏的 变量
    var as = arrow.children;
    change();
    for(var k in as)
    {
        as[k].onclick = function() {
            if(this.className == "prev")
            {
                //  alert("左侧")  移除第一个   放到json 最后一个
                if(jieliu == true)
                {
                    change(false);
                    jieliu = false;  // 点击完毕之后，立马取反
                }

            }
            else
            {
               // alert('右侧');   把 最后一个json 删除   并且把最后一个添加到json 第一个位置
                if(jieliu == true)
                {
                    change(true);
                    jieliu = false;  // 点击完毕之后，立马取反
                }
            }
        }
    }

    function change(flag) {
        //  来判断
        if(flag)
        {
            // 把 最后一个json 删除   并且把最后一个添加到json 第一个位置
             json.unshift(json.pop());
        }
        else
        {
            //   移除第一个   放到json 最后一个
            json.push(json.shift());
        }
      // 为什么给for呢？ 以为我们的json 有5个  盒子li 有 5个
        for(var i=0;i<json.length; i++)
        {
            animate(lis3[i],{
                width: json[i].width,
                top: json[i].top,
                left: json[i].left,
                opacity:json[i].opacity,
                zIndex:json[i].z
            },function(){ jieliu = true;})  // 回调函数是等动画执行完毕  才行
        }
    }
 











var wrap2 = document.getElementById("wrap2");  // 大盒子
    var arrow2= document.getElementById("arrow2");  // 三角
    var slider2 = document.getElementById("slide2");
    var lis2 = slider2.getElementsByTagName("li");  // 所有要操作的盒子
    wrap2.onmouseover = function() {  // 鼠标经过显示和隐藏 左右两个箭头
         animate(arrow2,{'opacity':100});
    }
    wrap2.onmouseout = function() {
        animate(arrow2,{'opacity':0});
    }
    //  存储了每个图片的信息
    var json2 = [
        {   //  1
            width:80,
            top:8,
            left:20,
            opacity:20,
            z:2
        },
        {  // 2
            width:120,
            top:28,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:160,
            top:40,
            left:80,
            opacity:100,
            z:4
        },
        {  // 4
            width:120,
            top:28,
            left:240,
            opacity:80,
            z:3
        },
        {   //5
            width:100,
            top:10,
            left:225,
            opacity:20,
            z:2
        }
    ];
    //  两个按钮点击事件
    // 函数节流
    var jieliu2 = true; //  用来控制函数节奏的 变量
    var as2 = arrow2.children;
    change2();
    for(var b in as2)
    {
        as2[b].onclick = function() {
            if(this.className == "prev")
            {
                //  alert("左侧")  移除第一个   放到json 最后一个
                if(jieliu2 == true)
                {
                    change2(false);
                    jieliu2 = false;  // 点击完毕之后，立马取反
                }

            }
            else
            {
               // alert('右侧');   把 最后一个json 删除   并且把最后一个添加到json 第一个位置
                if(jieliu2 == true)
                {
                    change2(true);
                    jieliu2 = false;  // 点击完毕之后，立马取反
                }
            }
        }
    }

    function change2(flag) {
        //  来判断
        if(flag)
        {
            // 把 最后一个json 删除   并且把最后一个添加到json 第一个位置
             json2.unshift(json2.pop());
        }
        else
        {
            //   移除第一个   放到json 最后一个
            json2.push(json2.shift());
        }
      // 为什么给for呢？ 以为我们的json 有5个  盒子li 有 5个
        for(var i=0;i<json2.length; i++)
        {
            animate(lis2[i],{
                width: json2[i].width,
                top: json2[i].top,
                left: json2[i].left,
                opacity:json2[i].opacity,
                zIndex:json2[i].z
            },function(){ jieliu2 = true;})  // 回调函数是等动画执行完毕  才行
        }
    }

