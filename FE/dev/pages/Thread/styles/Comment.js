import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';

export const CommentsWrapper = styled.div`
    border:1px solid ${variables.mainContainerBorderColor};
    width:100%;
    max-width:600px;
    box-sizing: border-box;

    margin-left: ${props => props.isReply ? '60px':'0px'};

`;
export const Group = styled.div`
    
`;

export const Container = styled.div`
    display:flex;
`;

export const ContentLeft = styled.div`
    border:1px solid ${variables.mainContainerBorderColor};
    width:50px;
    height:50px;
    flex-shrink:0;
    flex-grow:0;
    margin-right:5px;

`;
export const Logo = styled.div``;

export const ContentRight = styled.div`
    flex:1;
    min-height:30px;
`;

export const Header = styled.div`
    height:24px;
    border-bottom:1px solid ${variables.mainContainerBorderColor};
    display:flex;
    padding:0px 5px;
`;

export const Username = styled.div`
    margin: auto 0;
    font-weight:bold;
`;     

export const Content = styled.div`
    padding:0px 5px;
    padding-top:6px;
    line-height:1.3;
`;

export const Footer = styled.div`
    padding:0px 5px;
    margin:5px 0px;
    >b{
        cursor:pointer;
        user-select: none; 
    }
`;

