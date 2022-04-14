import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";

export const loginService = async (email, password) => {
    console.log(email,password)
  try {
    const res = await axios.post("api/auth/login", {
      email,
      password,
    });
    console.log(res)
   

    if (res.status === 200) {
      toast.success(`Welcome Back ${res.data.foundUser.firstName}`);

      return res;
    }
  } catch (error) {
    toast.error("Invalid Username or Password");
    console.log(error);
  }
};