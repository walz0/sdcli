const sdapi = require('sdapi').default
const prompt = require('prompt-sync')();
const readline = require('readline');
const conjugate = require('./conjugate')

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

const init = async () => {
    while (true) {
        console.clear()
        console.log("TRANSLATE")
        const query = prompt("Search: ")
        await sdapi.translate(query).then(words => {
            words.forEach((word) => {
                console.log(word.context, "|", word.meaning, "|", word.regions.length ? word.regions : "")
            })
        })
        console.log("")
        prompt("Press any key to continue...")
    }
}

module.exports = {
    init
}