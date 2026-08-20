/*
 * We started with: [10, 20, 30, 40, 50, 60, 70]
 * The first mid is index 3: [10, 20, 30, 40, 50, 60, 70]
 * We ask: 40 === 60?
 * Since: 40 < 60 , we immediately throw away the entire left half
 *
 * [50, 60, 70], we find it.
 */

function binarySearch(arr, target) {
	let low = 0;
	let high = arr.length - 1;
	let comparisons = 0;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		
		comparisons++;

		console.log(
			`comparison ${comparisons}: arr[${mid}] = ${arr[mid]} === ${target}`
		);
		
		if (arr[mid] === target) {
			console.log(`Found ${target} at index ${mid}`);
			console.log(`Total comparisons: ${comparisons}`);
			
			return mid;
		}  else if (arr[mid] < target) {
			console.log(`${arr[mid]} < ${target} -> search right half`);

			low = mid + 1;
		}    else {
			console.log(`${arr[mid]} > ${target} -> search left half`);

			high = mid - 1;
		}
	}

	console.log(`${target} was not found`);
	console.log(`Total comparisons: ${comparisons}`);

	return -1;
}

const numbers = [10, 20, 30, 40, 50, 60, 70];

const result = binarySearch(numbers, 60);

// const result = binarySearch(numbers, 100);

console.log("Result:", result);

/* Let's compare it with your Linear search
 * Array:   [10, 20, 30, 40, 50, 60, 70]
 
 Target: 60

 Comparison 1 -> 10
 Comparison 2 -> 20
 Comparison 3 -> 30
 Comparison 4 -> 40
 Comparison 5 -> 50
 Comparison 6 -> 60

 *6 comparisons.

 *Binary search:
 Array:    [10, 20, 30, 40, 50, 60, 70]

 Comparison 1 -> 40
                 
		 discard left half

Comparison 2 -> 60

* 2 comparisons. That's the power of binary search.
*/







