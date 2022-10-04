import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './_style.module.scss'

const Buttons = () => {
    return (
        <div className={styles.buttonsBody}>
                <Button sx={{height : '30px'}} variant="contained" >
                    <Link to='/'>ProductList</Link>
                </Button>
                <Button sx={{height : '30px'}} variant="contained" >
                    <Link to='/paging'>PaginationPage</Link>
                </Button>
                <Button sx={{height : '30px'}} variant="contained" >
                    <Link to='/agGrid'>ag-grid</Link>
                </Button>
                <Button sx={{height : '30px'}} variant="contained" >
                    <Link to='/aggridinline'>ag-grid-inline</Link>
                </Button>

                <span 
                onClick={()=>{
                    localStorage.removeItem("token")
                    window.location.reload()
                }}>
                    <Button sx={{height : '30px'}} variant="contained"> 
                    
                        logOut
                    </Button>
                </span>
        </div>
    );
};

export default Buttons;