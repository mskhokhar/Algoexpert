function isMonotonic(array) {
  // Write your code here.
	if(array.length < 2) return true;
	let lastEle = array[array.length-1];
	let firstEle = array[0];
	let increasing = (firstEle < lastEle) ? true : false;
	for(let i = 0; i < array.length-1; i++){
		let currEle = array[i];
		let nextEle = array[i+1];
		if(increasing && (currEle > nextEle)) return false;
		else if( !increasing && (currEle < nextEle)) return false;
	}
	return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;