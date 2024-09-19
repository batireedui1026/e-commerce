"use client"
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Link from 'next/link'
const Header = () => {
  return (
    <div>
      <div className="flex justify-between  bg-black px-5 py-3    ">
        <div className="flex gap-4 items-center">
          <p className="text-xl text-white ">ECOMMERCE</p>
          <p className="text-white">Ангилал </p>
        </div>
        <div>
          <input
            className="border rounded-xl bg-gray-900 w-80 text-center h-10 text-white"
            placeholder="Бүтээгдэхүүн хайх"
          ></input>
          <CiSearch className="text-white relative bottom-8 left-3 text-xl " />
        </div>

        <div className="flex gap-4 items-center">
          <FaHeart className="text-white" />
          <FaShoppingCart className="text-white" />
          
          <Link className="btn border rounded-xl text-white w-24 pl-1 transform transition-transform duration-300 hover:scale-110" href="/signup">
            Бүртгүүлэх
          </Link>
          <Link className="btn border rounded text-white bg-blue-700 w-24 pl-1 transform transition-transform duration-300 hover:scale-110" href="/login">
            Нэвтрэх
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
