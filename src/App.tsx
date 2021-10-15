import { CallAction } from "./components/CallAction"
import { Header } from "./components/Header"
import { Info } from "./components/Info"
import { StayProductive } from "./components/StayProductive"
import { GlobalStyle } from "./styles/global"

export function App() {
    return (
        <>
            <Header />
            <CallAction />
            <Info />
            <StayProductive />
            <GlobalStyle />
        </>
    )
}