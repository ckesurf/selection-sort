function selectionSort(arr) {
  // using two arrays
  return selectionSortTwoArrays(arr);
  // return selectionSortInPlace(arr);
}

function selectionSortTwoArrays(arr) {
  // make a empty new array that will hold sorted values
  const sortedArray = [];
  // while arr is not empty
  while (arr.length != 0) {
    //  look for the minimum
    const minElement = findMinimumElement(arr);

    //  push that min to the new array
    sortedArray.push(minElement);

    //  remove that element from arr
    // find the index of the minElement in arr
    // .indexOf
    const indexOfMinElement = arr.indexOf(minElement);
    // array.splice(index, howmany -> 1)
    arr.splice(indexOfMinElement, 1);
  }
  // return new array
  return sortedArray;
}

function selectionSortInPlace(arr) {
  // for each index of arr
  for (let i = 0; i < arr.length; i++) {
    //  find which element is the minimum?
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      // minimum tournament!!
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // bring it to the front
    // unshift (append to the front)

    // extract it
    let minValue = arr[minIndex]; // e.g. -2
    // remove it from the array
    arr.splice(minIndex, 1);

    // insert it
    arr.splice(i, 0, minValue);
  }
  return arr;
}

function findMinimumElement(arr) {
  // min is 0th element for now
  let min = arr[0];
  // for each element
  for (let i = 0; i < arr.length; i++) {
    // if element is smaller than min, that's the new min
    if (arr[i] < min) {
      min = arr[i];
    } else {
      // do nothing. min continues to be the min champion
    }
  }
  return min;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Input: [3, -1, 5, 2], Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
