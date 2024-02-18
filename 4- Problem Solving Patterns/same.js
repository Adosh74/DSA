/**
 *
 * @param {array of integer} arr1
 * @param {array of integer} arr2
 */
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let objectOne = {};
    let objectTwo = {};

    for (let el of arr1) {
        objectOne[el] = (objectOne[el] || 0) + 1;
    }

    for (let el of arr2) {
        objectTwo[el] = (objectTwo[el] || 0) + 1;
    }

    for (const key in objectOne) {
        if (!(key ** 2 in objectTwo)) {
            return false;
        }

        if (objectOne[key ** 2] !== objectTwo[key]) {
            return false;
        }
    }
    return true;
}

console.log(same([1, 2, 3, 3, 5], [9, 1, 4, 9, 25]));
