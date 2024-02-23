import { describe, expect, it } from 'vitest';
import { normalizeRecipe } from './normailizeRecipe';
import { ApiRecipeHit } from '../types';
import { recipesMock } from '../mocks/recipesMock';

const mockRecipe = recipesMock.hits[0];

describe('normalizeRecipe', () => {
    it('should normalize recipe to defined shape', () => {
        const recipe = normalizeRecipe(mockRecipe);

        expect(recipe?.label).toBe(mockRecipe.recipe.label);
        expect(recipe?.url).toBe(mockRecipe.recipe.url);
    });

    it('should return null if no recipe is passed', () => {
        // @ts-ignore
        const recipe = normalizeRecipe();
        expect(recipe).toBeNull();
    });
});
