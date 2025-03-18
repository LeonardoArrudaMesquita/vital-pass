import styled from "styled-components";

export const Container = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(210, 250, 240, 1) 100%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5rem;
  column-gap: 2rem;

  @media only screen and (max-width: 1024px) {
    height: auto;
    row-gap: 5rem;
    padding: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;

  @media only screen and (max-width: 1024px) {        
    padding: 5rem 5rem 0 5rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: auto;
  text-align: center;
  font-size: 1.6rem;

  th:first-child {
    border-radius: 8px 0 0 0;
  }

  th:last-child {
    border-radius: 0 8px 0 0;
  }
`;

export const TableHeader = styled.thead`
  background-color: #14e6c3;
  color: white;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

export const TableHeaderCell = styled.th`
  padding: 15px;
  text-align: left;
  text-align: center;
  font-size: 1.6rem;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;

  &:last-child td:first-child {
    border-bottom-left-radius: 1rem;
  }

  &:last-child td:last-child {
    border-bottom-right-radius: 1rem;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
`;
