import React from 'react'
import type { SpecialistCardProps } from './types'
import { Container, HighlightedText, SpecialistTag } from './styles'
import { Paragraph } from 'src/components'

export function SpecialistCard({ tag, title, description, color }: SpecialistCardProps) {
  return (
    <Container>
        <SpecialistTag bgcolor={color}>{tag.toString().padStart(2, "0")}</SpecialistTag>
        <HighlightedText>{title}</HighlightedText>
        <Paragraph>{description}</Paragraph>
    </Container>
  )
}