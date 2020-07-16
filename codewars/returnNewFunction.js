// sum(2,3) == sum(2)(3) == 5

/**
 * EXAMPLE 1.
 */
function sum(a, b) {
    // учитываем что первый параметр "а" есть всегда.
    if (b) {
        return a + b;
    }

    // Если не передавали параметр "b", будем возвращать новую функцию.
    return function (c) {
        return c + a;
    }
}

console.log(sum(2, 3));
console.log(sum(2)(3));

/**
 * EXAMPLE 2.
 * ...args - неизвестное кол-во параметров складывает в 1 массив.
 */
function sum2(...args) {
    if (args.length === 2) {
        return args[0] + args[1]
    }

    return function (b) {
        return args[0] + b
    }
}
console.log(sum2(2, 3));
console.log(sum2(2)(3));
