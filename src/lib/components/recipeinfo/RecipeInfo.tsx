import { Recipe } from '@/lib/types';
import {
    RecipeDetailContainer,
    RecipeInfoContainer,
    RecipeInfoDetails,
    RecipeInfoExternalLink,
} from './RecipeInfo.styled';
import React from 'react';
import Image from 'next/image';
import { ListItemControls } from '../common/list-item/ListItem.styled';
import { getDetailItems } from './helpers/getDetailItems';

export type RecipeDetail = {
    title: string;
    value: string | number;
    key: string;
};

interface Props {
    recipe: Recipe | null;
    closeDialog: () => void;
    addToBookMarks: (recipe: Recipe) => void;
}

export function RecipeInfo({ recipe, closeDialog, addToBookMarks }: Props) {
    if (!recipe) return null;
    const { label, thumbnail, url } = recipe;

    return (
        <RecipeInfoContainer open={!!recipe}>
            <Image
                src={thumbnail.url}
                alt={`Thumbnail for ${label} dish.`}
                width={thumbnail.width}
                height={thumbnail.height}
            />
            <h3>{label}</h3>
            <RecipeInfoDetails>
                {(getDetailItems(recipe) || []).map(({ title, value, key }) => (
                    <RecipeDetailContainer key={key}>
                        <p>{title}</p>
                        <p>{value}</p>
                    </RecipeDetailContainer>
                ))}
            </RecipeInfoDetails>
            <ListItemControls>
                <RecipeInfoExternalLink href={url} target="_blank" rel="noreferrer noopener">
                    View More
                </RecipeInfoExternalLink>
                <button onClick={() => addToBookMarks(recipe)}>Add To Bookmarks</button>
                <button onClick={closeDialog}>Close</button>
            </ListItemControls>
        </RecipeInfoContainer>
    );
}
