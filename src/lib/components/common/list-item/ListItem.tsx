'use client';

import React from 'react';
import { ListItemStyled } from './ListItem.styled';

interface Props {
    label: string;
    clickHandler: () => void;
}

export function ListItem({ label, clickHandler }: Props) {
    return (
        <ListItemStyled onClick={clickHandler}>
            <p>{label}</p>
        </ListItemStyled>
    );
}
