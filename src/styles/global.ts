import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--white: hsl(0, 0%, 100%);
		--cyan: hsl(176, 68%, 64%);
		--blue: hsl(198, 60%, 50%);
		--light-red: hsl(0, 100%, 63%);
	}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		border: 0;
    }

    html {
		position: relative;
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