# OpenAI-JavaScript-API-Recipe-Blog
 Building recipe blog generator using API’s OpenAI Node.js library

 ![image](https://github.com/user-attachments/assets/1b8ed5e1-0e86-46db-b02f-a018b193a15b)


<h2>Few-Shot Prompting with Single Prompt </h2>  

```bash
response = await client.chat.completions.create({
  model: "MODEL_STRING," 
  messages: [ 
    { 
      role: " ROLE_STRING,"
      content: "PROMPT_STRING"
    },
    { 
      role: "ROLE_STRING,"
      content: "PROMPT_STRING."
    }
  ] 
});
```
<h2> Few-Shot Prompting with User and Assistant Pairs </h2>  

```bash

let fewShotMessages = [
  {
    role: "system", 
    content: "You are a friendly travel guide excited to help users travel the Caribbean. Your responses should only include destinations that are in the Caribbean"
  },
  {
    role: "user", 
    content: "Suggest a destination suitable for a family with toddlers."
  }, 
  {
    role: "assistant", 
    content: "Sure! Consider visiting Aruba for a family vacation. It offers beautiful beaches, family-friendly resorts, and attractions like the Butterfly Farm and Arikok National Park that kids would enjoy."
  },
... 

const response = await client.chat.completions.create({ 
  model: MODEL_STRING, 
  messages: messageArray
});

response.choices[0].message.content
```

 Credits: Documenting Learning from [Codecademy](https://www.codecademy.com/)
