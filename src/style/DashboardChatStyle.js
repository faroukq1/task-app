import styled from 'styled-components';
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  height: fit-content;
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  h1 {
    font-size: 20px;
    font-weight: bold;
    color: #383f4f;
    margin: 1rem 0;
  }
  .chat-holder {
    display: flex;
    flex-direction: column;

    .link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 5px;
      text-decoration: none;
      h3 {
        font-size: 15px;
        margin: 0.3rem 0;
        color: #171c27;
      }
      p {
        color: #4e525a;
        margin: 0.3rem 0;
      }
    }
    .chat-img {
      width: 60px;
      height: 60%;
      border-radius: 50%;
      border: 3px solid #2f63dc;
    }
  }
  .mark-messages {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      height: fit-content;
      padding: 0 3rem;
      background-color: #4e525a1a;
      border-radius: 9999px;
      border-color: transparent;
      cursor: pointer;
      color: #696969;
    }
  }
  .error {
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;
