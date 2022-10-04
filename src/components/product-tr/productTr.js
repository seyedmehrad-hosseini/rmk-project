import React from 'react';
import styles from './_style.module.scss'

const ProductTr = ({id , title , price}) => {
    return (
        <tr className={styles.myTr}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{price}</td>
        </tr>
    );
};

export default ProductTr;