import { describe, expect, it } from 'vitest';
import { normalizeRecipe } from './normailizeRecipe';

const mockRecipe = {
    recipe: {
        label: 'First Recipe',
        url: 'recipe_url_mock',
    },
};

describe('normalizeRecipe', () => {
    it('should normalize recipe to defined shape', () => {
        const recipe = normalizeRecipe(mockRecipe);

        expect(recipe.label).toBe(mockRecipe.recipe.label);
        expect(recipe.url).toBe(mockRecipe.recipe.url);
    });

    it('should return null if no recipe is passed', () => {
        // @ts-ignore
        const recipe = normalizeRecipe();
        expect(recipe.label).toBeUndefined();
    });
});
