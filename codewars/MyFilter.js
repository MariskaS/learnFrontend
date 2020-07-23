const arr = [1, 2, 3, 4];

Array.prototype.myFilter = function (cb) {
    const arr = this;
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        // если cb(arr[i]) === true => вернуть найденный элемент.
        if (cb(arr[i])) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(
    arr.myFilter((currItem, idx, arr) => currItem > 2)
)
// console.log(
//     arr.filter((currItem, idx, arr) => currItem > 2)
// )




