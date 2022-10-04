import React, { useState } from 'react';
import styles from './_style.module.scss'

const MyInput = ({title}) => {
    const [changeInput, setChangeInput] = useState();
    
    return (
        <div className={styles.inputBody}>

            <span className={styles.inputTitle}>{title}</span>
            <input 
            value={changeInput}
            onChange={(e)=>setChangeInput(e.target.value)} 
            className={styles.formInputComponent} />
            
        </div>
    );
};

export default MyInput;