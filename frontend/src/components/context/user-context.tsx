"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Cart } from "@/lib/types";
import { toast } from "react-toastify";

interface ProfileContextType {
  cartData: Cart;
  setCartData: (cartData: Cart) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
}
export const ProfileContext = createContext<ProfileContextType>({
  cartData: {
    products: [
      {
        product: { _id: "", name: "", price: 0, images: [], discount: 0 },
        quantity: 0,
      },
    ],
    totalAmount: 0,
  },
  setCartData: (cartData: Cart) => {},
  updateQuantity: (productId: string, newQuantity: number) => {},
});

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartData, setCartData] = useState<Cart>({
    products: [
      {
        product: { _id: "", name: "", price: 0, images: [], discount: 0 },
        quantity: 0,
      },
    ],
    totalAmount: 0,
  });

  const updateQuantity = async (productId: string, newQuantity: number) => {
    setCartData((prevCart) => ({
      ...prevCart,
      products: prevCart.products?.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ) as any,
    }));

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
      console.error("Error updating cart:", error);
      toast.error("Failed to update cart");
    }
  };

  return (
    <ProfileContext.Provider value={{ cartData, setCartData, updateQuantity }}>
      {children}
    </ProfileContext.Provider>
  );
};
