// task 1 
function datetime(){
    var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime = date+' '+time;

document.write(dateTime)
}

datetime()


//task 2
function MyFunction() {
    var first, second;
    first = document.getElementById("firstname").value;
    second = document.getElementById("lastname").value;

    document.GetElementById("here").InnerHTML = first;
    document.GetElementById("here").InnerHTML = second;
}

MyFunction()

//task 3
function addnum(){
    var num1 , num2;
    var num1 = parseInt(prompt("enter number 1"));
    var num2 = parseInt(prompt("enter number 2"));
    var num = num1 + num2 ;
    document.write("sum of two number is " , num )
}

addnum()

//task 4 
function cal(){
    var num1 , num2;
    var num1 = parseInt(prompt("enter number 1"));
    var num2 = parseInt(prompt("enter number 2"));
    var op = prompt("enter operator");
    if (op == '+'){
        var num = num1 + num2 ;
    }
    else if (op == '-'){
        var num = num1 - num2 ;
    }
    else if (op == '*'){
        var num = num1 * num2 ;
    }
    else if (op == '/') {
        var num = num1 / num2 ;
    }
    else{
        alert("invalid")
    }

    document.write(op + " of two number is " , num )
}

cal()

//task 5
function sumOfSquares(num) {
    var sqr = num * num ;
    document.write("The sum of squares for numbers " , sqr) ;
   }
   var num = parseInt(prompt("Enter a number:"));
   sumOfSquares(num);

   //task 6
   function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
   n = parseInt (prompt ("enter nmber"));
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);

//task 7 
function se(){
    var n , num2;
    var n = parseInt(prompt("enter number 1"));
    var num2 = parseInt(prompt("enter number 2"));
    var num = num2(num2+n)/2 ;
    document.write("counting of number is " , num )
}

se()

//task 8 
function calcHypotenus(base,  per) {
    return a = (Math.sqrt(base*base  + per*per)) ;
    
}


var c = parseInt (prompt("number"));
var d = parseInt (prompt("number"));
calcHypotenus(c,d)
alert(a)

//task 9 
function area(w,h){
    
    const A = w * h ;
    alert("area of triangle" , A )
    
}
    var w = parseInt(prompt("enter width"));
    var h = parseInt(prompt("enter height"));
	area(w,h)

//task 10
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  palindrome("maham");
  

//task 11
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));

//task 12
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));


//task 13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSResourceS.com', 'o'));

//task 14

function calcGeometry(radius) {
    var circumference = Math.PI * 2*radius;
    console.log("The circumference is " + circumference);
    var area = Math.PI * radius*radius;
    console.log("The area is " + area);
  }