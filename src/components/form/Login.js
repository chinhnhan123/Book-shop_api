import React, { createContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "services/auth.service";
import Input from "./Input";
import Button from "./Button.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedInUser } from "features/auth/loginSlice";
// export const globalC = createContext();

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async () => {
    const email = getValues("email");

    const password = getValues("password");
    const config = {
      email: email,
      password: password,
    };
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    console.log("🚀 ~ file: Login.js ~ line 36 ~ onSubmit ~ config", config);
    console.log(
      "🚀 ---------------------------------------------------------🚀"
    );
    try {
      const response = await login(config);
      console.log(
        "🚀 ~ file: SignUpFormHook.js ~ line 32 ~ onSubmit ~ config",
        response.data.token
      );

      localStorage.setItem("access_token", response.data.token);
      dispatch(setLoggedInUser(response.data.payload));
      navigate("/home", { replace: true });
      return response;
    } catch (error) {
      console.log("🚀 ~ file: Login.js ~ line 38 ~ onSubmit ~ error", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <Input
        labelName="Email"
        type="email"
        placeholder="Enter your Email"
        register={register("email")}
        errors={errors}
      ></Input>

      <Input
        labelName="PassWord"
        type="password"
        placeholder="Enter your PassWord"
        register={register("password")}
        errors={errors}
      ></Input>

      <Button isSubmitting={false} label="Submit"></Button>
    </form>
  );
};

export default Login;
