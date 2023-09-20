import { connectToDatabase } from '@/utils/database';
import Recipe from '@/models/recipe';

export const POST = async (request) => {
    const { userId, recipe, cuisine, description, instructions } = await request.json();

    try {
        await connectToDatabase();
        const newRecipe = new Recipe({
            creator: userId,
            recipe,
            cuisine,
            description,
            instructions,
        });

        await newRecipe.save();
        
        return new Response(JSON.stringify(newRecipe), {status: 201})

    } catch (error) {
        return new Response('Failed to create the recipe', {status: 500})
    }
}