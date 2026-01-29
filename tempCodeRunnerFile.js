//using switch
function add(a,b){
   return a+b;
}
function substract(a,b){
   return a-b;
}
function multiply(a,b){
   return a*b;
}
function divide(a,b){
   return (b===0)?"not divide by zero": a/b;
}
function exponentation(a,b){
   return a**b;
}
function modulus(a,b){
   return a%b;
}
function calculatorswitch(a,o,b){
   switch(o){
      case "+":
         return add(a,b);
         break;
      case "-":
         return substract(a,b);
         break;
      case "*":
         return multiply(a*b);
         break;
      case "**":
         return exponentation(a,b);
         break;
      case "/":
         return divide(a,b);
         break;
      case "%":
         return modulus(a,b) ;
         break;
   }
}
console.log(calculatorswitch(78,"+",35));
console.log(calculatorswitch(78,"-",35));
console.log(calculatorswitch(78,"*",35));
console.log(calculatorswitch(78,"**",35));
console.log(calculatorswitch(78,"/",35));
console.log(calculatorswitch(78,"/",0));
console.log(calculatorswitch(78,"%",35));