import React from "react";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function IndexLayout({ children, props }) {
  return (
    <div>
      <Head>
        <title>PAVE Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-fluid p-0">
        <div className="col-md-12 d-flex align-items-end">
          <Sidebar activeTrack={() => props.activeTrack()} />
          {children}
        </div>
      </div>
    </div>
  );
}
