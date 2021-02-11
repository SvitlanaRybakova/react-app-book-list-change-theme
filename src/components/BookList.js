import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

class BookList extends Component {
  // так как использую класс, другой метод передачи контекста
  // contextType обязательное навзвание, ему присваиваю переменную в которой есть контекст

  static contextType = ThemeContext;

  render() {

    // показывает доступ к контексту через contextType
    // console.log(this.context)
    // dustructuring
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
        <ul>
          <li style={{ background: theme.ui }}>the name of the wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
          <li style={{ background: theme.ui }}>the way of kings</li>
        </ul>
      </div>

    )


  }
}
export default BookList;