



// Please work on the following challenges and upload your work when done.

// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.


function printOdds()
{
    for(var i =1; i<=20; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i)
        }
    }
}

printOdds()

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

gimme3s()

function gimme3s()
{
    for(var i = 100; i >=0; i--)
    {
        if( i % 3 == 0)
        {
        console.log(i)
        }
    }
}

gimme3s()


// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

var arrayOfNums = [4, 2.5, 1, -0.5, -2, -3.5]
function printSequence()
{
    for(i=0; i < arrayOfNums.length; i++){
        console.log(arrayOfNums[i])
    }
}

printSequence()


// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

sum = 0
function sigma()
{
    for(i=1; i <=100; i++){
        sum = sum+=i
    }
    console.log(sum)
    
}

sigma()

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

product= 1
function factor()
{
    for(i=1; i <=12; i++){
        product = product*=i
    }
    console.log(product)
}

factor()









function Something(arr){
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            console.log("We got a big one!");
        } else {
            result+=arr[i]
        }
    }
    if(result < 10){
        console.log("You're killin' me, Smalls");
    } else {
        return "You're gonna need a bigger funcion!";
    }
}
Something([1,8,21,-11,12,2,9,15,7]);