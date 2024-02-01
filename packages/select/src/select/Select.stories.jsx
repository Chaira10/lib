import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Select } from './Select';
import './Select.css';
import PropTypes from 'prop-types';


export default {
  title: 'Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' }, // Contrôle de type texte pour la prop id
    name: { control: 'text' }, // Contrôle de type texte pour la prop name
    onChange: { control: null }, // Désactive le contrôle pour la prop onChange car elle est gérée par l'événement
    
  },
};

const options = ['Option 1', 'Option 2', 'Option 3'];

export const SelectWithState = () => {
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleChange = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      action('selected')(event); // Enregistre l'événement onChange
    };
  

    return (
        <Select
          id="select"
          name="select"
          value={selectedValue}
          onChange={handleChange}
          placeholder="Choose an option"
          options={options}
        />
      );
    };

// Select.propTypes = {
//   /**
//    * L'identifiant du select
//    */
//   id: PropTypes.string,
//   /**
//    * La valeur sélectionnée du select
//    */
//   value: PropTypes.string,
//   /**
//    * La fonction appelée lorsqu'une option est sélectionnée
//    */
//   onChange: PropTypes.func,
//   /**
//    * Le texte de l'option par défaut (placeholder)
//    */
//   placeholder: PropTypes.string,
//   /**
//    * La liste des options du select
//    */
//   options: PropTypes.arrayOf(PropTypes.string),
//   /**
//    * Le nom du select
//    */
//   name: PropTypes.string,
// };
      
// Select.defaultProps = {
//   id: null,
//   value: '',
//   onChange: () => {},
//   placeholder: 'Choose an option',
//   options: [],
//   name: null,
// };


