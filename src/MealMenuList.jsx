import React from 'react';
import styled from 'styled-components';
import MealMenu from './MealMenu';

const Wrapper = styled.ul`
    display: flex;
    flex-direction: row;
    height: 100%;
`;

const MealMenuList = function(props) {
    return (
        <Wrapper>
            <MealMenu type="breakfast" {...props}/>
            <MealMenu type="lunch" {...props} />
            <MealMenu type="dinner" {...props} />
        </Wrapper>
    );
};

export default MealMenuList;