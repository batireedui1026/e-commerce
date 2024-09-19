"use client";
const Login = () => {
  return (
    <div className="pt-52 pb-80 bg-gray-100 ">
      <h1 className="text-3xl font-semibold text-center">Нэвтрэх</h1>
      <div className="ml-[1000px] gap-3 ">
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Имэйл хаяг"
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 pl-2 h-9"
          placeholder="Нууц үг"
        ></input>
        <button className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 text-white ">
          Нэвтрэх
        </button>
        <p className="border-b-[1px] w-36 pl-4 pt-4 ml-[45px]">
          Нууц үг мартсан
        </p>
        <button className="btn border rounded-xl w-60 flex mt-4 h-9 pl-20">
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
};
export default Login;
