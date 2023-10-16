var main=document.querySelector("#main");
var cursor=document.querySelector("#cursor");
var uname=document.querySelector("#text");


 main.addEventListener("mousemove",function(dets){
  cursor.style.left=(dets.x+20)+"px";
   cursor.style.top=(dets.y+20)+"px";

    uname.addEventListener("mouseenter",function(){
        cursor.style.scale="2"
       
      
       })

      
uname.addEventListener("mouseleave",function(){
    cursor.style.scale="1"
  
})

  
  
 })

    