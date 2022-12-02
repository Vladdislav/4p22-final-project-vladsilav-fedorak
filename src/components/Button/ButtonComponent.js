import './ButtonComponent.css';

function ButtonComponent({name, id , type, className, value, children}) {
    return(
        <>
        <button 
        name={name}
        id={id}
        type={type}
        className={className}
        value={value}
        >{children}</button>
        </>
    )
}
export default ButtonComponent;