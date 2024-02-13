'use client';

import styled from 'styled-components';

export const SearchContainerStyled = styled.section`
    width: 100%;
    padding-block-end: 40px;
    position: relative;
`;

export const SearchLabelStyled = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const SearchInputStyled = styled.input`
    width: 80vw;
    max-width: 400px;
    padding: 12px 8px;
    border: 2px solid lightgray;
    border-radius: 6px;
`;

export const SearchResultsStyled = styled.ul`
    z-index: 100;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 24px);
    overflow: scroll;
    max-height: 400px;

    display: flex;
    flex-direction: column;
    gap: 8px;
`;
