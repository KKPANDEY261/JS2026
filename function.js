// without parameter and return

function greet(){
    console.log("hello pandey");
}
greet();

//with parameter and console
function greet1(name){
    console.log("hello",name);
    //print without concatinate
    console.log(`hello ${name}`);
}
greet1("karan");
 //without parameter and console
 function greet(){
    return "hello pandey";
}
console.log(greet());
//with parameter and return
function greet1(name){
    return "hello",name;
    
}

console.log(greet1("karan"));