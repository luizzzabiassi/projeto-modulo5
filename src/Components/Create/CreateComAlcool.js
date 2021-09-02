import React, {useState} from 'react';
import Style from './Create.module.css'

const CreateCA = () => {
    const [NOMECA, setNOMECA] = useState(undefined);
    const [TEOR, setTEOR] = useState(undefined);
    const [VALORCA, setVALORCA] = useState(undefined);
    
    const changeNOMECA = (event) =>{
        console.log(event.target.value);
        setNOMECA(event.target.value)
    };

    const changeTEOR = (event) =>{
        console.log(event.target.value);
        setTEOR(event.target.value)
    };

    const changeVALORCA = (event) =>{
        console.log(event.target.value);
        setVALORCA(event.target.value)
    };
    
    const submitCA = (event) => {
        event.preventDefault();
        
        let body = {
            NOME: NOMECA,
            TEOR_ALCOOLICO: TEOR,
            VALOR: VALORCA
        };

            console.log(body)

            fetch('https://pub-t5.herokuapp.com/bebidas_com_alcool', {
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
            <h1>Bebidas com Álcool</h1>
            <form onSubmit={submitCA} className={Style.form}>
                    <label >Nome:</label>
                    <input className={Style.input}
                    type="text"
                    value={NOMECA}
                    onChange={changeNOMECA}
                    required/>
                    
                    <label >Teor Alcólico:</label>
                    <input className={Style.input}
                    type="number" 
                    value={TEOR} 
                    onChange={changeTEOR}
                    required/>
                    
                    <label >Valor:</label>
                    <input className={Style.input}
                    type="number" 
                    value={VALORCA} 
                    onChange={changeVALORCA}
                    required/>

                    <input className={Style.submit} type="submit" value="Enviar" />
                </form>
                </section>
    )
}

export default CreateCA