import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  // так как использую класс, другой метод передачи контекста
  // contextType обязательное навзвание, ему присваиваю переменную в которой есть контекст
  static contextType = ThemeContext;

  render(){
    // показывает доступ к контексту через contextType
    console.log(this.context);
    // destructuring
    const { isLightTheme, light, dark } = this.context;
    console.log(isLightTheme, light, dark);
    
    const theme = isLightTheme ? light : dark;
    return( 
      <nav style={{ background: theme.ui,  color: theme.syntax}}>
      <h1>Content App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      </nav> 
    )
      
    
  }
}
export default Navbar;