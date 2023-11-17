import styled from 'styled-components';

const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  margin: 0 0 2rem 0;
  form {
    display: flex;
    align-items: center;
    position: relative;
    width: 30%;
    input {
      padding: 0.5rem 1rem;
      border-radius: 20px;
      background-color: #f7f6f4;
      color: #8d8e92;
      border-color: transparent;
      outline: none;
      width: 100%;
    }
    .search-icon {
      position: absolute;
      right: 10px;
      font-size: 20px;
      color: #8d8e92;
    }
  }
  .avatar {
    display: flex;
    gap: 1rem;
    align-items: center;
    img {
      width: 36px;
      cursor: pointer;
    }
    svg {
      font-size: 24px;
      color: #8d8e92;
      cursor: pointer;
    }
  }
`;

export default Wrapper;
