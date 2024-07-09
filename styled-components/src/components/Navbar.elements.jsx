import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 4em;
  background-color: white;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0.5em;

  img {
    max-height: 80%;
    margin-right: 0.5em;
    cursor: pointer;
  }

  label {
    border-radius: 50px;
    background-color: #7979791f;
    padding: 0 0.5em;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span img {
    height: 1.1em;
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 0.9em;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  .page-selector {
    display: flex;
    justify-content: center;
    width: 25%;
    height: 85%;
    border-radius: 10px;
  }

  a {
    display: flex;
    align-items: center;
  }

  .page-selector:hover {
    background-color: #7979791f;
  }

  .page-selector div {
  }

  img {
    height: 1.6em;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0.5em;
  gap: 0.5em;

  a {
    display: flex;
    padding: 0.7em;
    border-radius: 100%;
    background: #efefef;
  }

  img {
    height: 1.4em;
  }

  div {
    display: flex;
    border-radius: 100%;
    background: #efefef;
    cursor: pointer;
  }

  div img {
    border-radius: 100%;
    object-fit: cover;
    height: 2.8em;
  }

  a:hover {
    background-color: hsla(0, 0%, 47.45098039215686%, 0.3);
  }

  div:hover {
    filter: brightness(92%);
    transition: 0.2s;
  }
`;
