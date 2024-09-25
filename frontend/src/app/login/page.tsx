"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const LogIn = async() =>{
    const {email, password} =userData;
    try{
      const response = await axios.post(`http://localhost:8000/api/v1/auth/login`, {
        email,
        password,
      });
      console.log("response", response)
      if(response.status === 200){
        toast.success("User successfully signed in", {autoClose: 1000});
        const {token} = response.data;
        localStorage.setItem("token", token);
        router.push("/home")
      }
    }catch(error){
      console.log("there was a error signing in", error);
      toast.error("failed to sign in. please try again");
    }

  };
  return (
    <div className="pt-52 pb-80 bg-gray-100 ">
      <h1 className="text-3xl font-semibold text-center">Нэвтрэх</h1>
      <div className="ml-[45%] mr-[45%] gap-3 ">
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Имэйл хаяг"
          type="text" onChange={(e)=> 
            setUserData({...userData, email: e.target.value})}
        ></input>
        <input
          className="btn border rounded-xl w-60 flex mb-4 pl-2 h-9"
          placeholder="Нууц үг"
          type="password" onChange={(e)=>
            setUserData
            ({...userData, password: e.target.value})
          }
          
        ></input>
        <button className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 mb-3 text-white transform transition-transform duration-300 hover:scale-110 " onClick={LogIn}>
          Нэвтрэх 
        </button>
        <Link
          className="border-b-[1px] w-36 pl-4 pt-9 ml-[45px]  hover:scale-110"
          href="/forgetpass"
        >
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
