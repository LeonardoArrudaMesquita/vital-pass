import React from "react";
import { Container, Header, SpecialistGrid } from "./styles";
import { Paragraph, Title } from "src/components";
import { SpecialistCard } from "./components/specialist-card";

export function SpecialistList() {
  const data = [
    {
      color: "#14E6C3",
      title: "Personal Trainers",
      description:
        "Treinos personalizados para condicionamento e emagrecimento, adaptando-se às necessidades e objetivos individuais de cada cliente.",
    },
    {
      color: '#00BBB4',
      title: "Fisioterapeutas",
      description:
        "Reabilitação, mobilidade e prevenção de dores, oferecendo tratamentos especializados para recuperação e melhoria da qualidade de vida.",
    },
    {
      color: "#0F81BD",
      title: "Nutricionistas",
      description:
        "Planejamento alimentar e controle de peso, elaborando dietas equilibradas que atendem às necessidades nutricionais específicas de cada paciente.",
    },
    {
      color: "#013C7E",
      title: "Quiropraxistas",
      description:
        "Correção postural e alívio de dores, utilizando técnicas manuais para melhorar a função do sistema musculoesquelético.",
    },
    {
      color: "#00D7AF",
      title: "Terapeutas Ocupacionais",
      description:
        "Suporte adaptado para idosos e PCDs, ajudando na realização de atividades diárias e promovendo a independência.",
    },
    {
      color: "#00ADA5",
      title: "Especialistas em Flexibilidade",
      description:
        "Treinos focados em mobilidade e alongamento, contribuindo para a prevenção de lesões e melhoria da performance física.",
    },
    {
      color: "#0F73AB",
      title: "Psicólogos",
      description:
        "Acompanhamento para saúde mental, oferecendo suporte emocional e estratégias de enfrentamento para diversas situações da vida.",
    },
  ];

  return (
    <Container>
      <Header>
        <Title color="#0A4073" align="center">Nossa Rede de Especialistas</Title>
        <Paragraph>Uma equipe dedicada ao seu bem-estar</Paragraph>
      </Header>

      <SpecialistGrid>
        {data.map(({ title, description, color }, index) => (
          <SpecialistCard        
            tag={index + 1}
            color={color}
            title={title}
            description={description}
          />
        ))}
      </SpecialistGrid>
    </Container>
  );
}
