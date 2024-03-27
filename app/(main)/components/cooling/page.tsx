import { getCoolings } from "@/actions/cooling/cooling.action";
import CardComponent from "@/components/card-component";
import { components } from "@/components/main-nav-links";
import { Loader } from "@/components/ui/loader";
import { CPUCooler } from "@prisma/client";

export default async function CoolingListPage() {

  const coolings = await getCoolings()

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='h-[40rem] w-[90%] flex justify-start items-center bg-gradient-to-br from-primary to-accent rounded-lg px-10 mt-10'>
        <div className="flex flex-col w-full lg:w-[45rem]">
          <h1 className='font-bold text-8xl text-white content-center'>{components[6].title}</h1>
          <p className="font-semibold break-words text-xl text-gray-300">{components[6].description}</p>
        </div>
      </div>
      <div className="w-full grid place-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 py-5">
        {coolings && coolings.length != 0 ? coolings.map((cooling) => (
          <>
            <CardComponent title={cooling.name} amazonLink={cooling.amazonLink as string} rpm_min={cooling.rpm_min as number} rpm_max={cooling.rpm_max as number} noise_level={cooling.noise_level as number} color={cooling.color as string} pressure={cooling.pressure as string} tdp_max={cooling.tdp_max as number} type={cooling.type} support={cooling.proc_support} category="Cooling" image={cooling.imageUrl as string} size={cooling.size as number} />
          </>
        )) : <Loader />}
      </div>
    </div>
  )
}
