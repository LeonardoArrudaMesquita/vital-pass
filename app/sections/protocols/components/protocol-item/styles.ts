import styled from "styled-components";
import type { SpecialistTagProps } from "./types";
import { Paragraph } from "src/components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    column-gap: 1rem;
`;

export const SpecialistTag = styled.div<SpecialistTagProps>`    
    border-radius: 0.8rem;
    color: #FFF;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 0.8rem;
    background-color: ${(props) => props.bgcolor};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    row-gap: 1.6rem;
`;

export const SmallTitle = styled.p`
    font-size: 2rem;
    color: #000;
    font-weight: 700;
`;