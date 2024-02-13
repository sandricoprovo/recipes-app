import React, { ReactNode } from 'react';
import { MainStyled } from './Main.styled';

interface Props {
    children: ReactNode;
}

export function Main({ children }: Props) {
    return <MainStyled>{children}</MainStyled>;
}
