import React, { Component } from 'react';
import axios from 'axios'

import Header from './Header';
import Content from './Content';
import './MealList.css';

import salmon from './salmon-small.png';

class MealList extends Component {
    
    state = {
        date: new Date(),
        fontSize: '12px',
        menu: null
    }

    constructor() {
        super();
        this.state.fontSize = this.getFontSizeFromLocalStorage();
        this.changeHtmlFontSize(this.state.fontSize);
        this.getMenuFromAPI((arg) => {});
    }

    getMenuFromAPI(callback) {
        const dateString = this.getDateStringByDateObject(this.state.date);
        const url = `http://dsm2015.cafe24.com/meal/${dateString}`;

        axios.get(url)
        .then(response => {
            const data = JSON.parse(JSON.stringify(response.data));
            this.setState({ menu: data }, callback(this.state.menu)); 
        })
        .catch(err => {
            console.log(err);
        })
    }

    getDateStringByDateObject = (dateObject) => {
        let year = dateObject.getFullYear().toString();
        let month = (dateObject.getMonth() + 1).toString();
        let date = dateObject.getDate().toString();
        month = month.length == 1 ? '0' + month : month;
        date = date.length == 1 ? '0' + date : date;

        let dateString = `${year}-${month}-${date}`;
        return dateString;
    }

    getDateObjectByDateString = (dateString) => {
        let year = dateString.substring(0, 4);
        let month = dateString.substring(6, 7) - 1;
        let date = dateString.substring(9, 10);
        let dateObject = new Date(year, month, date);
        return dateObject;
    }

    getFontSizeFromLocalStorage = () => {
        let value = localStorage.getItem('fontSize');
        if(value == null) {
            localStorage.setItem('fontSize', '12px');
            value = localStorage.getItem('fontSize');
        }
        return value;
    }

    changeHtmlFontSize = (value) => {
        document.getElementsByTagName('html')[0].style.fontSize = value;
    }

    setFontSize = (newFontSize) => {
        this.setState(
            { fontSize: newFontSize },
            () => this.changeHtmlFontSize(this.state.fontSize)
        );
    }

    setDate = (dateObj) => {
        this.setState(
            { date: dateObj },
            () => this.getMenuFromAPI((arg) => {})
        );
    }
    
    mealListStyle = {
        backgroundImage: `url(${salmon})`,
    }

    render() {
        return (
            <div className="MealList" style={this.mealListStyle}>
                <div id="MealList-mask">
                    <Header setFontSize={this.setFontSize} fontSize={this.state.fontSize}/>
                    <Content setDate={this.setDate} date={this.state.date} menu={this.state.menu}/>
                </div>
            </div>
        );
    }
}

export default MealList;