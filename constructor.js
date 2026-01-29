function person(name1,address1,age1){
    this.name=name1;
    this.address=address1;
    this.age=age1;
}
const yogesh=new person("yogesh","cg",35);
const rajkumar=new person("rajkumar","cg",40);
const ashish=new person("ashish","india",60);
console.log(ashish);
console.log(ashish.name);
console.log(ashish.age);
console.log(ashish.address);
console.log(ashish.age,ashish.name);

console.log(rajkumar);
console.log(rajkumar.name);
console.log(rajkumar.age);
console.log(rajkumar.address);
console.log(rajkumar.age,rajkumar.name);

console.log(yogesh);
console.log(yogesh.name);
console.log(yogesh.age);
console.log(yogesh.address);
console.log(yogesh.age,yogesh.name);
