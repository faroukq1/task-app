import styled from "styled-components";

const Timer = ({ name, time: { hour, secound, minite } }) => {
  console.log(name);

  return (
    <Wrapper>
      <h4>name : {name}</h4>
      <p>{`${hour}hour ${minite}min ${secound}sec`}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
`;

export default Timer;
