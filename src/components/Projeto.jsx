import React from "react"
import './Projeto.css'


const Projeto = props => (
    <main className="Projeto">
        <div className="center">
            <div className="img-projeto">
                <img src={props.image} alt="Imagem do Projeto" />
            </div>
            <div className="content">

                {props.title ?
                    <h2>{props.title}</h2>
                    : <h3>Projeto</h3>
                }
                {props.description ?
                    <p>{props.description}</p>
                    : <p>Projeto pessoal</p>
                }
                <a href={props.link} target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
            </div>
        </div>
    </main >
)


export default Projeto
