import { createGlobalStyle, keyframes } from 'styled-components'
import { transparentize } from 'polished'

const blur = keyframes`
    from {
        -webkit-backdrop-filter: blur(0px);
        backdrop-filter: blur(0px);
    }
    to {
        -webkit-backdrop-filter: blur(1px);
        backdrop-filter: blur(1px);
    }
`

export default createGlobalStyle`
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px #f7f7f8 inset !important;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;

      font-family: 'Poppins', Arial, Helvetica, sans-serif;
      font-weight: 400;
    }

    html, body, #root {
      height: 100%;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .modal-overlay {
        position: absolute;
        background: ${transparentize(0.8, '#030229')};
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        animation: ${blur} 300ms ease-in both;

        z-index: 999;
    }

    .modal-content {
        background: #fff;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.10) 0px 0px 10px;
        padding: 30px;
        max-height: 92vh;
        min-height: 30vh;
    }

    .modal-overlay-right {
        position: absolute;
        background: ${transparentize(0.8, '#030229')};
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    .modal-content-right {
        background: #fff;
        border-radius: 0px;
        height: 100vh;
        box-shadow: rgba(0, 0, 0, 0.10) 0px 0px 10px;
        padding: 30px;
    }

    ::-webkit-scrollbar-thumb {
        background: #e23737;
    }

    ::-webkit-scrollbar-track {
        background-color: #ccaaaa;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
`