import axios from "axios";
import { url } from "inspector";
// import { Link } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
// const baraa = [
//   {
//     ner: "The Prompt Magazine",
//     une: 120000,
//     img: "/image.png",
//   },
//   {
//     ner: "Chunky Glyph Tee",
//     une: 120000,
//     img: "/image2.png",
//   },
//   {
//     ner: "All Smiles Nalgene",
//     une: 120000,
//     img: "/image3.png",
//   },
//   {
//     ner: "Wildflower Hoodie",
//     une: 108000,
//     img: "/image4.png",
//   },
//   {
//     ner: "Inkblot Tee",
//     une: 120000,
//     img: "/image5.png",
//   },
//   {
//     ner: "Gestures Longsleeve",
//     une: 120000,
//     img: "/image2.png",
//   },
//   {
//     ner: "Chunky Glyph Cap",
//     une: 120000,
//     span: "col-span-2",
//     img: "/image7.png",
//   },
//   {
//     ner: "Local Styles Crewneck",
//     une: 120000,
//     span: "col-span-2",
//     img: "/image8.png",
//   },
//   {
//     ner: "Chunky Glyph Cap",
//     une: 120000,
//     img: "/image7.png",
//   },
//   {
//     ner: "Doodle Hoodie",
//     une: 120000,
//     img: "/image10.png",
//   },
//   {
//     ner: "Chunky Glyph Tee",
//     une: 120000,
//     img: "/image11.png",
//   },
//   {
//     ner: "All Smiles Nalgene",
//     une: 120000,
//     img: "/image12.png",
//   },
//   {
//     ner: "The Prompt Magazine",
//     une: 120000,
//     img: "/image.png",
//   },
//   {
//     ner: "Independent Corners Tee",
//     une: 120000,
//     img: "/image14.png",
//   },
//   {
//     ner: "Independent Corners Tee",
//     une: 120000,
//     img: "/image14.png",
//   },
//   {
//     ner: "The Prompt Magazine",
//     une: 120000,
//     img: "/image.png",
//   },
//   {
//     ner: "Chunky Glyph Tee",
//     une: 120000,
//     img: "/image11.png",
//   },
//   {
//     ner: "All Smiles Nalgene",
//     une: 120000,
//     img: "/image12.png",
//   },
// ];

const Home = async () => {
  // const [products, setProducts] = useState([]);
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
  // const findPost = products.filter((product) => product._id);
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
          <Link href={`/${product._idx}`}>
            <CiHeart className="text-3xl absolute top-3 right-3 text-red-500 cursor-pointer" />
          </Link>
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
