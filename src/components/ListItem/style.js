import styled from 'styled-components'

export const Item = styled.li`
display: flex;
align-items: center;
height: 80px;
padding: 10px 20px;
border-bottom: 2px solid #eee;
`

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`

export const Tag = styled.div`
  margin: 0 20px 0 30px;
  width: 50px;
  height:24px;
  line-height: 24px;
  text-align: center;
  border-radius: 4px;
  &.share {
    background: #40a9ff;
    color: #fff;
  }
  &.job {
    background: #f759ab;
    color: #fff;
  }
  &.good {
    background: #7cb305;
    color: #fff;
  }
  &.ask {
    background: #13c2c2;
    color: #fff;
  }
  &.top {
    background: #fa8c16;
    color: #fff;
  }
`

export const InfoWrapper = styled.div`
  width: 100%
`

export const Title = styled.div`
  a {
    font-size: 16px;
    color: #0050b3;
    transition: all .2s;
    &:hover {
      color: #1890ff;
    }
  }
`

export const OthInfo = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  margin-top: 10px;
`
