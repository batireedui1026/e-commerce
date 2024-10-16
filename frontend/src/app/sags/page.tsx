"use client";
import { Cart } from "@/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

import { toast } from "react-toastify";
const Sags = () => {
  const [cartData, setCartData] = useState<Cart>([
    {
      product: { _id: "", name: "", price: 0, images: [""], discount: 0 },
      quantity: 0,
    },
  ]);

  const getCartData = async () => {
    try {
      // const userToken = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:8000/api/v1/carts/get-cart`
        // {
        //   headers: { Authorization: `Bearer ${userToken}` },
        // }
      );
      if (response.status === 200) {
        setCartData(response.data.cart);
        console.log("Sagsnii baraa harah amjilttai", response.data.cart);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to add to cart");
    }
  };
  useEffect(() => {
    getCartData();
  }, []);

  const updateQuanity = async (productId: string, newQuantity: number) => {
    setCartData((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
    const userToken = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/carts/update-cart`,
        {
          productId,
          newQuantity,
        },
        { headers: { Authorization: `Bearer ${userToken}` } }
      );

      if (response.status === 200) {
        toast.success("Successfully updated");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to add to cart");
    }
  };
  return (
    <div>
      {cartData.map((product) => {
        return (
          <Card className="p-4 rounded-2xl w-1/2 mb-2" key={product?._id}>
            <CardContent className="flex justify-between p-0">
              <div className="flex gap-6">
                <img
                  src={product?.images}
                  alt=""
                  className="w-32 h-28 rounded-2xl"
                />
                <div>
                  <p className="font-normal text-base">{product?.name}</p>
                  <div className="flex gap-5">
                    <p
                      className="border border-solid border-black px-2 rounded-full cursor-pointer"
                      onClick={() =>
                        updateQuanity(
                          product._id,
                          Math.max(0, product?.quantity - 1)
                        )
                      }
                    >
                      -
                    </p>
                    <p>{product?.quantity}</p>
                    <p
                      className="border border-solid border-black px-2 rounded-full cursor-pointer"
                      onClick={() =>
                        updateQuanity(product?._id, product?.quantity + 1)
                      }
                    >
                      +
                    </p>
                  </div>
                  <p className="mt-1 mb-2 text-sm font-bold">
                    {product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
export default Sags;
