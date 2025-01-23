const openai = require('../config/openaiConfig')
const { zodResponseFormat } = require("openai/helpers/zod");
const { z } = require("zod");

const Topics = z.object({
    topic: z.array(z.string()),
});

const generateMeta = async (title) => {
    const description = await openai.chat.completions.create({
        model: "gpt-4o-2024-08-06",
        messages: [
            { role: "system", content: "Provide array of simple string" },
            {
                role: 'user',
                content: `give me 5 simple topics to talk in a list`
            }
        ],
        response_format: zodResponseFormat(Topics, "topics"),
        max_tokens: 100
    })

    console.log(description.choices[0].message.content)
}

const testQuestion = async (question) => {
    const description = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "developer", content: "You are an IELTS examiner" },
            {
                role: 'user',
                content: question
            }
        ],
        max_tokens: 100
    })

    console.log(description.choices[0].message.content)
}

module.exports = { generateMeta, testQuestion }