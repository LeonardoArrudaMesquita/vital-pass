import React from 'react'
import { Title as TitleSC } from './styles';
import type { TitleProps } from './types';

export function Title({ children, color = '#000', align = 'left' }: TitleProps) {
  return (
    <TitleSC color={color} align={align}>{children}</TitleSC>
  )
}
