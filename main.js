#!/usr/bin/env node

const conjugate = require('./modes/conjugate')
const translate = require('./modes/translate')

const MODES = {
    TRANSLATE: 0,
    CONJUGATE: 1
}

let currentMode = MODES.CONJUGATE

// console.log("sdcli :: v1.0.0")
if (process.argv[2] == '-c') {
    conjugate.init()
}
else {
    translate.init()
}
