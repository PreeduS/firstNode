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
    cursor:pointer;
`;

