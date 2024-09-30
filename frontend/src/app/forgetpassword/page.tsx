"use client";
import Otp from "@/components/otp";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otpValue, setOtpValue] = useState("");
  const [countDown, setCountDown] = useState(30);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    console.log(email);
    try {
      const res = await axios.post(
        `http://localhost:8000/api/v1/auth/forget-password`,
        { email }
      );
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {
      toast.error("Имэйл илгээхэд алдаа гарлаа");
    }
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      // router.push("/forgetpass/newpass");
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/verify-otp",
          { email, otpValue }
        );
        if (res.status === 200) {
          toast.success(
            "Нууц үг сэргээх холбоосыг таны имэйл хаяг руу явууллаа."
          );
          router.push("/login");
        }
      } catch (error) {
        toast.error("Имэйл илгээхэд алдаа гарлаа");
      }
    }
  };
 
  const handleResendOtp = () => {
    setCountDown(30);
  };
  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [countDown]);

  

  return (
    <div className="pt-52 pb-80 bg-gray-100">
      {step === 1 && (
        <>
          {" "}
          <h1 className="text-3xl font-semibold text-center">Бүртгүүлэх</h1>
          <div className="ml-[45%] mr-[45%] gap-3">
            <input
              className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
              placeholder="Имэйл хаяг оруулах"
              type="text"
              onChange={handleEmail}
            ></input>
            <button
            
              className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 text-white transform transition-transform duration-300 hover:scale-110 " onClick={handleSendOtp}
            >
              Илгээх
            </button>
          </div>
        </>
      )}
      {step === 2 && <Otp />}
    </div>
  );
};
export default ForgetPassword;
