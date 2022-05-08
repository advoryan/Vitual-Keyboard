const keysMap = [
    [ // row 1
        {
            key: { ru: 'ё', en: '`' },
            shift: { ru: 'Ё', en: '~' },
            name: 'Backquote',
            class: 'key tilda Backquote',
        },
        {
            key: { ru: '1', en: '1' },
            shift: { ru: '!', en: '!' },
            name: 'Digit1',
            class: 'key Digit1',
        },
        {
            key: { ru: '2', en: '2' },
            shift: { ru: '"', en: '@' },
            name: 'Digit2',
            class: 'key Digit2',
        },
        {
            key: { ru: '3', en: '3' },
            shift: { ru: '№', en: '#' },
            name: 'Digit3',
            class: 'key Digit3',
        },
        {
            key: { ru: '4', en: '4' },
            shift: { ru: ';', en: '$' },
            name: 'Digit4',
            class: 'key Digit4',
        },
        {
            key: { ru: '5', en: '5' },
            shift: { ru: '%', en: '%' },
            name: 'Digit5',
            class: 'key Digit5',
        },
        {
            key: { ru: '6', en: '6' },
            shift: { ru: ':', en: '^' },
            name: 'Digit6',
            class: 'key Digit6',
        },
        {
            key: { ru: '7', en: '7' },
            shift: { ru: '?', en: '&' },
            name: 'Digit7',
            class: 'key Digit7',
        },
        {
            key: { ru: '8', en: '8' },
            shift: { ru: '*', en: '*' },
            name: 'Digit8',
            class: 'key Digit8',
        },
        {
            key: { ru: '9', en: '9' },
            shift: { ru: '(', en: '(' },
            name: 'Digit9',
            class: 'key Digit9',
        },
        {
            key: { ru: '0', en: '0' },
            shift: { ru: ')', en: ')' },
            name: 'Digit0',
            class: 'key Digit0',
        },
        {
            key: { ru: '-', en: '-' },
            shift: { ru: '_', en: '_' },
            name: 'Minus',
            class: 'key Minus',
        },
        {
            key: { ru: '=', en: '=' },
            shift: { ru: '+', en: '+' },
            name: 'Equal',
            class: 'key Equal',
        },
        {
            key: { ru: 'Backspace', en: 'Backspace' },
            name: 'Backspace',
            class: 'key key_backspace Backspace',
            noType: true,
        },
    ],
    [ // row 2
        {
            key: { ru: 'Tab', en: 'Tab' },
            name: 'Tab',
            class: 'key key_tab Tab',
            noType: true,
        },
        {
            key: { ru: 'й', en: 'q' },
            shift: { ru: 'Й', en: 'Q' },
            name: 'KeyQ',
            class: 'key KeyQ',
        },
        {
            key: { ru: 'ц', en: 'w' },
            shift: { ru: 'Ц', en: 'W' },
            name: 'KeyW',
            class: 'key KeyW',
        },
        {
            key: { ru: 'у', en: 'e' },
            shift: { ru: 'У', en: 'E' },
            name: 'KeyE',
            class: 'key KeyE',
        },
        {
            key: { ru: 'к', en: 'r' },
            shift: { ru: 'К', en: 'R' },
            name: 'KeyR',
            class: 'key KeyR',
        },
        {
            key: { ru: 'е', en: 't' },
            shift: { ru: 'Е', en: 'T' },
            name: 'KeyT',
            class: 'key KeyT',
        },
        {
            key: { ru: 'н', en: 'y' },
            shift: { ru: 'Н', en: 'Y' },
            name: 'KeyY',
            class: 'key KeyY',
        },
        {
            key: { ru: 'г', en: 'u' },
            shift: { ru: 'Г', en: 'U' },
            name: 'KeyU',
            class: 'key KeyU',
        },
        {
            key: { ru: 'ш', en: 'i' },
            shift: { ru: 'Ш', en: 'I' },
            name: 'KeyI',
            class: 'key KeyI',
        },
        {
            key: { ru: 'щ', en: 'o' },
            shift: { ru: 'Щ', en: 'O' },
            name: 'KeyO',
            class: 'key KeyO',
        },
        {
            key: { ru: 'з', en: 'p' },
            shift: { ru: 'З', en: 'P' },
            name: 'KeyP',
            class: 'key KeyP',
        },
        {
            key: { ru: 'х', en: '[' },
            shift: { ru: 'Х', en: '{' },
            name: 'BracketLeft',
            class: 'key BracketLeft',
        },
        {
            key: { ru: 'ъ', en: ']' },
            shift: { ru: 'Ъ', en: '}' },
            name: 'BracketRight',
            class: 'key BracketRight',
        },
        {
            key: { ru: '\\', en: '\\' },
            shift: { ru: '|', en: '|' },
            name: 'Backslash',
            class: 'key key_backslash Backslash',
        },
        {
            key: { ru: 'Del', en: 'Del' },
            name: 'Delete',
            class: 'key key_del Delete',
            noType: true,
        },
    ],
    [ // row 3
        {
            key: { ru: 'Caps Lock', en: 'Caps Lock' },
            name: 'CapsLock',
            class: 'key CapsLock',
            noType: true,
        },
        {
            key: { ru: 'ф', en: 'a' },
            shift: { ru: 'Ф', en: 'A' },
            name: 'KeyA',
            class: 'key KeyA',
        },
        {
            key: { ru: 'ы', en: 's' },
            shift: { ru: 'Ы', en: 'S' },
            name: 'KeyS',
            class: 'key KeyS',
        },
        {
            key: { ru: 'в', en: 'd' },
            shift: { ru: 'В', en: 'D' },
            name: 'KeyD',
            class: 'key KeyD',
        },
        {
            key: { ru: 'а', en: 'f' },
            shift: { ru: 'А', en: 'F' },
            name: 'KeyF',
            class: 'key KeyF',
        },
        {
            key: { ru: 'п', en: 'g' },
            shift: { ru: 'П', en: 'G' },
            name: 'KeyG',
            class: 'key KeyG',
        },
        {
            key: { ru: 'р', en: 'h' },
            shift: { ru: 'Р', en: 'H' },
            name: 'KeyH',
            class: 'key KeyH',
        },
        {
            key: { ru: 'о', en: 'j' },
            shift: { ru: 'О', en: 'J' },
            name: 'KeyJ',
            class: 'key KeyJ',
        },
        {
            key: { ru: 'л', en: 'k' },
            shift: { ru: 'Л', en: 'K' },
            name: 'KeyK',
            class: 'key KeyK',
        },
        {
            key: { ru: 'д', en: 'l' },
            shift: { ru: 'Д', en: 'L' },
            name: 'KeyL',
            class: 'key KeyL',
        },
        {
            key: { ru: 'ж', en: ';' },
            shift: { ru: 'Ж', en: ':' },
            name: 'Semicolon',
            class: 'key Semicolon',
        },
        {
            key: { ru: 'э', en: '\'' },
            shift: { ru: 'Э', en: '"' },
            name: 'Quote',
            class: 'key Quote',
        },
        {
            key: { ru: 'Enter', en: 'Enter' },
            name: 'Enter',
            class: 'key key_enter Enter',
            noType: true,
        },
    ],
    [ // row 4
        {
            key: { ru: 'Shift', en: 'Shift' },
            name: 'ShiftLeft',
            class: 'key key_leftshift ShiftLeft',
            noType: true,
        },
        {
            key: { ru: '\\', en: '\\' },
            name: 'ShiftLeft',
            class: 'key key_dash KeyDash',
            noType: true,
        },
        {
            key: { ru: 'я', en: 'z' },
            shift: { ru: 'Я', en: 'Z' },
            name: 'KeyZ',
            class: 'key KeyZ',
        },
        {
            key: { ru: 'ч', en: 'x' },
            shift: { ru: 'Ч', en: 'X' },
            name: 'KeyX',
            class: 'key KeyX',
        },
        {
            key: { ru: 'с', en: 'c' },
            shift: { ru: 'С', en: 'C' },
            name: 'KeyC',
            class: 'key KeyC',
        },
        {
            key: { ru: 'м', en: 'v' },
            shift: { ru: 'М', en: 'V' },
            name: 'KeyV',
            class: 'key KeyV',
        },
        {
            key: { ru: 'и', en: 'b' },
            shift: { ru: 'И', en: 'B' },
            name: 'KeyB',
            class: 'key KeyB',
        },
        {
            key: { ru: 'т', en: 'n' },
            shift: { ru: 'Т', en: 'N' },
            name: 'KeyN',
            class: 'key KeyN',
        },
        {
            key: { ru: 'ь', en: 'm' },
            shift: { ru: 'Ь', en: 'M' },
            name: 'KeyM',
            class: 'key KeyM',
        },
        {
            key: { ru: 'б', en: ',' },
            shift: { ru: 'Б', en: '<' },
            name: 'Comma',
            class: 'key Comma',
        },
        {
            key: { ru: 'ю', en: '.' },
            shift: { ru: 'Ю', en: '>' },
            name: 'Period',
            class: 'key Period',
        },
        {
            key: { ru: '.', en: '/' },
            shift: { ru: ',', en: '?' },
            name: 'Slash',
            class: 'key Slash',
        },
        {
            key: { ru: '▲', en: '▲' },
            name: 'ArrowUp',
            noType: true,
            class: 'key ArrowUp',
        },
        {
            key: { ru: 'Shift', en: 'Shift' },
            name: 'ShiftRight',
            class: 'key key_rightshift ShiftRight',
            noType: true,
        },
    ],
    [ // row 5
        {
            key: { ru: 'Ctrl', en: 'Ctrl' },
            name: 'ControlLeft',
            class: 'key key_leftctrl ControlLeft',
            noType: true,
        },
        {
            key: { ru: 'Win', en: 'Win' },
            name: 'Win',
            class: 'key key_win Win',
            noType: true,
        },
        {
            key: { ru: 'Alt', en: 'Alt' },
            name: 'AltLeft',
            class: 'key key_leftalt AltLeft',
            noType: true,
        },
        { 
            key: { ru: ' ', en: ' ' }, 
            name: 'Space',
            class: 'key key_space Space' 
        },
        {
            key: { ru: 'Alt', en: 'Alt' },
            name: 'AltRight',
            class: 'key key_rightalt AltRight',
            noType: true,
        },
        {
            key: { ru: 'Ctrl', en: 'Ctrl' },
            name: 'ControlRight',
            class: 'key key_rightctrl ControlRight',
            noType: true,
        },
        {
            key: { ru: '🇷🇺', en: 'en' },
            name: 'Lang',
            class: 'key key_lang Lang',
            noType: true,
        },
        {
            key: { ru: '◄', en: '◄' },
            name: 'ArrowLeft',
            noType: true,
            class: 'key ArrowLeft',
        },
        {
            key: { ru: '▼', en: '▼' },
            name: 'ArrowDown',
            noType: true,
            class: 'key ArrowDown',
        },
        {
            key: { ru: '►', en: '►' },
            name: 'ArrowRight',
            noType: true,
            class: 'key ArrowRight',
        },
    ],
];

