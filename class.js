class student{
    constructor(fname,sname,lname,mobile,address,email){
        this.firstname=fname;
        this.secondname=sname;
        this.lastname=lname;
        this.mobile=mobile;
        this.address=address;
        this.email=email;

    }
}
const rajkumar=new student("raj","kumar","sahu",8888888888,"nsti howrah","raj@gmail.com");
console.log(rajkumar);
console.log(rajkumar.firstname);
console.log(rajkumar.secondname);
console.log(rajkumar.lastname);
console.log(rajkumar.mobile);
console.log(rajkumar.email);
console.log(rajkumar.address);
