import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  open = hour > 8 && hour < 18 ? true : false;
  return (
    <div>
      <h1>Footer</h1>
      <p>It is currently about {hour} o'clock!</p>
      <p>We are currently {open ? "open" : "closed"}.</p>
    </div>
  );
};

export default Footer;
