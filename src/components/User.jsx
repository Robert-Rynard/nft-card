import React from "react";
import image from "../images/image-avatar.png";

const User = (props) => {
  return (
    <div>
      <img src={image} alt="Profile" />
      <span>Creation of Jules Wyvern</span>
    </div>
  );
};

export default User;
