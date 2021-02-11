import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvaider from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvaider>
        <Navbar />
        <BookList />
      </ThemeContextProvaider>
    </div>
  );
}

export default App;
