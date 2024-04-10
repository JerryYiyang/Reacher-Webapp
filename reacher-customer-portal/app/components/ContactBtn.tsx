import React from "react";
import Image from "next/image";

const ContactBtn: React.FC = () => {
  const handleClick = () => {
    // Handle click logic here
    console.log("Button clicked!");
  };

  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      <Image src="/reachercontact.png" alt="Button" />
    </div>
  );
};

export default ContactBtn;
