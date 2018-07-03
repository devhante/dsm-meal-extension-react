import React, { Component } from 'react';
import FontSizeButton from './FontSizeButton';
import CurrentDate from './CurrentDate';
import './MealList.css';

import back from './back-white.png';
import next from './next-white.png';
import menu from './menu-white.png';
import close from './close-white.png';
import salmon from './salmon-small.png';

class MealList extends Component {
    
    state = {
        date: "2018-01-01",
        fontSize: "12px"
    }

    constructor() {
        super();

        let dateObject = new Date();

        let year = dateObject.getFullYear().toString();
        let month = (dateObject.getMonth() + 1).toString();
        let date = dateObject.getDate().toString();

        month = month.length == 1 ? "0" + month : month;
        date = date.length == 1 ? "0" + date : date;

        let dateString = `${year}-${month}-${date}`;

        this.state.date = dateString;
        this.state.fontSize = "12px";
        this.changeHtmlFontSize(this.state.fontSize);
    }

    setFontSize = (value) => {
        this.setState(
            { fontSize: value },
            () => this.changeHtmlFontSize(this.state.fontSize)
        );
    }

    getFontSize = () => {
        return this.state.fontSize;
    }

    changeHtmlFontSize = (value) => {
        document.getElementsByTagName('html')[0].style.fontSize = value;
    }

    mealListStyle = {
        backgroundImage: `url(${salmon})`,
    }

    render() {
        return (
            <div className="MealList" style={this.mealListStyle}>
                <div id="MealList-mask">
                    <div id="MealList-header">
                        <div id="MealList-title">DSM Meal Extension</div>
                        <FontSizeButton setFontSize={this.setFontSize} getFontSize={this.getFontSize} />
                    </div>

                    <div id="MealList-content">
                        <div id="MealList-content-header">
                            <img src={back} alt="Yesterday Button" className="button" id="MealList-button-yesterday" />
                            <CurrentDate date={this.state.date} />
                            <img src={next} alt="Tomorrow Button" className="button" id="MealList-button-tomorrow" />
                        </div>

                        <ul id="MealList-meal-list">
                            <li id="MealList-breakfast" className="MealList-meal">
                                <div className="MealList-meal-title">아침식사</div>
                                <ul className="MealList-menu-list">
                                    <li>로딩중...</li>
                                </ul>
                            </li>
                            <li id="MealList-lunch" className="MealList-meal">
                                <div className="MealList-meal-title">점심식사</div>
                                <ul className="MealList-menu-list">
                                    <li>로딩중...</li>
                                </ul>
                            </li>
                            <li id="MealList-dinner" className="MealList-meal">
                                <div className="MealList-meal-title">저녁식사</div>
                                <ul className="MealList-menu-list">
                                    <li>로딩중...</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MealList;