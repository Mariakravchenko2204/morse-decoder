const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let result = '';


    let morseString = [];
    expr.split('**********').map(letter => {

        let arr = [];
        for (let i = 0; i < letter.length; i = i + 10) {
            arr.push(letter.slice(i, i + 10))
        }
        let morseWord = [];
        arr.forEach(element => {

            let morse = '';
            for (let i = 0; i < element.length; i = i + 2) {

                let symbol = parseInt(element.slice(i, i + 2))

                if (symbol === 10) {
                    morse += '.'
                } else if (symbol === 11) {
                    morse += "-"
                }
            }


            morseWord.push(morse);


        });

        morseString.push(morseWord);

    })


    morseString.map(str => {
        let word = '';
        str.map(letter => {
            word += MORSE_TABLE[letter];
        })

        result += (word + ' ');

    }

    )
    return result.trim()

    // write your solution here
}

module.exports = {
    decode
}