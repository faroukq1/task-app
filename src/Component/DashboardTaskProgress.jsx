import { AiOutlineStar } from 'react-icons/ai';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useDashboardContext } from '../Context/DashboardContext';
import Wrapper from '../style/DashboardTaskProgressStyle';
const DashboardTaskProgress = ({ company }) => {
  const { getCompanyTaskDetails, getCompanyList } = useDashboardContext();
  const {
    companyName,
    companyTasksNumber,
    companyTasksDoneNumber,
    companyLogo,
  } = getCompanyTaskDetails(company);

  if (!(companyTasksDoneNumber || companyTasksNumber)) {
    return (
      <Wrapper>
        <div className="error">
          <h3>didn't find {companyName !== '' ? companyName : ''} tasks</h3>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="company">
        <div className="info">
          <img src={companyLogo} alt="photo" />
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
            ? 'COMPLETE'
            : 'NOT FINISHED YET'}
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
export default DashboardTaskProgress;
