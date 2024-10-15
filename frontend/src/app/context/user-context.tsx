"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface ProfileContextType {}
export const ProfileContext = createContext<ProfileContextType>({});

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ProfileContext.Provider value={{}}>{children}</ProfileContext.Provider>
  );
};
