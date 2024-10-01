// const Recover = () => {
//   return (
//     <div className="my-24">
//       <h1 className="text-3xl font-semibold text-center">Нууц үг сэргээх</h1>
//       <div className="ml-[45%] mr-[45%] gap-3 ">
//         <input
//           className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
//           placeholder="Шинэ нууц үг"
//           type="password"
//         ></input>
//         <input
//           className="btn border rounded-xl w-60 flex mb-4 mt-6 pl-2 h-9 "
//           placeholder="Шинэ нууц үг давтах"
//           type="password"
//         ></input>
//         <div className="text-red-600 pb-2 text-xs">
//           <p>Том үсэг орсон байх</p>
//           <p>Жижиг үсэг орсон байх</p>
//           <p>Тоо орсон байх</p>
//           <p>Тэмдэгт орсон байх</p>
//         </div>
//         <button className="btn border rounded-xl w-60 flex bg-blue-700 h-9 pl-20 text-white transform transition-transform duration-300 hover:scale-110 ">
//           Үүсгэх
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Recover;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { toast } from "react-toastify";
import axios from "axios";
// import { useRouter } from "next/navigation";

const NewPass = () => {
  // const router = useRouter();
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const params = useSearchParams();

  const handleNewPassword = async () => {
    try {
      if (!(password === repassword)) {
        console.log("Clicked not match");
        toast({
          title: "Алдаа",
          description: "Нууц үг хоорондоо таарахгүй байна",
        });
        return;
      }
      const response = await axios.post(
        `http://localhost:8000/api/v1/auth/verify-password`,
        {
          password,
        }
      );
      if (response.status === 200) {
        console.log("success");
        toast({
          title: "Амжилттай",
          description: "Нууц үг амжилттай солигдлоо",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-[calc(100vh-350px)] flex flex-col items-center">
      <div className="w-[320px] mt-24">
        <h1 className="text-2xl font-semibold mb-8 text-center">
          Нууц үг сэргээх
        </h1>
        <div className="flex flex-col gap-4 text-sm">
          <Input
            type="password"
            placeholder="Шинэ нууц үг"
            className="input-primary"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Шинэ нууц үг давтах"
            className="input-primary"
            onChange={(e) => setRePassword(e.target.value)}
          />
          <ul className="list-disc pl-5 text-muted-foreground text-xs font-light leading-5 flex flex-col gap-0.5">
            <li>Том үсэг орсон байх</li>
            <li>Жижиг үсэг орсон байх</li>
            <li>Тоо орсон байх</li>
            <li>Тэмдэгт орсон байх</li>
          </ul>
          <Button
            className="button-primary bg-blue-600 rounded w-80"
            onClick={handleNewPassword}
          >
            Үүсгэх
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
