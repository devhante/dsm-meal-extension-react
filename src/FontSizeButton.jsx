import React from 'react';
import styled from 'styled-components';
import './FontSizeButton.css';

const FontSizeButton = function(props) {

    const onClickFontSizeButton = () => {
        increaseSize();
    }

    const increaseSize = () => {
        let newFontSize = getLargerFontSize(props.fontSize);
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

    const Wrapper = styled.span`
        margin-top: -2.5rem;
        float: right;
        margin-right: 0.75rem;
    `;

    return (
        <Wrapper className="button" onClick={onClickFontSizeButton}>
            {props.fontSize}
        </Wrapper>
    );
}

export default FontSizeButton;