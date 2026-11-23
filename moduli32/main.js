//var input1 = document.getElementById("input1")
//var input2 = document.getElementById("input2")
//var button = document.getElementById("button")
//var text = document.getElementById("text")

//button.onlick=function(){
    //text.innerHTML = parseInt(input1.value) + parseInt(input2.value)
//}; 

var text="This is the best school : Digital School 65176652"
var result =text.search(/Digital School/);
document.getElementById("result2").innerHTML = result;

var result3 = text.replace(/Digital School/, "Hasan Prishtina")
document.getElementById("result3").innerHTML = result3;

var text2='PHUUUUUUUU'
var regex = new RegExp ('alv')
document.getElementById("result4").innerHTML = regex.test(text);

var regex2= /i/g;
document.getElementById("result5").innerHTML = text.match(regex2);

var regex3= /[0-9]/g;
document.getElementById("result6").innerHTML = text.match(regex3);

var regex4= /(top|best|school)/g;
document.getElementById("result7").innerHTML = text.match(regex4);

var regex5= /\d/g;
document.getElementById("result8").innerHTML = text.match(regex5);

var regex6= /\s/g;
document.getElementById("result9").innerHTML = text.match(regex6);

var regex7= /u+/g;
document.getElementById("result10").innerHTML = text2.match(regex7);





