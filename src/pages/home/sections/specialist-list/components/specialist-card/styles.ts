import styled from "styled-components";
import type { SpecialistTagProps } from "./types";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;    
`

export const SpecialistTag = styled.div<SpecialistTagProps>`    
    border-radius: 0.8rem;
    color: #FFF;
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem;
    background-color: ${(props) => props.bgcolor};
`

export const HighlightedText = styled.p`
    font-size: 1.6rem;
    color: #000;
    font-weight: 700;
`;