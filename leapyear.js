//prompt user for the range of years
//test for a leap year
//list leap years within the range provided
var beginning=prompt('Enter starting point: ')
var end=prompt('Enter the finishing point: ')
for (let i=beginning; i<end; i++){
    if (i % 4==0){
        console.log(i)
    }
}