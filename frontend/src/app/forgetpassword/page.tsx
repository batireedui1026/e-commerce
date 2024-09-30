"use client";
import Otp from "@/components/otp";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
// import { EmailIcon } from "@/icons";
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
    // console.log("forgetpass", handleSendOtp);

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
      console.log(error);
    }
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      // router.push("/forgetpass/newpass");
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/verify-otp",
          { email, otpValue: value }
        );
        if (res.status === 200) {
          toast.success(
            "Нууц үг сэргээх холбоосыг таны имэйл хаяг руу явууллаа."
          );
          router.push("/newpass");
        }
      } catch (error) {
        toast.error("Имэйл илгээхэд алдаа гарлаа");
        console.log(error);
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
              className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 text-white transform transition-transform duration-300 hover:scale-110 "
              onClick={handleSendOtp}
            >
              Илгээх
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
          <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
          <p className="mt-2 mb-6 text-text-primary">
            {`“${email}” хаягт илгээсэн баталгаажуулах кодыг оруулна уу`}
          </p>
          <div className="flex flex-col gap-4 text-sm">
            <InputOTP
              maxLength={4}
              value={otpValue}
              onChange={handleConfirmOtp}
            >
              <InputOTPGroup className="bg-white">
                <InputOTPSlot className="w-14 h-14" index={0} />
                <InputOTPSlot className="w-14 h-14" index={1} />
                <InputOTPSlot className="w-14 h-14" index={2} />
                <InputOTPSlot className="w-14 h-14" index={3} />
              </InputOTPGroup>
            </InputOTP>
            <Link href="/newpass" className="btn border w-60 bg-blue-400">
              Enter
            </Link>
            <Button
              className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
              onClick={handleResendOtp}
              variant="link"
            >
              Дахин илгээх ({countDown})
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ForgetPassword;
