import Link from "next/link";
import React, { useState } from "react";
import SetLayout from "../Layouts/setLayout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../styles/Settings.module.css";
import Style from "../styles/Questions.module.css";

library.add(fas);

const Questions = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How to Scan",
      answers: [
        "Login to PAVE web app with you details",
        "Go to Scan Section",
        "Upload your Document",
        "Click on Scan once document is loaded",
        "Wait for Scan Result",
        "Save, Download and Share Scan",
      ],
      slug: "Question1",
      show: true,
    },
    {
      question: "How to Scan",
      answers: [
        "Login to PAVE web app with you details",
        "Go to Scan Section",
        "Upload your Document",
        "Click on Scan once document is loaded",
        "Wait for Scan Result",
        "Save, Download and Share Scan",
      ],
      slug: "Question2",
      show: false,
    },
    {
      question: "How to Scan",
      answers: [
        "Login to PAVE web app with you details",
        "Go to Scan Section",
        "Upload your Document",
        "Click on Scan once document is loaded",
        "Wait for Scan Result",
        "Save, Download and Share Scan",
      ],
      slug: "Question3",
      show: false,
    },
    {
      question: "How to Scan",
      answers: [
        "Login to PAVE web app with you details",
        "Go to Scan Section",
        "Upload your Document",
        "Click on Scan once document is loaded",
        "Wait for Scan Result",
        "Save, Download and Share Scan",
      ],
      slug: "Question4",
      show: false,
    },
    {
      question: "How to Scan",
      answers: [
        "Login to PAVE web app with you details",
        "Go to Scan Section",
        "Upload your Document",
        "Click on Scan once document is loaded",
        "Wait for Scan Result",
        "Save, Download and Share Scan",
      ],
      slug: "Question5",
      show: false,
    },
    {
      question: "How to Scan",
      answers: [
        "Login to PAVE web app with you details",
        "Go to Scan Section",
        "Upload your Document",
        "Click on Scan once document is loaded",
        "Wait for Scan Result",
        "Save, Download and Share Scan",
      ],
      slug: "Question6",
      show: false,
    },
    {
      question: "How to Scan",
      answers: [
        "Login to PAVE web app with you details",
        "Go to Scan Section",
        "Upload your Document",
        "Click on Scan once document is loaded",
        "Wait for Scan Result",
        "Save, Download and Share Scan",
      ],
      slug: "Question7",
      show: false,
    },
    {
      question: "How to Scan",
      answers: [
        "Login to PAVE web app with you details",
        "Go to Scan Section",
        "Upload your Document",
        "Click on Scan once document is loaded",
        "Wait for Scan Result",
        "Save, Download and Share Scan",
      ],
      slug: "Question8",
      show: false,
    },
  ]);

  const faqShowHandler = (i, faq) => {
    let fat = [...faqs][i].show;
    for (let x = 0; x < faqs.length; x++) {
      faqs[x].show = false;
    }
    let show = !fat;
    faq.show = show;
    setFaqs([...faqs], show);
  };

  return (
    <header>
      <SetLayout>
        <div className={` col-md-8 mx-5 ${Styles.setContainer}`}>
          <h3>FAQs</h3>
          <ul>
            {faqs.map((faq, i) => {
              return (
                <li
                  key={i}
                  style={{ borderBottom: "0.1px solid gray" }}
                  onClick={() => faqShowHandler(i, faq)}
                >
                  <Link
                    href="/settings/faqs/([...slug])"
                    as={`/settings/faqs/${faq.slug}`}
                    scroll={false}
                  >
                    <a
                      href={`/settings/faqs/${faq.slug}`}
                      className={`d-flex justify-content-between align-items-center py-4 ${Style.faqTab}`}
                    >
                      {faq.slug}
                      {faq.show ? (
                        <FontAwesomeIcon icon={["fas", "chevron-down"]} />
                      ) : (
                        <FontAwesomeIcon icon={["fas", "chevron-right"]} />
                      )}
                    </a>
                  </Link>

                  {faq.show && (
                    <div>
                      <h3>{faq.question}</h3>

                      <div className="pt-3 px-4">
                        {faq.answers.map((answer, index) => {
                          return (
                            <p>
                              <span
                                style={{
                                  background: "red",
                                  borderRadius: "50%",
                                  display: "inline-block",
                                  width: "20px",
                                  textAlign: "center",
                                  color: "#FFF",
                                }}
                              >
                                {index + 1}
                              </span>{" "}
                              &nbsp;
                              {answer}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </SetLayout>
    </header>
  );
};

export default Questions;
