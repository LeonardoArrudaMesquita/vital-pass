import React from 'react'
import { Container, SmallTitle, Highlight } from './styles'
import type { GrowthCardProps } from './types'
import { Paragraph } from 'src/components'

export function GrowthCard({ color, title, highlight, description }: GrowthCardProps) {
  return (
    <Container>
        <SmallTitle>{title}</SmallTitle>
        <Highlight color={color}>{highlight}</Highlight>
        <Paragraph>{description}</Paragraph>
    </Container>
  )
}