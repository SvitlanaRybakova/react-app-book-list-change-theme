import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvaider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext'
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvaider>
          <AuthContextProvider>
          <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
          <ThemeToggle/>
        </AuthContextProvider>
      </ThemeContextProvaider>
    </div>
  );
}

export default App;
