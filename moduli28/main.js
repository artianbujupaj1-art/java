var button1=document.getElementById("btn1")

button1.onclick=function(){
    alert('hello')
}

var button2=document.querySelector('button')
button2.onclick=function(){
    alert('hello1234')
}

button2.addEventListener('click',alert1())

function alert1(){
    alert('asd')
}

var button2=document.getElementById("btn2")
var button3=document.getElementById("btn3")
var button4=document.getElementById("btn4")
button2.onmouseover=function(){
    alert('yoohoo')
}

button3.onmouseleave=function(){
    alert('yoohoo')
}

button4.onmousewheel=function(){
    alert('yoohoo')
}

var button5=document.getElementById("btn5")
var text=document.getElementById("txt1")

button5.onclick=function(){
    text.style.color="red";
    text.style.padding="100px";
    text.style.backgroundColor="blue"
    text.style.fontSize="400px";
}