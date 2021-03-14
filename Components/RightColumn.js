import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "../Components/Charts";
import Logdata from "./Logdata";
import Searchdata from "./Searchdata";
import Reportdata from "./Reportdata";

library.add(fas);

const RightColumn = (props) => {
  const [data, setData] = useState(props.data);

  const router = useRouter();
  //   console.log(router.pathname);

  return (
    <>
      <div className="px-4">
        <div className="d-flex justify-content-between ">
          <span>
            {router.pathname === "/overview"
              ? "Scan Info"
              : router.pathname === "/scan"
              ? "Winners"
              : router.pathname === "/search"
              ? "Search History"
              : ""}
          </span>
          <FontAwesomeIcon icon={["fas", "sliders-h"]} />
        </div>
        <div className="pt-3 d-flex justify-content-between">
          <button
            className="btn btn-primary "
            style={{ background: "#38778A" }}
            type="button"
          >
            Weekly
          </button>
          <button className="btn btn-light" type="button">
            Monthly
          </button>
          <button className="btn btn-light" type="button">
            Yearly
          </button>
        </div>
        <div className="mt-3 rightColBox">
          {router.pathname === "/overview" ? (
            <>
              <Chart
                completedData={props.completedData}
                failedData={props.failedData}
              />
              <div className="d-flex justify-content-between p-3 mb-3">
                <p className="success">Succesful Scans</p>
                <p className="failed">Failed Scans</p>
              </div>{" "}
            </>
          ) : router.pathname === "/scan" ? (
            <>
              <Logdata data={data} />
            </>
          ) : router.pathname === "/search" ? (
            <>
              <Searchdata />
            </>
          ) : (
            <>
              <Reportdata data={data} />
            </>
          )}
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <Image src="/saly.png" alt="saly" width={200} height={200}></Image>
        </div>
      </div>
    </>
  );
};

export default RightColumn;
