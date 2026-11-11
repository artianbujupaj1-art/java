var x=5;

if(x>2){
    console.log("vlera e xit ma e madhe se 2")
}
else{
    console.log("vlera e xit ma e vogel se 2")
}

var input=document.getElementById("input1")
var input2=document.getElementById("input2")
var button=document.getElementById("btn1")
var text=document.getElementById("text")

//button.onclick=function(){
    //text.innerHTML = input.value
//}

//button.onclick=function(){
    //text.innerHTML = document.querySelector('input').value
//}

button.onlick=function(){
    text.innerHTML = parseInt(input.value) + parseInt(input2.value)
};
export var text3 = "";


