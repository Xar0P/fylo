import profile1Img from '../../assets/profile-1.jpg';
import profile2Img from '../../assets/profile-2.jpg';
import profile3Img from '../../assets/profile-3.jpg';

import { Container, Content } from "./styles";

interface Quote {
    content: string;
    author: {
        img: string;
        name: string;
        description: string;
    }
}

export function Quotes() {

    let quotes: Quote[] = [
        {
            content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            author: {
                img: profile1Img,
                name: 'Satish Patel',
                description: 'Founder & CEO, Huddle',
            }
        },
        {
            content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            author: {
                img: profile2Img,
                name: 'Bruce McKenzie',
                description: 'Founder & CEO, Huddle',
            }
        },
        {
            content: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
            author: {
                img: profile3Img,
                name: 'Iva Boyd',
                description: 'Founder & CEO, Huddle',
            }
        },
    ]

    return (
        <Container>
            <Content>
                {quotes.map(quote => {
                    return (
                        <div key={quote.author.name}>
                            <div><p>{quote.content}</p></div>
                            <div>
                                <div><img src={quote.author.img} alt="img author" /></div>
                                <div>
                                    <h4>{quote.author.name}</h4>
                                    <p>{quote.author.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Content>
        </Container>
    )
}