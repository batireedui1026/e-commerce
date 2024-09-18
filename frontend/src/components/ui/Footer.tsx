import { IoIosCall } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="flex justify-between mx-3">
        <p></p>
        <div className="flex items-center">
          <div className="flex gap-2 pr-3">
            <IoIosCall />
            <p>(976) 7007-1234</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegMessage />
            <p>contact@ecommerce.mn</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
