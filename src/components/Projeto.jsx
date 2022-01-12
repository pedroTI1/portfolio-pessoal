import React from "react"
import './Projeto.css'


const Projeto = props => (
    <main className="Projeto">
            <div className="box">
                <div className="content">
                    {props.title ?
                        <h3>{props.title}</h3>
                        : <h3>Projeto</h3>
                    }
                      {props.description ?
                        <p>{props.description}</p>
                        : <p>Projeto pessoal</p>
                    }
                    <a href="#" target="_blank" rel="noreferrer">GITHUB</a>
                </div>
            </div>
    </main>
)


export default Projeto
