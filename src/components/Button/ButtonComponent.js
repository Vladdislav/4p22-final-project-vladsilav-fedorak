import './ButtonComponent.css';

function ButtonComponent(name, id , type, className, value) {
    return(
        <>
        <button 
        name={name}
        id={id}
        type={type}
        className={className}
        value={value}
        ></button>
        </>
    )
}
export default ButtonComponent;