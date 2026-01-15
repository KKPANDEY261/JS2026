// bitwise and operator
a=16 & 18;
//output ((10000 & 10010) = 10000) = 16
console.log(a);
// bitwise OR operator
a= 16 | 18;
// output ((10000 & 10010) = 10010) = 18
console.log(a);
a= 9 | 7 ;
//output 1001 & 0111 = 1111=15
console.log(a);
// bitwise not operator
a=~11;
// 00000000000000000000000000001011
// 11111111111111111111111111110100
// first bit value is = -2147483648
// sum of positive value=2147483647
//  then total positive binary value is=2147483647-11=2147483636
//final output -2147483648+2147483636=-12
console.log(a);
//// bitwise XOR operator
a=9^7;
//output 1001 & 0111 = 1110=14
console.log(a);
// bitwise left shift operator
a=20<<2;
//output 10100 <<2=1010000=80
console.log(a);
// bitwise Right shift operator
a= 20>>2;
//output  10100 >>2= 101=5
console.log(a);
// bitwise unsigned Right shift operator
a=20>>>2;
//output 00000000000000000000000000010100
    //   00000000000000000000000000000101=5
a=-20>>>2;
// output  11111111111111111111111111101100     
//         00111111111111111111111111111011
console.log(a);