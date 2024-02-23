import styled from 'styled-components';

export const RecipeInfoContainer = styled.dialog`
    padding: 20px;
    border-radius: 6px;
    position: absolute;
    width: 96vw;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 100;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
`;

export const RecipeInfoDetails = styled.div`
    width: 100%;
    max-width: 550px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
`;

export const RecipeDetailContainer = styled.div`
    border: 2px solid lightgray;
    padding: 12px;
    border-radius: 6px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;

    & > p:first-child {
        opacity: 0.6;
    }
`;

export const RecipeInfoExternalLink = styled.a`
    text-decoration: none;
    color: inherit;
`;
