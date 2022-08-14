// Code your solution in this file!

// For this code we need to define the function returnFirstTwoDrivers()
// We need to have the function 
// the .split lets us return a portion of the array.
// In the below example slice(0,2) returns the values in the array from 0,2


const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2);
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(2,4);
}

//this is an array containing two elements, in this case its our functions earlier.
//this code wil return the first two drivers if called and last two. 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


//We need to write a function that takes a fare and multiplies it 
//the function that multiplies the value returned from the fare function is the createFareMutliplier function.

const createFareMultiplier = function (faremultiplier) {
    return function (fare) {
        return fare * faremultiplier;
    }
}

//This line of code is to get the value of the fare and multiply it by 2.

const fareDoubler= function(doubleFare){
return doubleFare *2;
}

//This line of code is to get the value of the fare and multiply it by 3

const fareTripler= function(tripleFare) {
    return tripleFare*3;
}

// selectDifferentDrivers(arrayOfDrivers, function)
//       ✓ returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//       ✓ returns the last two drivers when passed returnLastTwoDrivers() as the second argument

//Important to note that the two functions returnFirstTwoDrivers/returnLastTwoDrivers are told be to as the SECOND argument so it comes after driver parameter.

function selectDifferentDrivers(drivers, returnLastTwoDrivers ){
    return returnLastTwoDrivers(drivers);

}










