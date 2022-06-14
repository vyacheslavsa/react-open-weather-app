import React from 'react';
import styles from './CustoomSearch.module.scss'
import {ReactComponent as IconDelete} from "../../image/4115230-cancel-close-cross-delete_114048.svg";

const CustomSearch = ({
    width,
    height,
    onChange,
    deleteValue,
    onClose,
    onKeyDown,
    value,
}) => {

    const cleanField = () => {
        deleteValue();
        onClose();
    }

    return (
        <div className={styles.root} style={{width: width, height: height}}>
            <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={value}/>
            {value && <div className={styles.iconDelete}>
                <IconDelete onClick={()=>cleanField()}/>
            </div>}
        </div>
    );
}

export default CustomSearch;