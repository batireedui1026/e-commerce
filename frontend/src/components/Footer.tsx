"use client"
import { IoIosCall } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between mx-24  pb-6  text-white text-xl pt-10">
        <p>logo</p>
        <div className="flex items-center">
          <div className="flex gap-2 pr-24 text-white ">
            <IoIosCall />
            <p>(976) 7007-1234</p>
          </div>
          <div className="flex items-center gap-2 text-white">
            <FaRegMessage />
            <p>contact@ecommerce.mn</p>
          </div>
        </div>
      </div>
      <div className="flex mx-24 justify-between text-white text-xl pt-9  border-t-[1px] pb-10">
        <p>© 2024 Ecommerce MN</p>
        <div className="flex gap-4">
          <FaFacebook />
          <FaInstagram />
          <CiTwitter />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};
export default Footer;
