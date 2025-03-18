import styled from "styled-components";
import type { ContainerProps } from "./types";

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.color};  
  display: flex;
  flex-direction: column;  
  column-gap: 2rem;  
  padding: 7rem 2rem;
  text-align: center;
  justify-content: center;
  row-gap: 2rem;
`;

export const SmallTitle = styled.h2`
    font-size: 2rem;
    color: #FFF;
    font-weight: 700;
`;