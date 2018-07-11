import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styled from 'styled-components';

const Wrapper = styled.li`
    flex: 1;
`;

const Title = styled.li`
    height: 3rem;
    line-height: 3rem;
    padding-bottom: 0.5rem;
    font-weight: bold;
    text-align: center;
`;

const List = styled.ul`

`;

const ListElement = styled.li`
    padding-bottom: 0.5rem;
    text-align: center;
`;

const MealMenu = function(props) {
    const getTitle = () => {
        switch(props.type) {
            case 'breakfast': return '아침식사';
            case 'lunch': return '점심식사';
            case 'dinner': return '저녁식사';
            default: return '로딩중...';
        }
    }

    const getMenuArray = () => {
        if(props.menu == null) return null;
        return props.menu[props.type];
    }

    const printMenu = () => {
        const menuArray = getMenuArray();
        if(menuArray == null) return <ListElement>로딩중...</ListElement>;
        else return (
            menuArray.map(
                element => (<ListElement>{element}</ListElement>)
            )
        );
    }

    return (
        <Wrapper>
            <Title>
                {getTitle()}
            </Title>
            <List>
                {printMenu()}
            </List>
        </Wrapper>
    );
};

export default MealMenu;