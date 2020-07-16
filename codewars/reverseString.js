/**
 * Напишите функцию, которая принимает на вход строку и возвращает ее в перевернутом виде.
 * reverseString('Greetings from Earth') должен вернуть 'htraE morf sgniteerG'
 * не используя split('').reverse().join('')
 */

// перебрать строку и запушить в новую с конца
function reverseString(str) {
    let newStr = '';
    const strLen = str.length;
    // i = последнему символ строки
    // пока i >= 0 - чтобы дойти строго до начала строки
    for (let i = strLen - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }

    return newStr;

}

console.log(reverseString('Greetings from Earth'))
