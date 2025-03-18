import { Content, MainContainer, Photo, SubTitle } from './styles';
import { Paragraph, Title } from 'src/components';

export function About() {
  return (
    <MainContainer>
      <Photo />
      <Content>
        <SubTitle>Acesso a Saúde</SubTitle>
        <Title color='#0A4073'>Vital Pass: A Revolução no Acesso à Saúde Personalizada</Title>
        <Paragraph>Conectando idosos, obesos e PNEs aos melhores profissionais de saúde e bem-estar com tecnologia inovadora</Paragraph>
      </Content>
    </MainContainer>
  );
}
