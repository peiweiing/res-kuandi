
// 登录框打开关闭
var div1 =document.getElementById("div1");
var login =document.getElementById("dl");
var gb=document.getElementById("gb");
var fg=document.getElementById("fugan");
    login.onclick = function(){
        div1.style.display = "block";
        fg.style.display="block";
    }
    gb.onclick=function(){
        div1.style.display="none";
        fg.style.display="none";
    }
