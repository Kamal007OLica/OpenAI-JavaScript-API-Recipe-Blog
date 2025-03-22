<h1> Few-Shot Prompting with User and Assistant Pairs </h1>

The API allows us to supply example user and assistant pairs with the messages list to perform a more advanced form of few-shot prompting. Each user message is paired with an assistant message to give the AI model a discrete example of what its generated output should look like based on the specified input.

Let’s walk through an example:
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
```

The above example stores messages in an array, few_shot_messages. The user/assistant messages provide the model of how it might respond to inquiries to Caribbean destinations. The prompting provides details like the country name, points of interest and activities, and locations worth visiting.

A second set of user/assistant messages can be provided to encourage the model that it’s acceptable to address user prompts requesting destinations outside of the Caribbean.

```bash
  {
    role: "user", 
    content: "We're looking for a Mediterranean destination that has beaches. Any suggestions?"}, 
  {
    role: "assistant", 
    content: "While I specialize in Caribbean destinations, I am familiar with a few Mediterranean destinations that have great beaches. Majorca for instance is right off the coast of Spain and has beautiful, pristine beaches."
  }
``` 


Now, equipped with this additional context, the model can better respond when faced with a user prompt for a destination outside of the Caribbean.

```bash
  {
    role: "user", 
    content: "Our group loves water activities. What is a good European destination?"
  }
]; 
``` 

With the few-shot prompting, we receive the following:

Output (Model Response):
```bash
If you're looking for a European destination with a wide range of water activities, I recommend the Algarve region in Portugal. With its stunning coastline, the Algarve offers excellent conditions for surfing, paddleboarding, kayaking, and boat excursions. Whether you're a beginner or an experienced water sports enthusiast, there's something for everyone in the Algarve. 
``` 

The model successfully suggested a European destination with great water activities, showcasing its ability to adapt and respond beyond Caribbean locations.

Note that while providing additional user and assistant pairs will improve the accuracy and performance of the model’s response, it does increase the number of tokens used within the prompt, which, consequently, affects both the token usage and the cost of the API call.
