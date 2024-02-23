'use client';

import { Main } from '@/lib/components/main/Main';
import { Header } from '@/lib/components/header/Header';
import { SearchField } from '@/lib/components/search/SearchField';
import { Bookmarks } from '@/lib/components/bookmarks/Bookmarks';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { SearchResultsStyled } from '@/lib/components/search/Search.styled';
import { normalizeRecipe } from '@/lib/utils/normailizeRecipe';
import { ListItem } from '@/lib/components/common/list-item/ListItem';
import { fetchRecipes } from '@/lib/data/fetchRecipes';
import { RecipeInfo } from '@/lib/components/recipeinfo/RecipeInfo';
import { ApiRecipeHit, Recipe } from '@/lib/types';

export default function Home() {
    const [input, setInput] = useState<string>('');
    const [searchResults, setSearchResults] = useState<ApiRecipeHit[]>([]);
    const [bookmarks, setBookmarks] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const debouncedSearchValue = useDebounce<string>(input);

    const clearSearchResults = () => {
        if (searchResults.length <= 0) return;
        setSearchResults([]);
    };

    const closeRecipeInfoView = () => {
        setSelectedRecipe(null);
    };

    const addToBookmarks = (recipe: Recipe) => {
        const isAlreadyBookMarked = bookmarks.some((bookmark) => bookmark.url === recipe.url);
        if (isAlreadyBookMarked) return;

        const updatedBookmarks = [...bookmarks, recipe];
        setBookmarks(updatedBookmarks);
        setInput('');
        clearSearchResults();
        closeRecipeInfoView();
    };

    const showRecipeDetails = (recipe: Recipe) => {
        if (!recipe.label) return;
        setSelectedRecipe(recipe);
    };

    useEffect(() => {
        if (!debouncedSearchValue) {
            clearSearchResults();
            return;
        }

        (async () => {
            try {
                const results = await fetchRecipes(debouncedSearchValue);
                if (!results) return;
                setSearchResults(results.hits);
            } catch (e) {
                console.log(e);
            }
        })();
    }, [debouncedSearchValue]);

    return (
        <Main>
            <Header />
            <SearchField searchValue={input} updateSearchValue={setInput}>
                {searchResults.length > 0 && (
                    <SearchResultsStyled>
                        {searchResults.map((hit, index) => {
                            const normalizedRecipe = normalizeRecipe(hit);
                            if (!normalizedRecipe) return <></>;

                            const { label } = normalizedRecipe;

                            return (
                                <ListItem
                                    key={`${label.toLowerCase()}_${index}`}
                                    label={label}
                                    clickHandler={() => showRecipeDetails(normalizedRecipe)}
                                />
                            );
                        })}
                    </SearchResultsStyled>
                )}
            </SearchField>
            <Bookmarks>
                {bookmarks.length > 0 &&
                    bookmarks.map((bookmark) => {
                        const { label } = bookmark;
                        return (
                            <ListItem
                                key={label}
                                label={label}
                                clickHandler={() => showRecipeDetails(bookmark)}
                            />
                        );
                    })}
            </Bookmarks>
            <RecipeInfo
                recipe={selectedRecipe}
                closeDialog={closeRecipeInfoView}
                addToBookMarks={addToBookmarks}
            />
        </Main>
    );
}
