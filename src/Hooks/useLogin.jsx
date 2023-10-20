import { getUsername } from "../services/auth.service.js";
import { useEffect } from "react";
import { useState } from "react";

export const useLogin = () => {
  // get-Token
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username;
};
