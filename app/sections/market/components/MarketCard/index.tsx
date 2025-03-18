import React from 'react'
import type { MarketCardProps } from './types'
import { Container, Money, HighlightedText } from './styles'
import { Paragraph } from 'src/components'

export function MarketCard({ amount, title, description }: MarketCardProps) {
  return (
    <Container>
        <Money>{amount}</Money>
        <HighlightedText>{title}</HighlightedText>
        <Paragraph>{description}</Paragraph>
    </Container>
  )
}
