import { ActionForm } from "./components/ActionForm"
import { CallAction } from "./components/CallAction"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Info } from "./components/Info"
import { Quotes } from "./components/Quotes"
import { StayProductive } from "./components/StayProductive"
import { GlobalStyle } from "./styles/global"

export function App() {
    return (
        <>
            <Header />
            <CallAction />
            <Info />
            <StayProductive />
            <Quotes />
            <ActionForm />
            <GlobalStyle />
            <Footer />
        </>
    )
}