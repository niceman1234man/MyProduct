import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Product from './components/Product.jsx'
import ProductScreen from './screens/ProductScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route 
        path='/' 
        element={
          <>
            
            <Product />
            
          </>
        }
      />
      <Route path='/product/:id' element={<ProductScreen />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;