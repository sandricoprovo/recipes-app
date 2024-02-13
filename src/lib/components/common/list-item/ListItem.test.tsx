import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ListItem } from './ListItem';

const mockListItemClick = vi.fn(() => {});
const props = {
    label: 'test label',
};

describe('ListItem Component', () => {
    it('should render with given props and hidden controls', () => {
        render(
            <ListItem {...props}>
                <button onClick={mockListItemClick}>Bookmark</button>
            </ListItem>
        );

        const label = screen.getByText(props.label);
        const buttonChild = screen.queryByRole('button', { name: 'Bookmark' });

        expect(label).toBeDefined();
        expect(buttonChild).toBeNull();
    });
});
