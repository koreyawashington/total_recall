// Arrays, Loops, and Conditional Reps
// Learning Objectives
// Practice with Arrays
// Practice with Loops
// Practice with Conditionals
// Prerequisites
// An introduction to JavaScript
// Recommendations
// If homework is taking you more than 4 hours to complete:

// Go to TA hours
// Get on zoom with a classmate
// Reach out to the instructional team during class time to schedule a 1:1 meeting
// Don't stress about the Hungry For More section
// If home work is taking you less than 4 hours to complete

// Work on the Hungry For More section - make the most of your time here and find challenges
// Help someone who is stuck, teaching is a great way to learn something more in depth
// Reach out to the instructional team for more challenges/ways to keep growing with your abilities
// Getting Started


// Create a javascript file inside your homeworkfolder that you will make for today to record your answers (maybe name it answers.js)
// Keep your answers organized! Included a commented header for each section in your answers file. Something like the following:
// ////////////////////////////////
// // Easy Going answered
// ////////////////////////////////
// 
// for(let x = 1; x <= 20; x++){
//     if(x <= 20){
//         console.log(x )
//     }
// }

// ////////////////////////////////
// // Get Even answered
// ////////////////////////////////
//  for(let y = 0;y <= 200; y++){
//      if(y % 2 ===0){
// console.log(y + " is an even number");
//  }
// }

// ////////////////////////////////
// // Fizz Buzz answered
// ////////////////////////////////
// for(let i = 0; i <= 100; i++){
//     	if(i%5 === 0){
//     		console.log(i + " Buzz");
//     	}else if(i%3 === 0){
//     		console.log(i + " Fizz");
//     	}else if(i%3 === 0 && i%5 === 0){
//     		console.log(" FizzBizz");
//     	}else{
//     		console.log(i);
//     	}
//     }

// ////////////////////////////////
// // Wild Wild Life answered
// ////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// let updateAge = plantee.splice(2,1,"5001");
// console.log(plantee);
// let updateHometown = wolfy.splice(3,1,"Gotham City");
// console.log(wolfy);
// let addedHometown = dart.splice(3,0,"Hawkins");
// console.log(dart);
// let wolfyNewName =wolfy.splice(0,1,"Gameboy");
// console.log(wolfy);

// ////////////////////////////////
// // Yell at the Ninja Turtles answered
// ////////////////////////////////
// const ninjaTurles = ["donatello","leonardo","raphael","michaelangelo"];
// const newArr = []
// for(let item of ninjaTurles){
//     newArr.push(item.toUpperCase())
// }
// console.log(newArr);
// ////////////////////////////////
// // Methods, Revisited answered
// ////////////////////////////////

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];


// console.log(favMovies[8]);
// favMovies.sort();// array.prototype.sort() arranges the objects in an array in alphabetical order
// console.log(favMovies.pop());//array.prototype.pop removes that last element from an array and returns that element and changes the length of the array


// const pushMovie = favMovies.push('Guardians of the Galaxy')

// console.log(favMovies);

// let reverseMovies = favMovies.reverse();
// console.log(reverseMovies);

// const firstElement = favMovies.shift();
// console.log(favMovies);
// console.log(firstElement);

// console.log(favMovies.unshift("The Help"));//array.prototype.unshift adds one or more elements to the beginning of an array and returns the new length of the array
// console.log(favMovies);

// console.log(favMovies.indexOf('Django Unchained'));
// favMovies.splice(14,1,"Avatar");
// console.log(favMovies);

// let slice = favMovies.slice(9)
// console.log(slice);//array.prototype.slice() returns a shallow copy of a portion of an array into a new array object with a select taring point to the end.This did not change my origanal array!This is just showing me half of my array starting at the 9th movie, there are 18 total movies

// console.log(favMovies); //final results


// console.log(favMovies.indexOf('Fast and Furious'));//if i try to console.log()something that is not in the array I got the retuen output of -1

