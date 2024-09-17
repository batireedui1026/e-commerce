"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1> e commerce</h1>
      <div className="flex items-center">
        <Button className="btn" onClick={minus}>
          -
        </Button>
        <Label htmlFor="terms">{count}</Label>
        <Button className="btn" onClick={add}>
          +
        </Button>
      </div>
    </div>
  );
}
