import React from "react";
import { Container, Header } from "./styles";
import { Paragraph, Title } from "src/components";
import OpportunityCard from "./components/opportunityCard";

export function Opportunities() {
  const data = [
    {
      color: "#14E6C3",
      highlight: "R$",
      title: "Valuation Pré-Money",
      description:
        "A avaliação é comparável a healthtechs em estágio similar, o que indica uma valorização robusta e potencial de crescimento significativo no mercado.",
    },
    {
      color: "#00BBB4",
      highlight: "50%",
      title: "Investimento em Tecnologia",
      description:
        "A alocação de 50% dos recursos para tecnologia demonstra um forte compromisso com a inovação, focando no desenvolvimento do MVP e em segurança cibernética, essenciais para a confiança do cliente.",
    },
    {
      color: "#0F81BD",
      highlight: "30%",
      title: "Aquisição de Clientes",
      description:
        "Destinar 30% para aquisição de clientes é uma estratégia vital para aumentar a base de usuários e garantir a sustentabilidade do negócio a longo prazo.",
    },
    {
      color: "#013C7E",
      highlight: "20%",
      title: "Compliance e Expansão",
      description:
        "Os 20% alocados para compliance, equipe e expansão refletem a importância da conformidade regulatória e do fortalecimento da equipe para suportar o crescimento futuro.",
    },
  ];

  return (
    <Container>
      <Header>
        <Title color="#0A4073" align="center">
          Oportunidade de Investimento
        </Title>
        <Paragraph>
          Invista na Total Pass - Transforme o Cuidado com a Saúde
        </Paragraph>
      </Header>
      {data.map(({ color, title, description, highlight }) => (
        <OpportunityCard
          color={color}
          highlighted={highlight}
          title={title}
          description={description}
        />
      ))}
    </Container>
  );
}
