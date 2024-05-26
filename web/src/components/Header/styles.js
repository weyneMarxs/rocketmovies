import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  > input {
    width: 630px;
    height: 56px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.WHITE};
    border: none;
    border-radius: 10px;
    padding: 19px 24px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  };
  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
      text-align: right;
    }
    strong {
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  > svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 24px;
    &:hover {
      color: ${({theme}) => theme.COLORS.ORANGE};
    }
  }
`

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`