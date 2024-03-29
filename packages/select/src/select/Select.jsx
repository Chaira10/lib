import React from 'react';
import PropTypes from 'prop-types';
import './Select.css'

/**
 * Composant Select
 * 
 * ### Usage
 * 
 * ````jsx
@param {string} id - L'identifiant du select.
 * @param {string} value - La valeur sélectionnée du select.
 * @param {function} onChange - La fonction appelée lorsqu'une option est sélectionnée.
 * @param {string} placeholder - Le texte de l'option par défaut (placeholder).
 * @param {array} options - La liste des options du select.
 * @param {string} name - Le nom du select.
 * @returns {JSX.Element} - Le composant Select.
 * 
 * @example
 * <Select
 *   id="example-select"
 *   value={selectedValue}
 *   onChange={handleChange}
 *   placeholder="Choisissez une option"
 *   options={['Option 1', 'Option 2', 'Option 3']}
 *   name="example"
 * />
 * ````
 * 
 * 
 */


export function Select({ id , value, onChange, placeholder, options, name}) {
  return (
    <select name={name} data-testid={id} value={value} onChange={onChange} className="inputs">
    <option value="" disabled hidden>{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

/**
//  * Composant Select
//  */
// export const Select = ({ id , value, onChange, placeholder, options, name}) => {
//   return (
//     <select
//       name={name} id={id} value={value} onChange={onChange} className="inputs">
//       <option value="" disabled hidden>{placeholder}</option>
//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };

Select.propTypes = {
  /**
   * L'identifiant du select
   */
  id: PropTypes.string,
  /**
   * La valeur sélectionnée du select
   */
  value: PropTypes.string,
  /**
   * La fonction appelée lorsqu'une option est sélectionnée
   */
  onChange: PropTypes.func,
  /**
   * Le texte de l'option par défaut (placeholder)
   */
  placeholder: PropTypes.string,
  /**
   * La liste des options du select
   */
  options: PropTypes.arrayOf(PropTypes.string),
  /**
   * Le nom du select
   */
  name: PropTypes.string,
};

Select.defaultProps = {
  id: null,
  value: '',
  onChange: () => {},
  placeholder: 'Choose an option',
  options: [],
  name: null,
};

export default Select;