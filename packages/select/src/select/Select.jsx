
import './Select.css'

function Select() {
  return (
    <select name={name} id={id} value={value} onChange={onChange} className="inputs">
    <option value="" disabled hidden>{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default Select