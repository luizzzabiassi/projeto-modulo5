import React, {useState, useEffect} from 'react';
import Style from './Create.module.css'
import Accordion from '../Accordion/Accordion';

const CreateSA = () => {
    const [NOMESA, setNOMESA] = useState(undefined)
    const [VALORSA, setVALORSA] = useState(undefined)
    
    const changeNOMESA = (event) =>{
        console.log(event.target.value);
        setNOMESA(event.target.value)
    }

    const changeVALORSA = (event) =>{
        console.log(event.target.value);
        setVALORSA(event.target.value)
    }
    
    const submit = (event) => {
        event.preventDefault();
        
        let body = {
            NOME: NOMESA,
            VALOR: VALORSA
        };

            console.log(body)

            fetch('https://pub-t5.herokuapp.com/bebidas_sem_alcool', {
            method: 'POST',
            headers:{
                'Acess-Control-Origin': '*',
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body:JSON.stringify(body)
            })
            .then(resp => resp.json())
            .then(body => console.log(body))
            .catch(err => console.log(err))
        }

    return(
            <section>
            <h1>Bebidas Sem Álcool</h1>
                <form onSubmit={submit} className={Style.form}>
                    <label className={Style.input}>Nome:</label>
                    <input 
                        type="text"
                        value={NOMESA}
                        onChange={changeNOMESA}
                        required/>

                    <label className={Style.input}>Valor:</label>
                    <input 
                    type="number"
                    step="0.01" 
                    value={VALORSA} 
                    onChange={changeVALORSA}
                    required/>

                    <input className={Style.submit} type="submit" value="Enviar" />
                </form>
            </section>
    )
}

export default CreateSA