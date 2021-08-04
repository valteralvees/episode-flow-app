import logoImg from '../../assets/logo.png';
import { Content, Header } from './style';

export function WelcomeScreen() {
  return(
    <>
    <Header>
      <>
        <a href="#"><img src={logoImg} alt="" /></a>
        <a href="#">Como Funciona</a>
      </>
    </Header>
    <Content>
      <>
        <h1>Chega de Indecisão</h1>
        <h2>EpisodeFlow decide por você o que assistir</h2>
        <button type="button">Vamos lá</button>
        <div>Carrosel</div>
      </>
    </Content>
    </>
  );
}