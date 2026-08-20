// The work shrinks by a fraction (usually half) each step, so it barely grows even as n gets huge.
 
 function binarySearch(sortedArr, target) {
 let low = 0;
 let high = sortedArr.length -1;

 while (low <= high) {
 const mid = Math.floor((low + high) / 2);
 if (sortedArr[mid] === target) return mid;
 if (sortedArr[mid] < target) low = mid + 1;
 else high = mid -1;
 }
 return -1;
 }

 console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 45], 23));
