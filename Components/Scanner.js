import React, { useState, useRef } from "react";
import QrReader from "react-qr-reader";
import Styles from "../styles/Scanner.module.css";

const Scanner = () => {
  const [scanResult, setScanResult] = useState("");
  const qrRef = useRef("");

  const handleErrorFile = (error) => {
    console.log(error);
  };
  const handleScanFile = (result) => {
    if (result) setScanResult(result);
  };
  const onSCanFile = () => {
    qrRef.current.openImageDialog();
  };

  return (
    <div className={` ${Styles.Scanner}`}>
      <QrReader
        ref={qrRef}
        delay={300}
        style={{ width: "100%", margin: "0 auto" }}
        onError={handleErrorFile}
        onScan={handleScanFile}
        legacyMode
      />
      <div></div>
      <button className="mt-5" onClick={onSCanFile}>
        {" "}
        Scan
      </button>
      <h3>Scan Result : {scanResult}</h3>
    </div>
  );
};

export default Scanner;
