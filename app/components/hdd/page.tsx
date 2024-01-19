import { components } from "@/components/main-nav-links";

export default function HDDListPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className='h-[40rem] w-[90%] flex justify-start items-center bg-gradient-to-br from-primary to-accent rounded-lg px-10 mt-24'>
        <div className="flex flex-col w-full lg:w-[45rem]">
          <h1 className='font-bold text-8xl text-white content-center'>{components[3].title}</h1>
          <p className="font-semibold break-words text-xl text-gray-300">{components[3].description}</p>
        </div>
      </div>
      <div className="container w-full">

      </div>
    </div>
  )
}
