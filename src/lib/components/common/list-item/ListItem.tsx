'use client';

import React, { useState } from 'react';
import { ListItemControls, ListItemStyled } from './ListItem.styled';

interface Props {
    label: string;
    children: React.ReactNode;
}

export function ListItem({ label, children }: Props) {
    const [showDetails, setShowDetails] = useState<boolean>(false);

    const handleClick = () => {
        if (!showDetails) setShowDetails(true);
        else setShowDetails(false);
    };

    return (
        <ListItemStyled onClick={handleClick}>
            <p>{label}</p>
            {showDetails && <ListItemControls>{children}</ListItemControls>}
        </ListItemStyled>
    );
}
