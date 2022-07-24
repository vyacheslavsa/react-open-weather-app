import React, {useRef} from 'react';
import styles from './CustoomSearch.module.scss'
import {ReactComponent as IconDelete} from "../../image/4115230-cancel-close-cross-delete_114048.svg";
import Dropdown from "../DropDownSearch";

const CustomSearch = ({
    width,
    height,
    onChange,
    deleteValue,
    onClose,
    onKeyDown,
    value,
    openCityList,
    dataResult,
    onCloseDropdown
}) => {

    const customRef = useRef();
    const deleteIcon= useRef();

    const onFocus = () => {
        customRef.current.style.boxShadow = '0 0 15px black';
        deleteIcon.current.style.display = 'block';
    }

    const onBlur = () => {
        customRef.current.style.boxShadow = 'none';
        deleteIcon.current.style.display = 'none';
    }

    const cleanField = () => {
        deleteValue();
        onClose();
    }

    return (
        <>
            <div
                className={styles.root}
                style={{width: width, height: height}}
                ref={customRef}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
            >
                <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={value}
                    style={{background: 'transparent'}}
                />
                {value && <div className={styles.iconDelete}>
                    <IconDelete onClick={() => cleanField()}/>
                </div>}
            </div>
            {openCityList && <Dropdown data={dataResult} onClose={onCloseDropdown}/>}
        </>
    );
}

export default CustomSearch;