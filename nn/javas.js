let close = document.querySelector(".menu");
let menu2 = document.querySelector(".menuactive");
let m121 = document.querySelector(".m121");
let m122 = document.querySelector(".m122");
let m123 = document.querySelector(".m123");
let m124 = document.querySelector(".m124");
let m125 = document.querySelector(".m125");

let clicked = "active";

close.addEventListener("click",() =>{

    if (clicked === "active") {
        clicked = "deactive";
        
        menu2.classList.add("menuactive1");
        m121.classList.add("m12");
        m122.classList.add("m12");
        m123.classList.add("m12");
        m124.classList.add("m12");
        m125.classList.add("m12");
    }else{
        clicked = "active";

        menu2.classList.remove("menuactive1");
        m121.classList.remove("m12");
        m122.classList.remove("m12");
        m123.classList.remove("m12");
        m124.classList.remove("m12");
        m125.classList.remove("m12");
    }
  
})

m125.addEventListener("click",() =>{
    if (clicked === "active" ){
        clicked = "deactive";
       

    }else {
        clicked = "active";
        menu2.classList.remove("menuactive1");
        m121.classList.remove("m12");
        m122.classList.remove("m12");
        m123.classList.remove("m12");
        m124.classList.remove("m12");
        m125.classList.remove("m12");
    }
    
})