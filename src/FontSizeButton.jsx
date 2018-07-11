import React from 'react';
import './FontSizeButton.css';

const FontSizeButton = function(props) {

    const onClickFontSizeButton = () => {
        increaseSize();
    }

    const increaseSize = () => {
        let newFontSize = getLargerFontSize(this.props.getFontSize());
        props.setFontSize(newFontSize);
        setFontSizeToLocalStorage(newFontSize);
    }

    const getLargerFontSize = (value) => {
        let result;
        switch(value) {
            case '8px': result = '12px'; break;
            case '12px': result = '16px'; break;
            case '16px': result = '8px'; break;
            default: console.error('Wrong Font Size.'); return;
        }
        return result;
    }

    const setFontSizeToLocalStorage = (value) => {
        localStorage.setItem('fontSize', value);
    }

    return (
        <React.Fragment>
            <span className="button FontSizeButton" onClick={onClickFontSizeButton}>{props.fontSize}</span>
        </React.Fragment>
    );
}

export default FontSizeButton;