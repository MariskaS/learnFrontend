/**
 * Title: returns the smallest positive integer.
 * Description:
 * Write a function: function solution(A);
 * that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
 *
 * For example:
 * Given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 * Given A = [1, 2, 3], the function should return 4.
 * Given A = [−1, −3], the function should return 1.
 * Write an efficient algorithm for the following assumptions:
 * N is an integer within the range [1..100,000];
 * each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

// Example - while.
// function solution(a) {
//     // Return an arr of positive numbers without duplicates and sort -> a-b.
//     const arr = [...new Set(a)].sort((a, b) => a - b).filter((v) => v > 0);
//     let res = 0;
//     let res2 = 0;
//     console.log('arr', arr)
//
//     if(!arr.length || arr[0] > 1) {
//         return 1;
//     }
//
//     let i = 1
//     let curr = arr[i];
//     let prev = arr[i - 1];
//
//     while(curr - prev <= 1 && i < arr.length) {
//         i++;
//         curr = arr[i];
//         prev = arr[i - 1];
//     }
//
//     if(i === arr.length) {
//         return arr[arr.length - 1] + 1;
//     } else {
//         return prev + 1;
//     }
// }

// Example - find().
function solution(a) {
    // Return an arr of positive numbers without duplicates and sort -> a-b.
    const arr = [...new Set(a.filter((v) => v > 0))].sort((a, b) => a - b);
    const ln = arr.length;

    // if !positive: ln === [] -> 1 (P.S. [-1, -2] -> 1)
    // arr[0] > 1: наименьшее целое число
    if(!ln || arr[0] > 1) {
        return 1;
    }

    // Ищем элемент, который находится между 2 чисел, сравнение которых вернет разницу больше чем на 1
    // т.е.
    // если между всеми числами в массиве разница === 1, дойдем до последнего
    // если мы дошли до последнего элемента в массиве(p) -> этот элемент + 1
    // если не дошли: тот элемент, который -> nex - текущий > 1
    const item = arr.find((v, i, arrItems) => {
        const lastIndex = ln-1;
        // проверяем что текущий Index последний в нашем массиве.
        if(i === lastIndex) {
            // выходим и возвращаем item + 1 -> где item - значение по последнему индексу в нашем массиве.
            return true;
        } else {
            const next = arrItems[i+1];
            // если index не последний
            // вернуть элемент удовлетворяющий условию -> (значение по следующему индексу - текущее значение) > 1.
            // return arrItems[i+1] - v > 1;
            return arrItems[i+1] - v > 1
        }
    });

    return item + 1;
}

console.log(solution([1, 2, 3])) // 4
// console.log(solution([-1, -2])) // 1
// console.log(solution([1, 3, 6, 4, 1, 2])) // 5