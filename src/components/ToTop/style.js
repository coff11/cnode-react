import styled from 'styled-components'

export const Back = styled.a`
  display: inline-block;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  color: #fff;
  background: #13c2c2;
  position: fixed;
  bottom: 40px;
  right: 50px;
  transition: all .2s;
  opacity: 0;
  &:hover {
    background: #08979c;
    color: #eee;
  }
`