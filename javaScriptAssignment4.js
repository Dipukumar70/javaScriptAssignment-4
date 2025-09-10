// ================================== ASSIGNMENT-4 ==================================//
// Q1. Find the Product. 
// Write a program that takes an array as input from the user and find out the product of the elements. 
// Note: You have to complete Find_Prod. No need to take any input.

function Find_Prod(N){
    let product = 1;
    for(let i =0; i<N.length; i++){
        product = product * N[i];
    }
    console.log(product);
}
const N =[5,4,3,2,1];
Find_Prod(N);

// ---------------------------------------------------------------------------------
// Q2. Find the Sum. 
// Write a program which takes an array as input from the user and find out the sum of the array elements. 
// Note: You have to complete Find_Sum. No need to take any input.

function Find_Sum(n){
  let sum = 0;
n.forEach(num => sum += num);
console.log(sum); 
}
const n = [1,2,3,4,9,1,2,3,4,5];
Find_Sum(n);

// ---------------------------------------------------------------------------------
// Q3. Count Occurrences 
// You are given an array A containing N integer elements and an integer K, and your task is to return the count of 
// occurrences of K in array A. 
// Note: You have to complete findCount function. No need to take any input.

function findCount(A,K){
   let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === K) {
      count++;
    }
  }
  console.log(count);
}
const A = [1,2,3,4,1,1];
const K = 1;
findCount(A, K);

// ----------------------------------------------------------------------------------
// Q4. Even Odd 
// You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)), 
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A. 
// Note: You have to complete findEvenOdd function. No need to take any input.
// Sample Input 
// 7 1 2 3 4 5 6 7 
// Sample Output 
// 12 16 

function findEvenOdd(A){
  let countEven = 0;
  let countOdd = 0;
  let B = []
  for(let i=0; i<A.length; i++){
    if(A[i]%2==0){
      countEven = countEven+A[i];
    }else{
      countOdd = countOdd+A[i];
    }
  }
  B[0] = countEven;
  B[1] = countOdd;
  console.log(B);
}

const B = [1,2,3,4,5,6,7,8,9];
findEvenOdd(B);
// ----------------------------------------------------------------------------------------
// Q5. Find whether the number is present or not 
// Write a program which takes an array as input from the user and a number. Check whether the number is present or not. 
// Note: You have to complete Find_Num. No need to take any input.

function Find_Num(N, M){
  let count = 0;
  let n = N.length;
  for(let i = 0; i<n; i++){
    if(N[i] == M){
      count++
    }
  }
  if(count!=0){
    console.log(`Number is present ${M}`);
  }else{
    console.log(`Number is not present ${M}`);
  }
  
}
const N1 = [1,2,3,4,5];
const M1 = 1;
Find_Num(N1, M1);

// ----------------------------------------------------------------------------------------------
// Q6. Higher Age 
// You are given an array A containing the age of persons in your locality, and your task is to find and return an array 
// containing the age of persons that are over (18(18 included)). 
// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge 
// function. No need to take any input.

function highAge(age){
  let n = age.length;
  let j = 0;
  let arr = [];
  if(n>0){
    for(let i =0; i<n; i++){
      if(age[i] >= 18){
        arr[j] = age[i];
        j++;
      }
    }
    console.log(`Age 18+ ${arr}`);
  }else{
    console.log("enter the valid arr");
    
  }
}
const age =[1,2,30,40,5,6,18];
highAge(age);

// --------------------------------------------------------------------------------------------
// Q7. Increment the Array Elements 
// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array. 
// You have to complete Inc_Arr. No need to take any input. 

function Inc_Arr(arr){
  let n = arr.length;
  let arr1 = []
  if(n>0){
      for(let i=0; i<n; i++){
        arr1[i] = arr[i]+1;
      }
      console.log(`${arr} After increase 1 all Array element = ${arr1}`);
  }else{
    console.log("Enter the valid array");
  }
}
const arr = [1,2,3,4,5,6];
Inc_Arr(arr);

// ------------------------------------------------------------------------------------------------
// Q8. Pass or Fail 
// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the 
// students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 3232. 
// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes). 
// Note: You have to complete isAllPass function. No need to take any input.

function isAllPass(marks) {
  let n = marks.length;
  let count = 0;
  if(n>0){
    for(let i=0; i<n; i++){
      if(marks[i] >= 32){
        count++
      }
    }
    if(count==n){
      console.log("All student are pass");
    }else{
      console.log("All student are not pass");
    }

  }else{
    console.log("Enter valid array");
  }
}
const marks = [100,72,36,40,5];
isAllPass(marks);

// ------------------------------------------------------------------------------------------------------------
// Q9. Unique Color Shirt 
// The first line of the input contains an integer N denoting the number of shirts in the wardrobe. The second line of the input 
// contains N integers C1,C2,C3,C4,...,CN1,2,3,4,..., color of shirts (separated by space).
// There are two 2-color shirts, and two 3-color shirts. So, after removing 2-color and 3-color shirts, the remaining shirts are one 
// 4-color shirt and one 1-color shirt i.e, 4, 1. 
// Hence, the output will be 2.  

function Uniquecolorshirt(colors){
  const freq = {};
  for (const c of colors) {
    freq[c] = (freq[c] || 0) + 1;
  }
  let uniqueCount = 0;
  for (const count of Object.values(freq)) {
    if (count === 1) uniqueCount++;
  }

  console.log(uniqueCount);
}
const color = [1,1,1,1,1,2,3,1,4,5];
Uniquecolorshirt(color); // 4 => 2,3,4,5 -> unique

// -----------------------------------------------------------------------------------------------------------------
// Q10. Min and Max 
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to 
// iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the 
// minimum and maximum numbers among those elements.

function MinMax(num){
  let n = num.length;
  let min = num[0];
  let max = num[0];
  if(n>0){
      for(let i=0; i<n; i++){
        if(min>num[i]){
          min = num[i];
        }else if(max<num[i]){
          max = num[i]
        }
      }   
      console.log(`Min value ${min}`);
      console.log(`Max value ${max}`);
  }else{
    console.log("Enter valid Array")
  }
}
const num = [9,2,3,70,5,6,8]
MinMax(num);


// ================================== END ASSIGNMENT-4 ==================================//
