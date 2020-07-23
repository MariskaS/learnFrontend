class Foo {
    name = 'test'
    bar(item, index, arr) {
        console.log(`item ${item} * 2 = `, item * 2);
        console.log('arr: ', arr);
        console.log('name: ', this.name);
        this.name = `test${item}`;
    }
}

const arr = [1, 2, 3, 4];

Array.prototype.myForEach = function (cb, thisArg) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
        cb.call(thisArg, arr[i], i, arr)
    }
}

const faz = new Foo()

arr.myForEach(faz.bar, faz);


// Без this:
Array.prototype.myForEach = function (cb) {
    let arr = this;

    for (let i = 0; i < arr.length; i++){
        cb(arr[i], i, arr)
    }

    return arr;
}

arr.myForEach((item, index, arr) => {
    console.log(`item ${item} * 2 = `, item * 2);
});



