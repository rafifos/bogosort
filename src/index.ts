function shuffle(array: number[]) {
  for (
    let j: number, x: number, i: number = array.length;
    i;
    j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x
  );

  return array;
}

function isSorted(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }

  return true;
}

/**
 * Sorts an array using the Bogosort algorithm.
 *
 * @param array Array to sort
 * @returns Sorted array
 */
function sort(array: number[]) {
  let sorted = false;

  while (sorted == false) {
    array = shuffle(array);
    sorted = isSorted(array);
  }

  return array;
}

export default sort;
