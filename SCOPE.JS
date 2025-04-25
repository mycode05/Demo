/*
const squareofn = function(n){
    return n*n;
}
console.log(squareofn(4));
const evenorodd = function(n){
    if(n%2 ==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(evenorodd(4));
console.log(evenorodd(7));
const squareofn = (n) =>{
    return n*n;
}
console.log(squareofn(4));
const evenorodd = (n) => {
    if(n%2 ==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(evenorodd(4));
console.log(evenorodd(7));

const numbers=[1,4,3,6,8,67,45,34,12];
const res = numbers.map((num)=>{
    return num+10;
})
console.log(res);

const numbers=[67,45,34,12];
const res = numbers.map((num)=>num>=35)
console.log(res);
const numbers=[67,45,34,12];
const res = numbers.filter((num)=>num>=35)
console.log(res);

function countOccurrences(arr) {
    return arr.reduce((accumulator, currentValue) => {
      accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
      return accumulator;
    }, {});
  }
  
  const myArray = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  const occurrences = countOccurrences(myArray);
  console.log(occurrences); 
  

  const salarys=[2000,9500,8000,7000,10000];
  const newsalarys=salarys.map((salary)=>salary+(10*salary/100));
  const fsalarys=newsalarys.filter((nsalary)=>nsalary>10000);
  const finalsum=fsalarys.reduce((acc,curr)=>acc+curr,0);
  console.log(finalsum);

let y = 5; 
console.log(y >>= 2);

function gvp(name,callback){
    console.log("hi"+name);
    callback();
}
function welcome(){
    console.log("welcome");
}
console.log(gvp("Jyo",welcome));
*/
function calculate(a,b,callback){
    console.log(callback(a,b));
}
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
var a=10,b=5;
calculate(a,b,add);
calculate(a,b,multiply);