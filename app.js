var a =3;
var b =2;
var c=a+b;
console.log("this is a string");
console.log(a);
console.log(b);
console.log(c);

var first = "Sally";
var last = "Smith";
var fullname = first+" "+last;
console.log(fullname);
console.log(first);
console.log(last);

var d = Math.pow(2,8)

console.log('2^8 ===' , d);

a =3
b=4
c=5
b=6

var base = ((a+b)/(b-c))*((b-a)/(c-d));
var exp = b + a;
var e = Math.pow(base, exp);
console.log(e);

//brACHING WITH IF/ELSE statements
//

var age = 20;

if(age >= 21){
  console.log('you are legal');
}else{
console.log('you are not legal');
}

//this is a switch statement
//

var color = 'pink';
switch(color){
  case 'green':
  console.log('i see green');
  break;
  case 'blue':
  console.log('i see blue');
  break;
  case 'orange':
  console.log('i see orange');
  break;
  case 'pink':
  console.log('i see pink');
  break;
  case 'black':
  console.log('i see black');
  break;
  default:
  console.log('that is not a valid color');
}

//while loop
//

a =1;

while (a < 10){
  console.log('a is looping', a);
 // a++;
 //a = a + 1;
 a += 2;
}

//for loop
//

for(var i = 0; i < 10; i++){
  console.log('i ===', i);
 
