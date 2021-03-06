import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
            box-sizing: border-box;
  }
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
            box-sizing: border-box;
  }
  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, button, textarea, p, blockquote, th, td {
      margin: 0;
      padding: 0;
  }
  body {
      background: #fff;
      color: #444;
      font-size: 14px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
      min-width: 600px;
  }
  td, th, caption {
      font-size: 14px;
  }
  h1, h2, h3, h4, h5, h6 {
      font-weight: normal;
      font-size: 100%;
  }
  address, caption, cite, code, dfn, em, strong, th, var {
      font-style: normal;
      font-weight: normal;
  }
  a {
      color: #555;
      text-decoration: none;
      cursor: pointer;
  }
  img {
      border: none;
      vertical-align: middle;
  }
  ol, ul, li {
      list-style: none;
  }
  input, textarea, select, button {
      font: 14px "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
  table {
      border-collapse: collapse;
  }
  html {
      overflow-y: scroll;
  }
  code {
    white-space: pre-wrap;
  }
  .clearfix:before,
  .clearfix:after {
      content: "";
      display: table;
      clear: both;
  }
  .clearfix {
      *zoom: 1;
  }
`
