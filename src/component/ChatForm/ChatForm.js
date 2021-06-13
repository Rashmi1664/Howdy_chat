import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPaperclip, faSmile } from "@fortawesome/free-solid-svg-icons";
import './ChatForm.scss';

const ChatForm = () => {
    return(
        <div className="chat-form">
        <div className="action-btn">
        <FontAwesomeIcon icon={faSmile} />
        <FontAwesomeIcon icon={faPaperclip} />
        </div>

        <input className="chat-input" placeholder="message" />
        <FontAwesomeIcon className="icon-block" icon={faMicrophone} active />
        </div>
    )
}

export default ChatForm;