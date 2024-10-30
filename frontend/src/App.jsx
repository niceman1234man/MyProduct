import React from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route 
        path='/' 
        element={
          <>
            <Header />
            <HomeScreen />
            <Footer />
          </>
        }
      />
      <Route path='/product/:id' element={<ProductScreen />} />
    </Routes>
  );
}

export default App;