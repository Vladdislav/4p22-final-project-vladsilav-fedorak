import React from "react";
import "./SearchBarComponent.css";
import SearchBar from "../../assets/searchbar-icon.svg";


class SearchBarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }
  render() {
    const {name, id, type, placeholder} = this.props;
    return (
      
      <>
        <input
          className="search-field"
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={(e) => this.setState({searchField: e.target.value})}
        />
        <img id="search-bar-icon" className="search-icon" src={SearchBar} alt="search bar"/>
      </>
    );
  }
}

export default SearchBarComponent;
