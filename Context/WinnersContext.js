import { createContext, useState, useEffect } from "react";
// import Api from "../pages/api/api";

export const WinnersContext = createContext();

export const WinnersProvider = (props) => {
  const [data, setData] = useState(props.winners);

  console.log(data);

  const contextValue = {
    data,
  };

  return (
    <WinnersContext.Provider value={{ contextValue }}>
      {props.children}
    </WinnersContext.Provider>
  );
};
