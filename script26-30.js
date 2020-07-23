chapter 26 to 30

task 1
var number2 =parseInt(prompt ("Enter any positive number"));
// var number2 = number(number1);
if (number2 > 0) {
    alert("The number is" + number2)
}
else {
    alert("enter again")
}
r=number2
var  round= Math.round(r);
alert(round);
f=number2
var floor = Math.floor(f)
alert(floor)
c=number2
var ceil = Math.ceil(c)
alert(ceil)

 task 2 
 var num = parseFloat(prompt ("Enter negative number"));
//    var myFractional = parseFloat("1.9999");
if (num < 0){
    alert (num)
}
r=num
var  round= Math.round(r);
alert(round);
f=num
var floor = Math.floor(f)
alert(floor)
c=num
var ceil = Math.ceil(c)
alert(ceil)

task 3
var num = parseInt( prompt ("Enter any number"));
var abs =Math.abs(num);
alert(abs)

task 4
var diceRoll = Math.floor( Math.random() * 6 ) +1;
alert('You rolled a ' + diceRoll);

task 5
var heads = 0;
var tails = 0;
function click() {  
    x = (Math.floor(Math.random() * 2) == 0);
    if(x){
        flip("heads");
    }else{
        flip("tails");
    }
};
function flip(coin) {
    document.getElementById("result").innerHTML = coin;
};

task 6
var num = Math.floor(Math.random() * 100);
alert("Random number between 1 and 100 " + num)

task 7
var weight = parseFloat (prompt("Enter your weight"));
alert ("your weight is " + weight + " Kilogram")

task 8
var num = Math.floor(Math.random() * 10);
var num1 = prompt("Enter a number from 1 to 10" );
if (num== num1){
    alert("your number is match")
}
else{
    alert ("better luck next time")
}