import styled from 'styled-components';
//import * as variables from '~/commons/styles/variables';

export const Button = styled.div`
    border:1px solid rgba(34,36,38,.15);
    display:flex;
    cursor:pointer;
    width:${props => props.width + 'px'};
    height:${props => props.height + 'px'};
    >div{
        margin:auto auto;
    }
    &.disabled > div{
        cursor:default;
        opacity:.7;
    }
`;