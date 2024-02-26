/* Sliding Window Example

Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
maxSubarraySum([4, 2, 1, 6], 1) // 6
maxSubarraySum([4, 2, 1, 6, 2], 4) // 13
maxSubarraySum([], 4) // null
*/
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let sumSubarray = 0;
        for (let j = 0; j < num; j++) {
            sumSubarray += arr[i + j];
        }

        if (sumSubarray > max) {
            max = sumSubarray;
        }
    }

    return max;
}

function maxSubarraySumRefactor(arr, num) {
    if (arr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySumRefactor([1, 2, 5, 2, 8, 1, 5], 2));

/* 
1- maxSum ==> 1+2 = 3 
2- tempSum ==> 3 
3- tempSum ==> 3 - 1 + 5 = 3
4- tempSum ==> 3 - 2 + 2 = 3
5- tempSum ==> 3 - 5 + 8 = 10
6- maxSum ==> 10
7- tempSum ==> 10 - 2 + 1 = 9
 */
