import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // Make sure you have set the API key in environment variables
});

const userProfile = {
  dietaryRestrictions: ["vegetarian", "gluten-free"],
  cuisinePreferences: ["Italian", "Mexican"],
  ingredientsAvailable: ["tomatoes", "cheese", "pasta", "bell peppers"]
};

const systemPrompt = [
  {
    role: "system",
    content: `You are a recipe blog writer. Create a blog post that includes a title, description, ingredients, and instructions. 
      - Use only the ingredients listed in the user's profile. 
      - Format the ingredients as a bulleted list and the instructions as a numbered list.
      - The recipe must not exceed six steps.`
  },
  {
    role: "user",
    content: `User dietary restrictions: ${userProfile.dietaryRestrictions.join(", ")}
      Cuisine preferences: ${userProfile.cuisinePreferences.join(", ")}
      Available ingredients: ${userProfile.ingredientsAvailable.join(", ")}`
  }
];

async function getRecipe() {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: systemPrompt
    });

    console.log(response.choices[0].message.content); // Output the recipe response
  } catch (error) {
    console.error("Error generating recipe:", error);
  }
}

getRecipe();
