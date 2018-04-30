import styled from 'styled-components';
//import * as variables from '~/commons/styles/variables';

export const FieldContainer = styled.div`
    display:flex;
    margin-bottom: 5px;
`;

export const LeftContent = styled.div`
        width:110px;
        display: flex;
        >span{
            margin:auto 0px;
        }
        height:24px;
`;

export const RightContent = styled.div`
    margin-left:5px;
    flex:1;
    display: flex;
    flex-wrap: wrap;
`;
export const InputContent = styled.div`
    min-width: 160px;
    max-width: 200px;
    flex:1; 
    margin-right:10px;

    input{
        color:rgb(77,77,77);
        border:0px;
        outline:0px;
        height:24px;
        width:100%;
        padding:0px 4px;
        background:rgba(240,240,240,.3);
        border:1px solid rgba(223,230,233,.7);
        border-radius: 2px;
        &:active,&:focus{
            border:1px solid rgba(223,230,233,1);
            background:rgba(250,250,250,.6);
        }
    }
`;
export const ValidationContent = styled.div`
    flex:1;   
    min-width: 160px;
    display: flex;
    >span{
        margin:auto 0px;
    }
`;