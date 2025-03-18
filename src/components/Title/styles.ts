import styled from "styled-components";

interface TitleSCProps {
    color: string;
    align: string;
  }

export const Title = styled.h1<TitleSCProps>`
    color: ${(props) => props.color};
    font-size: 4rem;
    text-align: ${(props) => props.align};
`;