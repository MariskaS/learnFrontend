const arr = [1, 2, 3];

/**
 *
 * @param cb
 * @param cb, initValue
 * @returns {*}
 */
Array.prototype.myReduce = function (cb, initValue) {
    const arr = this;
    let result = initValue;

    for (let i = 0; i < arr.length; i++) {
        result = cb(result, arr[i], i, arr)
    }

    return result;
}

console.log(
    arr.myReduce((result, currVal) => result + currVal, 0)
)

console.log(
    arr.myReduce((result, currVal) => {
        result[currVal] = currVal;
        return result;
    }, {})
)




