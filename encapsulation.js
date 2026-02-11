class csa{
    #name;
    #aadhar;
    constructor(a,b,c,d){
        this.#name=a;
        this.address=b;
        this.mobile=c;
        this.#aadhar=d;
    }
    get(){
        return this.#name;
    }
    set(y){
        this.#name=y;
    }
}
const rajkumar=new csa("raj","nsti",7895869569,145236589652);
console.log(rajkumar);
console.log(rajkumar.get());
console.log(rajkumar.address);
console.log(rajkumar.mobile);
//console.log(rajkumar.#aadhar);
console.log(rajkumar.set("yogesh"));
console.log(rajkumar.get());