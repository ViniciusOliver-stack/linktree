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
      <h1>Developer Front-end</h1>
      <p>Developer Front-end</p>

      <ul>

        <ButtonLink link="https://www.linkedin.com/in/viniciussantos-oliveira/" 
        title="Add on me Linkedin" />

        <ButtonLink link="https://github.com/ViniciusOliver-stack" 
        title="Add on me Github" />

        <ButtonLink link="#" 
        title="Download CV" />

        <ButtonLink link="#" 
        title="Discovery my portfolio" />

        <ButtonLink link="https://github.com/ViniciusOliver-stack/Rocketseat-Explorer/tree/main/projeto-09" 
        title="See my last project" />
      </ul>

      <p class="hashtag">Seeking the next level! 💜</p>

    </Container>
  )
}
