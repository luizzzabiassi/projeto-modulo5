import React from "react";
import style from "./CardTime.module.css"

const CardTime = (props) =>{
    const { nome, idade, linkedin, github, imagem, iconLinkedin, iconGithub } = props

    return(
    
        <section>
            <img src={imagem}/>
            <p>Nome: {nome} </p>
            <p>Idade: {idade}</p>
            <p>Redes Sociais: 
                <a href={linkedin}><img src={iconLinkedin} /></a>
                <a href={github} >{iconGithub}</a> 
            </p>
            
        </section>
    
    )
}

export default CardTime