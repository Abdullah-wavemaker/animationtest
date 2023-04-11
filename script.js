var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var screen_area = width*height;
//width=40px,height=40px; 
var span_area = 1600;
var spancount=Math.floor(screen_area/span_area)+1; 
var li="";
for(var i=0;i<spancount;i++){
    li+=`<span></span>`
}
document.getElementById('main').innerHTML=li;