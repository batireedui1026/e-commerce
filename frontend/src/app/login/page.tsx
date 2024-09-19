"use client";
import Link from 'next/link'
const Login = () => {
  return (
    <div className="pt-52 pb-80 bg-gray-100 ">
      <h1 className="text-3xl font-semibold text-center">Нэвтрэх</h1>
      <div className="ml-[600px] mr-[500px] gap-3 ">
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Имэйл хаяг" type="password"
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 pl-2 h-9"
          placeholder="Нууц үг" type="password"
        ></input>
        <button className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 text-white transform transition-transform duration-300 hover:scale-110 ">
          Нэвтрэх
        </button>
        <Link className="border-b-[1px] w-36 pl-4 pt-9 ml-[45px]  hover:scale-110" href="/forgetpass">
          Нууц үг мартсан
        </Link>
        <button className="btn border rounded-xl w-60 flex mt-4 h-9 pl-20 transform transition-transform duration-300 hover:scale-110">
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
};
export default Login;
