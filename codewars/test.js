function correctPolishLetters(s) {
    const sLen = s.length;
    const isStrIncludeA = s.includes('a');
    if (isStrIncludeA) {
        if(sLen%2) {
            const count = s.split('').filter(v => v === 'a').join('').length;
        }
    } else {

    }
    // return s.match(new RegExp('.{3,' + sLen + '}', 'g'));
    return s.split('').filter(v => v === 'a').join('').length;
    // if (sLen. )
}

//console.log(correctPolishLetters('Jędrzej Błądziński')) // Jedrzej Bladzinski
console.log(correctPolishLetters('babaa')) // Maria Sklodowska-Curie
console.log(correctPolishLetters('bbbbb')) // Maria Sklodowska-Curie

