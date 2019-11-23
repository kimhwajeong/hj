function func(js)
{
    for(i=1; i<=4; i++)
    {  
        this["at"+i].style.display="none",
        this["m"+i].style.color="black";
    
    this["at"+js].style.display="block",
    this["m"+js].style.color="white";
    }
}
function at3_btn1()
{
    var a,b;
    a=parseInt(a1.value);
    b=a*0.13;
    aa1.value=parseInt(b);
}
function at3_btn2()
{
    var a,b;
    a=parseInt(a2.value);
    b=a*0.18;
    aa2.value=parseInt(b);
}
function at3_btn3()
{
    var a,b;
    a=parseInt(a3.value);
    b=a*0.28;
    aa3.value=parseInt(b);
}
function at3_btn4()
{
    var a,b;
    a=parseInt(a4.value);
    b=a*0.38;
    aa4.value=parseInt(b);
}
function at3_btn5()
{
    var a,b;
    a=parseInt(a5.value);
    b=a*0.16;
    aa5.value=parseInt(b);
}
function at3_btn6()
{
    var a,b;
    a=parseInt(a6.value);
    b=a*0.34;
    aa6.value=parseInt(b);
}
function at2_btn()
{
    var a,b;
    a=parseInt(k2.value);
    b=Math.pow(c2.value,2);
    c=parseInt((a/b)*10000);
    aaa2.value=c;
    if(c<=18.5)
        aaaa2.value="저체중",
        aaaa2.style.background="#00345b";
    else if(c<=23)
        aaaa2.value="정상",
        aaaa2.style.background="#3199a0";
    else if(c<=25)
        aaaa2.value="과체중",
        aaaa2.style.background="#ec7c49";
    else if(c<=30)
        aaaa2.value="비만",
        aaaa2.style.background="#e34514";
    else
        aaaa2.value="고도비만",
        aaaa2.style.background="#aa1f23";
}

window.onload=function()
{
    for(i=1; i<=3; i++)
        this["pic"+i].style.background="url(jpg/m"+i+".png)",
        this["pic"+i].style.backgroundSize="100% 100%";
    for(i=1; i<=6; i++)
        this["at3_pic"+i].style.background="url(jpg/y"+i+".png)",
        this["at3_pic"+i].style.backgroundSize="100% 100%";
    
}









