import { url } from "inspector";

const baraa = [
  {
    ner: "magazine",
    une: 120000,
    img: "/image.png",
  },
  {
    ner: "chunky",
    une: 120000,
    img: "/image.png",
  },
  {
    ner: "magazine",
    une: 120000,
    img: "/image.png",
  },
];

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/zurag.png')] h-[444px] bg-cover bg-center">
        <div className="pl-20 pt-80">
          <p className="font-semibold">Wildflower Hoodie</p>
          <p className="font-semibold">120’000₮</p>
        </div>
      </div>
      <div className="flex gap-3 my-5 ml-52">
        <div className="w-60">
          <img
            src="/image.png"
            alt="description of image"
            className="h-80"
          ></img>
          <p>The Prompt Magazine</p>
          <p className="font-semibold">120’000₮</p>
        </div>
        <div className="w-60">
          <img
            src="/image2.png"
            className="h-80"
            alt="description of image"
          ></img>
          <p>Chunky Glyph Tee</p>
          <p className="font-semibold">120’000₮</p>
        </div>
        <div className="w-60">
          <img
            src="/image3.png"
            className="h-80"
            alt="description of image"
          ></img>
          <p>All Smiles Nalgene</p>
          <p className="font-semibold">120’000₮</p>
        </div>
        <div className="w-60">
          <img
            src="/image4.png"
            className="h-80"
            alt="description of image"
          ></img>
          <p>All Smiles Nalgene</p>
          <p className="font-semibold">120’000₮</p>
        </div>
      </div>
      <div className=" gap-2 my-5 ml-52 grid grid-cols-3">
        <div className="w-60">
          <img
            src="/image.png"
            alt="description of image"
            className="h-80"
          ></img>
          <p>The Prompt Magazine</p>
          <p className="font-semibold">120’000₮</p>
        </div>
        <div className="w-60">
          <img
            src="/image2.png"
            className="h-80"
            alt="description of image"
          ></img>
          <p>Chunky Glyph Tee</p>
          <p className="font-semibold">120’000₮</p>
        </div>
        <div className="w-60 grid-rows-2">
          <img
            src="/image3.png"
            className="h-80"
            alt="description of image"
          ></img>
          <p>All Smiles Nalgene</p>
          <p className="font-semibold">120’000₮</p>
        </div>
        <div className="w-60">
          <img
            src="/image4.png"
            className="h-80"
            alt="description of image"
          ></img>
          <p>All Smiles Nalgene</p>
          <p className="font-semibold">120’000₮</p>
        </div>
        <div className="w-60">
          <img
            src="/image4.png"
            className="h-80"
            alt="description of image"
          ></img>
          <p>All Smiles Nalgene</p>
          <p className="font-semibold">120’000₮</p>
        </div>
        <div className="w-60">
          <img
            src="/image4.png"
            className="h-80"
            alt="description of image"
          ></img>
          <p>All Smiles Nalgene</p>
          <p className="font-semibold">120’000₮</p>
        </div>
      </div>
    </div>
  );
};
export default Home;
