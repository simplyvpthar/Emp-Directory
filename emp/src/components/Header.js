import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Tharavong Enterprise Employee Directory</h1>
        <p>Click on the name on the header to sort by name or use the search box to narrow your results.</p>
      </div>
    )
  }
}
