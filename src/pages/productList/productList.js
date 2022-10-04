import React, { useEffect, useState } from 'react';
import styles from './_style.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import {products} from '../../store/entities/products';
import ProductTr from '../../components/product-tr/productTr';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Buttons from '../../layout/buttons/buttons';

const ProductList = () => {
    const [ProductState, setProductState] = useState([]);
    const productList = useSelector(state=>state.entities.products.list)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(productList.length === 0){
            dispatch(products())
        }else{
            setProductState(productList)
        }
    })
    return (
        <div className={styles.productListBox}>
            <div className={styles.myTable}>
                {
                   ProductState.length !== 0 && ProductState.products.map(item=>{
                    //    console.log('item',item)
                       return <ProductTr {...item} />
                    })
                }

            </div>
            <Buttons />    

        </div>
    );
};

export default ProductList;