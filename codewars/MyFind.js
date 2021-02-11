const arr = [1, 2, 3, 4];

/**
 * myFind - own implementation of .map.
 * @param cb {function} - callback(currItem, idx, arr).
 * @returns {*} founded item.
 */
Array.prototype.myFind = function(cb) {
    const arr = this;

    for(let i = 0; i < arr.length; i++) {
        // если arr[i] > 2
        if(cb(arr[i])) {
            return arr[i];
        }
    }
}
// while
console.log(
    arr.myFind((currItem, idx, arr) => currItem > 2)
)
