import Image from "next/image";

type CardProps = {
    title: string;
    category: string;
    image: string;
    amazonLink: string;
}

const CardComponent = ({ title, category, image, amazonLink }: CardProps) => {
    return (
        <div className="overflow-hidden w-[20rem] rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-[20rem] aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                    src={image}
                    alt="thumbnail photo"
                    width={350}
                    height={200}
                    objectFit="cover"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                />
            </div>
            <div className="p-4">
                <h2 className="font-bold my-4 text-lg text-zinc-700">
                    {title}
                </h2>
                <h2 className="font-normal my-4 text-sm text-zinc-500">
                    {category}
                </h2>
                <div className="flex flex-row justify-between items-center mt-10">
                    <span className="text-sm text-gray-500">{Date.now()}</span>

                    <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                        Read More
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent