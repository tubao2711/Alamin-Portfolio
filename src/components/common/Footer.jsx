import React from "react";
import { social } from "../data/yummyData";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        {social.map((item) => (
          <>
            <i>{item.icon}</i>
          </>
        ))}
        <p>Thank you!</p>
      </footer>
    </>
  );
};