document.body.innerHTML =`
    <div class="wrapper">
    <textarea type="textarea" class = "txt" rows="5" cols="45"></textarea>
    <div class="keyboard">
        <div class="row row1"></div>
        <div class="row row2"></div>
        <div class="row row3"></div>
        <div class="row row4"></div>
        <div class="row row5"></div>
    </div>
    </div>`;

let lang = 'ru';
let caps = false;
let shift_left = false;
let shift_right = false;
let ctrl = false;
let alt = false;


const keyboardDrow = () => {
    for (let r = 0; r < 5; r++){
        for (let i = 0; i < keysMap[r].length; i++) {

            let langRu = keysMap[r][i].key ? keysMap[r][i].key['ru'] : '';
            let langEn = keysMap[r][i].key ? keysMap[r][i].key['en'] : '';
            let shiftRu = keysMap[r][i].shift ? keysMap[r][i].shift['ru'] : '';
            let shiftEn = keysMap[r][i].shift ? keysMap[r][i].shift['en'] : '';
            
            document.querySelector('.row' + (r+1)).insertAdjacentHTML("beforeEnd", 
            `<div class='${keysMap[r][i].class}' langRu='${langRu}' langEn='${langEn}' shiftRu='${shiftRu}' shiftEn='${shiftEn}' name='${keysMap[r][i].name}' noType='${keysMap[r][i].noType}'>${keysMap[r][i].key[lang]}</div>`
            );
        }
    }
};
keyboardDrow();

