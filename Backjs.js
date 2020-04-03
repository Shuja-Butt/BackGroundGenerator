var a=document.getElementById("color1");
var b=document.getElementById("color2");
var c=document.getElementById("bj");

var css=document.getElementById("css");




a.addEventListener("input",setGradient);
b.addEventListener("input",setGradient);



function setGradient()
{
        
//    c.style.background="linear-gradient(to left,"+a.value+", "+b.value+")";
    c.style.background=`linear-gradient(to left,${a.value},${b.value})`;//in form of templated strins

    
    css.textContent=c.style.background+";" ;
}

//CLOSURE AVOIDS THE SCOPE FROM DESTROYING
let w=document.querySelector("Button");
let q=document.querySelector("body");
function count()
{
    let w=document.createElement("p");
     w.appendChild(document.createTextNode("0"));
    q.appendChild(w);
//    console.log(w.value);
    console.log(w.textContent);
    function o()
    {
        let t=Number(w.textContent);
        t=t+1;
        w.textContent=t;  
    }
 return o;
}
let op=count();
w.addEventListener("click",op);

















































