import React, { useState } from "react";
import SetLayout from "../../Layouts/setLayout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../../styles/Settings.module.css";

library.add(fas);

const about = () => {
  return (
    <div>
      <SetLayout>
        <div className={` col-md-8 mx-5 ${Styles.setContainer}`}>
          <h3
            className="pb-4"
            style={{
              borderBottom: "0.2px solid gray",
            }}
          >
            About Software
          </h3>
          <div>
            <p className="py-2"> PAVE 2.0.0</p>
            <p className="py-2"> Pave is an OCR and VDP sofftware,</p>
            <p className="py-2"> copyright (c) 2020-2021</p>
            <p className="py-2">
              KJK Africa{" "}
              <a href="https://www.kjk.africa" target="_blank">
                {" "}
                (www.kjk.africa){" "}
              </a>
            </p>
          </div>
        </div>
      </SetLayout>
    </div>
  );
};

export default about;
