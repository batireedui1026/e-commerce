"use client";
import { ProfileContext } from "@/components/context/user-context";
import { Cart } from "@/lib/types";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Sags = () => {
  const { cartData, setCartData, updateQuantity } = useContext(ProfileContext);

  const getCartData = async () => {
    try {
      const userToken = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8000/api/v1/carts/get-cart`,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      if (response.status === 200) {
        setCartData(response.data.cart);
        console.log("Cart data fetched successfully", response.data.cart);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch cart data");
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div>
      <div className="max-w-[638px] m-auto">
        {cartData.products?.map((prod) => {
          return (
            <div key={prod.product._id}>
              <div className="flex justify-between border border-rounded mt-5">
                <img
                  src={prod.product.images[0]}
                  className="w-32 h-32 object-cover rounded my-3 ml-3"
                />
                <div className="flex flex-col gap-3 pt-3">
                  <p>{prod.product.name}</p>
                  <div className="flex gap-3 items-center">
                    <div
                      className="w-11 h-11 rounded-full border text-center items-center pt-2 border-black cursor-pointer"
                      onClick={() =>
                        updateQuantity(
                          prod.product._id,
                          Math.max(1, prod.quantity - 1)
                        )
                      }
                    >
                      -
                    </div>
                    <p>{prod.quantity}</p>
                    <div
                      className="w-11 h-11 rounded-full border text-center items-center pt-2 border-black cursor-pointer"
                      onClick={() =>
                        updateQuantity(prod.product._id, prod.quantity + 1)
                      }
                    >
                      +
                    </div>
                  </div>
                  <p className="mt-1 mb-2 text-sm font-bold">
                    {(prod.product.price * prod.quantity).toLocaleString()}₮
                  </p>
                </div>
                <FaRegTrashAlt className="text-2xl mr-2 mt-2 cursor-pointer" />
              </div>
            </div>
          );
        })}

        <div className="flex justify-between mt-5">
          <p>Нийт төлөх дүн:</p>
          <p className="font-bold">
            {cartData.products
              .reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              )
              .toLocaleString()}
            ₮
          </p>
        </div>

        <button className="w-40 h-7 bg-blue-600 rounded text-white mt-5">
          Худалдаж авах
        </button>
      </div>
    </div>
  );
};

export default Sags;
