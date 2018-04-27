import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';

export const Dropdown = styled.div`
    position: relative;
    box-sizing: border-box;
    padding:7px 5px;
    z-index:${variables.dropdownZIndex};
    min-height:60px;
    background: ${variables.appTopMenuBackgroundColor};
`;
