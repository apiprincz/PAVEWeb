import React, { useState } from "react";
import IndexLayout from "../Layouts/index";
import RightColumn from "../Components/RightColumn";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../styles/Report.module.css";

library.add(fas);

const report = () => {
  const [file, setFile] = useState([1, 2]);
  let counter = file.length;
  const handleMoreUpload = (e) => {
    e.preventDefault();
    counter++;
    setFile([...file, counter]);
    console.log(file);
  };
  return (
    <div>
      <IndexLayout>
        <div className="ViewContainer col-md-12">
          <div className={`d-flex col-md-12`}>
            <div className="ViewWindow col-md-8">
              <h1>Report A Fake</h1>
              <p>
                You can report documents that are fake to reduce cases of fraud
                and theft.
              </p>

              <form className="col-md-12">
                <div className="form-row d-flex flex-wrap col-md-12 ">
                  {file.map((i, index) => {
                    return (
                      <div
                        className={`form-group col-md-2 mr-4 ${Styles.uploadContainer}`}
                        key={index}
                      >
                        <label
                          for="file-upload"
                          class={`custom-file-upload ${Styles.upload}`}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "40px",

                            paddingBottom: "10px",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={["fas", "long-arrow-alt-up"]}
                          />{" "}
                          Upload
                        </label>
                        <input id="file-upload" type="file" />
                      </div>
                    );
                  })}

                  <div
                    className={`form-group col-md-2 mr-4 ${Styles.uploadContainer}`}
                    onClick={(e) => handleMoreUpload(e)}
                  >
                    <label
                      for="file-upload"
                      className={`custom-file-upload ${Styles.moreBtn}`}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "40px",
                        whiteSpace: "nowrap",
                        paddingBottom: "10px",
                      }}
                    >
                      <FontAwesomeIcon icon={["fas", "plus"]} /> Add More
                    </label>
                  </div>
                </div>

                <div className="form-group pt-5 col-md-8">
                  <label for="exampleFormControlTextarea1" className="pb-2">
                    Additional Information
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="6"
                    placeholder="description"
                    resize="no-resize"
                  ></textarea>
                </div>
                <div
                  className="form-group col-md-8 pt-5"
                  style={{ textAlign: "right" }}
                >
                  <button
                    className="btn btn-primary text-right py-2 px-5"
                    type="submit"
                    style={{ background: "#38778A" }}
                  >
                    Send Report
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-4 d-flex flex-column pt-5 rightContainer">
              <div>
                <h4 className="quote">
                  Upload clear images of the barcode,<br></br>
                  <br></br>
                  the front view of the document and,<br></br>
                  <br></br>
                  the rear view of the document
                </h4>
              </div>
              <div>
                <img src="/saly-10.png" alt="Report To Saly"></img>
              </div>
            </div>
          </div>
        </div>
      </IndexLayout>
    </div>
  );
};

export default report;
