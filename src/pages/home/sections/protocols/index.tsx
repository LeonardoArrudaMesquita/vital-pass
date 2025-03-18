import React from "react";
import { Container, Header } from "./styles";
import { Paragraph, Title } from "src/components";
import { ProtocolList } from "./components/protocol-list";

export function Protocols() {
  const data = [
    {
      color: "#14E6C3",
      title: "Saúde Sexual e Performance",
      description:
        "O fortalecimento do assoalho pélvico é essencial para a saúde sexual e melhora na performance. Estudos mostram que essa prática pode levar a um aumento de 67% na satisfação sexual, conforme um estudo realizado pela USP em 2022.",
    },
    {
      color: '#00BBB4',
      title: "Reabilitação e Mobilidade",
      description:
        "As sessões de treinamento são adaptadas para atender às necessidades de idosos, pacientes pós-operatórios e pessoas com necessidades especiais (PNEs). Isso garante que todos possam participar e beneficiar-se do exercício físico, promovendo a reabilitação e a melhora da mobilidade.",
    },
    {
      color: "#0F81BD",
      title: "Saúde Cardiorrespiratória",
      description:
        "Programas específicos são desenvolvidos para melhorar a capacidade física de grupos como obesos e idosos. Essas iniciativas visam aumentar a resistência cardiorrespiratória e a qualidade de vida dos participantes.",
    },
    {
      color: "#013C7E",
      title: "Condicionamento para Perda de Peso",
      description:
        "A combinação de exercícios físicos com acompanhamento nutricional é fundamental para um programa eficaz de perda de peso. Essa abordagem integrada ajuda os indivíduos a alcançarem seus objetivos de saúde e bem-estar de forma sustentável.",
    },
  ];

  return (
    <Container>
      <Header>
        <Title color="#0A4073" align="center">
          Protocolos Validados para Resultados Comprovados
        </Title>
        <Paragraph>
          Explorando as vantagem de treinos específicos e diferenciados
        </Paragraph>
      </Header>

      <ProtocolList data={data}></ProtocolList>
    </Container>
  );
}
