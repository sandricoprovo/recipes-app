'use client';

import styled from 'styled-components';

export const BookMarksContainerStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const BookMarksListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const BookMarkStyled = styled.li`
    border: 2px solid lightgray;
    background-color: rgb(var(--background-rgb));
    list-style: none;
    border-radius: 6px;
    width: 80vw;
    max-width: 865px;
    padding: 24px;
`;
