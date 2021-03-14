import React from "react";
import Settingsmenu from "../Components/Settingsmenu";
import IndexLayout from "./index";

const SetLayout = ({ children, props }) => {
  const activeTrack = (params) => {
    console.log(params);
  };

  activeTrack();

  return (
    <IndexLayout activeTrack={() => props.activeTrack()}>
      <div className="ViewContainer col-md-12">
        <h3>Settings</h3>
        <div className="d-flex col-md-12 pt-5">
          <Settingsmenu activeTrack={() => props.activeTrack(params)} />
          {children}
        </div>
      </div>
    </IndexLayout>
  );
};

export default SetLayout;
