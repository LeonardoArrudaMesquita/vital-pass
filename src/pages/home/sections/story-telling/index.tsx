import React from "react";
import { Container, Content, Header, SmallTitle } from "./styles";
import { Paragraph, Title } from "src/components";
import { StoryCard } from "./components/story-card";

export function StoryTelling() {
  const data = [
    {
      color: "#14E6C3",
      situation: "João, 55 anos, obeso e sem acompanhamento",
      title: "Dor",
      description:
        "João, um homem de 55 anos, enfrenta desafios significativos devido ao sobrepeso e à falta de acompanhamento após a cirurgia bariátrica. Sua saúde se deteriora, e ele se sente preso em um ciclo de frustração e impotência.",
    },
    {
      color: "#00BBB4",
      situation: "Descobre a Vital Pass e encontra 3 profissionais",
      title: "Solução",
      description:
        "Em um momento crucial, João descobre a Vital Pass, uma plataforma que conecta pacientes a profissionais de saúde. Em apenas 7 minutos, ele encontra três especialistas prontos para ajudá-lo em sua jornada de recuperação.",
    },
    {
      color: "#0F81BD",
      situation: "Perde 15kg em 3 meses e recupera sua mobilidade",
      title: "Resultado",
      description:
        "Após seguir o plano de cuidados sugerido pelos profissionais, João perde 15 kg em apenas 3 meses. Ele não só recupera sua mobilidade, mas também redescobre a alegria de viver, engajando-se em atividades que antes eram impossíveis.",
    },
  ];

  return (
    <Container>
      <Header>
        <Title color="#0A4073" align="center">
          A Jornada Transformadora de João
        </Title>
        <Paragraph>
          A trajetória inspiradora de um homem em busca de saúde
        </Paragraph>
      </Header>

      <Content>
        {data.map(({ color, situation, title, description }, index) => (
          <StoryCard
            key={index}
            color={color}
            situation={situation}
            title={title}
            description={description}
          />
        ))}
      </Content>
    </Container>
  );
}
