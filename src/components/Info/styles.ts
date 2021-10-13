import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    background-color: hsl(218, 28%, 13%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.section`
    width: 100%;
    max-width: 1000px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Item = styled.div`
    width: 40%;
    text-align: center;
    padding-bottom: 100px;

    color: var(--white);
    text-align: center;

    img {
        height: 100px;
        padding-bottom: 30px;
    }

    h2 {
        padding-bottom: 10px;

        font-family: 'Raleway', sans-serif;
    }

    p {
        line-height: 23px;

        font-family: 'Open Sans', sans-serif;
    }
`;