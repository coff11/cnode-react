import styled from 'styled-components'

export const ToastWrapper = styled.div`
  width: 300px;
  height: 60px;
  background: #333;
  line-height: 60px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  opacity: .8;
  color: #fff;
  position: fixed;
  top: 30%
  left: 50%;
  transform: translate(-50%, -50%);
  animation: show-toast 1s forwards;
  @keyframes show-toast{
    0% {
      top: 20%;
      opacity: 0;
    }
    100% {
      top: 30%;
      opacity: .9;
    }
  }
`