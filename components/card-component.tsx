import Image from "next/image";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog";
import DetailPage from "./ComponentDetailPage/DetailPage";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Cpu, GaugeCircle } from "lucide-react";

type CardProps = {
    title: string;
    category: string;
    image: string;
    amazonLink: string;
    cores?: number;
    frequency?: number;
}

const CardComponent = ({ title, category, image, amazonLink, cores, frequency }: CardProps) => {
    return (
        <div key={title} className="overflow-hidden w-[20rem] rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
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
                <div className="flex gap-2">
                    <h2 className="font-semibold px-2 py-1 rounded-xl text-sm text-white bg-gradient-to-tr from-primary via-secondary to-pink-400 shadow-md">
                        {category}
                    </h2>
                    {cores && (
                        <h2 className="font-medium text-sm text-primary-foreground flex items-center gap-1">
                            <Cpu size={15} />
                            {cores} cores

                        </h2>
                    )}
                    {frequency && (
                        <h2 className="font-medium text-sm text-primary-foreground flex items-center gap-1">
                            <GaugeCircle size={15} />
                            {frequency} GHz
                        </h2>
                    )}
                </div>
                <div className="flex flex-row justify-between items-center mt-10">
                    <Dialog>
                        <DialogTrigger>
                            <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                                Read More
                            </div>
                        </DialogTrigger>
                        <DetailPage amazonLink={amazonLink} cores={cores} frequency={frequency} category={category} imageUrl={image} title={title} />
                    </Dialog>
                </div>
            </div>
        </div >
    )
}

export default CardComponent