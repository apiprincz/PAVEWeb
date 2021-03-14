import React, { useState } from "react";
import IndexLayout from "../Layouts/index";
import Link from "next/link";
import Styles from "../styles/Overview.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import History from "../Components/History";
import RightColumn from "../Components/RightColumn";
import { getData } from "../util/fetchData";

library.add(fas);
const overview = (props) => {
  const [data, setData] = useState(props.winners);
  const [completedData, setCompletedData] = useState("269");
  const [failedData, setFailedData] = useState("73");
  // console.log(data);
  const handleTotal = () => {
    const Total = parseInt(completedData) + parseInt(failedData);

    return Total;
  };

  return (
    <div>
      <IndexLayout>
        <div className={` ViewContainer ${Styles.Overview}`}>
          <div className={`d-flex  ${Styles.OverviewContainer}`}>
            <div className={` ${Styles.OverviewWindow}`}>
              <h1>Hello, Gabriel</h1>
              <p>Overview</p>
              <div className={`d-flex ${Styles.OverviewCards}`}>
                <div
                  className={`d-flex flex-column justify-between position-relative ${Styles.OverviewCard}`}
                >
                  <p>No. of scans</p>
                  <h5 className="mb-5">{handleTotal()}</h5>
                  <div
                    style={{
                      width: "60px",
                      position: "absolute",
                      right: "20px",
                      top: "10px",
                    }}
                    className="d-flex flex-column justify-content-between"
                  >
                    <img
                      style={{ width: "100%" }}
                      src="/Exclude.png"
                      alt="bg"
                      className="m-2"
                    ></img>
                  </div>
                </div>
                <div
                  className={`d-flex flex-column position-relative justify-between ${Styles.OverviewCard}`}
                >
                  <p>Successful scans</p>
                  <h5 className="mb-5">{completedData}</h5>
                  <div
                    style={{
                      width: "60px",
                      position: "absolute",
                      right: "20px",
                      top: "10px",
                      height: "100%",
                    }}
                    className="d-flex flex-column justify-content-between"
                  >
                    <img
                      style={{ width: "100%", height: "90%" }}
                      src="/intersect.png"
                      alt="bg"
                    ></img>
                  </div>
                </div>
                <div
                  className={`d-flex flex-column position-relative justify-between ${Styles.OverviewCard}`}
                >
                  <p>Failed scans</p>
                  <h5 className="mb-5">{failedData}</h5>
                  <div
                    style={{
                      width: "60px",
                      position: "absolute",
                      right: "20px",
                      top: "0px",
                    }}
                    className="d-flex flex-column  justify-content-between"
                  >
                    <img
                      style={{ width: "100%" }}
                      src="/Subtract.png"
                      alt="bg"
                      className="m-2"
                    ></img>
                  </div>
                </div>
              </div>
              <div className={`${Styles.OverviewHistory}`}>
                <div
                  className={`d-flex align-items-center justify-content-between pt-4`}
                >
                  <p>Scan History</p>
                  <Link href="#">
                    <a href="#" style={{ width: "30px" }}>
                      <FontAwesomeIcon icon={["fas", "history"]} />
                    </a>
                  </Link>
                </div>
                <History data={data}></History>
              </div>
            </div>

            <RightColumn
              completedData={completedData}
              failedData={failedData}
            />
          </div>
        </div>
      </IndexLayout>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getData("winner");
  // const data = await res.json();
  // console.log(res);
  // res = JSON.stringify(res.winners);
  return {
    props: {
      winners: res.winners,
      result: res.result,
    }, // will be passed to the page component as props
  };
}

export default overview;
