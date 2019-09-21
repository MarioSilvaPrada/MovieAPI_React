import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  border: 2px solid white;
  background: #003459;
  width: 8rem;
  text-align: center;
  padding: 1rem;
  border-radius: 2rem;
  text-decoration: none;
  color: white;
  margin-right: 3rem;
  font-weight: bold;
  transition: .5s;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: #003459;
    background: white;
    transition: .5s;
  }
`;

const Button = ({ title, href }) => (
  <StyledButton href={href} target="_blank">
    {title}
  </StyledButton>
);

export default Button;
