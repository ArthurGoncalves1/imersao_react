import styled from "styled-components";

export const StyledFavorite = styled.div`
    width: 100%;
    padding: 16px;

    section{
        padding: 0 16px;
        div {
            display: grid;
            width: calc(100vw - 16px * 4);
            grid-gap: 8px;
            grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(16px,1fr);
            span{
                padding-top: 8px;
                display: block;
                padding-right: 24px;
                color: ${({ theme }) => theme.textColorBase || "#222222"};
            
        }
    }
    }


    img{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }

    h2{
        margin-bottom: 16px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 16px;
    }

    img{

    }
`;
