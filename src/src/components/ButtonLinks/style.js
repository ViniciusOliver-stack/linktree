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

  background: #ffffff1a;
  border-radius: 8px;
  backdrop-filter: blur(.4rem);
  -webkit-backdrop-filter: blur(.4rem);
  border: 1.5px solid #00000080;

  &:hover{
    filter: brightness(.5);
    border: 1px solid #fff;
  }
`