"use client";
import { useState } from "react";
// import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const signUp = async () => {
    const { firstname, lastname, email, password, repassword } = userData;
    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй бай");
    }
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/auth/signup`,
        {
          firstname,
          lastname,
          email,
          password,
        }
      );
      if (response.status === 201) {
        toast.success("User successfully signed up", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/login");
      }
    } catch (error) {
      console.log("There was an error signing up", error);
      toast.error("Failed to sign up. Please try again");
    }
  };

  return (
    <div className="pt-52 pb-80 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center">Бүртгүүлэх</h1>
      <div className="ml-[45%] mr-[45%] gap-3 ">
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Нэр"
          type="text"
          value={userData.firstname}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Овог"
          type="text"
          value={userData.lastname}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 pl-2 h-9"
          placeholder="Имэйл хаяг"
          type="text"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Нууц Үг"
          type="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder=" Нууц үг давтах"
          type="password"
          value={userData.repassword}
          onChange={(e) =>
            setUserData({ ...userData, repassword: e.target.value })
          }
        ></input>
        <div className="text-red-600 pb-2 text-xs">
          <p>Том үсэг орсон байх</p>
          <p>Жижиг үсэг орсон байх</p>
          <p>Тоо орсон байх</p>
          <p>Тэмдэгт орсон байх</p>
        </div>

        <button
          className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 text-white transform transition-transform duration-300 hover:scale-110 "
          onClick={signUp}
        >
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
