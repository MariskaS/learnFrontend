/**
 * Реализуйте bind2 - полный аналог функции bind в js.
 * Пример:
 * const sum = (х, y) => x + y;
 * const plusTen = sum.bind2(undefined, 10);
 * plusTen(1); // 11
 * plusTen(10); // 20
 */

/**
 * Рассмотрим как работает метод .bind
 * От нас хотят знание прототипов.
 * У каждого obj есть свой прототип иу прототипа функции есть методы .call/.bind/.apply
 * эти методы привязывают определенный контекст к вызову функции и передают определенные параметры
 * @type {{logName(*=): void, firsName: string}}
 */
const person = {
    firsName: 'Max',
    logName(number) {
        console.log('Name:', this.firsName, number)
    }
}

person.logName(100)

/**
 * хотим вызвать метод .logName для другого obj:
 */
const person2 = {
    firsName: 'Max2'
}
person.logName.bind(person2, 200)()
// при использовании .bind -> this превратился в person2.


const sum = (x, y) => x + y;

// Function - глобальный obj. Является родительским классом для любых функций в js.
Function.prototype.bind2 = function(context, ...args) {
    // this -> будет являться той функцией, у которой будем вызывать данный метод
    return (...args2) => {
        // apply как и bind, передает новый контекст, но вторым параметром принимает
        // массив аргументов, который можно привязать к новой функции.
        // apply не возвращает новую функцию а сразу ее вызывает.
       return this.apply(context, args.concat(args2))
    }
}

const plusTen = sum.bind2(undefined, 10);
console.log(plusTen(1)); // 11
console.log(plusTen(10)); // 20
