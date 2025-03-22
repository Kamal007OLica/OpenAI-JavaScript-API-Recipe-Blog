<h1> Few-Shot Prompting with Single Prompt </h1>

Providing examples within our input prompts can help generate an output that best suits our needs. All of our user prompts in this lesson so far have been zero-shot prompts, which are broad prompts where the model must use its general understanding and capabilities to generate a response.

In the previous exercise, we asked our model for travel ideas for a family of four. The model’s response was lengthy in suggesting eight different Carribean destinations as it had to generate its response based on its general knowledge and understanding of the Carribean.

Now, imagine that we changed our prompt to constrain the destination to include waterfall hiking:
```bash
const response = await client.chat.completions.create({
  model:"gpt-3.5-turbo",
  messages:[
    {
      role: "system",
      content: "You are a friendly travel guide excited to help users travel the Caribbean. Your responses should only include destinations that are in the Caribbean."
    },
    {
      role: "user",
      content: "Give me some travel ideas for a family of four where there are also waterfall hiking excursions."
    }
  ]
});
console.log(response.choices[0].message.content);
```

**Output (Model Response): **
```bash
Sure! The Caribbean offers plenty of travel options for families looking to combine outdoor adventure with waterfall hiking excursions. Here are a few destinations to consider:  

1. Dominica: Known as the "Nature Isle of the Caribbean," Dominica boasts lush rainforests and numerous waterfalls. Visit the Trafalgar Falls or hike the challenging but rewarding Boiling Lake trail. 

2. Grenada: This beautiful island is home to the Annandale Falls, where you can experience a short, family-friendly hike through tropical foliage to reach the picturesque cascade. Additionally, you can explore other waterfalls like Seven Sisters and Concord Falls. 
```

The above prompt is called a one-shot prompt and involves providing the model with just one example to guide how the model responds. Here, we introduce additional criteria and context (specifically, waterfall hiking) for the model when recommending its Caribbean destinations. The model’s response is far more fine-tuned than the original zero-shot prompt.

We can also use few-shot prompts. Few-shot prompting is a specific technique within prompt engineering that involves providing a language model with a few examples or demonstrations of the desired behavior to guide its replies. It allows users to specify the task or context they want the model to focus on.

Here is a few-shot user prompt that gives the model some formatting guidance on how the Caribbean destination list should be returned:
```bash
const response = await client.chat.completions.create({
    model:"gpt-3.5-turbo",
    messages:[
        {
            role: "system",
            content: "You are a friendly travel guide excited to help users travel the Caribbean. Your responses should only include destinations that are in the Caribbean."
        },
        {
            role: "user",
            content: 'Give me some travel ideas for a family of four. I want the results to be in csv format: \n"Destination,AirportCode,PopulationSize,Description.\nBermuda,BDA,"63,856","Bermuda, a picturesque island paradise in the North Atlantic Ocean, captivates travelers with its pink sand beaches, crystal-clear turquoise waters, and charming pastel-colored architecture."'
        }
    ]
});
console.log(response.choices[0].message.content);
```

Output (Model Response): 
```bash
Aruba,AUA,"106,766","Aruba, a Caribbean island just off the coast of Venezuela, is known for its stunning white-sand beaches, crystal-clear blue waters, and year-round warm weather. It offers a wide range of family-friendly activities such as snorkeling, scuba diving, and exploring natural attractions like Arikok National Park." 

Jamaica,MBJ,"2,890,299","Jamaica, the birthplace of reggae music, invites families to enjoy its beautiful beaches, vibrant local culture, and thrilling adventure activities. From stunning waterfalls and lush rainforests to friendly locals and delicious cuisine, Jamaica has something for everyone." 
```

The model was able to use the examples provided within the user prompt to return properly formatted and ordered data. Being able to specify the formatting is also great for users who need to export the data into a file with a specific format. We could alternatively modify our prompt to request the data in a bulleted list instead of in CSV format.

Few-shot prompts are helpful in providing instructions, and for specifying and fine-tuning tasks for the model. It is best to use this technique when:

We have complex tasks that the model may not understand
We want customized or specifically formatted replies
We want the model to be able to adapt to unique or edge cases
We want to narrow the focus of the model output
