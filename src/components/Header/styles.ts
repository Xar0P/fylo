import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 3%;

    ul {
        width: 20%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        li {
            list-style-type: none;

            a {
                text-decoration: none;
                color: hsl(0, 0%, 100%);
                font-family: 'Raleway', sans-serif;
            }
        }
    }
`