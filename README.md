# OpenAI-JavaScript-API-Recipe-Blog
 building recipe blog generator using API’s OpenAI Node.js library


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
