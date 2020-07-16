let memo = [];
// для оптимизации запоминаем в глобальный массив -
// результаты предыдущих вызовов вместо того, чтобы вычислять их заново.

const fib = n => {
    if (memo[n]) return memo[n];
    // TODO: WTF console.log('fesrf', memo[n])

    let current = 0;
    let next = 1;

    for (let i = 0; i < n; i++) {
        memo[i] = current;
        // console.log(`memo[i] ${i}: `, current);
        // step 0: memo[i] => 0;
        // step 1: memo[i] => 1;
        // step 2: memo[i] => 1;
        // step 3: memo[i] => 2;
        // step 4: memo[i] => 3;
        // step 2: memo[i] => 5;

        // console.log(`memo step ${i}: `, memo);
        // step 0: memo => [0];
        // step 1: memo => [0, 1];
        // step 2: memo => [0, 1, 1];
        // step 3: memo => [0, 1, 1, 2];
        // step 4: memo => [0, 1, 1, 2, 3];
        // step 5: memo => [0, 1, 1, 2, 3, 5];

        [current, next] = [next, current + next] // swap
        // console.log(`swap step ${i}: `, [current, next]);
        // step 0: swap => [ 1, 1 ];
        // step 1: swap => [ 1, 2 ];
        // step 2: swap => [ 2, 3 ];
        // step 3: swap => [ 3, 5 ];
        // step 4: swap => [ 5, 8 ];
        // step 5: swap => [ 8, 13 ];
    }

    return current;
}

console.log(fib(0)); // 34
// console.log(fib(8)); // 21
console.log('global memo', memo); // [0, 1,  1,  2, 3, 5, 8, 13, 21]
