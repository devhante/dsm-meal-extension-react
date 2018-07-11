import React from 'react';
import styled from 'styled-components';
import ContentHeader from './ContentHeader';
import MealMenuList from './MealMenuList';

const Wrapper = styled.div`

`;

const Content = function(props) {
    return (
        <Wrapper>
            <ContentHeader setDate={props.setDate} date={props.date} />
            <MealMenuList menu={props.menu} date={props.date}/>
        </Wrapper>
    );
};

export default Content;