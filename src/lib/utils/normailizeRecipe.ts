import { ApiRecipeHit, Recipe } from '../types';

export const normalizeRecipe = (recipeObj: ApiRecipeHit): Recipe | null => {
    if (!recipeObj) return null;

    const recipe = recipeObj.recipe;
    return {
        label: recipe.label,
        url: recipe.url,
        thumbnail: recipe.images.THUMBNAIL,
        source: recipe.source,
        amount: recipe.yield,
        dietLabels: recipe.dietLabels,
        totalTime: recipe.totalTime,
        cuisineType: recipe.cuisineType,
        mealType: recipe.mealType,
        calories: parseFloat(recipe.calories.toFixed(2)),
    };
};
