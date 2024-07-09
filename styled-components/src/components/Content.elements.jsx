import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
`;
export const LeftContent = styled.div`
  padding: 1.5em 0 0 1em;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

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
    flex: 1;
  }

  h2 {
    margin-bottom: 0.5em;
  }

  .shortcuts {
    display: flex;
    align-items: center;
    border-top: 1px solid gray;
  }

  .shortcut-container {
    margin-bottom: auto;
  }

  .info ul {
    display: flex;
    align-items: center;
  }
  li {
    list-style-type: circle;
  }
`;
export const MiddleContent = styled.div`
  flex: 3;
  padding: 0 5em;

  .cards {
    display: flex;
    justify-content: space-around;
    padding: 1.5em 0;

    .card {
      flex: 1;
      position: relative;
      border-radius: 10px;

      p {
        position: relative;
        top: 13.5em;
        right: 3.5em;
        color: white;
      }

      .profile-image {
      }

      .add-story {
        position: relative;
      }
    }

    .card-image {
      height: 15em;
      width: 8em;
      border-radius: 10px;
    }

    .card-profile {
      position: absolute;
      top: 0.6em;
      right: 4.8em;
      border-radius: 100%;
      height: 2.2em;
      width: 2.2em;
      border: 4px solid blue;
    }

    img {
      height: 5em;
    }

    .middle-container {
      display: flex;
      flex-direction: column;

      .upper-section {
        img {
          height: 1em;
          width: 1em;
        }
      }
    }

    .lower-section {
      ul li img {
        height: 0.5em;
        width: 1em;
      }
    }
  }
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
