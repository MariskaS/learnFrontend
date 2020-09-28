const arr = [ 1, 2, 0, 2, 2,3,5,9]


function nextId(ids) {
    const sortArr = ids.sort((a, b) => a - b);
    console.log('sortArr',sortArr)
    let i = 0;
    const sortArrLn = sortArr.length;

    for (;i < sortArrLn; i++) {
        let curr = sortArr[i];
        let next = sortArr[i + 1];

        if (next - curr > 1) return console.log('next', next)
        if (next === curr) {
            return
        }
    }

    return sortArr.length
}

console.log(nextId(arr))
