import React, { Component } from 'react';
import './FontSizeButton.css';

class FontSizeButton extends Component {

    onClickfontSizeButton = () => {
        this.increaseSize();   
    }

    increaseSize = () => {
        let newFontSize = this.getLargerFontSize(this.props.getFontSize());
        this.props.setFontSize(newFontSize);
    }

    getLargerFontSize = (value) => {
        let result;
        switch(value) {
            case "8px": result = "12px"; break;
            case "12px": result = "16px"; break;
            case "16px": result = "8px"; break;
            default: console.error("Wrong Font Size."); return;
        }
        return result;
    }

    render() {
        return (
            <React.Fragment>
                <span className="button FontSizeButton" onClick={this.onClickfontSizeButton}>{this.props.getFontSize()}</span>
            </React.Fragment>
        );
    }
}

export default FontSizeButton;