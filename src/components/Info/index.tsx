import accessAnywhereImg from '../../assets/icon-access-anywhere.svg';
import securityImg from '../../assets/icon-security.svg';
import collaborationImg from '../../assets/icon-collaboration.svg';
import anyFileImg from '../../assets/icon-any-file.svg';

import { Container, Content, Item } from "./styles";

export function Info() {
    return (
        <Container>
            <Content>
                <Item>
                    <img src={accessAnywhereImg} alt="" />
                    <h2>Access your files, anywhere</h2>
                    <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </Item>
                <Item>
                    <img src={securityImg} alt="" />
                    <h2>Security you can trust</h2>
                    <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
                </Item>
                <Item>
                    <img src={collaborationImg} alt="" />
                    <h2>Real-time collaboration</h2>
                    <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </Item>
                <Item>
                    <img src={anyFileImg} alt="" />
                    <h2>Store any type of file</h2>
                    <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                </Item>
            </Content>
        </Container>
    )
}