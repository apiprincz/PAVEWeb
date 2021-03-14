import React, { useState } from "react";
import IndexLayout from "../Layouts/index";
import RightColumn from "../Components/RightColumn";
import dynamic from "next/dynamic";
import { getData } from "../util/fetchData";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../Components/Scanner"),
  { ssr: false }
);

const scan = (props) => {
  const [data, setData] = useState(props.winners);

  return (
    <div>
      <IndexLayout>
        <div className="ViewContainer col-md-12">
          <div className={`d-flex col-md-12`}>
            <div className="ViewWindow col-md-8">
              <h1>Scan Barcode</h1>
              <p>Connect Your scanner to use this feature</p>
              <div className={`d-flex mx-auto text-center flex-column`}>
                <p className="text-center mx-auto">
                  Place your scanner on the QR code.<br></br> Capture the code
                  on the screen <br></br> Listen, download and share
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <RightColumn data={data} />
            </div>
          </div>
        </div>
      </IndexLayout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await getData("winner");

  console.log(res);

  return {
    props: {
      winners: res.winners,
      result: res.result,
    },
  };
}

export default scan;
