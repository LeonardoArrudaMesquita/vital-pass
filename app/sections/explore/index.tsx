import React from 'react'
import { Content, MainContainer, Photo, SubTitle } from './styles'
import { Paragraph, Title } from 'src/components'

export function Explore() {
  return (
    <MainContainer>
        <Photo />
        <Content>
            <SubTitle>Saúde Digital</SubTitle>
            <Title>Vital Pass: Sáude em Suas Mãos</Title>
            <Paragraph>Explore a plataforma Vital Pass, contectando você a profissionais de saúde confiáveis e certificados.</Paragraph>
        </Content>
    </MainContainer>
  )
}
