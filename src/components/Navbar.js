import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  

  render() {
;


    return (
      // другой способ передать контекст через Comsumer
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;

        return (
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Content App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </nav>
        )
      }}

      </ThemeContext.Consumer>
    )


  }
}
export default Navbar;