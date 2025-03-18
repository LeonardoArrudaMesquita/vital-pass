import React from 'react'
import { Container, Situation, SmallTitle } from './styles'
import type { StoryCardProps } from './types'
import { Paragraph } from 'src/components'

export function StoryCard({ color, situation, title, description }: StoryCardProps) {
  return (
    <Container>
        <Situation color={color}>{situation}</Situation>
        <SmallTitle>{title}</SmallTitle>
        <Paragraph>{description}</Paragraph>
    </Container>
  )
}