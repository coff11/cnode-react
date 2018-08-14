import styled from 'styled-components'

export const TabWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 10px auto 0 auto;
  font-size: 16px;
  line-height: 60px;
  height: 60px;
  
  a {
    padding: 20px 30px;
  }
  .pink-bottom {
    border-bottom: 3px solid pink;
  }
  a:hover {
    opacity: .9;
    transition: all .2s;
  }
`