import quotesImg from '../../assets/bg-quotes.png';

import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    background-color: hsl(218, 28%, 13%);

    padding-top: 100px;
    padding-bottom: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.section`
    width: 90%;
    max-width: 1400px;
    padding: 40px 10px;

    background-image: url(${quotesImg});
    background-repeat: no-repeat;
    background-size: 60px;
    background-position: left top;

    display: flex;
    justify-content: space-between;

    color: var(--white);
    font-family: 'Open Sans', sans-serif;

    & > div {
        box-shadow: 4px 3px 5px hsl(219, 30%, 20%);
        width: 31%;
        background-color: hsl(219, 30%, 18%);
        padding: 45px 30px 30px 30px;
        border-radius: 5px;

        & > div:nth-child(1) {
            p {
                line-height: 25px;
                letter-spacing: 1px;
            }
        }

        & > div:nth-child(2) {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;

            & > div:nth-child(1) {
                width: 10%;

                img {
                    width: 100%;
                    border-radius: 80px;

                }
            }

            & > div:nth-child(2) {
                width: 87%;
                align-self: center;

                h4 {
                    font-size: .9rem;
                    font-family: 'Raleway', sans-serif;
                }

                p {
                    font-size: .7rem;
                }
            }



        }
    }
`;