function twoNumberSum(array, targetSum) {
    // Write your code here.
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         if ((array[i] + array[j]) === targetSum) return [array[i], array[j]];
    //     }
    // }
    // return []
    let visitedNum = {};
    for (let i = 0; i < array.length; i++) {
        let difference = targetSum - array[i];
        if (visitedNum[difference]) {
            return [array[i], difference];
        } else {
            visitedNum[array[i]] = true;
        }
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;