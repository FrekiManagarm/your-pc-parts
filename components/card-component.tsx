import Image from "next/image";
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from "./ui/alert-dialog";
import DetailPage from "./ComponentDetailPage/DetailPage";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Cpu, GaugeCircle, Heart } from "lucide-react";
import { FaGauge, FaGaugeHigh } from "react-icons/fa6";
import { Button } from "./ui/button";

type CardProps = {
    title: string;
    image: string;
    amazonLink: string;
    category: string;
    cores?: number;
    threads?: number;
    cache?: number;
    memory?: number;
    tdp?: number;
    graphics?: boolean;
    smt?: boolean
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
    support?: any;
    cas?: string;
    type?: any;
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
    interf_ace?: string;
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

const CardComponent = ({
    title,
    category,
    image,
    amazonLink,
    cores,
    frequency,
    memory,
    threads,
    frequency_boost,
    airflow,
    aspect_ratio,
    audio,
    backlit,
    bluetooth,
    cache,
    capacity,
    cas,
    channels,
    chipset,
    color,
    configuration,
    connection,
    connection_type,
    digital_audio,
    efficiency,
    enclosure_type,
    focus_type,
    form_factor,
    fov,
    freq_resp,
    frequency_response,
    graphics,
    hand_orientation,
    interf_ace,
    length,
    max_dpi,
    max_memory,
    memory_slots,
    microphone,
    modular,
    modules,
    noise_cancel,
    noise_level,
    os,
    power,
    pressure,
    read,
    refresh_rate,
    resolution,
    resolutions,
    response_time,
    rpm,
    rpm_max,
    rpm_min,
    sample_rate,
    screen_size,
    size,
    smt,
    snr,
    socket,
    speed,
    style,
    support,
    switches,
    tdp,
    tdp_max,
    tenkeyless,
    tracking_method,
    type,
    wattage,
    wifi,
    wireless,
    write
}: CardProps) => {

    const uiConstructor = (type: string) => {
        switch (type) {
            case 'CPU':
                return <div className="flex gap-2">
                    <h2 className="flex text-white font-medium items-center gap-1">
                        <Cpu size={15} />
                        {cores} cores
                    </h2>
                    <h2 className="flex text-white font-medium items-center gap-1">
                        <GaugeCircle size={15} />
                        {frequency} GHz
                    </h2>
                </div>
            case 'GPU':
                return <div className="flex flex-wrap gap-2">
                    <h2 className="flex text-white font-medium items-center gap-1">
                        <GaugeCircle size={15} />
                        {frequency} MHz
                    </h2>
                    <h2 className="flex text-white font-medium items-center gap-1">
                        <Cpu size={15} />
                        {cores} cores
                    </h2>
                </div>
            case "HDD":
                return <div>
                    <h2></h2>
                </div>
            case "SSD":
                return <div>
                    <h2>

                    </h2>
                </div>
            case "Case":
                return <div>
                    <h2></h2>
                </div>
            case "Motherboard":
                return <div>
                    <h2></h2>
                </div>
            case "RAM":
                return <div>
                    <h2></h2>
                </div>
            case "Cooling":
                return <div>
                    <h2></h2>
                </div>
            case "PSU":
                return <div>
                    <h2>

                    </h2>
                </div>
            case "Monitor":
                return <div>
                    <h2></h2>
                </div>
            case "SoundCard":
                return <div>
                    <h2></h2>
                </div>
            case "Headphones":
                return <div>
                    <h2></h2>
                </div>
            case "Keyboard":
                return <div>
                    <h2></h2>
                </div>
            case "Mouse":
                return <div>
                    <h2></h2>
                </div>
            case "Speakers":
                return <div>
                    <h2></h2>
                </div>
            case "Webcam":
                return <div>
                    <h2></h2>
                </div>
            case "CaseFan":
                return <div>
                    <h2></h2>
                </div>
            default:
                return <>
                    <h2 className='font-medium text-sm'>No description for this component</h2>
                </>
        }
    }

    return (
        <div key={title} className="overflow-hidden w-[20rem] rounded-2xl transition duration-200 group bg-card hover:shadow-xl border border-purple-900">
            <div className="w-[20rem] aspect-w-16 aspect-h-10 bg-card rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
                <Image
                    src={image}
                    alt="thumbnail photo"
                    width={325}
                    height={125}
                    objectFit="cover"
                    className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                />
            </div>
            <div className="p-3">
                <h2 className="font-bold mb-2 text-lg text-white">
                    {title}
                </h2>
                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold px-2 w-fit py-1 rounded-xl text-sm text-white bg-gradient-to-tr from-primary via-secondary to-pink-400 shadow-md">
                        {category}
                    </h2>
                    <div>
                        {uiConstructor(category)}
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center mt-10">
                    <Dialog>
                        <DialogTrigger>
                            <div className="relative z-10 px-6 py-2 bg-primary text-white font-bold rounded-xl block text-xs">
                                Read More
                            </div>
                        </DialogTrigger>
                        <DetailPage amazonLink={amazonLink} memory={memory} cores={cores} frequency={frequency} category={category} imageUrl={image} title={title} airflow={airflow} aspect_ratio={aspect_ratio} audio={audio} backlit={backlit} bluetooth={bluetooth} cache={cache} capacity={capacity} cas={cas} channels={channels} chipset={chipset} color={color} configuration={configuration} connection={connection} connection_type={connection_type} digital_audio={digital_audio} efficiency={efficiency} enclosure_type={enclosure_type} focus_type={focus_type} form_factor={form_factor} fov={fov} freq_resp={freq_resp} frequency_boost={frequency_boost} frequency_response={frequency_response} graphics={graphics} hand_orientation={hand_orientation} interf_ace={interf_ace} length={length} max_dpi={max_dpi} max_memory={max_memory} memory_slots={memory_slots} microphone={microphone} modular={modular} modules={modules} noise_cancel={noise_cancel} noise_level={noise_level} os={os} power={power} pressure={pressure} read={read} key={title} refresh_rate={refresh_rate} resolution={resolution} resolutions={resolutions} response_time={response_time} rpm={rpm} rpm_max={rpm_max} rpm_min={rpm_min} sample_rate={sample_rate} screen_size={screen_size} size={size} smt={smt} snr={snr} socket={socket} speed={speed} style={style} support={support} switches={switches} tdp={tdp} tdp_max={tdp_max} tenkeyless={tenkeyless} threads={threads} tracking_method={tracking_method} type={type} wattage={wattage} wifi={wifi} wireless={wireless} write={write} />
                    </Dialog>
                    <button className="w-8 h-8 bg-slate-100 shadow-md flex justify-center items-center rounded-full">
                        <Heart className="fill-red-500" />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default CardComponent