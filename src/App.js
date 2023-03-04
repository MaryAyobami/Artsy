import React from 'react';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
        <Header />
        <AppRouter/>
        <Footer/>
    </React.Fragment>
  );
}

export default App;
