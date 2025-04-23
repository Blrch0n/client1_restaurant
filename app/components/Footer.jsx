import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-fit font-roboto flex flex-col px-4 pt-8 pb-4 bg-[#263238]">
      <div className="w-full h-fit flex flex-col gap-5 text-[13px] items-center justify-center text-[#f9f9f9]">
        <p className="w-1/2 text-center">
          58 Poland Street, London United Kingdom
        </p>
        <div className="w-full h-fit flex items-center pb-5 gap justify-center gap-5">
          <FaFacebookF />
          <FaTwitter />
          <FaGoogle />
          <FaInstagram />
        </div>
      </div>

      <hr className="bg-[#999]" />
      <h1 className="text-center text-[13px] text-[#888888] pt-5">
        Copyright © Ogtorgui AI Tech.
      </h1>
    </div>
  );
};

export default Footer;
