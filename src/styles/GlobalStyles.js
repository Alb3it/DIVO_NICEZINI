import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
    font-family: 'Pretendard';
  }
  html, body, #root{
    font-family: 'Pretendard' !important;
    -webkit-user-select: none; 
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  html{
    min-height: 100%;
    display: flex;
  }
  body, #root{
    flex: 1;
    display: flex;
  }
  *::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    border-radius: 6px;
    background: rgb(255, 255, 255, 0.4);
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgb(0, 0, 0, 0.2);
    border-radius: 6px;
  }
  .toastui-editor-contents{
    font-family: 'Pretendard';
    font-size: 14px;
  }
  .toastui-editor-contents *{
    color: #1d1d1f !important;
  }
  .toastui-editor-mode-switch{
    display: none !important;
  }
  input.react-tag-input__input, input.react-tag-input__input::placeholder{
    font-size: 14px;
  }
`;

export default GlobalStyles;