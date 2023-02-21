// Arrays, Loops, and Conditional Reps
// Learning Objectives
// Practice with Arrays
// Practice with Loops
// Practice with Conditionals
// Prerequisites
// An introduction to JavaScript








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
// // Where is Waldo answered 
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


