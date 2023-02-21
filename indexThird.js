// Creating Classes & Factories
/////////////////////////////////////
// Created Hamster Class
// //////////////////////////////////////

// class Hamster{
//     constructor(owner,name,price){
//         this.owner = owner
//         this.name = name
//         this.price = price
//     }

// wheelRun(){
//     console.log("squeak squeak");
// }eatFood(){
//     console.log("nibble nibble");
// }getPrice(){
//     console.log(this.price)
// }

// }
//  let pet1 = new Hamster("Kody","Panther",18);
//  let pet2 = new Hamster("Mary","Brownie",15);


 
//  console.log(pet2.owner + " pet's name is , " + pet2.name + " and she was purchased for " + pet2.price + " dollars.");
//  console.log(pet1.name + " is being rehomed to " + pet2.owner +"'s family.");
// //  



////////////////////////////////////////
// Created Person class
/////////////////////////////////////
class Person {

    constructor(name,age, height, weight, mood,hamsters, bankAccount){
this.name = name
this.age = age;
this.height = height;
this.weight = weight;
this.mood = mood;
this.hamsters = hamsters;
this.bankAccount = bankAccount;

    }getName(){
        console.log(this.name);
    }getAge(){
        return this.age;
    }getWeight(){
        return this.weight
    }greet(){
        console.log();
    }eat(){

    }exercise(){

    }ageUp(){

    }buyhamster(){

    }
}

// Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.

// Instantiate a new Person named Timmy
// Age Timmy five years
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// Age Timmy 9 years
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
// Age Timmy 15 years
// Have Timmy eat twice
// Have Timmy exercise twice
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created timmys story" Easy Mode Keep Going Save and Run Code

// const timmy = new Person('Timmy')
// for(let i =0; i < 5; i++){
//   timmy.ageUp()
// }
// for(let i =0; i < 5; i++){
//   timmy.eat()
// }
// for(let i =0; i < 5; i++){
//   timmy.exercise()
// }
// for(let i =0; i < 9; i++){
//   timmy.ageUp()
// }
// const gus = new Hamster('Gus')
// gus.owner = 'Timmy'
// timmy.buyHamster(gus)

// for(let i =0; i < 15; i++){
//   timmy.ageUp()
// }
// timmy.eat()
// timmy.eat()
// timmy.exercise()
// timmy.exercise()
// Chef Make Dinners
// class Dinner {

// }

// class Chef {

// }
// Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
// The only thing important here is that student recognizes that the Chef should produce dinners
// No wrong answers as long as the Chef can produce dinners
// Chef should have an array of dinners
// Part 1 is about following instructions, part 2 is purposefully ambiguous, as a dev you need to be able to do both
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "Dinner is served" Easy Mode Keep Going Save and Run Your Code

// I. Variables & Datatypes
// To answer these questions, you can add them in a multiline comment section inside of script.js

// like this:

// /*
// 1. How do we assign a value to a variable? A. With the assignment operator
// 2. How do we change the value of a...
// ...
// */



// A. Q + A
// student should be able to describe these answers in their own words
// How do we assign a value to a variable? let somevar = 10
//In javavscript variables are assigned by using the equal sign (=) which is an 'assignment' operator

// How do we change the value of a variable? somevar = 12
// once a variable is decalred and assigned to a value to change the value of a variable by
//  reassigning the variable value in another line of code

// How do we assign an existing variable to a new variable? let newvar = somevar
// once a value is assigned to a variable it can be updated by using the assignment operator again but
//  instead of assigning the variable to a new value, create a new variable and assign existing variable
//  to the new variable using the assignment operator

// Remind me, what are declare, assign, and define? no wrong answers, they should show an understanding of how to use these words
//to declare means to give details about the properties of a variable. to define tells where the variable gets 
// stored. to assign is to assigne a value to a variable.

// What is pseudocoding and why should you do it? no wrong answers but they should understand that psuedo code is not code its plain english description of what they want to accomplish
// pseudocoding allows programmers o express the design in great detail and provides programmers a detailed 
// template for the next step of writing code in a specific programming language. the benefit of pseudocode 
// is that anyone can understand it and what it is attempting to do since it is written in plain Text.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? no wrong answers but they should defend what they say
// we shouldnt spend no more than 15 minutes completing a problem until looking for google or help from a 
// peer or instructure. we shouldnt spend more than 4 hours on a problem without asking someone for help.


// B. Strings Simply should follow the below instructions
// For all other questions that involve writing code, you can solve them via the following instructions.

// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean




// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console answer below
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');



