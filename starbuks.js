function show()
{
   var nav=document.getElementById("navigation");
    nav.classList.toggle("nav2");
}
function dark()
{
    var body=document.querySelector(".Light");
    body.classList.toggle("Dark");
    var body=document.querySelectorAll(".white");
    for(var i=0;i<body.length;i++)
    {
    body[i].classList.toggle("Black");
    }
    switchcolor.classList.toggle("activedark");
}
var switchcolor=document.getElementById("btn");
switchcolor.addEventListener('click',dark,false);
var dropmenu=document.getElementById("menu");
dropmenu.addEventListener("click",show,false);
