/**
 * Title: Polish alphabet.
 * Description:
 * There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.
 * Your task is to change the letters with diacritics:
 * ą -> a,
 * ć -> c,
 * ę -> e,
 * ł -> l,
 * ń -> n,
 * ó -> o,
 * ś -> s,
 * ź -> z,
 * ż -> z
 * @param string
 */
// Example - Object.keys.
function correctPolishLetters(string) {
    const str = string.split('')
    const alphabet = {
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        'ó': 'o',
        'ś': 's',
        'ź': 'z',
        'ż': 'z'
    };

    const res = [];
    const alphabetKeys = Object.keys(alphabet);
    let i = 0;
    const strLn = str.length;

    for ( ; i < strLn; i++) {
       const alphabetKeyIndex = alphabetKeys.indexOf(str[i]);

       if (alphabetKeyIndex !==-1) {
           const alphabetKey = alphabetKeys[alphabetKeyIndex];
           const alphabetValue = alphabet[alphabetKey];
           res.push(alphabetValue);
       } else {
           res.push(str[i])
       }
    }

    return res.join('');

}
//console.log(correctPolishLetters('Jędrzej Błądziński')) // Jedrzej Bladzinski
console.log(correctPolishLetters('Maria Skłodowska-Curie')) // Maria Sklodowska-Curie