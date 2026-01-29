
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




//using if..else or else if

function calculatorif(a,o,b){
   if (o=="+" || o=="add"){
      return a+b;
   }else if (o=="-" || o=="subs"){
      return a-b;
   }else if(o=="*" || o=="multi"){
      return a*b;
   }else if (o=="**" || o=="expo"){
      return a**b;
   }else if (o=="/"||o=="divide"){
      if (b===0){
         return "not divide by zero";
      }
      return a/b;
   }else if(o=="%"|| o=="modulus"){
      return a%b;
   }else {"provide valid input"}
}
console.log(calculatorif(78,"+",35));
console.log(calculatorif(78,"-",35));
console.log(calculatorif(78,"*",35));
console.log(calculatorif(78,"**",35));
console.log(calculatorif(78,"/",35));
console.log(calculatorif(78,"/",0));
console.log(calculatorif(78,"%",35));



// Using ternary operator
function calculator(a,o,b){
   result=(o=="+")? console.log(a+b) :(o=="-")? console.log(a-b):(o=="*")? console.log(a*b):(o=="/")?(b===0)? console.log("not divide by zero"):console.log(a/b) : console.log("provide the vailid number")
}
calculator(5,"*",10)