import React, { Component } from 'react';

class FontSizeButton extends Component {

    onClickfontSizeButton = () => {
        this.increaseSize();   
    }

    increaseSize = () => {
        console.log("1: " + this.props.getFontSize());
        let newFontSize = this.getLargerFontSize(this.props.getFontSize());
        this.props.setFontSize(newFontSize);
        console.log("2: " + this.props.getFontSize());
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
            <div>
                <span className="button" id="MealList-button-size" onClick={this.onClickfontSizeButton}>{this.props.getFontSize()}</span>
            </div>
        );
    }
}

export default FontSizeButton;