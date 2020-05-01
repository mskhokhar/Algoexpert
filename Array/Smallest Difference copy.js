function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	arrayOne.sort((a,b) => a-b);
	arrayTwo.sort((a,b) => a-b);
	let result = [];
	let difference = Infinity;
	let pointer1 = 0;
	let pointer2 = 0;
	while(pointer1 < arrayOne.length && pointer2 < arrayTwo.length){
		let currDiff = Infinity;
		let firstNum = arrayOne[pointer1];
		let secondNum = arrayTwo[pointer2];
		if(firstNum > secondNum){
			currDiff = firstNum - secondNum;
			pointer2++;
		}else if(firstNum < secondNum){
			currDiff = secondNum - firstNum;
			pointer1 ++;
		}else{
			return [firstNum, secondNum]
		}
		
		if(currDiff < difference){
			difference = currDiff
			result = [firstNum,secondNum]
		}
	}
	return result;
	
}