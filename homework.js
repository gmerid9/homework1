class Hamster {
    constructor(name){
       this.owner = '' ;
       this.name = name;
       this.price = 15;
    }

    wheelRun() {
        console.log('squeak squeak')
    }

    eatFood() {
        console.log('nibble nibble')
    }

    getPrice() {
        return this.price
    }
    
}

// let hamster1 = new Hamster('Timmy','billy', 20);
// console.log(hamster1)
// // console.log(hamster1.getPrice())

// // hamster1.eatFood()
// // hamster1.wheelRun()



class Person {
    constructor(name) {
      this.name = name 
      this.age = 0 
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0

    }

    getName()  {
        return this.name;
    }
     getAge(age) {
        return this.age +=age;
     }

     getWeight() {
        return this.weight;
     }
     greet() {
         console.log(`Hello ${this.name}`)
     }
     eat() {
         this.weight++;
         this.mood++ ;

     }
     exercise() {
            this.weight--
     }
     ageUp () {
         this.age++ ; 
        this.height++ ;
         this.weight ++ ;
         this.mood-- ;
        this.bankAccount += 20

     }
     buyHamster () {
              this.hamsters.push(Hamster) ;
              this.mood +10 ;
              this.bankAccount - Hamster.getPrice(Hamster)

} 
}
// 1
let timmy = new Person('Timmy');

console.log(timmy);
//
// 2 
timmy.getAge(5);
// console.log(timmy)
//
//3
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
 console.log(timmy)

// for (let i = 0; i < 5; i++) {
//   return (timmy.eat());
// }

// //
// person1.eat();
// person1.eat();
// person1.eat();
// person1.eat();
// console.log(timmy);
// 4
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
console.log(timmy)
//5
timmy.getAge(4)
console.log(timmy)
//6
let gus = new Hamster('Gus');
console.log(gus)
//7
gus.owner = timmy.name
console.log(gus)
//8
timmy.buyHamster
console.log(timmy)
//9
timmy.getAge(6)
console.log(timmy)
//10
timmy.eat();
timmy.eat();
console.log(timmy)
//12 
timmy.exercise()
timmy.exercise()
console.log(timmy)


//---------------------------------------------------------

class  Dinner {
    constructor ( appetizer, entree, dessert ) {
        ;
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;


    }
}
class DinnerFactory {
    constructor(appetizer,entree,dessert) {
        // this.FactoryName = factoryName;
        this.appetizer= appetizer
        this.entree= entree
        this.dessert= dessert
        this.listofmeals= [] ;
    } 
    
   chefMakeDinner(appetizer,entree,dessert)  {
    return newDinner = new Dinner(this.FactoryName, appetizer,entree,dessert);
    this. listofmeals.push(newDinner)

   }

}
// let chef = new DinnerFactory('meals')
// meals.makeDinner('calmari','spaghetii and meat sauce','cheese ')