import React from 'react';
import './App.css';
import { useGlobalContext } from './context'
// import components
import Navbar from './navbar';
import CartContainer from './cartContainer';


function App() {
  const { loading } = useGlobalContext()

  if (loading) {
    return (
      <div className="loading">
        <h1>loading....</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
