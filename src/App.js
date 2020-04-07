import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './container/SearchForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Search-React Example</p>
        <SearchForm />        
      </header>
    </div>
  );
}

export default App;
