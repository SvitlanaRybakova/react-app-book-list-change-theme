import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvaider from './contexts/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvaider>
        <Navbar />
        <BookList />
        <ThemeToggle/>
      </ThemeContextProvaider>
    </div>
  );
}

export default App;
