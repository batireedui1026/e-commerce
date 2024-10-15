interface SearchingProps {
  name: string;
  images: string;
  price: number;
}

const Searching: React.FC<SearchingProps> = ({ name, images, price }) => {
  return (
    <div>
      <div className="flex justify-between border rounded mt-5 max-w-[600px] mx-auto bg-white">
        <div className="flex gap-6">
          <img
            src={images}
            alt={name}
            className="w-32 h-32 object-cover rounded my-3 ml-3"
          />
          <div className="flex gap-3 pt-3 flex-col">
            <p>{name}</p>
            <p className="font-bold">{price}₮</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searching;
