import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "../styles/Settings.module.css";

const Settingsmenu = (props) => {
  const router = useRouter();

  const activeRoute = (path) => {
    const addClass = (path) => {
      if (
        router.pathname === "/settings/faqs/question1" ||
        router.pathname === "/settings/faqs/question2" ||
        router.pathname === "/settings/faqs/Question3" ||
        router.pathname === "/settings/faqs/Question4" ||
        router.pathname === "/settings/faqs/Question5" ||
        router.pathname === "/settings/faqs/Question6" ||
        router.pathname === "/settings/faqs/Question7" ||
        router.pathname === "/settings/faqs/Question8"
      ) {
        if (path === "/settings/faqs") {
          return "active";
        } else if (path === "/settings/faqs") {
          return;
        }
      }
      return;
    };

    if (router.pathname === path) {
      addClass(path);
      return "active";
    } else if (router.pathname !== path) {
      return addClass(path);
    }
  };
  return (
    <div className={`d-flex flex-column col-md-2 ${Styles.setColumn}`}>
      <Link href="/settings/account">
        <a className={`${activeRoute("/settings/account")}`}>Account</a>
      </Link>
      <Link href="/settings/faqs">
        <a
          className={activeRoute("/settings/faqs")}
          onClick={() => addClass(path)}
        >
          FAQs
        </a>
      </Link>
      <Link href="/settings/contact-us">
        <a className={activeRoute("/settings/contact-us")}>Contact Us</a>
      </Link>
      <Link href="/settings/terms-of-use">
        <a className={activeRoute("/settings/terms-of-use")}>Terms of Use</a>
      </Link>
      <Link href="/settings/about-software">
        <a className={activeRoute("/settings/about-software")}>
          About Software
        </a>
      </Link>
    </div>
  );
};

export default Settingsmenu;
