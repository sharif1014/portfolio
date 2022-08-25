import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="cardContent">
        <div className="cardBody">
          <div className="cardImg">
            <img src={props.pic} alt="User Pic" />
          </div>
          <div className="cardText">
            <div className="cardTitle">{props.title}</div>
            <div className="cardDesc">{props.desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
