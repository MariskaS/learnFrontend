# Рекурсия
1. [Определение](#Определение)
1. [Пример_1](#Пример_1)
1. [Пример_2](#Пример_2)
1. [Полезные_ссылки_и_спасибо_за_предоставленные_материалы](#Полезные_ссылки_и_спасибо_за_предоставленные_материалы)

# Определение 
это вызов функции самой себя, как правило, с другими аргументами.

# Пример_1
```Javascript
Math.pow(2,3); //8

// pow(x, n) = x * pow(x, n - 1);
// pow(2, 3) = 2 * pow(2, 2)

function pow(x, n) {
  return n !== 1 ? x * pow(x, n - 1) : x;
}
```  
Любая рекурсия может быть переделана в цикл. Как правило, вариант с циклом будет эффективнее.  

# Пример_2
```Javascript
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
```

Когда рекурсия лучше вместо цикла?


## Полезные_ссылки_и_спасибо_за_предоставленные_материалы:
- [Фибоначчи](../fibonacci.md)
- [rolling-scopes-school lectures](https://github.com/rolling-scopes-school/lectures/blob/master/lectures/basic-algorithms.md)