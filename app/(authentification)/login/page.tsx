"use client";

import { signIn } from "next-auth/react";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { useState, ChangeEvent, FormEvent } from "react";

type LoginPageProps = {
  searchParams: { error?: string };
};

type InputProps = {
  email: string;
  password: string;
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const [inputs, setInputs] = useState<InputProps>({ email: "", password: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handlerSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await signIn("credentials", {
      emailAdress: inputs.email,
      password: inputs.password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="bg-background flex h-screen w-screen items-center  justify-center">
      <div className="h-[30rem] w-[30rem] rounded-xl border border-gray-500/20 bg-white p-5">
        <h1 className="text-center text-2xl font-bold text-black">
          Welcome to Your PC Parts !
        </h1>
        <p className="text-center text-gray-500">Lets Connect</p>
        <form className="p-5" onSubmit={handlerSubmit}>
          <label htmlFor="email" className="text-md font-medium">
            Email
          </label>
          <input
            className="h-10 w-full rounded-[0.25rem] border border-gray-500 p-2"
            placeholder="john.doe@icloud.com"
            name="email"
            type="string"
            autoComplete="off"
            required
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <div className="py-2" />
          <label htmlFor="password" className="text-md font-medium">
            Password
          </label>
          <input
            className="h-10 w-full rounded-[0.25rem] border border-gray-500 p-2"
            placeholder="*******"
            name="password"
            type="password"
            autoComplete="off"
            required
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <button
            className="from-primary to-secondary my-5 h-10 w-full rounded-[0.5rem] bg-gradient-to-r font-bold text-white transition-shadow duration-300 hover:shadow-lg"
            type="submit"
          >
            Login
          </button>
          <p className="my-5 flex w-full justify-center">or</p>
          <div className="flex flex-row justify-center">
            <button className="flex flex-row items-center rounded-xl bg-red-500 p-3 font-medium text-white transition-shadow duration-300 hover:shadow-xl">
              <SiGoogle className="mx-1 h-5 w-5 fill-white" />
              <p>Google</p>
            </button>
            <div className="px-5" />
            <button className="flex flex-row items-center rounded-xl bg-blue-500 p-3 font-medium text-white transition-shadow duration-300 hover:shadow-xl">
              <SiFacebook className="mx-1 h-5 w-5 fill-white" />
              <p>Facebook</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
