import React from "react"
import './Footer.css'



const Footer = props => (
    <div id = "contato" className="Footer">
        <div className="contato">
            <h1>Entre em contato</h1>
            <p>devpedroantonio@gmail.com</p>
            <p>Uberaba - MG</p>
        </div>
        <div className="social-medias">
            <h1>Redes Sociais</h1>
            <a href="https://www.linkedin.com/in/pedro-alves1459/" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="https://github.com/ppedroalves" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
            <a href="https://www.instagram.com/pedroantonio0_" target="_blank" rel="noreferrer"><ion-icon name="logo-instagram"></ion-icon> </a>
        </div>
        <p className="copyright">&copy; Pedro Antônio - Todos os direitos reservados.</p>
    </div>
)


export default Footer