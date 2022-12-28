import React from "react";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <>
      <Image
        className="w-100 pb-1 roundedTop maxImageHight"
        src="../../../assets/edenor.png"
      />
      <p className=" h1 text-center pt-2 ">Planos SEAT MT</p>
    </>
  );
};

export default Header;
