
    var scroll = $(window).scrollTop();
    var $head = $(".wrap-head");
    var $toptab = $(".wrap-toptab")
$(window).scroll(function(){
    
    if($(window).scrollTop() < scroll){
        $head.stop(true).animate({"top":0},100);
        $toptab.stop(true).animate({"top":56},100);
        
    }else if($(window).scrollTop() > scroll){
        $head.stop(true).animate({"top":-56},100);
        $toptab.stop(true).animate({"top":0},100);        
    }
    scroll = $(window).scrollTop();
    if(scroll<300){
        $(".toTop").fadeOut(500);
    }else{
        $(".toTop").fadeIn(500);        
    }
})

$(".toTop").click(function(){
    $("body").animate({"scrollTop":0},500)
})

$(".toptab li").mouseenter(function(){
    $(".toptab li div").stop(true).slideDown();
})
$(".toptab li").mouseleave(function(){
    $(".toptab li div").stop(true).slideUp(500);
})


var searchbox = document.getElementsByClassName("searchbox")[0];
var searchIcon = document.getElementsByClassName("searchIcon")[0];
var searchAnima = searchbox.getElementsByClassName("searchAnime")[0];
var flag = true;

    searchIcon.onclick = function(){
        if(flag){
            searchAnima.style.left = "14px";
            searchAnima.style.transition="0.1s";
            flag = !flag;
        }else{
            searchAnima.style.left = "280px"; 
            searchAnima.style.transition="0.5s";            
            flag = !flag;                       
        }
    }


    // var carouselContainer = document.getElementsByClassName("carouselContainer")[0];
    // var actionpoint = document.getElementsByClassName("actionpoint")[0];
    // var imgli = carouselContainer.getElementsByTagName("li");
    // var imgul = carouselContainer.getElementsByTagName("ul")[0];
    // var idx = 0;
    // var oLeft =0;
    // // carouselContainer.style.left = 0 +"px";

    // // imgul.innerHTML += imgul.innerHTML;
    // var timer = setInterval(function(){

    //     oLeft += 1000;
    //         carouselContainer.style.transition = "1s"; 

    //     if(oLeft > 1000*(imgli.length/2)){
    //         oLeft = 0;
    //         carouselContainer.style.transition = "none";
    //         // carouselContainer.style.left = 0 +"px";
    //     }    
    //     carouselContainer.style.left = -oLeft +"px";
    // },2000)

    
 
    var $carousel = $(".carouselContainer");
    $carousel.find("li").eq(0).clone().appendTo($(".carouselContainer ul"));
    var length = $carousel.find("li").length;
    var idx = 0;
    // console.log($carousel.find("li").eq(0).clone()  )
    // console.log(length);
    var timer = setInterval(function(){
        idx++;
        move();
    },2000);
    $(".leftBtn").click(function(){
        idx--;
        move();
    })
    $(".rightBtn").click(function(){
        idx++;
        move();
    })
    $(".carousel").mouseenter(function(){
        clearInterval(timer);
    })
    $(".actionpoint").mouseenter(function(){
        clearInterval(timer);        
    })
    $(".carousel").mouseleave(function(){
        timer = setInterval(function(){
            idx++;
            move();
        },2000);
    })
    $(".actionpoint").mouseleave(function(){
        timer = setInterval(function(){
            idx++;
            move();
        },2000);      
    })

    function move() {
        if(idx > length-1){
            idx = 1;
            $carousel.css("left",0)
        }
        if(idx < 0) {
            idx = length-2;
            $carousel.css("left",-idx*1000-1000)            
        }
        if(idx == length-1){
            $(".actionpoint li:first").addClass("cur").siblings().removeClass("cur");
        }
        $carousel.animate({"left":-idx*1000},1000);
        
        $(".actionpoint li").eq(idx).addClass("cur").siblings().removeClass("cur");
    }
    
    $(".actionpoint").find("li").each(function(i){
        var j = i;
        $(".actionpoint").find("li").eq(i).click(function(){
            idx = j;
            move();
        })

    }


    )

    
    


