import { API_ENDPOINT } from '../const';

export const fetchRecipes = async (query: string) => {
    const res = await fetch(`${API_ENDPOINT}&q=${query}`);
    const results = await res.json();

    return results;
};