// ////////////////////////////////
// // Where is Waldo
// ////////////////////////////////

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// console.log (whereIsWaldo[0]);//[ 'Timmy', 'Frank' ]
// console.log (whereIsWaldo[1]);//Eggbert
// console.log (whereIsWaldo[2]);//[ 'Lucinda', 'Jacc', 'Neff', 'Snoop' ]
// console.log (whereIsWaldo[3]);//[ 'Petunia', [ 'Baked Goods', 'Waldo' ] ]

// //Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"),1);

// // Change "Neff" to "No One"
// whereIsWaldo[1][2] = "No One";

// //Access and console.log "Waldo"
// console.log (whereIsWaldo[2][1][1]);


// ////////////////////////////////
// //  Excited Kitten answered
// ////////////////////////////////

// const  kittyTalk = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..." ];
// let meow = 0 ;
// for (let i =0 ; i <= 20 ; i++)
// {
//   if (i % 2 == 0){
//     meow =  Math.floor(Math.random() * 3) ;
//     console.log (kittyTalk[meow]);
//     }
//     else 
//         console.log ( "Love me, pet me! HSSSSSS!");

// }
// ////////////////////////////////
// //  Find the Median ansered
// ////////////////////////////////


// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// //The median is the middle number in a sorted, ascending or descending, list of numbers and can be more descriptive of that data set than the average.

// let calculateMedian = function (arr){
//         arr.sort();
//         let median = 0;
//         let length = arr.length;
//         if (length % 2 != 0 )
//         median = arr[Math.floor(length / 2)]
//         else 
//         median = (arr[length/2]+arr[(length/2)-1]) / 2
//       return median;  
//       }

// console.log (calculateMedian(nums))


// TEST YOUR WORK! Make sure that your code works node name_of_your_file.js.
// If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later. You may find some later problems easier or need a break from what you're working on and set some fresh eyes on something you've been stuck on.
// After each section (even if you're not fully done with it), add and commit your work.
// Please use the commit messages that you see at the end of each section (modify it if you need to ie checkers almost solved). We will see these messages on Github. It will help us to see your progress. If you go back and fix a section, commit again with an updated message.

// When you are done with your homework, push it to your origin(this is your Github) and make an issue on our repo.
// Final note: You are not alone! Everyone else in the class is working on this as well. Send Slack messages, make a Zoom channel, or meet with the TA to discuss sticking points.

// Part I: HTML & CSS
// Prepare yourself for tomorrow's morning exercise! Watch the following videos on HTML and CSS. You will be working on practicing CSS in your Morning Exercise.

// Rank you comfort with the following material on a scale of 0 - 5:

// 0 - I have no idea what it is

// 1 - I am not sure

// 2 - I am shakey, I could use a refresher

// 3 - I almost feel like I've got it

// 4 - I feel pretty good about the material, but some extra review would help

// 5 - I got this! I am ready to code

// Based on your self-assessed score, watch the appropriate video(s)

// The videos are between 5 - 15 minutes long

// HTML Intro (tags, content, attributes, semantic HTML)

// HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)

// CSS Intro (including css files in HTML, elements)

// CSS Basics (colors, background, font properties)

// 

// // arr is a keyword recognized by JS
// console.log(nums);

// function median(arr) {
//     // step 1: sort our array
//     arr.sort();

//     const middleIndex = arr.length / 2;
//     //if ood, return middle element
//     if(arr.length % 2 !== 0){
//         return arr[Math.floor(middleIndex)]
//     }
    
//     return(arr[middleIndex - 1] + arr[middleIndex] / 2)
// }

// console.log(median(nums));
// Hungry for More?
// Choose one that you didn't get to solve in lab

// Fibonnacci (morning lab)
// Checkerboard (morning lab)
// TwoDArray (afternoon lab)
// Finish all 3 Lab Questions
// Return of the Closets
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

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
// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
// 🔴 The commit message should read:
// "Kristyn and Thom have their outfits ready for class - array practice"
// Dirty Laundry
// Continue looking at the closet arrays:

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
// Inventory
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
// 🔴 The commit message should read:
// "Hungry for More: I tackled..."
// Technical Requirements
// A JavaScript file that runs without syntax errors (comment out stuff that doesn't work)
// At least one commit message per problem
