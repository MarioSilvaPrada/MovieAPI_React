import styled from "styled-components";

export const StyledNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  color: ${props => props.color};
  border: ${props => (props.color ? "2px solid #003459" : "")};
  padding: ${props => (props.color ? ".5rem" : "")};
  font-weight: ${props => (props.color ? "bold" : "")};
  border-radius: ${props => (props.color ? "200%" : "")};
`;

export const StyledPages = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 3rem;
  max-width: 40rem;
  margin: 3rem auto;
`;