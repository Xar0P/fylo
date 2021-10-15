import { Container } from "./styles";

export function ActionForm() {
    return (
        <Container>
            <h1>Get early access today</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div>
                <form action="">
                    <input type="email" name="email" id="email" placeholder="email@example.com" />
                    <input type="button" value="Get Started For Free" />
                </form>
            </div>
        </Container>
    )
}