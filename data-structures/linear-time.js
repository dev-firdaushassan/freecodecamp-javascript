// Work grows proportionally with input size - one pass through the data.

function findMax(arr) {
	let max = arr[0];
	for (const num of arr) {
		if (num > max) max = num;
	}
	return max;
}

console.log(findMax([3, 7, 2, 9, 4, 1]));
