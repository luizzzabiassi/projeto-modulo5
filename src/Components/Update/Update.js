import React from 'react';
import Style from './Update.module.css'
import Accordion from '../Accordion/Accordion';
import UpdateCA from './UpdateComAlcool';
import UpdateSA from './UpdateSemAlcool'


const Update = () => {
    return(
        <main className={Style.main}>
            <div className={Style.div}>
            <UpdateSA/>
            <UpdateCA/>
            </div>
        </main>
    )
}

export default Update