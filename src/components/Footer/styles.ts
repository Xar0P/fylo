import locationImg from '../../assets/icon-location.svg';
import phoneImg from '../../assets/icon-phone.svg';
import emailImg from '../../assets/icon-email.svg';

import styled from 'styled-components';

export const Container = styled.footer`
    position: absolute;
    bottom: 0;

    background-color: hsl(216, 53%, 9%);
    height: 640px;
    width: 100%;

    display: flex;
    justify-content: center;
`;

export const Content = styled.section`
    width: 100%;
    max-width: 1500px;

    padding-top: 300px;

    display: flex;
    flex-direction: column;

    & > div:nth-child(2) {
        display: flex;
        justify-content: space-between;

        padding-top: 40px;

        & > div {
            color: var(--white);
            font-family: 'Open Sans', sans-serif;
            letter-spacing: .3px;
        }

        & > div:not(:first-child) {
            width: 16%;
        }

        & > div:first-child {
            width: 28%;
            display: flex;

            &::before {
                content: '';
                display: inline-block;

                width: 40px;
                height: 20px;
                margin-right: 30px;
                margin-top: 5px;

                background-image: url(${locationImg});
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }
        }

        & > div:nth-child(2) {
            display: flex;
            flex-direction: column;

            font-size: .9rem;

            p:first-child {
                padding-bottom: 20px;
            }

            p::before {
                content: '';
                display: inline-block;

                width: 16px;
                height: 16px;
                margin-right: 20px;


                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }

            p:nth-child(1)::before {
                background-image: url(${phoneImg});
                margin-top: 5px;
            }

            p:nth-child(2)::before {
                background-image: url(${emailImg});
            }
        }

        & > div:nth-child(3), & > div:nth-child(4) {

            p {
                margin-left: 50%;
                transform: translateX(-30%);
            }

            p:not(:last-child) {
                padding-bottom: 10px;
            }
        }

        & > div:nth-child(5) {
            display: flex;
            justify-content: space-around;
        }
    }
`;