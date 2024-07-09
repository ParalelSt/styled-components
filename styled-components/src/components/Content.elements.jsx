import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
`;
export const LeftContent = styled.div`
  padding: 1.5em 0 0 1em;
  flex: 1;
  width: 100%;

  .upper-section ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }

  img {
    height: 1.8em;
    width: 1.8em;
    margin-right: 0.5em;
  }

  .arrow-image {
    transform: rotate(90deg);
  }

  .lower-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 {
    margin-bottom: 0.5em;
  }

  .shortcuts {
    display: flex;
    align-items: center;
    border-top: 1px solid gray;
  }

  .info ul {
    display: flex;
    align-items: center;
  }
`;
export const MiddleContent = styled.div`
  flex: 3;
  padding: 0 5em;
`;
export const RightContent = styled.div`
  flex: 1;
  padding: 1.5em 0 0 1em;

  .container {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    padding-left: 0.7em;
  }

  .image-container {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5em 0 0.5em 0.7em;
    border-radius: 10px;
    width: 100%;
  }

  li:hover {
    background-color: rgba(202, 202, 202, 0.4);
  }

  img {
    margin-right: 0.5em;
    border-radius: 100%;
    height: 2em;
  }

  div img {
    height: 1.2em;
    width: 1.2em;
    margin-right: 1.1em;
  }
`;
