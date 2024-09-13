import React from "react";
import { team } from "../../../dummydata";

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className="team-member shadow" key={val.name}>
          <div className="team-image">
            <img src={val.cover} alt={val.name} />
            <div className="team-overlay">
              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-tiktok icon"></i>
            </div>
          </div>
          <div className="team-details">
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
