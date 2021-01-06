
const Input = ({ name, label, handleChange, value, type}) => (
    <>
        <label htmlFor={name} className="inputLabel playerLabel">{ label }</label>
        <input
            id={name}
            type={ type }
            onChange={ handleChange }
            value= { value }
        />
    </>
)

export default Input;