import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons";
import './ChatCardListing.scss';

const ChatCardListing = () => {
    return (
        <div className="chat-cards-listing">
              <div className="card">
                 <div className="img-container">
                <img src="https://i.pinimg.com/originals/24/0d/c7/240dc731aa2e493cbb3f6403612ed635.jpg" />
                 </div>
                 <div className="card-detail">
                    <h4 className="tittle">
                           User 1
                    </h4>

                    <p className="desc">H1 how r u?</p>
                 </div>

                 <div className="time">
                   10:20 PM
                 </div>

                 <div className="action-btn">
                    <FontAwesomeIcon icon="faChevronDown" />
                 </div>
              </div>
            </div>
    )
}

export default ChatCardListing;