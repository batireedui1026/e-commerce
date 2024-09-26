"use client";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
const Opt = () => {
  return (
    <div className=" flex justify-center flex-col my-8 gap-4    ">
      <h1 className="text-center text-2xl font-bold">Баталгаажуулах</h1>
      <p className="text-center text-gray-700">
        "" хаягт илгээсэн Баталгаажуулах кодыг оруулна уу
      </p>
      <div className="flex justify-center">
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Link href="/recover" className="btn   ">
        Дахин илгээх
      </Link>
    </div>
  );
};
export default Opt;
