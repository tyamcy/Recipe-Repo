import { connectToDatabase } from '@/utils/database';
import Recipe from '@/models/recipe';

export const GET = async (requests, {params}) => {
    try {
        await connectToDatabase();

        const recipes = await Recipe.find({creator: params.id}).populate('creator');
        
        return new Response(JSON.stringify(recipes), {status: 200})

    } catch(error) {   
        return new Response('Failed to fetch recipes', {status: 500})
    }
} 