const SignUp = () => {
  return (
    <div className="pt-52 pb-80 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center">Бүртгүүлэх</h1>
      <div className="ml-[600px] mr-[500px] gap-3 ">
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Нэр" type="password"
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 pl-2 h-9"
          placeholder="Имэйл хаяг" type="password"
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Нууц Үг" type="password"
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder=" Нууц үг давтах" type="password"
        ></input>
        <div className="text-red-600 pb-2 text-xs">
          <p>Том үсэг орсон байх</p>
          <p>Жижиг үсэг орсон байх</p>
          <p>Тоо орсон байх</p>
          <p>Тэмдэгт орсон байх</p>
        </div>

        <button className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 text-white transform transition-transform duration-300 hover:scale-110 ">
          Үүсгэх
        </button>
        <button className="btn border rounded-xl w-60 flex mt-4 h-9 pl-20 transform transition-transform duration-300 hover:scale-110">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
};
export default SignUp;
