import React,{Component} from "react"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "../pages/Home"
import Marketplace from "../pages/Marketplace"

class AppRouter extends Component {
    render() {
      return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/marketplace" element={<Marketplace/>}/>
        </Routes>
        </BrowserRouter>
      )
    }
  }
  
  export default AppRouter