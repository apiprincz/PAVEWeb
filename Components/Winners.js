import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import Link from "next/link";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import jsPDF from "jspdf";
import "jspdf-autotable";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 1000,
  },
}));

const TransitionsModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState(props.data);
  const [prevId, setPrevId] = useState(0);
  const [nextId, setNextId] = useState(10);
  const [report, setReport] = useState("");

  useEffect(() => {
    const getAllTickets = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/winners");
        setReport(response.data.winners);
      } catch (err) {
        console.log("error");
      }
    };
    getAllTickets();
  }, []);

  console.log(report + "uyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function setTimeHandler(params) {
    console.log(params);
    return moment(params).format("hh:mm A");
  }
  function setDateHandler(params) {
    console.log(params);
    return moment(params.date).format("DD-MM-YY");
  }

  function exportPDF() {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `DANGOTE PROMO WINNERS AS AT ${moment(Date.now().date).format(
      "DD-MM-YY"
    )}`;
    const headers = [
      [
        "SCAN ID",
        "SERIAL NO",
        "NAME",
        "PHONE NO",
        "GIFT TYPE",
        "DATE",
        "TIME",
        "STATUS",
      ],
    ];

    const data = JSON.parse(data).map((elt) => [
      elt.serial,
      elt.serial,
      elt.name,
      elt.phone,
      elt.gifttype,
      moment(elt.date.date).format("DD-MM-YY"),
      moment(elt.date.date).format("hh:mm A"),
      elt.status,
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, marginLeft, 40, {
      crossOrigin: "Anonymous",
      "Access-Control-Allow-Origin": "*",
    });
    doc.autoTable(content, {
      crossOrigin: "Anonymous",
      "Access-Control-Allow-Origin": "*",
    });
    doc.save("report.pdf", {
      crossOrigin: "Anonymous",
      "Access-Control-Allow-Origin": "*",
    });
    console.log();
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        View More
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="d-flex justify-content-between">
              <h2 id="transition-modal-title">Winners</h2>
              <div>
                {/* <button type="button" class="btn btn-outline-secondary">
                 <a href=""></a>
               </button> */}
                <button onClick={exportPDF} crossOrigin="anonymous">
                  Generate Report
                </button>
              </div>
            </div>
            <p id="transition-modal-description">
              <table className="table">
                <thead>
                  <tr>
                    <th className="tth text-center" scope="col">
                      Name
                    </th>
                    <th className="tth text-center" scope="col">
                      Phone Number
                    </th>
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
                    .slice(`${prevId}`, `${nextId}`)
                    .map((item, i) => (
                      <tr key={item.id}>
                        <td className="text-center" scope="row">
                          {item.name}
                        </td>
                        <td className="text-center" scope="row">
                          {item.phone}
                        </td>
                        <td className="text-center" scope="row">
                          {item.serial}
                        </td>
                        <td className="text-center" scope="row">
                          {item.gifttype}
                        </td>

                        <td className="text-center">
                          {setTimeHandler(`${item.date}`)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-end align-items-center">
                <div>
                  <span>{prevId === 0 ? 1 : prevId}</span> -
                  <span>{nextId}</span> of
                  <span>{data.length}</span>
                </div>
                &nbsp;
                <ul class="pagination mb-0">
                  <li class="page-item">
                    <Link href="#">
                      <a
                        class="page-link"
                        href="#"
                        aria-label="Previous"
                        disabled
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </Link>
                  </li>
                  <li class="">
                    <Link href="">
                      <a class="page-link" href="#" disabled>
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
