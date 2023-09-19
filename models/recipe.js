import { Schema, model, models } from 'mongoose';

const RecipeSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    recipe: {
        type: String,
        required: [true, 'Recipe is required.'],
    },
    cuisine: {
        type: String,
        required: [true, 'Cuisine is required.'],
    },
    instructions: {
        type: [String],
        required: [true, 'Instructions are required'],
    }
});

const Recipe = models.Recipe || model('Recipe', RecipeSchema);

export default Recipe;