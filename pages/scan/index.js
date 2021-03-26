import React, { useState } from "react";
import IndexLayout from "../../Layouts/index";
import RightColumn from "../../Components/RightColumn";
// import dynamic from "next/dynamic";
import { getData } from "../../util/fetchData";
import Styles from "../../styles/Scan.module.css";
import png from "png.js";
import jsQR from "jsqr";
import { jsPDF } from "jspdf";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";
import moment from "moment";
// import { getData } from "../util/fetchData";

library.add(fas);

const scan = (props) => {
  const [data, setData] = useState(props.winners);
  const [doc, setDoc] = useState([
    "https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg",
  ]);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [scanResult, setScanResult] = useState("");
  const [modalSrc, setModalSrc] = useState("");
  const [scanData, setScanData] = useState("");
  const [date, setDate] = useState(null);
  const [item, setItem] = useState("");

  // function setTimeHandler(params) {
  //   console.log(params);
  //   const time = moment(params.date).format("hh:mm A");
  //   // setTime(time)
  //   console.log(time);
  // }
  // function setDateHandler(params) {
  //   console.log(params);
  //   const date = moment(params.date).format("DD-MM-YY");
  //   console.log(date);
  // }

  const previewFile = (input) => {
    var file = $("input[type=file]").get(0).files[0];
    setShow(true);

    console.log(file);

    if (file) {
      var reader = new FileReader();

      reader.onload = function (event) {
        $("#previewImg").attr("src", reader.result);
        setModalSrc(reader.result);
      };
      reader.readAsDataURL(file);

      // setDoc(reader.readAsDataURL(file));
      console.log("doc= " + doc);
      console.log("doclength= " + doc.length);
      console.log(file);
    }
  };
  const scanFile = (e) => {
    e.preventDefault();
    var file = $("input[type=file]").get(0).files[0];
    setShow(true);

    console.log(file);
    function convertPNGtoByteArray(pngData) {
      const data = new Uint8ClampedArray(pngData.width * pngData.height * 4);
      for (let y = 0; y < pngData.height; y++) {
        for (let x = 0; x < pngData.width; x++) {
          const pixelData = pngData.getPixel(x, y);

          data[(y * pngData.width + x) * 4 + 0] = pixelData[0];
          data[(y * pngData.width + x) * 4 + 1] = pixelData[1];
          data[(y * pngData.width + x) * 4 + 2] = pixelData[2];
          data[(y * pngData.width + x) * 4 + 3] = pixelData[3];
        }
      }
      return data;
    }
    if (file) {
      var reader = new FileReader();

      reader.onload = function (event) {
        // $("#previewImg").attr("src", reader.result);

        const pngReader = new png(event.target.result);
        pngReader.parse(function (err, pngData) {
          if (err) throw err;
          const pixelArray = convertPNGtoByteArray(pngData);
          setItem(jsQR(pixelArray, pngData.width, pngData.height).data);

          // console.log(scanData.data);

          // setItem(item);

          // const checkData = async () => {
          //   const serial = 14535663774;
          //   const href = `winners/${serial}`;
          //   var link = document.createElement("a");
          //   link.href = href;
          //   link.click();

          //   // const dataTable = await dataTable()
          // };
          // checkData();
        });
      };

      reader.readAsArrayBuffer(file);
      // setItem(qrData.data);
    }

    setModalShow(true);
    setDate(Date());
  };
  // console.log(scanData.data);
  console.log(item);
  console.log("date" + date);
  console.log("item " + item);
  // setPrice(scanData.data);
  // setDate(scanData)
  const closeModalHandle = () => {
    setModalShow(false);
    setDate(null);
    // setItem(null);
  };

  const exportPDF = () => {
    let domElement = document.getElementById("modal");
    htmlToImage
      .toPng(domElement)
      .then(function (dataUrl) {
        // console.log(dataUrl);
        // const pdf = new jsPDF();
        // pdf.addImage(dataUrl, "PNG", 10, 20, 380, 200);
        // pdf.save("download.pdf");

        var link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div>
      <IndexLayout>
        <div className="ViewContainer col-md-12">
          <div className={`d-flex col-md-12`}>
            <div className="ViewWindow col-md-8 position-relative">
              <h1>Scan Barcode</h1>
              <p>Connect Your scanner to use this feature</p>
              <div className={`d-flex mx-auto text-center flex-column`}>
                <p className="text-center mx-auto">
                  Place your scanner on the QR code.<br></br> Capture the code
                  on the screen <br></br> Listen, download and share
                </p>
              </div>
              <form className="text-center" onSubmit={(e) => scanFile(e)}>
                <div
                  className="position-relative mx-auto text-center d-flex align-items-center"
                  style={{
                    width: "300px",
                    height: "300px",
                    cursor: "pointer",
                  }}
                >
                  <div className={`${Styles.corStyled} ${Styles.c1}`}></div>
                  <div className={`${Styles.corStyled} ${Styles.c2}`}></div>
                  <div className={`${Styles.corStyled} ${Styles.c3}`}></div>
                  <div className={`${Styles.corStyled} ${Styles.c4}`}></div>

                  {show ? (
                    <label
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        background: "radial-gradient(#0000002e, transparent)",
                      }}
                      for="upload-photo"
                    >
                      <div style={{ width: "80%", height: "80%" }}>
                        <img
                          id="previewImg"
                          src={doc}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </label>
                  ) : (
                    <label
                      style={{
                        width: "100%",
                        height: "100%",
                        margin: "0 auto",
                        cursor: "pointer",
                        borderRadius: "10px",
                        position: "relative",
                        background: "radial-gradient(#0000002e, transparent)",
                      }}
                      for="upload-photo"
                      className="label-styled"
                    ></label>
                  )}

                  <input
                    style={{ height: "100%" }}
                    type="file"
                    name="photo"
                    onChange={() => previewFile()}
                    id="upload-photo"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary mx-auto mt-5 flex-fill py-2"
                  style={{ width: "300px", background: "#38778A" }}
                >
                  Scan
                </button>
              </form>

              {modalShow && (
                <div
                  className={`position-absolute top-0 col-md-11 position-relative ${Styles.modalContainer} `}
                  id="modal"
                >
                  <div className={`text-center  ${Styles.modal}`}>
                    <div
                      className="position-absolute"
                      style={{ right: "20px", top: "20px" }}
                    >
                      <FontAwesomeIcon
                        icon={["fas", "times"]}
                        onClick={() => closeModalHandle()}
                      />
                    </div>
                    <FontAwesomeIcon
                      icon={["fas", "check-circle"]}
                      style={{ color: "#88D498" }}
                    />

                    <h1>Scan Succesful</h1>
                    <div
                      className={`d-flex align-items-center ${Styles.modalContent}`}
                    >
                      <div className="col-md-6 " style={{ textAlign: "left" }}>
                        <div className="position-relative">
                          <div style={{ width: "200px" }}>
                            <img
                              id="modalImg"
                              src={modalSrc}
                              style={{ width: "100%" }}
                              alt="scan"
                            ></img>
                          </div>
                          <div
                            className={`position-absolute bottom-0 d-flex align-items-center ${Styles.modalControl}`}
                            style={{
                              right: "60px",
                            }}
                          >
                            <FontAwesomeIcon
                              icon={["fas", "microphone"]}
                              style={{ color: "#38778A", width: "20px" }}
                            />
                          </div>
                        </div>
                        <div
                          className="d-flex justify-content-between mt-4"
                          style={{ width: "40%" }}
                        >
                          <div
                            className={`d-flex align-items-center ${Styles.modalControl}`}
                          >
                            <img
                              src="/download.svg"
                              alt="download"
                              onClick={() => exportPDF()}
                            ></img>
                          </div>
                          <div
                            className={`d-flex align-items-center ${Styles.modalControl}`}
                          >
                            <img src="/share.svg" alt="share"></img>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p>Congratulations!!!</p>
                        <h2>You won a {item}</h2>
                        <p>
                          Provide your name and phone number to redeem your
                          prize.
                        </p>

                        <form>
                          <div class="mb-3">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              aria-describedby="name"
                              placeholder="Ngozi Okonjo-Iweala"
                            ></input>
                          </div>
                          <div class="mb-3">
                            <input
                              type="number"
                              class="form-control"
                              id="number"
                              placeholder="08015563788"
                            ></input>
                          </div>

                          <button
                            type="submit"
                            class={`btn ${Styles.modalBtn}`}
                            style={{ width: "100%", background: "#FAFAFA" }}
                            disabled
                          >
                            Redeem Prize
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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

export async function getServerSideProps() {
  const res = await getData(`winner`);
  // console.log(serial);
  // console.log(res);

  return {
    props: {
      winners: res.winners,
      // result: res.result,
    },
  };
}

export default scan;
