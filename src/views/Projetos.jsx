import React from "react"
import './Projetos.css'

import Projeto from "../components/Projeto"



import Calc from '../assets/calc.png'


import Page from '../assets/page.png'

import Java from '../assets/java.png'



const Projetos = props => (
    <main id="projetos" className="Projetos">
        <h1>Projetos</h1>
        <Projeto title="Calculadora"
            description="Projeto de uma calculadora simples com um seletor de temas. O projeto foi feito utilizando HTML, CSS e JavaScript Puro."
            image={Calc}
            link="https://github.com/pedroTI1/projetoCalculadora" />
        <Projeto title="LP Agência Bold"
            description="Landing Page de uma Agência. Projeto desenvolvido durante o curso de front-end da DankiCode. O objetivo era treinar os conhecimentos em HTML e CSS."
            image={Page}
            link="https://github.com/pedroTI1/paginaHTML" />
        <Projeto title="Bank Account"
            description="Parte back-end de um trabalho final da faculdade. O projeto consistia em realizar empréstimos para clientes e foi desenvolvido utilizando tecnologias como Spring Boot, JPA/Hibernate, Thymeleaf."
            image={Java} 
            link = "https://github.com/pedroTI1/emprestimo"/>
        <div className="btn-portfolio">
            <a href="https://github.com/pedroTI1" target="_blank" rel="noreferrer">Confira mais projetos aqui!</a>
        </div>

    </main>
)


export default Projetos