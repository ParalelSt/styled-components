import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        font-family: Arial, Helvetica, sans-serif;
    }

    *:focus {
        outline: none;
    }

    a:visited {
        color: black;
    }

    body {
        background: rgba(202, 202, 202, 0.3);
    }
`;
