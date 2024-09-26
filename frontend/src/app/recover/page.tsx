const Recover = () => {
  return (
    <div className="my-24">
      <h1 className="text-3xl font-semibold text-center">Нууц үг сэргээх</h1>
      <div className="ml-[45%] mr-[45%] gap-3 ">
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Шинэ нууц үг"
          type="password"
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Шинэ нууц үг давтах"
          type="password"
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
      </div>
    </div>
  );
};
export default Recover;
