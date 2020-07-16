/**
 * Dан массив с произвольными числами. Необходимо найти все уникальные тройки чисел
 * из этого массива, которые в сумме между собой будут равны 0.
 */
const sumOfThree = (arr, target = 0) => {
    // проверить что массив содержит не меньше 3х элементов
    // понадобится несколько указателей и чтобы эффективно с ними работать и двигаться по массиву,
    // массив нужно отсортировать.
    const result = []

    if (arr.length < 3) {
        return result;
    }

    let newArr = arr.sort((a, b) => a - b);

    // TODO: проверка что сумма первых трех чисел > target => -1

    // Нам нужно три числа сумма которых дает target -
    // поэтому расставим 3 точки,---(i)--(i+1)--(arr.length-1),
    // сближать указатели j и k
    // newArr.length - 2 - из за того что у нас будет еще 2 указателя которые не нужно включать в оставшуюся длину
    for (let i = 0; i < newArr.length - 2; i++) {

        // если текущий элемент больше target, то сумма чисел выше(правее) нашего текущего числа уже не даст-
        // искомое число target. Для такого подхода нужно что бы массив был отсортирован(от меньшего к большему).
        // это что бы лишний раз не бегать по массиву.
        if (newArr[i] > target) {
            break;
        }

        // if our iterator is the same as the previous value
        // skip it to prevent duplicate results
        if (i > 0 && newArr[i] === newArr[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = newArr.length - 1;

        // будем сближать указатели j и k чтобы найти наш target.
        while (j < k) {
            let sum = newArr[i] + newArr[j] + newArr[k];
            if (sum === target) {
                result.push([newArr[i], newArr[j], newArr[k]]);

                // TODO: переделать skip duplicate values of j and k // до циклов переписать на Sort
                while (newArr[j] === newArr[j + 1]) j++;
                while (newArr[k] === newArr[k - 1]) k--;

                // move j and k inward
                j++;
                k--;
                continue;
            }
            if (sum < target) {
                j++;
                continue;
            }
            if (sum > target) {
                k--;
                continue;
            }
        }
    }
    return result;
}

console.log(sumOfThree([-1, 0, 1, 2, -1, -4]));

// https://www.youtube.com/watch?v=uDd4-itcA2s&t=603s
