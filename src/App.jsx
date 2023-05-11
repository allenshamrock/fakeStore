//  import {useEffect, useState} from React
 import { BrowserRouter as  Router, Routes ,Route } from "react-router-dom"
 import Home from './Pages/Home'
 import Cart from './Pages/Cart'
 import { PulseLoader } from "react-spinners"
 import {ThankYou} from './Pages/ThankYou'
 import Header from "./Components/navbar/Header"
 import ProductDetails from './Pages/ProductsDetails'
 import { GlobalThemeProvider } from "./UseContext/ContextProvider";
 
function App() {
 
  const [theme] = GlobalThemeProvider();
 

  return (
    <Router>
  
    <div className={`${theme ? 'bg-black' : 'bg-white'}h-screen overflow-y-auto`} >

      
    <Header/>

      <Routes>
     
       <Route path="/" element={<Home/>}/> 
       <Route path="product-details/:id" element={<ProductDetails/>}/> 
       <Route path="/Cart" element={<Cart/>}/> 
      <Route path="/ThankYou" element={<ThankYou/>}/>
    </Routes >
    
    </div>
    </Router>
  )
}

export default App
