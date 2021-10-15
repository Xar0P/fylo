import stayProductiveImg from '../../assets/illustration-stay-productive.png';
import arrowImg from '../../assets/icon-arrow.svg';

import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    padding: 150px 0;
    background-color: hsl(218, 28%, 13%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.section`
    width: 90%;
    max-width: 1500px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div:nth-child(1) {
        width: 47%;
        height: 500px;

        background-image: url(${stayProductiveImg});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    div:nth-child(2) {
        width: 47%;

        color: var(--white);

        h1 {
            font-weight: 700;
            font-size: 2.5rem;
            line-height: 60px;
            margin-bottom: 20px;
            max-width: 500px;
            font-family: 'Raleway', sans-serif;
        }

        p {
            font-size: 1.2rem;
            line-height: 30px;
            margin-bottom: 30px;
            max-width: 660px;
            font-family: 'Open Sans', sans-serif;
        }

        a {
            position: relative;
            color: var(--cyan);
            font-family: 'Open Sans', sans-serif;
            text-underline-offset: 10px;

            &::after {
                display: inline-block;
                position: absolute;
                top: 50%;
                margin-left: -16px;
                transform: translateY(-50%);
                content: '';
                width: 1rem;
                height: 1rem;
                background-image: url(${arrowImg});
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
    }
`;