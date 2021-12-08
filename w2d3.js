// Return the second largest element of any numerical array
// Given [42, 1, 4 , Math.PI, 7] return 7
// If the array is too short (ie one value or less), return null

function secondLargest(arr) {
    var largest = arr[0]
    var secondLargest = arr[0]
    if (arr.length <= 1) {
        return null;
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if(largest == secondLargest || arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }
    console.log(secondLargest)
    return secondLargest;
};
secondLargest([42,1,4,Math.PI, 7,8])

console.log(secondLargest([42,1,4, 7])); // 7
console.log(secondLargest([5,1,2,3,4,6])); // 5
console.log(secondLargest([14])); // null
console.log(secondLargest([4,8,15,16,23,42])); // 23


function sortingNthLarget(arr, n){
    arr = arr.sort((a, b) => a - b);

    console.log(arr);

    if(arr.length <= n-1){
        return null;
    }else{
        return arr[arr.length-n];
    }
}

console.log(sortingNthLarget([42,1,4, 7], 3));