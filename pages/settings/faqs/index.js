import React, { useState, useEffect } from "react";
import SetLayout from "../../../Layouts/setLayout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../../../styles/Settings.module.css";
import { useRouter } from "next/router";

library.add(fas);

const faq = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/settings/faqs/Question1", undefined, { shallow: true });
  }, []);

  return (
    <div>
      <SetLayout>
        <div className={` col-md-8 mx-5 ${Styles.setContainer}`}>
          <h3>FAQs</h3>
        </div>
      </SetLayout>
    </div>
  );
};

export default faq;
