a = 5;
b = 6;

// equal to
document.write("equal to = ",a==b,"<br>");
// Output = false

// strictly equal to
b="5";
c=5;
document.write("strictly equal to = ",a===b,a===c,"<br>");
// Output = false true
b=6;
// not equal to
document.write("not equal to = ",a!=b,"<br>");
// Output = true

// strictly not equal to
document.write("strictly not equal to = ",a!==b,"<br>");
// Output = true

// greater than
document.write("greater than = ",a>b,"<br>");
// Output = false

// greater than or equal to
document.write("greater than or equal to = ",a>=b,"<br>");
// Output = false

// less than
document.write("less than = ",a<b,"<br>");
// Output = true

// less than or equal to
document.write("less than or equal to = ",a<=b,"<br>");
// Output = true