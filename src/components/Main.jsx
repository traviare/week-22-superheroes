import React from "react";
import "./Main.css";
import Card from "./Card";

function Main({ arr }) {
  return (
    <div className="container">
      {arr.map((item) => (
        <Card
          name={item.name}
          universe={item.universe}
          alterego={item.alterego}
          occupation={item.occupation}
          friends={item.friends}
          superpowers={item.superpowers}
          url={item.url}
        ></Card>
      ))}
    </div>
  );
}

export default Main;
