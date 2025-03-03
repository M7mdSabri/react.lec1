
window.addEventListener("scroll", function () {
    var scroll = window.scrollY;
    console.log(scroll);
});

window.addEventListener("scroll",function(){
    var scrollValue = window.scrollY;
    var navbar = document.querySelector(".navbar");
    if(scrollValue>100){
        navbar.classList.add("bg-danger")
        navbar.classList.remove("bg-dark")
    }else{  
        navbar.classList.add("bg-dark")
        navbar.classList.remove("bg-danger")
    }
})

var mouse = setInterval(myTimer,1000);
function myTimer(){
    var d = new Date;
    document.querySelector("#time").innerHTML = d.toLocaleTimeString();
}


