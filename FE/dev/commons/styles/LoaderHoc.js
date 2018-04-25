import styled from 'styled-components';
import * as variables from '~/commons/styles/variables';

export const Wrapper = styled.div`
  position:relative;
`;

export const DimmerContainer = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    z-index:${variables.loaderHocZIndex};
`;
export const LoaderContainer = styled.div`
    position:relative;
    width:100%;
    height:100%;
    max-height:100px;
    display:flex;
    user-select: none;
    >div{
        margin:auto auto;
        >span{
            vertical-align:middle;
        }
    }
`;

export const Dimmer = styled.div`
    opacity:.3;
`;