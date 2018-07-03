import React, { Component } from 'react';
import './CurrentDate.css';

class CurrentDate extends Component {
    
    year = this.props.date.substring(0, 4);
    month = this.props.date.substring(6, 7);
    date = this.props.date.substring(9, 10);

    dateObject = new Date(this.year, this.month, this.date);
    day =  ['일', '월', '화', '수', '목', '금', '토'][this.dateObject.getDay()];

    text = `${this.month}월 ${this.date}일 ${this.day}요일`;

    render() {
        return (
            <React.Fragment>
                <span className="CurrentDate">{this.text}</span>
            </React.Fragment>
        );
    } 
}

export default CurrentDate;