const openai = require('../config/openaiConfig')
const { zodResponseFormat } = require("openai/helpers/zod");
const { z } = require("zod");

const CalendarEvent = z.object({
    name: z.string(),
    date: z.string(),
    participants: z.array(z.string()),
});

const generateMeta = async (title) => {
    const description = await openai.chat.completions.create({
        model: "gpt-4o-2024-08-06",
        messages: [
            { role: "system", content: "Extract the event information." },
            { role: "user", content: "Alice and Bob are going to a science fair on Friday." },
        ],
        response_format: zodResponseFormat(CalendarEvent, "event"),
    })

    console.log(description.choices[0].message.content)
}

module.exports = { generateMeta }