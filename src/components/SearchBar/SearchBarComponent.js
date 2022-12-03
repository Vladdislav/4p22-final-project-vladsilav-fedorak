import "./SearchBarComponent.css";

function SearchBarComponent({name, id, type, placeholder, onChange = () =>{}}){
    return (
      <>
        <input
          className="search-field"
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />

      </>
    );
  }

export default SearchBarComponent;
