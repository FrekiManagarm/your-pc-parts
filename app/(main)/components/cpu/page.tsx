import { getCPUs } from "@/actions/cpu/cpu.action";
import CardComponent from "@/components/card-component";
import { components } from "@/components/main-nav-links";
import { Loader } from "@/components/ui/loader";
import { CPU } from "@prisma/client";

export default async function CPUListPage() {
  const cpus: CPU[] = await getCPUs();
  console.log(cpus, 'cpus')

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
            <CardComponent title={cpu.name} category="CPU" image={cpu.imageUrl ?? ""} />
          </>
        )) : <Loader />}
        {/* <CardComponent title="i9 12900K" category="CPU" image="https://i.imgur.com/ykx3VxH.jpg" />
        <CardComponent title="i9 12900K" category="CPU" image="https://i.imgur.com/ykx3VxH.jpg" /> */}
      </section>
    </div>
  )
}
