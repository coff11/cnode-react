import styled from 'styled-components'

export const ListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

export const Spiner = styled.div`
  width: 80px;
  height: 80px;
  margin: 100px auto;
  background-color: #13c2c2;

  border-radius: 100%; 
  animation: scaleout 1s infinite ease-in-out;


  @keyframes scaleout {
    0% {
      transform: scale(0.0);
    } 
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
  }
`
