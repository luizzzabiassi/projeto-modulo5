import React, {useState} from 'react';
import Style from './Update.module.css'


const UpdateSA = () => {
    const [IDSA, setIDSA] = useState(null)
    const [NOMESA, setNOMESA] = useState(undefined)
    const [VALORSA, setVALORSA] = useState(undefined)
    
    const selecionaID = (event) =>{
        setIDSA(event.target.value)
    }

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
            ID:IDSA,
            NOME: NOMESA,
            VALOR: VALORSA
        };

            
            console.log(IDSA)
            fetch(`https://pub-t5.herokuapp.com/bebidas_sem_alcool/${IDSA}`, {
            method: 'PUT',
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
            <h1 className={Style.h1}>Bebidas sem Álcool</h1>
                <form onSubmit={submit} className={Style.form}>
                    <label className={Style.label} >Id da bebida a ser atualizada.</label>
                    <input className={Style.input}
                    type="number"
                    value={IDSA}
                    onChange={selecionaID}
                    required/>
                    {IDSA !== null 
                    ? <>
                    <label className={Style.label} >Nome:</label>
                    <input className={Style.input}
                        type="text"
                        value={NOMESA}
                        onChange={changeNOMESA}
                        />

                    <label className={Style.label}>Valor:</label>
                    <input className={Style.input}
                    type="number"
                    step="0.01" 
                    value={VALORSA} 
                    onChange={changeVALORSA}
                    />
                    <input className={Style.submit} type="submit" value="Enviar" /></>
                    :null}
                    

                    
                </form>
            </section>
    )
}

export default UpdateSA