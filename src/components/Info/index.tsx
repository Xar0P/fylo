import accessAnywhereImg from '../../assets/icon-access-anywhere.svg';
import securityImg from '../../assets/icon-security.svg';
import collaborationImg from '../../assets/icon-collaboration.svg';
import anyFileImg from '../../assets/icon-any-file.svg';

import { Container, Content, Item } from "./styles";

interface Feature {
    img: {
        src: string;
        alt: string;
    }
    title: string;
    content: string;
}

export function Info() {

    let features: Feature[] = [
        {
            img: {
                src: accessAnywhereImg,
                alt: 'Access Anywhere Img',
            },
            title: 'Access your files, anywhere',
            content: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
        },
        {
            img: {
                src: securityImg,
                alt: 'Security Img',
            },
            title: 'Security you can trust',
            content: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
        },
        {
            img: {
                src: collaborationImg,
                alt: 'Collaboration Img',
            },
            title: 'Real-time collaboration',
            content: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
        },
        {
            img: {
                src: anyFileImg,
                alt: 'any File Img',
            },
            title: 'Store any type of file',
            content: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        }
    ]

    return (
        <Container>
            <Content>
                {features.map(feature => {
                    return (
                        <Item>
                            <img src={feature.img.src} alt={feature.img.alt} />
                            <h2>{feature.title}</h2>
                            <p>{feature.content}</p>
                        </Item>
                    )
                })}
            </Content>
        </Container>
    )
}