import React from 'react';
import Style from './Create.module.css'
import Accordion from '../Accordion/Accordion';
import CreateCA from './CreateComAlcool';
import CreateSA from './CreateSemAlcool'


const Create = () => {
    return(
        <main className={Style.main}>
            <div className={Style.div}>
            <CreateSA/>
            <CreateCA/>
            </div>
        </main>
    )
}

export default Create