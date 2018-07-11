import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`

`;

const CurrentDate = function(props) { 
    const dateObj = new Date(props.date);
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();
    const day = ['일', '월', '화', '수', '목', '금', '토'][dateObj.getDay()];
    
    return (
        <Wrapper>
            {month}월 {date}일 {day}요일
        </Wrapper>
    );
};

export default CurrentDate;