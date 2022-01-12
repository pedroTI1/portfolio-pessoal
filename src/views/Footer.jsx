import React from "react"
import './Footer.css'



const Footer = props => (
    <div className="Footer">
        <div className="contato">
            <h1>Entre em contato</h1>
            <p>pedro.antonio@estudante.iftm.edu.br</p>
            <p>Uberaba - MG</p>
        </div>
        <div className="social-medias">
            <h1>Redes Sociais</h1>
            <a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="#"><ion-icon name="logo-github"></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram"></ion-icon> </a>
        </div>
        <p className="copyright">&copy; Pedro Antônio - Todos os direitos reservados.</p>
    </div>
)


export default Footer