const KEYBOARD = document.querySelector('.keyboard');
const KEYS = document.querySelectorAll('.key');
const TXT = document.querySelector('.txt');

const SHIFT_LEFT = document.querySelector('.ShiftLeft');
const SHIFT_RIGHT = document.querySelector('.ShiftRight');

const shift = () => {
    for (let k of KEYS) {
        if (k.getAttribute('noType') != 'true') k.innerText = lang === 'en' ? k.getAttribute('shiftEn') : k.getAttribute('shiftRu');
    }
}
const unShift = () => {
    for (let k of KEYS) {
        if (k.getAttribute('noType') != 'true') k.innerText = lang === 'en' ? k.getAttribute('langEn') : k.getAttribute('langRu');
    }
}

SHIFT_LEFT.addEventListener('click', (event) => {
    shift_left = shift_left ? false : true;
    SHIFT_LEFT.classList.toggle('pressed');
    if (!shift_right && !shift_left) {
        unShift();
    } else if (!shift_right && shift_left){
        shift();
    };
});

SHIFT_RIGHT.addEventListener('click', (event) => {
    shift_right = shift_right ? false : true;
    SHIFT_RIGHT.classList.toggle('pressed');
    if (!shift_left && !shift_right) {
        unShift();
    } else if (!shift_left && shift_right){
        shift();
    };
});

