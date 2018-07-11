import React from 'react';
import styled from 'styled-components';
import CurrentDate from './CurrentDate';

import back from './back-white.png';
import next from './next-white.png';


const Wrapper = styled.div`
    height: 3rem;
    line-height: 3rem;
    text-align: center;
}`;

const ButtonYesterday = styled.img`
    float: left;
    margin-left: 0.25rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    width: 1rem;
    height: 1rem;
`;

const ButtonTomorrow = styled.img`
    float: right;
    margin-right: 0.25rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    width: 1rem;
    height: 1rem;
`;

const ContentHeader = function(props) {

    const onClickYesterdayButton = () => {
        let newDateObj = new Date(props.date);
        newDateObj.setDate(newDateObj.getDate() - 1);
        props.setDate(newDateObj);
    }

    const onClickTomorrowButton = () => {
        let newDateObj = new Date(props.date);
        newDateObj.setDate(newDateObj.getDate() + 1);
        props.setDate(newDateObj);
    }

    return (
        <Wrapper>
            <ButtonYesterday src={back} alt="Yesterday Button" className="button" onClick={onClickYesterdayButton} />
            <CurrentDate {...props} />
            <ButtonTomorrow src={next} alt="Tomorrow Button" className="button" onClick={onClickTomorrowButton} />
        </Wrapper>
    );

};

export default ContentHeader;