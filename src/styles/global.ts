import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
		@media (max-width: 1080px) { // Diminuir tamanho da fonte no celular
			font-size: 93.75%; // 15px
		}

		@media (max-width: 720px) {
			font-size: 87.5%; // 14px
		}
	}

	body {
		/* background-color: var(--background); */
		-webkit-font-smoothing: antialiased; // Deixar as fontes mais nitidas
	}
`