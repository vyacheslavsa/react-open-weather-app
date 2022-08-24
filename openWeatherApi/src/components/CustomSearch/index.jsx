import React, {useRef, useState} from 'react';
import styles from './CustoomSearch.module.scss'
import {ReactComponent as IconDelete} from "../../image/4115230-cancel-close-cross-delete_114048.svg";
import Dropdown from "../DropDownSearch";
import cs from 'classnames';

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
    onCloseDropdown,
    onCloseModal
}) => {

    const customRef = useRef();

    const [blur, setBlur] = useState(false);

    const onFocus = () => {
        setBlur(true)
    }

    const onBlur = () => {
        setBlur(false)
    }

    const cleanField = () => {
        deleteValue();
        onClose();
    }

    return (
        <>
            <div
                className={cs(styles.root,{[styles.blur]:blur})}
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
            {openCityList && <Dropdown data={dataResult} onClose={onCloseDropdown} onCloseModal={onCloseModal}/>}
        </>
    );
}

export default CustomSearch;