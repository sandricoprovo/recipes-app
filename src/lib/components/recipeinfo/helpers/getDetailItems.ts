import { Recipe } from '@/lib/types';
import { RecipeDetail } from '../RecipeInfo';
import { camelCaseToWords } from '@/lib/utils/camelCaseToWords';

export const getDetailItems = (recipe: Recipe) => {
    const keyExcludes = ['label', 'thumbnail', 'url'];
    const detailItems: RecipeDetail[] = [];

    Object.entries(recipe).forEach(([key, value], index) => {
        if (keyExcludes.includes(key) || typeof value === 'object') return;

        detailItems.push({
            key: `${key}_${index}`,
            title: camelCaseToWords(key),
            value: Array.isArray(value) ? value.join() : value,
        });
    });

    return detailItems;
};
