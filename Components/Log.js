import React, { useState, useEffect, useRef } from "react";

import Logdata from "./Logdata";
export default function LogTable(props) {
  const [previd, setPrevid] = useState(0);
  const [nextid, setNextid] = useState(10);

  const nextPageHandler = (e, previd, nextid) => {
    e.preventDefault();
    if (winners.length < 10) {
      return;
    }
    setPrevid(nextid);
    setNextid(nextid);
    setPrevid(previd);
    console.log(nextid);
  };
  const prevPageHandler = (e, previd, nextid) => {
    e.preventDefault();
    setNextid(nextid);
    setPrevid(previd);
    console.log(previd);
  };

  return (
    <div className="col-md-12 mb-4 mb-md-0">
      <div className="card" style={{ borderRadius: "7px" }}>
        <div className="card-body">
          <Logdata
            data={props.data}
            nextid={nextid}
            previd={previd}
            nextPageHandler={(e) => nextPageHandler(e, nextid, previd)}
            prevPageHandler={(e) => prevPageHandler(e, nextid, previd)}
          />
        </div>
      </div>
    </div>
  );
}
