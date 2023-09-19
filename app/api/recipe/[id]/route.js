import { connectToDatabase } from '@/utils/database';
import Recipe from '@/models/recipe';

export const GET = async (request, {params}) => {
    try {
        await connectToDatabase();

        const recipes = await Recipe.findById(params.id).populate('creator');

        if (!recipes) {
            return new Response('Recipe not found', {status: 404});
        }

        return new Response(JSON.stringify(recipes), {status: 200});

    } catch(error) {
        return new Response('Failed to fetch all recipes', {status: 500});
    }
}

export const PATCH = async (request, {params}) => {
    const { recipe, cuisine } = await request.json();

    try {
        await connectToDatabase();

        const existingRecipe = await Recipe.findById(params.id);

        if (!existingRecipe) {
            return new Response('Recipe not found', {status: 404});
        }

        existingRecipe.recipe = recipe;
        existingRecipe.cuisine = cuisine;

        await existingRecipe.save();

        return new Response(JSON.stringify(existingRecipe), {status: 200});

    } catch(error) {
        return new Reponse('Failed to update prompt', {status: 500})
    }
}

export const DELETE = async (request, {params}) => {
    try {
        await connectToDatabase();

        await Recipe.findByIdAndRemove(params.id);

        return new Response('Prompt deleted successfully', {status: 200});

    } catch(error) {
        return new Reponse('Failed to delete prompt', {status: 500})
    }
}