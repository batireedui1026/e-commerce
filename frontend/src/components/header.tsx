"use client";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "../../provider/user-provider";
import { Button } from "./ui/button";
import { Images } from "lucide-react";
import axios from "axios";
const Header = () => {
  const [product, setProduct] = useState({ name: "", price: "", images: "" });
  const { user } = useUser();
  console.log("user", user);
  const searchProduct = async () => {
    const { name, price, images } = product;
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/products/search-product`,
        {
          name,
          price,
          images,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between  bg-black px-5 py-3    ">
        <div className="flex gap-4 items-center">
          <img src="pi.png"></img>
          <Link href="./home" className="text-xl text-white ">
            ECOMMERCE
          </Link>
          <Link href="./category" className="text-white">
            Ангилал{" "}
          </Link>
        </div>
        <div>
          <input
            className="border rounded-xl bg-gray-900 w-80 text-center h-10 text-white"
            placeholder="Бүтээгдэхүүн хайх"
            // onChange={setProduct({ ...product, name: e.target.value }};
          ></input>
          <CiSearch className="text-white relative bottom-8 left-3 text-xl " />
        </div>

        <div className="flex gap-4 items-center">
          <FaHeart className="text-white" />
          <FaShoppingCart className="text-white" />

          {user && <img src={""} alt="'profile" />}
          {!user && (
            <>
              <Link href="/signup">
                <Button
                  variant="outline"
                  className="rounded-3xl border-blue-primary text-white-primary"
                >
                  Бүртгүүлэх
                </Button>
              </Link>
              <Link href="/login">
                <Button className="button-primary">Нэвтрэх</Button>
              </Link>
            </>
          )}

          <Link
            className="btn border rounded-xl text-white w-24 pl-1 transform transition-transform duration-300 hover:scale-110"
            href="/signup"
          >
            Бүртгүүлэх
          </Link>
          <Link
            className="btn border rounded text-white bg-blue-700 w-24 pl-1 transform transition-transform duration-300 hover:scale-110"
            href="/login"
          >
            Нэвтрэх
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
