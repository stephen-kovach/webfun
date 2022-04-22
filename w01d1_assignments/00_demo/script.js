




for(i=1; i<=100; i++){
    if(i % 3 ==0 && i % 5 ==0){
        console.log("fizzbuzz")
    }
    else if(i % 3 == 0){
        console.log("fizz")
    }
    else if(i % 5 ==0){
        console.log("buzz")
    }
    else{
    console.log(i)
    }    
}












// // 1. Print 1-255
// // Print1To255()
// // // Print all the integers from 1 to 255.

// // --solution--

// function Print1to255(){
//     for(i = 1; i <=255; i++)
//         console.log(i)
// }
// Print1to255()



// // 2. Print Odds 1-255
// // PrintOdds1To255()
// // Print all odd integers from 1 to 255.

// // --solution--

// function PrintOdds1to255(){
//     for(i = 1; i <=255; i += 2)
//         console.log(i)
// }
// PrintOdds1to255()

// // I know modulus is a better way to solve this problem, I'll come back to this if I have time

// function PrintOdds1to255(){
//     for(i = 1; i <=255; i++){
//             if (i % 2 != 0){
//             console.log(i)
//             }
//         }
// }
// PrintOdds1to255()


// // // 3. Print Ints and Sum 0-255
// // // PrintIntsAndSum0To255()
// // Print integers from 0 to 255, and with each integer
// // print the sum so far.


// // --solution--

// function PrintIntsandSum0to255()
// {
//     var sum = 0
//     for(i = 0; i <=255; i ++)
//     {    
//         sum = sum + i    
//         console.log("i is equal to " + i)
//         console.log("sum is equal to " + sum)        
//     }    
// }
// PrintIntsandSum0to255()


// // 4. Iterate and Print Array
// // Iterate through a given array, printing each value.
// // PrintArrayVals(arr)

// // --solution--

// var numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function PrintArrayVals(arr){

//     for(var i =0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
// // }

// // PrintArrayVals(numArr1)


// // 5. Find and Print Max
// // PrintMaxOfArray(arr)
// // Given an array, find and print its largest element.


// // --solution--

// var numArr1 = [1, 2, 3, 4, 100, 5, 6, 7, 8, 9]

// function PrintMaxOfArray(arr)
// {
//     num = 0
//     for(i = 0; i < arr.length; i++)
//     {
        
//         if (arr[i] > num)
//         {
//             num = arr[i]
//         }    
//     }
//     console.log(num)
// }

// // PrintMaxOfArray(numArr1)


// // 6. Get and Print Average
// // PrintAverageOfArray(arr)
// // Analyze an array’s values and print the average.

// var numArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function PrintAverageOfArray(arr)
// {
//     sum = 0
//     for(i=0; i < arr.length; i++)
//     {
//         sum = sum + arr[i]
//     }
//     console.log(sum/arr.length)
// }
    
// // PrintAverageOfArray(numArr1)

// // 7. Array with Odds
// // ReturnOddsArray1To255()
// // Create an array with all the odd integers between 1
// // and 255 (inclusive).


// function ReturnOddsArray1To255() 
// {
//     var arr = []
//     for (var i = 1; i <= 255; i++) 
//     {
//         if (i % 2 !== 0) 
//         {
//             arr.push(i);
//         }
//     }
//     return arr
// }
// var arr = ReturnOddsArray1To255()
// console.log(arr)



