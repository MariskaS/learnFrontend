const arr = [1, 2, 3, 4];

/**
 *
 * @param cb
 * @returns {Array} arr of items if(cb(arr[i]) === true).
 */
Array.prototype.myFilter = function (cb) {
    const arr = this;
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (cb(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(
    arr.myFilter((currItem, idx, arr) => currItem > 2)
)


