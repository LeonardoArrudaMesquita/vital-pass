import React from 'react'
import { Container, Content, SmallTitle, SpecialistTag } from './styles'
import type { ProtocolItemProps } from './types'
import { Paragraph } from 'src/components'

export function ProtocolItem({ color, tag, title, description }: ProtocolItemProps) {
  const tagValue = tag + 1;

  return (
    <Container>
      <SpecialistTag bgcolor={color}>{tagValue.toString().padStart(2, "0")}</SpecialistTag>
      <Content>
        <SmallTitle>{title}</SmallTitle>        
        <Paragraph>{description}</Paragraph>
      </Content>
    </Container>
  )
}