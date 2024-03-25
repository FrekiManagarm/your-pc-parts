import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { IconBrandAmazon } from '@tabler/icons-react';
import { DialogContent } from '../ui/dialog';
import { PackagePlus } from 'lucide-react';
import Link from 'next/link';

type DetailPageProps = {
  title: string;
  imageUrl: string;
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
}

const DetailPage = ({ title, amazonLink, category, imageUrl, cores, frequency, frequency_boost }: DetailPageProps) => {

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
    <DialogContent className='max-w-5xl flex flex-row p-2 bg-white text-primary-foreground'>
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