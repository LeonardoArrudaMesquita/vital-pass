import React from 'react'
import { Container, Content, SmallTitle, SpecialistTag } from './styles'
import type { ProtocolItemProps } from './types'
import { Paragraph } from 'src/components'

export function ProtocolItem({ color, tag, title, description }: ProtocolItemProps) {
  const normalizedTag = tag + 1;
  const formattedTag = normalizedTag.toString().padStart(2, "0");

  return (
    <Container>
      <SpecialistTag bgcolor={color}>{formattedTag}</SpecialistTag>
      <Content>
        <SmallTitle>{title}</SmallTitle>        
        <Paragraph>{description}</Paragraph>
      </Content>
    </Container>
  )
}