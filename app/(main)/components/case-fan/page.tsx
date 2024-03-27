import { getCaseFans } from "@/actions/case-fan/case-fan.action";
import CardComponent from "@/components/card-component";
import { components } from "@/components/main-nav-links";
import { Loader } from "@/components/ui/loader";

export default async function CaseFanListPage() {

  const caseFans = await getCaseFans();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='h-[40rem] w-[90%] flex justify-start items-center bg-gradient-to-br from-primary to-accent rounded-lg px-10 mt-10'>
        <div className="flex flex-col w-full lg:w-[45rem]">
          <h1 className='font-bold text-8xl text-white content-center'>{components[17].title}</h1>
          <p className="font-semibold break-words text-xl text-gray-300">{components[17].description}</p>
        </div>
      </div>
      <div className="w-full grid place-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 py-5">
        {caseFans && caseFans.length != 0 ? caseFans.map((caseFan) => (
          <>
            <CardComponent title={caseFan.name} amazonLink={caseFan.amazonLink as string} size={caseFan.size} rpm={caseFan.rpm} airflow={caseFan.airflow} category="Case Fan" image={caseFan.imageUrl ?? ""} />
          </>
        )) : <Loader />}
      </div>
    </div>
  )
}
