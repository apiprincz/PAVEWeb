import React from "react";
import IndexLayout from "../Layouts/index";
import RightColumn from "../Components/RightColumn";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../styles/Search.module.css";

library.add(fas);

const search = () => {
  return (
    <div>
      <IndexLayout>
        <div className="ViewContainer col-md-12">
          <div className={`d-flex col-md-12`}>
            <div className="ViewWindow col-md-8">
              <h1>Search</h1>
              <p>Search by serial number</p>
              <div
                className="input-group col-md-6 "
                style={{ width: "60%", position: "relative" }}
              >
                <input
                  type="text"
                  className="form-control col-md-6"
                  placeholder="Search products by serial number"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                  style={{ padding: "20px" }}
                ></input>
                <div className={Styles.search}>
                  <FontAwesomeIcon icon={["fas", "search"]} />
                </div>
              </div>
              <div
                className={`d-flex mx-auto text-center py-5 flex-column align-items-center`}
              >
                <div className={Styles.query}>Search Query</div>
              </div>
            </div>
            <div className="col-md-4">
              <RightColumn />
            </div>
          </div>
        </div>
      </IndexLayout>
    </div>
  );
};

export default search;
