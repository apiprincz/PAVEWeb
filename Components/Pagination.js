import React, { useState, useRef } from "react";
import Link from "next/link";

const Pagination = (props) => {
  const [previd, setPrevid] = useState(1);
  const [nextid, setNextid] = useState(10);

  return (
    <>
      <ul class="pagination mb-0">
        <li class="page-item">
          <Link href="#">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              onClick={(e) => props.prevPageHandler(e, previd, nextid)}
              ref={props.pRef}
              disabled
            >
              <span aria-hidden="true">&laquo;</span>
            </a>
          </Link>
        </li>
        <li class="">
          <Link href="">
            <a
              class="page-link"
              href="#"
              onClick={(e) => props.nextPageHandler(e, previd, nextid)}
              ref={props.nRef}
              disabled
            >
              <span aria-hidden="true">&raquo;</span>
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
