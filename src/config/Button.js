import React from 'react'
import styled from "styled-components";

const StyledButton = styled.a`
  border: 2px solid white;
  background: #003459;
  width: 6rem;
  text-align: center;
  padding: 1rem;
  border-radius: 2rem;
  text-decoration: none;
  color: white;
  margin: 1rem;
`;

const Button = ({ title, href }) => (
  <StyledButton href={href} target='_blank'>{title}</StyledButton>
);

export default Button;
