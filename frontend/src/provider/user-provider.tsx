"use client";

import axios from "axios";
import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface IUser {
  _id: string;
  firstname: string;
  email: string;
}

interface IContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setSearch: Dispatch<SetStateAction<string | null>>;
  search: string | null;
}

export const UserContext = createContext<IContext>({
  user: {
    _id: "",
    firstname: "",
    email: "",
  },
  setUser: () => {},
  setSearch: () => {},
  search: null,
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [search, setSearch] = useState<string | null>(null);
  const fetchUserData = async () => {
    try {
      console.log("GET-USER");
      const token = localStorage.getItem("token") || "";
      console.log("TOKEN", token);
      const response = await axios.get(
        `http://localhost:8000/api/v1/auth/current-user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("GET-USER-2");
      if (response.status === 200) {
        setUser(response.data.user);
        console.log("RD", response.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    // if (!user) {
    // }
    fetchUserData();
  }, []);
  console.log("USER", user);
  return (
    <UserContext.Provider value={{ user, setUser, setSearch, search }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
