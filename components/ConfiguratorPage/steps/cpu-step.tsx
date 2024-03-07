"use client"
import { Button } from '@/components/ui/button'
import useConfiguration from '@/lib/providers/configuratorProvider'

function CPUStep() {

  const { nextStep } = useConfiguration();

  return (
    <div className='w-3/4 p-2 flex flex-col'>
      Bonjour CPU Step
      <Button
        onClick={() => {
          nextStep()
        }}
      >
        Suivant
      </Button>
    </div>
  )
}

export default CPUStep