import React from 'react'
import { Paragraph as ParagraphSC } from './styles';
import type { ParagraphProps } from './types';

export function Paragraph({ children, color = "grey" }: ParagraphProps) {
  return (
    <ParagraphSC color={color}>{children}</ParagraphSC>
  )
}
