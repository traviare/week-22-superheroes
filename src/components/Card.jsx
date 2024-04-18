import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <React.Fragment>
      <div className="hero">
        <h1 className="name">{props.name}</h1>
        <div className="universe">{props.universe}</div>
        <div className="alterego">
          <span className="title">Альтер эго:</span> {props.alterego}
        </div>
        <div className="occupation">
          <span className="title">Род деятельности:</span> {props.occupation}
        </div>
        <div className="friends">
          <span className="title">Друзья:</span> {props.friends}
        </div>
        <div className="superpowers">
          <span className="title">Суперсилы:</span> {props.superpowers}
        </div>
        <img className="img" src={props.url} alt="hero image" />
      </div>
    </React.Fragment>
  );
}

export default Card;
