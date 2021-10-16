import logoImg from '../../assets/logo.svg'

import { Container, Content } from "./styles";

export function Footer() {
    console.log( document.getElementsByClassName('section'))

    return (
        <Container>
            <Content>
                <div><img src={logoImg} alt="img logo" /></div>
                <div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <div>
                        <p>+1-543-123-4567</p>
                        <p>example@fylo.com</p>
                    </div>
                    <div>
                        <p>About Us</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <p>Contact Us</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </div>
                    <div>
                        <p>face</p>
                        <p>twi</p>
                        <p>inst</p>
                    </div>
                </div>
            </Content>
        </Container>
    )
}