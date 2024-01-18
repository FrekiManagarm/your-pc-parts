import { SiGoogle, SiFacebook } from 'react-icons/si';

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center  bg-background">
      <div className="h-[30rem] w-[30rem] p-5 rounded-xl bg-white border border-gray-500/20">
        <h1 className="font-bold text-2xl text-black">Welcome to Your PC Parts !</h1>
        <p className="text-gray-500">Lets Connect</p>
        <form className="p-5">
          <h3 className="font-medium text-md">Email</h3>
          <input className="w-full h-10 border border-gray-500 rounded-[0.25rem] p-2" placeholder="john.doe@icloud.com" />
          <div className="py-2" />
          <h3 className="font-medium text-md">Password</h3>
          <input className="w-full h-10 border border-gray-500 rounded-[0.25rem] p-2" placeholder="*******" />
          <button className="w-full h-10 my-5 bg-secondary text-white font-bold rounded-[0.5rem] transition-shadow duration-300 hover:shadow-lg">Login</button>
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
