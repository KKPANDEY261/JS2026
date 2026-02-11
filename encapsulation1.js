class a{
    #name;
    #address
    constructor(n1,n2,n3,n4){
        this.#name=n1;
        this.#address=n2;
        this.mobile=n3;
        this.aadhar=n4;
    }
    virendra(){
        return `${this.#name} ${this.#address}`;
    }
    ashutosh(a1,a2){
        this.#name=a1;
        this.#address=a2;
    }
}
const karan=new a("karan","NSTI",78787878787,454545454545);
console.log(karan);
//console.log(karan.#name);
//console.log(karan.address);
karan.name1="pandey";
console.log(karan);
console.log(karan.name1);
console.log(karan.virendra());
karan.ashutosh("kumar","kolkata");
console.log(karan.virendra());
