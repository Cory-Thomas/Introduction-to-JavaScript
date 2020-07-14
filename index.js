/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;

if( votingAge >= 18 ){
    console.log( true )
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let varOne = 2;
const varTwo = 3;

if( varOne < varTwo ){
    varOne += varTwo;
    console.log( varOne );
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let string = "1999";

console.log( Number( string ) );


//Task d: Write a function to multiply a*b 

const multiply = (a,b) => a*b;

console.log( multiply( 4,5 ) );


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const convertToDogAge = age => age*7;

console.log( convertToDogAge( 10 ) );


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

const foodAmountConversion = ( weight,age ) => {
    if ( age >= 1 ) {
        if ( weight <= 5 ) {
            return weight * .05;
        }
        else if ( weight >= 6 && weight <= 10 ) {
            return weight * .04;
        }
        else if ( weight >= 11 && weight <= 15 ) {
            return weight * .03;
        }
        else {
            return weight * .02;
        }    
    }
    else {
        if ( age >= .166 && age <= .333 ) {   // between 2 and 4 months
            return weight * .1;
        }
        else if ( age >= .333 && age <= .583) {   // between 4 and 7 months
            return weight * .05;
        }
        else if ( age <=.583 && age < 1 ) {   // between 7 and 12 months
            return weight * .04;
        }
    }
};

console.log( foodAmountConversion( 15, 1) );   // if you want the puppies age then divide number of months by 12 to be put in the argument



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 



const gameResults = choice => {
    let computerChoice = Math.floor( Math.random() * 3) +1;

    if ( computerChoice === 1) {
        computerChoice = "rock";
    } else if ( computerChoice === 2 ) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    if ( choice.toLowerCase() === "paper" ) {
        if ( computerChoice === "rock") {
            return "user wins --- User: " + choice + " Computer: " + computerChoice;
        } else {
            if ( computerChoice === "scissor") {
                return "computer wins --- User: " + choice + " Computer: " + computerChoice;
            } else {
                return "tie! --- User: " + choice + " Computer: " + computerChoice;
            }
        }
        
    } 

    if ( choice.toLowerCase() === "scissor") {
        if ( computerChoice === "rock" ){
            return "computer wins --- User: " + choice + " Computer: " + computerChoice;
        } else {
            if ( computerChoice === "paper" ) {
                return "user wins --- User: " + choice + " Computer: " + computerChoice;
            } else {
                return "tie --- User: " + choice + " Computer: " + computerChoice;
            }
        }
    }

    if ( choice.toLowerCase() === "rock") {
        if ( computerChoice === "paper" ){
            return "computer wins --- User: " + choice + " Computer: " + computerChoice;
        } else {
            if ( computerChoice === "scissor" ) {
                return "user wins --- User: " + choice + " Computer: " + computerChoice;
            } else {
                return "tie --- User: " + choice + " Computer: " + computerChoice;
            }
        }
    }
};

const choice = prompt("Enter rock, paper, or scissor")

console.log( gameResults( choice ) );

  
/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const metricConvert = km => km * .62;

console.log( metricConvert( 88 ) );


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
const feetConvert = feet => feet / .032808;

console.log( feetConvert( 2 ) );



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, 
// (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
const annoyingSong = num => {
    for( num = num; num > 0; num--) {
        console.log( num + " bottles of soda on the wall, " + num + " bottles of soda, take one down pass it around " + ( num - 1 ) + " bottles of soda on the wall" );
    }
};

annoyingSong( 10 );



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
const calculateGrade = total => {
    if ( total >= 90 ) {
        return "Grade = A"
    } else if ( total >= 80 && total < 90) {
        return "Grade = B"
    } else if ( total >= 70 && total < 80) {
        return "Grade = C"
    } else if ( total >= 60 && total < 70) {
        return "Grade = D"
    } else {
        return "Grade = F"
    }
};

console.log( calculateGrade( 59 ) );
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const vowelCounter = word => {
    word = word.toLowerCase();
    let counter = 0;

    for( let i = 0; i < word.length; i++ ) {
        if ( word[i].includes( "a" ) ) {
            counter++;
        } else if ( word[i].includes( "e" ) ) {
            counter++;
        } else if ( word[i].includes( "i" ) ) {
            counter++;
        } else if ( word[i].includes( "o" ) ) {
            counter++;
        } else if ( word[i].includes( "u" ) ) {
            counter++;
        }
    };

    return counter;
};

console.log( vowelCounter( "aeiou" ) );



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

// Edited old code to include this



