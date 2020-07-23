const arr = [1, 2, 3];


Array.prototype.myReduce = function (cb, initValue) {
    const arr = this;
    let result = initValue;

    for (let i = 0; i < arr.length; i++) {
        if(cb(result, arr[i])) {
            result += arr[i]
        }
    }


    return result;
}

console.log(
    arr.myReduce((result, currVal) => result + currVal, 0)
)
// console.log(
//     arr.filter((currItem, idx, arr) => currItem > 2)
// )




