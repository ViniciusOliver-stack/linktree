import { ButtonLink } from '../../components/ButtonLinks'
import { Container } from './style'
export function Home() {
  return (
    <Container>

      <section class="animated-background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>

      <img src="https://iili.io/H5kGAjp.png" alt="" />
      <h1>Vinicius Santos Oliveira</h1>
      <p>Developer Front-end</p>

      <ul>

        <ButtonLink href="https://www.linkedin.com/in/viniciussantos-oliveira/" 
        title="Add on me Linkedin" />

        <ButtonLink href="https://github.com/ViniciusOliver-stack" 
        title="Add on me Github" />

        <ButtonLink href="https://drive.google.com/uc?id=1R5_hhN5klm7w-jm6FSX8QWu23CTMlZ3J&export=download" 
        title="Download CV" />

        <ButtonLink href="#" 
        title="Discovery my portfolio" />
      </ul>

      <p class="hashtag">Seeking the next level! 💜</p>

    </Container>
  )
}
