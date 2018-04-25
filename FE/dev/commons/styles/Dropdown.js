import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';

export const Dropdown = styled.div`
    position: relative;
    z-index:${variables.dropdownZIndex};
    min-height:60px;
    background: ${variables.appTopMenuBackgroundColor};
    border:1px solid gray;
`;
