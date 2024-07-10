import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import ElasticTextBox from '../ElasticTextBox';

describe('ElasticTextBox Component', () => {
    const setup = (props = {}) => {
        const handleChange = jest.fn(); 
        render(<ElasticTextBox {...props} onChange={handleChange} />);
        return { handleChange };
    };

    it('renders with label and textarea', () => {
        render(
            <ElasticTextBox id="test-id" label="Elastic Text Input" value="" onChange={jest.fn()} />
        );
        expect(screen.getByText('Elastic Text Input')).toBeInTheDocument();
        expect(screen.getByLabelText('Elastic Text Input')).toBeInTheDocument();
    });

    it('displays error message', () => {
        setup({
            id: 'test-id',
            label: 'Elastic Text Input',
            value: '',
            error: 'Error message',
        });
        expect(screen.getByText('Error message')).toBeInTheDocument();
    });
    it('displays success message', () => {
        setup({
            id: 'test-id',
            label: 'Elastic Text Input',
            value: '',
            error: 'Success Message',
        });
        expect(screen.getByText('Success Message')).toBeInTheDocument();
    });
    
    it('handles input change', () => {
        const { handleChange } = setup({
            id: 'test-id',
            label: 'Elastic Text Input',
            value: '',
        });
        const textarea = screen.getByLabelText('Elastic Text Input');
        userEvent.type(textarea, 'New value');
        expect(handleChange).toHaveBeenCalled();
        expect(textarea).toHaveValue('New value');
    });

});
