import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { IconBrandAmazon } from '@tabler/icons-react';
import { DialogContent } from '../ui/dialog';
import { Cpu, PackagePlus } from 'lucide-react';
import Link from 'next/link';
import { FaGauge, FaGaugeHigh } from 'react-icons/fa6';

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
}

const DetailPage = ({ title,
  category,
  imageUrl,
  amazonLink,
  cores,
  frequency,
  threads,
  frequency_boost,
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
  write }: DetailPageProps) => {

  const uiConstructor = (type: string) => {
    switch (type) {
      case 'CPU':
        return <div>
          <div>
            <h2 className="font-medium text-sm flex flex-row items-center">
              <Cpu size={15} />
              {cores} cores
            </h2>
            <h2 className="font-medium text-sm flex flex-row items-center">
              <Cpu size={15} />
              {threads}
            </h2>
          </div>
          <div>
            <h2 className="font-medium text-sm flex flex-row items-center">
              <FaGauge size={15} className="text-primary-foreground" />
              {frequency}
            </h2>
            <h2 className="font-medium text-sm flex flex-row items-center">
              <FaGaugeHigh size={15} className="text-primary-foreground" />
              {frequency_boost}
            </h2>
          </div>
          <div>
            <h2>
              {socket}
            </h2>
            <h2>
              {type}
            </h2>
            <h2>
              {cache}
            </h2>
          </div>
          <div>
            <h2>
              {tdp}
            </h2>
            <h2>
              {graphics ? "oui" : "non"}
            </h2>
            <h2>
              {smt ? "oui" : "non"}
            </h2>
          </div>
        </div>
      case 'GPU':
        return <div></div>
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
    <DialogContent className='max-w-5xl flex flex-row p-2 bg-white'>
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
        <div className='flex'>
          {uiConstructor(category)}
        </div>
        <div className='flex flex-row'>
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