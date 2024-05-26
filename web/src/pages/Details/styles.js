import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";
    >main {
      grid-area: content;
      overflow-y: scroll;
      padding: 64px 0;
    }
`
export const Content = styled.div`
  max-width: 1113px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  > header {
    a {
      color: ${({theme}) => theme.COLORS.PINK}
    }
    > h1 {
      font-size: 36px;
      font-weight: 500;
      padding-top: 64px;
    }
    div.title {
      display: flex;
      align-items: center;
      gap: 19px;
      margin: 24px 0;
    }
    div.info {
      font-size: 14px;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 8px;
      p, span {
        display: flex;
        align-items: center;
        gap: 8px;
        svg {
          color: ${({theme}) => theme.COLORS.PINK}
        }
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
  > div.tags {
    margin: 40px 0;
  }
  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify;
  }
`

export const DeleteBtn = styled.button`
  width: 300px;
  height: 56px;
  border: none;
  border-radius: 10px;
  margin: 3c0px auto;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_BLACK};
  color: ${({theme}) => theme.COLORS.WHITE};
`