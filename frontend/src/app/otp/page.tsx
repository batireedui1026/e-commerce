// "use client";
// import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import Link from "next/link";
// const Opt = () => {
//   return (
//     <div className=" flex justify-center flex-col my-8 gap-4    ">
//       <h1 className="text-center text-2xl font-bold">Баталгаажуулах</h1>
//       <p className="text-center text-gray-700">
//         "" хаягт илгээсэн Баталгаажуулах кодыг оруулна уу
//       </p>
//       <div className="flex justify-center">
//         <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
//           <InputOTPGroup>
//             <InputOTPSlot index={0} />
//             <InputOTPSlot index={1} />
//             <InputOTPSlot index={2} />
//             <InputOTPSlot index={3} />
//           </InputOTPGroup>
//         </InputOTP>
//       </div>
//       <Link href="/recover" className="btn   ">
//         Дахин илгээх
//       </Link>
//     </div>
//   );
// };
// export default Opt;
"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { EmailIcon } from "@/icons";
import { useState, useEffect } from "react";

const Otp = () => {
  const router = useRouter();
  const [countDown, setCountDown] = useState(30);
  const [otpValue, setOtpValue] = useState("12");

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [countDown]);

  const handleResendOtp = () => {
    setCountDown(30);
  };

  const handleConfirmOtp = (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      router.push("/forgetpass/newpass");
    }
  };

  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
      <EmailIcon />
      <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
      <p className="mt-2 mb-6 text-text-primary">
        “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
      </p>
      <div className="flex flex-col gap-4 text-sm">
        <InputOTP maxLength={4} value={otpValue} onChange={handleConfirmOtp}>
          <InputOTPGroup className="bg-white">
            <InputOTPSlot className="w-14 h-14" index={0} />
            <InputOTPSlot className="w-14 h-14" index={1} />
            <InputOTPSlot className="w-14 h-14" index={2} />
            <InputOTPSlot className="w-14 h-14" index={3} />
          </InputOTPGroup>
        </InputOTP>
        <Button
          className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
          onClick={handleResendOtp}
          variant="link"
        >
          Дахин илгээх ({countDown})
        </Button>
      </div>
    </div>
  );
};

export default Otp;
