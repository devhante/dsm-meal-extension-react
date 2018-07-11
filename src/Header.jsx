import React from 'react';
import styled from 'styled-components';
import FontSizeButton from './FontSizeButton';

import menu from './menu-white.png';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    border-bottom: 0.5px solid #FFFFFFCC;

    background-color: #00000066;
    text-align: center;
`;

const HeaderTitle = styled.div`

`;

const Header = function(props) {
    return (
        <Wrapper>
            <HeaderTitle>DSM Meal Extension</HeaderTitle>
            <FontSizeButton {...props} />
        </Wrapper>
    );
};

export default Header;