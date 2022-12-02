import React from "react";
import "./SearchBarComponent.css";


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

      </>
    );
  }
}

export default SearchBarComponent;
