// Creating Classes & Factories
/////////////////////////////////////
// Hamster Class created
// //////////////////////////////////////

class Hamster{
    constructor(owner,name,price){
        this.owner = owner
        this.name = name
        this.price = price
    }

wheelRun(){
    console.log("squeak squeak");
}eatFood(){
    console.log("nibble nibble");
}getPrice(){
    return this.price
}

}
 let pet1 = new Hamster("Kody","Panther","Eighteen Dollars");
 let pet2 = new Hamster("Mary","Brownie","Twelve Dollars");


 
 console.log(pet2.owner + " pet's name is , " + pet2.name + " and she was purchased for " + pet2.price + " dollars.");
 console.log(pet1.name + " is being rehomed to " + pet2.owner +"'s family.");
//  



// ////////////////////////////////////////
// //Person class created
// /////////////////////////////////////

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

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`Mucho Gusto! I am ${this.name} greeting.`)
    }
    eat() {
        this.weight++
        this.mood++
    }
    exercise() {
        this.weight--
    }

    ageUp() {
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= hamster.getPrice()
    }

}

// //////////////////////////////////////////////
// // Create a Story with your Person class
// // Timmy's story created
// /////////////////////////////////////////////

const timmy = new Person('Timmy');

for (let i = 0; i < 5; i++) {
  timmy.ageUp();
}

for (let i = 0; i < 5; i++) {
  timmy.eat();
}

for (let i = 0; i < 5; i++) {
  timmy.exercise();
}

for (let i = 0; i < 9; i++) {
  timmy.ageUp();
}

const gus = new Hamster('Timmy','Gus','Twenty-Five Dollars');
gus.owner = "Timmy"

timmy.buyHamster(gus);

for (let i = 0; i < 15; i++) {
  timmy.ageUp();
}

timmy.eat();
timmy.eat();

timmy.exercise();
timmy.exercise()
console.log(gus);
console.log(timmy);


////////////////////////////////////
// dinner is served
////////////////////////////////////

class Dinner {
      constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
      }
    }
    
    class Chef {
      getDinner(appetizer, entree, dessert) {
        const dinner = new Dinner(appetizer, entree, dessert);
        return dinner;
      }
    }
    
    const chef1 = new Chef();
    
    const dinnersOfChef = [];
    const dinner1 = chef1.getDinner('French Fries', 'Vegan Burger', 'Peanut Butter Cookies');
    const dinner2 = chef1.getDinner('Tortilla Chips with Nacho Cheese and Salsa', 'Quesodillas', 'Cinnamon Twists');
    const dinner3 = chef1.getDinner('Chicken Wings', 'Pizza', 'Jalepeno Poppers');
    dinnersOfChef.push(dinner1);
    dinnersOfChef.push(dinner2);
    dinnersOfChef.push(dinner3);
    console.log(dinnersOfChef);
    


// 