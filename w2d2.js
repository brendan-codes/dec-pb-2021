// EVENS AND ODDS!

// Create a function that accepts an array of numbers.
// Every time that array has 3 odd values in a row, print "That's odd!"
// Every time the array has 3 even values in a row, print "Even more so!"

// Only print the messages when it's 3 in a row.
// If there are 5 consecutive odd values, it should only print the message one time.
// If there are 7 consecutive even values, it should print the message two times.

function evensAndOdds(numbers){

    var odds = 0; // = 0
    var evens = 2;

    for(var i = 0; i < numbers.length; i++){

        // even vs odds check
        if(numbers[i] % 2 == 0){ // even
            evens++;
            odds = 0;
        }else{ // odd
            odds++;
            evens = 0;
        }

        // evens print message
        if(evens == 3){
            console.log("Even more so");
            evens = 0;
        }

        // odds print message
        if(odds == 3){
            console.log("That's odd");
            odds = 0;
        }
    }
}

evensAndOdds([23, 4, 56, 78, 6, 32, 123, 4567, 8987, 64, 34, 56]);
//            0  1  2  3  4  5  6  7  8

// modulo %
// var
// for loop over array

// EXAMPLES:
// ------------------------------------
// [1,3,5,8,8,8]
// OUTPUT:
// That's Odd
// Even more so!
