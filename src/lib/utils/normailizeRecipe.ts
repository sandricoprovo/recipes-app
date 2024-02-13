export const normalizeRecipe = (recipeObj: ApiRecipeHit) => {
    if (!recipeObj) return {};

    const recipe = recipeObj.recipe;
    return {
        label: recipe.label,
        url: recipe.url,
    };
};
