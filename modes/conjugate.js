const sdapi = require('sdapi').default
const prompt = require('prompt-sync')();

const init = async () => {
    // sdapi.conjugate('hacer').then(console.log)
    console.clear()
    console.log("CONJUGATE")
    prompt("Search: ")
}

module.exports = {
    init
}