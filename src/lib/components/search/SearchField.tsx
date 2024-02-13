'use client';

import React, { ChangeEvent } from 'react';
import { SearchContainerStyled, SearchInputStyled, SearchLabelStyled } from './Search.styled';

interface Props {
    children: React.ReactNode;
    searchValue: string;
    updateSearchValue: (input: string) => void;
}

export function SearchField({ updateSearchValue, children, searchValue }: Props) {
    const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        updateSearchValue(e.target.value);
    };

    return (
        <SearchContainerStyled>
            <form action="">
                <SearchLabelStyled htmlFor="recipe-search">
                    Search For Recipes Here
                    <SearchInputStyled
                        name="recipe-search"
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                    />
                </SearchLabelStyled>
            </form>
            {children}
        </SearchContainerStyled>
    );
}
