import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import './ChatHeader.scss';

const ChatHeader = () => {
    return(
        <div className="chat-header">
         <div className="img-container">

         <img alt="image" src="https://i.pinimg.com/originals/24/0d/c7/240dc731aa2e493cbb3f6403612ed635.jpg" />
         </div>

         <div className="card-detail">
           <h4 className="tittle">USER 1</h4>
           <p className="desc">Online</p>
         </div>

           <div className="action-items">
              <FontAwesomeIcon icon={faEllipsisV} />
           </div>
        </div>
    );
}

export default ChatHeader;