    //  ⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘
//                                                                                         Scroll events
window.addEventListener('scroll',()=>{
    screen = window.innerHeight;

    if(document.querySelector(".about .abotext .ah1").getBoundingClientRect().top<screen/1.5)
        document.querySelector(".about .abotext .ah1").classList.add("js");
    if(document.querySelector("#works .wh1").getBoundingClientRect().top<screen/1.3)
        document.querySelector("#works .wh1").classList.add("js");
    if(document.querySelector("#contact .ch1").getBoundingClientRect().top<screen/1.1)
        document.querySelector("#contact .ch1").classList.add("js");
    
    if(document.querySelector(".about .abotext p").getBoundingClientRect().top<screen/1.7)
        document.querySelector(".about .abotext p").classList.add("js");
    if(document.querySelector(".about .skills").getBoundingClientRect().top<screen/1.8)
        document.querySelector(".about .skills").classList.add("js");
    if(document.querySelector("#works .images").getBoundingClientRect().top<screen/1.5)
        document.querySelector("#works .images").classList.add("js");
    if(document.querySelector("#contact .media").getBoundingClientRect().top<screen/0.99)
        document.querySelector("#contact .media").classList.add("js");
}); 
//  ⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘
//                                                                                         menu button
document.querySelector(".menu").addEventListener('click',()=>{
    // document.querySelectorAll(".menu span").classList.toggle("add");
    let span = document.querySelectorAll(".menu span");
    for(let i=0; i<span.length; i++)
        span[i].classList.toggle("add");
    document.querySelector("nav .items").classList.toggle("add");
})

//  ⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘
//                                                                                         links
var links = document.querySelectorAll("#works .images div a");
links.forEach((link)=>{
    link.addEventListener("click",(e)=>{
        e.preventDefault();
    
        document.querySelector(".loader").style.height = "120%";
        document.querySelector(".loader").style.left = "0";
        setTimeout(()=>{
            window.location = link.href},500)
    })
});
 
window.addEventListener('load',()=>{
    document.querySelector(".load").style.left = '-120%';
    document.querySelector("nav").style.animation='nav .7s .8s forwards ease-out';
    document.querySelector(".menu").style.animation='nav .7s .8s forwards ease-out';
    document.querySelector("header").classList.add("js");
    document.querySelector(".main").classList.add("js");
})