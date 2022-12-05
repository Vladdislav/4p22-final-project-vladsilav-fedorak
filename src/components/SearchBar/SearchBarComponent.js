import "./SearchBarComponent.css";

function SearchBarComponent({name, id, type, placeholder, onChange = () =>{}}){
  // const [inputValue, setInputValue] = useState("");
  // const [filterProduct, setFilterProduct] = useState([]);
  //     useEffect(() => {
  //       let filteredProduct = [];
  //       filteredProduct = products.filter((item) =>
  //         item.title.toLowerCase().includes(inputValue.toLowerCase())
  //       );
  //       setFilterProduct(filteredProduct);
  //     }, [inputValue, products]); 
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
