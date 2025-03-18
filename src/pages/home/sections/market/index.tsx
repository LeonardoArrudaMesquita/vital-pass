import React from "react";
import { Content, Header, MainContainer } from "./styles";
import { Paragraph, Title } from "src/components";
import { MarketCard } from "./components/MarketCard";

export function Market() {
  return (
    <MainContainer>
      <Header>
        <Title>Um Mercado Bilionário: Sua Chance de Impactar Vidas</Title>
        <Paragraph>
          Uma visão detalhada das oportunidades no setor de saúde e bem-estar
        </Paragraph>
      </Header>
      <Content>
        <MarketCard
          amount="R$ 60 bi"
          title="Mercado Total de Saúde e Bem-Estar"
          description="O TAM (Total Addressable Market) representa R$ 60 bilhões, indicando uma enorme oportunidade no setor de saúde e bem-estar, fundamental para atrair investimentos e inovações."
        />
        <MarketCard
          amount="R$ 9.3 bi"
          title="Segmento Específico de Consumidores"
          description="O SAM (Serviceable Available Market) é de R$ 9,3 bilhões, focando em idosos, obesos e pessoas com necessidades especiais (PNEs), evidenciando a relevância de produtos e serviços adaptados."
        />
      </Content>
    </MainContainer>
  );
}
