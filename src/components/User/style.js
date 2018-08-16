import styled from 'styled-components'

export const UserWrapper = styled.div`
  width: 80%;
  margin: 30px auto;
`

export const UserAvatar = styled.div`
  text-align: center;
  height: 100px;
  background: #e6fffb;
  border-radius: 10px;
  margin-bottom: 100px;
  img {
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: #b5f5ec;
  }
`

export const Logout = styled.div`
  padding-top: 30px;
  a {
    float: right;
    width: 100px;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    height: 30px;
    background: #ff7a45;
    color: #fff;
  }
  a:hover {
    background: #cf1322;
  }
`

export const RecentWrapper = styled.div`
  display: flex;
  ul {
    padding: 20px;
    min-height: 300px;
    border: 1px solid #ddd;
  }
  li {
    padding: 10px;
  }
  .header {
    padding-left: 20px;
    font-size: 16px;
    line-height: 30px;
    height: 30px;
    color: #fff;
    background: #1890ff;
    border-radius: 5px;
  }
  .replies {
    flex: 1;
    min-height: 300px;
    margin-right: 30px;
    
  }
  .topics {
    flex: 1;
    min-height: 300px;
    margin-left: 30px;
  }
`
