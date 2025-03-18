import React from "react";
import {
  Container,
  Header,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./styles";
import { Paragraph, Title } from "src/components";

export function Plans() {
  const data = [
    {
      plan: "Sessões Avulsas",
      price: "R$ 99-150 por sessão",
      benefit: "Pagamento por sessão, ideal para quem busca flexibilidade.",
    },
    {
      plan: "Pacotes Personalizados",
      price: "Variável",
      benefit: "Combinação de serviços com descontos progressivos.",
    },
    {
      plan: "Plano Básico",
      price: "R$ 99/mês",
      benefit: "Acesso a conteúdos exclusivos e descontos em serviços.",
    },
    {
      plan: "Plano Premium",
      price: "R$ 299/mês",
      benefit: "1 sessão inclusa + benefícios extras e acesso prioritário.",
    },
    {
      plan: "Plano VIP",
      price: "R$ 599/mês",
      benefit:
        "4 sessões inclusas + prioridade no agendamento e benefícios adicionais.",
    },
  ];

  return (
    <Container>
      <Header>
        <Title color="#0A4073" align="center">
          Modelos de Compra e Planos
        </Title>
        <Paragraph>Flexibilidade e Personalização na Contratação</Paragraph>
      </Header>

      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Tipo de Plano</TableHeaderCell>
            <TableHeaderCell>Preço</TableHeaderCell>
            <TableHeaderCell>Benefícios</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
        {data.map(({ plan, price, benefit }, index) => (          
            <TableRow key={index}>
              <TableCell>{plan}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{benefit}</TableCell>
            </TableRow>
          ))}
          </TableBody>
      </Table>
    </Container>
  );
}
