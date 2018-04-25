import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';

export const AppTopMenu = styled.div`
    border-bottom:1px solid ${variables.appTopMenuBorderColor};
    height:${variables.appTopMenuHeight};
    background:${variables.appTopMenuBackgroundColor};
    display:flex;
    >div:nth-of-type(1){
        width:calc(100% - ${variables.appSideMenuWidth});
    }
    >div:nth-of-type(2){
        flex:1;
    }    
`;
/* width:calc(100% - #{$sideMenuWidth}); */