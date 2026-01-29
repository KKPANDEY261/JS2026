let a=15;
for(let i=2;i<=a**0.5;i++){
    if (a%i===0){
        console.log("non prime");
        break;
    } else{
        console.log("prime")
        break;
    }
}


b=23;
if (2<=b**0.5){
    if(b%2===0){
        console.log("non prime");
    }else {
            console.log("prime");
    }
}