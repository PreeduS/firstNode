import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';


export const Content = styled.div`
    border-bottom:1px solid ${variables.mainContainerBorderColor};
    box-sizing:border-box;
    background:rgb(251,251,251);
    background: #FAFAFA;
    min-height:80px;
    padding:10px 20px;
    margin-bottom:20px;
    display:flex;
    
    >div{
        width:100%; 
                                     border:0px solid ${variables.mainContainerBorderColorLighter};
        margin:auto 0px;
        min-height:60px;
        display: flex;
        flex-wrap: wrap;        
    }

`;

export const LeftContainer = styled.div`
    flex-shrink: 0;
    flex-basis: 60px;
    height:60px;
    margin-right:10px;
    border:1px solid ${variables.mainContainerBorderColorLighter};
`;

export const RightContainer = styled.div`
    flex:1;    
                                    border:0px solid ${variables.mainContainerBorderColorLighter};
    padding-top:5px;
`;



