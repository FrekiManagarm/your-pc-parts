import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { IconBrandAmazon } from '@tabler/icons-react';
import { DialogContent } from '../ui/dialog';
import { BatteryCharging, BookmarkCheck, BookmarkX, Cpu, PackagePlus } from 'lucide-react';
import Link from 'next/link';
import { FaGauge, FaGaugeHigh, FaDisplay } from 'react-icons/fa6';
import { FaTemperatureHigh } from "react-icons/fa";

type DetailPageProps = {
  title: string;
  imageUrl: string;
  amazonLink: string;
  category: string;
  cores?: number;
  threads?: number;
  cache?: number;
  tdp?: number;
  graphics?: boolean;
  memory?: number;
  smt?: boolean;
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
  proc_unit?: number;
}

const DetailPage = ({ title,
  category,
  imageUrl,
  amazonLink,
  cores,
  frequency,
  threads,
  frequency_boost,
  memory,
  airflow,
  aspect_ratio,
  audio, backlit,
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
  write,
  proc_unit,
}: DetailPageProps) => {

  const uiConstructor = (type: string) => {
    switch (type) {
      case 'CPU':
        return <div className='flex flex-col gap-5'>
          <div className='flex gap-16 justify-between items-stretch w-full'>
            <h2 className="font-medium text-sm flex flex-col items-start gap-1">
              <div className='flex items-center gap-1'>
                <Cpu size={15} />
                <p className='font-bold'>Cores / Threads</p>
              </div>
              {cores} cores / {threads} threads
            </h2>
            <h2 className="font-medium text-sm flex flex-col items-start gap-1">
              <div className='flex items-center gap-1'>
                <FaGauge size={15} />
                <p className='font-bold'>Core / Boost clock</p>
              </div>
              {frequency} GHz / {frequency_boost} GHz
            </h2>
          </div>
          <div className='flex gap-16 items-center'>
            <h2 className='font-medium text-sm flex flex-col items-start gap-1'>
              <div className='flex items-center gap-1'>
                <p className='font-bold'>Socket</p>
              </div>
              {socket}
            </h2>
            <h2 className='font-medium text-sm flex flex-col items-start gap-1'>
              <div className='flex items-center gap-1'>
                <p className='font-bold'>Cache</p>
              </div>
              {cache} MB
            </h2>
          </div>
          <div className='flex gap-16 items-center'>
            <h2 className='font-medium text-sm flex flex-col items-start gap-1'>
              <div className='flex items-center gap-1'>
                <FaTemperatureHigh size={15} />
                <p className='font-bold'>TDP</p>
              </div>
              {tdp} W
            </h2>
            <h2 className='font-medium text-sm flex flex-col items-start gap-1'>
              <div className='flex items-center gap-1'>
                <FaDisplay size={15} />
                <p className='font-bold'>Graphics</p>
              </div>
              {graphics ? <BookmarkCheck className='text-green-600' /> : <BookmarkX className='text-red-600' />}
            </h2>
            <h2>
              <p className='font-bold'>SMT</p>
              {smt ? <BookmarkCheck className='text-green-600' /> : <BookmarkX className='text-red-600' />}
            </h2>
          </div>
        </div>
      case 'GPU':
        return <div className='flex flex-col gap-5'>
          <div className='flex gap-16 items-center'>
            <h2 className='font-medium text-sm flex flex-col items-start gap-1'>
              <div className='flex items-center gap-2'>
                <Cpu size={15} />
                <p className='font-bold'>Cores</p>
              </div>
              {proc_unit} units
            </h2>
            <h2 className='font-medium text-sm flex flex-col items-start gap-1'>
              <div className='flex items-center gap-2'>
                <FaGauge size={15} />
                <p className='font-bold'>Core / Boost clock</p>
              </div>
              {frequency} GHz / {frequency_boost} GHz
            </h2>
            <h2 className='font-medium text-sm flex flex-col items-start gap-1'>
              <div className='flex items-center gap-2'>
                <BatteryCharging size={15} />
                <p className='font-bold'>Power</p>
              </div>
              {power} W
            </h2>
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      case "HDD":
        return <div></div>
      case "SSD":
        return <div></div>
      case "Case":
        return <div></div>
      case "Motherboard":
        return <div></div>
      case "RAM":
        return <div></div>
      case "Cooling":
        return <div></div>
      case "PSU":
        return <div></div>
      case "Monitor":
        return <div></div>
      case "SoundCard":
        return <div></div>
      case "Headphones":
        return <div></div>
      case "Keyboard":
        return <div></div>
      case "Mouse":
        return <div></div>
      case "Speakers":
        return <div></div>
      case "Webcam":
        return <div></div>
      case "CaseFan":
        return <div></div>
      default:
        return <>
          <h2 className='font-medium text-sm'>No description for this component</h2>
        </>
    }
  }

  return (
    <DialogContent className='max-w-4xl flex flex-row p-2 bg-white text-primary-foreground'>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={300}
        className='w-1/2 rounded-xl shadow-md'
      />
      <div className='w-1/2 flex flex-col justify-start items-start text-start p-2'>
        <h1 className='font-bold text-2xl text-primary-foreground'>{title}</h1>
        <h2 className="font-semibold my-2 px-2 py-1 rounded-xl text-sm text-white bg-gradient-to-tr from-primary via-secondary to-pink-400 shadow-md">
          {category}
        </h2>
        <div>
          {uiConstructor(category)}
        </div>
        <div className='flex flex-row mt-auto'>
          <Link href={amazonLink} className='flex flex-row justify-center px-3 items-center text-white bg-orange-400 hover:bg-orange-700 transition-colors font-semibold rounded-xl hover:shadow-lg' target='_blank'>
            <IconBrandAmazon />
            <span className='px-1' />
            <p>Find it on Amazon</p>
          </Link>
          <span className='px-1' />
          <Button className='flex flex-row py-5 px-2 rounded-xl bg-secondary text-white font-semibold hover:shadow-lg'>
            <PackagePlus />
            <span className='px-1' />
            <p>Make new configuration</p>
          </Button>
        </div>
      </div>
    </DialogContent>
  )
}

export default DetailPage