// conditional statements
// if statement
if (false){
    console.log("hello");
}
//if ....else statement
if (false){
    console.log("hi");
}
else{
    console.log("welcome to nsti howrah");
}

let a=22;
if (a>=18){
    console.log("you are eligible for voting");
}
if (a<=18){
    console.log("you are not eligible for voting");
}
else{
    console.log("you are eligible for voting");
}
//if.......else if statement
let marks=50;
let grade;
if (marks>=90){
    grade="A";
}else if(marks>=80){
    grade="B";
} else if(marks>=70){
    grade="C";
}else{
    grade="Fail";
}
console.log(grade);
//nested if else statement


if (true){
    console.log("nested1");
    if (true){
        console.log("nested2");
        if (true){
            console.log("nested3");
            if (true){
                console.log("nested4");
            }
        }
    }
}
//switch statement
    let c=2;
    switch(c){
        case 1:
            console.log("monday");
    }