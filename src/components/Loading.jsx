import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => (
  <div
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
  >
    <FontAwesomeIcon icon={faSpinner} size="lg" />
    <p style={{ paddingLeft: "10px" }}>Loading...</p>
  </div>
);
