class a{
    constructor(e,f,g){
        this.fname=e;
        this.sname=f;
        this.lname=g;
    }
}
class b extends a {
    constructor(h,i,j,k,l){
        super(h,i,j);
        this.address=k;
        this.aadhar=l;
    }
}

const yogesh=new a("yogesh","das","mahant","nsti");
console.log(yogesh);
const yogesh1=new b("yogesh","das","mahant","nsti",78458445584);
console.log(yogesh1);