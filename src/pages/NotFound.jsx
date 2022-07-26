import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        height: "100vh",
      }}>
      <h1>Error: 404 Page Not Found</h1>
      <Link
        to="/"
        style={{
          padding: ".5rem 1rem",
          background: "black",
          color: "white",
          cursor: "pointer",
        }}>
        Go back to Shopping
      </Link>
    </div>
  );
};

export default NotFound;
