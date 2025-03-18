import styled from "styled-components";
import type { HighlightProps } from "./types";

export const Container = styled.div`
  background: rgb(255, 255, 255);
  display: flex;  
  column-gap: 2rem;
  border-radius: 8px;
`;

export const Highlight = styled.h3<HighlightProps>`
  font-size: 3rem;
  background-color: ${(props) => props.color};
  min-width: 6.5rem;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem 2rem 2rem 0;
`;

export const SmallTitle = styled.h2`
    font-size: 2rem;
    color: #000;
    font-weight: 700;
`;