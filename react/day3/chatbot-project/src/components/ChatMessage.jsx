import dayjs from 'dayjs';
import UserProfileImage from '../assets/profile1.jpg';
import RobotProfileImage from '../assets/robot.png';
import './ChatMessage.css';

export function ChatMessage({message, sender, time, isLoading}) {
  return (
    <div className={sender == "robot" ? "chat-message-robot" : "chat-message-user"}>
      {sender == "robot" && <img src={RobotProfileImage} alt="robot" className="chat-message-profile"/>}
      <div className="chat-message-text">
        <div>
          {(sender == "robot" && isLoading && !message) ? <img src="https://supersimple.dev/images/loading-spinner.gif" alt="loading" className="loading"/> : message} 
        </div>
        <div className="chat-message-time">
          {dayjs(time).format('h:mma')}
        </div>
      </div>
      {sender == "user" && <img src={UserProfileImage} alt="user" className="chat-message-profile"/>}
    </div>
  );
}