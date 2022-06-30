var texts = ['Website Clone.']; 
let count =0, index = 0, currentText = '', letter = '';

var tex = ['Deforestation.'];
var count1=0, index1=0, ct='',lett='';

var tex2 = ['Cosmetic Store.'];
var count2=0, index2=0, ct2='',lett2='';

var tex3 = ['Todo app.'];
var count3=0, index3=0, ct3='',lett3='';

var tex4 = ['Portfolio.'];
var count4=0, index4=0, ct4='',lett4='';

var tex5 = ['Calculator.'];
var count5=0, index5=0, ct5='',lett5='';

var tex6 = ['Cheat Sheet.'];
var count6=0, index6=0, ct6='',lett6='';

var tex7 = ['Contact.'];
var count7=0, index7=0, ct7='',lett7='';

var tex8 = ['Educational Website.'];
var count8=0, index8=0, ct8='',lett8='';

var tex9 = ['Tribute Page'];
var count9=0, index9=0, ct9='',lett9='';

var tex10 = ['Temperature Converter'];
var count10=0, index10=0, ct10='',lett10='';


window.addEventListener("scroll",()=>{
    var screenPos = window.innerHeight;
    // ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙  revc
    if(document.querySelector(".revc h1 a").getBoundingClientRect().top<screenPos/1.3){
        (function tyype(){
            currentText = texts[count];
            letter = currentText.slice(0, ++index);
            document.querySelector('.revc h1 a').textContent = letter;
            setTimeout(tyype, 5000);
        })();
    }
    if(document.querySelector(".revc p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".revc p").style.transform = "translate(0)";
        document.querySelector(".revc p").style.opacity = "1";
    }   
    if(document.querySelector(".revc video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".revc video").style.transform = "translate(0)";
        document.querySelector(".revc video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   deforestation
    if(document.querySelector(".vedu h1").getBoundingClientRect().top<screenPos/1.3){
        (function vedu(){
            if(count8 === tex8.length)
                return;
            ct8=tex8[count8];
            lett8=ct8.slice(0,++index8);
            document.querySelector('.vedu h1 a').textContent = lett8;
            setTimeout(vedu,200);    
        })();                
    }
    if(document.querySelector(".vedu p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".vedu p").style.transform = "translate(0)";
        document.querySelector(".vedu p").style.opacity = "1";
    }   
    if(document.querySelector(".vedu video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".vedu video").style.transform = "translate(0)";
        document.querySelector(".vedu video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   cosmetics

    if(document.querySelector(".def h1").getBoundingClientRect().top<screenPos/1.3){
        (function def(){
            if(count1 === tex.length)
                return;
            ct=tex[count1];
            lett=ct.slice(0,++index1);
            document.querySelector('.def h1 a').textContent = lett;
            setTimeout(def,200);    
        })();                
    }
    if(document.querySelector(".def p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".def p").style.transform = "translate(0)";
        document.querySelector(".def p").style.opacity = "1";
    }   
    if(document.querySelector(".def video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".def video").style.transform = "translate(0)";
        document.querySelector(".def video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   cosmetics
    if(document.querySelector(".cos h1").getBoundingClientRect().top<screenPos/1.3){
        (function cos(){
            if(count2 === tex2.length)
                return;
            ct2=tex2[count2];
            lett2=ct2.slice(0,++index2);
            document.querySelector('.cos h1 a').textContent = lett2;
            setTimeout(cos,200);    
        })();                
    }
    if(document.querySelector(".cos p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".cos p").style.transform = "translate(0)";
        document.querySelector(".cos p").style.opacity = "1";
    }   
    if(document.querySelector(".cos video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".cos video").style.transform = "translate(0)";
        document.querySelector(".cos video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   
    if(document.querySelector(".tribute h1").getBoundingClientRect().top<screenPos/1.3){
        (function tri(){
            if(count9 === tex9.length)
                return;
            ct9=tex9[count9];
            lett9=ct9.slice(0,++index9);
            document.querySelector('.tribute h1 a').textContent = lett9;
            setTimeout(tri,200);    
        })();                
    }
    if(document.querySelector(".tribute p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".tribute p").style.transform = "translate(0)";
        document.querySelector(".tribute p").style.opacity = "1";
    }   
    if(document.querySelector(".tribute video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".tribute video").style.transform = "translate(0)";
        document.querySelector(".tribute video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   
    if(document.querySelector(".temp h1").getBoundingClientRect().top<screenPos/1.3){
        (function tri(){
            if(count10 === tex10.length)
                return;
            ct10=tex10[count10];
            lett10=ct10.slice(0,++index10);
            document.querySelector('.temp h1 a').textContent = lett10;
            setTimeout(tri,200);    
        })();                
    }
    if(document.querySelector(".temp p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".temp p").style.transform = "translate(0)";
        document.querySelector(".temp p").style.opacity = "1";
    }   
    if(document.querySelector(".temp video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".temp video").style.transform = "translate(0)";
        document.querySelector(".temp video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   todo app

    if(document.querySelector(".todo h1").getBoundingClientRect().top<screenPos/1.3){
        (function todo(){
            if(count3 === tex3.length)
                return;
            ct3=tex3[count3];
            lett3=ct3.slice(0,++index3);
            document.querySelector('.todo h1 a').textContent = lett3;
            setTimeout(todo,200);    
        })();                
    }
    if(document.querySelector(".todo p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".todo p").style.transform = "translate(0)";
        document.querySelector(".todo p").style.opacity = "1";
    }   
    if(document.querySelector(".todo video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".todo video").style.transform = "translate(0)";
        document.querySelector(".todo video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   portfolio

    if(document.querySelector(".port h1").getBoundingClientRect().top<screenPos/1.3){
        (function port(){
            if(count4 === tex4.length)
                return;
            ct4=tex4[count4];
            lett4=ct4.slice(0,++index4);
            document.querySelector('.port h1 a').textContent = lett4;
            setTimeout(port,200);    
        })();                
    }
    if(document.querySelector(".port p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".port p").style.transform = "translate(0)";
        document.querySelector(".port p").style.opacity = "1";
    }   
    if(document.querySelector(".port video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".port video").style.transform = "translate(0)";
        document.querySelector(".port video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   self taught

    if(document.querySelector(".self h1").getBoundingClientRect().top<screenPos/1.3){
        (function self(){
            if(count5 === tex5.length)
                return;
            ct5=tex5[count5];
            lett5=ct5.slice(0,++index5);
            document.querySelector('.self h1 a').textContent = lett5;
            setTimeout(self,200);    
        })();                
    }
    if(document.querySelector(".self p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".self p").style.transform = "translate(0)";
        document.querySelector(".self p").style.opacity = "1";
    }   
    if(document.querySelector(".self video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".self video").style.transform = "translate(0)";
        document.querySelector(".self video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   cheat sheet

    if(document.querySelector(".sheet h1").getBoundingClientRect().top<screenPos/1.3){
        (function sheet(){
            if(count6 === tex6.length)
                return;
            ct6=tex6[count6];
            lett6=ct6.slice(0,++index6);
            document.querySelector('.sheet h1').textContent = lett6;
            setTimeout(sheet,200);    
        })();                
    }
    if(document.querySelector(".sheet p").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".sheet p").style.transform = "translate(0)";
        document.querySelector(".sheet p").style.opacity = "1";
    }   
    if(document.querySelector(".sheet video").getBoundingClientRect().top<screenPos/1.3){
        document.querySelector(".sheet video").style.transform = "translate(0)";
        document.querySelector(".sheet video").style.opacity = "1";
    }
// ⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙⁙   contact

    if(document.querySelector(".contact h1").getBoundingClientRect().top<screenPos/1.1){
        (function contact(){
            if(count7 === tex7.length)
                return;
            ct7=tex7[count7];
            lett7=ct7.slice(0,++index7);
            document.querySelector('.contact h1').textContent = lett7;
            setTimeout(contact,200);    
        })();                
    }
});
//  ⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘⁘
//                                                                                         links

document.querySelector("header section a.home").addEventListener("click",(e)=>{
        e.preventDefault();
        
        document.querySelector(".loader").style.height = "120%";
        document.querySelector(".loader").style.left = "0";
        setTimeout(()=>{
            window.location = document.querySelector("header section a.home").href},1000);
    });
 
window.addEventListener('load',()=>{
    document.querySelector(".load").style.left = '-150%';
    document.querySelector(".load").style.display = 'none';
    
    document.querySelector("header section").style.animation = 'con 1.5s 1s 1 forwards ease';
    
    document.querySelector("header img").style.animation = 'image 1.5s 1.2s 1 forwards ease';
    
    document.querySelector("header .h11").style.animation = 'maintext .3s 1.2s 1 forwards ease';
    document.querySelector("header .h12").style.animation = 'maintext .3s 1.8s 1 forwards ease';
    document.querySelector("header .h13").style.animation = 'maintext .3s 2.2s 1 forwards ease';
    
    document.querySelector("header h3").style.animation = 'subtext 1s 2s 1 forwards ease';
})