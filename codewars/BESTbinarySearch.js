const arr = [10, 25, 34, 77, 94];

/**
 *
 * @param arr
 * @param el
 * @returns {number}
 */
function binSearch(arr, el) {
  /**
   * 1. Define the boundaries of the array;
   *
   * 2. Find the middle of the array and compare with
   * the desired element;
   *
   * 3. if (mid > el) -> go to the left || if (mid < el)-> go to
   * the right;
   */

  // Define the boundaries of the array.
  let left = 0;
  let right = arr.length - 1;

  /**
   * If the first or last elements of the array
   * are equal to the element - return the index and exit the
   * function without going into the 'while' loop.
   *
   * This method improves performance on arrays
   * with millions of values.
   * /
   if(arr[left] === el) return left;
   if(arr[right] === el) return right;

   /**
   * We enter the loop only if there is more than 1 value
   * between the right and left borders.
   */
  while (right - left > 1) {
      // Find the middle - average.
      let mid = Math.floor((right + left) / 2);

      if (arr[mid] === el) {
          return mid
      }

      if (arr[mid] > el) {
          /**
           * Cut off the right side of the array
           * and the right border becomes the middle.
           */
          right = mid
      }

      if (arr[mid] < el) {
          /**
           * Cut off the left side of the array
           * and the left border becomes the middle.
           */
          left = mid
      }
  }

  return -1

}


console.log(binSearch(arr, 77)) // => 3 - index of 77
