const arr = [1, 2, 3, 4];

Array.prototype.myFind = function(cb) {
    const arr = this;
    let result = undefined;

    for(let i = 0; i < arr.length; i++) {
        // если arr[i] > 2
        if(cb(arr[i])) {
            result = arr[i];
            break;
        }
    }

    return result;
}

console.log(
    arr.myFind((currItem, idx, arr) => currItem > 2)
)
