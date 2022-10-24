import "./card.css";

const Card = (props) => (
  <div className={props.className}>
    <a href={props.link} className="card" target="_blank" rel="noreferrer">
      <img src={props.image} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
            <path />
          </svg>
          <div className="card__header-text">
            <h3 className="card__title">{props.headline}</h3>
            <span className="card__status">{props.app}</span>
          </div>
        </div>
        <p className="card__description">{props.desc}</p>
      </div>
    </a>
  </div>
);

export default Card;
