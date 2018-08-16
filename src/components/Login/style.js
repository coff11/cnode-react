import styled from 'styled-components'

export const LogWrapper = styled.div`
  width: 80%;
  height: 400px;
  margin: 200px auto;
  text-align: center;
  p {
    padding: 20px;
    font-size: 16px;
  }
  input {
    width: 300px;
    padding: 10px;
  }
  img {
    width: 100px;
  }
 
`

export const LogBtn = styled.div`
  width: 80px;
  height: 30px;
  background: #13c2c2;
  text-aligin: center;
  line-height: 30px;
  color: #fff;
  margin: 30px auto;
  cursor: pointer;
  border-radius: 5px;
  transition: all .2s;
  &:hover {
    background: #08979c;
  }
  a {
    padding: 8px 24px;
    color: #eee;
  }
`

export const Info = styled.ul`
  margin: 20px auto;
  width: 400px;
  li {
    padding: 10px;
  }
  a {
    color: #096dd9;
  }
`
