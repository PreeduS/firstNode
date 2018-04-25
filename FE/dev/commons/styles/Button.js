import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';


//basic only
export const Button = styled.div`
    display:inline-flex;
    opacity:1 !important;
    &&&&&>button{
        background-color:initial !important;
        /*border:1px solid rgba(34,36,38,.15) !important;*/
        border:1px solid ${variables.mainContainerBorderColor} !important;
        box-shadow:none !important;
        font-size:1.02rem;
        &:hover{
            background-color:rgb(241, 242, 246) !important;
        }
        &:active{
            background-color:rgb(237, 238, 243) !important;
        }
        cursor:pointer;
        width:${props => props.width + 'px'};
        height:${props => props.height + 'px'};
        
        margin:auto auto;
        padding:0px;

        &.disabled{
            cursor:default;
            opacity:1 !important;
            color:rgba(40,40,40,.4) !important;
        }        

        ${props => props.inlineStyles}        
    }

`;

export const Content = styled.div`
    >div.loader{
        border-right:5px solid transparent;
        vertical-align:middle;
    }
    >span{vertical-align:middle;}
`;
