import React from "react";
import { Container, SmallTitle } from "./styles";
import type { RiskCardProps } from "./types";
import { Paragraph } from "src/components";

export default function RiskCard({
  color,
  title,
  description,
}: RiskCardProps) {
  return (
    <Container color={color}>
      <SmallTitle>{title}</SmallTitle>
      <Paragraph color="#FFF">{description}</Paragraph>
    </Container>
  );
}
