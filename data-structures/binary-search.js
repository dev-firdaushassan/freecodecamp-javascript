/* binary search: instead of checking every element like linear search,
 * it keeps cutting the search area roughly in half.
 */

function binarySearch(arr, target) {
	let low = 0;
	let high = arr.length -1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);

		console.log(`low=${low}, high=${high}, mid=${mid}`);
		
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return -1;
}

const numbers = [10, 20, 30, 40, 50, 60, 70];

const result = binarySearch(numbers, 60);

console.log("Result:", result);
		
