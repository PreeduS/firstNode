import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';

export const CommentTextAreaWrapper = styled.div`

    textarea{
        background-color: transparent;
        border: 1px solid ${variables.mainContainerBorderColor};
        outline:none;
        resize:none;
        width:100%;
        max-width:600px;
        height:60px;
        min-height:60px;
        max-height:140px;
        overflow: hidden;
        padding:10px 5px;


    }
`;

export const Error = styled.div`
    display:inline-block;
    color:#d01919;
    margin-left:5px;
`;
