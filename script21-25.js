CHAPTER 21 - 25

Task no 1


Task no 2
function myFunction() {
    var userinfo = prompt ("Your favorite mobile phone model");
    var n = userinfo.length;
    alert("legth of string is " + n)
}
myFunction()


Task no 3
var word= "pakistan";
var n= word.indexOf("n");
alert(n)


Task n0 4
var word = "Hello World!";
var n = word.lastIndexOf("l");
alert(n)

Task n0 5
function myFunction() {
    var str = "Pakistani";
    var res = str.charAt(3)
    alert (res)
  }

myFunction()

Task no 6
var firstname = prompt("Enter the first name");
var lastname = prompt ("Enter last name");
var fullname = firstname.concat(lastname);
alert("welcome Mr. " + fullname)

Task no 7 
function myFunction() {
    var str = "Hyderabad"
    var res = str.replace("Hyder", "Islam");
    alert (res);
  }

myFunction()

Task no 8 
function myFunction(){
var message = “Ali and Sami are best friends. They play cricket and football together.”;
 str = message.replace(/and/g, '&');
alert (str);
}
myFunction()

Task no 9
var text = '472';
var integer = parseInt(text) ;
var dt = typeof(integer) ;
alert (dt)

Task no 10
var word = prompt("enter any word in lowercase");
convert = word.toUpperCase();
alert(convert);


Task no 11
var word = prompt("enter any word ");
word1= word.slice(0,1);
convert = word1.toUpperCase();
word2= word.slice(1);
var newword = convert.concat(word2);
alert(newword);

Task no 12
var num = 35.36;
var n = num.toString();
str = n.replace("." , "");
alert (str);

Task no 13
var username = prompt ("Enter a username ");
var ar = username.split(" ");
alert(ar);
for (i=0; i<ar.length() ; i++)
{   

   alert(username);
}

var str = "HELLO WORLD";
for (i=0; i<str.length() ; i++)
{   
  var n = str.charCodeAt(i);
  console.log(n);
}

var word= "tabraik";
var ar = word.split(" ");
for ( i = 0; i < 10; i++){
    alert(ar[i]);
}

Task no 14

var A = ["cake”, “apple pie”, “cookie”, “chips”, “patties" ] ;
var user = prompt("Welcome to bakery what do you want to order");
useritem = user.toLocaleLowerCase();
len= A.length()
for (i=0; i< len; i++)
{
    if (useritem === A[i])
    {
        alert ("found");
    }
}

Task no 15
var inputtxt = prompt ("Enter a password");
function CheckPassword(inputtxt) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Your pasword is correct')
return true;
}
else
{ 
alert('Please enter a valid password')
return false;
}
}

CheckPassword()

Task no 16
var university = "university of karachi" ;
var str = university.split(" "); 
len = str.length();
alert(len);
for (i=1; i<len; i++){
    alert (str)
}

Task no 17
var str = "Paksitan" ;
character = str.charAt(str.length-1)
alert(character);

Tsk no 18
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


console.log(char_count('The quick brown fox jumps over the lazy dog', 'the'));

alert(letter_Count);


