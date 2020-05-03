function bubbleSort(array) {
	// Write your code here.
	let sorted = false;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				sorted = false;
				break;
			}
		}
	}
	return array;
}