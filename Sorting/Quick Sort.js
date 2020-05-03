function quickSort(array) {
  // Write your code here.
	if(array.length <=1) return array;
	let pivot = array.shift();
	let left = array.filter(el => el < pivot);
	let right = array.filter(el => el >= pivot);
	let sortedLeft = quickSort(left);
	let sortedRight = quickSort(right);
	return [...sortedLeft, pivot, ...sortedRight];
}

// Do not edit the line below.
exports.quickSort = quickSort;