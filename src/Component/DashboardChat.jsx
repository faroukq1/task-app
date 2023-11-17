import { Link } from 'react-router-dom';
import { useDashboardContext } from '../Context/DashboardContext';
import Wrapper from '../style/DashboardChatStyle';
const DashboardChat = () => {
  const { profiles } = useDashboardContext();
  if (!profiles || profiles.length === 0) {
    return (
      <Wrapper>
        <div className="error">
          <h1>there is no message!!!</h1>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="mark-messages">
        <h1>Messages</h1>
        <button>mark as readed</button>
      </div>
      <div className="chat-holder">
        {profiles.map((profile) => {
          const { id, avatar, message, name } = profile;
          return (
            <Link to="/chatbox" className="link" key={id}>
              <img className="chat-img" src={avatar} alt="photo" />
              <div>
                <h3>{name}</h3>
                <p>{message}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default DashboardChat;
