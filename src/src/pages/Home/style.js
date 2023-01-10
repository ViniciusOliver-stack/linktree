import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 1rem 0;
  background: ${({theme}) => theme.COLORS.BACKGROUND_DARK};
  color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > .animated-background{
    position: absolute;
    top: 0;
    left:0;

    display: block;
    width: 100%;
    height: 100vh;
  }

  > img, h1, p{
    position: relative;
  }

  > img{
    height: 25%;
  }

  > h1{
    font-size: 2rem;
    margin: 2.5rem 0 1rem 0;
  }

  > p{
    margin-bottom: 2rem;
  }

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
  }

  > p.hashtag{

  transition:all .6s ease-in-out;
  animation: animated 1.3s ease-in-out infinite;

  @keyframes animated {
    0%{
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
}
  }
`