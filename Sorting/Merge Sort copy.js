function mergeSort(array) {
	// Write your code here.
	if (array.length <= 1) return array;
	let mid = Math.floor(array.length / 2);
	let left = array.slice(0, mid);
	let right = array.slice(mid);
	let sortedLeft = mergeSort(left);
	let sortedRight = mergeSort(right);

	return merge(sortedLeft, sortedRight);
}
function merge(arrayOne, arrayTwo) {
	let result = [];
	while (arrayOne.length && arrayTwo.length) {
		if (arrayOne[0] < arrayTwo[0]) {
			result.push(arrayOne.shift());
		} else {
			result.push(arrayTwo.shift());
		}
	}
	return [...result, ...arrayOne, ...arrayTwo];
}

// Do not edit the line below.
exports.mergeSort = mergeSort;