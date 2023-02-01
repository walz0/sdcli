const sdapi = require('sdapi').default
const prompt = require('prompt-sync')();

const init = async () => {
    const types = [
        "present",
        "preterit",
        "past",
        "imperfect",
        "imperative",
        "future",
        "conditional",
        "negative"
    ]
    
    while (true) {
        console.clear()
        console.log("CONJUGATE")
        const query = prompt("Search: ")
        let table = {}
        await sdapi.conjugate(query).then(words => {
            words.forEach((word) => {
                // console.log(word.context, "|", word.meaning, "|", word.regions.length ? word.regions : "")
                if (table[word.paradigm] === undefined) {
                    table[word.paradigm] = []
                    table[word.paradigm].push({
                        "pronoun": word.pronoun,
                        "word": word.word
                    })
                }
                table[word.paradigm].push({
                    "pronoun": word.pronoun,
                    "word": word.word
                })
            })

            let sorted = {}
            types.forEach((type) => {
                for (paradigm in table) {
                    if (paradigm.includes(type)) {
                        sorted[paradigm] = table[paradigm]
                    }
                }
            })
            

            console.log(sorted)
        })
        console.log("")
        prompt("Press enter to continue...")
    }
}

module.exports = {
    init
}