const capsLock = () => {
    for (let k of KEYS) {
        if (k.getAttribute('noType') != 'true') k.classList.toggle("upperCase");
    }
};







const getCursorPosition = (tArea) => {
    var CaretPos = 0;
    if ( document.selection ) {
        tArea.focus ();
        var Sel = document.selection.createRange();
        Sel.moveStart ('character', -tArea.value.length);
        CaretPos = Sel.text.length;
    } else if ( tArea.selectionStart || tArea.selectionStart == '0' ) {
        CaretPos = tArea.selectionStart;
    }
    return CaretPos;
};


KEYBOARD.addEventListener('click', event => {
    if (
        event.target.getAttribute('noType') != 'true' &&
        event.target.classList[0] === 'key'
     ) {
        TXT.value += event.target.innerText
    };

    console.log('--- pressed:', event.target.getAttribute('name'));
    let position = getCursorPosition(TXT);

    switch (event.target.getAttribute('name')) {
        case 'Backspace':
            if (TXT.value.length != 0) TXT.value = TXT.value.slice(0, -1);
            break;
        case 'Space':
            if (TXT.value.length != 0) TXT.value += ' ';
            break;
        case 'Tab':
            if (TXT.value.length != 0) TXT.value += `\t`;
            break;
        case 'CapsLock':
            caps ? caps = false : caps = true;
            console.log(caps);
            capsLock();
            break;
        case 'Delete':
            if (TXT.value.length > position) {
                TXT.value = TXT.value.substring(0, position) + TXT.value.substring(position+1, TXT.value.length);
                TXT.focus()
                TXT.setSelectionRange(position, position);
            };
            break;
        default:
           break;
    }
    TXT.focus()
})


console.log('--------',getCursorPosition(TXT));