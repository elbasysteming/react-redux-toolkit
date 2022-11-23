import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
            box-sizing: border-box;
            font-family:'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    *, *::before, *::after {
            box-sizing: inherit;
    }
    
    ul, li, h1, h2, h3, p, button {
            margin: 0;
    }

    h1, h2, h3 {
        color: #444444;
    }

    h1 {
        font-weight: 600;
    }
    
    h2 {

        font-weight: 400;
    }
    
    body {
        margin: 0px;
    }

    ul {
        list-style: none;
        display: block;
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0px;
    }

    button {
            background: transparent;
            border-radius: 8px;
            border: solid 1px #E6E9F0;
            outline: 0;
            height: 30px;
            margin-right: 7px;
    }
    
    textarea {
        width: 100%;
    }

    .container {
            background: #fefefe;
            height: 100vh;
            margin: 0px auto;
            max-width: 800px;
            overscroll-behavior: none;
            width: 100%;
    }

    #app {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            overflow-x: hidden;
            min-height: 100vh;
            padding-bottom: 10px;
    }

    .completed {
        color: #db4c3f;
        text-decoration: line-through 1px;   
    }

    .column-2{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    `;
