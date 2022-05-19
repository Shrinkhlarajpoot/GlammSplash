import axios from "axios";
import toast from "react-hot-toast";
export const loginService = async (email, password) => {
   try {
    const res = await axios.post("api/auth/login", {
      email,
      password,
    });
    if (res.status === 200) {
      toast.success(
        `Welcome back, ${res.data.foundUser.firstName}!`,
        {
          icon: "👋",
        }
      );

      return res;
    }
  } catch (error) {
    toast.error("Invalid Username or Password");
    console.log(error);
  }
};