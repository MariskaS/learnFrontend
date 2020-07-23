// сделать собственную реализацию map, filter, find, forEach,
// reduce и поместить в наследник класса Array (написать функцию inherit). Использовать es3.
// console.log(arr.map((item) => item < 3))
// - создать класс MyArr , который будет наследником класса Array
// - inherit - это глобальная

// function inherit(child, parent) {
//     // MyArr должен стать наследником класса Array и получить доступ ко всем его свойства и методам.
//     // поведение MyArray должно быть таким же как Array.
//     const Empty = function(){}; // создаем пустую функцию-конструтор
//     Empty.prototype = parent.prototype;
//     child.prototype = new Empty();
//     child.prototype.constructor = child;
//     child.super = parent
// }
//
// let MyArray = function (...args) {
//     MyArray.super(...args)
// }
// inherit(MyArray, Array)
//
// let a = new MyArray(3);
const arr = [1, 2, 3, 4];

Array.prototype.myMap = function (cb) {
    const arr = this;
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i], i, arr))
    }

    return newArr;
}

console.log(
    arr.myMap((currItem, idx, arr) => currItem + 1)
)


