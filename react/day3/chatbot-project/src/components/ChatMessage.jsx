import dayjs from "dayjs";

import RobotProfileImage from "../assets/images/robot.png";
import UserProfileImage from "../assets/images/user.png";
import './ChatMessage.css';

export function ChatMessage({ message, sender, time }) {
  return (
    <div className="chatmessage-container">
      {sender == "robot" && (
        <div className="chatmessage-item">
          <img src={RobotProfileImage} alt="robot" width="50" />
        </div>
      )}
      <div className="chatmessage-item">
        <div>{message}</div>
        <div>{dayjs(time).format('h:mma')}</div>
      </div>
      {sender == "user" && (
        <div className="chatmessage-item">
          <img src={UserProfileImage} alt="user" width="50" />
        </div>
      )}
    </div>
  );
}
