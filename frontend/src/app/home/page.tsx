import { url } from "inspector";

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
  {
    ner: "Wildflower Hoodie",
    une: 108000,
    img: "/image4.png",
  },
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
    span: "col-span-2",
    img: "/image7.png",
  },
  {
    ner: "Local Styles Crewneck",
    une: 120000,
    span: "col-span-2",
    img: "/image8.png",
  },
  {
    ner: "Chunky Glyph Cap",
    une: 120000,
    img: "/image7.png",
  },
  {
    ner: "Doodle Hoodie",
    une: 120000,
    img: "/image10.png",
  },
  {
    ner: "Chunky Glyph Tee",
    une: 120000,
    img: "/image11.png",
  },
  {
    ner: "All Smiles Nalgene",
    une: 120000,
    img: "/image12.png",
  },
  {
    ner: "The Prompt Magazine",
    une: 120000,
    img: "/image.png",
  },
  {
    ner: "Independent Corners Tee",
    une: 120000,
    img: "/image14.png",
  },
  {
    ner: "Independent Corners Tee",
    une: 120000,
    img: "/image14.png",
  },
  {
    ner: "The Prompt Magazine",
    une: 120000,
    img: "/image.png",
  },
  {
    ner: "Chunky Glyph Tee",
    une: 120000,
    img: "/image11.png",
  },
  {
    ner: "All Smiles Nalgene",
    une: 120000,
    img: "/image12.png",
  },
];

const Home = () => {
  return (
    <div>
      <div className="bg-[url('/zurag.png')] h-[744px] bg-cover bg-center">
        <div className="pl-20 pt-80">
          <p className="font-semibold">Wildflower Hoodie</p>
          <p className="font-semibold">120’000₮</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-14 max-w-[1400px] mx-auto mt-12 mb-24  ">
        {baraa.map((b) => (
          <div className={`grid ${b.span ? b.span : ""}`}>
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
  );
};
export default Home;
