import React from "react";
import { Container, Header } from "./styles";
import { Paragraph, Title } from "src/components";
import StrategyCard from "./components/strategyCard";

export function Strategies() {
  const data = [
    {
      color: "#14E6C3",
      title: "Marketing Digital",
      description:
        "Implementação de anúncios segmentados através de plataformas como Google Ads e Meta Ads, além de parcerias com influenciadores e realização de testes A/B para otimização de campanhas.",
    },
    {
      color: "#00BBB4",
      title: "Parcerias Estratégicas",
      description:
        "Desenvolvimento de colaborações com clínicas, academias e convênios médicos para expandir a rede de alcance e aumentar a credibilidade no mercado.",
    },
    {
      color: "#0F81BD",
      title: "Eventos e Feiras",
      description:
        "Participação ativa em eventos de saúde e bem-estar, promovendo a marca e interagindo diretamente com potenciais clientes e parceiros de negócios.",
    },
    {
      color: "#013C7E",
      title: "Programa de Indicação",
      description:
        "Criação de um programa de indicação que oferece aos usuários benefícios, como um mês grátis, ao indicarem amigos, incentivando a expansão da base de clientes.",
    },
  ];

  return (
    <Container>
      <Header>
        <Title color="#0A4073" align="center">
          Conquistando o Mercado com Estratégias Inovadoras
        </Title>
        <Paragraph>
          Explorando táticas inovadoras para expandir a base de clientes
        </Paragraph>
      </Header>
      {data.map(({ color, title, description }, index) => (
        <StrategyCard
          color={color}
          title={title}
          description={description}
          key={index}
        />
      ))}
    </Container>
  );
}
