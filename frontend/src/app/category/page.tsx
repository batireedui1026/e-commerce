"use client";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { useUser } from "@/provider/user-provider";
import { RadioGroup } from "@radix-ui/react-radio-group";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  interface Product {
    name: string;
    images: [string];
    _id: string;
    price: number;
  }
  interface Categories {
    name: string;
    _id: string;
  }
  const { user, search } = useUser();
  const [products, setProducts] = useState<Product[] | null>(null);
  const [categories, setCategories] = useState<Categories[] | null>(null);
  const [size, setSize] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const getProducts = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/products`, {
        name: search,
        size,
        category,
      });
      if (res.status === 200) {
        const { arrPro } = res.data;
        console.log(arrPro);
        setProducts(arrPro);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllCategories = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/categories`);
      if (res.status === 200) {
        const { data } = res.data;
        console.log(data);
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getAllCategories();
  }, [search, size, category]);
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <div className="flex max-w-[1400px] mx-auto ">
      <div className="ml-[15%] mt-20">
        <h1 className="font-bold">Ангилал</h1>
        <RadioGroup onValueChange={(value) => setCategory(value)}>
          <div className="flex items-center gap-4 w-[180px] mt-4">
            <RadioGroupItem value="" />
            <label htmlFor="r1" className="">
              All
            </label>
          </div>
          {categories?.map(({ _id, name }, idx) => (
            <div className="flex items-center gap-4 mt-4" key={idx}>
              <RadioGroupItem value={_id} />
              <label htmlFor={`size-${idx}`}>{name}</label>
            </div>
          ))}
        </RadioGroup>
        <h1 className="font-bold pt-10">Хэмжээ</h1>
        <RadioGroup onValueChange={(value) => setSize(value)}>
          <div className="flex items-center gap-4 w-[180px] mt-4">
            <RadioGroupItem value="" />
            <label htmlFor="r1" className="">
              All
            </label>
          </div>
          {["S", "M", "L", "XL", "XXL"].map((sizeOption, idx) => (
            <div className="flex items-center gap-4 mt-4" key={idx}>
              <RadioGroupItem value={sizeOption} />
              <label htmlFor={`size-${idx}`}>{sizeOption}</label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className=" px-20 py-20 grid grid-cols-3 gap-14">
        {products?.map((b) => (
          <div className=" grid {span} ">
            <div className=" rounded ">
              <img
                src={b.images[0]}
                alt="description of image"
                className=" rounded-xl object-cover size-60"
              />
              <p>{b.name}</p>
              <p className="font-bold pb-3">{b.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
