import React from "react";
import { Container, Content, Header } from "./styles";
import { Paragraph, Title } from "src/components";
import { GrowthCard } from "./components/GrowthCard";

export function Growth() {
  const data = [
    {
      color: "#14E6C3",
      title: "Crescimento inicial significativo",
      highlight: "1.000 clientes ativos no Mês 6",
      description:
        "Atingir 1.000 clientes ativos em apenas 6 meses demonstra uma aceitação rápida do mercado e validação do produto.",
    },
    {
      color: "#00BBB4",
      title: "Expansão acelerada",
      highlight: "5.000 clientes ativos no Mês 12",
      description:
        "O crescimento para 5.000 clientes ativos em um ano aponta para uma trajetória de expansão robusta e potencial de mercado ainda não explorado.",
    },
    {
      color: "#0F81BD",
      title: "Geração de receita relevante",
      highlight: "R$ 1.8 mi de receita anual estimada",
      description:
        "Com uma receita anual projetada de R$ 1,8 milhões, a empresa não só cobre suas despesas operacionais, mas também proporciona margem para reinvestimentos.",
    },
    {
      color: "#013C7E",
      title: "Retorno sobre investimento atraente",
      highlight: "ROI de 4,2x em 18 meses",
      description:
        "Um ROI de 4,2x em um período de 18 meses indica que cada real investido está retornando mais de quatro reais, que é um sinal forte de viabilidade financeira.",
    },
    {
      color: "#14E6C3",
      title: "Rentabilidade saudável",
      highlight: "Margem EBITDA de 34% no Ano 3",
      description:
        "Com uma margem EBITDA de 34%, a empresa demonstra eficiência operacional e um modelo de negócios sustentável que pode suportar flutuações de mercado.",
    },
  ];

  return (
    <Container>
      <Header>
        <Title color="#0A4073" align="center">
          Crescimento Sólido e Lucrativo
        </Title>
        <Paragraph>Projeções e Metas Financeiras Estratégicas</Paragraph>
      </Header>
      <Content>
        {data.map(({ title, color, highlight, description }) => (
          <GrowthCard
            color={color}
            title={title}
            highlight={highlight}
            description={description}
          />
        ))}
      </Content>
    </Container>
  );
}
