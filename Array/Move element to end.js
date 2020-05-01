function moveElementToEnd(array, toMove) {
  // Write your code here.
	let left = 0;
	let right = array.length-1;
	while(array[right] === toMove){
		right--;
	}
	while(left < right){
		if(array[left] === toMove){
			[array[left], array[right]] = [array[right], array[left]];
			right--;
			while(array[right] === toMove){
				right--;
			}
		}
		left++;
	}
	return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;