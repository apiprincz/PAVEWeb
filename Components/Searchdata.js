import React, { useState } from "react";
import moment from "moment";

const Searchdata = () => {
  const [search, setSearch] = useState([
    { serial: 12344456543, time: Date.now() },
    { serial: 1234556543, time: Date.now() },
    { serial: 52344456543, time: Date.now() },
    { serial: 123445654233, time: Date.now() },
    { serial: 1545655543, time: Date.now() },
  ]);

  function setTimeHandler(params) {
    console.log(params);
    return moment(params.date).format("hh:mm A");
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="tth text-center" scope="col">
              Today
            </th>
          </tr>
        </thead>
        <tbody>
          {[...search]
            .map((item, i) => (
              <tr key={item.id}>
                <td className="text-center" scope="row">
                  {item.serial}
                </td>

                <td className="text-center">
                  {setTimeHandler(`${item.time}`)}
                </td>
              </tr>
            ))
            .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default Searchdata;
