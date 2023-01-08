import { Container } from './style'

export function ButtonLink({title, link}){
  return(
    <Container
   href={link}
    target="_blank"
    >
      {title}
    </Container>
  )

}