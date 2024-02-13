import React from 'react';
import { BookMarksContainerStyled, BookMarksListStyled } from './Bookmarks.styled';

interface Props {
    children: React.ReactNode;
}

export function Bookmarks({ children }: Props) {
    return (
        <BookMarksContainerStyled>
            <h2>Bookmarks</h2>
            <BookMarksListStyled>{children}</BookMarksListStyled>
        </BookMarksContainerStyled>
    );
}
