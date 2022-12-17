
import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 80%;
    height: 30px;
    display:flex;
    align-items: center;
    margin-bottom: 20px;
    background-color: #D8BEA9;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

`

export const IconContainer = styled.div`
    margin-left: 2px ;
    padding: 5px;
    color: #A66743;
`

export const InputText = styled.input`
    background-color: #D8BEA9;
    color: #A66743;
    flex:1;
    border: 0;
    margin-left: 5px;
    border-left: 1px solid #A66743;
    height: 20px;
    outline: none;
    ::placeholder{
        color: #A66743;
    }
    
`