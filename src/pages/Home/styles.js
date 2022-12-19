import styled from "styled-components"; 

export const CatContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    height: 80vh;


    img{
        border: 1px solid #A66743;
        border-radius: 6px 6px 0 0 ;
        width: 90%;
}

`

export const InfoContainer = styled.div`
    background-color: #D8BEA9;
    height: 55px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        padding: 10px;
        
        h3{
            margin-top: 13px;
        }
        p{
            margin-top: -21px;
        }
    }

    span{
        margin-right: 30px;
        background-color: #A66743;
        align-items: center;
        justify-content: center;
        display: flex;

        i{
            margin-top: 3px;
            font-size: 30px;
            color: #ffffff;
        }
    }
    
`

export const Bottom = styled.div`
    margin-bottom: 0;
    height: 77px;
    width: 100%;
    background-color: #D8BEA9;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
        margin-top: -70px;
        flex-direction: row;
        width: 25%;
        height: 90px;
        background-color: #FFFFFF;

        border: 3px solid #D8BEA9;
        border-radius: 100px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    div:nth-child(2){
        border: 3px solid #A66743;

    }
`