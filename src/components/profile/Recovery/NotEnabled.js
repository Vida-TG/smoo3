import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';

const NotEnabledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NotEnabled = (props) => (
    <NotEnabledContainer>
        {props.title}
        <Button onClick={props.onEnable}>enable</Button>
    </NotEnabledContainer>
)

export default NotEnabled;