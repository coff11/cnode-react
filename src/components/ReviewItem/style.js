import styled from 'styled-components'

export const ItemWrapper = styled.li`
  min-height: 60px;
  display: flex;
  padding: 10px 10px;
  border-bottom: 2px solid #eee;
  border-left: 2px solid #eee;
  border-right: 2px solid #eee;
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

export const RightWrapper = styled.div`
  .user-name {
    margin-left: 20px;
    padding-right: 20px;
  }
  .review-content {
    padding: 10px 0 10px 20px;
    img {
      width: 300px;
    }
    pre, code {
      max-width: 600px;
    }
  }
`