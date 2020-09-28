const arr = [1, 2, 3, 4];

/**
 * myMap - own implementation .map.
 * @param cb - callback(currItem, idx, arr).
 * @returns {Array}
 */
Array.prototype.myMap = function (cb) {
    const arr = this;
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i], i, arr))
    }

    return newArr;
}

console.log(
    arr.myMap((currItem, idx, arr) => currItem + 1)
)



