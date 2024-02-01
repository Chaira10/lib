import { vi, describe, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Select from "./Select";



describe('test composant select', () => {
    test('test id', () => {
        const { getByTestId} = render(<Select id='id-select-test' />)
        expect(getByTestId('id-select-test')).toBeTruthy()
    });

    test('test changement de valeur', () => {
        const mockOnChange = vi.fn();
        const options = ["Option 1", "Option 2", "Option 3"];
        const { getByTestId } = render(
            <Select
                id='id-select-test'
                value=""
                onChange={mockOnChange}
                placeholder="Sélectionnez une option"
                options={options}
                name="test-select"
            />
        );
    
        const selectElement = getByTestId('id-select-test');
        fireEvent.change(selectElement, { target: { value: "Option 1" } });
    
        expect(mockOnChange).toHaveBeenCalled("Option 1"); // Vérifie que mockOnChange est appelé avec la valeur attendue
    });
    
    
    

    test('test rendu des options', () => {
        const options = ["Option 1", "Option 2", "Option 3"];
        const { getAllByRole } = render(
            <Select
                id='id-select-test'
                value=""
                onChange={() => {}}
                placeholder="Sélectionnez une option"
                options={options}
                name="test-select"
            />
        );
    
        const optionElements = getAllByRole('option');
    
        // Nous nous attendons à ce qu'il y ait une option de plus que le nombre d'options
        expect(optionElements.length).toBe(options.length ); // +1 pour l'option placeholder
    });

    test('test name', () => {
        const testName = 'test-select';
        const { container } = render(<Select id='id-select-test' name={testName} />);
        const selectElement = container.querySelector('select');
    
        expect(selectElement.getAttribute('name')).toBe(testName);
    });

    test('test valeur par défaut (placeholder)', () => {
        const testPlaceholder = 'Sélectionnez une option';
        const { queryByText } = render(
            <Select
                id='id-select-test'
                value=""
                onChange={() => {}}
                placeholder={testPlaceholder}
                options={[]}
                name="test-select"
            />
        );
        expect(queryByText(testPlaceholder)).toBeTruthy();
    });
    
    test('test valeur par défaut (value)', () => {
        const testValue = "Option 1"; // La valeur par défaut que vous souhaitez tester
        const options = ["Option 1", "Option 2", "Option 3"];
        const { getByTestId } = render(
            <Select
                id='id-select-test'
                value={testValue}
                onChange={() => {}}
                placeholder="Sélectionnez une option"
                options={options}
                name="test-select"
            />
        );
    
        const selectElement = getByTestId('id-select-test');
    
        expect(selectElement.value).toBe(testValue);
    });
    
    
    
} )