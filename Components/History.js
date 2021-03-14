import React from "react";
import LogTable from "./Log";

const History = (props) => {
  return (
    <div>
      <LogTable data={props.data}></LogTable>
    </div>
  );
};

export default History;
