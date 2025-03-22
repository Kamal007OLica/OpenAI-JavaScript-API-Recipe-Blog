import OpenAI from "openai";
const client = new OpenAI();


const response = await client.chat.completions.create({ 
  model: "gpt-4-turbo-preview",
  messages: [ 
    { 
      role: "user", 
      content: "who is kamalraaj senthilkumar from tamilnadu" 
    } 
  ]
});


console.log(response.choices[0].message.content);
