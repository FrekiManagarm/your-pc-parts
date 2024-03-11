import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button';
import { IconBrandAmazon } from '@tabler/icons-react';
import { DialogContent } from '../ui/dialog';
import { PackagePlus } from 'lucide-react';

type DetailPageProps = {
  title: string;
  imageUrl: string;
  amazonLink: string;
  category: string;
}

const DetailPage = ({ title, amazonLink, category, imageUrl }: DetailPageProps) => {
  return (
    <DialogContent className='max-w-5xl flex flex-row p-2'>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={300}
        className='w-1/2 rounded-xl shadow-md'
      />
      <div className='w-1/2 flex flex-col justify-start items-start text-start p-2'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <h2 className='text-gray-400'>{category}</h2>
        <div className='flex flex-row'>
          <Button className='flex flex-row justify-center items-center text-white bg-orange-400 font-semibold hover:shadow-lg'>
            <IconBrandAmazon />
            <span className='px-1' />
            <p>Find it on Amazon</p>
          </Button>
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