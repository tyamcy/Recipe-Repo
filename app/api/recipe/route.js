import { connectToDatabase } from '@/utils/database';
import Recipe from '@/models/recipe';

export const GET = async () => {
    try {
        await connectToDatabase();

        const recipes = await Recipe.find({}).populate('creator');

        return new Response(JSON.stringify(recipes), {status: 200})

    } catch(error) {   
        return new Response('Failed to fetch all recipes', {status: 500})
    }


} 

