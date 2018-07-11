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

    componentDidMount() {
        this.state.fontSize = this.getFontSizeFromLocalStorage();
        this.changeHtmlFontSize(this.state.fontSize);
        this.updateMenu();
    }

    updateMenu() {
        const newMenu = this.getMenuFromStorage(this.state.date);
        if(newMenu == null) {
            this.setMenuOfMonthToStorage(this.state.date);
            this.getMenuFromAPI(this.state.date, (data) => {
                this.setState({ menu: data });
            });
        } else {
            this.setState({ menu: newMenu });
        }
    }

    getMenuFromAPI(date, callback) {
        const dateString = this.getDateStringByDateObject(date);
        const url = `http://dsm2015.cafe24.com/meal/${dateString}`;

        axios.get(url)
        .then(response => {
            const menu = JSON.parse(JSON.stringify(response.data));
            callback(menu);
        })
        .catch(err => {
            console.log(err);
        })
    }

    getMenuFromStorage(date) {
        const key = this.getDateStringByDateObject(date);
        const menu = JSON.parse(localStorage.getItem(key));
        return menu;
    }

    setMenuOfMonthToStorage(date) {
        let key = this.getFirstDayOfMonth(date);
        while(key.getMonth() == date.getMonth()) {
            let dateObject = new Date(key);
            this.getMenuFromAPI(dateObject, (menu) => {
                this.setMenuToStorage(dateObject, menu);
            });
            key.setDate(key.getDate() + 1);
        }
    }

    setMenuToStorage(date, menu) {
        const key = this.getDateStringByDateObject(date);
        const value = JSON.stringify(menu);
        localStorage.setItem(key, value);
    }

    getFirstDayOfMonth(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
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
        this.setState ({ date: dateObj }, () => {
            this.updateMenu();
        });
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