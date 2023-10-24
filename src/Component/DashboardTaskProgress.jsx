import styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useDashboardContext } from "../Context/DashboardContext";

const DashboardTaskProgress = () => {
  const { getCompanyTaskDetails } = useDashboardContext();
  const { companyName, companyTasksNumber, companyTasksDoneNumber } =
    getCompanyTaskDetails("google");
  console.log();
  return (
    <Wrapper>
      <div className="company">
        <div className="info">
          <img src={"google"} alt="photo" />
          <div>
            <h1>{companyName}</h1>
            <p>{companyName}.inc</p>
          </div>
        </div>
        <div className="icon-holder">
          <button>
            <AiOutlineStar className="star" />
          </button>
          <button>
            <BiDotsVerticalRounded />
          </button>
        </div>
      </div>

      <div className="progress">
        <button>
          {companyTasksDoneNumber === companyTasksNumber
            ? "COMPLETE"
            : "NOT FINISHED YET"}
        </button>
        <button className="priority">MEDUIM PRIORITY</button>
      </div>
      <div className="task-done">
        <p>
          Task Done : <span>{companyTasksDoneNumber}</span>/
          <span>{companyTasksNumber}</span>
        </p>
        <div className="taskbar">
          <div
            className="progression"
            style={{
              width: `${(companyTasksDoneNumber * 100) / companyTasksNumber}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="phone-system">
        <button className="ios">IOS APP</button>
        <button className="android">ANDROIND</button>
      </div>
      <div className="dead-line-date">
        <p>
          DUE DATA : <span>30 NOV</span>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: "taskProgress";
  background-color: white;
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 40px;
    height: 40px;
  }
  .company {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .info {
      display: flex;
      align-items: center;
      gap: 1rem;
      h1 {
        font-size: 15px;
        color: #383f4f;
      }
      p {
        color: #383f4f;
      }
    }
    .icon-holder {
      button {
        background-color: transparent;
        border-color: transparent;
        cursor: pointer;
      }
      .star {
        color: #5f5f00;
      }
      svg {
        font-size: 25px;
      }
    }
  }
  .progress {
    display: flex;
    justify-content: space-between;
    button {
      background-color: #00ff95;
      color: #003504;
      font-weight: bold;
      border-color: transparent;
      border-radius: 0.5rem;
      padding: 0.25rem 1rem;
    }
    .priority {
      border: 2px solid #00ff95;
      background-color: #a5a5a520;
    }
  }
  .task-done {
    p {
      color: #656a7f;
      font-weight: bolder;
      font-size: 15px;
    }
    .taskbar {
      width: 100%;
      height: 10px;
      margin: 1rem 0;
      border-radius: 2rem;
      border: 1px solid #ff0095;
      .progression {
        height: 100%;
        background-color: #ff0095;
        transition: 1s all ease;
      }
    }
  }
  .phone-system {
    display: flex;
    gap: 1rem;
    button {
      padding: 0.25rem 1.5rem;
      border-color: transparent;
      border-radius: 15px;
      cursor: pointer;
    }
    .ios {
      background-color: #00ff9526;
      font-weight: bold;
      color: #003504;
    }
    .android {
      background-color: #fd763337;
      color: #fd7733;
      font-weight: bold;
    }
  }
  .dead-line-date {
    padding: 0.25rem 1rem;
    background-color: #fd763342;
    width: fit-content;
    border-radius: 0.25rem;
    cursor: pointer;
    p {
      color: #fd7733;
      font-weight: bold;
    }
  }
`;

export default DashboardTaskProgress;
