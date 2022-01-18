import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Header.css'



import Curriculo from '../assets/PedroAntonio_cv.pdf'


const Header = (props) => {
    return (
        <main id="header" className="Header">
            <div className="header-nav">
                <h2>Pedro Antônio</h2>
                <nav className="navbar">
                    <ul>
                        <li><AnchorLink href='#'>Inicio</AnchorLink></li>
                        <li><AnchorLink href='#projetos'>Projetos</AnchorLink></li>
                        <li><AnchorLink href='#contato'>Contato</AnchorLink></li>
                    </ul>
                </nav>
            </div>
            <div className="center">
                <p>Olá! Meu nome é <span>Pedro Antônio</span></p>
                <h1>Estudante de Engenharia da Computação e Desenvolvedor Web</h1>
                <div className="btn">
                    <a href={Curriculo}>Ver Currículo</a>
                </div>
            </div>
        </main>
    )

}


export default Header