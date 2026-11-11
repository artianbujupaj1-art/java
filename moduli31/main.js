var cars=['mercedes','bmw','audi'];
var i;
var text = "  ";
for(i=0;i<cars.length;i++){
    text += cars[i] + "  ";
}

console.log(text);

var j;
var text2="Vlera e j-se eshte"+j;
for(j=1;j=6;j++){
    text2 += j + "  "
}

console.log(text2)

var person={
    firstname : "Artian",
    surname: "Bujupaj",
    age : 13
}
var text3=" "
var x;
for (x in person){
    text3 += person[x]+ "  "
}
console.log(text3)