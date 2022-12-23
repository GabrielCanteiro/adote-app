import styled from "styled-components";


export const Container = styled.div`
    width: 375px; 
    height: 667px;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    background-color: #FFFFFF;
    margin-top: 7%;
`

export const Logo = styled.div`
    margin: 0;
    animation-duration: .7s;
    animation-name: open;
    flex-direction: column;
    margin-bottom: 10px;
    position: absolute;
    height: 35%;

    
    @keyframes open {
        from{
            opacity: 10%;
            height: 30%;

        }
        to{
            opacity: 100%;
            height: 35%;

        }
        
    }

`

export const ButtonOpen = styled.button`
    background-color: #D8BEA9;
    border: 1px solid #A66743;
    color: #A66743;
    width: 30%;
    padding: 5px;
    border-radius: 25px;
    animation: button 1s;
    z-index: 1;


    @keyframes button {
        from{
            opacity: 0;
        }

        to{
            opacity: 1;
        }
        
    }
`