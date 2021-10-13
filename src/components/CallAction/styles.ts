import curvyDesktopImg from '../../assets/bg-curvy-desktop.svg';
import introImg from '../../assets/illustration-intro.png';

import styled from 'styled-components';

export const Container = styled.section`
    padding: 200px 0 220px 0;
    width: 100%;

    background-image: url(${curvyDesktopImg});
    background-size: 100% 30vw;
    background-position: bottom;
    background-repeat: no-repeat;
    background-color: hsl(217, 28%, 15%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: 'Raleway', sans-serif;
    color: var(--white);
    text-align: center;

    h1 {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 60px;
        margin-bottom: 35px;
    }

    p {
        font-size: 1.2rem;
        max-width: 600px;
        line-height: 30px;
        margin-bottom: 30px;
    }

    button {
        width: 250px;
        height: 50px;
        border-radius: 100px;
        color: var(--white);
        font-weight: 700;
        cursor: pointer;
        background-image: linear-gradient(to right, var(--cyan), var(--blue));
    }
`;

export const Content = styled.section`
    width: 100%;
    max-width: 700px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const IntroImg = styled.section`
    width: 100%;
    height: 570px;

    background-image: url(${introImg});
    background-repeat: no-repeat;
    background-position: top center;
`;