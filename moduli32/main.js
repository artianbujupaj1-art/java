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

var text3 = "hey hii hiiiii"
var regex8 = /hi?/g;
document.getElementById("result10").innerHTML = text3.match(regex8)

var text4 = "hey hii hiiiii"
var regex9 = /i{3}/g;
document.getElementById("result11").innerHTML = text4.match(regex9)

var text5 = "hey hii hiiiii"
var regex10 = /i{2,5}/g;
document.getElementById("result12").innerHTML = text5.match(regex10)

var text6 = "hey hii hello"
var regex11 = /ello$/g;
document.getElementById("result13").innerHTML = text6.match(regex11)

var text7 = "hey hii hello"
var regex12 = /^he/g;
document.getElementById("result14").innerHTML = text7.match(regex12)






