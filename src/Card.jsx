import "./Card.css";
import ShareIcon from '@mui/icons-material/Share';

export default function Card({ cardImg, cardTitle, cardText, moreInfoLink, registerLink }) {
    return (
        <div className="cards">
            <div className="card" style={{ width: "16rem" }}>
                <img src={cardImg} className="card-img-top" alt="Event" />
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardText}</p>
                    <div className="btns">
                        {registerLink && registerLink !== "#" ? (
                            <a 
                                href={registerLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-primary innerbtn"
                            >
                                Register
                            </a>
                        ) : (
                            <button className="btn btn-primary innerbtn" disabled>
                                Register
                            </button>
                        )}
                        <a 
                            href={moreInfoLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-secondary innerbtn"
                        >
                            Info
                        </a>
                        <ShareIcon className="inCardIcons shareIcon" />
                    </div>
                </div>
            </div>
        </div>
    );
}
