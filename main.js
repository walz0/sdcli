#!/usr/bin/env node

const conjugate = require('./modes/conjugate')
const translate = require('./modes/translate')
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.on('keypress', (ch, key) => {
    // tradución
    if (key && key.ctrl && key.name == 't') {
        if (currentMode !== MODES.TRANSLATE)
            translate.init();
    }
    // conjugación
    if (key && key.ctrl && key.name == 'c') {
        if (currentMode !== MODES.CONJUGATE)
            conjugate.init();
    }
    // quitar
    if (key && key.ctrl && key.name == 'z') {
        process.stdin.pause();
    }
});

process.stdin.setRawMode(true);

const MODES = {
    TRANSLATE: 0,
    CONJUGATE: 1
}

let currentMode = MODES.CONJUGATE

console.log("sdcli :: v1.0.0");
// start in translate by default
// conjugate.init();
translate.init();
