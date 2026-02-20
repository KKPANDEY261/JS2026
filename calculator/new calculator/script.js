function addition (){
let a = parseInt(document.getElementById("number_a").value);
let b = parseInt(document.getElementById("number_b").value);
let c= a+b;

document.getElementById("result").textContent = "addition: " + c;

}
function subtraction (){
    let a = (document.getElementById("number_a").value);
    let b = (document.getElementById("number_b").value);
    let d= a-b;
    
    console.log("subtraction :",d);
    document.getElementById("result").textContent = "subtraction: " + d;


}
function multiplication (){
    let a = (document.getElementById("number_a").value);
    let b = (document.getElementById("number_b").value);
    let e = a*b;

console.log("multiplication :",e);
document.getElementById("result").textContent = "multiplication: " + e;
}

function division (){
    let a = (document.getElementById("number_a").value);
    let b = (document.getElementById("number_b").value);
    let f = a/b;

console.log("division :",f);
document.getElementById("result").textContent = "division: " + f;

}

// let a= "5";
// let b = "8";
// let operator = "+";
// switch (,operator) {
//     case operator="+":
//         addition();
//        break;

//     case operator="-":
//         subtraction();
//        break;

//     case operator="*":
//         multiplication();
//        break;

//     case operator="/":
//         division();
//        break;
//     default:
//         console.log(error);
 
// }




