import React, { Component } from "react";
import styles from "./Filter.module.css";

class Filter extends Component {
  state = {
    inputValue: "",
  };
  enableFilter = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
    this.props.filterContact(event.target.value);
  };

  render() {
    return (
      <div className={styles.filterForm}>
        <label htmlFor="findContact">Find contacts by name</label>
        <input
          type="text"
          name="findContact"
          id="findContact"
          value={this.state.inputValue}
          onChange={this.enableFilter}
        />
      </div>
    );
  }
}

export default Filter;
