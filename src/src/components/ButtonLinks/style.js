import styled from "styled-components"

export const Container = styled.a`
  color: ${({theme}) => theme.COLORS.WHITE};
  font-size: 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 98%;
  padding: 1.3rem 2.6rem;
  margin: 1rem;

  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border: 1.5px solid rgba(255, 255, 255, 0.3);

  &:hover{
    filter: brightness(.5);
  }
`