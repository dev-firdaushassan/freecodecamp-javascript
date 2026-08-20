/* linear search O(n)
/*Array size   worst-case comparisons
--------------------------------------
5         5
10        10
100       100
1,000     1,000
10,000    10,000
1,000,000    1,000,000

* In the worst case, linear search may have to look at every element.
* So if the array contains n elements, maximum comparisons = n
*
* If the target is the first element, you only make 1 comparison.
* If it's the last element-or isn't present-you make n comparisons.
* So O(n) describes the growth/worst-case upper bound.
* Note that every searchalways takes exactly n comparisons.
*/

function linearSearch(arr, target) {
	let comparisons = 0;

	for (let i = 0; i < arr.length; i++) {
		comparisons++;

		console.log(`Comparison ${comparisons}: ${arr[i]} === ${target}`);

		if (arr[i] === target) {
			console.log(`Found ${target} at index ${i}`);
			console.log(`Total comparisons: ${comparisons}`);
			return i;
		}
	}

	console.log(`${target} was not found`);
	console.log(`Total comparisons: ${comparisons}`);

	return -1;
}

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const result = linearSearch(numbers, 70);

console.log("Result:", result);
