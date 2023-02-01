const sdapi = require('sdapi').default
const prompt = require('prompt-sync')();
const conjugate = require('./conjugate')

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
        prompt("Press enter to continue...")
    }
}

module.exports = {
    init
}