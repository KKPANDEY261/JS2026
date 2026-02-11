class animal{
    sound(){
         return "animal speak";            
}
}
class dog{
    sound(){
        return "dogs is barking";
    }
}
class cat{
    sound(){
        return "cat are speaking meow";
    }
}

const animals=new animal();
const dogs =new dog();
const cats = new cat();
console.log(animals.sound());
console.log(dogs.sound());
console.log(cats.sound());