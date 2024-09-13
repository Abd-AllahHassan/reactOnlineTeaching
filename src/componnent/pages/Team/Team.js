import React from "react";
import Back from "../../common/Back";
import TeamCard from "./TeamCard";
import Awrapper from "../Home/Awrapper";
import "./team.css"; // Ensure correct import paths

export const Team = () => {
  return (
    <>
      <Back title="Team" />
      <section className="team-section padding">
        <div className="container grid">
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  );
};
