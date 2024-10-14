"use client";
import axios from "axios";
import { url } from "inspector";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

const Home = async () => {
  const getProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/products`);
      // setProducts(response.data);
      console.log("data", response.data);
      return response.data.products;
    } catch (error) {
      console.log(error);
    }
  };
  const products = await getProducts();

  // const save = () => {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <div className="bg-[url('/zurag.png')] h-[744px] bg-cover bg-center">
        <div className="pl-20 pt-80">
          <p className="font-semibold">Wildflower Hoodie</p>
          <p className="font-semibold">120’000₮</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-14 max-w-[1400px] mx-auto mt-12 mb-24">
        {products.map((product) => (
          <Link href={`/${product._id}`} key={product._id}>
            <div className="rounded">
              <div
                className="relative rounded-xl bg-cover bg-center h-64 overflow-hidden"
                style={{ backgroundImage: `url(${product.images})` }}
              >
                <CiHeart className="text-3xl absolute top-3 right-3 text-red-500 cursor-pointer" />
              </div>
              <p>{product.name}</p>
              <p className="font-bold pb-3">{product.price}₮</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Home;
