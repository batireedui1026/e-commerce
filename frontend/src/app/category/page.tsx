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

const Category = () => {
  return (
    <div className="flex gap-52">
      <div className="ml-[20%] mt-20">
        <h1 className="font-bold">Ангилал</h1>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>Малгай</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>Усны сав</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>T-Shirt</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>Hoodie</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>Tee</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>Цүнх</p>
        </div>
        <h1 className="font-bold pt-10">Хэмжээ</h1>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>Free</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>S</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>M</p>
        </div>
        <div className="flex gap-2 pt-2 ">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>L</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>XL</p>
        </div>
        <div className="flex gap-2 pt-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox text-black"
          />
          <p>XXL</p>
        </div>
      </div>
      <div className=" px-20 py-20 grid grid-cols-3 gap-14">
        {baraa.map((b) => (
          <div className=" grid {span} ">
            <div className=" rounded ">
              <img
                src={b.img}
                alt="description of image"
                className=" rounded-xl object-cover size-60"
              />
              <p>{b.ner}</p>
              <p className="font-bold pb-3">{b.une}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