// var $ = {
//     ajax: function(option){
        
//         var dataType = option.dataType;
//         var url = option.url;
//         if(url == undefined){
//             throw new Error("地址有问题");
//             return;
//         }
//         var type = option.type || "GET"



//         var xhr = null;
//         // 能力判断
//         if( window.XMLHttpRequest){
//             xhr = new XMLHttpRequest();
//         }else{
//             xhr = new ActiveXObject("Microsoft.XMLHTTP")
//         }
//         // 当准备状态值改变是时触发事件
//         xhr.onreadystatechange = function(){
//             if(xhr.readyState == 4){

//                 if(xhr.status>=200 && xhr.status<300 || xhr.status ==304){

//                     if( (typeof option.success) === "function"){
//                         // 响应结果
//                         var response = '';
//                         if (dataType == "string"){
//                             response = xhr.responseText;
//                         }else if( dataType == "json"){
//                             // 将字符串反序列化
//                             response = JSON.parse(xhr.responseText)
//                         }
                        
//                         option.success( response );
//                     }
//                 }
//             }
//         }


//         xhr.open(type,url,true)
//         xhr.send(null);


//         }
//     }


var mainitem = document.getElementsByClassName("mainitem")[0];

$.ajax({
    "url":"http://h6.duchengjiu.top/shop/api_goods.php",
    "type":"GET",
    "dataType":"json",  
    "success":function(response){
        // console.log(response);

        var html = "";

        for(var i=0;i<response.data.length;i++){
            html += "<div class='itemlist'><img src='"+
            response.data[i].goods_thumb+
            "'><a href='detail.html?goods_id="+
            response.data[i].goods_id+
            "' class='goods'><p class='price'>￥"+
            response.data[i].price+
            "</p><p class='goodsname'>"+
            response.data[i].goods_name+
            "</p><p class='goodsdesc'>"+
            response.data[i].goods_desc+            
            "</p></a><div class='seller'><img src='./img/55.jpg'><span>XXXX</span><a href='javascript:;' class='great'>1180</a></div></div>";

        }
    mainitem.innerHTML = html;
    }
})


    var great = document.getElementsByClassName("great");

    setTimeout(function() {
 
    for(var i =0 ;i<great.length ;i++){
        great.item(i).onclick = function(){
        // var args = Array.prototype.slice.call(great)
        
        this.innerText =  parseInt(this.innerText)+1;
        }
    }
    }, 1000);

    $(".hand").mouseenter(function(){
 
        $(".hand").animate({"left":-15},400);
        $(".hand").animate({"left":0},400);
        $(".hand").animate({"left":-13},300);
        $(".hand").animate({"left":0},300);
        
    })


         // 页面导航
    $.get("http://h6.duchengjiu.top/shop/api_cat.php",function(data){
        var obj = data;
        for (var i=0;i<obj.data.length;i++){
            $(".toptab .itemul").append("<li><a href='list.html?cat_id="+obj.data[i].cat_id+"'>" +obj.data[i].cat_name+ "</a></li>")
        }
    })


    // $.ajax ({
    //     "url":"http://h6.duchengjiu.top/shop/api_cat.php",
    //     "type":"GET",
    //     "dataType":"json",  
    //     "success":function(response){
    //          var html = "";

    //         for(var i=0;i<response.data.length;i++){
    //             html += "<div class='itemlist'><img src='"+
    //             response.data[i].goods_thumb+
    //             "'><a href='detail.html?goods_id="+
    //             response.data[i].goods_id+
    //             "' class='goods'><p class='price'>￥"+
    //             response.data[i].price+
    //             "</p><p class='goodsname'>"+
    //             response.data[i].goods_name+
    //             "</p><p class='goodsdesc'>"+
    //             response.data[i].goods_desc+            
    //             "</p></a><div class='seller'><img src='./img/55.jpg'><span>XXXX</span><a href='javascript:;' class='great'>1180</a></div></div>";

    //     }
    //     mainitem.innerHTML = html;
    //     }
    // })



