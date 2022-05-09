const keysMap = [
    [ // row 1
        {
            key: { ru: 'ё', en: '`' },
            shift: { ru: 'Ё', en: '~' },
            code: 'Backquote',
            class: 'key tilda Backquote',
        },
        {
            key: { ru: '1', en: '1' },
            shift: { ru: '!', en: '!' },
            code: 'Digit1',
            class: 'key Digit1',
        },
        {
            key: { ru: '2', en: '2' },
            shift: { ru: '"', en: '@' },
            code: 'Digit2',
            class: 'key Digit2',
        },
        {
            key: { ru: '3', en: '3' },
            shift: { ru: '№', en: '#' },
            code: 'Digit3',
            class: 'key Digit3',
        },
        {
            key: { ru: '4', en: '4' },
            shift: { ru: ';', en: '$' },
            code: 'Digit4',
            class: 'key Digit4',
        },
        {
            key: { ru: '5', en: '5' },
            shift: { ru: '%', en: '%' },
            code: 'Digit5',
            class: 'key Digit5',
        },
        {
            key: { ru: '6', en: '6' },
            shift: { ru: ':', en: '^' },
            code: 'Digit6',
            class: 'key Digit6',
        },
        {
            key: { ru: '7', en: '7' },
            shift: { ru: '?', en: '&' },
            code: 'Digit7',
            class: 'key Digit7',
        },
        {
            key: { ru: '8', en: '8' },
            shift: { ru: '*', en: '*' },
            code: 'Digit8',
            class: 'key Digit8',
        },
        {
            key: { ru: '9', en: '9' },
            shift: { ru: '(', en: '(' },
            code: 'Digit9',
            class: 'key Digit9',
        },
        {
            key: { ru: '0', en: '0' },
            shift: { ru: ')', en: ')' },
            code: 'Digit0',
            class: 'key Digit0',
        },
        {
            key: { ru: '-', en: '-' },
            shift: { ru: '_', en: '_' },
            code: 'Minus',
            class: 'key Minus',
        },
        {
            key: { ru: '=', en: '=' },
            shift: { ru: '+', en: '+' },
            code: 'Equal',
            class: 'key Equal',
        },
        {
            key: { ru: 'Backspace', en: 'Backspace' },
            code: 'Backspace',
            class: 'key key_backspace Backspace',
            noType: true,
        },
    ],
    [ // row 2
        {
            key: { ru: 'Tab', en: 'Tab' },
            code: 'Tab',
            class: 'key key_tab Tab',
            noType: true,
        },
        {
            key: { ru: 'й', en: 'q' },
            shift: { ru: 'Й', en: 'Q' },
            code: 'KeyQ',
            class: 'key KeyQ',
        },
        {
            key: { ru: 'ц', en: 'w' },
            shift: { ru: 'Ц', en: 'W' },
            code: 'KeyW',
            class: 'key KeyW',
        },
        {
            key: { ru: 'у', en: 'e' },
            shift: { ru: 'У', en: 'E' },
            code: 'KeyE',
            class: 'key KeyE',
        },
        {
            key: { ru: 'к', en: 'r' },
            shift: { ru: 'К', en: 'R' },
            code: 'KeyR',
            class: 'key KeyR',
        },
        {
            key: { ru: 'е', en: 't' },
            shift: { ru: 'Е', en: 'T' },
            code: 'KeyT',
            class: 'key KeyT',
        },
        {
            key: { ru: 'н', en: 'y' },
            shift: { ru: 'Н', en: 'Y' },
            code: 'KeyY',
            class: 'key KeyY',
        },
        {
            key: { ru: 'г', en: 'u' },
            shift: { ru: 'Г', en: 'U' },
            code: 'KeyU',
            class: 'key KeyU',
        },
        {
            key: { ru: 'ш', en: 'i' },
            shift: { ru: 'Ш', en: 'I' },
            code: 'KeyI',
            class: 'key KeyI',
        },
        {
            key: { ru: 'щ', en: 'o' },
            shift: { ru: 'Щ', en: 'O' },
            code: 'KeyO',
            class: 'key KeyO',
        },
        {
            key: { ru: 'з', en: 'p' },
            shift: { ru: 'З', en: 'P' },
            code: 'KeyP',
            class: 'key KeyP',
        },
        {
            key: { ru: 'х', en: '[' },
            shift: { ru: 'Х', en: '{' },
            code: 'BracketLeft',
            class: 'key BracketLeft',
        },
        {
            key: { ru: 'ъ', en: ']' },
            shift: { ru: 'Ъ', en: '}' },
            code: 'BracketRight',
            class: 'key BracketRight',
        },
        {
            key: { ru: '\\', en: '\\' },
            shift: { ru: '|', en: '|' },
            code: 'Backslash',
            class: 'key key_backslash Backslash',
        },
        {
            key: { ru: 'Del', en: 'Del' },
            code: 'Delete',
            class: 'key key_del Delete',
            noType: true,
        },
    ],
    [ // row 3
        {
            key: { ru: 'Caps Lock', en: 'Caps Lock' },
            code: 'CapsLock',
            class: 'key CapsLock',
            noType: true,
        },
        {
            key: { ru: 'ф', en: 'a' },
            shift: { ru: 'Ф', en: 'A' },
            code: 'KeyA',
            class: 'key KeyA',
        },
        {
            key: { ru: 'ы', en: 's' },
            shift: { ru: 'Ы', en: 'S' },
            code: 'KeyS',
            class: 'key KeyS',
        },
        {
            key: { ru: 'в', en: 'd' },
            shift: { ru: 'В', en: 'D' },
            code: 'KeyD',
            class: 'key KeyD',
        },
        {
            key: { ru: 'а', en: 'f' },
            shift: { ru: 'А', en: 'F' },
            code: 'KeyF',
            class: 'key KeyF',
        },
        {
            key: { ru: 'п', en: 'g' },
            shift: { ru: 'П', en: 'G' },
            code: 'KeyG',
            class: 'key KeyG',
        },
        {
            key: { ru: 'р', en: 'h' },
            shift: { ru: 'Р', en: 'H' },
            code: 'KeyH',
            class: 'key KeyH',
        },
        {
            key: { ru: 'о', en: 'j' },
            shift: { ru: 'О', en: 'J' },
            code: 'KeyJ',
            class: 'key KeyJ',
        },
        {
            key: { ru: 'л', en: 'k' },
            shift: { ru: 'Л', en: 'K' },
            code: 'KeyK',
            class: 'key KeyK',
        },
        {
            key: { ru: 'д', en: 'l' },
            shift: { ru: 'Д', en: 'L' },
            code: 'KeyL',
            class: 'key KeyL',
        },
        {
            key: { ru: 'ж', en: ';' },
            shift: { ru: 'Ж', en: ':' },
            code: 'Semicolon',
            class: 'key Semicolon',
        },
        {
            key: { ru: 'э', en: '&#39;' },
            shift: { ru: 'Э', en: '\"' },
            code: 'Quote',
            class: 'key Quote',
        },
        {
            key: { ru: 'Enter', en: 'Enter' },
            code: 'Enter',
            class: 'key key_enter Enter',
            noType: true,
        },
    ],
    [ // row 4
        {
            key: { ru: 'Shift', en: 'Shift' },
            code: 'ShiftLeft',
            class: 'key key_leftshift ShiftLeft',
            noType: true,
        },
        {
            key: { ru: '\\', en: '\\' },
            shift: { ru: '\/', en: '\/' },
            code: 'KeyDash',
            class: 'key key_dash KeyDash',
        },
        {
            key: { ru: 'я', en: 'z' },
            shift: { ru: 'Я', en: 'Z' },
            code: 'KeyZ',
            class: 'key KeyZ',
        },
        {
            key: { ru: 'ч', en: 'x' },
            shift: { ru: 'Ч', en: 'X' },
            code: 'KeyX',
            class: 'key KeyX',
        },
        {
            key: { ru: 'с', en: 'c' },
            shift: { ru: 'С', en: 'C' },
            code: 'KeyC',
            class: 'key KeyC',
        },
        {
            key: { ru: 'м', en: 'v' },
            shift: { ru: 'М', en: 'V' },
            code: 'KeyV',
            class: 'key KeyV',
        },
        {
            key: { ru: 'и', en: 'b' },
            shift: { ru: 'И', en: 'B' },
            code: 'KeyB',
            class: 'key KeyB',
        },
        {
            key: { ru: 'т', en: 'n' },
            shift: { ru: 'Т', en: 'N' },
            code: 'KeyN',
            class: 'key KeyN',
        },
        {
            key: { ru: 'ь', en: 'm' },
            shift: { ru: 'Ь', en: 'M' },
            code: 'KeyM',
            class: 'key KeyM',
        },
        {
            key: { ru: 'б', en: ',' },
            shift: { ru: 'Б', en: '<' },
            code: 'Comma',
            class: 'key Comma',
        },
        {
            key: { ru: 'ю', en: '.' },
            shift: { ru: 'Ю', en: '>' },
            code: 'Period',
            class: 'key Period',
        },
        {
            key: { ru: '.', en: '/' },
            shift: { ru: ',', en: '?' },
            code: 'Slash',
            class: 'key Slash',
        },
        {
            key: { ru: '▲', en: '▲' },
            code: 'ArrowUp',
            noType: true,
            class: 'key ArrowUp',
        },
        {
            key: { ru: 'Shift', en: 'Shift' },
            code: 'ShiftRight',
            class: 'key key_rightshift ShiftRight',
            noType: true,
        },
    ],
    [ // row 5
        {
            key: { ru: 'Ctrl', en: 'Ctrl' },
            code: 'ControlLeft',
            class: 'key key_leftctrl CtrlLeft',
            noType: true,
        },
        {
            key: { ru: 'Win', en: 'Win' },
            code: 'MetaLeft',
            class: 'key key_win Win',
            noType: true,
        },
        {
            key: { ru: 'Alt', en: 'Alt' },
            code: 'AltLeft',
            class: 'key key_leftalt AltLeft',
            noType: true,
        },
        { 
            key: { ru: ' ', en: ' ' }, 
            code: 'Space',
            class: 'key key_space Space' 
        },
        {
            key: { ru: 'Alt', en: 'Alt' },
            code: 'AltRight',
            class: 'key key_rightalt AltRight',
            noType: true,
        },
        {
            key: { ru: 'Ctrl', en: 'Ctrl' },
            code: 'ControlRight',
            class: 'key key_rightctrl CtrlRight',
            noType: true,                              
        },
        {
            key: { ru: 'Ru', en: 'En' },
            code: 'Lang',
            class: 'key key_lang Lang',
            noType: true,
        },
        {
            key: { ru: '◄', en: '◄' },
            code: 'ArrowLeft',
            noType: true,
            class: 'key ArrowLeft',
        },
        {
            key: { ru: '▼', en: '▼' },
            code: 'ArrowDown',
            noType: true,
            class: 'key ArrowDown',
        },
        {
            key: { ru: '►', en: '►' },
            code: 'ArrowRight',
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

let lang = localStorage.getItem('curLang') === null ? 'ru': localStorage.getItem('curLang');
let caps = false;
let shift_left = false;
let shift_right = false;
let ctrl_left = false;
let ctrl_right = false;
let alt_left = false;
let alt_right = false;

const keyboardDrow = () => {
    for (let r = 0; r < 5; r++){
        for (let i = 0; i < keysMap[r].length; i++) {

            let langRu = keysMap[r][i].key ? keysMap[r][i].key['ru'] : '';
            let langEn = keysMap[r][i].key ? keysMap[r][i].key['en'] : '';
            let shiftRu = keysMap[r][i].shift ? keysMap[r][i].shift['ru'] : '';
            let shiftEn = keysMap[r][i].shift ? keysMap[r][i].shift['en'] : '';
            let upper_smb = shiftRu == shiftEn ? shiftRu : `${shiftRu} ${shiftEn}`
            let uppertxt = (r===0 && keysMap[r][i].code) ? `<div class="uppertxt">${upper_smb}</div>`: '';

            document.querySelector('.row' + (r+1)).insertAdjacentHTML("beforeEnd", 
            `<div class="key-wrapper">
            <div class='${keysMap[r][i].class}' langRu='${langRu}' langEn='${langEn}' shiftRu='${shiftRu}' shiftEn='${shiftEn}' code='${keysMap[r][i].code}' noType='${keysMap[r][i].noType}'>${keysMap[r][i].key[lang]}</div> ${uppertxt}
            </div>`
            );
        }
    }
};

keyboardDrow();

const KEYBOARD = document.querySelector('.keyboard');
const UPPERTXT = document.querySelectorAll('.uppertxt');
const KEYS = document.querySelectorAll('.key');
const TXT = document.querySelector('.txt');
const CAPS_LOCK = document.querySelector('.CapsLock');
const SHIFT_LEFT = document.querySelector('.ShiftLeft');
const SHIFT_RIGHT = document.querySelector('.ShiftRight');
const ALT_LEFT = document.querySelector('.AltLeft');
const ALT_RIGHT = document.querySelector('.AltRight');
const LANG = document.querySelector('.Lang');


const shift = () => {
    for (let k of KEYS) {
        if (k.getAttribute('noType') != 'true') k.innerText = lang === 'en' ? k.getAttribute('shiftEn') : k.getAttribute('shiftRu');
    }
}

const updateLetters = () => {
    for (let k of KEYS) {
        if (k.getAttribute('noType') != 'true' || k.getAttribute('code') === 'Lang') k.innerText = lang === 'en' ? k.getAttribute('langEn') : k.getAttribute('langRu');
    }
}

updateLetters();

const toggleUpperTxt = () => {
    for (let u of UPPERTXT) {
        u.classList.toggle('display-none');
    }
}

const capsLock = () => {
    for (let k of KEYS) {
        if (k.getAttribute('noType') != 'true') k.classList.toggle("upperCase");
    }
}

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
}

KEYBOARD.addEventListener('click', event => {
    if (
        event.target.getAttribute('noType') != 'true' &&
        event.target.classList[0] === 'key'
     ) {
        TXT.value += event.target.innerText
    };

    let position = getCursorPosition(TXT);

    switch (event.target.getAttribute('code')) {
        case 'Backspace':
            if (TXT.value.length != 0) TXT.value = TXT.value.slice(0, -1);
            break;
        case 'Space':
            TXT.value += ' ';
            break;
        case 'Tab':
            TXT.value += `\t`;
            break;
        case 'Enter':
            TXT.value += `\n`;
            break;
        case 'CapsLock':
            caps ? caps = false : caps = true;
            capsLock();
            CAPS_LOCK.classList.toggle('pressed');
            break;
        case 'Delete':
            if (TXT.value.length > position) {
                TXT.value = TXT.value.substring(0, position) + TXT.value.substring(position+1, TXT.value.length);
                TXT.focus()
                TXT.setSelectionRange(position, position);
            };
            break;
        case 'ShiftLeft':
            shift_left = shift_left ? false : true;
            SHIFT_LEFT.classList.toggle('pressed');
            if(!alt_left && !alt_right) {
                if (!shift_right && !shift_left) {
                    updateLetters();
                    toggleUpperTxt();
                };
                if (!shift_right && shift_left) {
                    shift();
                    toggleUpperTxt();
                };
            };
            break;
        case 'ShiftRight':
            shift_right = shift_right ? false : true;
            SHIFT_RIGHT.classList.toggle('pressed');
            if(!alt_left && !alt_right) {
                if (!shift_left && !shift_right) {
                    updateLetters();
                    toggleUpperTxt();
                };
                if (!shift_left && shift_right) {
                    shift();
                    toggleUpperTxt();
                };
            };
            break;
        case 'AltLeft':
            alt_left = alt_left ? false : true;
            ALT_LEFT.classList.toggle('pressed');
            break;
        case 'AltRight':
            alt_right = alt_right ? false : true;
            ALT_RIGHT.classList.toggle('pressed');
            break;
        case 'ControlLeft':
            ctrl_left = ctrl_left ? false : true;
            event.target.classList.toggle('pressed');
            break;
        case 'ControlRight':
            ctrl_right = ctrl_right ? false : true;
            event.target.classList.toggle('pressed');
            break;
        case 'Lang':
            lang = lang === "ru" ? "en" : "ru";
            updateLetters();
            localStorage.setItem("curLang", lang)
            break;
        default:
           break;
    }
    TXT.focus()

    if((shift_left || shift_right) && (alt_left || alt_right) && (!ctrl_left && !ctrl_right)) {
        ALT_RIGHT.classList.remove('pressed');
        ALT_LEFT.classList.remove('pressed');
        SHIFT_RIGHT.classList.remove('pressed');
        SHIFT_LEFT.classList.remove('pressed');
        shift_right = false;
        shift_left = false;
        alt_left = false;
        alt_right = false;

        lang = lang === "ru" ? "en" : "ru";
        updateLetters();
        localStorage.setItem("curLang", lang)
    }

})

document.addEventListener('keydown', function(event) {
    if (!caps && event.getModifierState('CapsLock')) {
        capsLock();
        caps = true;
        CAPS_LOCK.classList.toggle('pressed')
    };
    
    for (let virtualKey of KEYS) {
        if (virtualKey.getAttribute('code') == event.code) virtualKey.classList.toggle('pressed') 
    }

    if (event.code == 'CapsLock') { 
        caps ? caps = false : caps = true;
        capsLock();
        CAPS_LOCK.classList.toggle('pressed')
    }

    if (event.shiftKey && event.altKey) {
        lang = lang === "ru" ? "en" : "ru";
        updateLetters();
        localStorage.setItem("curLang", lang);
    }
});

document.addEventListener('keyup', function(event) {
    for(let virtualKey of KEYS) {
        if (virtualKey.getAttribute('code') == event.code) {
            virtualKey.classList.toggle('pressed')
        }
    }
});

document.body.querySelector('.wrapper').insertAdjacentHTML("beforeEnd", `<div class="description"> Please use <b>Alt + Shift</b> to switch language</div>`);
document.body.querySelector('.wrapper').insertAdjacentHTML("beforeEnd", `<div class="description"> This is <b>Windows</b> app</div>`);
document.body.querySelector('.wrapper').insertAdjacentHTML("afterBegin", `<div class="description"> RSSchool <b>Virtual Keyboard</b> task</div>`)