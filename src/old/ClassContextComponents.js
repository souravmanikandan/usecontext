import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class ClassContextComponents extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#000" : "#fff",
      color: dark ? "#fff" : "#000",
      margin: "2rem",
      padding: "2rem",
    };
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {(darkTheme) => {
          return <div style={this.themeStyles(darkTheme)}>class</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
