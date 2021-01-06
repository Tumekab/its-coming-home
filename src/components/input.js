
const Input = ({ name, label, handleChange, value, type}) => (
    <div>
        <label htmlFor={name} className="inputLabel playerLabel">{ label }</label>
        <input
            id={name}
            type={ type }
            onChange={ handleChange }
            value= { value }
        />
    </div>
)

export default Input;