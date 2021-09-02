import React, {useState} from 'react';
import Style from './Update.module.css'

const UpdateCA = () => {
    const [IDCA, setIDCA] = useState(null)
    const [NOMECA, setNOMECA] = useState(undefined);
    const [TEOR, setTEOR] = useState(undefined);
    const [VALORCA, setVALORCA] = useState(undefined);
    
    console.log(IDCA)

    const selecionaID = (event) =>{
        setIDCA(event.target.value)
    }
    
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
    
    const updateCA = (event) => {
        event.preventDefault();
        
        let body = {
            ID:IDCA,
            NOME: NOMECA,
            TEOR_ALCOOLICO: TEOR,
            VALOR: VALORCA
        };

            console.log(body)

            fetch(`https://pub-t5.herokuapp.com/bebidas_com_alcool/${IDCA}`, {
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
            <h1 className={Style.h1}>Bebidas com Álcool</h1>
            {console.log(IDCA)}
            <form onSubmit={updateCA} className={Style.form}>
                <label className={Style.label}>Id da bebida a ser atualizada.</label>
                <input className={Style.input}
                type="number"
                value={IDCA}
                onChange={selecionaID}
                required/>

                {IDCA !== null ? <>
                <label className={Style.label}>Nome:</label>
                <input className={Style.input}
                type="text" 
                value={NOMECA} 
                onChange={changeNOMECA} 
                />
                <label className={Style.label}>Teor Alcólico:</label>
                <input className={Style.input}
                type="number"
                step="0.01" 
                value={TEOR} 
                onChange={changeTEOR} 
                />
                <label className={Style.label}>Valor:</label>
                <input className={Style.input}
                type="number" 
                step="0.01" 
                value={VALORCA} 
                onChange={changeVALORCA} 
                />
                <input className={Style.submit} type="submit" value="Enviar" /></> : null}
                

                </form>
                </section>
    )
}

export default UpdateCA