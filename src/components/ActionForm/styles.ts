import styled from 'styled-components';

export const Container = styled.section`
    display: inline-block;
    max-width: 1000px;
    height: 340px;

    background-color: hsl(217, 28%, 15%);

    position: relative;
    top: -150px;
    left: 50%;
    transform: translate(-50%);

    padding: 50px 100px;
    border-radius: 10px;

    color: white;
    text-align: center;
    font-family: 'Open Sans', sans-serif;

    h1 {
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 60px;
        margin-bottom: 20px;
        font-family: 'Raleway', sans-serif;
    }

    p {
        line-height: 30px;
        margin-bottom: 45px;
        letter-spacing: .5px;
    }

    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        input {
            padding: 15px;
            border-radius: 20px;
        }

        input[type=email] {
            width: 65%;
            padding-left: 20px;
        }

        input[type=button] {
            width: 30%;
            cursor: pointer;
            background-image: linear-gradient(to right, var(--cyan), var(--blue));

            color: var(--white);
            font-weight: 700;
            font-family: 'Open Sans', sans-serif;
        }
    }
`;