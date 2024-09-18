"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { useState } from "react";
// import Header from "../components/header";
export default function Home() {
  const [count, setCount] = useState(0);
  const minus = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  return <div>{/* <Header /> */}</div>;
}
