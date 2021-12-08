import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: Montserrat, Noto Sans KR, GothamSSmBook, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212529;
  box-sizing: border-box;
  background-color:#ffffff;
  height:inherit;
}
* {
  box-sizing: inherit;
}
code {
  font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
input, button, textarea {
  font-family: inherit;
  :focus {
    outline:none;
  }
}
html, body, #root {
}

a {
  -webkit-tap-highlight-color : transparent;
  text-decoration:none
}

`;

export default GlobalStyles;