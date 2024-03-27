import { getGPUs } from "@/actions/gpu/gpu.action";
import CardComponent from "@/components/card-component";
import { components } from "@/components/main-nav-links";
import { Loader } from "@/components/ui/loader";
import { GPU } from "@prisma/client";

export default async function GPUListPage() {

  const gpus: GPU[] = await getGPUs();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='h-[40rem] w-[90%] flex justify-start items-center bg-gradient-to-br from-primary to-accent rounded-lg px-10 mt-24'>
        <div className="flex flex-col w-full lg:w-[45rem]">
          <h1 className='font-bold text-8xl text-white content-center'>{components[1].title}</h1>
          <p className="font-semibold break-words text-xl text-gray-300">{components[1].description}</p>
        </div>
      </div>
      <section className="w-full grid place-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 py-5">
        {gpus && gpus.length != 0 ? gpus.map((gpu) => (
          <>
            <CardComponent title={gpu.name} power={gpu.power as number} color={gpu.color as string} length={gpu.length as number} memory={gpu.memory as number} frequency={gpu.core_clock as number} cores={gpu.proc_unit as number} frequency_boost={gpu.boost_clock as number} amazonLink={gpu.amazonLink as string} category="GPU" image={gpu.imageUrl as string} />
          </>
        )) : <Loader />}
      </section>
    </div>
  )
}
