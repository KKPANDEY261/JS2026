let a = 15;

if (a <= 1) {
    console.log("not prime");
} else {
    let i;
    for (i = 2; i <=a**0.5; i++) {
        if (a % i === 0) {
            console.log("not prime");
            break;
        }else {
            console.log("prime")
        }
    }
    
}