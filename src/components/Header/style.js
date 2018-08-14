import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 60px;
  background: #13c2c2;
`

export const Logo = styled.div`
  float: left;
  font-size: 20px;
  line-height: 60px;
  margin-left: 50px;
  a {
    padding: 15px;
  }
`

export const Login = styled.div`
  float: right;
  font-size: 16px;
  line-height: 60px;
  margin-right: 50px;
  a {
    padding: 5px 8px;
    background: #006d75;
    border-radius: 4px;
    opacity: .8;
    color: #fff;
    transition: opacity .5s;
  }
  a:hover {
    color: #eee;
    opacity: 1;
  }
`