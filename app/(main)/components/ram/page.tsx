import { getRAMs } from "@/actions/ram/ram.action";
import CardComponent from "@/components/card-component";
import { components } from "@/components/main-nav-links";
import { Loader } from "@/components/ui/loader";

export default async function RAMListPage() {

  const rams = await getRAMs();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='h-[40rem] w-[90%] flex justify-start items-center bg-gradient-to-br from-primary to-accent rounded-lg px-10 mt-24'>
        <div className="flex flex-col w-full lg:w-[45rem]">
          <h1 className='font-bold text-8xl text-white content-center'>{components[5].title}</h1>
          <p className="font-semibold break-words text-xl text-gray-300">{components[5].description}</p>
        </div>
      </div>
      <section className="w-full grid place-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 py-5">
        {rams.length != 0 ? rams.map((ram) => (
          <>
            <CardComponent title={ram.name} category="RAM" image={ram.imageUrl ?? ""} />
          </>
        )) : <Loader />}
      </section>
    </div>
  )
}
