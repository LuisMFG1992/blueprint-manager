import React from "react";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <>
      <Image
        className="w-100 pb-1 roundedTop maxImageHight"
        src="../../../assets/edenor.png"
      />
      <h2 className="text-center pt-2">Planos SEAT MT</h2>
    </>
  );
};

export default Header;
