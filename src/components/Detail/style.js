import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  .hide {
    opacity: 0;
  }
  .show {
    opacity: 1;
  }
`

export const BackToHome = styled.div`
  font-size: 16px;
  line-height: 40px;
  position: fixed;
  top: 60px;
  right: 30px;;
  margin: 10px 0 0 20px;
  a {
    padding: 10px 20px;
    background: #91d5ff;
    color: #fff;
    border-radius: 5px;
    transition: all .1s;
  }
  a:hover {
    background: #096dd9;
  }
`

export const DetailHeader = styled.div`
  height: 140px;
  padding: 30px 0;
  text-align: center;
  .title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
  }
  .author {
    padding-right: 30px;
    padding-left: 10px;
  }
  .create-time {
    padding: 0 20px;
  }
`
export const DetailBody = styled.div`
  width: 80%;
  padding-bottom: 50px;
  margin: 0 auto;
  p {
    padding: 10px 0;
    text-indent: 20px;
  }
  h1 {
    font-size: 22px;
    padding: 10px 0;
  }
  h2 {
    font-size: 20px;
    padding: 10px 0;
  }
  h3 {
    font-size: 18px;
    padding: 10px 0;
  }
  h4 {
    font-size: 16px;
    padding: 10px 0;
  }
  a {
    color: #096dd9;
  }
  a:hover {
    text-decoration: underline;
  }
  code {
    background: #eee;
    border-radius: 10px;
  }
  img {
    width: 600px;
  }
`


export const ReviewInfo = styled.div`
  height: 40px;
  line-height: 40px;
  background: #40a9ff;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 30px;
`

export const ReviewArea = styled.div`
  overflow: hidden;
  textarea {
    width: 100%;
    height: 200px;
    padding: 30px;
  }
  .rev-btn {
    display: inline-block;
    float: right;
    margin: 10px 30px 10px 0;
    width: 50px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    background: #40a9ff;
    color: #fff;
    transition: all .2s;
    text-align: center;
  }
  .rev-btn: hover {
    background: #0050b3;
  }
`
