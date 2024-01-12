import React from 'react';
import './input.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
