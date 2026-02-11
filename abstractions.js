class b{
    constructor(n1){
    if (new.target === b){
               console.log("you can't access this class ");
    }else{
        this.name=n1;
    }
    

}
}
const c=new b("kk");
console.log(c);
class d extends b{
    constructor(n5,n6){
        super(n5)
        this.address=n6;
    }
}
const k=new d("karan","nsti");
console.log(k);