// D. The farm follow below instructions
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit



// E. Driver's Ed
// Make a variable that holds a person's age; be semantic let personAge
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// if(personAge >= 16){
// console.log("Here are the keys!")
// } else {
// console.log("Sorry, you're too young.");
// }



// II. Loops simple loops students should follow instructions
// Remember: USE letwhen you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)




// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000



// B. Get even students should use modulus
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"



// C. Give me Five students should use modulus
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Example Output:

// I found a 5. High five!
// I found a 10. High five!


// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!


// For numbers divisible by both three and five, be sure your code prints both messages



// D. Savings account simple students should follow instructions and either make an array of numbers or just make a loop
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.




// III. Arrays & Control flow answer questions



// A. Talk about it:
// What are the things in an array called? elements
// Do Arrays guarantee those things will be in order? yes
// What real-life thing could you model with an array? no wrong answers as long as its a list/collection



// B. Easy Does It simple they should follow instructions
// Create an array that contains three quotes and store it in a variable called quotes



// C. Accessing elements simple they should follow instructions
// Given the following array const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();



// D. Change values simple they should follow instructions
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array



// E. Mix It Up simple they should follow instructions
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: const myArray = [5, 10, 500, 20]

// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?



// F. Biggie Smalls simple they should follow instructions
// Create a variable that contains an integer.

// Write an if ... elsestatement that:

// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.



// G. Monkey in the Middle simple they should follow instructions
// Write an if ... else if ... elsestatement:

// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".



// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log(`Kristyn is rocking that ${kristynsCloset[2]}`)
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

// kristynsCloset.splice(5, 0, 'raybans')
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

// kristynsCloset.splice(5,1,'stained knit hat')
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

// thomsCloset[0][0]
// In the same way, access one item from Thom's pants array.

// thomsCloset[1][0]
// Access one item from Thom's accessories array.

// thomsCloset[2][1]
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log(`Thom is looking super fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]},${thomsCloset[2][1]} `)
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[1][2] = "Footie Pajamas"



// IV. Functions


// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// Like so?

// const printGreeting = (name) => {
//   return `Hello, ${name}`
// }


// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.




// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

// const printCool = (name) =>{
//   return `${name} is cool`
// }



// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

// console.log(calculateCube(5));
// => 125

// const calculateCube = (num) =>{
//   return num * num * num
// }



// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// console.log(isVowel("a"));
// => true

// function isVowel(char){
//   const arr = ['a', 'e', 'i', 'o', 'u']

//   return arr.includes(char.toLowerCase())
// }



// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

// const getTwoLengths = (str1, str2) => [str1.length, str2.length]



// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

// const getMultipleLengths = (arr) => {
//   const ans = []
//   arr.forEach((str) => {
//     ans.push(str.length)
//   })
//   return ans
// }



// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// const maxOfThree = (num1, num2, num3) => {
//   const arr = [num1, num2, num3]

//   arr.sort((a,b) => {
//     return b - a
//   })

//   return arr[0]
// }
// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().




// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

// const printLongestWord = (arr) => {
//   let ans = arr[0]
//   let length = arr[0].length
//   arr.forEach((str) => {
//     prevLength = length
//     length = Math.max(ans.length, str.length)
//     if(prevLength !== length){
//       ans = str
//     }    
//   })
//   return ans
// }



// Objects simple students should just follow instructions here.
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.




// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.



// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++



// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).



// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.



// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friendobject added to our user object.

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.



// F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.



// G. Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.






// Requirements Complete! Hungry for More? just follow instructions



// Cat Combinator



// 1. Mama cat
// Define an object called cat1that contains the following properties:

// name
// breed
// age (a number)
// console.log the cat's age
// console.log the cat's breed



// 2. Papa cat
// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)



// 3. Combine Cats!
// The cats are multiplying!

// Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
// Example:

// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }

// { name: "Jam", age: 45, breed: "Siamese" }

// This is to demonstrate that functions can take objects as arguments

// You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

// combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

// Make it so the combineCatsfunction will return a combination of the two incoming cats

// The result should be an object wherein the

// name is a concatenation of the parents' names cat1.name + cat2.name
// the age is 1
// the breed is each of the parents' breeds with a hyphen in between cat1.breed + '-' + cat2.breed
// Example:

// console.log(combineCats(cat1, cat2));
// Result:



// This is to demonstrate that a function can return an object





// 4. Cat brain bender
// If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

// catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
// Whoa . . .

// The above console.log is two levels deep of combineCats.

// Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
// Your output should look something like:

