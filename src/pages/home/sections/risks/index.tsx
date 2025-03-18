import React from "react";
import { Container, Content, Header } from "./styles";
import { Paragraph, Title } from "src/components";
import RiskCard from "./components/RiskCard";

export function Risks() {
  const data = [
    {
      color: "#14E6C3",
      title: "Adoção Lenta pelo Público-Alvo",
      description:
        "Risco: Usuários idosos e PNEs podem ter dificuldades com a plataforma digital. Mitigação: Interface intuitiva, tutoriais acessíveis e suporte dedicado para auxiliar esses usuários na adaptação.",
    },
    {
      color: "#00BBB4",
      title: "Desafios Regulatórios",
      description:
        "Risco: Alterações nas regulamentações de saúde que possam impactar a operação. Mitigação: Equipe jurídica ativa e monitoramento constante das normas, garantindo conformidade e adaptação rápida às mudanças.",
    },
    {
      color: "#0F81BD",
      title: "Concorrência Acirrada",
      description:
        "Risco: Entrada de novos players no mercado de saúde digital. Mitigação: Inovação contínua, certificação Vital Seal e parcerias estratégicas para diferenciar os serviços e manter a competitividade.",
    },
    {
      color: "#013C7E",
      title: "Segurança de Dados",
      description:
        "Risco: Vazamento de informações sensíveis dos usuários. Mitigação: Criptografia robusta, auditorias regulares e conformidade com LGPD, assegurando a proteção dos dados pessoais.",
    },
    {
      color: "#14E6C3",
      title: "Dependência de Profissionais Qualificados",
      description:
        "Risco: Manter um time de alta qualidade pode ser desafiador. Mitigação: Processo rigoroso de seleção, treinamentos contínuos e incentivos para retenção, promovendo um ambiente de trabalho motivador.",
    },
  ];

  return (
    <Container>
      <Header>
        <Title color="#0A4073" align="center">
          Riscos e Estratégias de Mitigação
        </Title>
        <Paragraph>
          Identificação e Resolução de Desafios no Setor de Saúde Digital
        </Paragraph>
      </Header>

      <Content>
        {data.map(({ color, title, description }, index) => (
          <RiskCard            
            color={color}
            title={title}
            description={description}
            key={index}
          />
        ))}
      </Content>
    </Container>
  );
}
