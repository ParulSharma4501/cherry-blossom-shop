import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Open Sans Condensed', sans-serif;
    ${'' /* font-family: 'Poppins', sans-serif; */}
    padding: 20px 60px;
    padding-bottom: 0px;

    @media screen and (max-width: 800px) {
			padding: 0px;
            ${'' /* background-color:red; */}
		}

        
}

a{
    text-decoration: none;
    color: black;
}

*{
    box-sizing: border-box;
}
    `;