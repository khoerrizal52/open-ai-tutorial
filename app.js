const readline = require('readline')
const { 
    generateMeta,
    testQuestion,
} = require('./controllers/openaiController')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// rl.question('Youtube video title: \n', generateMeta)
rl.question('question: \n', testQuestion)