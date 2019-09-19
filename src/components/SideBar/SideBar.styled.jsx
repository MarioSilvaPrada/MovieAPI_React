import styled from "styled-components";

export const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: 40rem;


  p {
    cursor: pointer;
    padding: 0.4em 0.2em;
    text-align: center;
    padding: 0.5rem 2rem;
    border: 2px solid transparent;
    border-radius: 2rem;
    transition: 0.5s;
  }

  p:hover {
    cursor: pointer;
    color: #00b4db;
    border: 2px solid #00b4db;
    border-radius: 2rem;
  }

  .isSelected {
    color: #00b4db;
    border: 2px solid #00b4db;
    border-radius: 2rem;
    transition: 0.5s;
  }
`;

export const StyledDiscover = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;

`;

export const StyledGenres = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;


  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: .6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 2rem;
  }
`;

export const HeaderNavBar = styled.div`
  height: 5rem;
  width: 100%;
  background: grey;
  position: fixed;
  top: 0;
  left:0;
  z-index:999;
  display: flex;
  align-items: center;
`

export const Hamburguer = styled.div`
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  width: 25px;
  line-height: 1;
  height: auto;
  background-color: transparent;
  cursor: pointer;
  margin-left: 5rem;
`;

export const Bar = styled.span`
  transition: all 0.3s;
  border-radius: 10px;
  margin: 2px 0;
  height: 4px;
  width: 100%;
  display: inline-block;
  background-color: black;
`;
