
// 	Remember!!! Once you’ve completed a problem,
// 	COMMENT OUT YOUR WORK before moving on to the next one.
// 	This makes it easier to read and debug the current 
// 	Solution you are working on.

//     GitHub Help

// As a refresher to what we are doing:

// git init <- initiates a hidden folder in your files to use as a staging area that will be pushed to the cloud

// The three lines of code copied connect that folder created to the cloud. 

// Afterwards, the only lines of code you SHOULD need are:
// git add . <-- the period adds all files in the folder to the staging area.
// git commit -m "message" <-- This is 'm' is for message that you type in quotations showing what work was done,. 

// git push <--- finalizes and 'pushes' the code to github


// Once you finish your lab/HW remember to push to github:

// Git add . 
// Git commit -m”final commit”
// Git push




// I. Variables & Data Types
// A. Q + A
/*How do we assign a value to a variable?
I can assign a value to a variable using the = operator when you declare
it or after the declaration and before accessing it. A variable can be 
declared using var, let, const keywords.
var-keyword is used to declare variabales since Javavscript was created.
it is the new and most recommended way of declaring variables in JavaScript.
const-keyword is used to declare a constant value that cannot be changed once 
assigned a value.A variable can be declared and assigned to a value in the same line.

How do we change the value of a variable?
Once you declare a variable and assign it a value, your program can manipulate 
what is stored in the variable as it runs. The first and easiest way of changing 
a value of a variable is simply to reasign it, declare the variable and initialize
it with another variable.



How do we assign an existing variable to a new variable?
After a value is assigned to a variable using the assignment
operator, you can assign the value to that variable to another 
variable using the assignement


Remind me, what are declare, assign, and define?
DECLARE-creating a variable in Javavscript is called declaring 
a variable that is used to hold a value.It can hold any 
value, from primitive to objects
ASSIGN-Javascript uses the = operator to assign a value to a variable or property.
DEFINE-To define something in javascript is to give it a meaning.We define a 
variable by assigning it a a value.A definition is an expression object. It has
no permanece and is mutable.it reads into memeory and stays there for as long as
 it has a reference. If the reference is redefined, the old expression vanishes from memory


What is pseudocoding and why should you do it?
Pseudocode is and infromal way of programming description that does not require any strict programming
description that does not require any strict programming langugae syntax or underlying technology considerations. 
It is used for creating an outline or rough draft of a program.Pseudocode summarizes a program's flow, but excludes
 underlying details



What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it
I should only spend about 15 minutes trying to break a code before asking for help to solve the problem.and no more than four hours


 */
// B. Strings
// let firstVariable ="Hello World";
// firstVariable = 12;
// let secondVariable= firstVariable;
// secondVariable = "Goodbye World";
// console.log(firstVariable)
// console.log(secondVariable);

// const yourName = "Koreya Washington"
// console.log(`Hello my name is ${yourName}`)

// C. Booleans
// Using the provided variable definitions, replace the blanks
//  so that all log statements print truein the console. 
// Answers should be all be valid JS syntax and not weird 
// things that don't make sense but happen to print trueto the console
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
//   console.log(false && false && false && false && false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 !== '48');

// D. The Farm
/* Declare a variable animal. Set it to be either "cow" or something else
Write code that will print out "mooooo" if the it is equal to cow
Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
Commit
*/
// let animal = "lamb";
// let num=Math.floor(Math.random() * 10)
// if(num >= 7){
// console.log("baa")
// } else {
// 	console.log("Hey!You are not a lamb.")
// }

// E. Driver's Ed
/* Make a variable that holds a person's age; be semantic
Write code that will print out "Here are the keys!", if the age is 16 years or older,
 or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/

// let age = Math.floor(Math.random()*99)

// if(age  <= 16 ){
// 	console.log("Sorry, you're too young.")
// }else {
// console.log("Here are the keys!")
// }

// console.log(age)
//_____________________________________________________________






// II. Loops
/*Remember: USE letwhen you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++)

This is NO GOOD: for(i = 0; i < 100; i++)*/


// A. The Basics
/* Write a loop that will print out all the numbers from 0 to 10, inclusive*/

// {
// 	let counter = 0;
// while (counter < 11){
// 	console.log(counter)
// 		counter++
	
// }
// }

/*Write a loop that will print out all the numbers from 10 up to and including 400*/
// {
// 	let counter = 10;
// 	while(counter < 401){
// 		console.log(counter);
// 		counter++
// 	}
// }

/*Write a loop that will print out every third number starting with 12 and going no higher than 4000*/
// 

// B. Get even
/*Print out the numbers that are within the range of 1 - 100
Adjust your code to add a message next to even numbers only that says: "<-- is an even number" */
// for(let i = 1; i <= 100; i++){
// 	if(i%2 === 0){
// 		console.log(i + "<-- is an even number")
// 	}else{
// 		console.log(i)
// 	}
// }

