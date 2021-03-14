import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCartPlus, fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Styles from "../styles/Sidebar.module.css";

library.add(fab, fas);
const Sidebar = (props) => {
  const router = useRouter();
  const addClass = (path) => {
    if (
      router.pathname === "/settings/account" ||
      router.pathname === "/settings/faqs" ||
      router.pathname === "/settings/faqs" ||
      router.pathname === "/settings/faqs/question2" ||
      router.pathname === "/settings/faqs/Question3" ||
      router.pathname === "/settings/faqs/Question4" ||
      router.pathname === "/settings/faqs/Question5" ||
      router.pathname === "/settings/faqs/Question6" ||
      router.pathname === "/settings/faqs/Question7" ||
      router.pathname === "/settings/faqs/Question8" ||
      router.pathname === "/settings/contact-us" ||
      router.pathname === "/settings/terms-of-use" ||
      router.pathname === "/settings/about-software"
    ) {
      if (path === "/settings") {
        return "active";
      } else if (path === "/settings") {
        return;
      }
    }
    return;
  };

  const activeRoute = (path) => {
    if (router.pathname === path) {
      addClass(path);
      return "active";
    } else if (router.pathname !== path) {
      return addClass(path);
    } else return;
  };

  return (
    <div className={`col-md-2 ${Styles.Sidebar} `}>
      <div>
        <Link href="/">
          <a className={`${Styles.Logo}`}>
            <Image src="/Logo.png" alt="Logo" width={50} height={70}></Image>
          </a>
        </Link>
        <div className={Styles.SidebarContainer}>
          <div>
            <Link href="/overview">
              <a href="/overview" className={activeRoute("/overview")}>
                <FontAwesomeIcon icon={["fas", "home"]} />
                <span>Overview</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/scan">
              <a href="/scan" className={activeRoute("/scan")}>
                <FontAwesomeIcon icon={["fas", "qrcode"]} />
                <span>Scan</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/search">
              <a href="/search" className={activeRoute("/search")}>
                <FontAwesomeIcon icon={["fas", "search"]} />
                <span>Search</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/report">
              <a href="/report" className={activeRoute("/report")}>
                <FontAwesomeIcon icon={["fas", "file"]} />
                <span>Report A Fake</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className={Styles.SidebarContainer}>
          <div>
            <Link href="/settings">
              <a
                href="settings"
                className={`${activeRoute("/settings")} `}
                onClick={() => addClass(path)}
              >
                <FontAwesomeIcon icon={["fas", "cog"]} />
                <span>Settings</span>
              </a>
            </Link>
          </div>
          <div>
            <Link href="/logout">
              <a href="logout" className={activeRoute("/logout")}>
                <FontAwesomeIcon icon={["fas", "sign-out-alt"]} />
                <span>Logout</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
