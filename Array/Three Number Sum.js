function threeNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    let result = []
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while (left < right) {
            let cs = array[i] + array[left] + array[right]
            if (cs === targetSum) {
                result.push([array[i], array[left], array[right]])
                left++;
                right--;
            } else if (cs > targetSum) {
                right--
            } else if (cs < targetSum) {
                left++
            }
        }
    }
    return result
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
