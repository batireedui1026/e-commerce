import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between  bg-black px-5 py-3    ">
        <div className="flex gap-4 items-center">
          <p className="text-xl text-white ">ECOMMERCE</p>
          <p className="text-white">Ангилал </p>
        </div>
        <div>
          <input
            className="border rounded-xl bg-gray-900 w-80 text-center h-10"
            placeholder="Бүтээгдэхүүн хайх"
          ></input>
          <CiSearch className="text-white relative bottom-8 left-3 text-xl " />
        </div>

        <div className="flex gap-4 items-center">
          <FaHeart className="text-white" />
          <FaShoppingCart className="text-white" />
          <button className="btn border rounded-xl text-white w-24">
            Бүртгүүлэх
          </button>
          <button className="btn border rounded text-white bg-blue-700 w-24">
            Нэвтрэх
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
