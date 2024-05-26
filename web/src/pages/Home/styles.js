import { Link } from 'react-router-dom'
import styled from 'styled-components'
{Link}
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  /* grid-template-columns: 250px auto; */
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header header"
    "content content"
    "content content"
    "content content";
  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`



export const Menu = styled.ul`
  grid-area: menu;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;
  text-align: center;
  > li {
    margin-bottom: 24px;
  }
`
export const Content = styled.div`
  grid-area: content;
  padding: 0px 64px;
  overflow-y: auto;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 50px 0 40px;
    }
    a {
      /* width: 207px;
      height: 48px; */
      padding: 13.5px 32px;
      background-color: ${({theme}) => theme.COLORS.PINK};
      border-radius: 10px;
      text-align: center;
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    }
  }
`