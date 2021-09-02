import React from 'react';
import Style from './Delete.module.css'
import DeleteSA from './DeleteSemAlcool';
import DeleteCA from './DeleteComAlcool'


const Create = () => {
    return(
        <main className={Style.main}>
            <div className={Style.div}>
            <DeleteSA/>
            <DeleteCA/>
            </div>
        </main>
    )
}

export default Create