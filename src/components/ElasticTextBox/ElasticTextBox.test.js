import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
            success: 'Success Message',
        });
        expect(screen.getByText('Success Message')).toBeInTheDocument();
    });

    it('typing into textarea updates value', () => {
        const { handleChange } = setup({ id: 'textbox', onChange: jest.fn() });
        const textarea = screen.getByRole("textbox");
        fireEvent.input(textarea, { target: { value: 'lonebaaris' } });
        expect(textarea.value).toBe("lonebaaris");
        expect(handleChange).toHaveBeenCalled();
    });
});
