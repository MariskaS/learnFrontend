function checkExam(array1, array2) {
    // + 4 - correct
    // -1  - incorrect
    // + 0 - blanket
    let arr = []

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
            arr.push(4)
        } else if (array2[i] === '') {
            arr.push(0)
        } else {
            arr.push(-1)
        }
    }

    const sum = arr.reduce((a, b) => a + b);

    return sum > 0 ? sum : 0
}
// Вариант с reduce
// const checkExam = (array1, array2) => {
//     let result = array2.reduce(
//         (score, answer, i) => {
//             if(answer == array1[i]) return score += 4;
//             else if(answer == 0) return score += 0;
//             else return score - 1;
//         }
//         , 0);
//     return result < 0 ? 0 : result;
// }

//console.log(checkExam(["a", "a", "b", "b"], ["", "c", "b", "d"]));
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']));
