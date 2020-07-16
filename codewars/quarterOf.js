// к какому кварталу принадлежит месяц.
// мы знаем что в году 4 квартала
// по 3 месяца.

/**
 * Example with Math.ceil
 * нужно поделить номер месяца
 * на 3(кол-во месяцев в квартале)
 * и округлить в большую сторону.
 */
const quarterOf = m => Math.ceil(m / 3);

/**
 * Example with if.
 */
const quarterOf2 = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else if (month <= 12) {
        return 4
    }
}

console.log(quarterOf(3))
console.log(quarterOf2(3))