// C. Give me Five
/*For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
For numbers divisible by both three and five, be sure your code prints both messages */
// for(let i = 0; i <= 100; i++){
// 	if(i%5 === 0){
// 		console.log(i + " I found a number. High five!");
// 	}else if(i%3 === 0){
// 		console.log(i + " I found a number. Three is a crowd");
// 	}else if(i%3 === 0 && i%5 === 0){
// 		console.log(" I found a number. High five! I found a number. Three is a crowd");
// 	}else{
// 		console.log(i);
// 	}
// }

// D. Savings account
/*Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.


You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it. */

//_____________________________________________________________








// III. Arrays & Control Flow
// A. Talk about it:
/*What are the things in an array called?
An array is a special variable, which can hold more than one value.Inside of an array there are elements, objects, or items.
Do Arrays guarantee those things will be in order?
An array does not guarentee the order of what is inside.
All modern implementations iterate through object properties in the order in which they were defined.
What real-life thing could you model with an array?
An array can be used to build a user interface for a compnay that help the users of 
that interface to be able to search for specific content making it available to the user*/

// B. Easy Does It
/*Create an array that contains three quotes and store it in a variable called quotes*/
// const quotes = ["Red","Gold","Green"]
// console.log(quotes);

// C. Accessing elements
/*Given the following array const randomThings = [1, 10, "Hello", true]

How do you access the 1st element in the array?
Change the value of "Hello"to "World"
Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
 */
// const randomThings = [1, 10, "Hello", true]

// randomThings.splice(2,1,"World");//Change the value of "hello" to "world"
// console.log(randomThings[0]);//access the element in the first index of array
// console.log(randomThings);




// D. Change values
/* Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

What would you write to access the 3rd element of the array?
Change the value of "Github" to "Octocat"
Add a new element, "Cloud City" to the array
*/
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// const length = ourClass.push("Cloud City");//add a new element
// ourClass.splice(4,1,"Octocat");//change the value from github to octocat
// console.log(ourClass[2]);//acces the 3 element of array in the 2nd index

// console.log(ourClass)

// E. Mix It Up
/* Note: You don't really need .splice()for these. You could use it, but there are 
simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
Remove the 5from the beginning of the array.
Add the string "Bob Marley"to the beginning of the array.
Remove the string of your choice from the end of the array.
Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean?
 Did the .reverse()method return anything?
*/
// const myArray = [5, 10, 500, 20];
 
// const length = myArray.push("Aegon","Pineapples");
// myArray.splice(0,1,"Bob Marley");
// myArray.reverse();
// //The ,reverse method mutatates the array and returns a reference to the array
//  console.log(myArray)

// F. Biggie Smalls
/* Create a variable that contains an integer.

Write an if ... elsestatement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big numberif the number is greater than or equal to 100.*/
// let num = Math.floor(Math.random()*150)
// if (num >= 100) {
// 	console.log("big number");
// }else{
// 	console.log("little number");
// }
//  console.log(num)
// G. Monkey in the Middle
/*Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".

// */
// let num = Math.floor(Math.random() *20 )
// if (num < 5) {
// 	console.log("little number");
// }else{
// 	console.log("monkey")
// }
// console.log(num);

// H. What's in Your Closet?
/*What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence 
"Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
In the same way, access one item from Thom's pants array.
Access one item from Thom's accessories array.
Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas. */
// const kristynsCloset = [
// 	"left shoe",
// 	"cowboy boots",
// 	"right sock",
// 	"Per Scholas hoodie",
// 	"green pants",
// 	"yellow knit hat",
// 	"marshmallow peeps"
//   ];

//   let ourVariable = kristynsCloset[2];// ourVariable equals "right sock"
//   console.log(`Kristen is rocking that ${ourVariable} today!`);

//   kristynsCloset.splice(6,0,"raybans");

//   console.log(kristynsCloset);
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
// 	[
// 	  // These are Thom's shirts
// 	  "grey button-up",
// 	  "dark grey button-up",
// 	  "light blue button-up",
// 	  "blue button-up",
// 	],[
// 	  // These are Thom's pants
// 	  "grey jeans",
// 	  "jeans",
// 	  "PJs"
// 	],[
// 	  // Thom's accessories
// 	  "wool mittens",
// 	  "wool scarf",
// 	  "raybans"
// 	]
//   ];
//   const top = thomsCloset[0][0];
//   const bottom = thomsCloset[1][0];
//   const accessory = thomsCloset[2][2];
// thomsCloset[1].splice(2,1,"Footie Pajamas");
// console.log(thomsCloset[1][2]);//chang pj to footie pajamas
//   console.log(`Thom is wearing a fancy ${top}, a fresh pair of ${bottom}, and a rare set of ${accessory}.`);
//   console.log(thomsCloset[0][0]);//access shirt
//   console.log(thomsCloset[1][0]);//access pants
//   console.log(thomsCloset[2][2]);//access accessory

