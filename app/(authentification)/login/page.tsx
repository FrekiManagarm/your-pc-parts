"use client"

import { signIn } from 'next-auth/react';
import { SiFacebook, SiGoogle } from 'react-icons/si';
import { useState, ChangeEvent, FormEvent } from 'react';

type LoginPageProps = {
  searchParams: { error?: string }
}

type InputProps = {
  email: string;
  password: string;
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  const [inputs, setInputs] = useState<InputProps>({ email: "", password: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handlerSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await signIn("credentials", {
      emailAdress: inputs.email,
      password: inputs.password,
      callbackUrl: "/",
    })
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center  bg-background">
      <div className="h-[30rem] w-[30rem] p-5 rounded-xl bg-white border border-gray-500/20">
        <h1 className="font-bold text-center text-2xl text-black">Welcome to Your PC Parts !</h1>
        <p className="text-gray-500 text-center">Lets Connect</p>
        <form className="p-5" onSubmit={handlerSubmit}>
          <label htmlFor='email' className="font-medium text-md">Email</label>
          <input
            className="w-full h-10 border border-gray-500 rounded-[0.25rem] p-2"
            placeholder="john.doe@icloud.com"
            name='email'
            type='string'
            autoComplete='off'
            required
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <div className="py-2" />
          <label htmlFor='password' className="font-medium text-md">Password</label>
          <input
            className="w-full h-10 border border-gray-500 rounded-[0.25rem] p-2"
            placeholder="*******"
            name='password'
            type='password'
            autoComplete='off'
            required
            value={inputs.password || ""}
            onChange={handleChange}
          />
          <button
            className="w-full h-10 my-5 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-[0.5rem] transition-shadow duration-300 hover:shadow-lg"
            type="submit"
          >
            Login
          </button>
          <p className="w-full flex justify-center my-5">or</p>
          <div className="flex flex-row justify-center">
            <button className="flex flex-row items-center bg-red-500 text-white font-medium p-3 rounded-xl transition-shadow duration-300 hover:shadow-xl">
              <SiGoogle className='fill-white mx-1 h-5 w-5' />
              <p>Google</p>
            </button>
            <div className="px-5" />
            <button className="flex flex-row items-center bg-blue-500 text-white font-medium p-3 rounded-xl transition-shadow duration-300 hover:shadow-xl">
              <SiFacebook className='fill-white mx-1 h-5 w-5' />
              <p>Facebook</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


