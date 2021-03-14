import React, { useState } from "react";
import { useRouter } from "next/router";
import Pagination from "./Pagination";
import TransitionsModal from "../Components/Winners";
import moment from "moment";

const Logdata = (props) => {
  const [data, setData] = useState(JSON.parse(JSON.stringify(props.data)));
  console.log(data + "naaaaaaaaaaaaaaaaaaaaaa");

  const [previd, setPrevid] = useState(props.previd);
  const [nextid, setNextid] = useState(props.nextid);
  const router = useRouter();

  function setTimeHandler(params) {
    console.log(params);
    return moment(params.date).format("hh:mm A");
  }
  function setDateHandler(params) {
    console.log(params);
    return moment(params.date).format("DD-MM-YY");
  }

  return (
    <div>
      <div className="table-responsive-lg">
        {router.pathname === "/overview" ? (
          <table className="table">
            <thead>
              <tr>
                <th className="tth text-center" scope="col">
                  Scan Id
                </th>
                <th className="tth text-center" scope="col">
                  Date
                </th>
                <th className="tth text-center" scope="col">
                  Time
                </th>
                <th className="tth text-center" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[...data]
                .slice(`${previd}`, `${nextid}`)
                .map((item, index) => (
                  <tr key={index}>
                    <td className="text-center" scope="row">
                      {item.serial}
                    </td>
                    <td className="text-center">
                      {setDateHandler(`${item.gifttype}`)}
                    </td>
                    <td className="text-center">
                      {setTimeHandler(`${item.date}`)}
                    </td>
                    <td className="text-center">{item.status}</td>
                  </tr>
                ))
                .reverse()}
            </tbody>
          </table>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th className="tth text-center" scope="col">
                  Serial No
                </th>
                <th className="tth text-center" scope="col">
                  Gift Type
                </th>
                <th className="tth text-center" scope="col">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {[...data]
                .reverse()
                .slice(0, 7)
                .map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{item.serial}</td>
                    <td className="text-center">
                      {setDateHandler(`${item.gifttype}`)}
                    </td>
                    <td className="text-center">
                      {setTimeHandler(`${item.date}`)}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        {router.pathname === "/overview" ? (
          <div className="d-flex justify-content-end align-items-center">
            <div>
              <span>{previd === 0 ? 1 : previd}</span> -<span>{nextid}</span> of
              <span>{data.length}</span>
            </div>
            &nbsp;
            <Pagination
              nextPageHandler={(e) => props.nextPageHandler(e)}
              previd={props.previd}
              nextid={props.nextid}
              prevPageHandler={(e) => props.prevPageHandler(e)}
            />
          </div>
        ) : (
          <div className="d-flex justify-content-end align-items-center">
            <TransitionsModal data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Logdata;
