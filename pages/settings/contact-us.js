import React, { useState } from "react";
import SetLayout from "../../Layouts/setLayout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../../styles/Settings.module.css";

library.add(fas);

const contact = () => {
  return (
    <div>
      <SetLayout>
        <div className={` col-md-8 mx-5 ${Styles.setContainer} `}>
          <h3 className="pb-3">Contact Us</h3>
          <div
            className="d-flex align-items-center justify-content-between py-4"
            style={{
              borderBottom: "0.2px solid gray",
              borderTop: "0.2px solid gray",
            }}
          >
            <span>help@mail.com</span>
            <FontAwesomeIcon icon={["fas", "envelope"]} />
          </div>
          <div className="d-flex align-items-center justify-content-between py-4">
            <span>234814352090</span>
            <FontAwesomeIcon icon={["fas", "phone-alt"]} />
          </div>
        </div>
      </SetLayout>
    </div>
  );
};

export default contact;
