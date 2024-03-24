import Image from "next/image";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog";
import DetailPage from "./ComponentDetailPage/DetailPage";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Cpu, GaugeCircle } from "lucide-react";

type CardProps = {
    title: string;
    image: string;
    amazonLink: string;
    category: string;
    cores?: number;
    frequency?: number;
    frequency_boost?: number;
    pressure?: string;
    rpm_min?: number;
    rpm_max?: number;
    noise_level?: number;
    form_factor?: string;
    max_memory?: number;
    memory_slots?: number;
    audio?: boolean;
    bluetooth?: boolean;
    wifi?: boolean;
    tdp_max?: number;
    color?: string;
    socket?: string;
    chipset?: string;
    support?: string;
    cas?: string;
    type?: string;
    capacity?: number;
    read?: number;
    write?: number;
    power?: number;
    length?: number;
    wattage?: number;
    efficiency?: string;
    speed?: number[];
    modules?: number[];
    modular?: string;
    refresh_rate?: number;
    response_time?: number;
    aspect_ratio?: string;
    resolution?: number[];
    screen_size?: number;
    channels?: string;
    digital_audio?: string;
    snr?: number;
    sample_rate?: number;
    interface?: string;
    frequency_response?: number[];
    microphone?: boolean;
    wireless?: boolean;
    enclosure_type?: string;
    noise_cancel?: boolean;
    style?: string;
    switches?: string;
    backlit?: string;
    tenkeyless?: boolean;
    connection_type?: string;
    tracking_method?: string;
    max_dpi?: number;
    hand_orientation?: string;
    configuration?: string;
    freq_resp?: number;
    resolutions?: number[];
    connection?: string;
    focus_type?: string;
    os?: string[];
    fov?: number;
    size?: number;
    rpm?: number[];
    airflow?: number[];
}

const CardComponent = ({ title, category, image, amazonLink, cores, frequency }: CardProps) => {

    const uiConstructor = (type: string) => {
        switch (type) {
            case 'CPU':
                return <></>
            case 'GPU':
                return <></>
            case "HDD":
                return <></>
            case "SSD":
                return <></>
            case "Case":
                return <></>
            case "Motherboard":
                return <></>
            case "RAM":
                return <></>
            case "Cooling":
                return <></>
            case "PSU":
                return <></>
            case "Monitor":
                return <></>
            case "SoundCard":
                return <></>
            case "Headphones":
                return <></>
            case "Keyboard":
                return <></>
            case "Mouse":
                return <></>
            case "Speakers":
                return <></>
            case "Webcam":
                return <></>
            case "CaseFan":
                return <></>
            default:
                return <>
                    <h2 className='font-medium text-sm'>No description for this component</h2>
                </>
        }
    }

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
                    {uiConstructor(category)}
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