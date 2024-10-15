"use client";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";

const baraa = [
  {
    ner: "The Prompt Magazine",
    une: 120000,
    img: "/image.png",
  },
  {
    ner: "Chunky Glyph Tee",
    une: 120000,
    img: "/image2.png",
  },
  {
    ner: "All Smiles Nalgene",
    une: 120000,
    img: "/image3.png",
  },
  // {
  //   ner: "Wildflower Hoodie",
  //   une: 108000,
  //   img: "/image4.png",
  // },
  {
    ner: "Inkblot Tee",
    une: 120000,
    img: "/image5.png",
  },
  {
    ner: "Gestures Longsleeve",
    une: 120000,
    img: "/image2.png",
  },
  {
    ner: "Chunky Glyph Cap",
    une: 120000,
    img: "/image7.png",
  },
  {
    ner: "Local Styles Crewneck",
    une: 120000,
    img: "/image8.png",
  },
  {
    ner: "Chunky Glyph Cap",
    une: 120000,
    img: "/image7.png",
  },
];
const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>({});
  // const { isNew } = response.data.product;

  const getProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/v1/products/${id}`
      );
      console.log("data", response.data.product);
      return setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
    // const products = await getProduct();
  };
  useEffect(() => {
    // getProduct();
  }, []);

  const purchase = async () => {
    const [cart, setCart] = useState({});
    try {
      const response = await axios.post(`http://localhost:8000/api/v1/carts`);
      return setCart(response.data.carts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="flex justify-between ml-20 mr-60">
        <div className="flex gap-32">
          <div className=" my-40 flex flex-col gap-4 ">
            {/* {product.images?.map((image) => (
              <img className="w-16 h-24 rounded object-cover" src={image}></img>
            ))} */}
          </div>
          <div className="my-32">
            <img
              className="w-[426px] h-[641px] rounded-2xl object-cover"
              src={product.images}
            ></img>
          </div>
        </div>
        <div className="my-40 flex flex-col gap-3">
          {product.isNew ? (
            <p className="w-20 h-7 border border-blue-700 font-semibold rounded pl-4 ">
              шинэ
            </p>
          ) : (
            ""
          )}

          <p className="flex text-2xl font-bold items-center gap-3">
            {product?.name} <CiHeart />
          </p>
          {/* <p>Зэрлэг цэцгийн зурагтай даавуун цамц</p> */}
          <p className="border-bottom-1px w-40 border-b-2 text-black">
            Хэмжээний заавар
          </p>
          <div className="flex gap-3">
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              S
            </div>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              M
            </div>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              L
            </div>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              XL
            </div>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              XXL
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2 border-black">
              -
            </div>
            <p>1</p>
            <div className="w-11 h-11 rounded-full border text-center items-center pt-2  border-black">
              +
            </div>
          </div>
          <p className="font-bold text-2xl">{product.price}₮</p>
          <Link
            href="/sags"
            className="btn btn-primary w-36 h-8 bg-blue-600 rounded-xl text-white"
          >
            {" "}
            Cагсанд нэмэх
          </Link>
          <div className="flex gap-3">
            <p>Үнэлгээ</p>
            <p className="w-28 border-b-2">Бүгдийг харах</p>
          </div>
        </div>
      </div>

      <div>
        <p className="font-bold text-3xl py-2">Холбоотой бараа</p>
        <div className="grid grid-cols-4 gap-14 max-w-[1400px] mx-auto mt-12 mb-24  ">
          {baraa.map((b) => (
            <div>
              <div className=" rounded ">
                <img
                  src={b.img}
                  alt="description of image"
                  className=" rounded-xl object-cover size-full overflow-hidden"
                />
                <p>{b.ner}</p>
                <p className="font-bold pb-3">{b.une}₮</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Detail;
