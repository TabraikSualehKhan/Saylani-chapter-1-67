//task 1

function raisedpower (x,y){
 
   a= Math.pow(x, y)
   
}

var x= 2;
var y = 3;
raisedpower(x,y);
alert(a)

//task 2
function leapyear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
  console.log(leapyear(2016));
  console.log(leapyear(2000));
  console.log(leapyear(1700));
  console.log(leapyear(1800));
  console.log(leapyear(100));

//task 3
function area(){
    S = ( a + b + c ) / 2 ;
    are = (S)(S - a)(S - b)(S - c) ;
    
}

var a = prompt("enter a side");
var b = prompt("enter a side");
var c = prompt("enter a side");
area()
alert(S);

//task 4
function main(){

    function average(){
        total = (a+b+c) / 300
        return total
   }

   function percentage(){
    per = total % 100
    return per
   }
   return percentage()

}

var a = prompt("enter marks");
var b = prompt("enter marks");
var c = prompt("enter marks");
main()
alert(main())