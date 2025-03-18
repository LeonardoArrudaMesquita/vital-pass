import React from 'react'
import { Container, Content, Highlight, SmallTitle } from './styles'
import type { OpportunityCardProps } from './types'
import { Paragraph } from 'src/components'

export default function OpportunityCard({ color, highlighted, title, description }: OpportunityCardProps) {
  return (
    <Container>
        <Highlight color={color}>{highlighted}</Highlight>
        <Content>
            <SmallTitle>{title}</SmallTitle>
            <Paragraph>{description}</Paragraph>
        </Content>
    </Container>
  )
}
