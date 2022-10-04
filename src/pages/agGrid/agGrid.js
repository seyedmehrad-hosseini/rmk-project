import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';
import styles from './_style.module.scss'

import 'ag-grid-community/styles//ag-grid.css';
import 'ag-grid-community/styles//ag-theme-alpine.css';
import Buttons from '../../layout/buttons/buttons';
import { useDispatch, useSelector } from 'react-redux';
import {products} from '../../store/entities/products';
import { width } from '@mui/system';

const AgGrid = () => {
    const [myAgGridCol, setmyAgGridCol] = useState({
        columnDefs: [
            {headerName: "id", field: "id" },
            {headerName: "title", field: "title"},
            {headerName: "price", field: "price"}

        ],
    });


    const [myAgGridRow, setmyAgGridRow] = useState([])
    const productList = useSelector(state=>state.entities.products.list)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(productList.length === 0){
            dispatch(products())
        }
        else{
            setmyAgGridRow(productList)
        }
    })

    return (
    <div className={styles.agGridBody}>

        <div
            className="ag-theme-alpine"
            
            style={{
                height: '500px',
                width: '620px',
            }}
        >
            <AgGridReact
            className={styles.agGridMain}
                columnDefs={myAgGridCol.columnDefs}
                rowData={myAgGridRow.length !== 0 && myAgGridRow.products.map(item=>{
                    return{id : item.id , title : item.title , price : item.price}
                })}>
                
            </AgGridReact>
        </div>

        <Buttons />
    </div>
    );
};

export default AgGrid;