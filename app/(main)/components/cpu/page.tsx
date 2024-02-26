import { getCPUs } from "@/actions/cpu/cpu.action";
import CardComponent from "@/components/card-component";
import { components } from "@/components/main-nav-links";
import { CPU } from "@prisma/client";

export default async function CPUListPage() {
  const cpus: CPU[] = await getCPUs();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='h-[40rem] w-[90%] flex justify-start items-center bg-gradient-to-br from-primary to-accent rounded-lg px-10 mt-10'>
        <div className="flex flex-col w-full lg:w-[45rem]">
          <h1 className='font-bold text-8xl text-white content-center'>{components[0].title}</h1>
          <p className="font-semibold break-words text-xl text-gray-300">{components[0].description}</p>
        </div>
      </div>
      <section className="w-full grid grid-cols-4 gap-3 px-10 py-5">
        {/* {cpus != null ? cpus.map((cpu) => (
          <CardComponent title={cpu.name} category="CPU" image={cpu.imageUrl} />
        )) : <Loader />} */}
        <CardComponent title="i9 12900K" category="CPU" image="https://i.imgur.com/ykx3VxH.jpg" />
        <CardComponent title="i9 12900K" category="CPU" image="https://i.imgur.com/ykx3VxH.jpg" />
      </section>
    </div>
  )
}
