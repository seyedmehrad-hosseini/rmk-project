import axios from 'axios';
import React, { useEffect, useState } from 'react';
import paginApi from '../../apis/paginApi';
import styles from './_style.module.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import Buttons from '../../layout/buttons/buttons';

const Pagin = () => {
    const [productPagin, setProductPagin] = useState(null);

    useEffect(()=>{
        paginApi(1,(isOk , data)=>{
            if(isOk){
                setProductPagin(data)
            }else{

            }
        })
    },[])
    console.log(productPagin)
    return (
        <div className={styles.paginBody}>
            <div className={styles.paginBox}>
                <table className={styles.myTable}>
                    <tr className={styles.myTr}>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Price</td>

                    </tr>
                    {productPagin && productPagin.products.map(item=>{
                        return(
                            <tr className={
                                item.id %2 == 0 ? 
                                styles.myTr : `${styles.bgBlue} ${styles.myTr}`}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
    
                            </tr>
                        )
                    })}
                </table>
                <Stack
                className={styles.paginationButtons}
                spacing={2}>
                    <Pagination count={20} variant="outlined" shape="rounded" 
                    onChange={(event , value)=>{
                        paginApi(value,(isOk , data)=>{
                            if(isOk){
                                setProductPagin(data)
                            }else{
                
                            }
                        })
                    }} />
                </Stack>


            </div>
            <Buttons />    

        </div>
    );
};

export default Pagin;