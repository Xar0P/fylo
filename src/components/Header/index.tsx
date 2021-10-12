import logoImg from '../../assets/logo.svg'

import { Container } from './styles'

export function Header() {
    return (
        <Container>
            <img src={logoImg} alt="Logo da Fylo" />
            <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
        </Container>
    )
}