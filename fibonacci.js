//generate fibonacci sequence..then test if a number is fibonacci
const number = 5;
let n1=0 , n2=1, nextNumber;
//Prompt user for a number
var testNumber = prompt('Enter number to be tested: ');
for (let i=1; i<=number; i++) {
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
    console.log(nextNumber)
    if (testNumber == nextNumber) {
        console.log('Number is fibonacci');
    } else {
        console.log('Number is not fibonacci');
    }
}


