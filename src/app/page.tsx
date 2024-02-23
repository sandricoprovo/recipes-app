'use client';

import { Main } from '@/lib/components/main/Main';
import { Header } from '@/lib/components/header/Header';
import { SearchField } from '@/lib/components/search/SearchField';
import { Bookmarks } from '@/lib/components/bookmarks/Bookmarks';
import { useCallback, useEffect, useState } from 'react';
import { useDebounce } from '@/lib/hooks/useDebounce';
import { SearchResultsStyled } from '@/lib/components/search/Search.styled';
import { normalizeRecipe } from '@/lib/utils/normailizeRecipe';
import { ListItem } from '@/lib/components/common/list-item/ListItem';
import { fetchRecipes } from '@/lib/data/fetchRecipes';

export default function Home() {
    const [input, setInput] = useState<string>('');
    const [searchResults, setSearchResults] = useState<ApiRecipeHit[]>([]);
    const [bookmarks, setBookmarks] = useState<Recipe[]>([]);
    const debouncedSearchValue = useDebounce<string>(input);

    const addToBookmarks = (recipe: Recipe) => {
        const isAlreadyBookMarked = bookmarks.some((bookmark) => bookmark.url === recipe.url);
        if (isAlreadyBookMarked) return;

        const updatedBookmarks = [...bookmarks, recipe];
        setBookmarks(updatedBookmarks);
        setInput('');
    };

    const clearSearchResults = () => {
        if (searchResults.length <= 0) return;
        setSearchResults([]);
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
                        {searchResults.map((hit) => {
                            const normalizedRecipe = normalizeRecipe(hit);
                            if (!normalizedRecipe.label) return <></>;

                            const { label, url } = normalizedRecipe;

                            return (
                                <ListItem key={label} label={label}>
                                    <button onClick={() => addToBookmarks({ label, url })}>
                                        Bookmark
                                    </button>
                                    <a href={url} target="_blank" rel="noreferrer noopener">
                                        Visit
                                    </a>
                                </ListItem>
                            );
                        })}
                    </SearchResultsStyled>
                )}
            </SearchField>
            <Bookmarks>
                {bookmarks.length > 0 &&
                    bookmarks.map((bookmark) => {
                        const { label, url } = bookmark;
                        return (
                            <ListItem key={label} label={label}>
                                <a href={url} target="_blank" rel="noreferrer noopener">
                                    Visit
                                </a>
                            </ListItem>
                        );
                    })}
            </Bookmarks>
        </Main>
    );
}
