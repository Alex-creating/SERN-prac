const InputBox = (props) => (
    <div>
        <input  type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                required={props.required}
                min = {props.min}
                max ={props.max} 
                /> 
       <br/>
    </div>
);

export default InputBox;