//_____________________________________________________________








// IV. Functions
// A. printGreeting
/*Do you think you could write a function called printGreetingwith a parameter namethat returns a
 greeting with the argument interpolated into the greeting?

Like so?

console.log(printGreeting("Slimer"));
=> Hello there, Slimer!

You think you could? I think so too. Feel free to skip this problem, because you've already done it. 
If you've done the problem twice, read entire problems carefully before doing them from now on.
*/

// B.printCool
/*Write a function printCoolthat accepts one parameter, nameas an argument. The function should print 
the name and a message saying that that person is cool.

console.log(printCool("Captain Reynolds"));
=> "Captain Reynolds is cool";
 */
// function printCool(name) {
// 	console.log(`${name} is cool`);
// }
// let firstName = printCool("Captain Reynolds")
// C. calculateCube
/*Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

console.log(calculateCube(5));
=> 125*/


// function calculateCube(number) {
	
// 	let volume = number ** number
// 	console.log(`The volume of the cube is ${volume}`);
// }
// const calculation = calculateCube(3);

// D. isVowel
/*Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. 
In general, when you write functions, take a minute to test them with different values to make sure they behave
 the way you want.

console.log(isVowel("a"));
=> true*/

// function isVowel(letters) {
// 	letters = letters.toLowerCase()
// 	if(letters === "a"||letters ==="e"||letters==="i"|| letters === "o"|| letters ==="u"){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }
// console.log(isVowel("e"));


// E.getTwoLengths
/*Write a function getTwoLengthsthat accepts two parameters (strings). The function should return
 an array of numbers where each number is the length of the corresponding string.

console.log(getTwoLengths("Hank", "Hippopopalous"));
=> [4, 13]*/


// F.getMultipleLengths
/*Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. 
The function should return an array of numbers where each number is the length of the corresponding string.

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
=> [5, 4, 2, 2, 4]*/


// G. maxOfThree
/*Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

console.log(maxOfThree(6, 9, 1));
=> 9

Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().


* */

// H. printLongestWord
/*Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
=> "Peanutbutter"* */
//_____________________________________________________________






// V. Objects
/*Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website,
 and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// A.
/**Make a user object
Create an object called user.
Write in to the object the key-value pairs for name, email, age, and purchased. Set the 
value of purchasedto an empty array []. Set the other values to whatever you would like.
 */
let user = {
	name:"korea",
	email:"korea@yahoo.com",
	age:"21 years",
	purchased:["eyeliner","hoodie","necklace","sneakers","bracelet"]
}

console.log(user);
// B.
/**Update the user
Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
 */

// C.
/**You have decided to add your user's location to the data that you want to collect.

Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string). */

// D.
/** Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
Console.log just the "Merino jodhpurs" from the purchasedarray.*/

// E.
/** Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

If we want to give our user a friendwith a nameand age, we could write:

user.friend = {
    name: "Grace Hopper",
    age: 85
}
When we console.log user, we would see the friendobject added to our user object.

Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
Console.log just the friend's name
Console.log just the friend's location
CHANGE the friend's age to 55
The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
Console.log just "A latte" from the friend's purchasedarray.*/

// F.
/** Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.*/

// G.
/** Write a single function updateUserthat takes no parameters. When the function is run, it should:
it should increment the user's age by 1
make the user's name uppercase
The function does not need a returnstatement, it will merely modify the user object.

Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
*/
//_____________________________________________________________


// Extra
/*Cat Combinator



1. Mama cat
Define an object called cat1that contains the following properties:

name
breed
age (a number)
console.log the cat's age
console.log the cat's breed



2. Papa cat
Define an object called cat2that also contains the properties:

name
breed
age (a number)



3. Combine Cats!
The cats are multiplying!

Write a function combineCatsthat has two parameters mama, and papa. The function will take two arguments -- each a cat object.

Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.
Example:

combineCats(cat1, cat2)
{ name: "Joe", age: 19, breed: "Mog" }

{ name: "Jam", age: 45, breed: "Siamese" }

This is to demonstrate that functions can take objects as arguments

You could also invoke the combineCatsfunction by writing the objects straight into the parentheses:

combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

Make it so the combineCatsfunction will return a combination of the two incoming cats

The result should be an object wherein the

name is a concatenation of the parents' names
the age is 1
the breed is each of the parents' breeds with a hyphen in between
Example:

console.log(combineCats(cat1, cat2));
Result:



This is to demonstrate that a function can return an object





4. Cat brain bender
If combineCatsreturns an object, and if combineCatstakes objects as arguments, then it stands to reason that:

catCombinatorcan use itself as its own argument.

Take a second to stew on that . . .

What is the result of:

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
Whoa . . .

The above console.log is two levels deep of combineCats.

Write a console.log that is three levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.
Your output should look something like:

*/
