import React from 'react'
import type { SpecialistCardProps } from './types'
import { Container, HighlightedText, SpecialistTag } from './styles'
import { Paragraph } from 'src/components'

export function SpecialistCard({ tag, title, description, color }: SpecialistCardProps) {
  const normalizedTag = tag + 1;
  const formattedTag = normalizedTag.toString().padStart(2, "0");

  return (
    <Container>
        <SpecialistTag bgcolor={color}>{formattedTag}</SpecialistTag>
        <HighlightedText>{title}</HighlightedText>
        <Paragraph>{description}</Paragraph>
    </Container>
  )
}