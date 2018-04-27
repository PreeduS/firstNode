import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';

const BaseButton = styled.div`
    display:inline-flex;
    opacity:1 !important;
    width:${props => typeof props.width === 'string' ? props.width : props.width + 'px'};
    height:${props => props.height + 'px'};

    &&&&&>button{
        cursor:pointer;        
        box-shadow:none !important;
        font-size:1.02rem;
        /*width:${props => typeof props.width === 'string' ? props.width : props.width + 'px'};
        height:${props => props.height + 'px'};*/
        width:100%;
        height:100%;
        margin:auto auto;
        padding:0px;
        &.disabled{
            cursor:default;
            opacity:1 !important;
        }            
        
    }
        
`;


//basic/default only
export const ButtonDefault = BaseButton.extend`

    &&&&&>button{
        background-color:initial !important;
        /*border:1px solid rgba(34,36,38,.15) !important;*/
        border:1px solid ${variables.mainContainerBorderColor} !important;

        &:hover{
            background-color:rgb(241, 242, 246) !important;
        }
        &:active{
            background-color:rgb(237, 238, 243) !important;
        }

        &.disabled{
            color:rgba(40,40,40,.4) !important;
        }        

        ${props => props.inlineStyles}        
    }

`;
export const ButtonGray = BaseButton.extend`
    &&&&&>button{
        background-color:rgb(241, 242, 246) !important;
        border:1px solid rgb(236,237,242) !important;
        color:rgb(77,77,77) !important;
        &:hover{
            background:rgb(239, 240, 245) !important;
            color:rgb(7,7,7) !important;
        }
        &:active{
            background:rgb(236,237,242) !important;
            border:1px solid rgb(234,234,234) !important;
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
