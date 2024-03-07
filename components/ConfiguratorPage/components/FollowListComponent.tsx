import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

const FollowListComponent = () => {
  return (
    <div className='flex flex-col p-5 bg-white shadow-lg rounded-lg w-1/4'>
      <Accordion type='single' collapsible defaultValue='item-1' className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            Configuration
          </AccordionTrigger>
          <AccordionContent>
            Configuration Follow Content
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Extra Configuration</AccordionTrigger>
          <AccordionContent>
            Configuration Extra Follow Content
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default FollowListComponent