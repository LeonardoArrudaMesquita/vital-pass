import React from 'react'
import { Container, Content, Highlight, SmallTitle } from './styles'
import type { StrategyCardProps } from './types'
import { Paragraph } from 'src/components'

export default function StrategyCard({ color, title, description }: StrategyCardProps) {
  return (
    <Container>
        <Highlight color={color} />
        <Content>
            <SmallTitle>{title}</SmallTitle>
            <Paragraph>{description}</Paragraph>
        </Content>
    </Container>
  )
}
