import { Container } from './style'

export function ButtonLink({title, ...rest}){
  return(
    <Container
    {...rest}
    target="_blank"
    >
      {title}
    </Container>
  )

}