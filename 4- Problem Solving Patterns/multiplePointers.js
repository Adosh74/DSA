/* Multiple Pointers Example

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
*/

function sumZero(arr) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    while (rightPointer > leftPointer) {
        let sum = arr[leftPointer] + arr[rightPointer];

        if (sum === 0) {
            return [arr[leftPointer], arr[rightPointer]];
        } else if (sum > 0) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
