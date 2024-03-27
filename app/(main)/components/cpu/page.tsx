import { getCPUs } from "@/actions/cpu/cpu.action";
import CardComponent from "@/components/card-component";
import { components } from "@/components/main-nav-links";
import { Loader } from "@/components/ui/loader";
import { CPU } from "@prisma/client";

export default async function CPUListPage() {
  const cpus = await getCPUs();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='h-[40rem] w-[90%] flex justify-start items-center bg-gradient-to-br from-primary to-accent rounded-lg px-10 mt-10'>
        <div className="flex flex-col w-full lg:w-[45rem]">
          <h1 className='font-bold text-8xl text-white content-center'>{components[0].title}</h1>
          <p className="font-semibold break-words text-xl text-gray-300">{components[0].description}</p>
        </div>
      </div>
      <section className="w-full grid place-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 py-5">
        {cpus.length != 0 ? cpus.map((cpu) => (
          <>
            <CardComponent title={cpu.name} frequency={cpu.core_clock} frequency_boost={cpu.boost_clock} socket={cpu.socket as string} type={cpu.cpu_type} cores={cpu.core_count} threads={cpu.threads_count} graphics={cpu.graphics as boolean} cache={cpu.cache as number} tdp={cpu.tdp as number} amazonLink={cpu.amazonLink as string} category="CPU" image={cpu.imageUrl ?? ""} />
          </>
        )) : <Loader />}
      </section>
    </div>
  )
}
