"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)

  }


  const handleSendOpt = async() => {
    console.log(email);
    try{
      const res = await axios.post(`http://localhost:8000/api/v1/auth/forget-password`, {email});
      if(res.status === 200){

      }

    }catch(error){
      toast.error("Имэйл илгээхэд алдаа гарлаа")
    }
   
  }
  return (
    <div className="pt-52 pb-80 bg-gray-100">
      <h1 className="text-3xl font-semibold text-center">Бүртгүүлэх</h1>
      <div className="ml-[45%] mr-[45%] gap-3">
        <input
          className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
          placeholder="Имэйл хаяг оруулах"
          type="text" onChange={handleEmail}
        ></input>
        <Link
          href="/opt"
          className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 text-white transform transition-transform duration-300 hover:scale-110 "
        >
          Илгээх
        </Link>
      </div>
    </div>
  );
};
export default ForgetPassword;
