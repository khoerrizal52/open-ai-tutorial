const openai = require('../config/openaiConfig')

const generateMeta = async (title) => {
    const description = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: `Come up with a description for YouTube video called ${title}`
            }
        ],
        max_tokens: 100
    })

    console.log(description.choices[0].message.content)
}

module.exports = { generateMeta }