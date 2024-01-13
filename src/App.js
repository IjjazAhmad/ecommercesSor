import React from 'react';
import './input.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './Pages/Routes';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </>
  );
}

export default App;
