import { useDispatch, useSelector } from "react-redux";
import { setInputValue } from "../../store/Input/InputSlice";
import "./SearchBarComponent.css";

function SearchBarComponent({name, id, type, placeholder}){


  const dispatch = useDispatch();

  return (    
      <>
        <input
          className="search-field"
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        />

      </>
    );
  }

export default SearchBarComponent;
