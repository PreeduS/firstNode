import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';


export const CommentGroupWrapper = styled.div`
    border:1px solid ${variables.mainContainerBorderColor};
    margin-bottom:25px;
`;
export const LoadCommentsContainer = styled.div`
    margin-top:5px;
    margin-left: ${props => props.hasReplies ? '122px':'62px'};

    display:inline-block;

`;



/*
    cursor:pointer;
    >span{
        font-size:1.05rem;
        font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
        font-weight:bold;
        color:rgb(77, 77, 77);
        &:hover{
            color:rgb(7, 7, 7);
        }
    }
*/