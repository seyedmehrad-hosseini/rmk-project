import React, { useState } from 'react';
import styles from './_style.module.scss'
import { Button } from '@mui/material';
import MyInput from '../../components/inputs/input';
import axios from 'axios';

const Login = () => {
    const [changeInputUserName, setChangeInputUserName] = useState();
    const [changeInputPass, setChangeInputPass] = useState();
    const checkLoginSucces = async (username,password) =>{
        const data={
            username,
            password
        }
        try{
            const response = await axios.request({
                baseURL :'https://dummyjson.com/auth/login',
                method : 'post',
                data
            })
            console.log(response.data)
            if(response.data.message){
                throw new Error(response.data.message)
            }
            localStorage.setItem("token" , response.data.token)
            window.location.reload()
            alert('succes')
        }catch(error)
        {
            alert('user or pass is incurrect')
        }
    }


    return (
        
        <div className={styles.loginBody}>
            <div className={styles.loginBox}>

                <div className={styles.formBox}>
                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>username</span>
                        <input 
                        value={changeInputUserName}
                        onChange={(e)=>setChangeInputUserName(e.target.value)} 
                        className={styles.formInputComponent} />
                    </div>

                    <div className={styles.inputBody}>
                        <span className={styles.inputTitle}>password</span>
                        <input 
                        value={changeInputPass}
                        onChange={(e)=>setChangeInputPass(e.target.value)} 
                        className={styles.formInputComponent} />
                    </div>

                    <div className={styles.buttonBox}
                    onClick={()=>checkLoginSucces(changeInputUserName ,changeInputPass)}>
                        <Button sx={{height : '30px'}} variant="contained" className='FormButton-component'>login</Button>
                    </div>

                </div>
                <div className={styles.imageBox}>
                    <img src='img/React-icon.svg.png'/>
                </div>

            </div>
        </div>
        
    );
};

export default Login;

