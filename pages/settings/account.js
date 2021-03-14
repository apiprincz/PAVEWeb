import React, { useState } from "react";
import SetLayout from "../../Layouts/setLayout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../../styles/Settings.module.css";

library.add(fas);

const account = () => {
  return (
    <div>
      <SetLayout>
        <div className={` col-md-8 mx-5 ${Styles.setContainer}`}>
          <h3>Account</h3>
          <form className="position-relative">
            <div className="form-group col-md-6 pt-4">
              {/* <label for="exampleInputName">Name</label> */}
              <input
                type="text"
                className="form-control "
                id="exampleInputNAme"
                aria-describedby="Name"
                placeholder="Name"
              ></input>
            </div>
            <div className="form-group col-md-6 pt-4">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <input
                type="email"
                className="form-control "
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              ></input>
            </div>
            {/* <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div> */}

            <button
              type="submit"
              className="btn btn-primary btn-lg px-5"
              style={{
                position: "absolute",
                bottom: "-130px",
                right: "-23px",
                background: "#A2ACAF",
                outline: "none",
                border: "none",
              }}
              disabled
            >
              Save Changes
            </button>
          </form>
        </div>
      </SetLayout>
    </div>
  );
};

export default account;
