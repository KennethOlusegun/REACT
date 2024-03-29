import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 'Oxygen',
	'Ubuntu', 'Cantarell', 'Fire Sans', 'Droid Sans', 'Helvetica Neue', 
	sans-serif;
	-webkit-font-smoothing: antialiased;
	-webkit-font-smoothing: grayscale;
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", 
	monospace;
}
`