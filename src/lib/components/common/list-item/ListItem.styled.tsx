'use client';

import styled from 'styled-components';

export const ListItemStyled = styled.li`
    border: 2px solid lightgray;
    background-color: rgb(var(--background-rgb));
    list-style: none;
    border-radius: 6px;
    width: 90vw;
    max-width: 865px;
    padding: 16px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const ListItemControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;

    & > button {
        padding: 4px 24px;
        background-color: lightgray;
        border: none;
        border-radius: 6px;
    }

    & > a {
        text-decoration: none;
        display: inline;
        color: inherit;
        border: 2px solid lightgray;
        border-radius: 6px;
        padding: 2px 24px;
    }
`;
