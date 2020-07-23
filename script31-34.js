//chapter 31 to 34
//task 1
var rightNow = new Date();
document.write(rightNow);
document.write("</br>")

//task 2
var d = new Date();
var currentMonth = d.getMonth();
document.write(currentMonth);
document.write("</br>")

//task 3

var date = new Date();
switch(date.getDay()){
    case 0: alert("sun!"); break;
    case 6: alert("sat"); break;
    case 1: alert("mon!"); break;
    case 2: alert("tue!"); break;
    case 3: alert("wed!"); break;
    default: alert("any other week day");
}
// var now =new Date();
// var theDay = now.getDay();
// document.write(theDay)
// var day = theDay.slice(0,4);
// document.write(day);

//task 4
var date = new Date ();
var day = date.getDay();
if (day == 0 ){
    alert ("ITS FUN DAY")
}
else if (day ==6){
    alert ("ITS FUN DAY")
}
else {
    alert (day);
}
document.write("</br>")

//task 5
var date = new Date ();
var dayofmonth = date.getDate();
document.write("the day is " + dayofmonth)
// if ( dayofmonth < 16 ){
//     var day = date.getDay(slice(0,15));
//     document.write(day);
// }
// else (dayofmonth >15 ); {
//     var day = date.getDay(slice(15,30));
//     document.write(day);
// }
 document.write("</br>")

//task 6
var rightNow = new Date();
document.write("Current date is " + rightNow);
document.write("</br>")

var millsSince = d.getTime();
document.write( "Time elapsed in sec" + millsSince);

var minute = (millsSince/60) ;
Document.write("Time estimated in min " + minute); 