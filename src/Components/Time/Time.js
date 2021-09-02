import React from 'react';
import style from "./Time.module.css";
import IconGithub from './Imagem/Github.png';
import IconLinkedin from './Imagem/Linkedin.png';
import FotoLucas from "./Imagem/FotoLucas.jpg";
import FotoLuiza from "./Imagem/FotoLuiza.jpg";
import FotoHien from "./Imagem/FotoHien.jpg";
import FotoLuany from "./Imagem/FotoLu.jpg";
import styled from 'styled-components';

const Time = () => {
    return ( 
    <main className={style.main}>
       <section className={style.card1}>
            <Foto alt='Foto do Lucas' src={FotoLucas}/>
            <p>Nome: Lucas </p>
            <p>Idade: 22</p>
            <p>
                <a href="https://www.linkedin.com/in/lucascamisao/"><img src={IconLinkedin} /></a>
                <a href="https://github.com/Gonary"><img src={IconGithub}/></a>
            </p>
        </section>
        <section className={style.card2}>
        <Foto alt='Foto da Luany' src={FotoLuany}/>
            <p>Nome: Luany </p>
            <p>Idade: 23</p>
            <p>
                <a href="https://www.linkedin.com/in/luanyss/"><img src={IconLinkedin} /></a>
                <a href="https://github.com/luanyss"><img src={IconGithub}/></a>
            </p>
        </section>
        <section className={style.card3}>
        <Foto alt='Foto da Luiza' src={FotoLuiza}/>
            <p>Nome: Luiza </p>
            <p>Idade: 19</p>
            <p> 
                <a href="https://www.linkedin.com/in/luizzzabiassi/"><img src={IconLinkedin} /></a>
                <a href="https://github.com/luizzzabiassi"><img src={IconGithub}/></a>
            </p>
        </section>
       <section className={style.card4}>
       <Foto alt='Foto do Hiensen' src={FotoHien}/>
            <p>Nome: Hiensen </p>
            <p>Idade: 27</p>
            <p>
                <a href="https://www.linkedin.com/in/hiensen-lima-35370b202/"><img src={IconLinkedin} /></a>
                <a href="https://github.com/hiensenn"><img src={IconGithub}/></a>
            </p>
        </section> 
    </main> 
    );
}
const Foto = styled.img `
width: 200px;
height:200px;
border-radius: 100px;
`

export default Time;