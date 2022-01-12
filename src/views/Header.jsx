import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Header.css'



import Curriculo from '../assets/cv__PedroAntonio.pdf'


const Header = props => (
    <main id="header" className="Header">
        <nav>
            <h2>Pedro Antônio</h2>
            <ul>
                <li><AnchorLink href='#'>Inicio</AnchorLink></li>
                <li><AnchorLink href='#projetos'>Projetos</AnchorLink></li>
                <li><AnchorLink href='#contato'>Contato</AnchorLink></li>
            </ul>
        </nav>
        <div className="center">
            <p>Olá! Meu nome é <span>Pedro Antônio</span></p>
            <h1>Estudante de Engenharia da Computação e Desenvolver Web</h1>
            <div className="btn">
                <a href={Curriculo}>Baixar Curriculo</a>
            </div>
        </div>
    </main>
)


export default Header