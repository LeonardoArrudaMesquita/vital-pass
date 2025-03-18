import React from "react";
import { List, ListItem, MainContainer, Description } from "./styles";
import { Title } from "src/components";

export function PlatformDetails() {
  return (
    <MainContainer>
      <List>
        <ListItem>Conexão Direta com Profissionais da Saúde</ListItem>

        <Description>
          {" "}
          A Vital Pass oferece uma plataforma digital que conecta diretamente os
          clientes a profissionais de saúde especializados e confiáveis,
          facilitando o acesso a serviços de saúde personalizados e de
          qualidade.{" "}
        </Description>

        <ListItem>Opções Flexíveis de Atendimento</ListItem>

        <Description>
          Os usuários podem escolher entre sessões avulsas, pacotes
          personalizados ou assinaturas mensais, adaptando os serviços às suas
          necessidades especificas e preferências de uso.
        </Description>

        <ListItem>Certificação Vital Seal</ListItem>

        <Description>
          Todos os profissionais disponíveis na plataforma são verificados e
          certificados através do selo Vital Seal, assegurando que os usuários
          recebam atendimento de alta qualidade e segurança.
        </Description>
      </List>
      <Title color="#0A4073" align="center">A Plataforma Completa de Saúde 360°</Title>
    </MainContainer>
  );
}
