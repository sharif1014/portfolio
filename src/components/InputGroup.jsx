import "./inputGroup.css"
const InputGroup = (props) => {
  return (
    <div className="inputGroup">
          <label className="label">{props.label}</label>
          <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} value={props.value}  required />
    </div>
  )
}

export default InputGroup