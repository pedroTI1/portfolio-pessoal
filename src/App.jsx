import React from 'react'
import './App.css'
import Footer from './views/Footer'


import Header from './views/Header'
import Projetos from './views/Projetos'



const App = (props) => (
      <div className="App">
            <Header />
            <Projetos/>
            <Footer/>
      </div>
)


export default App
